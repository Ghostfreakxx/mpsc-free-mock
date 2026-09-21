"use client";

import type { QuizStats } from "../lib/progressStore";

type ProgressPanelProps = {
  stats: QuizStats;
  currentLabel: string;
};

export default function ProgressPanel({ stats, currentLabel }: ProgressPanelProps) {
  const overallPercent = stats.attempts
    ? Math.round((stats.correct / stats.attempts) * 100)
    : 0;

  const current = stats.byCategory[currentLabel];
  const currentPercent =
    current && current.attempts
      ? Math.round((current.correct / current.attempts) * 100)
      : 0;

  return (
    <section className="mb-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-cyan-400/30 bg-slate-900 p-4">
        <p className="text-xs uppercase tracking-wide text-cyan-300">
          Overall Accuracy
        </p>
        <p className="mt-1 text-2xl font-bold text-white">{overallPercent}%</p>
        <p className="text-xs text-slate-400">
          {stats.correct} / {stats.attempts} answered correctly
        </p>
      </div>

      {currentLabel !== "All" && (
        <div className="rounded-2xl border border-cyan-400/30 bg-slate-900 p-4">
          <p className="text-xs uppercase tracking-wide text-cyan-300">
            {currentLabel} Accuracy
          </p>
          <p className="mt-1 text-2xl font-bold text-white">{currentPercent}%</p>
          <p className="text-xs text-slate-400">
            {current?.correct ?? 0} / {current?.attempts ?? 0} answered correctly
          </p>
        </div>
      )}
    </section>
  );
}
