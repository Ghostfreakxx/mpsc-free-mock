import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-plant-experiments-lecture.json';
import timings from '../../data/neet-plant-experiments-timings.json';
export const plantExperimentsLesson:PlayerLecture={
 id:'neet-plant-experiments',subject:'Biology',unit:4,number:'B15',title:data.title,
 description:'Recorded Plant Physiology workshop covering photosynthesis experiments, carbon and energy budgets, respiration and growth data.',
 scope:data.scope,progressKey:'neet.plant-experiments.lecture.v1',
 audio:'/lectures/neet-plant-experiments/narration-marin.mp3',subtitles:'/lectures/neet-plant-experiments/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
