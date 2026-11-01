// Generates the dark theme from the light stylesheets, so the two never drift apart.
//
//   node scripts/dark-theme.mjs          write the generated blocks
//   node scripts/dark-theme.mjs --check  exit 1 if a generated block is out of date (npm test runs this)
//
// For every rule that sets a colour, it writes a dark-mode rule with the same selectors (scoped to
// html[data-theme="dark"]) and dark colours chosen by role: backgrounds become dark surfaces (white
// cards a little lighter than the page), text becomes light, borders become subtle, shadows deepen,
// focus rings and accent bars stay bright. Brand colours keep their hue. Selectors matching a
// target's `keep` pattern are left alone: they are already dark (the sidebar) or are light "paper"
// with colours built in (class boards and diagrams). Anything a formula cannot judge belongs in the
// hand-written parts of app/theme-dark.css or of the CSS module, before the generated block or
// after it (to override a generated rule); they are left untouched.
import fs from "node:fs";
import postcss from "postcss";

const START = "/* dark-theme:generated:start (edit the light rules, then run node scripts/dark-theme.mjs) */";
const END = "/* dark-theme:generated:end */";

export const targets = [
  // The sidebar is dark green in both themes.
  { source: "app/globals.css", output: "app/theme-dark.css", scope: ':root[data-theme="dark"]', keep: /sidebar|brand-mark|brand-copy|help-icon|profile-avatar|profile-status/ },
  // The class board and its diagrams stay light "paper": their drawings have colours built in.
  { source: "app/jee/classes/lecture.module.css", scope: ':global(html[data-theme="dark"])', keep: /\.(board|ruler|chapterNumber|formula|steps)\b|Diagram\b/ },
  { source: "app/exam-simulator/simulator.module.css", scope: ':global(html[data-theme="dark"])' },
];

// --- Colour maths (OKLab / OKLCH) ---
const toLinear = c => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toGamma = c => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

function rgbToOklch([r, g, b]) {
  const [lr, lg, lb] = [r, g, b].map(v => toLinear(v / 255));
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const bb = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return [L, Math.hypot(a, bb), Math.atan2(bb, a)];
}

function oklchToRgb([L, C, h]) {
  // Reduce chroma until the colour fits in sRGB.
  for (let chroma = C; ; chroma *= 0.94) {
    const a = chroma * Math.cos(h), b = chroma * Math.sin(h);
    const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
    const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
    const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
    const rgb = [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
    ];
    if (rgb.every(v => v >= -0.0005 && v <= 1.0005) || chroma < 0.0005) return rgb.map(v => Math.round(Math.min(1, Math.max(0, toGamma(Math.min(1, Math.max(0, v))))) * 255));
  }
}

const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
// Dark cards keep a trace of the brand green, like the light theme's off-white canvas.
const card = [0.235, 0.008, (155 * Math.PI) / 180];

// Light-theme colour -> dark-theme colour, by the job the colour does.
export function darkColour(rgb, role) {
  const [L, C, h] = rgbToOklch(rgb);
  let L2 = L, C2 = C;
  if (role === "surface") {
    if (L >= 0.985) return oklchToRgb(card); // white cards sit a little above the page
    else if (L >= 0.6) { L2 = clamp(1.17 - L, 0.17, 0.5); C2 = C * 0.9; }
    else L2 = clamp(L * 1.05, 0.28, 0.55); // brand surfaces stay deep
  } else if (role === "text") {
    if (L < 0.72) L2 = clamp(0.98 - (L - 0.2) * 0.55, 0.74, 0.95);
  } else if (role === "border") {
    L2 = L >= 0.75 ? clamp(1.17 - L * 0.95, 0.26, 0.42) : clamp(L * 1.1, 0.4, 0.75);
  } else if (role === "shadow") {
    return [0, 0, 0];
  }
  return oklchToRgb([L2, C2, h]);
}

// --- Parsing colours in declaration values ---
const named = { white: "#ffffff", black: "#000000" };
const colourPattern = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|\b(?:white|black)\b/g;

function parseColour(text) {
  if (named[text]) text = named[text];
  if (text.startsWith("#")) {
    let hex = text.slice(1);
    if (hex.length === 3 || hex.length === 4) hex = [...hex].map(c => c + c).join("");
    if (hex.length !== 6 && hex.length !== 8) return null;
    const value = parseInt(hex.slice(0, 6), 16);
    return { rgb: [value >> 16, (value >> 8) & 255, value & 255], alpha: hex.length === 8 ? parseInt(hex.slice(6), 16) / 255 : 1 };
  }
  const parts = text.match(/rgba?\(([^)]*)\)/)?.[1].split(/[\s,/]+/).filter(Boolean);
  if (!parts || parts.length < 3) return null;
  const channel = part => (part.endsWith("%") ? (parseFloat(part) / 100) * 255 : parseFloat(part));
  const alpha = parts[3] === undefined ? 1 : parts[3].endsWith("%") ? parseFloat(parts[3]) / 100 : parseFloat(parts[3]);
  return { rgb: parts.slice(0, 3).map(channel), alpha };
}

function formatColour([r, g, b], alpha) {
  const hex = [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("");
  return alpha >= 0.999 ? `#${hex}` : `#${hex}${Math.round(clamp(alpha, 0, 1) * 255).toString(16).padStart(2, "0")}`;
}

function roleOf(property, value) {
  // Focus outlines must stay easy to see, so they are treated like text.
  if (/^(color|fill|stroke|caret-color|text-decoration-color|-webkit-text-fill-color|accent-color|outline)/.test(property)) return "text";
  if (/^background/.test(property)) return "surface";
  if (/^(border|column-rule)/.test(property)) return "border";
  // An inset bar or a ring with no blur is an accent, not a shadow.
  if (/shadow$/.test(property)) return /\binset\b/.test(value) || /^\s*(-?[\d.]+(px)?\s+){2}0(px)?\s/.test(value) ? "text" : "shadow";
  return null;
}

function convertValue(value, role) {
  return value.replace(colourPattern, match => {
    const colour = parseColour(match);
    if (!colour) return match;
    const alpha = role === "shadow" ? Math.min(1, colour.alpha * 1.7) : colour.alpha;
    return formatColour(darkColour(colour.rgb, role), alpha);
  });
}

function scopeSelector(selector, scope) {
  const trimmed = selector.trim();
  if (scope.startsWith(":root") && /^html\b/.test(trimmed)) return trimmed.replace(/^html/, 'html[data-theme="dark"]');
  if (scope.startsWith(":root") && /^:root\b/.test(trimmed)) return trimmed.replace(/^:root/, scope);
  return `${scope} ${trimmed}`;
}

// The hand-written text before and after a file's generated block. Rules after it win ties.
function split(css) {
  const start = css.indexOf(START), end = css.indexOf(END);
  if (start < 0 || end < start) return { before: css.trim(), after: "" };
  return { before: css.slice(0, start).trim(), after: css.slice(end + END.length).trim() };
}

function stripGenerated(css) {
  const { before, after } = split(css);
  return `${before}\n${after}`;
}

// Returns the generated rules for one stylesheet as CSS text.
export function generateBlock(css, { scope, keep }) {
  const root = postcss.parse(stripGenerated(css));
  const out = postcss.root();
  const containers = new Map([[root, out]]);
  const containerFor = node => {
    const parent = node.parent;
    if (containers.has(parent)) return containers.get(parent);
    const outer = containerFor(parent);
    const copy = parent.clone({ nodes: [] });
    outer.append(copy);
    containers.set(parent, copy);
    return copy;
  };
  root.walkRules(rule => {
    if (rule.parent.type === "atrule" && /keyframes$/.test(rule.parent.name)) return;
    if (/data-theme|prefers-color-scheme/.test(rule.selector + (rule.parent.params ?? ""))) return;
    if (/\.assistant-/.test(rule.selector) || rule.selector.startsWith("@")) return;
    const selectors = rule.selectors.filter(selector => !keep?.test(selector));
    if (!selectors.length) return;
    const declarations = [];
    rule.each(node => {
      if (node.type !== "decl" || node.prop.startsWith("--") || node.value.includes("var(")) return;
      const role = roleOf(node.prop, node.value);
      if (!role || !colourPattern.test(node.value)) return;
      colourPattern.lastIndex = 0;
      const value = convertValue(node.value, role);
      if (value !== node.value) declarations.push(postcss.decl({ prop: node.prop, value, important: node.important }));
    });
    colourPattern.lastIndex = 0;
    if (!declarations.length) return;
    const dark = postcss.rule({ selectors: selectors.map(selector => scopeSelector(selector, scope)) });
    dark.append(declarations);
    containerFor(rule).append(dark);
  });
  // Drop at-rule copies that ended up empty.
  out.walkAtRules(atRule => { if (!atRule.nodes?.length) atRule.remove(); });
  out.walk(node => { node.raws.before = node.type === "decl" ? " " : "\n"; node.raws.between = node.type === "decl" ? ": " : node.raws.between; if (node.type !== "decl") node.raws.after = node.nodes?.length ? (node.type === "rule" ? " " : "\n") : ""; node.raws.semicolon = true; });
  return out.toString().trim();
}

export function render(target) {
  const block = `${START}\n${generateBlock(fs.readFileSync(target.source, "utf8"), target)}\n${END}\n`;
  const file = target.output ?? target.source;
  const { before, after } = split(fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "");
  return { file, text: `${before ? `${before}\n\n` : ""}${block}${after ? `\n${after}\n` : ""}` };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const check = process.argv.includes("--check");
  let stale = false;
  for (const target of targets) {
    const { file, text } = render(target);
    const current = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
    if (current === text) continue;
    if (check) { stale = true; console.error(`${file} is out of date: run node scripts/dark-theme.mjs`); }
    else { fs.writeFileSync(file, text); console.log(`wrote ${file}`); }
  }
  if (stale) process.exit(1);
}
