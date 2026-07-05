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

/**
 * Toggles bookmark state for a lesson. Returns true if now bookmarked,
 * false if now unbookmarked, or null if the user isn't logged in.
 */
async function toggleBookmark(lessonId) {
  const user = await BNMAuth.getUser();
  if (!user) {
    BNMAuth.openModal('login');
    return null;
  }

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
