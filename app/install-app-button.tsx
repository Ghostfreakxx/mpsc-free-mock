"use client";

import { useEffect, useState } from "react";
import { Download, MoreHorizontal, Share, Smartphone, X } from "lucide-react";

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

type InstallPlatform = "ios" | "android" | "desktop";

function detectPlatform(): InstallPlatform {
  const userAgent = navigator.userAgent;
  const isIPad =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (/iPhone|iPad|iPod/i.test(userAgent) || isIPad) return "ios";
  if (/Android/i.test(userAgent)) return "android";
  return "desktop";
}

export default function InstallAppButton() {
  const [promptEvent, setPromptEvent] = useState<InstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const platform =
    typeof navigator === "undefined" ? "desktop" : detectPlatform();

  useEffect(() => {
    const standaloneQuery = window.matchMedia("(display-mode: standalone)");
    const checkStandalone = window.setTimeout(() => {
      if (
        standaloneQuery.matches ||
        Boolean((navigator as Navigator & { standalone?: boolean }).standalone)
      ) {
        setInstalled(true);
      }
    }, 0);

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as InstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setPromptEvent(null);
      setHelpOpen(false);
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.clearTimeout(checkStandalone);
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  useEffect(() => {
    if (!helpOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setHelpOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [helpOpen]);

  async function handleInstall() {
    if (!promptEvent) {
      setHelpOpen(true);
      return;
    }

    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      setPromptEvent(null);
      if (choice.outcome === "accepted") setInstalled(true);
      else setHelpOpen(true);
    } catch {
      setPromptEvent(null);
      setHelpOpen(true);
    }
  }

  if (installed) return null;

  return (
    <>
      <button
        type="button"
        className="button button-outline install-app-trigger"
        onClick={handleInstall}
        aria-haspopup="dialog"
        title="Install MPSC Free Mock on this device"
      >
        <Download size={15} aria-hidden="true" />
        <span>Install app</span>
      </button>

      {helpOpen && (
        <div
          className="install-dialog-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setHelpOpen(false);
          }}
        >
          <section
            className="install-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="install-dialog-title"
          >
            <header className="install-dialog-header">
              <span className="install-dialog-icon"><Smartphone size={20} /></span>
              <div>
                <p className="section-kicker">MPSC FREE MOCK</p>
                <h2 id="install-dialog-title">Install the learning app</h2>
              </div>
              <button
                type="button"
                className="icon-button"
                aria-label="Close install instructions"
                onClick={() => setHelpOpen(false)}
              ><X size={18} /></button>
            </header>

            {platform === "ios" ? (
              <ol className="install-steps">
                <li><span>1</span><p>Open this page in <strong>Safari</strong>.</p></li>
                <li><span>2</span><p>Tap <Share size={15} aria-label="Share" /> <strong>Share</strong> at the bottom of the screen.</p></li>
                <li><span>3</span><p>Choose <strong>Add to Home Screen</strong>, then tap <strong>Add</strong>.</p></li>
              </ol>
            ) : platform === "android" ? (
              <ol className="install-steps">
                <li><span>1</span><p>Open the browser menu <MoreHorizontal size={16} aria-label="More options" />.</p></li>
                <li><span>2</span><p>Tap <strong>Install app</strong> or <strong>Add to Home screen</strong>.</p></li>
                <li><span>3</span><p>Confirm <strong>Install</strong> to add it to your device.</p></li>
              </ol>
            ) : (
              <ol className="install-steps">
                <li><span>1</span><p>In Chrome or Edge, open the browser menu or the install icon in the address bar.</p></li>
                <li><span>2</span><p>Choose <strong>Install MPSC Free Mock</strong>, then confirm.</p></li>
              </ol>
            )}

            <p className="install-dialog-note">Your practice and study plan stay on this device.</p>
          </section>
        </div>
      )}
    </>
  );
}
