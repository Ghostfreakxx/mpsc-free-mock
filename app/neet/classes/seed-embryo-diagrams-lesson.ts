import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-seed-embryo-diagrams-lecture.json';
import timings from '../../data/neet-seed-embryo-diagrams-timings.json';
export const seedEmbryoDiagramsLesson:PlayerLecture={
 id:'neet-seed-embryo-diagrams',subject:'Biology',unit:6,number:'B31',title:data.title,
 description:'Recorded seed and embryo workshop: seed surface labels, dicot axis, maize grain tissues and grass embryo sheaths.',
 scope:data.scope,progressKey:'neet.seed-embryo-diagrams.lecture.v1',
 audio:'/lectures/neet-seed-embryo-diagrams/narration-marin.mp3',subtitles:'/lectures/neet-seed-embryo-diagrams/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
