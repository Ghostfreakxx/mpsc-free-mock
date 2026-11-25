import { escapeHtml } from "../../../lib/render-notes";
import { packs } from "../catalog";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() { return packs.map(pack => ({ id: pack.id })); }

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pack = packs.find(item => item.id === id);
  if (!pack) return new Response("Pack not found", { status: 404 });
  const e = escapeHtml;
  const audio = pack.assets.filter(asset => asset.kind === "audio");
  const captions = pack.assets.filter(asset => asset.kind === "captions");
  const sections = pack.recordings.map((recording, index) => {
    const chapters = pack.chapter === undefined ? recording.segments : [recording.segments[pack.chapter]];
    return `<section><h2>${e(recording.title)}</h2>
      <video controls preload="none" playsinline aria-label="Narration with captions" src="${e(audio[index].path)}">
        <track kind="captions" label="English" srclang="en" src="${e(captions[index].path)}" default>
      </video>
      <details><summary>Read the transcript and notes</summary>
      ${chapters.map(chapter => `<section><h3>${e(chapter.title)}</h3><p>${e(chapter.formula)}</p>
      <ul>${chapter.steps.map(step => `<li>${e(step)}</li>`).join("")}</ul><p>${e(chapter.english)}</p></section>`).join("")}
      </details>
    </section>`;
  }).join("");
  return new Response(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(pack.title)} · Free MPSC Mock</title>
<style>body{background:#201815;color:#fff0da;max-width:60rem;margin:auto;padding:1rem;font:1rem/1.6 system-ui,sans-serif}
a{color:#f4c58b} video{display:block;width:min(100%,32rem);height:10rem;background:#15110f} section{margin-block:1.5rem}
summary{cursor:pointer} :focus-visible{outline:2px solid currentColor;outline-offset:4px}</style></head>
<body><main><a href="/jee/offline-learning">Back to offline learning</a><h1>${e(pack.title)}</h1>
<p>${e(pack.description)} Pack version ${pack.version}.</p>
<p>Narration uses the original recorded audio. Use the player controls to seek or turn captions on.</p>${sections}</main></body></html>`, {
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=0, must-revalidate" },
  });
}
