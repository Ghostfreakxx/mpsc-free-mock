import { createHash } from "node:crypto";
import { createReadStream, readFileSync, readdirSync, statSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = name => readFileSync(path.join(root, name), "utf8");
const require = createRequire(import.meta.url);
// Load the same typed lesson manifests as Next without starting a server or invoking a provider.
require.extensions[".ts"] = (module, filename) => {
  const source = readFileSync(filename, "utf8");
  module._compile(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
    fileName: filename,
  }).outputText, filename);
};

const { lectures } = require("../app/jee/classes/lessons.ts");
const { studyLessons } = require("../app/jee/classes/study-lessons.ts");
const { physicsCoverage } = require("../app/jee/classes/physics-coverage.ts");
const { courseUnits, subjects } = require("../app/jee/classes/course.ts");
const neetDirectory = path.join(root, "app/neet/classes");
const neet = readdirSync(neetDirectory).filter(name => name.endsWith("-lesson.ts"))
  .flatMap(name => Object.values(require(path.join(neetDirectory, name))))
  .filter(value => value && Array.isArray(value.segments));
const neetMap = JSON.parse(read("app/data/neet-physics-chemistry-map.json"));
const shared = neetMap.recordings;
function fileBytes(url) {
  if (!url?.startsWith("/lectures/")) return 0;
  try { return statSync(path.join(root, "public", url)).size; } catch { return 0; }
}

function inspect(lecture) {
  const issues = [];
  const audioBytes = fileBytes(lecture.audio);
  const captions = fileBytes(lecture.subtitles) && /^WEBVTT\b/m.test(read(path.join("public", lecture.subtitles)));
  const scripts = lecture.segments.filter(section => section.english?.trim()).length;
  if (!audioBytes) issues.push("Missing narration file");
  if (!captions) issues.push("Missing or invalid WebVTT");
  if (!lecture.timings?.cues?.length) issues.push("No timed cues");
  if (scripts < lecture.segments.length || !scripts) issues.push("Missing section narration script");
  if (!lecture.quiz?.length) issues.push("Missing quiz");
  return { id: lecture.id, title: lecture.title, sections: lecture.segments.length, scripts, audioBytes,
    audio: lecture.audio, captionFile: lecture.subtitles, captions: Boolean(captions), duration: lecture.timings?.duration, cues: lecture.timings?.cues?.length ?? 0,
    quiz: lecture.quiz?.length ?? 0, issues };
}

const jee = lectures.map(inspect);
const neetDedicated = neet.map(inspect);
const jeeIds = new Set(jee.map(item => item.id));
const missingShared = shared.filter(item => !jeeIds.has(item.id)).map(item => item.id);
const narrationQueue = [...jee, ...neetDedicated].filter(item => !item.audioBytes).map(item => item.id);
const written = studyLessons.map(lesson => ({
  id: lesson.id, title: lesson.title, subject: lesson.subject, unit: lesson.unit,
  sections: lesson.sections.length, workedExamples: lesson.examples.length, questions: lesson.quiz.length,
  illustrated: ["svg", "png"].some(ext => fileBytes(`/lectures/foundations/${lesson.id}.${ext}`)),
  remaining: lesson.remaining,
}));
const jeeUnits = subjects.flatMap(subject => courseUnits[subject].map((title, index) => {
  const coverage = subject === "Physics" ? physicsCoverage[index] : undefined;
  return {
    subject, title, unit: index + 1,
    recordings: coverage?.recordings ?? lectures.filter(lecture => lecture.subject === subject && lecture.unit === index + 1).map(lecture => lecture.id),
    written: written.filter(lesson => lesson.subject === subject && lesson.unit === index + 1).map(lesson => lesson.id),
    remaining: coverage?.remaining ?? [],
  };
}));
const reports = {
  jee, jeeUnits, written, neetDedicated, neetSharedUnits: neetMap.units, neetShared: shared,
  missingShared, narrationQueue, neetSharedCount: shared.length,
  jeeBaseline: subjects.map(subject => ({ subject, baselineUnits: courseUnits[subject].length,
    writtenLessons: studyLessons.filter(lesson => lesson.subject === subject).length })),
};

if (process.argv.includes("--hash-audio")) {
  const mediaRoot = path.join(root, "public/lectures");
  const clips = readdirSync(mediaRoot, { recursive: true }).filter(file => file.endsWith(".mp3"));
  const hashes = new Map();
  const suspectFiles = [];
  for (const filename of clips) {
    const hash = createHash("sha256");
    let first;
    for await (const chunk of createReadStream(path.join(mediaRoot, filename))) {
      first ??= chunk;
      hash.update(chunk);
    }
    if (!first || !(first.subarray(0, 3).toString("ascii") === "ID3" || (first[0] === 255 && (first[1] & 224) === 224))) {
      suspectFiles.push(filename);
    }
    const digest = hash.digest("hex");
    if (!hashes.has(digest)) hashes.set(digest, []);
    hashes.get(digest).push(filename);
  }
  reports.media = { files: clips.length, suspectFiles, duplicateGroups: [...hashes.values()].filter(group => group.length > 1) };
}

console.log(JSON.stringify(reports, null, 2));
