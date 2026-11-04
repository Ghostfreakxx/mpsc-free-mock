import type { PlayerLecture } from '../../jee/classes/lecture-player';
import data from '../../data/neet-diversity-living-world-lecture.json';
import timings from '../../data/neet-diversity-living-world-timings.json';
export const diversityLesson: PlayerLecture = {
 id:'neet-diversity-living-world',subject:'Biology',unit:1,number:'B04',title:data.title,
 description:'Taxonomy, textbook kingdoms, major plant groups and animal phyla/classes with diagnostic features and examples.',
 scope:data.scope,progressKey:'neet.diversity-living-world.lecture.v1',
 audio:'/lectures/neet-diversity-living-world/narration-marin.mp3',subtitles:'/lectures/neet-diversity-living-world/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
