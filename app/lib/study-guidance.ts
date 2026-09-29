export type ResourceLink = {
  label: string;
  href: string;
};

export type Guidance = {
  reply: string;
  links: ResourceLink[];
};

type Exam = { name: string; link: ResourceLink; pattern: RegExp; reply: string };

// Exam names are matched before generic words such as "practice" or "question",
// so "NEET mock test" leads to NEET practice rather than the MPSC default.
const exams: Exam[] = [
  {
    name: "JEE Main",
    link: { label: "Open JEE Main practice", href: "/jee" },
    pattern: /\bjee\b|joint entrance|engineering entrance|\b(maths?|mathematics|calculus|algebra|trigonometry)\b/,
    reply: "JEE Main practice covers Physics, Chemistry, and Mathematics, with topic filters and explanations for each answer. There is also a recorded Physics foundation class on units and dimensions.",
  },
  {
    name: "NEET",
    link: { label: "Open NEET practice", href: "/neet" },
    pattern: /\bneet\b|\b(biology|botany|zoology|medical entrance)\b/,
    reply: "NEET practice covers Biology, Chemistry, and Physics with explanations for each answer. Tell me the topic you are working on and I can help you reason through it.",
  },
  {
    name: "CUET PG",
    link: { label: "Open CUET PG practice", href: "/cuet-pg" },
    pattern: /\bcuet\b|postgraduate|\bpg\b/,
    reply: "CUET PG practice covers subjects such as Political Science, History, Economics, Sociology, and English. Share a subject or a question and I can help you work through it.",
  },
];

const mpscPractice: ResourceLink = { label: "Start MPSC practice", href: "/mock-test" };

export function offlineGuidance(prompt: string): Guidance {
  const text = prompt.toLowerCase();
  const exam = exams.find(candidate => candidate.pattern.test(text));

  // Time-sensitive exam information is never guessed, whichever exam is named.
  if (/\b(syllabus|notification|current affairs?|exam date|deadline)\b/.test(text)) {
    return {
      reply:
        "For current syllabus details, notifications, dates, and current affairs, use the latest official notice as your source; I do not want to guess on time-sensitive exam information. Paste a notice or question here and I can help explain it.",
      links: [{ label: "Open the learning dashboard", href: "/" }],
    };
  }

  if (/\b(plan|planner|schedule|today|time|hours)\b/.test(text)) {
    return {
      reply:
        "Try a focused 90-minute session: spend 25 minutes revising one topic, 30 minutes answering practice questions, 20 minutes reviewing every miss, then 15 minutes recalling the key points without notes. Keep the session realistic and tick off a step in your study planner when you finish.",
      links: [{ label: "Open your study dashboard", href: "/" }, ...(exam ? [exam.link] : [])],
    };
  }

  if (/\b(accuracy|wrong|mistakes?|improv\w*|stuck|review)\b/.test(text)) {
    return {
      reply:
        "After each practice set, sort missed questions into three causes: a fact you did not know, a concept you misunderstood, or a rushed reading. Review just that gap, then retry the question later without looking at the answer. A short error log is more useful than repeating full sets blindly.",
      links: [exam?.link ?? { label: "Review MPSC practice questions", href: "/mock-test" }],
    };
  }

  if (exam) return { reply: exam.reply, links: [exam.link] };

  // Physics and chemistry are shared by NEET and JEE, so offer both.
  if (/\b(physics|chemistry)\b/.test(text)) {
    return {
      reply: "Physics and Chemistry practice is available for both NEET and JEE Main. Pick the exam you are preparing for, or paste the question you are stuck on.",
      links: [{ label: "Open JEE Main practice", href: "/jee" }, { label: "Open NEET practice", href: "/neet" }],
    };
  }

  if (/\b(notes|college|arts)\b/.test(text)) {
    return {
      reply: "College notes are available in the learning library. Tell me the paper or topic you need and I can help you make a concise revision outline.",
      links: [{ label: "Browse college notes", href: "/college-notes" }],
    };
  }

  if (/\b(mock|practice|questions?|quiz|test|mpsc)\b/.test(text)) {
    return {
      reply:
        "Open MPSC practice, choose a subject, and try a small set without notes. Check the explanation for each answer, especially the ones you guessed, then revisit those topics in your next session.",
      links: [mpscPractice],
    };
  }

  if (/\b(help|what can you|who are you)\b/.test(text)) {
    return {
      reply:
        "I can help you break down a question, plan a focused study session, review wrong answers, or find a practice area. Paste a question or tell me your exam goal and how much time you have today.",
      links: [
        { label: "MPSC practice", href: "/mock-test" },
        { label: "Study dashboard", href: "/" },
      ],
    };
  }

  return {
    reply:
      "Tell me what you are studying or paste the question you are stuck on. I can help you reason it through, plan a revision session, or point you to the right practice area.",
    links: [{ label: "Browse learning resources", href: "/" }],
  };
}
