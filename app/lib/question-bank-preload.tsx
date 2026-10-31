"use client";

// Rendered by a practice page: React hoists these links into the page's <head>, so the browser starts
// downloading the question bank alongside the page's JavaScript instead of waiting for it to run.
// This is a client component on purpose. A preload in a server component (a <link> element or a
// ReactDOM.preload() call) becomes a hint in the page's prefetch payload, so every page that links
// here would download this bank too; a client component renders only when its page does.
// The options match the later fetch() in loadQuestionBank (same URL, CORS mode, same-origin
// credentials), so the browser reuses the preloaded response.
export function QuestionBankPreload({ names }: { names: readonly string[] }) {
  return names.map(name => <link key={name} rel="preload" href={`/question-bank/${name}`} as="fetch" crossOrigin="anonymous" />);
}
