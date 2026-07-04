import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const srcDir = path.join(root, "src");
const publicDir = path.join(root, "public");

async function collectFiles(dir, extSet, acc = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectFiles(fullPath, extSet, acc);
      continue;
    }
    if (extSet.has(path.extname(entry.name))) {
      acc.push(fullPath);
    }
  }
  return acc;
}

async function main() {
  const files = await collectFiles(srcDir, new Set([".ts", ".tsx"]));
  const imageRegex = /["'`]\/images\/[^"'`]+\.(png|jpg|jpeg|webp|gif|svg)["'`]/gi;
  const refs = new Set();

  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    for (const match of content.matchAll(imageRegex)) {
      refs.add(match[0].slice(1, -1));
    }
  }

  const missing = [];
  for (const ref of refs) {
    const fullPath = path.join(publicDir, ref.replace(/^\//, ""));
    try {
      await fs.access(fullPath);
    } catch {
      missing.push(ref);
    }
  }

  if (missing.length === 0) {
    console.log("No missing /images/* references found.");
    return;
  }

  console.log("Missing image assets:");
  for (const ref of missing.sort()) {
    console.log(` - ${ref}`);
  }

  process.exitCode = 1;
}

main().catch((error) => {
  console.error("Image audit failed:", error);
  process.exit(1);
});
