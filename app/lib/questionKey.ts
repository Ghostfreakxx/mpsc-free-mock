/**
 * Derives a stable numeric id for each question in a static array, based on
 * its position in that original (unfiltered, unshuffled) array. Used to key
 * bookmarks so they stay attached to the right question regardless of the
 * current shuffle order or category/subject filter.
 */
export function createQuestionKeyer<T extends object>(pool: T[]) {
  const indexByQuestion = new WeakMap<T, number>();

  pool.forEach((question, index) => {
    indexByQuestion.set(question, index);
  });

  return (question: T | undefined): number => {
    if (!question) return -1;
    return indexByQuestion.get(question) ?? -1;
  };
}
