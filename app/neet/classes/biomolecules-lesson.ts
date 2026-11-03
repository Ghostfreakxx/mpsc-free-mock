import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-biomolecules-lecture.json';
import timings from '../../data/neet-biomolecules-timings.json';
export const biomoleculesLesson: PlayerLecture = {
 id: 'neet-biomolecules', subject: 'Biology', unit: 3, number: 'B02', title: data.title,
 description: 'Carbohydrates, lipids, proteins, nucleic acids and enzymes: structures, linkages and biological roles.',
 scope: data.scope, progressKey: 'neet.biomolecules.lecture.v1',
 audio: '/lectures/neet-biomolecules/narration-marin.mp3', subtitles: '/lectures/neet-biomolecules/english.vtt', timings,
 segments: data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
