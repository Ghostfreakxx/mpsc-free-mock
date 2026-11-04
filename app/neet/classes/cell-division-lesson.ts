import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-cell-cycle-division-lecture.json';
import timings from '../../data/neet-cell-cycle-division-timings.json';
export const divisionLesson: PlayerLecture = {
 id:'neet-cell-cycle-division',subject:'Biology',unit:3,number:'B03',title:data.title,
 description:'Cell-cycle phases, mitosis, meiosis, their significance and stage-specific chromosome and DNA counts.',
 scope:data.scope,progressKey:'neet.cell-cycle-division.lecture.v1',
 audio:'/lectures/neet-cell-cycle-division/narration-marin.mp3',subtitles:'/lectures/neet-cell-cycle-division/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
