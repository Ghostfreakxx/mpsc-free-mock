import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-human-welfare-lecture.json';
import timings from '../../data/neet-human-welfare-timings.json';
export const humanWelfareLesson: PlayerLecture = {
 id:'neet-human-welfare',subject:'Biology',unit:8,number:'B10',title:data.title,
 description:'Health and disease, immunity, substance-related harm and microbial roles in foods, industry, treatment, energy and agriculture.',
 scope:data.scope,progressKey:'neet.human-welfare.lecture.v1',
 audio:'/lectures/neet-human-welfare/narration-marin.mp3',subtitles:'/lectures/neet-human-welfare/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
