// ============================================================
// auth.js — Books 'n' Much More
// Reusable Supabase Auth (email OTP) module + login modal.
// Include this script on any page that needs login (lesson
// pages, account page, etc.) alongside the Supabase JS CDN.
//
// USAGE on any page:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   <script src="auth.js"></script>
//
// Then call:
//   BNMAuth.requireLogin(() => { ... do something after login ... });
//   BNMAuth.getUser()  -> returns current user object or null
//   BNMAuth.logout()
// ============================================================

(function () {
  // ---- EDIT THESE: your Supabase project URL + PUBLISHABLE key ----
  // NEVER put the service_role/secret key here — this runs in the browser.
  const SUPABASE_URL = 'https://dcewvfkszrpknxdwyual.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_P6kjf7686KpEmyJLuEtbXw_QV2kRJll'; // publishable key

  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  let pendingCallback = null;
  let currentUser = null;
  const uiTargets = []; // { loginBtnId, accountElId } pairs registered via initAuthUI
  const authChangeListeners = []; // callbacks registered via onAuthChange

  // ---- Render logged-in / logged-out state into registered UI targets ----
  function renderAuthUI() {
    uiTargets.forEach(({ loginBtnId, accountElId }) => {
      const loginBtn = loginBtnId ? document.getElementById(loginBtnId) : null;
      const accountEl = accountElId ? document.getElementById(accountElId) : null;

      if (currentUser) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (accountEl) {
          accountEl.style.display = 'inline-flex';
          accountEl.innerHTML = `
            <span class="bnm-account-email">${currentUser.email}</span>
            <button class="bnm-logout-btn" type="button">Logout</button>
          `;
          const logoutBtn = accountEl.querySelector('.bnm-logout-btn');
          if (logoutBtn) logoutBtn.onclick = () => logout();
        }
      } else {
        if (loginBtn) loginBtn.style.display = '';
        if (accountEl) {
          accountEl.style.display = 'none';
          accountEl.innerHTML = '';
        }
      }
    });
  }

  // ---- Keep currentUser in sync with Supabase session, on load AND on change ----
  // This fires immediately on page load with the existing session (if any),
  // and again automatically after sign-in / sign-out / token refresh.
  supabase.auth.onAuthStateChange((_event, session) => {
    currentUser = session?.user || null;
    renderAuthUI();
    authChangeListeners.forEach((fn) => {
      try { fn(currentUser); } catch (e) { console.error('BNMAuth onAuthChange listener error:', e); }
    });
  });

  // ---- Inject modal HTML + styles once ----
  function injectModal() {
    if (document.getElementById('bnm-auth-modal')) return;

    const style = document.createElement('style');
    style.textContent = `
      #bnm-auth-overlay {
        position: fixed; inset: 0; background: rgba(44,26,14,0.55);
        backdrop-filter: blur(4px); z-index: 9999;
        display: none; align-items: center; justify-content: center;
      }
      #bnm-auth-overlay.active { display: flex; }
      #bnm-auth-modal {
        background: #FBF6EC; border-radius: 8px; padding: 2rem;
        max-width: 380px; width: 90%; box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        font-family: 'Lora', Georgia, serif; position: relative;
      }
      #bnm-auth-modal h3 {
        font-family: 'Playfair Display', serif; font-size: 1.4rem;
        color: #2C1A0E; margin-bottom: 0.5rem; font-weight: 800;
      }
      #bnm-auth-modal p { font-size: 0.85rem; color: #7A6250; margin-bottom: 1.2rem; line-height: 1.6; }
      #bnm-auth-modal input {
        width: 100%; padding: 0.75rem 1rem; border: 1.5px solid rgba(200,129,58,0.3);
        border-radius: 4px; font-family: 'Lora', serif; font-size: 0.95rem;
        margin-bottom: 0.8rem; outline: none; background: #fff;
      }
      #bnm-auth-modal input:focus { border-color: #C8813A; }
      #bnm-auth-modal button {
        width: 100%; padding: 0.75rem; border: none; border-radius: 4px;
        background: #C8813A; color: #fff; font-family: 'Raleway', sans-serif;
        font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
        cursor: pointer; transition: background 0.2s;
      }
      #bnm-auth-modal button:hover { background: #8B4010; }
      #bnm-auth-modal button:disabled { opacity: 0.5; cursor: not-allowed; }
      #bnm-auth-close {
        position: absolute; top: 1rem; right: 1.2rem; background: none; border: none;
        font-size: 1.3rem; color: #7A6250; cursor: pointer; width: auto; padding: 0;
      }
      #bnm-auth-status { font-size: 0.78rem; margin-top: 0.6rem; min-height: 1.2em; }
      #bnm-auth-status.error { color: #C0392B; }
      #bnm-auth-status.success { color: #2E7D32; }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'bnm-auth-overlay';
    overlay.innerHTML = `
      <div id="bnm-auth-modal">
        <button id="bnm-auth-close" aria-label="Close">&times;</button>
        <div id="bnm-auth-step-email">
          <h3>Login to Continue</h3>
          <p>हम आपको एक OTP कोड भेजेंगे आपके ईमेल पर — पासवर्ड की ज़रूरत नहीं।</p>
          <input type="email" id="bnm-auth-email" placeholder="you@example.com" autocomplete="email">
          <button id="bnm-auth-send-otp">Send OTP</button>
          <div id="bnm-auth-status"></div>
        </div>
        <div id="bnm-auth-step-otp" style="display:none;">
          <h3>Enter the Code</h3>
          <p>हमने एक 8-digit code भेजा है <span id="bnm-auth-email-display"></span> पर।</p>
          <input type="text" id="bnm-auth-otp" placeholder="12345678" inputmode="numeric" maxlength="8">
          <button id="bnm-auth-verify-otp">Verify &amp; Continue</button>
          <div id="bnm-auth-status2"></div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Close handlers
    document.getElementById('bnm-auth-close').onclick = closeModal;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

    // Send OTP
    document.getElementById('bnm-auth-send-otp').onclick = async () => {
      const email = document.getElementById('bnm-auth-email').value.trim();
      const statusEl = document.getElementById('bnm-auth-status');
      if (!email.includes('@')) {
        statusEl.textContent = 'Please enter a valid email address.';
        statusEl.className = 'error';
        return;
      }
      const btn = document.getElementById('bnm-auth-send-otp');
      btn.disabled = true;
      btn.textContent = 'Sending...';

      const { error } = await supabase.auth.signInWithOtp({ email });

      btn.disabled = false;
      btn.textContent = 'Send OTP';

      if (error) {
        statusEl.textContent = error.message;
        statusEl.className = 'error';
        return;
      }
      document.getElementById('bnm-auth-email-display').textContent = email;
      document.getElementById('bnm-auth-step-email').style.display = 'none';
      document.getElementById('bnm-auth-step-otp').style.display = 'block';
    };

    // Verify OTP
    document.getElementById('bnm-auth-verify-otp').onclick = async () => {
      const email = document.getElementById('bnm-auth-email').value.trim();
      const token = document.getElementById('bnm-auth-otp').value.trim();
      const statusEl = document.getElementById('bnm-auth-status2');

      if (token.length !== 8) {
        statusEl.textContent = 'Enter the 8-digit code.';
        statusEl.className = 'error';
        return;
      }
      const btn = document.getElementById('bnm-auth-verify-otp');
      btn.disabled = true;
      btn.textContent = 'Verifying...';

      const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email' });

      btn.disabled = false;
      btn.textContent = 'Verify & Continue';

      if (error) {
        statusEl.textContent = 'Incorrect or expired code. Try again.';
        statusEl.className = 'error';
        return;
      }

      statusEl.textContent = 'Logged in! ✓';
      statusEl.className = 'success';

      setTimeout(() => {
        closeModal();
        if (pendingCallback) { pendingCallback(); pendingCallback = null; }
      }, 600);
    };
  }

  function openModal() {
    injectModal();
    document.getElementById('bnm-auth-overlay').classList.add('active');
    // reset to step 1 each time
    document.getElementById('bnm-auth-step-email').style.display = 'block';
    document.getElementById('bnm-auth-step-otp').style.display = 'none';
    document.getElementById('bnm-auth-status').textContent = '';
  }

  function closeModal() {
    const overlay = document.getElementById('bnm-auth-overlay');
    if (overlay) overlay.classList.remove('active');
    pendingCallback = null;
  }

  // ---- Public API ----
  async function getUser() {
    // currentUser is kept in sync by onAuthStateChange (fires on load too),
    // but fall back to a direct check if it hasn't fired yet.
    if (currentUser) return currentUser;
    const { data } = await supabase.auth.getUser();
    currentUser = data?.user || null;
    return currentUser;
  }

  async function requireLogin(callback) {
    const user = await getUser();
    if (user) {
      callback();
      return;
    }
    pendingCallback = callback;
    openModal();
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.reload();
  }

  // Register a login button + account-display element so they auto-update
  // on login/logout/page-load. Call once per page, after the elements exist.
  //   BNMAuth.initAuthUI({ loginBtnId: 'login-btn', accountElId: 'account-area' });
  function initAuthUI({ loginBtnId, accountElId } = {}) {
    uiTargets.push({ loginBtnId, accountElId });
    renderAuthUI(); // apply immediately in case session is already known
  }

  // Register a callback to run on every login/logout/page-load auth check.
  // Useful for re-rendering custom nav UI or re-fetching gated content.
  //   const unsubscribe = BNMAuth.onAuthChange((user) => { ... });
  function onAuthChange(callback) {
    authChangeListeners.push(callback);
    // Returns an unsubscribe function in case the caller needs it.
    return () => {
      const idx = authChangeListeners.indexOf(callback);
      if (idx !== -1) authChangeListeners.splice(idx, 1);
    };
  }

  window.BNMAuth = {
    supabase,      // exposed so other scripts (e.g. payments.js) can reuse the same client
    getUser,
    requireLogin,
    logout,
    openModal,
    closeModal,
    initAuthUI,
    onAuthChange,
  };
})();
