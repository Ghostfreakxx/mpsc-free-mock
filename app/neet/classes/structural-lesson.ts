import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-structural-organisation-lecture.json';
import timings from '../../data/neet-structural-organisation-timings.json';
export const structuralLesson: PlayerLecture = {
 id:'neet-structural-organisation',subject:'Biology',unit:2,number:'B05',title:data.title,
 description:'Plant organs, tissues, anatomy, five prescribed families, animal tissues and brief cockroach and frog systems.',
 scope:data.scope,progressKey:'neet.structural-organisation.lecture.v1',
 audio:'/lectures/neet-structural-organisation/narration-marin.mp3',subtitles:'/lectures/neet-structural-organisation/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
