import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-ecology-lecture.json';
import timings from '../../data/neet-ecology-timings.json';
export const ecologyLesson: PlayerLecture = {
 id:'neet-ecology',subject:'Biology',unit:10,number:'B12',title:data.title,
 description:'Population interactions and growth, ecosystem productivity and energy flow, biodiversity patterns, loss and conservation.',
 scope:data.scope,progressKey:'neet.ecology.lecture.v1',
 audio:'/lectures/neet-ecology/narration-marin.mp3',subtitles:'/lectures/neet-ecology/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
