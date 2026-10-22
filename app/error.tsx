"use client";

import Link from "next/link";
import { useEffect } from "react";

// Shown if a page crashes while rendering. Saved progress lives in this browser's storage,
// so retrying or going home does not lose it.
export default function PageError({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <main className="app-error" role="alert">
    <span className="section-kicker">SOMETHING WENT WRONG</span>
    <h1>This page could not load</h1>
    <p>Your saved answers and progress are safe on this device. Try again, or go back to the learning space.</p>
    <div className="app-error-actions">
      <button type="button" className="button button-dark" onClick={() => retry()}>Try again</button>
      <Link href="/" className="button button-outline">Learning space</Link>
    </div>
  </main>;
}
