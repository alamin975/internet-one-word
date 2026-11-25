import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Procrastination";

// One word for the whole internet, written as a single line, UTF-8, within the 1-30 gate.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
}

writeEntry();
