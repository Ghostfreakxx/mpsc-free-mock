"use client";

import { useEffect, useState } from "react";
import { Check, Copy, ExternalLink, MoreHorizontal, MoreVertical, Share, Smartphone, X } from "lucide-react";
import { chromeIntentUrl, detectPlatform, isInAppBrowser } from "./lib/install-prompt";

// Step-by-step help for browsers that give no one-tap install: iPhone, in-app browsers (Facebook,
// Messenger, Instagram) and Android browsers that have not offered a prompt yet.
export default function InstallHelpDialog({ onClose }: { onClose: () => void }) {
  const [platform] = useState(detectPlatform);
  const [inApp] = useState(isInAppBrowser);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      className="install-dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className="install-dialog" role="dialog" aria-modal="true" aria-labelledby="install-dialog-title">
        <header className="install-dialog-header">
          <span className="install-dialog-icon"><Smartphone size={20} /></span>
          <div>
            <p className="section-kicker">MPSC FREE MOCK</p>
            <h2 id="install-dialog-title">{inApp ? "Open in your browser first" : "Install the learning app"}</h2>
          </div>
          <button type="button" className="icon-button" aria-label="Close install instructions" onClick={onClose} autoFocus>
            <X size={18} />
          </button>
        </header>

        {inApp ? (
          <>
            <p className="install-dialog-lead">
              This page is open inside another app (like Facebook or Messenger), which cannot install apps.
              Open it in {platform === "ios" ? "Safari" : "Chrome"}, then tap Install.
            </p>
            {platform === "android" && (
              <a className="button button-dark install-dialog-action" href={chromeIntentUrl()} rel="noreferrer">
                <ExternalLink size={16} aria-hidden="true" /> Open in Chrome
              </a>
            )}
            <ol className="install-steps">
              <li><span>1</span><p>Tap the menu {platform === "ios" ? <MoreHorizontal size={16} aria-label="More options" /> : <MoreVertical size={16} aria-label="More options" />} at the top or bottom of the screen.</p></li>
              <li><span>2</span><p>Choose <strong>{platform === "ios" ? "Open in Safari" : "Open in Chrome"}</strong> or <strong>Open in browser</strong>.</p></li>
              <li><span>3</span><p>On the page that opens, tap <strong>Install</strong>.</p></li>
            </ol>
            <button type="button" className="button button-outline install-dialog-action" onClick={copyLink}>
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              {copied ? "Link copied. Paste it in your browser" : "Copy link"}
            </button>
          </>
        ) : platform === "ios" ? (
          <ol className="install-steps">
            <li><span>1</span><p>Tap <Share size={15} aria-label="Share" /> <strong>Share</strong>: at the bottom of the screen in Safari, or in the address bar in Chrome.</p></li>
            <li><span>2</span><p>Scroll down and choose <strong>Add to Home Screen</strong>.</p></li>
            <li><span>3</span><p>Tap <strong>Add</strong>. MPSC Learn now opens from your home screen like an app.</p></li>
          </ol>
        ) : platform === "android" ? (
          <ol className="install-steps">
            <li><span>1</span><p>Tap the browser menu <MoreVertical size={16} aria-label="More options" /> at the top right.</p></li>
            <li><span>2</span><p>Tap <strong>Install app</strong> or <strong>Add to Home screen</strong>.</p></li>
            <li><span>3</span><p>Tap <strong>Install</strong> to confirm.</p></li>
          </ol>
        ) : (
          <ol className="install-steps">
            <li><span>1</span><p>In Chrome or Edge, click the install icon in the address bar, or open the browser menu.</p></li>
            <li><span>2</span><p>Choose <strong>Install MPSC Free Mock</strong>, then confirm.</p></li>
          </ol>
        )}

        <p className="install-dialog-note">Free, opens like an app and works offline. Your practice and study plan stay on this device.</p>
      </section>
    </div>
  );
}
