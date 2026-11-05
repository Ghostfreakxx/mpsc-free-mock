import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-chemistry-closeout-lecture.json';
import timings from '../../data/neet-chemistry-closeout-timings.json';
export const chemistryCloseoutLesson:PlayerLecture={id:'neet-chemistry-closeout',subject:'Chemistry',unit:15,number:'NC01',title:data.title,description:data.scope,scope:data.scope,progressKey:'neet.chemistry-closeout.lecture.v1',audio:'/lectures/neet-chemistry-closeout/narration-marin.mp3',subtitles:'/lectures/neet-chemistry-closeout/english.vtt',timings,segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources};
