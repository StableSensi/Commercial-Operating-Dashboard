(() => {
  const ACCESS_KEY = "aryzeObjectivesAccessGranted";
  const SALT = "aryze-objectives-access-v1";
  const ACCESS_HASH = "19d3775a4b35efcc7a87f5384367085cb6d059e523979d86fefd35390b6c3a11";

  if (sessionStorage.getItem(ACCESS_KEY) === "true") return;

  document.documentElement.classList.add("objectives-auth-locked");

  const style = document.createElement("style");
  style.textContent = `
    .objectives-auth-locked .plan-topbar,
    .objectives-auth-locked .plan-shell {
      visibility: hidden;
    }
    .objectives-auth-backdrop {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: grid;
      place-items: center;
      padding: 20px;
      background:
        linear-gradient(90deg, rgba(191, 217, 239, 0.28), transparent 34rem),
        linear-gradient(180deg, #ffffff 0%, #f7f9fa 100%);
      color: #001e2b;
      font-family: Geist, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .objectives-auth-backdrop::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(0, 30, 43, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 30, 43, 0.035) 1px, transparent 1px);
      background-size: 44px 44px;
      mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.22), transparent 74%);
    }
    .objectives-auth-card {
      position: relative;
      width: min(440px, 100%);
      padding: 24px;
      border: 1px solid rgba(0, 30, 43, 0.16);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.92);
      box-shadow: 0 18px 46px rgba(0, 30, 43, 0.08);
      backdrop-filter: blur(18px);
    }
    .objectives-auth-card img {
      display: block;
      width: 92px;
      height: auto;
      margin-bottom: 24px;
    }
    .objectives-auth-card p {
      margin: 0;
      color: #52636d;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .objectives-auth-card h1 {
      margin: 0 0 10px;
      color: #001e2b;
      font-size: 1.75rem;
      line-height: 1.08;
    }
    .objectives-auth-form {
      display: grid;
      gap: 12px;
      margin-top: 20px;
    }
    .objectives-auth-form label {
      display: grid;
      gap: 8px;
      color: #274454;
      font-size: 0.82rem;
      font-weight: 850;
    }
    .objectives-auth-form input {
      min-height: 44px;
      width: 100%;
      padding: 0 12px;
      border: 1px solid rgba(0, 30, 43, 0.18);
      border-radius: 8px;
      color: #001e2b;
      background: #ffffff;
      font: inherit;
    }
    .objectives-auth-form input:focus {
      outline: 0;
      border-color: #007599;
      box-shadow: 0 0 0 4px rgba(0, 117, 153, 0.12);
    }
    .objectives-auth-form button {
      min-height: 44px;
      border: 1px solid #001e2b;
      border-radius: 8px;
      color: #ffffff;
      background: #001e2b;
      font: inherit;
      font-weight: 900;
      cursor: pointer;
    }
    .objectives-auth-error {
      min-height: 1.3em;
      color: #9f1d20 !important;
      font-size: 0.86rem !important;
      font-weight: 800;
    }
  `;
  document.head.append(style);

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    } else {
      callback();
    }
  }

  function waitForWorkspaceAccess(callback) {
    if (!document.documentElement.classList.contains("workspace-auth-locked")) {
      callback();
      return;
    }

    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("workspace-auth-locked")) return;
      observer.disconnect();
      callback();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }

  async function hashAccessCode(value) {
    const payload = `${SALT}:${value}`;
    const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(payload));
    return Array.from(new Uint8Array(buffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  ready(() => {
    waitForWorkspaceAccess(() => {
      const backdrop = document.createElement("section");
      backdrop.className = "objectives-auth-backdrop";
      backdrop.setAttribute("aria-label", "Objectives access");
      backdrop.innerHTML = `
        <div class="objectives-auth-card">
          <img src="../assets/aryze-logo-wordmark.png" alt="Aryze" />
          <h1>Aryze 2026 Objectives</h1>
          <p>Enter the objectives code to open this internal page.</p>
          <form class="objectives-auth-form">
            <label>
              Objectives code
              <input type="password" autocomplete="current-password" required />
            </label>
            <p class="objectives-auth-error" aria-live="polite"></p>
            <button type="submit">Open objectives</button>
          </form>
        </div>
      `;
      document.body.append(backdrop);

      const form = backdrop.querySelector("form");
      const input = backdrop.querySelector("input");
      const error = backdrop.querySelector(".objectives-auth-error");

      input.focus();

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const hash = await hashAccessCode(input.value);
        if (hash !== ACCESS_HASH) {
          error.textContent = "Wrong objectives code.";
          input.select();
          return;
        }

        sessionStorage.setItem(ACCESS_KEY, "true");
        document.documentElement.classList.remove("objectives-auth-locked");
        backdrop.remove();
      });
    });
  });
})();
