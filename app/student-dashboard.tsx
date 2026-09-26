"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import InstallAppButton from "./install-app-button";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookMarked,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  Compass,
  GraduationCap,
  LayoutDashboard,
  LibraryBig,
  ListChecks,
  MapPin,
  NotebookPen,
  Play,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type View = "overview" | "courses" | "planner" | "progress";
type PracticeAnswer = { category: string; correct: boolean };
type PlannerHistory = Record<string, string[]>;

const PLANNER_KEY = "mpsc.academy.planner.v1";
const PRACTICE_KEY = "mpsc.practice.responses.v1";

const tasks = [
  { id: "practice", title: "Answer a set of MPSC questions", detail: "Build recall with focused practice", href: "/mock-test", icon: ClipboardCheck },
  { id: "review", title: "Review one topic you studied", detail: "Strengthen what you already know", href: "/mock-test", icon: BookOpen },
  { id: "reading", title: "Spend 20 minutes with your notes", detail: "Keep your foundations moving", href: "/college-notes", icon: NotebookPen },
];

const courses: {
  title: string;
  subject: string;
  description: string;
  href: string;
  icon: LucideIcon;
  theme: string;
  format: string;
}[] = [
  {
    title: "MPSC preparation",
    subject: "Civil services",
    description: "Subject-wise questions, explanations and elimination hints for your MPSC preparation.",
    href: "/mock-test",
    icon: GraduationCap,
    theme: "green",
    format: "Practice bank",
  },
  {
    title: "Arts college notes",
    subject: "Arts and humanities",
    description: "Open your college reading and revision material in one place.",
    href: "/college-notes",
    icon: BookMarked,
    theme: "coral",
    format: "Study notes",
  },
  {
    title: "Mizo Tawng",
    subject: "Mizo language",
    description: "Learn the Mizo alphabet, vowel set and pronunciation with English explanations and practice.",
    href: "/mizo",
    icon: BookOpen,
    theme: "gold",
    format: "Language course",
  },
  {
    title: "NEET science practice",
    subject: "Medical entrance",
    description: "Science practice for learners preparing for NEET.",
    href: "/neet",
    icon: Sparkles,
    theme: "blue",
    format: "Question bank",
  },
  {
    title: "CUET PG practice",
    subject: "Postgraduate entrance",
    description: "Explore the current CUET PG preparation material.",
    href: "/cuet-pg",
    icon: Compass,
    theme: "gold",
    format: "Question bank",
  },
];

const mainNavigation: { id: View | "practice"; label: string; icon: LucideIcon; href?: string }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "courses", label: "My learning", icon: LibraryBig },
  { id: "practice", label: "Practice tests", icon: ClipboardCheck, href: "/mock-test" },
  { id: "planner", label: "Study planner", icon: ListChecks },
  { id: "progress", label: "My progress", icon: TrendingUp },
];

function getDayKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export default function StudentDashboard() {
  const [view, setView] = useState<View>("overview");
  const [search, setSearch] = useState("");
  const [plannerHistory, setPlannerHistory] = useState<PlannerHistory>({});
  const [practiceAnswers, setPracticeAnswers] = useState<PracticeAnswer[]>([]);
  const [ready, setReady] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    const restore = () => {
      try {
        const savedPlanner = localStorage.getItem(PLANNER_KEY);
        if (savedPlanner) {
          const parsed: unknown = JSON.parse(savedPlanner);
          if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            setPlannerHistory(parsed as PlannerHistory);
          }
        }

        const savedAnswers = localStorage.getItem(PRACTICE_KEY);
        if (savedAnswers) {
          const parsed: unknown = JSON.parse(savedAnswers);
          if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            const answers = Object.values(parsed as Record<string, unknown>).filter(
              (answer): answer is PracticeAnswer =>
                Boolean(answer) &&
                typeof answer === "object" &&
                typeof (answer as PracticeAnswer).category === "string" &&
                typeof (answer as PracticeAnswer).correct === "boolean",
            );
            setPracticeAnswers(answers);
          }
        }
      } catch {
        // Keep the workspace usable if browser storage is unavailable.
      }
      setReady(true);
    };
    const timer = window.setTimeout(restore, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(PLANNER_KEY, JSON.stringify(plannerHistory));
    } catch {
      // Planner updates remain available for the current session.
    }
  }, [plannerHistory, ready]);

  const today = new Date();
  const todayKey = getDayKey(today);
  const completedToday = plannerHistory[todayKey] ?? [];
  const completionRate = Math.round((completedToday.length / tasks.length) * 100);
  const correctAnswers = practiceAnswers.filter((answer) => answer.correct).length;
  const accuracy = practiceAnswers.length
    ? Math.round((correctAnswers / practiceAnswers.length) * 100)
    : null;

  const streak = useMemo(() => {
    let count = 0;
    const cursor = new Date();
    while (count < 365 && (plannerHistory[getDayKey(cursor)]?.length ?? 0) > 0) {
      count += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }, [plannerHistory]);

  const week = useMemo(() => {
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - index));
      const key = getDayKey(date);
      return {
        key,
        label: date.toLocaleDateString("en", { weekday: "short" }),
        completed: plannerHistory[key]?.length ?? 0,
        isToday: key === getDayKey(new Date()),
      };
    });
  }, [plannerHistory]);

  const categoryProgress = useMemo(() => {
    const groups = new Map<string, { attempted: number; correct: number }>();
    for (const answer of practiceAnswers) {
      const current = groups.get(answer.category) ?? { attempted: 0, correct: 0 };
      current.attempted += 1;
      if (answer.correct) current.correct += 1;
      groups.set(answer.category, current);
    }
    return [...groups.entries()]
      .map(([category, score]) => ({ category, ...score }))
      .sort((left, right) => right.attempted - left.attempted)
      .slice(0, 6);
  }, [practiceAnswers]);

  const filteredCourses = courses.filter((course) => {
    const needle = search.trim().toLowerCase();
    return !needle || `${course.title} ${course.subject} ${course.description}`.toLowerCase().includes(needle);
  });

  const toggleTask = (taskId: string) => {
    setPlannerHistory((current) => {
      const next = new Set(current[todayKey] ?? []);
      if (next.has(taskId)) next.delete(taskId);
      else next.add(taskId);
      return { ...current, [todayKey]: [...next] };
    });
  };

  const viewTitle = {
    overview: "Your learning space",
    courses: "My learning",
    planner: "Study planner",
    progress: "My progress",
  }[view];

  const viewDescription = {
    overview: "A steady plan makes a big goal feel closer.",
    courses: "Pick up a subject and keep moving at your pace.",
    planner: "Set a rhythm for today and check off each step.",
    progress: "Your practice and study rhythm, in one view.",
  }[view];

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.trim()) setView("courses");
  };

  return (
    <main className="academy-shell">
      <aside className="academy-sidebar">
        <Link href="/" className="academy-brand" aria-label="MPSC Free Mock home">
          <span className="brand-mark"><GraduationCap size={22} strokeWidth={2.1} /></span>
          <span className="brand-copy"><strong>MPSC FREE MOCK</strong><small>LEARNING SPACE</small></span>
        </Link>

        <div className="sidebar-label">YOUR WORKSPACE</div>
        <nav className="sidebar-nav" aria-label="Main navigation">
          {mainNavigation.map((item) => {
            const Icon = item.icon;
            if (item.href) {
              return (
                <Link href={item.href} key={item.id} className="sidebar-link">
                  <Icon size={18} strokeWidth={1.9} /><span>{item.label}</span><ArrowUpRight className="nav-external" size={14} />
                </Link>
              );
            }
            return (
              <button
                key={item.id}
                type="button"
                className={`sidebar-link ${view === item.id ? "is-active" : ""}`}
                aria-current={view === item.id ? "page" : undefined}
                onClick={() => setView(item.id as View)}
              >
                <Icon size={18} strokeWidth={1.9} /><span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-label sidebar-label-spaced">LEARNING RESOURCES</div>
        <nav className="sidebar-nav" aria-label="Learning resources">
          {courses.slice(1).map((course) => {
            const Icon = course.icon;
            return (
              <Link href={course.href} key={course.href} className="sidebar-link">
                <Icon size={18} strokeWidth={1.9} /><span>{course.title}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-help">
          <span className="help-icon"><CircleHelp size={17} /></span>
          <div><strong>Need a fresh start?</strong><span>Make a small plan for today.</span></div>
          <button type="button" title="Open today's study plan" onClick={() => setView("planner")}><ArrowRight size={16} /></button>
        </div>
        <div className="sidebar-profile">
          <span className="profile-avatar">M</span>
          <div><strong>Mizoram aspirant</strong><span>Independent learner</span></div>
          <span className="profile-status" title="Learning space active" />
        </div>
      </aside>

      <div className="academy-main">
        <header className="academy-topbar">
          <div className="mobile-brand">
            <span className="brand-mark"><GraduationCap size={19} /></span><strong>MPSC FREE MOCK</strong>
          </div>
          <label className="global-search">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(event) => handleSearch(event.target.value)}
              onFocus={() => { if (search.trim()) setView("courses"); }}
              placeholder="Search your learning library"
              aria-label="Search courses and resources"
            />
          </label>
          <div className="topbar-actions">
            <span className="topbar-date"><CalendarDays size={15} />{today.toLocaleDateString("en", { weekday: "short", month: "short", day: "numeric" })}</span>
            <InstallAppButton />
            <div className="notification-wrap">
              <button
                type="button"
                className={`icon-button ${notificationsOpen ? "is-pressed" : ""}`}
                aria-label="Notifications"
                aria-expanded={notificationsOpen}
                onClick={() => setNotificationsOpen((open) => !open)}
              ><Bell size={18} /></button>
              {notificationsOpen && (
                <div className="notification-popover">
                  <div className="popover-heading"><strong>Updates</strong><button type="button" aria-label="Close updates" onClick={() => setNotificationsOpen(false)}>×</button></div>
                  <div className="empty-notification"><span><CheckCircle2 size={19} /></span><strong>You&apos;re all caught up</strong><p>There are no new updates today.</p></div>
                  <button className="popover-link" type="button" onClick={() => { setView("planner"); setNotificationsOpen(false); }}>Review today&apos;s plan <ArrowRight size={15} /></button>
                </div>
              )}
            </div>
            <span className="topbar-avatar" aria-label="Mizoram aspirant">M</span>
          </div>
        </header>

        <section className="academy-content">
          {view === "overview" ? (
            <>
              <section className="welcome-band">
                <div className="welcome-copy">
                  <div className="eyebrow"><span className="eyebrow-dot" />MIZORAM PUBLIC SERVICE COMMISSION</div>
                  <h1>{getGreeting()},<br /><span>aspirant.</span></h1>
                  <p>Every focused session brings the goal a little closer. Your next step is ready.</p>
                  <div className="welcome-actions">
                    <Link href="/mock-test" className="button button-dark"><Play size={16} fill="currentColor" /><span className="button-label-stack"><strong>Start MPSC practice</strong><small>Zir zui rawh · Go to practice</small></span></Link>
                    <button type="button" className="text-button" onClick={() => setView("planner")}>View today&apos;s plan <ArrowRight size={16} /></button>
                  </div>
                </div>
                <div className="welcome-photo">
                  <Image src="/mizoram-study.webp" alt="A student studying beside a window overlooking the hills of Aizawl" fill priority sizes="(max-width: 760px) 100vw, 54vw" />
                  <div className="photo-location"><MapPin size={14} />Aizawl, Mizoram</div>
                </div>
                <div className="welcome-index"><span>01</span><span className="index-line" /><span>FOCUS</span></div>
              </section>

              <aside className="learning-motto" aria-label="Our learning principle">
                <blockquote>“Education is an offering to God in a church. Share it freely; do not sell it like a five-star meal.”</blockquote>
                <p>Every revolution starts with a student. Learn freely, ask bold questions, and build a better future together.</p>
              </aside>

              <section className="metric-row" aria-label="Your learning summary">
                <div className="metric-item"><span className="metric-icon metric-green"><ListChecks size={18} /></span><div><span className="metric-label">TODAY&apos;S PLAN</span><strong>{completedToday.length}<small> / {tasks.length}</small></strong><span className="metric-note">steps completed</span></div></div>
                <div className="metric-item"><span className="metric-icon metric-coral"><ClipboardCheck size={18} /></span><div><span className="metric-label">QUESTIONS ANSWERED</span><strong>{practiceAnswers.length}</strong><span className="metric-note">in MPSC practice</span></div></div>
                <div className="metric-item"><span className="metric-icon metric-blue"><Target size={18} /></span><div><span className="metric-label">PRACTICE ACCURACY</span><strong>{accuracy === null ? "—" : `${accuracy}%`}</strong><span className="metric-note">{accuracy === null ? "Start your first question set" : `${correctAnswers} correct answers`}</span></div></div>
                <div className="metric-item"><span className="metric-icon metric-gold"><Activity size={18} /></span><div><span className="metric-label">STUDY STREAK</span><strong>{streak}<small> {streak === 1 ? "day" : "days"}</small></strong><span className="metric-note">days with a completed plan</span></div></div>
              </section>

              <section className="overview-grid">
                <div className="content-panel plan-panel">
                  <div className="panel-heading">
                    <div><span className="section-kicker">A GOOD PLACE TO BEGIN</span><h2>Today&apos;s plan</h2></div>
                    <button type="button" className="subtle-action" onClick={() => setView("planner")}>Full planner <ArrowUpRight size={15} /></button>
                  </div>
                  <div className="task-progress-line"><span style={{ width: `${completionRate}%` }} /></div>
                  <div className="task-progress-caption"><span>{completedToday.length} of {tasks.length} steps done</span><strong>{completionRate}%</strong></div>
                  <div className="task-list">
                    {tasks.map((task) => {
                      const Icon = task.icon;
                      const isComplete = completedToday.includes(task.id);
                      return (
                        <div className={`task-row ${isComplete ? "task-done" : ""}`} key={task.id}>
                          <label className="task-toggle" aria-label={`${isComplete ? "Mark incomplete" : "Complete"}: ${task.title}`}>
                            <input type="checkbox" checked={isComplete} onChange={() => toggleTask(task.id)} />
                            <span className="custom-checkbox">{isComplete && <Check size={13} />}</span>
                          </label>
                          <span className="task-icon"><Icon size={17} /></span>
                          <div className="task-copy"><strong>{task.title}</strong><span>{task.detail}</span></div>
                          <Link href={task.href} className="task-open" aria-label={`Open ${task.title}`}><ArrowUpRight size={16} /></Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="focus-panel">
                  <div className="focus-heading"><span className="focus-spark"><Sparkles size={16} /></span><span>YOUR MOMENTUM</span></div>
                  <h2>Small steps add up.</h2>
                  <p>Check off a study step each day to build a rhythm that lasts.</p>
                  <div className="focus-ring-row">
                    <div className="focus-ring" style={{ background: `conic-gradient(#24745f ${completionRate * 3.6}deg, #e6ebe6 0deg)` }}><span><strong>{completionRate}%</strong><small>today</small></span></div>
                    <div className="focus-ring-copy"><strong>{completedToday.length === tasks.length ? "Plan complete" : completedToday.length ? "Keep your pace" : "Ready when you are"}</strong><span>{completedToday.length === tasks.length ? "A solid day of preparation." : `${tasks.length - completedToday.length} ${tasks.length - completedToday.length === 1 ? "step" : "steps"} left in today’s plan.`}</span><button type="button" onClick={() => setView("planner")}>Open planner <ChevronRight size={15} /></button></div>
                  </div>
                  <div className="focus-footer"><Clock3 size={15} /><span>A little progress, repeated often.</span></div>
                </div>
              </section>

              <section className="course-preview-section">
                <div className="section-title-row"><div><span className="section-kicker">PICK UP WHERE YOU LEFT OFF</span><h2>Learning library</h2></div><button type="button" className="subtle-action" onClick={() => { setSearch(""); setView("courses"); }}>Browse all <ArrowRight size={15} /></button></div>
                <div className="course-preview-grid">
                  {courses.slice(0, 3).map((course) => <CourseCard key={course.href} course={course} compact />)}
                </div>
              </section>
              <footer className="academy-footer"><span>MPSC Free Mock</span><span>Learning for Mizoram, one day at a time.</span></footer>
            </>
          ) : (
            <>
              <div className="page-heading-row">
                <div><span className="section-kicker">MPSC FREE MOCK · STUDENT SPACE</span><h1>{viewTitle}</h1><p>{viewDescription}</p></div>
                <div className="page-date-chip"><CalendarDays size={16} /><span>{today.toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })}</span></div>
              </div>

              {view === "courses" && (
                <section className="library-view">
                  <div className="library-toolbar"><div><strong>{filteredCourses.length} learning {filteredCourses.length === 1 ? "resource" : "resources"}</strong><span>Choose a subject to continue.</span></div><button type="button" className="filter-reset" onClick={() => setSearch("")}><Search size={15} />{search ? "Clear search" : "All subjects"}</button></div>
                  {filteredCourses.length ? <div className="library-grid">{filteredCourses.map((course) => <CourseCard key={course.href} course={course} />)}</div> : <div className="empty-state"><span><Search size={21} /></span><strong>No matching courses</strong><p>Try another subject or clear your search.</p><button type="button" className="button button-outline" onClick={() => setSearch("")}>Clear search</button></div>}
                </section>
              )}

              {view === "planner" && (
                <section className="planner-view">
                  <div className="planner-main content-panel">
                    <div className="panel-heading"><div><span className="section-kicker">{today.toLocaleDateString("en", { weekday: "long" }).toUpperCase()} · YOUR STUDY SESSION</span><h2>Make today count</h2></div><span className="planner-count"><CheckCircle2 size={16} />{completedToday.length}/{tasks.length} done</span></div>
                    <div className="planner-list">
                      {tasks.map((task, index) => {
                        const Icon = task.icon;
                        const isComplete = completedToday.includes(task.id);
                        return (
                          <div className={`planner-task ${isComplete ? "task-done" : ""}`} key={task.id}>
                            <span className="planner-order">{String(index + 1).padStart(2, "0")}</span>
                            <span className="planner-task-icon"><Icon size={19} /></span>
                            <div className="task-copy"><strong>{task.title}</strong><span>{task.detail}</span></div>
                            <Link href={task.href} className="planner-resource">Open resource <ArrowUpRight size={15} /></Link>
                            <label className="task-toggle" aria-label={`${isComplete ? "Mark incomplete" : "Complete"}: ${task.title}`}><input type="checkbox" checked={isComplete} onChange={() => toggleTask(task.id)} /><span className="custom-checkbox">{isComplete && <Check size={13} />}</span></label>
                          </div>
                        );
                      })}
                    </div>
                    <div className="planner-note"><Sparkles size={16} /><span>Consistency beats intensity. Start with the next small step.</span></div>
                  </div>
                  <aside className="planner-side content-panel"><span className="section-kicker">THIS WEEK</span><h2>Your study rhythm</h2><p>Days with checked off study steps appear here.</p><WeekChart week={week} /><div className="planner-side-stat"><span>Current streak</span><strong>{streak} {streak === 1 ? "day" : "days"}</strong></div></aside>
                </section>
              )}

              {view === "progress" && (
                <section className="progress-view">
                  <div className="progress-summary">
                    <div className="progress-summary-main content-panel"><div className="panel-heading"><div><span className="section-kicker">YOUR PRACTICE HISTORY</span><h2>Every question counts</h2></div><span className="progress-summary-icon"><TrendingUp size={20} /></span></div><div className="progress-big-number">{practiceAnswers.length}<span>questions answered</span></div><div className="accuracy-track"><span style={{ width: `${accuracy ?? 0}%` }} /></div><div className="accuracy-caption"><span>{correctAnswers} correct</span><strong>{accuracy === null ? "No accuracy yet" : `${accuracy}% accuracy`}</strong></div><Link href="/mock-test" className="button button-dark"><Play size={15} fill="currentColor" />Continue practicing</Link></div>
                    <div className="progress-summary-side content-panel"><span className="section-kicker">STUDY CONSISTENCY</span><h2>Your week</h2><p>Study steps completed each day.</p><WeekChart week={week} /><div className="planner-side-stat"><span>Current streak</span><strong>{streak} {streak === 1 ? "day" : "days"}</strong></div></div>
                  </div>
                  <div className="content-panel subject-progress"><div className="panel-heading"><div><span className="section-kicker">MPSC PRACTICE</span><h2>By subject</h2></div><Link href="/mock-test" className="subtle-action">Practice now <ArrowUpRight size={15} /></Link></div>
                    {categoryProgress.length ? <div className="subject-list">{categoryProgress.map((subject) => { const subjectAccuracy = Math.round((subject.correct / subject.attempted) * 100); return <div className="subject-row" key={subject.category}><span className="subject-name">{subject.category}</span><span className="subject-bar"><span style={{ width: `${subjectAccuracy}%` }} /></span><strong>{subjectAccuracy}%</strong><small>{subject.attempted} {subject.attempted === 1 ? "question" : "questions"}</small></div>; })}</div> : <div className="empty-subject"><span><Target size={20} /></span><div><strong>Your subject progress starts with your first answer.</strong><p>Try a few questions to see where you are building confidence.</p></div><Link href="/mock-test" className="button button-outline">Open MPSC practice <ArrowRight size={15} /></Link></div>}
                  </div>
                </section>
              )}
            </>
          )}
        </section>
      </div>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {([
          { id: "overview", label: "Home", icon: LayoutDashboard },
          { id: "courses", label: "Learning", icon: LibraryBig },
          { id: "planner", label: "Plan", icon: ListChecks },
          { id: "progress", label: "Progress", icon: TrendingUp },
        ] as { id: View; label: string; icon: LucideIcon }[]).map((item) => { const Icon = item.icon; return <button type="button" key={item.id} className={view === item.id ? "is-active" : ""} onClick={() => setView(item.id)}><Icon size={19} /><span>{item.label}</span></button>; })}
      </nav>
    </main>
  );
}

function CourseCard({ course, compact = false }: { course: (typeof courses)[number]; compact?: boolean }) {
  const Icon = course.icon;
  return (
    <article className={`course-card ${compact ? "course-card-compact" : ""}`}>
      <div className={`course-card-top course-${course.theme}`}><span className="course-mark"><Icon size={20} strokeWidth={1.8} /></span><span className="course-format">{course.format}</span><span className="course-corner"><ArrowUpRight size={17} /></span></div>
      <div className="course-card-body"><span className="course-subject">{course.subject}</span><h3>{course.title}</h3><p>{course.description}</p><Link href={course.href} className="course-open">Open learning <ArrowRight size={15} /></Link></div>
    </article>
  );
}

function WeekChart({ week }: { week: { key: string; label: string; completed: number; isToday: boolean }[] }) {
  return (
    <div className="week-chart" aria-label="Study planner completions during the last seven days">
      {week.map((day) => <div className="week-day" key={day.key}><div className="week-bar-wrap"><span className={day.completed ? "week-bar has-activity" : "week-bar"} style={{ height: `${Math.max(day.completed ? 18 : 5, (day.completed / tasks.length) * 100)}%` }} title={`${day.completed} steps completed`} /></div><span className={day.isToday ? "week-label is-today" : "week-label"}>{day.label}</span></div>)}
    </div>
  );
}
