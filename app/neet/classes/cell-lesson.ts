import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-cell-unit-life-lecture.json';
import timings from '../../data/neet-cell-unit-life-timings.json';
export const cellLesson: PlayerLecture = {
 id: 'neet-cell-unit-life', subject: 'Biology', unit: 3, number: 'B01', title: data.title,
 description: 'Cell theory, cell organization and the structure and function of membranes, walls, organelles and chromosomes.',
 scope: data.scope, progressKey: 'neet.cell-unit-life.lecture.v1',
 audio: '/lectures/neet-cell-unit-life/narration-marin.mp3', subtitles: '/lectures/neet-cell-unit-life/english.vtt', timings,
 segments: data.chapters.map(c => ({title:c.title, formula:c.formula, steps:c.points, english:c.script})), quiz:data.quiz, sources:data.sources,
};
