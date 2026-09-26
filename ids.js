/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");

const file = "app/mock-test/page.tsx";
const pattern = /^\s*id:\s*\d+,\r?\n/gm;

if (!fs.existsSync(file)) {
  console.error(`Question file not found: ${file}`);
  process.exitCode = 1;
} else {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(pattern) ?? [];

  if (process.argv.includes("--write")) {
    fs.writeFileSync(file, content.replace(pattern, ""));
    console.log(`Removed ${matches.length} question ID lines from ${file}.`);
  } else {
    console.log(`Found ${matches.length} question ID lines in ${file}.`);
    console.log("Run with --write to apply this change.");
  }
}
