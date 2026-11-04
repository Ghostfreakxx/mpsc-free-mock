"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import InstallHelpDialog from "./install-help-dialog";
import { runInstallPrompt, useInstallState } from "./lib/install-prompt";

// "compact" sits in page headers; "hero" is the large button under the home page greeting.
export default function InstallAppButton({ variant = "compact" }: { variant?: "compact" | "hero" }) {
  const { prompt, installed } = useInstallState();
  const [helpOpen, setHelpOpen] = useState(false);

  async function handleInstall() {
    const outcome = await runInstallPrompt(prompt);
    if (outcome !== "accepted") setHelpOpen(true);
  }

  if (installed) return null;

  return (
    <>
      {variant === "hero" ? (
        <button type="button" className="button install-hero" onClick={handleInstall} aria-haspopup="dialog">
          <Download size={18} aria-hidden="true" />
          <span className="button-label-stack">
            <strong>Install the free app</strong>
            <small>One tap · opens from your home screen · works offline</small>
          </span>
        </button>
      ) : (
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
      )}
      {helpOpen && <InstallHelpDialog onClose={() => setHelpOpen(false)} />}
    </>
  );
}
