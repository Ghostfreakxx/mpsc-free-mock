import Link from "next/link";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { historyChapters, plannedChapters } from "../../data/modern-history";
import styles from "./chapter.module.css";

export const metadata = {
  title: "MPSC Modern Indian History | Free course",
  description: "Free Modern Indian History chapters for MPSC in simple English, with check-yourself questions, MCQs and offline downloads.",
};

export default function ModernHistoryCourse() {
  const published = new Set(historyChapters.map(chapter => chapter.number));
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/"><ArrowLeft size={16} aria-hidden="true" /> Home</Link>
        <span className={styles.brand}>MPSC FREE MOCK</span>
      </header>
      <div className={styles.wrap}>
        <p className={styles.kicker}>MPSC · General Studies · Free course</p>
        <h1 className={styles.title}>Modern Indian History</h1>
        <p className={styles.lead}>Full chapters in simple English, written for Mizoram students. Each chapter has key words, a timeline, tables, check-yourself questions after every section, 15 MCQs, short answers and a Mains question. Free, and you can save each chapter to read offline.</p>

        <ol className={styles.chapterList}>
          {plannedChapters.map((title, index) => {
            const chapter = historyChapters.find(item => item.number === index + 1);
            return (
              <li key={title} className={published.has(index + 1) ? styles.ready : styles.soon}>
                <span className={styles.chapterNumber}>{index + 1}</span>
                <div>
                  {chapter ? (
                    <>
                      <Link href={`/mpsc/modern-history/${chapter.slug}`} prefetch={false}>{chapter.title} ({chapter.period}) <ArrowRight size={15} aria-hidden="true" /></Link>
                      <p>{chapter.summary}</p>
                      <a className={styles.inlineDownload} href={`/downloads/chapters/${chapter.slug}`} download><Download size={14} aria-hidden="true" /> Save for offline</a>
                    </>
                  ) : (
                    <><strong>{title}</strong><p>Coming soon</p></>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </main>
  );
}
