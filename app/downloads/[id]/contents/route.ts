import { notePacks } from "../../../data/reviewed-content";
import { packContents } from "../../../data/practice-data";

// Static JSON for one pack's notes, loaded when a student opens "Contents and sources".
export const dynamicParams = false;

export function generateStaticParams() {
  return notePacks.map(pack => ({ id: pack.id }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const contents = packContents(id);
  if (!contents) return new Response("Notes not found", { status: 404 });
  return Response.json(contents, { headers: { "Cache-Control": "public, max-age=600, stale-while-revalidate=86400" } });
}
