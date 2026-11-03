// The Nursing section's content switch (server only; it is applied when the site is built).
//
// HIDE_UNREVIEWED_QUESTIONS
//   true:  questions with a reviewNote are left out of practice, the mock test and the category
//          counts until a reviewer checks them and adds "reviewed": true to the question in
//          app/data/nursing/<prefix>.json. The note stays visible to students after review.
//   false: every question is shown, with its note under the explanation.
//
// Changing this needs a new deploy, like any other change to the question bank.
export const HIDE_UNREVIEWED_QUESTIONS = true;
