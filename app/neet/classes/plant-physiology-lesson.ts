import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-plant-physiology-lecture.json';
import timings from '../../data/neet-plant-physiology-timings.json';
export const plantPhysiologyLesson: PlayerLecture = {
 id:'neet-plant-physiology',subject:'Biology',unit:4,number:'B06',title:data.title,
 description:'Photosynthesis, respiration, energy accounting, germination, growth and the five prescribed growth-regulator groups.',
 scope:data.scope,progressKey:'neet.plant-physiology.lecture.v1',
 audio:'/lectures/neet-plant-physiology/narration-marin.mp3',subtitles:'/lectures/neet-plant-physiology/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
