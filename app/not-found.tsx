import Link from "next/link";

export const metadata = { title: "Page not found | MPSC Free Mock" };

export default function NotFound() {
  return <main className="app-error">
    <span className="section-kicker">PAGE NOT FOUND</span>
    <h1>We could not find that page</h1>
    <p>The link may be old or mistyped. Everything is still available from the learning space.</p>
    <div className="app-error-actions">
      <Link href="/" className="button button-dark">Learning space</Link>
      <Link href="/mock-test" className="button button-outline">MPSC practice</Link>
    </div>
  </main>;
}
