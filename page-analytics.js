/* ============================================================
   page-analytics.js — Books 'n' Much More — page hit tracking
   Logs every page view (anonymous + logged-in) to the
   public.page_views table via the log_page_view RPC.

   Include AFTER env.js, supabase-js, and auth.js:
     <script src="env.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
     <script src="auth.js"></script>
     <script src="page-analytics.js"></script>
   ============================================================ */
(function () {
  if (!window.BNM_ENV) {
    console.error('page-analytics.js: window.BNM_ENV is missing — make sure env.js loads first.');
    return;
  }
  if (!window.supabase) {
    console.error('page-analytics.js: supabase-js is missing — make sure it loads before this file.');
    return;
  }

  var SUPABASE_URL = window.BNM_ENV.SUPABASE_URL;
  var SUPABASE_ANON_KEY = window.BNM_ENV.SUPABASE_ANON_KEY;
  var client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  function getSessionId() {
    var id = localStorage.getItem('bnmm_session_id');
    if (!id) {
      id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() :
        'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
      localStorage.setItem('bnmm_session_id', id);
    }
    return id;
  }

  function trackPageView() {
    client.rpc('log_page_view', {
      p_session_id: getSessionId(),
      p_page_path: window.location.pathname,
      p_referrer: document.referrer || null
    }).then(function (res) {
      if (res && res.error) {
        console.error('page-analytics.js: log_page_view failed:', res.error);
      }
    });
  }

  trackPageView();
})();
