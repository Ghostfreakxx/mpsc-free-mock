import type { NotePack, Topic, SourceId } from "../data/reviewed-content";

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);
}

export function renderNotes(pack: NotePack, topics: Topic[], sources: Record<SourceId, { title: string; url: string }>, revision: string): string {
  const e = escapeHtml;
  const selected = pack.topicIds.map(id => topics.find(topic => topic.id === id));
  if (selected.some(topic => !topic)) throw new Error("Unknown note topic");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${e(pack.title)}</title><style>
    *{box-sizing:border-box}body{font:17px/1.65 Georgia,serif;color:#182c28;background:#fff;margin:0 auto;padding:36px 24px;max-width:820px}header{border-bottom:3px solid #286653;padding-bottom:24px}h1{font-size:32px;line-height:1.2}h2{font-size:23px;margin-top:32px}h3{font-size:18px}p,li,a{overflow-wrap:anywhere}a{color:#175c8a}.meta{font:13px/1.6 Arial,sans-serif;color:#525c60}.pitfall{border-left:3px solid #b75b45;padding-left:16px}article{border-bottom:1px solid #d8dfdc;padding-bottom:24px}.question{break-inside:avoid;margin:20px 0}.answers{border-top:1px solid #d8dfdc;margin-top:24px}footer{margin-top:24px}@media print{body{max-width:none;padding:0;font-size:11pt}h1{font-size:24pt}h2,h3{break-after:avoid}a{color:#182c28}.answers{break-before:page}}@page{size:A4;margin:18mm}
    </style></head><body><header><p class="meta">MPSC FREE MOCK / SOURCE-CHECKED FOUNDATION SERIES</p><h1>${e(pack.title)}</h1><p>Foundation revision only; not a complete syllabus or exam prediction.</p><p class="meta">Edition ${e(revision)}. Original summaries and practice, not official examination questions. This document opens offline and is print-ready.</p></header>
    <nav aria-label="Contents"><h2>Contents</h2><ol>${selected.map(topic => `<li><a href="#${e(topic!.id)}">${e(topic!.subject)}: ${e(topic!.title)}</a></li>`).join("")}</ol></nav>
    ${selected.map(topic => {
      const t = topic!; const source = sources[t.sourceId];
      return `<article id="${e(t.id)}"><p class="meta">${e(t.subject)}</p><h2>${e(t.title)}</h2>${t.notes.map(note => `<p>${e(note)}</p>`).join("")}<p class="pitfall"><strong>Common pitfall:</strong> ${e(t.pitfall)}</p><h3>Self-check</h3>${t.questions.map(([prompt, options], index) => `<div class="question"><p><strong>${index + 1}. ${e(prompt)}</strong></p><ol type="A">${options.map(option => `<li>${e(option)}</li>`).join("")}</ol></div>`).join("")}<p class="meta">Reference: <a href="${e(source.url)}">${e(source.title)}</a><br>${e(source.url)}</p></article>`;
    }).join("")}
    <section class="answers"><h2>Answers and reasoning</h2>${selected.map(topic => `<h3>${e(topic!.subject)}</h3><ol>${topic!.questions.map(([, options, answerIndex, explanation, location]) => `<li><strong>${String.fromCharCode(65 + answerIndex)}. ${e(options[answerIndex])}</strong> ${e(explanation)} <span class="meta">[${e(location)}]</span></li>`).join("")}</ol>`).join("")}</section><footer class="meta">Independent study resource. Source organisations do not endorse this site. Consult the current official syllabus and notification for your examination. References checked ${e(revision)}; constitutional content refers to the stated 2024 edition.</footer></body></html>`;
}
