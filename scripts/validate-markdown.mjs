import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignored = new Set([".git", "node_modules", "dist", "coverage"]);
const knownMermaidTypes = new Set([
  "flowchart", "graph", "sequenceDiagram", "stateDiagram", "stateDiagram-v2",
  "classDiagram", "erDiagram", "journey", "gantt", "pie", "gitGraph",
  "mindmap", "timeline", "quadrantChart", "C4Context", "block-beta",
  "sankey-beta", "xychart-beta", "architecture-beta", "requirementDiagram",
  "packet-beta", "kanban", "treemap-beta",
]);
const errors = [];
let markdownFiles = 0;
let fencedBlocks = 0;
let mermaidBlocks = 0;

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && ignored.has(entry.name)) return [];
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function rel(filePath) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function inspectMarkdown(filePath) {
  const content = readFileSync(filePath, "utf8");
  const lines = content.split("\n");

  if (!content.endsWith("\n")) {
    errors.push(`${rel(filePath)}: missing final newline`);
  }
  if (content.includes("\r")) {
    errors.push(`${rel(filePath)}: CR characters found; use LF line endings`);
  }

  let fence = null;
  let fenceLength = 0;
  let fenceStartLine = 0;
  let fenceLanguage = "";
  let mermaidFirstLine = "";

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const match = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);

    if (!fence && match) {
      fence = match[1][0];
      fenceLength = match[1].length;
      fenceStartLine = index + 1;
      fenceLanguage = match[2].trim().split(/\s+/)[0].toLowerCase();
      mermaidFirstLine = "";
      fencedBlocks += 1;
      continue;
    }

    if (fence && match && match[1][0] === fence && match[1].length >= fenceLength && match[2].trim() === "") {
      if (fenceLanguage === "mermaid") {
        mermaidBlocks += 1;
        const firstLine = mermaidFirstLine.trim().split(/\s+/)[0];
        if (!knownMermaidTypes.has(firstLine)) {
          errors.push(`${rel(filePath)}:${fenceStartLine}: unrecognized Mermaid diagram type "${firstLine || "(empty)"}"`);
        }
      }
      fence = null;
      fenceLength = 0;
      fenceLanguage = "";
      continue;
    }

    if (fence && fenceLanguage === "mermaid" && !mermaidFirstLine && line.trim() && !line.trim().startsWith("%%")) {
      mermaidFirstLine = line;
    }
  }

  if (fence) {
    errors.push(`${rel(filePath)}:${fenceStartLine}: unclosed fenced code block`);
  }
}

for (const filePath of walk(root).filter((item) => item.endsWith(".md"))) {
  markdownFiles += 1;
  inspectMarkdown(filePath);
}

if (errors.length) {
  process.stderr.write(`[markdown:structure] Failed with ${errors.length} issue(s):\n`);
  for (const error of errors) process.stderr.write(`- ${error}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    `[markdown:structure] Passed. ${markdownFiles} Markdown files, ${fencedBlocks} fenced blocks, and ${mermaidBlocks} Mermaid diagrams checked.\n`,
  );
}
