"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import Image from "next/image";
import ReplyPlayback from "./reply-playback";
import Link from "next/link";
import { CLASSROOM_LESSON_EVENT, type ClassroomLesson } from "./lib/classroom-lesson";
import {
  ArrowRight,
  LoaderCircle,
  MessageCircle,
  RotateCcw,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import {
  defaultTeachingOptions, MAX_CHAT_CONTEXT_CHARS, MAX_CHAT_MESSAGES, MAX_QUESTION_CHARS,
  subjects, teachers, teachingLanguages, teachingModes, type TeacherId, type TeachingOptions,
} from "./lib/tochhawng-teachers";

type ChatLink = { label: string; href: string };
type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  links?: ChatLink[];
  mode?: "ai" | "offline";
  teacher?: TeacherId;
  language?: TeachingOptions["language"];
  // Connection or server errors are shown to the student but never sent back as conversation history.
  failed?: boolean;
};

const suggestions = [
  "Preamble of the Constitution of India",
  "Help me plan today's study session",
  "Where can I practice MPSC questions?",
  "How do I improve my accuracy?",
];

class AssistantError extends Error {}

function contextFor(messages: ChatMessage[]) {
  const context = [];
  let remaining = MAX_CHAT_CONTEXT_CHARS;
  for (const message of messages.slice().reverse()) {
    if (message.failed || message.mode === "offline") continue;
    if (context.length >= MAX_CHAT_MESSAGES || message.content.length > remaining) break;
    context.push({ role: message.role, content: message.content });
    remaining -= message.content.length;
  }
  return context.reverse();
}

// Loaded on demand by ChatLauncher; opens straight away when the student asked for it.
export default function ChatAssistant({ initialOpen = false }: { initialOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [options, setOptions] = useState(defaultTeachingOptions);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const teacher = teachers[options.teacher];
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
    if (!returnFocusRef.current && document.activeElement instanceof HTMLElement) {
      returnFocusRef.current = document.activeElement;
    }
    // On phones, focusing would pop the keyboard up over the chat as it opens; there the student taps the box.
    if (window.matchMedia("(pointer: fine)").matches) inputRef.current?.focus();

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
    function openFromPageAction(event: Event) {
      returnFocusRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : launcherRef.current;
      if (event instanceof CustomEvent && event.detail === "zorami") {
        setOptions(previous => ({ ...previous, teacher: "zorami" }));
      }
      setIsOpen(true);
    }

    window.addEventListener("mpsc-open-assistant", openFromPageAction);
    return () => window.removeEventListener("mpsc-open-assistant", openFromPageAction);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    latestMessageRef.current?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "nearest" });
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
          messages: contextFor(nextMessages),
          teaching: options,
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        reply?: string;
        links?: ChatLink[];
        mode?: "ai" | "offline";
        error?: string;
      };

      if (!response.ok) throw new AssistantError(result.error || "The assistant could not answer that just now.");
      if (window.location.pathname === "/study-room" && result.reply && (result.mode === "ai" || result.mode === "offline")) {
        window.dispatchEvent(new CustomEvent<ClassroomLesson>(CLASSROOM_LESSON_EVENT, {
          detail: { ...options, topic: prompt.replace(/\s+/gu, " ").slice(0, 90), text: result.reply, source: result.mode },
        }));
      }
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: result.reply || "Try that once more with a little more detail.",
          links: result.links,
          mode: result.mode,
          teacher: result.mode === "ai" ? options.teacher : undefined,
          language: options.language,
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          // Only server-written messages are shown; browser errors like "Failed to fetch" are not.
          content:
            error instanceof AssistantError
              ? error.message
              : "I could not reach the study assistant. Check your connection and try again in a moment.",
          links: [{ label: "Open MPSC practice", href: "/mock-test" }],
          mode: "offline",
          failed: true,
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
    if (!isSending) {
      setMessages([]);
      window.dispatchEvent(new CustomEvent(CLASSROOM_LESSON_EVENT, { detail: null }));
    }
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
            <span className="assistant-avatar">
              <Image src={`/teachers/${options.teacher}.webp`} width={42} height={42} unoptimized
                alt={options.teacher === "zorami" ? "Illustrated avatar of Zorami wearing spectacles" : ""} />
            </span>
            <div className="assistant-heading-copy">
              <strong id="assistant-title">Tochhawng Teachers</strong>
              <span>Fictional Mizo AI teachers</span>
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

          <fieldset className="assistant-teaching-options" disabled={isSending}>
            <legend className="sr-only">Teaching options</legend>
            <div>
              <label htmlFor="assistant-teacher">AI teacher</label>
              <select id="assistant-teacher" value={options.teacher} onChange={event => setOptions({ ...options, teacher: event.target.value as TeacherId })}>
                {Object.entries(teachers).map(([id, value]) => <option key={id} value={id}>{value.givenName}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="assistant-subject">Subject</label>
              <select id="assistant-subject" value={options.subject} onChange={event => setOptions({ ...options, subject: event.target.value as TeachingOptions["subject"] })}>
                {Object.entries(subjects).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="assistant-mode">Teaching mode</label>
              <select id="assistant-mode" value={options.mode} onChange={event => setOptions({ ...options, mode: event.target.value as TeachingOptions["mode"] })}>
                {Object.entries(teachingModes).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="assistant-language">Reply language</label>
              <select id="assistant-language" value={options.language} onChange={event => setOptions({ ...options, language: event.target.value as TeachingOptions["language"] })}>
                {Object.entries(teachingLanguages).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
              </select>
            </div>
          </fieldset>
          <div className="assistant-messages" role="log" aria-live="polite" aria-relevant="additions text">
            {messages.length === 0 && (
              <div className="assistant-message-row is-assistant">
                <div className="assistant-bubble">
                  <strong>{teacher.name}</strong>
                  <p>{teacher.specialty}</p>
                </div>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                className={`assistant-message-row ${message.role === "user" ? "is-user" : "is-assistant"}`}
                key={`${index}-${message.role}`}
                ref={index === messages.length - 1 ? latestMessageRef : undefined}
              >
                {message.role === "assistant" && <span className="assistant-message-icon"><Sparkles size={15} /></span>}
                <div className="assistant-bubble">
                  {message.teacher && <strong>{teachers[message.teacher].name}</strong>}
                  <p>{message.content}</p>
                  {message.role === "assistant" && message.language && (
                    <ReplyPlayback text={message.content} language={message.language} />
                  )}
                  {!!message.links?.length && (
                    <div className="assistant-links">
                      {message.links.map((link) => (
                        <Link href={link.href} key={`${link.href}-${link.label}`} onClick={() => setIsOpen(false)}>
                          {link.label}<ArrowRight size={16} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 0 && !isSending && (
              <div className="assistant-suggestions" aria-label="Suggested questions">
                {suggestions.map((suggestion) => (
                  <button type="button" key={suggestion} onClick={() => void sendMessage(suggestion)}>
                    {suggestion}<ArrowRight size={16} />
                  </button>
                ))}
              </div>
            )}

            {isSending && (
              <div className="assistant-message-row is-assistant" role="status">
                <span className="assistant-message-icon"><Sparkles size={15} /></span>
                <div className="assistant-bubble assistant-typing"><LoaderCircle size={17} className="assistant-spinner" />Thinking through it…</div>
              </div>
            )}
          </div>

          <form className="assistant-form" onSubmit={submit}>
            <label className="assistant-input-wrap">
              <span className="sr-only">Message the AI teacher</span>
              <textarea
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={handleInputKeyDown}
                maxLength={MAX_QUESTION_CHARS}
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
            >{isSending ? <LoaderCircle size={20} className="assistant-spinner" /> : <Send size={20} />}</button>
          </form>
          <div className="assistant-footnote">AI replies can contain mistakes. Check important details with course materials and official notices.</div>
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
      >{isOpen ? <X size={22} /> : <><MessageCircle size={22} /><span className="assistant-launcher-label">Ask a doubt</span></>}</button>
    </div>
  );
}
