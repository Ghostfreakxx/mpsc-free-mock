type Question = { question: string; options: string[] };

export function readPosition(raw: string | null, duration: number): number {
  const position = Number(raw);
  return Number.isFinite(position) && position >= 0 && position <= duration + 1
    ? Math.min(position, duration) : 0;
}

export function readAnswers(raw: string | null, quiz: Question[]): Record<number, number> {
  try {
    const saved: unknown = JSON.parse(raw ?? "null");
    if (!Array.isArray(saved)) return {};
    const answers: Record<number, number> = {};
    quiz.forEach((question, index) => {
      const entry = saved.find(item => item && typeof item === "object" && item.question === question.question);
      const option = question.options.indexOf(entry?.option);
      if (option >= 0) answers[index] = option;
    });
    return answers;
  } catch { return {}; }
}

export function serializeAnswers(answers: Record<number, number>, quiz: Question[]): string {
  return JSON.stringify(quiz.flatMap((question, index) => {
    const option = question.options[answers[index]];
    return option === undefined ? [] : [{ question: question.question, option }];
  }));
}
