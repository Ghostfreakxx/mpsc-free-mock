// Dependency audit for CI: fails on any high or critical advisory, with one narrow exception.
// An advisory may be allowlisted only when no fixed release exists, the package is dev-only
// (never shipped to students), and the entry has a review date. Everything shipped must be clean.
import { execFileSync } from 'node:child_process';

const allowlist = {
  // braces has no patched release; it reaches us only through eslint-config-next's lint tooling.
  'https://github.com/advisories/GHSA-vfj7-8cjw-p6xm': { package: 'braces', reviewBy: '2026-12-31' },
};

function audit(args) {
  // npm is a .cmd shim on Windows; run its CLI through Node without a shell.
  const npmCli = process.env.npm_execpath;
  if (process.platform === 'win32' && !npmCli) throw new Error('Run this check with npm run audit on Windows.');
  try {
    return JSON.parse(execFileSync(npmCli ? process.execPath : 'npm', [...(npmCli ? [npmCli] : []), 'audit', '--json', ...args], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }));
  } catch (error) {
    // npm audit exits non-zero when it finds anything; the JSON report is still on stdout.
    if (error.stdout) return JSON.parse(error.stdout);
    throw error;
  }
}

const serious = vulnerability => vulnerability.severity === 'high' || vulnerability.severity === 'critical';
const failures = [];

const production = audit(['--omit=dev']);
for (const [name, vulnerability] of Object.entries(production.vulnerabilities ?? {})) {
  if (serious(vulnerability)) failures.push(`${name} (${vulnerability.severity}) is in the production dependency tree`);
}

const today = new Date().toISOString().slice(0, 10);
const full = audit([]);
for (const [name, vulnerability] of Object.entries(full.vulnerabilities ?? {})) {
  for (const advisory of vulnerability.via.filter(via => typeof via === 'object' && serious(via))) {
    const allowed = allowlist[advisory.url];
    if (!allowed) failures.push(`${name}: ${advisory.title} (${advisory.severity}) ${advisory.url}`);
    else if (allowed.package !== name) failures.push(`${advisory.url} is allowlisted for ${allowed.package}, not ${name}`);
    else if (allowed.reviewBy < today) failures.push(`${advisory.url} allowlist entry expired on ${allowed.reviewBy}; re-check for a fix`);
  }
}

if (failures.length) {
  console.error(`Dependency audit failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log(`Dependency audit passed: production tree clean; ${Object.keys(allowlist).length} dev-only advisory allowlisted without an upstream fix.`);
