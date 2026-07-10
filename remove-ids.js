const fs = require("fs");

const file = "app/page.tsx";

let content = fs.readFileSync(file, "utf8");

// Remove lines like: id: 123,
content = content.replace(/^\s*id:\s*\d+,\r?\n/gm, "");

fs.writeFileSync(file, content);

console.log("✅ All id: lines removed.");