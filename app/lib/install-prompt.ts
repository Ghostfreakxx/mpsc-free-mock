"use client";

import { useSyncExternalStore } from "react";
import { INSTALL_READY_EVENT } from "../install";

export interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export type InstallPlatform = "ios" | "android" | "desktop";

interface InstallWindow extends Window {
  __mpscInstallPrompt?: InstallPromptEvent | null;
  __mpscInstalled?: boolean;
}

export interface InstallState {
  /** The browser's own install prompt, when it offered one. */
  prompt: InstallPromptEvent | null;
  /** Already running as an installed app, or installed in this visit. */
  installed: boolean;
}

const serverState: InstallState = { prompt: null, installed: false };
let cached: InstallState = serverState;

function readState(): InstallState {
  const win = window as InstallWindow;
  const installed =
    Boolean(win.__mpscInstalled) ||
    window.matchMedia("(display-mode: standalone)").matches ||
    Boolean((navigator as Navigator & { standalone?: boolean }).standalone);
  const prompt = installed ? null : win.__mpscInstallPrompt ?? null;
  if (prompt !== cached.prompt || installed !== cached.installed) cached = { prompt, installed };
  return cached;
}

function subscribe(onChange: () => void) {
  window.addEventListener(INSTALL_READY_EVENT, onChange);
  return () => window.removeEventListener(INSTALL_READY_EVENT, onChange);
}

export function useInstallState(): InstallState {
  return useSyncExternalStore(subscribe, readState, () => serverState);
}

function update(changes: { prompt?: null; installed?: boolean }) {
  const win = window as InstallWindow;
  if (changes.prompt === null) win.__mpscInstallPrompt = null;
  if (changes.installed) win.__mpscInstalled = true;
  window.dispatchEvent(new Event(INSTALL_READY_EVENT));
}

/**
 * Shows the browser's install prompt. Returns "accepted", "dismissed", or "unavailable" when the
 * browser gave no prompt (iPhone, in-app browsers, or it was already used), so the caller can show
 * step-by-step help instead.
 */
export async function runInstallPrompt(prompt: InstallPromptEvent | null) {
  if (!prompt) return "unavailable" as const;
  try {
    await prompt.prompt();
    const choice = await prompt.userChoice;
    // A prompt can be shown only once; Chrome fires a fresh event later if the student said no.
    update({ prompt: null, installed: choice.outcome === "accepted" });
    return choice.outcome;
  } catch {
    update({ prompt: null });
    return "unavailable" as const;
  }
}

export function detectPlatform(): InstallPlatform {
  if (typeof navigator === "undefined") return "desktop";
  const userAgent = navigator.userAgent;
  const isIPad = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (/iPhone|iPad|iPod/i.test(userAgent) || isIPad) return "ios";
  if (/Android/i.test(userAgent)) return "android";
  return "desktop";
}

/**
 * Facebook, Messenger, Instagram and similar apps open links in their own browser, which cannot
 * install web apps. Many students arrive this way from shared links.
 */
export function isInAppBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  return /FBAN|FBAV|FB_IAB|FBIOS|Messenger|Instagram|Line\/|MicroMessenger|Snapchat|TikTok|musical_ly|Twitter|; wv\)/i.test(
    navigator.userAgent,
  );
}

/** Android only: a link that opens the current page in Chrome, outside the in-app browser. */
export function chromeIntentUrl(): string {
  const { host, pathname, search } = window.location;
  return `intent://${host}${pathname}${search}#Intent;scheme=https;package=com.android.chrome;end`;
}
