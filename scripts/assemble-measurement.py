import json, subprocess, sys, wave, re
from difflib import SequenceMatcher
from pathlib import Path

root = Path(__file__).resolve().parents[1]
folder = Path(sys.argv[1])
ffmpeg = sys.argv[2]
lesson = json.loads((root / 'app/data/jee-measurements-lecture.json').read_text(encoding='utf-8'))

def stamp(seconds):
    ms = round(seconds * 1000)
    return f'{ms // 3600000:02}:{ms // 60000 % 60:02}:{ms // 1000 % 60:02}.{ms % 1000:03}'

def caption_chunks(script, words, duration):
    # Keep authored text; recognition supplies timing only, including numeric spans.
    tokens = script.split()
    normalize = lambda word: re.sub(r'[^a-z0-9]', '', word.lower())
    matcher = SequenceMatcher(None, list(map(normalize, tokens)),
                              [normalize(w['word']) for w in words], autojunk=False)
    starts = [None] * len(tokens)
    for operation, a, b, c, d in matcher.get_opcodes():
        if operation == 'equal':
            for index in range(a, b):
                starts[index] = words[c + index - a]['start']
        elif b > a:
            left = words[c]['start'] if c < len(words) else duration
            right = words[d]['start'] if d < len(words) else duration
            for index in range(a, b):
                starts[index] = left + (right - left) * (index - a) / (b - a)
    chunks, first = [], 0
    for index, token in enumerate(tokens):
        next_length = len(' '.join(tokens[first:index + 2]))
        if token.endswith(('.', '?', '!')) or next_length > 140 or index == len(tokens) - 1:
            chunks.append((first, ' '.join(tokens[first:index + 1])))
            first = index + 1
    result = []
    for index, (first, text) in enumerate(chunks):
        start = 0 if index == 0 else starts[first]
        end = starts[chunks[index + 1][0]] if index + 1 < len(chunks) else duration
        assert start is not None and end is not None and 0 <= start < end <= duration
        result.append((start, end, text))
    return result

parts, cues, durations, offset = [], [], [], 0
for index, chapter in enumerate(lesson['chapters']):
    wav = folder / f'{index:02}.wav'
    subprocess.run([ffmpeg, '-v', 'error', '-y', '-i', str(folder / f'{index:02}.mp3'), '-ar', '24000', '-ac', '1', str(wav)], check=True)
    with wave.open(str(wav), 'rb') as audio:
        duration = audio.getnframes() / audio.getframerate()
    parts.append(str(wav))
    words = json.loads((folder / f'{index:02}.json').read_text(encoding='utf-8'))['words']
    for start, end, text in caption_chunks(chapter['script'], words, duration):
        cues.append((round(offset + start, 3), round(offset + end, 3), text, index))
    durations.append(duration)
    offset += duration

concat = folder / 'concat.txt'
concat.write_text(''.join(f"file '{part}'\n" for part in parts), encoding='utf-8')
output = root / 'public/lectures/measurements'
output.mkdir(parents=True, exist_ok=True)
if '--captions-only' not in sys.argv:
    subprocess.run([ffmpeg, '-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', str(concat), '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', '24000', '-b:a', '64k', str(output / 'narration-marin.mp3')], check=True)
(output / 'english-v2.vtt').write_text('WEBVTT\n\n' + '\n\n'.join(f'{stamp(start)} --> {stamp(end)}\n{text}' for start, end, text, _ in cues) + '\n', encoding='utf-8')
(root / 'app/data/jee-measurements-timings.json').write_text(json.dumps({'duration': round(offset, 3), 'chapterDurations': durations, 'cues': [{'start': start, 'end': end, 'text': text, 'chapter': index} for start, end, text, index in cues]}, indent=2) + '\n', encoding='utf-8')
print(f'assembled {offset:.1f}s, {len(cues)} chapter captions')
