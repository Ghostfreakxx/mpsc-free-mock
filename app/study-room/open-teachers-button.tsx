"use client";

import styles from "./study-room.module.css";

export default function OpenTeachersButton() {
  return (
    <button type="button" className={styles.primary} onClick={() => window.dispatchEvent(new Event("mpsc-open-assistant"))}>
      Study with Tochhawng Teachers <span aria-hidden="true">↗</span>
    </button>
  );
}
