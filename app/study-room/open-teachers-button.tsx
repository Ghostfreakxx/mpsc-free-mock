"use client";

import styles from "./study-room.module.css";
import type { TeachingOptions } from "../lib/tochhawng-teachers";

export default function OpenTeachersButton({ subject, label = "Study with Tochhawng Teachers" }: {
  subject?: TeachingOptions["subject"]; label?: string;
}) {
  return (
    <button type="button" className={styles.primary} onClick={() => window.dispatchEvent(
      subject ? new CustomEvent("mpsc-open-assistant", { detail: { subject } }) : new Event("mpsc-open-assistant")
    )}>
      {label} <span aria-hidden="true">↗</span>
    </button>
  );
}
