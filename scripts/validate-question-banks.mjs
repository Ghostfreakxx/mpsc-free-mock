import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bankFiles = [
  "app/mock-test/page.tsx",
  "app/neet/page.tsx",
  "app/data/cuetPgQuestions.ts",
  "app/data/mizoQuestions.ts",
];
let errorCount = 0;

function readLiteral(node, sourceFile) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.map((element) => readLiteral(element, sourceFile));
  }
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(
      node.properties
        .filter(ts.isPropertyAssignment)
        .map((property) => [
          property.name.getText(sourceFile).replace(/^['"]|['"]$/g, ""),
          readLiteral(property.initializer, sourceFile),
        ]),
    );
  }
  return undefined;
}

function questionArray(sourceFile) {
  let found;
  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ["questions", "cuetPgQuestions", "mizoQuestions"].includes(node.name.getText(sourceFile)) &&
      node.initializer
    ) {
      if (ts.isArrayLiteralExpression(node.initializer)) {
        found = node.initializer;
      } else if (ts.isCallExpression(node.initializer)) {
        found = node.initializer;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return found;
}

function normalize(value) {
  return String(value ?? "").normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim();
}

for (const relativePath of bankFiles) {
  const filePath = path.join(root, relativePath);
  const text = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(
    filePath,
    text,
    ts.ScriptTarget.Latest,
    true,
    filePath.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  if (sourceFile.parseDiagnostics.length > 0) {
    for (const diagnostic of sourceFile.parseDiagnostics) {
      const position = sourceFile.getLineAndCharacterOfPosition(diagnostic.start ?? 0);
      errorCount += 1;
      console.error(
        `${relativePath}:${position.line + 1}:${position.character + 1}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, " ")}`,
      );
    }
    continue;
  }
  const array = questionArray(sourceFile);
  const elements = array
    ? ts.isArrayLiteralExpression(array)
      ? array.elements
      : array.arguments
    : [];
  const questions = elements
    .filter(ts.isObjectLiteralExpression)
    .map((node) => ({
      line: sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1,
      ...readLiteral(node, sourceFile),
    }));
  const seenPrompts = new Map();
  const seenIds = new Map();

  function report(question, message) {
    errorCount += 1;
    console.error(`${relativePath}:${question.line}: ${message}`);
  }

  for (const question of questions) {
    const label = question.subject ?? question.category ?? "Uncategorized";
    if (!normalize(question.question)) report(question, "missing question text");
    if (!Array.isArray(question.options) || question.options.length !== 4) {
      report(question, "must have exactly four answer options");
      continue;
    }
    const normalizedOptions = question.options.map(normalize);
    if (normalizedOptions.some((option) => !option)) {
      report(question, "answer options cannot be empty");
    }
    if (new Set(normalizedOptions).size !== 4) {
      report(question, "answer options must be distinct");
    }
    if (!normalizedOptions.includes(normalize(question.answer))) {
      report(question, "correct answer must match one of the options");
    }
    if (!normalize(question.explanation)) report(question, "missing explanation");

    const promptKey = JSON.stringify([
      normalize(label),
      normalize(question.question),
      normalize(question.answer),
    ]);
    const prior = seenPrompts.get(promptKey);
    if (prior) {
      report(question, `duplicate prompt and answer (first seen on line ${prior})`);
    } else {
      seenPrompts.set(promptKey, question.line);
    }

    const idKey = JSON.stringify([
      normalize(question.subject),
      normalize(question.category),
      question.question,
      question.options,
      question.answer,
    ]);
    const priorId = seenIds.get(idKey);
    if (priorId) report(question, `duplicate question record (first seen on line ${priorId})`);
    else seenIds.set(idKey, question.line);
  }

  const counts = new Map();
  for (const question of questions) {
    const label = question.subject ?? question.category ?? "Uncategorized";
    counts.set(label, (counts.get(label) ?? 0) + 1);
  }
  console.log(
    `${relativePath}: ${questions.length} questions across ${counts.size} sections`,
  );
}

if (errorCount > 0) {
  console.error(`Question bank validation failed with ${errorCount} issue(s).`);
  process.exitCode = 1;
} else {
  console.log("Question bank validation passed.");
}
