import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import postcss from "postcss";
import { darkColour, render, targets } from "./dark-theme.mjs";

const hex = value => {
  const match = value.match(/#([0-9a-f]{6})([0-9a-f]{2})?\b/i);
  if (!match) return null;
  const number = parseInt(match[1], 16);
  return { rgb: [number >> 16, (number >> 8) & 255, number & 255], alpha: match[2] ? parseInt(match[2], 16) / 255 : 1 };
};
const luminance = rgb => {
  const [r, g, b] = rgb.map(v => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => { const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const darkVariables = () => {
  const variables = {};
  postcss.parse(fs.readFileSync("app/theme-dark.css", "utf8")).walkRules(':root[data-theme="dark"]', rule => rule.walkDecls(d => { variables[d.prop] = d.value; }));
  return variables;
};

test("the generated dark rules match the light stylesheets (run node scripts/dark-theme.mjs)", () => {
  for (const target of targets) {
    const { file, text } = render(target);
    assert.equal(fs.readFileSync(file, "utf8"), text, `${file} is out of date`);
  }
});

test("white cards become dark cards and dark text becomes light", () => {
  const card = darkColour([255, 255, 255], "surface");
  assert.ok(luminance(card) < 0.03, "cards are dark");
  for (const ink of [[0x1d, 0x34, 0x2d], [0x68, 0x7a, 0x71], [0x24, 0x74, 0x5f], [0xc9, 0x66, 0x56]]) {
    assert.ok(contrast(darkColour(ink, "text"), card) >= 4.5, `text ${ink} stays readable on a dark card`);
  }
});

test("every generated text colour is readable on its background", () => {
  const card = darkColour([255, 255, 255], "surface");
  const failures = [];
  for (const target of targets) {
    const { text } = render(target);
    const block = text.slice(text.indexOf("dark-theme:generated:start"));
    postcss.parse(block).walkRules(rule => {
      let colour = null, background = null;
      rule.walkDecls(d => {
        if (d.prop === "color") colour = hex(d.value);
        if (d.prop === "background" || d.prop === "background-color") background = hex(d.value);
      });
      if (!colour || colour.alpha < 1) return;
      // Text on its own background, or on a dark card when the rule sets none.
      const behind = background && background.alpha >= 1 ? background.rgb : card;
      const ratio = contrast(colour.rgb, behind);
      if (ratio < 4.5) failures.push(`${rule.selector}: ${ratio.toFixed(2)}`);
    });
  }
  assert.deepEqual(failures, []);
});

test("the dark palette keeps body text and muted text readable", () => {
  const variables = darkVariables();
  const rgb = name => hex(variables[name]).rgb;
  for (const name of ["--ink", "--muted", "--green", "--coral", "--blue"]) {
    assert.ok(contrast(rgb(name), rgb("--white")) >= 4.5, `${name} on cards`);
    assert.ok(contrast(rgb(name), rgb("--canvas")) >= 4.5, `${name} on the page`);
  }
});

test("the page is served dark and only an exact saved 'light' switches it", () => {
  const layout = fs.readFileSync("app/layout.tsx", "utf8");
  assert.match(layout, /data-theme="dark"/);
  assert.match(layout, /import "\.\/theme-dark\.css"/);
  const source = fs.readFileSync("app/theme.ts", "utf8");
  const key = source.match(/THEME_KEY = "([^"]+)"/)[1];
  const script = source.match(/themeInitScript = `([^`]+)`/)[1].replace("${JSON.stringify(THEME_KEY)}", JSON.stringify(key));
  for (const [saved, expected] of [["light", "light"], ["dark", "dark"], ["LIGHT", "dark"], ["{}", "dark"], [null, "dark"]]) {
    const documentElement = { dataset: { theme: "dark" } };
    const localStorage = { getItem: name => (name === key ? saved : null) };
    new Function("localStorage", "document", script)(localStorage, { documentElement });
    assert.equal(documentElement.dataset.theme, expected, `saved ${saved}`);
  }
  const blocked = { dataset: { theme: "dark" } };
  new Function("localStorage", "document", script)({ getItem() { throw new Error("blocked"); } }, { documentElement: blocked });
  assert.equal(blocked.dataset.theme, "dark");
});
