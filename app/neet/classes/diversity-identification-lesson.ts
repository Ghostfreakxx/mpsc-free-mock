import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-diversity-identification-lecture.json';
import timings from '../../data/neet-diversity-identification-timings.json';
export const diversityIdentificationLesson:PlayerLecture={
 id:'neet-diversity-identification',subject:'Biology',unit:1,number:'B21',title:data.title,
 description:'Recorded Diversity workshop covering identification keys, taxonomy and comparative plant and animal traits.',
 scope:data.scope,progressKey:'neet.diversity-identification.lecture.v1',
 audio:'/lectures/neet-diversity-identification/narration-marin.mp3',subtitles:'/lectures/neet-diversity-identification/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
