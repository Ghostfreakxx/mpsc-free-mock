// Study text marks key words as **bold**. Split it into plain and bold runs so each renderer can
// output them safely (React as text nodes, the download with escapeHtml).
export function boldRuns(text: string): { bold: boolean; text: string }[] {
  return text.split("**").map((part, index) => ({ bold: index % 2 === 1, text: part })).filter(run => run.text);
}
