import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-structural-identification-lecture.json';
import timings from '../../data/neet-structural-identification-timings.json';
export const structuralIdentificationLesson:PlayerLecture={
 id:'neet-structural-identification',subject:'Biology',unit:2,number:'B22',title:data.title,
 description:'Recorded Structural Organisation workshop covering plant and animal tissues, organ anatomy and identification evidence.',
 scope:data.scope,progressKey:'neet.structural-identification.lecture.v1',
 audio:'/lectures/neet-structural-identification/narration-marin.mp3',subtitles:'/lectures/neet-structural-identification/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
