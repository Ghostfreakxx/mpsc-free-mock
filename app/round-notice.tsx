import { ArrowUpRight, PartyPopper } from "lucide-react";
import type { TopicSuggestion } from "./lib/practice-progress";

export type RoundNoticeProps = {
  round: number;
  suggestion: TopicSuggestion | null;
  onChoose: (topic: string) => void;
  // Shown on the bilingual page, where topic names have Mizo labels.
  label?: (topic: string) => string;
};

// Shown on the first question of a new round: the set was finished, and here is the weakest topic.
export default function RoundNotice({ round, suggestion, onChoose, label = topic => topic }: RoundNoticeProps) {
  return (
    <div className="practice-round-notice" role="status">
      <PartyPopper size={18} aria-hidden="true" />
      <div>
        <strong>Round {round} complete.</strong>
        <span> You have seen every question in this set. The new round reshuffles the options, and aptitude questions come back with fresh numbers.</span>
        {suggestion && (
          <button type="button" className="practice-round-suggestion" onClick={() => onChoose(suggestion.topic)}>
            <span>
              {suggestion.accuracy === null ? "Try a new topic: " : "Strengthen your weakest topic: "}
              <strong>{label(suggestion.topic)}</strong>
              {suggestion.accuracy !== null && ` (${suggestion.accuracy}% correct so far)`}
            </span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
