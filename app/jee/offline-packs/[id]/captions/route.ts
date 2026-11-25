import { packs } from "../../catalog";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return packs.filter(pack => pack.chapter !== undefined).map(pack => ({ id: pack.id }));
}

function stamp(seconds: number) {
  const milliseconds = Math.round(Math.max(0, seconds) * 1000);
  return new Date(milliseconds).toISOString().slice(11, 23);
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pack = packs.find(item => item.id === id);
  const chapter = pack?.chapter;
  const timing = pack?.recordings[0].timings;
  const start = chapter === undefined ? undefined : timing?.chapters?.[chapter]?.start;
  if (start === undefined || !timing) return new Response("Captions not found", { status: 404 });
  const cues = timing.cues.filter(cue => cue.chapter === chapter).map(cue =>
    `${stamp(cue.start - start)} --> ${stamp(cue.end - start)}\n${cue.text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}`);
  return new Response(`WEBVTT\n\n${cues.join("\n\n")}\n`, {
    headers: { "Content-Type": "text/vtt; charset=utf-8", "Cache-Control": "public, max-age=0, must-revalidate" },
  });
}
