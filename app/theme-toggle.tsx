"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_EVENT, THEME_KEY, type Theme } from "./theme";

// The site is dark by default. A student who prefers light gets it on every page of this device:
// the choice is saved here, and the script in app/layout.tsx applies it before the first paint.

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event(THEME_EVENT));
}

function subscribe(onChange: () => void) {
  // Another tab changed the theme: follow it. Only "light" counts; anything else (or an edited value) is dark.
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_KEY) applyTheme(event.newValue === "light" ? "light" : "dark");
  };
  window.addEventListener(THEME_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => "dark" as const);
  const next: Theme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${next} theme`;
  return <button type="button" className="icon-button theme-toggle" aria-label={label} title={label}
    onClick={() => {
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch { /* storage blocked: the choice lasts for this page */ }
    }}>{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</button>;
}
