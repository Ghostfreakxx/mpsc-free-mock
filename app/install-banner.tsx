"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Download, X } from "lucide-react";
import InstallHelpDialog from "./install-help-dialog";
import { INSTALL_DISMISS_KEY } from "./install";
import { detectPlatform, isInAppBrowser, runInstallPrompt, useInstallState } from "./lib/install-prompt";

const SHOW_DELAY_MS = 3000;
const SNOOZE_MS = 5 * 24 * 60 * 60 * 1000;
// Timed papers and recorded classes need the whole screen.
const QUIET_PATHS = /^\/(exam-simulator|jee\/classes\/)/;

function snoozed(): boolean {
  try {
    const value = Number(window.localStorage.getItem(INSTALL_DISMISS_KEY));
    // Ignore missing, corrupt or future values.
    return Number.isFinite(value) && value > 0 && value <= Date.now() && Date.now() - value < SNOOZE_MS;
  } catch {
    return false;
  }
}

// A one-tap install card at the bottom of phone screens. Many students found the browser's
// "Add to Home screen" menu hard to find; this puts the install right in front of them.
export default function InstallBanner() {
  const { prompt, installed } = useInstallState();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    // Wait a moment so the card does not compete with the page's first paint.
    const timer = window.setTimeout(() => {
      setDismissed(snoozed());
      setReady(true);
    }, SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready || installed || dismissed) return null;

  const platform = detectPlatform();
  const inApp = isInAppBrowser();
  // Phones and tablets only: computers have the header button. iPhones never offer a prompt, so
  // they always get the card; Android gets it once Chrome offers a prompt, or in an in-app browser.
  const eligible = platform === "ios" || (platform === "android" && (Boolean(prompt) || inApp));
  if (!eligible && !helpOpen) return null;
  if (QUIET_PATHS.test(pathname ?? "") && !helpOpen) return null;

  function dismiss() {
    setDismissed(true);
    try {
      window.localStorage.setItem(INSTALL_DISMISS_KEY, String(Date.now()));
    } catch {
      /* the card just comes back next visit */
    }
  }

  async function install() {
    const outcome = await runInstallPrompt(prompt);
    if (outcome === "unavailable") setHelpOpen(true);
    else if (outcome === "dismissed") dismiss();
  }

  return (
    <>
      {eligible && (
        <aside className="install-banner" aria-label="Install the app">
          {/* eslint-disable-next-line @next/next/no-img-element -- 40px app icon, already cached */}
          <img className="install-banner-icon" src="/icon-192.png" alt="" width={40} height={40} />
          <div className="install-banner-copy">
            <strong>Get the MPSC Learn app</strong>
            <span>Free · opens in one tap · works offline</span>
          </div>
          <button type="button" className="button button-dark install-banner-action" onClick={install}>
            <Download size={16} aria-hidden="true" />
            {inApp ? "How to" : "Install"}
          </button>
          <button type="button" className="icon-button install-banner-close" aria-label="Not now" onClick={dismiss}>
            <X size={17} />
          </button>
        </aside>
      )}
      {helpOpen && <InstallHelpDialog onClose={() => setHelpOpen(false)} />}
    </>
  );
}
