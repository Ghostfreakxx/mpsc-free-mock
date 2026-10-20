type Recording = { id: string; timings: { duration: number } };

export function groupRecordings<T extends Recording>(
  titles: readonly string[],
  coverage: readonly { recordings: readonly string[] }[],
  recordings: readonly T[],
) {
  const assigned = new Set<string>();
  const groups = titles.map((title, index) => {
    const ids = coverage[index]?.recordings ?? [];
    const lessons = recordings.filter(lesson => ids.includes(lesson.id) && !assigned.has(lesson.id));
    lessons.forEach(lesson => assigned.add(lesson.id));
    return { title, lessons, duration: lessons.reduce((sum, lesson) => sum + lesson.timings.duration, 0) };
  }).filter(group => group.lessons.length > 0);
  const remaining = recordings.filter(lesson => !assigned.has(lesson.id));
  if (remaining.length) groups.push({ title: "Additional classes", lessons: remaining, duration: remaining.reduce((sum, lesson) => sum + lesson.timings.duration, 0) });
  return groups;
}
