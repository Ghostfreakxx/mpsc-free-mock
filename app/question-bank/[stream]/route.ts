import type { Stream } from "../../data/reviewed-content";
import { mpscTranslations, practiceBankFile, practiceQuestions } from "../../data/practice-data";

// Static JSON files generated at build time: one per stream, plus the MPSC draft Mizo translations.
// Practice pages and the exam simulator fetch only the file they need, so page bundles and link
// prefetches stay small, and the browser and service worker cache each file once for every page.
const streams: Stream[] = ["mpsc", "neet", "jee", "cuet-pg"];
const banks = [...streams, "mpsc-mizo"] as const;
type Bank = (typeof banks)[number];

export const dynamicParams = false;

export function generateStaticParams() {
  return banks.map(stream => ({ stream }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ stream: string }> }) {
  const { stream } = await params;
  if (!banks.includes(stream as Bank)) return new Response("Unknown question bank", { status: 404 });
  const body = stream === "mpsc-mizo" ? mpscTranslations(practiceQuestions("mpsc")) : practiceBankFile(stream as Stream);
  return Response.json(body, {
    // Short browser cache with background refresh; a deploy replaces the file on the CDN.
    headers: { "Cache-Control": "public, max-age=600, stale-while-revalidate=86400" },
  });
}
