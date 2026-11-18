import * as nodeProcess from "node:process";
import {
  existsSync,
  readFileSync,
  readdirSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredDirectories = new Set([".git", "node_modules", "dist", "coverage"]);
const errors = [];
const counts = {
  markdownFiles: 0,
  localMarkdownLinks: 0,
  htmlReferences: 0,
  jsonFiles: 0,
  svgFiles: 0,
};

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) return [];
    const absolutePath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolutePath) : [absolutePath];
  });
}

function relative(filePath) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function localTargetExists(sourceFile, target) {
  const withoutAnchor = target.split("#")[0].split("?")[0];
  if (!withoutAnchor) return true;

  let decoded;
  try {
    decoded = decodeURIComponent(withoutAnchor);
  } catch {
    decoded = withoutAnchor;
  }

  if (/^[a-z][a-z\d+.-]*:/i.test(decoded) || decoded.startsWith("//")) {
    return true;
  }

  const candidates = decoded.startsWith("/")
    ? [
        path.resolve(root, decoded.slice(1)),
        path.resolve(root, "public", decoded.slice(1)),
      ]
    : [path.resolve(path.dirname(sourceFile), decoded)];

  return candidates.some((candidate) => existsSync(candidate));
}

const files = walk(root);

for (const filePath of files.filter((item) => item.endsWith(".md"))) {
  counts.markdownFiles += 1;
  const content = readFileSync(filePath, "utf8");
  const links = content.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+[^)]*)?\)/g);

  for (const match of links) {
    const target = match[1].trim();
    if (/^[a-z][a-z\d+.-]*:/i.test(target) || target.startsWith("//")) continue;
    if (target.startsWith("#")) continue;

    counts.localMarkdownLinks += 1;
    if (!localTargetExists(filePath, target)) {
      errors.push(`Broken Markdown link: ${relative(filePath)} -> ${target}`);
    }
  }
}

for (const sourcePath of ["README.md", "index.html"]) {
  const filePath = path.join(root, sourcePath);
  const content = readFileSync(filePath, "utf8");
  const refs = content.matchAll(/(?:src|href)\s*=\s*["']([^"']+)["']/gi);

  for (const match of refs) {
    const target = match[1].trim();
    if (/^[a-z][a-z\d+.-]*:/i.test(target) || target.startsWith("//")) continue;
    if (target.startsWith("#") || target.startsWith("data:")) continue;

    counts.htmlReferences += 1;
    if (!localTargetExists(filePath, target)) {
      errors.push(`Broken HTML asset reference: ${sourcePath} -> ${target}`);
    }
  }
}

const exampleDirectory = path.join(root, "docs", "examples");
for (const filePath of walk(exampleDirectory).filter((item) => item.endsWith(".json"))) {
  counts.jsonFiles += 1;
  try {
    JSON.parse(readFileSync(filePath, "utf8"));
  } catch (error) {
    errors.push(`Invalid JSON: ${relative(filePath)}: ${error.message}`);
  }
}

const assetsDirectory = path.join(root, "docs", "assets");
for (const filePath of walk(assetsDirectory).filter((item) => item.endsWith(".svg"))) {
  counts.svgFiles += 1;
  const svg = readFileSync(filePath, "utf8");
  if (!/<svg\b/.test(svg)) errors.push(`Missing <svg> root: ${relative(filePath)}`);
  if (!/<title\b[^>]*>[^<]+<\/title>/.test(svg)) {
    errors.push(`Missing accessible SVG title: ${relative(filePath)}`);
  }
  if (!/<desc\b[^>]*>[^<]+<\/desc>/.test(svg)) {
    errors.push(`Missing accessible SVG description: ${relative(filePath)}`);
  }
  if (!/<\/svg>\s*$/.test(svg)) {
    errors.push(`SVG does not end with closing tag: ${relative(filePath)}`);
  }
  if (/<script\b/i.test(svg)) {
    errors.push(`Inline script is not allowed in documentation SVG: ${relative(filePath)}`);
  }
  if (/\b(?:href|xlink:href)\s*=\s*["']https?:/i.test(svg)) {
    errors.push(`Remote linked resource in documentation SVG: ${relative(filePath)}`);
  }
}


// Every maintained documentation directory has an index. Fail if a direct
// Markdown, JSON example, or SVG asset is present but not linked from it.
const indexRules = [
  { index: "docs/README.md", directory: "docs", extensions: [".md"], exclude: ["README.md"] },
  { index: "docs/assets/README.md", directory: "docs/assets", extensions: [".svg"] },
  { index: "docs/diagrams/README.md", directory: "docs/diagrams", extensions: [".md"], exclude: ["README.md"] },
  { index: "docs/examples/README.md", directory: "docs/examples", extensions: [".md", ".json"], exclude: ["README.md"] },
  { index: "docs/operations/README.md", directory: "docs/operations", extensions: [".md"], exclude: ["README.md"] },
  { index: "docs/security/README.md", directory: "docs/security", extensions: [".md"], exclude: ["README.md"] },
  { index: "docs/testing/README.md", directory: "docs/testing", extensions: [".md"], exclude: ["README.md"] },
  { index: "docs/templates/README.md", directory: "docs/templates", extensions: [".md"], exclude: ["README.md"] },
];

let indexedFiles = 0;
for (const rule of indexRules) {
  const indexPath = path.join(root, rule.index);
  if (!existsSync(indexPath)) {
    errors.push(`Missing documentation index: ${rule.index}`);
    continue;
  }
  const indexText = readFileSync(indexPath, "utf8");
  const linked = new Set();
  for (const match of indexText.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+[^)]*)?\)/g)) {
    const raw = match[1].split("#")[0].split("?")[0];
    if (!raw || /^[a-z][a-z\\d+.-]*:/i.test(raw) || raw.startsWith("//")) continue;
    let decoded = raw;
    try { decoded = decodeURIComponent(raw); } catch {}
    linked.add(path.resolve(path.dirname(indexPath), decoded));
  }
  const excluded = new Set(rule.exclude ?? []);
  for (const name of readdirSync(path.join(root, rule.directory))) {
    if (excluded.has(name)) continue;
    if (!rule.extensions.some((extension) => name.endsWith(extension))) continue;
    const target = path.join(root, rule.directory, name);
    indexedFiles += 1;
    if (!linked.has(target)) {
      errors.push(`File missing from ${rule.index}: ${rule.directory}/${name}`);
    }
  }
}


if (errors.length > 0) {
  nodeProcess.default.stderr.write(`[docs:check] Failed with ${errors.length} issue(s):\n`);
  for (const error of errors) nodeProcess.default.stderr.write(`- ${error}\n`);
  nodeProcess.default.exitCode = 1;
} else {
  nodeProcess.default.stdout.write(
    `[docs:check] Passed. ${counts.markdownFiles} Markdown files, ${counts.localMarkdownLinks} local Markdown links, ${counts.htmlReferences} HTML references, ${counts.jsonFiles} JSON examples, ${counts.svgFiles} SVG assets, and ${indexedFiles} indexed directory files checked.\n`,
  );
}
