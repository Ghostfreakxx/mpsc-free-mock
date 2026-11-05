import Link from "next/link";

export const metadata = {
  title: "Terms and Copyright | MPSC Free Mock",
  description: "Who owns MPSC Free Mock's lessons, questions and recorded classes, and how you may use them.",
};

export default function TermsPage() {
  const year = new Date().getFullYear();
  return <main className="legal-page">
    <Link href="/" className="legal-back">← Learning space</Link>
    <span className="section-kicker">TERMS AND COPYRIGHT</span>
    <h1>Free to learn from, not free to copy</h1>
    <p>MPSC Free Mock is free for every student. Keeping it free depends on the work not being copied and resold.</p>

    <h2>Who owns the content</h2>
    <p>© {year} MPSC Free Mock. All rights reserved. The question banks, explanations, Mizo translations, notes, recorded classes, diagrams, simulator, design and code of this site are protected by copyright under the Copyright Act, 1957 and international copyright law.</p>

    <h2>What you may do</h2>
    <ul>
      <li>Use the site for your own study, as often as you like.</li>
      <li>Download a notes pack and print it for your own study.</li>
      <li>Share links to any page with friends, classmates and teachers.</li>
    </ul>

    <h2>What you may not do</h2>
    <ul>
      <li>Copy, scrape, download in bulk or mirror the site, its question banks or its classes, by hand or with any tool, bot or AI service.</li>
      <li>Republish, sell or put our questions, notes or videos in another app, website, book, channel or coaching material.</li>
      <li>Use the content to train or feed an AI model.</li>
      <li>Try to break into, overload or get around the protections of the site.</li>
    </ul>
    <p>Automated access is blocked. Copies found elsewhere may be removed with a copyright notice to the host, app store or search engine.</p>

    <h2>Exam bodies and sources</h2>
    <p>This is an independent study resource. MPSC, NTA and other exam bodies do not run or endorse it. Always check the official notification and syllabus for your exam.</p>

    <h2>Report a copy or a security problem</h2>
    <p>If you find our content copied elsewhere, or a security weakness in the site, please tell us through the site&apos;s GitHub repository (Security tab, “Report a vulnerability”). Do not test weaknesses on the live site.</p>
  </main>;
}
