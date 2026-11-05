import { findChapter, historyChapters } from "../../../data/modern-history";
import { renderChapter } from "../../../lib/render-chapter";

export function generateStaticParams() {
  return historyChapters.map(chapter => ({ slug: chapter.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const chapter = findChapter((await params).slug);
  if (!chapter) return new Response("Chapter not found", { status: 404 });
  return new Response(renderChapter(chapter), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="mpsc-modern-history-ch${String(chapter.number).padStart(2, "0")}-${chapter.slug}.html"`,
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
