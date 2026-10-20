export function splitLongCues(cues, limit = 78) {
  return cues.flatMap(cue => {
    if (cue.text.length <= limit) return [cue];
    const groups = [];
    let group = '';
    for (const word of cue.text.split(/\s+/)) {
      if (group && group.length + 1 + word.length > limit) {
        groups.push(group);
        group = '';
      }
      group += (group ? ' ' : '') + word;
    }
    if (group) groups.push(group);
    const total = groups.reduce((sum, text) => sum + text.length, 0);
    let consumed = 0;
    return groups.map((text, index) => {
      const start = cue.start + (cue.end - cue.start) * consumed / total;
      consumed += text.length;
      const end = index === groups.length - 1 ? cue.end : cue.start + (cue.end - cue.start) * consumed / total;
      return {...cue, start, end, text};
    });
  });
}
