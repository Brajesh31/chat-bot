import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const readJson = (relativePath) =>
  JSON.parse(readFileSync(path.join(root, relativePath), "utf8"));

const readText = (relativePath) =>
  readFileSync(path.join(root, relativePath), "utf8");

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

test("the documentation validator is available through npm scripts", () => {
  const packageJson = readJson("package.json");
  assert.equal(packageJson.scripts["docs:check"], "node scripts/validate-docs.mjs");
  assert.equal(packageJson.scripts["markdown:check"], 'npx --yes markdownlint-cli2@0.24.1 "**/*.md"');
  assert.ok(existsSync(path.join(root, "scripts", "validate-markdown.mjs")));
  assert.ok(existsSync(path.join(root, "scripts", "validate-docs.mjs")));
  assert.ok(existsSync(path.join(root, "scripts", "README.md")));
});

test("the repository pins and tests maintained Node.js LTS lines", () => {
  assert.equal(readText(".nvmrc").trim(), "26");
  const ci = readText(".github/workflows/ci.yml");
  assert.match(ci, /node-version:\s*\[22,\s*24,\s*26\]/);
  assert.match(ci, /npm run docs:check/);
  assert.match(ci, /npm run build[\s\S]*npm audit --audit-level=high/);
});

test("security and documentation workflows are present", () => {
  for (const relativePath of [
    ".github/workflows/codeql.yml",
    ".github/workflows/docs-validation.yml",
    ".github/workflows/dependency-review.yml",
    ".github/workflows/gitleaks.yml",
    ".github/workflows/markdown-lint.yml",
    ".github/dependency-review-config.yml",
    ".markdownlint-cli2.jsonc",
    ".gitleaks.toml",
  ]) {
    assert.ok(existsSync(path.join(root, relativePath)), `missing ${relativePath}`);
  }
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
  const html = readText("index.html");
  assert.match(html, /href="\/chatbot\.svg"/);
  assert.ok(existsSync(path.join(root, "public", "chatbot.svg")));
  assert.doesNotMatch(html, /vite\.svg/i);
});

test("all documentation SVG assets are indexed and accessible", () => {
  const assetsDirectory = path.join(root, "docs", "assets");
  const assets = readdirSync(assetsDirectory)
    .filter((name) => name.endsWith(".svg"));

  assert.ok(assets.length >= 7, "expected logo, banner, and visual asset set");

  const index = readText("docs/assets/README.md");
  for (const asset of assets) {
    assert.ok(index.includes(`(${asset})`), `asset not indexed: ${asset}`);
    const svg = readText(path.join("docs", "assets", asset));
    assert.match(svg, /<svg\b/);
    assert.match(svg, /<title\b/);
    assert.match(svg, /<desc\b/);
    assert.match(svg, /<\/svg>/);
  }
});

test("the app stylesheet has base layout rules", () => {
  const stylesheet = readText("src/App.css");
  assert.match(stylesheet, /\.container/);
  assert.match(stylesheet, /\.chatbot-popup/);
});

test("the browser verification guide distinguishes manual checks from automation", () => {
  const guide = readText("docs/BROWSER_VERIFICATION.md");
  assert.match(guide, /Manual Browser Verification/i);
  assert.match(guide, /not run/i);
});

test("the repository completion matrix separates applicable work from outstanding checks", () => {
  const matrix = readText("docs/REPOSITORY_COMPLETION.md");
  assert.match(matrix, /Not applicable/i);
  assert.match(matrix, /Remaining manual verification/i);
});

test("documentation and Markdown structural validators pass", () => {
  for (const script of ["scripts/validate-docs.mjs", "scripts/validate-markdown.mjs"]) {
    const result = spawnSync(process.execPath, [path.join(root, script)], {
      cwd: root,
      encoding: "utf8",
    });
    assert.equal(result.status, 0, `${script} failed:\\n${result.stdout}\\n${result.stderr}`);
  }
});

test("the test handbook describes the Node.js built-in test runner", () => {
  const handbook = readText("docs/testing/TESTING_STRATEGY.md");
  assert.match(handbook, /built-in test runner/i);
  assert.doesNotMatch(handbook, /Vitest, jsdom, and Testing Library are used/i);
});
