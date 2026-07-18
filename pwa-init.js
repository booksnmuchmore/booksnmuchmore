// Books 'n' Much More — PWA registration + install prompt
// Include this on every page, right before </body>:
//   <script src="pwa-init.js"></script>

(function () {
  // ---- 0. Inject all required <head> tags — no manual head editing needed ----
  const headTags = [
    { tag: "link", attrs: { rel: "manifest", href: "/manifest.json" } },
    { tag: "meta", attrs: { name: "theme-color", content: "#C8813A" } },
    { tag: "link", attrs: { rel: "apple-touch-icon", href: "/assets/icons/apple-touch-icon.png" } },
    { tag: "meta", attrs: { name: "apple-mobile-web-app-capable", content: "yes" } },
    { tag: "meta", attrs: { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" } },
    { tag: "meta", attrs: { name: "apple-mobile-web-app-title", content: "Books 'n' More" } },
  ];
  headTags.forEach(({ tag, attrs }) => {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  });

  // ---- 1. Register the service worker ----
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch((err) => {
        console.warn("Service worker registration failed:", err);
      });
    });
  }

  // ---- 2. Detect platform / install state ----
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  if (isStandalone) return; // already installed, nothing to show

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  const dismissedAt = localStorage.getItem("bnmm_install_dismissed");
  const dismissedRecently =
    dismissedAt && Date.now() - Number(dismissedAt) < 14 * 24 * 60 * 60 * 1000; // 14 days

  if (dismissedRecently) return;

  let deferredPrompt = null;

  function buildBanner({ onInstall, isIOSFlow }) {
    const banner = document.createElement("div");
    banner.setAttribute("id", "bnmm-install-banner");
    banner.style.cssText = `
      position:fixed;left:0;right:0;bottom:0;z-index:9999;
      background:#FBF6EC;border-top:1px solid rgba(200,129,58,0.25);
      box-shadow:0 -4px 24px rgba(44,26,14,0.15);
      padding:0.9rem 1.1rem;display:flex;align-items:center;gap:0.9rem;
      font-family:'Raleway',sans-serif;
      animation:bnmm-slide-up 0.35s ease;
    `;
    const style = document.createElement("style");
    style.textContent = `@keyframes bnmm-slide-up{from{transform:translateY(100%);}to{transform:translateY(0);}}`;
    document.head.appendChild(style);

    banner.innerHTML = `
      <img src="/logo.webp" alt="" style="width:38px;height:38px;border-radius:50%;flex-shrink:0;object-fit:cover;">
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:0.82rem;color:#2C1A0E;margin-bottom:0.15rem;">
          Install Books 'n' Much More
        </div>
        <div style="font-size:0.72rem;color:#7A6250;line-height:1.4;">
          ${
            isIOSFlow
              ? "Tap Share, then \u201cAdd to Home Screen\u201d for quick access."
              : "Add it to your home screen for faster, offline-friendly access."
          }
        </div>
      </div>
      ${
        isIOSFlow
          ? ""
          : `<button id="bnmm-install-btn" style="
              font-family:'Raleway',sans-serif;font-size:0.7rem;font-weight:700;
              letter-spacing:0.08em;text-transform:uppercase;color:#fff;
              background:#C8813A;border:none;padding:0.55rem 1rem;border-radius:3px;
              cursor:pointer;flex-shrink:0;">Install</button>`
      }
      <button id="bnmm-install-dismiss" aria-label="Dismiss" style="
        background:none;border:none;color:#7A6250;font-size:1.1rem;
        cursor:pointer;flex-shrink:0;padding:0 0.2rem;line-height:1;">&times;</button>
    `;

    document.body.appendChild(banner);

    document.getElementById("bnmm-install-dismiss").addEventListener("click", () => {
      localStorage.setItem("bnmm_install_dismissed", String(Date.now()));
      banner.remove();
    });

    if (!isIOSFlow) {
      document.getElementById("bnmm-install-btn").addEventListener("click", () => {
        onInstall();
        banner.remove();
      });
    }
  }

  // ---- 3. Android/desktop Chrome: native install prompt ----
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    buildBanner({
      isIOSFlow: false,
      onInstall: () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.finally(() => {
          deferredPrompt = null;
        });
      },
    });
  });

  // ---- 4. iOS Safari: no beforeinstallprompt exists, show manual instructions ----
  if (isIOS) {
    buildBanner({ isIOSFlow: true, onInstall: () => {} });
  }
})();
