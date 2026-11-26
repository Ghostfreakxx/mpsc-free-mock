import { allowedTeachingTester, selectOpenAIApiKey } from "./openai-auth";
import { requestOrigin } from "./request-origin";
import type { ClassroomLesson } from "./classroom-lesson";

type SpokenLesson = Pick<ClassroomLesson, "text" | "language" | "teacher">;
type VoiceProvider = (input: {
  lesson: SpokenLesson;
  apiKey: string;
  signal: AbortSignal;
}) => Promise<Uint8Array>;

// A future route must supply a dedicated atomic voice reservation and a verified
// provider. Neither is registered by the application. The text budget is not reused.
export function createPrivateVoiceAdapter(
  reserve: (request: Request, bytes: number) => Promise<boolean>,
  provider: VoiceProvider,
) {
  return async (request: Request, lesson: SpokenLesson): Promise<Uint8Array | null> => {
    const origin = request.headers.get("origin");
    if (process.env.TOCHHAWNG_PAID_VOICE_MODE !== "private" || request.method !== "POST"
      || (origin && origin !== requestOrigin(request)?.origin) || !allowedTeachingTester(request)) return null;
    const key = selectOpenAIApiKey(process.env);
    const text = typeof lesson.text === "string" ? lesson.text.trim() : "";
    const bytes = Buffer.byteLength(text);
    if (!key || !bytes || bytes > 2400 || lesson.teacher !== "zorami" || lesson.language !== "en") return null;
    try {
      if (request.signal.aborted || !await reserve(request, bytes) || request.signal.aborted) return null;
      const audio = await provider({
        lesson: { ...lesson, text }, apiKey: key, signal: AbortSignal.any([request.signal, AbortSignal.timeout(12_000)]),
      });
      return audio.byteLength > 0 && audio.byteLength <= 1_500_000 ? audio : null;
    } catch {
      return null;
    }
  };
}
