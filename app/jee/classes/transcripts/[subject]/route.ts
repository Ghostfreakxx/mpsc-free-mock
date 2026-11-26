import { subjects } from "../../course";
import { lectures } from "../../lessons";
import { formatTranscript } from "../../transcript";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return subjects.map(subject => ({ subject: subject.toLowerCase() }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const name = subjects.find(item => item.toLowerCase() === subject);
  if (!name) return new Response("Not found", { status: 404 });
  const recordings = lectures.filter(item => (item.subject ?? "Physics") === name);
  const text = `Free MPSC Mock · JEE ${name} recorded class transcripts\n${recordings.length} recorded classes · Text edition\n\n`
    + recordings.map(item => formatTranscript(item)).join("\n––––––––––––––––\n\n");
  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="jee-${subject}-transcripts.txt"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
