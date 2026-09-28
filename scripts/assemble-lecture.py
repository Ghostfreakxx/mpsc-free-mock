"""Assemble generated PCM narration and exact sentence-level caption timings."""
import json
from pathlib import Path
import wave
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
folder = root / "public" / "lectures" / "units"
sentences = json.loads((folder / "sentences.json").read_text(encoding="utf-8-sig"))
cues = []
frames = 0
rate = 16000
with wave.open(str(folder / "narration.wav"), "wb") as output:
    output.setnchannels(1)
    output.setsampwidth(2)
    output.setframerate(rate)
    for sentence in sentences:
        with wave.open(str(folder / sentence["file"]), "rb") as source:
            assert (source.getnchannels(), source.getsampwidth(), source.getframerate()) == (1, 2, rate)
            count = source.getnframes()
            output.writeframes(source.readframes(count))
        cues.append({"start": frames / rate, "end": (frames + count) / rate,
                     "text": sentence["text"], "chapter": sentence["chapter"]})
        frames += count

def stamp(seconds):
    ms = round(seconds * 1000)
    return f"{ms // 3600000:02}:{ms // 60000 % 60:02}:{ms // 1000 % 60:02}.{ms % 1000:03}"

(folder / "english.vtt").write_text("WEBVTT\n\n" + "\n\n".join(
    f"{stamp(c['start'])} --> {stamp(c['end'])}\n{c['text']}" for c in cues) + "\n", encoding="utf-8")
(root / "app" / "data" / "jee-lecture-timings.json").write_text(
    json.dumps({"duration": frames / rate, "cues": cues}, indent=2) + "\n", encoding="utf-8")
# Remove only intermediate sentence files created by this pipeline.
for sentence in sentences:
    (folder / sentence["file"]).unlink()
(folder / "sentences.json").unlink()
print(f"Narration: {frames / rate:.1f}s; {len(cues)} synchronized captions")
if len(sys.argv) > 1:
    subprocess.run([sys.argv[1], "-y", "-i", str(folder / "narration.wav"),
                    "-codec:a", "libmp3lame", "-b:a", "48k", str(folder / "narration.mp3")], check=True)
    (folder / "narration.wav").unlink()
