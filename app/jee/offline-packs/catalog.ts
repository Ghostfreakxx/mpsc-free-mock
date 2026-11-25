import { statSync } from "node:fs";
import path from "node:path";
import { subjects } from "../classes/course";
import { lectures, type Lecture } from "../classes/lessons";

export const packVersion = 1;
export type PackAsset = { path: string; kind: "html" | "audio" | "captions"; bytes: number };
export type PackSummary = {
  id: string; title: string; version: number; description: string; assets: PackAsset[];
};
type Pack = PackSummary & { recordings: Lecture[]; chapter?: number };

export function packPath(id: string) { return `/jee/offline-packs/${id}`; }

function audioBytes(url: string) {
  if (!/^\/lectures\/[\w/-]+\.mp3$/.test(url)) throw new Error("Invalid offline recording path.");
  return statSync(path.join(process.cwd(), "public", url)).size;
}

function subjectPack(subject: typeof subjects[number]): Pack {
  const id = `jee-${subject.toLowerCase()}-v${packVersion}`;
  const recordings = lectures.filter(recording => (recording.subject ?? "Physics") === subject);
  const assets: PackAsset[] = [{ path: packPath(id), kind: "html", bytes: 0 }];
  for (const recording of recordings) {
    assets.push({ path: recording.audio, kind: "audio", bytes: audioBytes(recording.audio) });
    assets.push({ path: recording.subtitles, kind: "captions", bytes: 0 });
  }
  return { id, version: packVersion, title: `JEE ${subject} recorded lessons`,
    description: `${recordings.length} recordings with captions and transcripts.`, recordings, assets };
}

function gravityChapter(recording: Lecture, chapter: number): Pack {
  const id = `gravity-chapter-${chapter + 1}-v${packVersion}`;
  const audio = `/lectures/gravity/chapter-${String(chapter + 1).padStart(2, "0")}.mp3`;
  return { id, chapter, version: packVersion, title: recording.segments[chapter].title,
    description: `Gravitation · Chapter ${chapter + 1} with narration, captions, and notes.`, recordings: [recording],
    assets: [
      { path: packPath(id), kind: "html", bytes: 0 },
      { path: audio, kind: "audio", bytes: audioBytes(audio) },
      { path: `${packPath(id)}/captions`, kind: "captions", bytes: 0 },
    ] };
}

const gravity = lectures.find(recording => recording.id === "gravity");
if (!gravity || gravity.timings.chapters?.length !== gravity.segments.length) throw new Error("Gravity pack timing is incomplete.");
export const packs = [
  ...subjects.map(subjectPack),
  ...gravity.segments.map((_, index) => gravityChapter(gravity, index)),
];
