"use client";

import { useEffect, useState, type ComponentType } from "react";
import { MessageCircle } from "lucide-react";

// The study assistant is only needed when a student opens it, so its code is a separate download.
// It is fetched once the page is idle, and rendered directly once loaded: going through a lazy
// component and Suspense would add React's ~300 ms reveal delay to every first tap.
type Assistant = ComponentType<{ initialOpen?: boolean }>;
let assistant: Assistant | null = null;
let request: Promise<Assistant> | null = null;

function loadAssistant() {
  request ??= import("./chat-assistant").then(module => (assistant = module.default));
  request.catch(() => { request = null; });
  return request;
}

function LauncherButton({ busy = false, onOpen, onWarm }: { busy?: boolean; onOpen?: () => void; onWarm?: () => void }) {
  return <div className="assistant-widget">
    <button type="button" className="assistant-launcher" aria-label="Open MPSC study assistant" aria-expanded={false} aria-busy={busy}
      onClick={onOpen} onPointerEnter={onWarm} onFocus={onWarm}><MessageCircle size={22} /><span className="assistant-launcher-label">Ask a doubt</span></button>
  </div>;
}

export default function ChatLauncher() {
  const [Opened, setOpened] = useState<Assistant | null>(null);
  const [busy, setBusy] = useState(false);

  // Fetch the assistant's code once the page is idle, so the first tap opens it at once instead of
  // waiting on the network. Skipped when the phone asks to save data.
  useEffect(() => {
    if ((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) return;
    let handle = 0;
    const warm = () => { handle = window.setTimeout(() => void loadAssistant().catch(() => {}), 1500); };
    if (document.readyState === "complete") warm();
    else window.addEventListener("load", warm, { once: true });
    return () => { window.removeEventListener("load", warm); window.clearTimeout(handle); };
  }, []);

  // Pages open the assistant with this event; until it has loaded, the launcher handles it.
  useEffect(() => {
    if (Opened) return;
    const open = () => {
      if (assistant) { setOpened(() => assistant); return; }
      setBusy(true);
      loadAssistant().then(component => setOpened(() => component), () => setBusy(false));
    };
    window.addEventListener("mpsc-open-assistant", open);
    return () => window.removeEventListener("mpsc-open-assistant", open);
  }, [Opened]);

  if (Opened) return <Opened initialOpen />;
  return <LauncherButton busy={busy} onOpen={() => window.dispatchEvent(new Event("mpsc-open-assistant"))} onWarm={() => void loadAssistant().catch(() => {})} />;
}
