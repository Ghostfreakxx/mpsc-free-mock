import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-biotechnology-data-lecture.json';
import timings from '../../data/neet-biotechnology-data-timings.json';
export const biotechnologyDataLesson:PlayerLecture={
 id:'neet-biotechnology-data',subject:'Biology',unit:9,number:'B18',title:data.title,
 description:'Recorded Biotechnology workshop covering PCR counts, gel interpretation, restriction maps, controls and molecular evidence.',
 scope:data.scope,progressKey:'neet.biotechnology-data.lecture.v1',
 audio:'/lectures/neet-biotechnology-data/narration-marin.mp3',subtitles:'/lectures/neet-biotechnology-data/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
