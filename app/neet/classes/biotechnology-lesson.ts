import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-biotechnology-lecture.json';
import timings from '../../data/neet-biotechnology-timings.json';
export const biotechnologyLesson: PlayerLecture = {
 id:'neet-biotechnology',subject:'Biology',unit:9,number:'B11',title:data.title,
 description:'Recombinant DNA tools and processes, Bt and RNAi, insulin and vaccines, gene therapy, diagnosis, transgenic animals and biosafety.',
 scope:data.scope,progressKey:'neet.biotechnology.lecture.v1',
 audio:'/lectures/neet-biotechnology/narration-marin.mp3',subtitles:'/lectures/neet-biotechnology/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
