import { spawnSync } from "node:child_process";
import { chromium } from "playwright";
import { lastSevenTeachingDays, reservedTestBudget, teachingDay } from "../app/lib/teaching-usage.ts";
import { loadTeachingEnv } from "./load-teaching-env.mjs";

const paid = process.argv.includes("--approve-one-paid-request");
const prompt = "Explain democracy in simple English, including how citizens participate and hold leaders accountable.";
const fixture = "Democracy is a system of government in which people have a say in public decisions. Citizens can choose representatives, speak about public issues, and hold leaders accountable through elections and other civic action.";
const agent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/140.0.0.0 Safari/537.36";

let step = "validating the loopback test destination";
let forwarded = 0;
let browser;

function requireCheck(condition) {
  if (!condition) throw new Error("Verification failed.");
}

async function adminStatus(origin, authorization) {
  const headers = { "User-Agent": agent, ...(authorization ? { Authorization: authorization } : {}) };
  const response = await fetch(new URL("/api/admin/teacher-usage", origin), {
    headers, redirect: "error", signal: AbortSignal.timeout(7_000),
  });
  const content = await response.text();
  return { status: response.status, content, cache: response.headers.get("cache-control") };
}

try {
  const origin = new URL(process.env.TEACHING_TEST_URL || "http://127.0.0.1:3000");
  requireCheck(origin.protocol === "http:" && origin.hostname === "127.0.0.1"
    && origin.pathname === "/" && !origin.username && !origin.password && !origin.search && !origin.hash);
  let before;
  let reservedBefore;
  let adminAuth;
  if (paid) {
    step = "running the read-only preflight";
    loadTeachingEnv();
    requireCheck(spawnSync(process.execPath, ["--experimental-strip-types", "scripts/verify-teaching-env.mjs",
      ...(process.argv.includes("--development") ? ["--development"] : [])], { stdio: "inherit" }).status === 0);
    step = "verifying the ledger and private dashboard before any paid call";
    requireCheck(teachingDay().resetIn > 120);
    adminAuth = "Basic " + Buffer.from("admin:" + process.env.TOCHHAWNG_ADMIN_PASSWORD.trim()).toString("base64");
    requireCheck((await adminStatus(origin)).status === 401);
    const admin = await adminStatus(origin, adminAuth);
    requireCheck(admin.status === 200 && admin.cache === "private, no-store");
    before = (await lastSevenTeachingDays())[0];
    reservedBefore = await reservedTestBudget();
    requireCheck(typeof reservedBefore === "number");
  }

  step = "opening the 360px interactive classroom";
  browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  const page = await browser.newPage({ viewport: { width: 360, height: 820 }, reducedMotion: "reduce", serviceWorkers: "block" });
  page.setDefaultTimeout(30_000);
  let reply;
  let intercepted = 0;
  let upstreamFailed = false;
  await page.route("**/api/chat", async route => {
    const request = route.request();
    const payload = request.postDataJSON();
    if (intercepted++ || request.method() !== "POST" || request.url() !== new URL("/api/chat", origin).href
      || payload?.teaching?.teacher !== "zorami" || payload.teaching.subject !== "political-science"
      || payload.teaching.language !== "en" || payload.teaching.mode !== "explain"
      || payload.messages?.length !== 1 || payload.messages[0].content !== prompt) {
      await route.abort();
      return;
    }
    if (!paid) {
      reply = fixture;
      await route.fulfill({ json: { reply, teacher: "zorami", mode: "ai" } });
      return;
    }
    try {
      forwarded += 1;
      // The credential stays in the Node harness, outside browser storage and request headers.
      const result = await fetch(request.url(), {
        method: "POST", redirect: "error", signal: AbortSignal.timeout(28_000),
        headers: {
          "Content-Type": "application/json", "User-Agent": agent, Origin: origin.origin,
          Authorization: "Bearer " + process.env.TOCHHAWNG_TEST_TOKEN.trim(),
        },
        body: JSON.stringify(payload),
      });
      const lesson = await result.json();
      upstreamFailed = !result.ok || lesson.mode !== "ai" || lesson.teacher !== "zorami" || typeof lesson.reply !== "string";
      if (!upstreamFailed) reply = lesson.reply;
      await route.fulfill({ status: result.status, json: lesson });
    } catch {
      upstreamFailed = true;
      await route.fulfill({ status: 502, json: { error: "The private classroom check did not receive a response." } });
    }
  });

  await page.goto(new URL("/study-room", origin).href);
  await page.getByRole("button", { name: "Enter the 3D room" }).click();
  await page.getByRole("button", { name: "Open MPSC study assistant" }).press("Enter");
  const dialog = page.getByRole("dialog", { name: "Tochhawng Teachers" });
  await dialog.getByLabel("Subject", { exact: true }).selectOption("political-science");
  await dialog.getByLabel("Teaching mode").selectOption("explain");
  await dialog.getByLabel("Reply language").selectOption("en");
  await dialog.getByLabel("Message the AI teacher").fill(prompt);
  step = paid ? "submitting the single approved request" : "submitting the local fixture";
  const response = page.waitForResponse(result => result.url() === new URL("/api/chat", origin).href
    && result.request().method() === "POST");
  await dialog.getByRole("button", { name: "Send message" }).click();
  await response;
  requireCheck(!upstreamFailed && typeof reply === "string" && reply.trim().length > 0 && intercepted === 1);
  await dialog.getByText(reply, { exact: true }).waitFor();
  await dialog.getByRole("button", { name: "Close study assistant" }).click();

  step = "verifying the blackboard and checked course quiz";
  const board = page.getByRole("region", { name: "Classroom notes" });
  await board.getByRole("heading", { name: "Political Science · Explain" }).waitFor();
  await board.getByText(reply, { exact: true }).waitFor();
  const course = page.getByRole("region", { name: "Reviewed classroom lessons" });
  await course.getByLabel("Teaching mode").selectOption("quiz");
  await course.getByRole("radio", { name: "Every person" }).check();
  await course.getByRole("button", { name: "Check answer" }).click();
  await course.getByRole("status").filter({ hasText: "Correct." }).waitFor();

  if (paid) {
    step = "reconciling the single request with Redis and the admin dashboard";
    const after = (await lastSevenTeachingDays())[0];
    const reservedAfter = await reservedTestBudget();
    requireCheck(forwarded === 1 && after.date === before.date && after.requests - before.requests === 1
      && after.metered - before.metered === 1 && after.input > before.input
      && after.output > before.output && after.output - before.output <= 450 && reservedAfter - reservedBefore === 10_000);
    const admin = await adminStatus(origin, adminAuth);
    requireCheck(admin.status === 200 && admin.content.includes(`$${(reservedAfter / 1_000_000).toFixed(2)} of $9.00`));
    console.log("Private Zorami test passed. Recorded input/output:", after.input - before.input, after.output - before.output);
  } else {
    console.log("Zorami fixture passed: one sample reply, blackboard and reviewed quiz. Paid requests forwarded: 0.");
  }
} catch {
  console.error(`Zorami check stopped while ${step}. Requests forwarded to the private route: ${forwarded}. Review the ledger before rerunning a paid check.`);
  process.exitCode = 1;
} finally {
  await browser?.close();
}
