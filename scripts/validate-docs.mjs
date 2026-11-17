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

if (errors.length > 0) {
  process.stderr.write(`[docs:check] Failed with ${errors.length} issue(s):\n`);
  for (const error of errors) process.stderr.write(`- ${error}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    `[docs:check] Passed. ${counts.markdownFiles} Markdown files, ${counts.localMarkdownLinks} local Markdown links, ${counts.htmlReferences} HTML references, ${counts.jsonFiles} JSON examples, and ${counts.svgFiles} SVG assets checked.\n`,
  );
}
