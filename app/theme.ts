// Shared by the root layout (server) and the theme switch (browser), so keep it tiny.
export type Theme = "dark" | "light";
export const THEME_KEY = "mpsc-theme";
export const THEME_EVENT = "mpsc-theme-change";

// Runs in <head> before the first paint, so a student who chose light never sees a dark flash.
// The page is served dark; only the exact saved value "light" changes that.
export const themeInitScript = `try{if(localStorage.getItem(${JSON.stringify(THEME_KEY)})==="light")document.documentElement.dataset.theme="light"}catch(e){}`;
