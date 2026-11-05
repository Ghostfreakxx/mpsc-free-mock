import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-reproduction-lecture.json';
import timings from '../../data/neet-reproduction-timings.json';
export const reproductionLesson: PlayerLecture = {
 id:'neet-reproduction',subject:'Biology',unit:6,number:'B08',title:data.title,
 description:'Flowering-plant and human reproduction, development, reproductive health and assisted-technique comparisons.',
 scope:data.scope,progressKey:'neet.reproduction.lecture.v1',
 audio:'/lectures/neet-reproduction/narration-marin.mp3',subtitles:'/lectures/neet-reproduction/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
