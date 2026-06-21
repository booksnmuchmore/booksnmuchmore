// ============================================================
// payments.js — Books 'n' Much More
// Razorpay Checkout integration for 3 tiers:
//   ₹1  — single lesson
//   ₹7  — full book
//   ₹99 — monthly subscription
//
// Requires: auth.js loaded first (uses BNMAuth.supabase + BNMAuth.requireLogin)
// Requires: Razorpay Checkout script loaded:
//   <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
//
// IMPORTANT — Test Mode vs Live Mode:
// This file uses order-less "Standard Checkout" for simplicity,
// which works in test mode without a backend order-creation step.
// For PRODUCTION, Razorpay strongly recommends creating an Order
// server-side first (via Supabase Edge Function) before opening
// checkout, and verifying the payment signature server-side too.
// See the note at the bottom of this file for the production path.
// ============================================================

(function () {
  // ---- EDIT THIS: your Razorpay Key ID (safe for frontend) ----
  const RAZORPAY_KEY_ID = 'rzp_live_T4LAxwgkat6d6L';

  const SITE_NAME = "Books 'n' Much More";
  const SITE_LOGO = 'https://raw.githubusercontent.com/booksnmuchmore/booksnmuchmore/main/logo.webp';

  const SUPABASE_FUNCTIONS_URL = 'https://dcewvfkszrpknxdwyual.supabase.co/functions/v1';

  // ---- Core: create a server-verified order, then open Razorpay checkout against it ----
  // amountRs/description/notes describe what's being purchased; onSuccess
  // fires after checkout closes successfully, purely to refresh the UI —
  // the actual unlock is written by the razorpay-webhook Edge Function
  // once Razorpay confirms the payment server-side, NOT by this callback.
  function openCheckout({ description, notes, onSuccess }) {
    BNMAuth.requireLogin(async () => {
      const user = await BNMAuth.getUser();

      // Ask our own server (Edge Function) to create the Razorpay Order.
      // The server looks up the REAL price itself from the books/lessons
      // tables (or the subscription tier map) based on notes.purchase_type
      // + notes.lesson_id/book_id/tier — it does not trust any amount sent
      // from here. This means price changes in Supabase take effect
      // immediately, and a tampered frontend can't request a lower price.
      let orderRes;
      try {
        const { data: session } = await BNMAuth.supabase.auth.getSession();
        const resp = await fetch(`${SUPABASE_FUNCTIONS_URL}/create-razorpay-order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.session?.access_token || ''}`,
          },
          body: JSON.stringify({ notes: { ...notes, user_id: user.id } }),
        });
        orderRes = await resp.json();
        if (!resp.ok) throw new Error(orderRes.error || 'Order creation failed');
      } catch (err) {
        console.error('Failed to create order:', err);
        alert('Could not start checkout. Please try again in a moment.');
        return;
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: orderRes.amount,
        currency: orderRes.currency,
        order_id: orderRes.order_id, // ties this checkout to the server-created order
        name: SITE_NAME,
        description: description,
        image: SITE_LOGO,
        prefill: {
          email: user.email || '',
        },
        notes: { ...notes, user_id: user.id },
        theme: {
          color: '#C8813A', // matches site's amber accent
        },
        handler: function (response) {
          // The actual unlock row is written server-side by
          // razorpay-webhook once Razorpay confirms payment — this
          // handler ONLY refreshes the UI. It does not, and must not,
          // write to purchases/subscriptions itself.
          onSuccess();
        },
        modal: {
          ondismiss: function () {
            console.log('Checkout closed by user.');
          },
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    });
  }

  // ---- Tier 1: Unlock a single lesson ----
  async function unlockLesson(lessonId, priceRs, bookTitle, lessonTitle) {
    openCheckout({
      description: `${bookTitle} — ${lessonTitle}`,
      notes: { purchase_type: 'lesson', lesson_id: lessonId },
      onSuccess: async () => {
        await waitForUnlockThenReload();
      },
    });
  }

  // ---- Tier 2: Unlock entire book ----
  async function unlockBook(bookId, priceRs, bookTitle) {
    openCheckout({
      description: `Full book: ${bookTitle}`,
      notes: { purchase_type: 'book', book_id: bookId },
      onSuccess: async () => {
        await waitForUnlockThenReload();
      },
    });
  }

  // ---- Tier 3: Subscription (pass tier: 'seeker' ₹99 or 'scholar' ₹299) ----
  async function subscribeMonthly(tier = 'seeker') {
    openCheckout({
      description: `Monthly Subscription — ${tier === 'scholar' ? 'Scholar' : 'Seeker'} plan`,
      notes: { purchase_type: 'subscription', tier },
      onSuccess: async () => {
        await waitForUnlockThenReload();
      },
    });
  }

  // ---- Helper: give the webhook a moment to land, then reload ----
  // Razorpay's handler fires the instant checkout closes, but the
  // webhook (which actually writes the purchases/subscriptions row)
  // arrives separately and slightly later. A short wait avoids reloading
  // into a page that hasn't been unlocked yet. If it's still not visible
  // after this, a manual refresh a few seconds later will pick it up.
  async function waitForUnlockThenReload() {
    alert('Payment received! Unlocking your content…');
    await new Promise((resolve) => setTimeout(resolve, 2500));
    location.reload();
  }

  window.BNMPayments = {
    unlockLesson,
    unlockBook,
    subscribeMonthly,
  };
})();

// ============================================================
// PRODUCTION FLOW — now implemented, read before going live:
//
//   1. Frontend calls the create-razorpay-order Edge Function,
//      which creates a Razorpay Order server-side using the Key
//      Secret (never exposed to the browser) and returns order_id.
//   2. Frontend opens Razorpay Checkout using that order_id.
//   3. Razorpay sends a webhook to the razorpay-webhook Edge
//      Function on payment.captured.
//   4. That function verifies the webhook signature using
//      RAZORPAY_WEBHOOK_SECRET, then inserts the purchases/
//      subscriptions row using the service_role key — the
//      frontend itself can no longer write these rows directly
//      (see RLS policy changes applied alongside this).
//
// Required setup still needed in the Razorpay dashboard:
//   - Create a webhook pointing to:
//     https://dcewvfkszrpknxdwyual.supabase.co/functions/v1/razorpay-webhook
//   - Subscribe it to the "payment.captured" event
//   - Copy the Webhook Secret it gives you into Supabase's
//     Edge Function secrets as RAZORPAY_WEBHOOK_SECRET
//   - Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET as secrets too
// ============================================================
