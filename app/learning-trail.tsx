import Link from "next/link";

const destinations = [
  ["classroom", "/study-room", "Study room"],
  ["courses", "/#learning-courses", "Courses"],
  ["practice", "/mock-test", "MPSC practice"],
  ["notes", "/college-notes", "College notes"],
  ["exam", "/exam-simulator", "Exam simulator"],
] as const;

export default function LearningTrail({ current }: { current?: typeof destinations[number][0] }) {
  return (
    <nav className="cinema-trail" aria-label="Free MPSC Mock learning routes">
      {destinations.map(([id, href, label]) => current === id
        ? <span key={id} aria-current="page">{label}</span>
        : <Link key={id} href={href} prefetch={false}>{label}</Link>)}
    </nav>
  );
}
