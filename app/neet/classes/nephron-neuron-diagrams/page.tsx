import { biologyNotesHref } from "../biology-companions";
import LecturePlayer from '../../../jee/classes/lecture-player';
import {nephronNeuronDiagramsLesson} from '../nephron-neuron-diagrams-lesson';
export const metadata={title:'NEET Nephron and Neuron: Diagram Labels and Flow | Recorded class'};
export default function NephronNeuronDiagramsClass(){return <LecturePlayer lesson={nephronNeuronDiagramsLesson} exam="NEET" writtenHref={biologyNotesHref("nephron-neuron-diagrams")}/>;}
