import neetChallengeBatch4 from "../../data/neet-challenge-batch4.json";
import neetChallengeRotation from "../../data/neet-challenge-rotation.json";
import neetChallengeExpansion from "../../data/neet-challenge-expansion.json";
import neetChallenge from "../../data/neet-challenge-mock.json";
import neetFullMock from "../../data/neet-full-mock.json";
import type { Stream } from "../../data/reviewed-content";
import { mpscTranslations, practiceBankFile, practiceQuestions } from "../../data/practice-data";
import { publishedLawQuestions } from "../../data/law-mjs-bank";

// Static JSON files generated at build time: one per stream, the MPSC draft Mizo translations, and the
// Mizoram Judicial Service law bank (published questions only; flagged ones wait for review).
// Practice pages and the exam simulator fetch only the file they need, so page bundles and link
// prefetches stay small, and the browser and service worker cache each file once for every page.
const streams: Stream[] = ["mpsc", "neet", "jee", "cuet-pg"];
const banks = [...streams, "mpsc-mizo", "mjs-law", "neet-full-mock", "neet-full-mock-v2", "neet-full-mock-v3", "neet-full-mock-v4", "neet-full-mock-v5"] as const;
type Bank = (typeof banks)[number];

export const dynamicParams = false;

export function generateStaticParams() {
  return banks.map(stream => ({ stream }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ stream: string }> }) {
  const { stream } = await params;
  if (!banks.includes(stream as Bank)) return new Response("Unknown question bank", { status: 404 });
  const body = stream === "mpsc-mizo" ? mpscTranslations(practiceQuestions("mpsc"))
    : stream === "mjs-law" ? publishedLawQuestions()
    : stream === "neet-full-mock-v5" ? [...neetFullMock, ...neetChallenge, ...neetChallengeExpansion, ...neetChallengeRotation, ...neetChallengeBatch4]
    : stream === "neet-full-mock-v4" ? [...neetFullMock, ...neetChallenge, ...neetChallengeExpansion, ...neetChallengeRotation]
    : stream === "neet-full-mock-v3" ? [...neetFullMock, ...neetChallenge, ...neetChallengeExpansion]
    : stream === "neet-full-mock-v2" ? [...neetFullMock, ...neetChallenge]
    : stream === "neet-full-mock" ? neetFullMock
    : practiceBankFile(stream as Stream);
  return Response.json(body, {
    // Short browser cache with background refresh; a deploy replaces the file on the CDN.
    headers: { "Cache-Control": "public, max-age=600, stale-while-revalidate=86400" },
  });
}
