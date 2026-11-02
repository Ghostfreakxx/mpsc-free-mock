import { nursingQuestions } from "../../data/nursing-bank";

// The Nursing bank as a static JSON file, built once at build time (see app/data/nursing-bank.ts).
// A plain array: loadQuestionBank passes it through unchanged.
export const dynamic = "force-static";

export function GET() {
  return Response.json(nursingQuestions, {
    headers: { "Cache-Control": "public, max-age=600, stale-while-revalidate=86400" },
  });
}
