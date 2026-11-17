import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-flower-tissue-diagrams-lecture.json';
import timings from '../../data/neet-flower-tissue-diagrams-timings.json';
export const flowerTissueDiagramsLesson:PlayerLecture={
 id:'neet-flower-tissue-diagrams',subject:'Biology',unit:2,number:'B25',title:data.title,
 description:'Recorded flower and tissue diagram workshop covering floral labels, placentation, simple plant tissues and animal tissue evidence.',
 scope:data.scope,progressKey:'neet.flower-tissue-diagrams.lecture.v1',
 audio:'/lectures/neet-flower-tissue-diagrams/narration-marin.mp3',subtitles:'/lectures/neet-flower-tissue-diagrams/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
