import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-ecology-data-workshop-lecture.json';
import timings from '../../data/neet-ecology-data-workshop-timings.json';
export const ecologyDataWorkshopLesson:PlayerLecture={
 id:'neet-ecology-data-workshop',subject:'Biology',unit:10,number:'B14',title:data.title,
 description:'Recorded Ecology workshop covering population data, sampling, production, energy budgets, pyramids and conservation evidence.',
 scope:data.scope,progressKey:'neet.ecology-data-workshop.lecture.v1',
 audio:'/lectures/neet-ecology-data-workshop/narration-marin.mp3',subtitles:'/lectures/neet-ecology-data-workshop/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
