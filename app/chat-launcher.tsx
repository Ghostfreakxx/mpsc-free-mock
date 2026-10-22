"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

// The study assistant is only needed when a student opens it, so its code loads on first use
// instead of on every page. This placeholder looks and behaves like the real launcher.
const loadAssistant = () => import("./chat-assistant");
const ChatAssistant = dynamic(loadAssistant, { ssr: false, loading: () => <LauncherButton busy /> });

function LauncherButton({ busy = false, onOpen, onWarm }: { busy?: boolean; onOpen?: () => void; onWarm?: () => void }) {
  return <div className="assistant-widget">
    <button type="button" className="assistant-launcher" aria-label="Open MPSC study assistant" aria-expanded={false} aria-busy={busy}
      onClick={onOpen} onPointerEnter={onWarm} onFocus={onWarm}><MessageCircle size={22} /></button>
  </div>;
}

export default function ChatLauncher() {
  const [activated, setActivated] = useState(false);

  // Pages open the assistant with this event; load it the first time that happens.
  useEffect(() => {
    if (activated) return;
    const open = () => setActivated(true);
    window.addEventListener("mpsc-open-assistant", open);
    return () => window.removeEventListener("mpsc-open-assistant", open);
  }, [activated]);

  if (activated) return <ChatAssistant initialOpen />;
  return <LauncherButton onOpen={() => setActivated(true)} onWarm={() => void loadAssistant()} />;
}
