import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-genetics-problem-solving-lecture.json';
import timings from '../../data/neet-genetics-problem-solving-timings.json';
export const geneticsProblemSolvingLesson:PlayerLecture={
 id:'neet-genetics-problem-solving',subject:'Biology',unit:7,number:'B13',title:data.title,
 description:'Recorded Genetics and Evolution problem-solving supplement for pedigrees, linkage maps, sequence interpretation and population evidence.',
 scope:data.scope,progressKey:'neet.genetics-problem-solving.lecture.v1',
 audio:'/lectures/neet-genetics-problem-solving/narration-marin.mp3',subtitles:'/lectures/neet-genetics-problem-solving/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
