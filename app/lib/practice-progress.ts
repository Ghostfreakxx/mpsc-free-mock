// Per-exam practice progress kept on the student's device: the automatic "My mistakes" set and how
// each topic is going. A question joins the mistakes set when it is answered wrongly, anywhere in
// that exam's practice, and leaves after two correct answers in a row.

export const MISTAKES_TOPIC = "My mistakes";
export const CORRECT_TO_CLEAR = 2;

export type TopicStats = { answered: number; correct: number };
export type PracticeProgress = {
  // Question id -> correct answers in a row since the last miss.
  mistakes: Record<string, number>;
  topics: Record<string, TopicStats>;
};

export const emptyProgress = (): PracticeProgress => ({ mistakes: {}, topics: {} });
export const progressStorageKey = (exam: string) => `practice-progress:v1:${exam}`;

const count = (value: unknown, max = Number.MAX_SAFE_INTEGER): value is number =>
  Number.isInteger(value) && (value as number) >= 0 && (value as number) <= max;

// Saved progress can be corrupt or edited: keep only well-formed entries.
export function readProgress(raw: string | null): PracticeProgress | null {
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    const { mistakes, topics } = value as Record<string, unknown>;
    const progress = emptyProgress();
    if (mistakes && typeof mistakes === "object" && !Array.isArray(mistakes)) {
      for (const [id, streak] of Object.entries(mistakes)) {
        if (id.length <= 200 && count(streak, CORRECT_TO_CLEAR - 1)) progress.mistakes[id] = streak;
      }
    }
    if (topics && typeof topics === "object" && !Array.isArray(topics)) {
      for (const [topic, stats] of Object.entries(topics)) {
        const { answered, correct } = (stats ?? {}) as Partial<TopicStats>;
        if (topic.length <= 200 && count(answered) && count(correct) && correct <= answered) progress.topics[topic] = { answered, correct };
      }
    }
    return progress;
  } catch {
    return null;
  }
}

export function recordProgress(progress: PracticeProgress, question: { id: string; category: string }, correct: boolean): PracticeProgress {
  const mistakes = { ...progress.mistakes };
  if (!correct) mistakes[question.id] = 0;
  else if (question.id in mistakes) {
    if (mistakes[question.id] + 1 >= CORRECT_TO_CLEAR) delete mistakes[question.id];
    else mistakes[question.id] += 1;
  }
  const previous = progress.topics[question.category] ?? { answered: 0, correct: 0 };
  return {
    mistakes,
    topics: { ...progress.topics, [question.category]: { answered: previous.answered + 1, correct: previous.correct + (correct ? 1 : 0) } },
  };
}

export type TopicSuggestion = { topic: string; accuracy: number | null };

// The topic to suggest next: the lowest accuracy among topics with at least three answers, or else a
// topic the student has not tried yet. Never the topic they are already on.
export function weakestTopic(stats: Record<string, TopicStats>, topics: readonly string[], current: string): TopicSuggestion | null {
  const candidates = topics.filter(topic => topic !== current && topic !== "All" && topic !== MISTAKES_TOPIC);
  const tried = candidates
    .filter(topic => (stats[topic]?.answered ?? 0) >= 3)
    .map(topic => ({ topic, accuracy: stats[topic].correct / stats[topic].answered, answered: stats[topic].answered }))
    .sort((a, b) => a.accuracy - b.accuracy || b.answered - a.answered);
  if (tried.length && tried[0].accuracy < 0.8) return { topic: tried[0].topic, accuracy: Math.round(tried[0].accuracy * 100) };
  const untried = candidates.find(topic => !stats[topic]?.answered);
  if (untried) return { topic: untried, accuracy: null };
  return tried.length ? { topic: tried[0].topic, accuracy: Math.round(tried[0].accuracy * 100) } : null;
}
