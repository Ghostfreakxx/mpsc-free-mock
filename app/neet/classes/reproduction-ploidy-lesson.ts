import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-reproduction-ploidy-lecture.json';
import timings from '../../data/neet-reproduction-ploidy-timings.json';
export const reproductionPloidyLesson:PlayerLecture={
 id:'neet-reproduction-ploidy',subject:'Biology',unit:6,number:'B17',title:data.title,
 description:'Recorded Reproduction workshop covering chromosome and DNA counts, embryo sacs, double fertilisation, seed tissues and pollination controls.',
 scope:data.scope,progressKey:'neet.reproduction-ploidy.lecture.v1',
 audio:'/lectures/neet-reproduction-ploidy/narration-marin.mp3',subtitles:'/lectures/neet-reproduction-ploidy/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
