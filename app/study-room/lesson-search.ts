const stopWords = new Set([
  "a", "an", "are", "the", "and", "about", "what", "which", "when", "where", "who", "how", "why",
  "is", "in", "of", "for", "to", "do", "does", "did", "please", "explain", "tell", "me", "can", "you",
  "it", "hi", "eng", "nge", "chu", "rawh",
]);

const synonyms: Record<string, string> = {
  latitudes: "latitude", parallels: "latitude", longitudes: "longitude",
  parliament: "legislature", legislatures: "legislature", danpui: "constitution",
  rights: "right", remedies: "remedy", inflationary: "inflation",
  markets: "market", cells: "cell", atoms: "atom", isotopes: "isotope",
  forces: "force", verbs: "verb", harappa: "harappan",
};

function terms(text: string) {
  return [...new Set((text.normalize("NFKC").toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [])
    .filter(word => !stopWords.has(word))
    .map(word => Object.hasOwn(synonyms, word) ? synonyms[word] : word))];
}

function oneEditApart(a: string, b: string) {
  if (Math.min(a.length, b.length) < 4 || Math.abs(a.length - b.length) > 1) return false;
  const first = [...a].findIndex((letter, index) => letter !== b[index]);
  if (first === -1) return a.length !== b.length;
  if (a.length > b.length) return a.slice(first + 1) === b.slice(first);
  if (a.length < b.length) return a.slice(first) === b.slice(first + 1);
  return a.slice(first + 1) === b.slice(first + 1)
    || (a[first] === b[first + 1] && a[first + 1] === b[first] && a.slice(first + 2) === b.slice(first + 2));
}

function matchScore(query: string, words: string[]) {
  if (words.includes(query)) return 2;
  return words.some(word => oneEditApart(word, query)) ? 1 : 0;
}

export function searchLessons<T extends { title: string }>(
  lessons: T[],
  question: string,
  excerpts: (lesson: T) => string[],
) {
  const query = terms(question);
  if (!query.length) return;
  let best: { lesson: T; points: string[]; score: number } | undefined;
  for (const lesson of lessons) {
    const title = terms(lesson.title);
    const paragraphs = excerpts(lesson).map(text => ({ text, words: terms(text) }));
    const combined = [...new Set([...title, ...paragraphs.flatMap(item => item.words)])];
    const matches = query.map(word => matchScore(word, combined));
    if (matches.filter(Boolean).length < Math.ceil(query.length * 0.75)) continue;
    const score = matches.reduce<number>((total, value, index) => total + value + matchScore(query[index], title), 0);
    if (best && best.score >= score) continue;
    const relevant = paragraphs.map(({ text, words }) => ({
      text, score: query.reduce((total, word) => total + matchScore(word, words), 0),
    })).filter(item => item.score > 0).sort((a, b) => b.score - a.score);
    best = { lesson, score, points: (relevant.length ? relevant : paragraphs).slice(0, 2).map(item => item.text) };
  }
  return best;
}
