"use client";

// Last-resort fallback if the root layout itself fails. It renders its own document because
// the app's layout and stylesheet may be unavailable, so styles are inline.
export default function GlobalError({ retry }: { error: unknown; retry: () => void }) {
  return <html lang="en">
    <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f5faf7", color: "#17211b" }}>
      <title>MPSC Free Mock</title>
      <main role="alert" style={{ maxWidth: 520, margin: "15vh auto", padding: "0 16px" }}>
        <h1 style={{ fontSize: 24 }}>MPSC Free Mock could not load</h1>
        <p>Your saved answers and progress are safe on this device. Check your connection and try again.</p>
        <button type="button" onClick={() => retry()} style={{ padding: "10px 18px", borderRadius: 8, border: 0, background: "#17211b", color: "#fff", fontSize: 16 }}>Try again</button>
      </main>
    </body>
  </html>;
}
