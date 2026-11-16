import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-cell-biomolecule-data-lecture.json';
import timings from '../../data/neet-cell-biomolecule-data-timings.json';
export const cellBiomoleculeDataLesson:PlayerLecture={
 id:'neet-cell-biomolecule-data',subject:'Biology',unit:3,number:'B20',title:data.title,
 description:'Recorded Cell and Biomolecule workshop covering membranes, organelles, enzymes and cell-cycle data.',
 scope:data.scope,progressKey:'neet.cell-biomolecule-data.lecture.v1',
 audio:'/lectures/neet-cell-biomolecule-data/narration-marin.mp3',subtitles:'/lectures/neet-cell-biomolecule-data/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
