/**
 * lesson-engagement.js
 * Read-tracking + bookmarks for booksnmuchmore.com
 *
 * Uses BNMAuth.getUser() and BNMAuth.supabase — the same client/auth
 * pattern already used in lessons-book.html, auth.js, payments.js.
 *
 * Load order matters: this file must load AFTER auth.js, since it
 * depends on the global BNMAuth object auth.js defines.
 */

// ---------- READ TRACKING ----------

/**
 * Call this when a user opens/reads a specific lesson.
 * Silently no-ops if the user isn't logged in.
 */
async function trackLessonOpen(lessonId) {
  const user = await BNMAuth.getUser();
  if (!user) return; // not logged in — skip silently

  const { error } = await BNMAuth.supabase
    .from('lesson_reads')
    .upsert(
      {
        user_id: user.id,
        lesson_id: lessonId,
        last_read_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,lesson_id' }
    );

  if (error) console.error('trackLessonOpen error:', error.message);
}

/**
 * Returns an array of lesson_ids the current user has already read.
 */
async function getReadLessonIds() {
  const user = await BNMAuth.getUser();
  if (!user) return [];

  const { data, error } = await BNMAuth.supabase
    .from('lesson_reads')
    .select('lesson_id')
    .eq('user_id', user.id);

  if (error) {
    console.error('getReadLessonIds error:', error.message);
    return [];
  }
  return data.map(row => row.lesson_id);
}

// ---------- BOOKMARKS ----------

// Key used to remember "the lesson someone was trying to bookmark when we
// interrupted them with the login modal" — persisted (not just kept in a JS
// variable) because a brand-new user's signup completes via an email
// confirmation link, which reloads the page and would otherwise silently
// lose track of what they were trying to do.
const PENDING_BOOKMARK_KEY = 'bnm_pending_bookmark_lesson_id';

/**
 * Toggles bookmark state for a lesson. Returns true if now bookmarked,
 * false if now unbookmarked, or null if the user isn't logged in.
 */
async function toggleBookmark(lessonId) {
  const user = await BNMAuth.getUser();
  if (!user) {
    // Remember what they were trying to do so we can finish it automatically
    // once they're logged in — including after a signup confirmation-link
    // reload, when this same lessonId variable no longer exists in memory.
    sessionStorage.setItem(PENDING_BOOKMARK_KEY, lessonId);
    BNMAuth.openModal(
      'login',
      'इस lesson को bookmark करने के लिए पहले लॉगिन करें।',
      // Same-tab OTP login resolves instantly, so also retry right away —
      // resumePendingBookmark() (below) is the fallback for the reload case.
      () => resumePendingBookmark()
    );
    return null;
  }
  sessionStorage.removeItem(PENDING_BOOKMARK_KEY);

  const { data: existing, error: fetchError } = await BNMAuth.supabase
    .from('bookmarks')
    .select('id')
    .eq('user_id', user.id)
    .eq('lesson_id', lessonId)
    .maybeSingle();

  if (fetchError) {
    console.error('toggleBookmark fetch error:', fetchError.message);
    return null;
  }

  if (existing) {
    const { error } = await BNMAuth.supabase.from('bookmarks').delete().eq('id', existing.id);
    if (error) console.error('unbookmark error:', error.message);
    return false;
  } else {
    const { error } = await BNMAuth.supabase
      .from('bookmarks')
      .insert({ user_id: user.id, lesson_id: lessonId });
    if (error) console.error('bookmark error:', error.message);
    return true;
  }
}

/**
 * If someone tried to bookmark a lesson while logged out, we stashed the
 * lesson id in sessionStorage before showing the login modal. Once we know
 * they're logged in — whether that's an instant OTP login in the same tab,
 * or a fresh page load after they clicked a signup confirmation link in
 * their email — this finishes the bookmark they originally asked for and
 * updates the button on screen, so they never have to click it twice.
 */
async function resumePendingBookmark() {
  const pendingLessonId = sessionStorage.getItem(PENDING_BOOKMARK_KEY);
  if (!pendingLessonId) return;

  const user = await BNMAuth.getUser();
  if (!user) return; // still not logged in — leave it pending

  const nowBookmarked = await toggleBookmark(pendingLessonId);
  if (nowBookmarked === true) {
    const btn = document.querySelector(`.bookmark-btn[data-lesson-id="${pendingLessonId}"]`);
    if (btn) btn.classList.add('bookmarked');
  }
}

/**
 * Returns a Set of lesson_ids the current user has bookmarked.
 */
async function getBookmarkedLessonIds() {
  const user = await BNMAuth.getUser();
  if (!user) return new Set();

  const { data, error } = await BNMAuth.supabase
    .from('bookmarks')
    .select('lesson_id')
    .eq('user_id', user.id);

  if (error) {
    console.error('getBookmarkedLessonIds error:', error.message);
    return new Set();
  }
  return new Set(data.map(row => row.lesson_id));
}

// ---------- UI WIRING ----------

/**
 * Attaches click handlers to all .bookmark-btn elements on the page
 * and sets their initial filled/outline state. Call once after
 * lesson cards are rendered into the DOM.
 */
async function initBookmarkButtons() {
  // If someone was interrupted by the login modal while bookmarking, and
  // they're logged in now (OTP just completed, or this is a fresh page
  // load after a signup confirmation-link click), finish that bookmark
  // before wiring up the rest of the buttons.
  await resumePendingBookmark();

  const bookmarked = await getBookmarkedLessonIds();

  document.querySelectorAll('.bookmark-btn').forEach(btn => {
    const lessonId = btn.dataset.lessonId;
    if (bookmarked.has(lessonId)) {
      btn.classList.add('bookmarked');
    }

    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isNowBookmarked = await toggleBookmark(lessonId);
      if (isNowBookmarked === true) {
        btn.classList.add('bookmarked');
      } else if (isNowBookmarked === false) {
        btn.classList.remove('bookmarked');
      }
      // if null (not logged in), leave state unchanged — login modal was opened instead
    });
  });
}
