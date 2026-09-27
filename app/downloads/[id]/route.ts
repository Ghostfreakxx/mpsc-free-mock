import { contentRevision, notePacks, sources, topics } from "../../data/reviewed-content";
import { renderNotes } from "../../lib/render-notes";

export function generateStaticParams() {
  return notePacks.map(pack => ({ id: pack.id }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pack = notePacks.find(item => item.id === id);
  if (!pack) return new Response("Notes not found", { status: 404 });
  return new Response(renderNotes(pack, topics, sources, contentRevision), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="${pack.id}-foundation-notes-${contentRevision}.html"`,
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
