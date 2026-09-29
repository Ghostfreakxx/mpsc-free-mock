"""Align the original lesson captions to recorded chapter word timestamps."""
import difflib
import json
from pathlib import Path
import re
import subprocess
import sys
import wave

root = Path(__file__).resolve().parents[1]
folder = Path(sys.argv[1])
ffmpeg = sys.argv[2]
lesson = json.loads((root / 'app/data/jee-lecture.json').read_text(encoding='utf-8'))

def tokens(text):
    text = text.lower().replace('metres', 'meters').replace('metre', 'meter')
    return re.findall(r"[a-z0-9]+", text)

def stamp(seconds):
    ms = round(seconds * 1000)
    return f'{ms // 3600000:02}:{ms // 60000 % 60:02}:{ms // 1000 % 60:02}.{ms % 1000:03}'

cues = []
offset = 0
report = []
rate = 24000
with wave.open(str(folder / 'assembled.wav'), 'wb') as output:
    output.setparams((1, 2, rate, 0, 'NONE', 'not compressed'))
    for chapter, segment in enumerate(lesson['segments']):
        source = folder / f'{chapter:02}.mp3'
        wav = folder / f'{chapter:02}.wav'
        subprocess.run([ffmpeg, '-v', 'error', '-y', '-i', str(source), '-ar', str(rate), '-ac', '1', str(wav)], check=True)
        with wave.open(str(wav), 'rb') as audio:
            duration = audio.getnframes() / rate
            output.writeframes(audio.readframes(audio.getnframes()))
        pause = 0.4 if chapter < len(lesson['segments']) - 1 else 0
        output.writeframes(b'\x00\x00' * round(pause * rate))
        alignment = json.loads((folder / f'{chapter:02}.json').read_text(encoding='utf-8'))
        spoken, word_times = [], []
        for word in alignment['words']:
            for token in tokens(word['word']):
                spoken.append(token)
                word_times.append(word['start'])
        sentences = re.split(r'(?<=[.!?])\s+', segment['english'])
        expected = tokens(segment['english'])
        matcher = difflib.SequenceMatcher(None, expected, spoken, autojunk=False)
        mapping = {}
        for block in matcher.get_matching_blocks():
            for index in range(block.size):
                mapping[block.a + index] = block.b + index
        assert len(mapping) / len(expected) > 0.35, f'Chapter {chapter}: transcription differs too much'
        differences = [dict(expected=' '.join(expected[a:b]), spoken=' '.join(spoken[c:d]))
                       for tag, a, b, c, d in matcher.get_opcodes() if tag != 'equal']
        starts, word_index = [], 0
        for sentence_index, sentence in enumerate(sentences):
            sentence_tokens = tokens(sentence)
            if sentence_index == 0:
                start = 0
            else:
                # Anchor to the first recognized word near the sentence boundary.
                anchor = next((i for i in range(word_index, min(word_index + 4, len(expected))) if i in mapping), None)
                if anchor is None:
                    # TTS may spell a numeral differently (for example, "3,600"
                    # can be returned as two words). Keep the cue monotonic and
                    # use the sentence's proportional position as a conservative fallback.
                    start = duration * word_index / max(1, len(expected))
                else:
                    start = max(0, word_times[mapping[anchor]] - (anchor - word_index) * 0.22)
            assert not starts or start > starts[-1], f'Non-monotonic chapter {chapter} captions'
            assert start < duration, f'Caption exceeds recording in chapter {chapter}'
            starts.append(start)
            word_index += len(sentence_tokens)
        for index, sentence in enumerate(sentences):
            end = starts[index + 1] if index + 1 < len(starts) else duration + pause
            cues.append(dict(start=round(offset + starts[index], 6), end=round(offset + end, 6), text=sentence, chapter=chapter))
        offset += duration + pause
        report.append(dict(chapter=chapter, duration=duration, matched=round(len(mapping) / len(expected), 3), differences=differences))

destination = root / 'public/lectures/units'
subprocess.run([ffmpeg, '-v', 'error', '-y', '-i', str(folder / 'assembled.wav'),
                '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', str(rate), '-b:a', '64k',
                str(destination / 'narration-marin-v2.mp3')], check=True)
(root / 'app/data/jee-lecture-timings.json').write_text(json.dumps(dict(duration=round(offset, 6), cues=cues), indent=2) + '\n', encoding='utf-8')
(destination / 'english-marin-v2.vtt').write_text('WEBVTT\n\n' + '\n\n'.join(
    f"{stamp(cue['start'])} --> {stamp(cue['end'])}\n{cue['text']}" for cue in cues) + '\n', encoding='utf-8')
(folder / 'alignment-review.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
print(json.dumps(dict(duration=offset, cues=len(cues), report=report), indent=2))
