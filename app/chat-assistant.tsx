"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  LoaderCircle,
  MessageCircle,
  RotateCcw,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type ChatLink = { label: string; href: string };
type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  links?: ChatLink[];
  mode?: "ai" | "offline";
};

const suggestions = [
  "Help me plan today's study session",
  "Where can I practice MPSC questions?",
  "How do I improve my accuracy?",
];

const openingMessage: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I’m your MPSC study mentor. Bring me a question, a topic you’re revising, or the time you have today and we’ll find a useful next step.",
};

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([openingMessage]);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const latestMessageRef = useRef<HTMLDivElement>(null);

  function restoreFocus() {
    const target = returnFocusRef.current?.isConnected
      ? returnFocusRef.current
      : launcherRef.current;
    target?.focus();
  }

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();

    function closeOnEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        restoreFocus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    function openFromPageAction() {
      returnFocusRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : launcherRef.current;
      setIsOpen(true);
    }

    window.addEventListener("mpsc-open-assistant", openFromPageAction);
    return () => window.removeEventListener("mpsc-open-assistant", openFromPageAction);
  }, []);

  useEffect(() => {
    latestMessageRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, isSending]);

  async function sendMessage(content: string) {
    const prompt = content.trim();
    if (!prompt || isSending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: prompt }];
    setMessages(nextMessages);
    setDraft("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((message) => message.role === "user" || message.role === "assistant")
            .slice(-8)
            .map(({ role, content: messageContent }) => ({ role, content: messageContent })),
        }),
      });
      const result = (await response.json()) as {
        reply?: string;
        links?: ChatLink[];
        mode?: "ai" | "offline";
        error?: string;
      };

      if (!response.ok) throw new Error(result.error || "The assistant could not answer that just now.");
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: result.reply || "Try that once more with a little more detail.",
          links: result.links,
          mode: result.mode,
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "I could not reach the study assistant. Please try again in a moment.",
          links: [{ label: "Open MPSC practice", href: "/mock-test" }],
          mode: "offline",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(draft);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(draft);
    }
  }

  function startFreshChat() {
    if (!isSending) setMessages([openingMessage]);
  }

  function closeChat() {
    setIsOpen(false);
    restoreFocus();
  }

  return (
    <div className="assistant-widget">
      {isOpen && (
        <section className="assistant-panel" role="dialog" aria-modal="false" aria-labelledby="assistant-title">
          <header className="assistant-header">
            <span className="assistant-avatar"><Bot size={20} /></span>
            <div className="assistant-heading-copy">
              <strong id="assistant-title">MPSC study mentor</strong>
              <span><span className="assistant-status-dot" />Study support</span>
            </div>
            <button
              type="button"
              className="assistant-header-button"
              onClick={startFreshChat}
              disabled={isSending}
              aria-label="Start a new chat"
              title="Start a new chat"
            ><RotateCcw size={16} /></button>
            <button
              type="button"
              className="assistant-header-button"
              onClick={closeChat}
              aria-label="Close study assistant"
              title="Close"
            ><X size={18} /></button>
          </header>

          <div className="assistant-messages" role="log" aria-live="polite" aria-relevant="additions text">
            {messages.map((message, index) => (
              <div
                className={`assistant-message-row ${message.role === "user" ? "is-user" : "is-assistant"}`}
                key={`${index}-${message.role}`}
                ref={index === messages.length - 1 ? latestMessageRef : undefined}
              >
                {message.role === "assistant" && <span className="assistant-message-icon"><Sparkles size={13} /></span>}
                <div className="assistant-bubble">
                  <p>{message.content}</p>
                  {!!message.links?.length && (
                    <div className="assistant-links">
                      {message.links.map((link) => (
                        <Link href={link.href} key={`${link.href}-${link.label}`} onClick={() => setIsOpen(false)}>
                          {link.label}<ArrowRight size={13} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && !isSending && (
              <div className="assistant-suggestions" aria-label="Suggested questions">
                {suggestions.map((suggestion) => (
                  <button type="button" key={suggestion} onClick={() => void sendMessage(suggestion)}>
                    {suggestion}<ArrowRight size={13} />
                  </button>
                ))}
              </div>
            )}

            {isSending && (
              <div className="assistant-message-row is-assistant" role="status">
                <span className="assistant-message-icon"><Sparkles size={13} /></span>
                <div className="assistant-bubble assistant-typing"><LoaderCircle size={15} />Thinking through it…</div>
              </div>
            )}
          </div>

          <form className="assistant-form" onSubmit={submit}>
            <label className="assistant-input-wrap">
              <span className="sr-only">Message the MPSC study mentor</span>
              <textarea
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={handleInputKeyDown}
                maxLength={1_200}
                rows={2}
                placeholder="Ask about a topic or study plan…"
                disabled={isSending}
              />
            </label>
            <button
              className="assistant-send-button"
              type="submit"
              disabled={!draft.trim() || isSending}
              aria-label="Send message"
              title="Send message"
            >{isSending ? <LoaderCircle size={17} className="assistant-spinner" /> : <Send size={17} />}</button>
          </form>
          <div className="assistant-footnote">Check official notices for dates and syllabus changes.</div>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        className={`assistant-launcher ${isOpen ? "is-open" : ""}`}
        aria-label={isOpen ? "Close study assistant" : "Open MPSC study assistant"}
        aria-expanded={isOpen}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
            restoreFocus();
          } else {
            returnFocusRef.current = launcherRef.current;
            setIsOpen(true);
          }
        }}
      >{isOpen ? <X size={22} /> : <MessageCircle size={22} />}</button>
    </div>
  );
}
