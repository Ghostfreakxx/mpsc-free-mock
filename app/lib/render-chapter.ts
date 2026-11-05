import type { Block, Chapter } from "../data/modern-history/types.ts";
import { escapeHtml } from "./render-notes.ts";
import { boldRuns } from "./rich-text.ts";

// Builds the offline copy of a history chapter: one self-contained HTML file.
// Escapes every value, then turns **bold** runs and line breaks into markup.
function rich(text: string): string {
  return text.split("\n").map(line => boldRuns(line).map(run => run.bold ? `<strong>${escapeHtml(run.text)}</strong>` : escapeHtml(run.text)).join("")).join("<br>");
}

function blocks(items: Block[]): string {
  return items.map(block => {
    switch (block.type) {
      case "p": return `<p>${rich(block.text)}</p>`;
      case "h3": return `<h3>${escapeHtml(block.text)}</h3>`;
      case "list": { const tag = block.ordered ? "ol" : "ul"; return `<${tag}>${block.items.map(item => `<li>${rich(item)}</li>`).join("")}</${tag}>`; }
      case "table": return `<div class="table"><table><thead><tr>${block.head.map(cell => `<th>${escapeHtml(cell)}</th>`).join("")}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td>${rich(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      case "note": return `<aside><strong>${escapeHtml(block.label)}</strong><p>${rich(block.text)}</p></aside>`;
    }
  }).join("");
}

export function renderChapter(chapter: Chapter): string {
  const e = escapeHtml;
  const letters = ["A", "B", "C", "D"];
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${e(`Chapter ${chapter.number}: ${chapter.title}`)}</title><style>
*{box-sizing:border-box}body{font:17px/1.65 Georgia,serif;color:#182c28;background:#fff;margin:0 auto;padding:28px 18px;max-width:820px}h1{font-size:28px;line-height:1.25}h2{font-size:22px;margin-top:34px;border-top:2px solid #286653;padding-top:16px}h3{font-size:18px}p,li,td{overflow-wrap:anywhere}.meta{font:13px/1.6 Arial,sans-serif;color:#525c60}.table{overflow-x:auto}table{border-collapse:collapse;width:100%;font-size:15px}th,td{border:1px solid #c9d5cf;padding:7px 9px;text-align:left;vertical-align:top}th{background:#eaf2ed}aside{border-left:4px solid #b75b45;background:#fbf3ef;padding:8px 14px;margin:16px 0}dt{font-weight:bold}dd{margin:0 0 10px}details{border:1px solid #d8dfdc;border-radius:6px;padding:8px 12px;margin:8px 0}summary{cursor:pointer;font-weight:bold}.mcq{margin:18px 0}@media print{details{border:0;padding:0}details>*{display:block}summary{list-style:none}}
</style></head><body>
<p class="meta">MPSC FREE MOCK · ${e(chapter.course)} · Chapter ${chapter.number}</p>
<h1>${e(chapter.title)} (${e(chapter.period)})</h1><p>${e(chapter.summary)}</p>
<p class="meta">Free study notes written for MPSC Free Mock. This file opens offline on your phone or computer.</p>
<h2>How to study this chapter</h2><p class="meta">${e(chapter.hours)}</p><ul>${chapter.howToStudy.map(tip => `<li>${rich(tip)}</li>`).join("")}</ul>
<h3>Why it matters for your exam</h3><ul>${chapter.examFocus.map(item => `<li><strong>${e(item.paper)}:</strong> ${e(item.text)}</li>`).join("")}</ul>
<h3>By the end you should be able to</h3><ol>${chapter.outcomes.map(outcome => `<li>${e(outcome)}</li>`).join("")}</ol>
<h2>Key words</h2><dl>${chapter.glossary.map(([term, meaning]) => `<dt>${e(term)}</dt><dd>${e(meaning)}</dd>`).join("")}</dl>
<h2>Timeline</h2><div class="table"><table><tbody>${chapter.timeline.map(([year, event]) => `<tr><th>${e(year)}</th><td>${e(event)}</td></tr>`).join("")}</tbody></table></div>
${chapter.sections.map(section => `<h2>${e(section.title)}</h2>${blocks(section.blocks)}<h3>Check yourself</h3>${section.check.map((item, i) => `<details><summary>${i + 1}. ${e(item.q)}</summary><p>${e(item.a)}</p></details>`).join("")}`).join("")}
<h2>Practice set</h2><h3>Multiple-choice questions</h3>${chapter.mcqs.map((mcq, i) => `<div class="mcq"><p><strong>${i + 1}.</strong> ${rich(mcq.q)}</p><ol type="A">${mcq.options.map(option => `<li>${e(option)}</li>`).join("")}</ol><details><summary>Show answer</summary><p><strong>${letters[mcq.answer]}. ${e(mcq.options[mcq.answer])}</strong> ${e(mcq.why)}</p></details></div>`).join("")}
<h3>Short-answer questions</h3>${chapter.shortAnswers.map((item, i) => `<details><summary>${i + 1}. ${e(item.q)}</summary><ul>${item.points.map(point => `<li>${e(point)}</li>`).join("")}</ul></details>`).join("")}
<h3>Mains-style question</h3><details><summary>${e(chapter.mains.q)}</summary><ol>${chapter.mains.outline.map(point => `<li>${e(point)}</li>`).join("")}</ol></details>
<h2>References</h2><ul>${chapter.references.map(reference => `<li>${e(reference)}</li>`).join("")}</ul>
<p class="meta">Original study notes written from standard textbooks. Review was AI-assisted; check important facts against your textbook before the exam.</p>
</body></html>`;
}
