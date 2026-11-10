import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-human-physiology-data-lecture.json';
import timings from '../../data/neet-human-physiology-data-timings.json';
export const humanPhysiologyDataLesson:PlayerLecture={
 id:'neet-human-physiology-data',subject:'Biology',unit:5,number:'B16',title:data.title,
 description:'Recorded Human Physiology workshop covering respiratory, circulatory and renal calculations with integrated data interpretation.',
 scope:data.scope,progressKey:'neet.human-physiology-data.lecture.v1',
 audio:'/lectures/neet-human-physiology-data/narration-marin.mp3',subtitles:'/lectures/neet-human-physiology-data/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
