import json, subprocess, sys, wave
from pathlib import Path

root = Path(__file__).resolve().parents[1]
folder = Path(sys.argv[1])
ffmpeg = sys.argv[2]
lesson = json.loads((root / 'app/data/jee-measurements-lecture.json').read_text(encoding='utf-8'))

def stamp(seconds):
    ms = round(seconds * 1000)
    return f'{ms // 3600000:02}:{ms // 60000 % 60:02}:{ms // 1000 % 60:02}.{ms % 1000:03}'

parts, cues, offset = [], [], 0
for index, chapter in enumerate(lesson['chapters']):
    wav = folder / f'{index:02}.wav'
    subprocess.run([ffmpeg, '-v', 'error', '-y', '-i', str(folder / f'{index:02}.mp3'), '-ar', '24000', '-ac', '1', str(wav)], check=True)
    with wave.open(str(wav), 'rb') as audio:
        duration = audio.getnframes() / audio.getframerate()
    parts.append(str(wav))
    cues.append((offset, offset + duration, chapter['script'], index))
    offset += duration + 0.4

concat = folder / 'concat.txt'
concat.write_text(''.join(f"file '{part}'\n" for part in parts), encoding='utf-8')
output = root / 'public/lectures/measurements'
output.mkdir(parents=True, exist_ok=True)
subprocess.run([ffmpeg, '-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', str(concat), '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', '24000', '-b:a', '64k', str(output / 'narration-marin.mp3')], check=True)
(output / 'english.vtt').write_text('WEBVTT\n\n' + '\n\n'.join(f'{stamp(start)} --> {stamp(end)}\n{text}' for start, end, text, _ in cues) + '\n', encoding='utf-8')
(root / 'app/data/jee-measurements-timings.json').write_text(json.dumps({'duration': offset, 'cues': [{'start': start, 'end': end, 'text': text, 'chapter': index} for start, end, text, index in cues]}, indent=2) + '\n', encoding='utf-8')
print(f'assembled {offset:.1f}s, {len(cues)} chapter captions')
