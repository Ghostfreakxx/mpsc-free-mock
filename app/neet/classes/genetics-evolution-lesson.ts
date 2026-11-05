import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-genetics-evolution-lecture.json';
import timings from '../../data/neet-genetics-evolution-timings.json';
export const geneticsEvolutionLesson: PlayerLecture = {
 id:'neet-genetics-evolution',subject:'Biology',unit:7,number:'B09',title:data.title,
 description:'Inheritance, molecular genetics and evolutionary evidence/mechanisms with worked probability and population examples.',
 scope:data.scope,progressKey:'neet.genetics-evolution.lecture.v1',
 audio:'/lectures/neet-genetics-evolution/narration-marin.mp3',subtitles:'/lectures/neet-genetics-evolution/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
