"use client";

import { useEffect } from "react";
import { getStreak, recordVisitAndGetStreak, EMPTY_STREAK } from "../lib/progressStore";
import { useProgressValue } from "../lib/useProgressValue";

export default function StreakBadge() {
  const streak = useProgressValue(getStreak, EMPTY_STREAK);

  useEffect(() => {
    recordVisitAndGetStreak();
  }, []);

  if (!streak.current) return null;

  return (
    <div className="fixed right-3 top-3 z-50 rounded-full border border-orange-400/60 bg-slate-950/90 px-3 py-1.5 text-xs font-semibold text-orange-300 shadow-[0_0_15px_rgba(251,146,60,0.25)] sm:right-5 sm:top-5 sm:text-sm">
      🔥 {streak.current} day{streak.current === 1 ? "" : "s"} streak
    </div>
  );
}
