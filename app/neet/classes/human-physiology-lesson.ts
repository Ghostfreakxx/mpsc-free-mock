import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-human-physiology-lecture.json';
import timings from '../../data/neet-human-physiology-timings.json';
export const humanPhysiologyLesson: PlayerLecture = {
 id:'neet-human-physiology',subject:'Biology',unit:5,number:'B07',title:data.title,
 description:'Breathing, circulation, excretion, movement, neural and endocrine regulation with prescribed disorder comparisons.',
 scope:data.scope,progressKey:'neet.human-physiology.lecture.v1',
 audio:'/lectures/neet-human-physiology/narration-marin.mp3',subtitles:'/lectures/neet-human-physiology/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
