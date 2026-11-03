import { nursingCategories, type NursingCategoryId, type NursingQuestion } from "../nursing/types.ts";
import { isNursingQuestion, visibleQuestions } from "../nursing/nursing-logic.ts";
import { HIDE_UNREVIEWED_QUESTIONS } from "./nursing-config.ts";
import fon from "./nursing/fon.json";
import aap from "./nursing/aap.json";
import msn from "./nursing/msn.json";
import obg from "./nursing/obg.json";
import ped from "./nursing/ped.json";
import chn from "./nursing/chn.json";
import mhn from "./nursing/mhn.json";
import phr from "./nursing/phr.json";
import mic from "./nursing/mic.json";
import nut from "./nursing/nut.json";
import mne from "./nursing/mne.json";

// The Nursing question bank, one JSON file per category (app/data/nursing/<prefix>.json). Server
// only: the browser gets it from /question-bank/nursing. A malformed question fails the build here,
// and scripts/nursing-bank.test.mjs checks the rest (ids in order, duplicates, difficulty mix).
const files: Record<string, unknown[]> = { fon, aap, msn, obg, ped, chn, mhn, phr, mic, nut, mne };

// Every question in the files, checked. Tests and tools use this.
export const allNursingQuestions: NursingQuestion[] = nursingCategories.flatMap(category => {
  const questions = files[category.prefix];
  return questions.map(question => {
    if (!isNursingQuestion(question) || question.category !== category.name) {
      throw new Error(`Invalid nursing question in ${category.prefix}.json: ${JSON.stringify(question).slice(0, 120)}`);
    }
    return question;
  });
});

// What students see: served at /question-bank/nursing and counted on the category cards.
export const nursingQuestions: NursingQuestion[] = visibleQuestions(allNursingQuestions, HIDE_UNREVIEWED_QUESTIONS);

export function nursingCounts(): Record<NursingCategoryId, number> {
  return Object.fromEntries(nursingCategories.map(category =>
    [category.id, nursingQuestions.filter(question => question.category === category.name).length])) as Record<NursingCategoryId, number>;
}
