import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const requireFromNext = createRequire(require.resolve("next/package.json"));
const { loadEnvConfig } = requireFromNext("@next/env");

export function loadTeachingEnv() {
  let failed = false;
  loadEnvConfig(process.cwd(), process.argv.includes("--development"), {
    info() {},
    error() { failed = true; },
  });
  if (failed) throw new Error("An environment file could not be loaded. Check its location and syntax.");
}
