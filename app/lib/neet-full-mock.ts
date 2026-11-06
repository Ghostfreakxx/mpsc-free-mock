import { examConfigs, selectQuestions, type PoolQuestion } from './exam-simulator';

// Every paper includes all 50 units. Unit quotas are a practice blueprint, not NTA weightages.
export function selectNeetFullMock(pool: readonly PoolQuestion[], seed: number, challenge = false): PoolQuestion[] {
  const paper: PoolQuestion[] = [];
  const ids = new Set(pool.map(q => q.id));
  const stems = new Set(pool.map(q => q.question.trim().toLowerCase()));
  if (ids.size !== pool.length || stems.size !== pool.length) throw new Error('Duplicate mock questions');
  for (const [subject, unitCount, count] of [['Physics', 20, 45], ['Chemistry', 20, 45], ['Biology', 10, 90]] as const) {
    const questions = pool.filter(q => q.subject === subject);
    const categories = [...new Set(questions.map(q => q.category))].sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
    if (categories.length !== unitCount) throw new Error(`Incomplete ${subject} unit coverage`);
    const offset = (seed >>> 0) % unitCount;
    for (let i = 0; i < unitCount; i++) {
      const quota = Math.floor(count / unitCount) + ((i - offset + unitCount) % unitCount < count % unitCount ? 1 : 0);
      const group = questions.filter(q => q.category === categories[i]);
      if (group.length < quota || group.some(q => q.options.length !== 4 || !q.options.includes(q.answer))) throw new Error(`Incomplete ${categories[i]} question pool`);
      const harder = group.filter(q => q.challenge);
      const foundation = group.filter(q => !q.challenge);
      if (challenge && harder.length === 0) throw new Error(`Missing challenge question: ${categories[i]}`);
      const chosen = challenge ? selectQuestions(examConfigs.neet, harder, 1, seed + i) : [];
      if (foundation.length < quota - chosen.length) throw new Error(`Incomplete foundation pool: ${categories[i]}`);
      paper.push(...chosen, ...selectQuestions(examConfigs.neet, foundation, quota - chosen.length, seed + i * 997));
    }
  }
  return paper;
}
