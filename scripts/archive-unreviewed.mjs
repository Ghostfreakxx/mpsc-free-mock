import fs from 'node:fs';
import ts from 'typescript';

// One-time lossless extraction of the original literal banks before editorial review.
for (const [file, name, stream] of [
  ['app/mock-test/page.tsx', 'questions', 'mpsc'],
  ['app/neet/page.tsx', 'questions', 'neet'],
  ['app/data/jeeQuestions.ts', 'jeeQuestions', 'jee'],
  ['app/data/cuetPgQuestions.ts', 'cuetPgQuestions', 'cuet-pg'],
]) {
  const original = fs.readFileSync(file, 'utf8');
  const source = ts.createSourceFile(file, original, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let declaration;
  const visit = node => {
    if (ts.isVariableDeclaration(node) && node.name.getText(source) === name) declaration = node;
    ts.forEachChild(node, visit);
  };
  visit(source);
  const initializer = declaration?.initializer;
  if (!initializer || (!ts.isArrayLiteralExpression(initializer) && !ts.isCallExpression(initializer))) throw new Error(`Missing bank: ${file}`);
  function literal(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
    if (ts.isArrayLiteralExpression(node)) return node.elements.map(literal);
    if (ts.isObjectLiteralExpression(node)) return Object.fromEntries(node.properties.map(property => {
      if (!ts.isPropertyAssignment(property)) throw new Error('Non-literal property');
      return [property.name.getText(source).replace(/^['"]|['"]$/g, ''), literal(property.initializer)];
    }));
    throw new Error(`Non-literal content: ${node.getText(source).slice(0, 80)}`);
  }
  const records = [...(ts.isArrayLiteralExpression(initializer) ? initializer.elements : initializer.arguments)].map(literal);
  fs.mkdirSync('content/archive', { recursive: true });
  const archive = `content/archive/${stream}.json`;
  if (fs.existsSync(archive)) throw new Error(`Refusing to overwrite ${archive}`);
  fs.writeFileSync(archive, JSON.stringify(records, null, 2) + '\n');
  const importPath = file.includes('/data/') ? './reviewed-content' : '../data/reviewed-content';
  const updated = original.slice(0, initializer.getStart(source)) + `getReviewedQuestions("${stream}")` + original.slice(initializer.end);
  const importLine = `import { getReviewedQuestions } from "${importPath}";\n`;
  fs.writeFileSync(file, updated.startsWith('"use client";') ? updated.replace('"use client";', '"use client";\n' + importLine) : importLine + updated.replace(/: (JeeQuestion|CuetPgQuestion)\[\](?= =)/, ''));
  console.log(`${stream}: archived ${records.length}; subjects: ${[...new Set(records.map(q => q.subject ?? q.category))].join(', ')}`);
}
