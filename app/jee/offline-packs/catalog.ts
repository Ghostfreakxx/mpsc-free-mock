import { statSync } from "node:fs";
import path from "node:path";
import { subjects } from "../classes/course";
import { lectures, type Lecture } from "../classes/lessons";
import { dedicatedNeetRecordings } from "../../neet/classes/offline-recordings";
import neetMap from "../../data/neet-physics-chemistry-map.json";

export const packVersion = 1;
export type PackAsset = { path: string; kind: "html" | "audio" | "captions"; bytes: number };
export type PackSummary = {
  id: string; title: string; version: number; description: string; assets: PackAsset[];
};
type Recording = Pick<Lecture, "id" | "title" | "audio" | "subtitles" | "segments" | "timings">;
type Pack = PackSummary & { recordings: Recording[]; chapter?: number };

export function packPath(id: string) { return `/jee/offline-packs/${id}`; }

function audioBytes(url: string) {
  if (!/^\/lectures\/[\w/-]+\.mp3$/.test(url)) throw new Error("Invalid offline recording path.");
  return statSync(path.join(process.cwd(), "public", url)).size;
}

function subjectPack(id: string, title: string, recordings: Recording[]): Pack {
  const assets: PackAsset[] = [{ path: packPath(id), kind: "html", bytes: 0 }];
  for (const recording of recordings) {
    assets.push({ path: recording.audio, kind: "audio", bytes: audioBytes(recording.audio) });
    assets.push({ path: recording.subtitles, kind: "captions", bytes: 0 });
  }
  return { id, version: packVersion, title,
    description: `${recordings.length} recordings with captions and transcripts.`, recordings, assets };
}

function chapterPacks(recording: Recording, label: string): Pack[] {
  if (recording.timings.chapters?.length !== recording.segments.length) throw new Error(`Missing chapter timing for ${recording.id}.`);
  return recording.segments.map((segment, chapter) => {
    const id = `${recording.id}-chapter-${chapter + 1}-v${packVersion}`;
    const audio = `/lectures/${recording.id}/chapter-${String(chapter + 1).padStart(2, "0")}.mp3`;
    return { id, chapter, version: packVersion, title: segment.title,
      description: `${label} · Chapter ${chapter + 1} with narration, captions, and notes.`, recordings: [recording],
      assets: [
        { path: packPath(id), kind: "html", bytes: 0 },
        { path: audio, kind: "audio", bytes: audioBytes(audio) },
        { path: `${packPath(id)}/captions`, kind: "captions", bytes: 0 },
      ] };
  });
}

const byId = new Map(lectures.map(recording => [recording.id, recording]));
function published(id: string) {
  const recording = byId.get(id);
  if (!recording) throw new Error(`Missing recording: ${id}`);
  return recording;
}

const neetSubjects = ["Physics", "Chemistry", "Biology"] as const;
function neetPacks(subject: typeof neetSubjects[number]) {
  const shared = neetMap.recordings.filter(recording => recording.subject === subject).map(recording => published(recording.id));
  const dedicated = dedicatedNeetRecordings.filter(recording => recording.subject === subject);
  const groups: Recording[][] = [[]];
  let bytes = 0;
  for (const recording of [...shared, ...dedicated]) {
    const amount = audioBytes(recording.audio);
    if (bytes + amount > 500_000_000 && groups.at(-1)!.length > 0) { groups.push([]); bytes = 0; }
    groups.at(-1)!.push(recording);
    bytes += amount;
  }
  return groups.map((group, index) => subjectPack(
    `neet-${subject.toLowerCase()}-${index + 1}-v${packVersion}`,
    `NEET ${subject} recorded lessons${groups.length > 1 ? ` · Part ${index + 1}` : ""}`, group,
  ));
}

export const packs = [
  ...subjects.map(subject => subjectPack(`jee-${subject.toLowerCase()}-v${packVersion}`, `JEE ${subject} recorded lessons`,
    lectures.filter(recording => (recording.subject ?? "Physics") === subject))),
  ...neetSubjects.flatMap(neetPacks),
  ...chapterPacks(published("gravity"), "Gravitation"),
  ...chapterPacks(published("newtons-laws"), "Newton’s laws"),
];
