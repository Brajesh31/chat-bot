import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const readJson = (relativePath) =>
  JSON.parse(readFileSync(path.join(root, relativePath), "utf8"));

const ignoredDirectories = new Set([".git", "node_modules", "dist", "coverage"]);

const walk = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) return [];
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });

const markdownFiles = [
  ...walk(root).filter((file) => file.endsWith(".md")),
];

const resolveMarkdownTarget = (sourceFile, target) => {
  const withoutAnchor = target.split("#")[0].split("?")[0];
  if (!withoutAnchor) return null;

  let decoded;
  try {
    decoded = decodeURIComponent(withoutAnchor);
  } catch {
    decoded = withoutAnchor;
  }

  if (/^[a-z][a-z\d+.-]*:/i.test(decoded) || decoded.startsWith("//")) return null;
  if (decoded.startsWith("#")) return null;

  return path.resolve(path.dirname(sourceFile), decoded.startsWith("/")
    ? decoded.slice(1)
    : decoded);
};

test("package.json and package-lock.json root dependencies stay aligned", () => {
  const packageJson = readJson("package.json");
  const lock = readJson("package-lock.json");
  assert.deepEqual(lock.packages[""].dependencies, packageJson.dependencies);
  assert.deepEqual(lock.packages[""].devDependencies, packageJson.devDependencies);
});

test("all local Markdown links resolve to repository files", () => {
  const broken = [];

  for (const sourceFile of markdownFiles) {
    const content = readFileSync(sourceFile, "utf8");
    const links = content.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+[^)]*)?\)/g);

    for (const link of links) {
      const target = link[1].trim();
      const resolved = resolveMarkdownTarget(sourceFile, target);
      if (resolved && !existsSync(resolved)) {
        broken.push({
          source: path.relative(root, sourceFile),
          target,
          resolved: path.relative(root, resolved),
        });
      }
    }
  }

  assert.deepEqual(broken, []);
});

test("production HTML references the branded favicon", () => {
  const html = readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /href="\/chatbot\.svg"/);
  assert.ok(existsSync(path.join(root, "public", "chatbot.svg")));
  assert.doesNotMatch(html, /vite\.svg/i);
});

test("all documentation SVG assets have accessible titles and descriptions", () => {
  const assetsDirectory = path.join(root, "docs", "assets");
  const assets = readdirSync(assetsDirectory)
    .filter((name) => name.endsWith(".svg"))
    .map((name) => path.join("docs", "assets", name));

  assert.ok(assets.length >= 5, "expected the documented visual asset set");

  for (const relativePath of assets) {
    const svg = readFileSync(path.join(root, relativePath), "utf8");
    assert.match(svg, /<svg\b/);
    assert.match(svg, /<title\b/);
    assert.match(svg, /<desc\b/);
    assert.match(svg, /<\/svg>/);
  }
});

test("the app stylesheet has base layout rules", () => {
  const stylesheet = readFileSync(path.join(root, "src", "App.css"), "utf8");
  assert.match(stylesheet, /\.container/);
  assert.match(stylesheet, /\.chatbot-popup/);
});

test("the browser verification guide distinguishes manual checks from automation", () => {
  const guide = readFileSync(path.join(root, "docs", "BROWSER_VERIFICATION.md"), "utf8");
  assert.match(guide, /Manual Browser Verification/i);
  assert.match(guide, /not run/i);
});

test("the test handbook describes the Node.js built-in test runner", () => {
  const handbook = readFileSync(path.join(root, "docs/testing/TESTING_STRATEGY.md"), "utf8");
  assert.match(handbook, /built-in test runner/i);
  assert.doesNotMatch(handbook, /Vitest, jsdom, and Testing Library are used/i);
});
