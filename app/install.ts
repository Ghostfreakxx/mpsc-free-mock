// Shared by the root layout (server) and the install button and banner (browser), so keep it tiny.
export const INSTALL_READY_EVENT = "mpsc-install-ready";
export const INSTALL_DISMISS_KEY = "mpsc-install-dismissed";

// Runs in <head>, before React loads. Chrome fires `beforeinstallprompt` once, often before a slow
// phone has hydrated the page; without this the one-tap install was lost and students only saw
// written "Add to Home screen" steps. The event is kept on window for the install button to use.
export const installInitScript = `window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();window.__mpscInstallPrompt=e;window.dispatchEvent(new Event(${JSON.stringify(INSTALL_READY_EVENT)}))});window.addEventListener("appinstalled",function(){window.__mpscInstallPrompt=null;window.__mpscInstalled=true;window.dispatchEvent(new Event(${JSON.stringify(INSTALL_READY_EVENT)}))});`;
