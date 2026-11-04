"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import InstallHelpDialog from "./install-help-dialog";
import { runInstallPrompt, useInstallState } from "./lib/install-prompt";

export default function InstallAppButton() {
  const { prompt, installed } = useInstallState();
  const [helpOpen, setHelpOpen] = useState(false);

  async function handleInstall() {
    const outcome = await runInstallPrompt(prompt);
    if (outcome !== "accepted") setHelpOpen(true);
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
      {helpOpen && <InstallHelpDialog onClose={() => setHelpOpen(false)} />}
    </>
  );
}
