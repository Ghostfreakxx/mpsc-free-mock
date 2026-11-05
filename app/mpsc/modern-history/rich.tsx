import { Fragment } from "react";
import type { Block } from "../../data/modern-history/types";
import { boldRuns } from "../../lib/rich-text";
import styles from "./chapter.module.css";

// Server-only helpers for the history chapters. Text is rendered as text; **bold** becomes <strong>.
export function Rich({ text }: { text: string }) {
  return <>{text.split("\n").map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {boldRuns(line).map((run, index) => run.bold ? <strong key={index}>{run.text}</strong> : <Fragment key={index}>{run.text}</Fragment>)}
    </Fragment>
  ))}</>;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return <>{blocks.map((block, index) => {
    switch (block.type) {
      case "p": return <p key={index}><Rich text={block.text} /></p>;
      case "h3": return <h3 key={index}>{block.text}</h3>;
      case "list": {
        const items = block.items.map((item, i) => <li key={i}><Rich text={item} /></li>);
        return block.ordered ? <ol key={index}>{items}</ol> : <ul key={index}>{items}</ul>;
      }
      case "table": return (
        <div key={index} className={styles.tableWrap} role="region" aria-label="Table" tabIndex={0}>
          <table className={styles.table}>
            <thead><tr>{block.head.map((cell, i) => <th key={i} scope="col">{cell}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, r) => <tr key={r}>{row.map((cell, c) => <td key={c} data-label={block.head[c] || undefined}><Rich text={cell} /></td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      case "note": return <aside key={index} className={styles.note}><strong>{block.label}</strong><p><Rich text={block.text} /></p></aside>;
    }
  })}</>;
}
