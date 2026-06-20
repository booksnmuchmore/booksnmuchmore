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
  const RAZORPAY_KEY_ID = 'rzp_test_T3r1AJ73F1d6sI';

  const SITE_NAME = "Books 'n' Much More";
  const SITE_LOGO = 'https://raw.githubusercontent.com/booksnmuchmore/booksnmuchmore/main/logo.webp';

  // ---- Core: open Razorpay checkout for a given amount + metadata ----
  function openCheckout({ amountRs, description, onSuccess }) {
    BNMAuth.requireLogin(async () => {
      const user = await BNMAuth.getUser();

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: amountRs * 100, // Razorpay expects paise
        currency: 'INR',
        name: SITE_NAME,
        description: description,
        image: SITE_LOGO,
        prefill: {
          email: user.email || '',
        },
        notes: {
          user_id: user.id,
        },
        theme: {
          color: '#C8813A', // matches site's amber accent
        },
        handler: function (response) {
          // response.razorpay_payment_id is available here.
          // In TEST MODE we trust this client-side and record it directly.
          // In PRODUCTION, do NOT trust this alone — verify server-side
          // (see note at bottom of file) before marking anything "paid".
          onSuccess(response.razorpay_payment_id);
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

  // ---- Tier 1: Unlock a single lesson (₹1) ----
  async function unlockLesson(lessonId, priceRs, bookTitle, lessonTitle) {
    openCheckout({
      amountRs: priceRs,
      description: `${bookTitle} — ${lessonTitle}`,
      onSuccess: async (paymentId) => {
        const user = await BNMAuth.getUser();
        const { error } = await BNMAuth.supabase.from('purchases').insert({
          user_id: user.id,
          type: 'lesson',
          lesson_id: lessonId,
          amount_rs: priceRs,
          razorpay_payment_id: paymentId,
          status: 'paid',
        });
        if (error) {
          alert('Payment succeeded but recording it failed. Please contact support with this Payment ID: ' + paymentId);
          console.error(error);
          return;
        }
        alert('Lesson unlocked! ✓');
        location.reload(); // re-fetch lessons, now unlocked
      },
    });
  }

  // ---- Tier 2: Unlock entire book (₹7) ----
  async function unlockBook(bookId, priceRs, bookTitle) {
    openCheckout({
      amountRs: priceRs,
      description: `Full book: ${bookTitle}`,
      onSuccess: async (paymentId) => {
        const user = await BNMAuth.getUser();
        const { error } = await BNMAuth.supabase.from('purchases').insert({
          user_id: user.id,
          type: 'book',
          book_id: bookId,
          amount_rs: priceRs,
          razorpay_payment_id: paymentId,
          status: 'paid',
        });
        if (error) {
          alert('Payment succeeded but recording it failed. Please contact support with this Payment ID: ' + paymentId);
          console.error(error);
          return;
        }
        alert('Book unlocked! All 10 lessons are now available. ✓');
        location.reload();
      },
    });
  }

  // ---- Tier 3: Monthly subscription (₹99) ----
  async function subscribeMonthly() {
    openCheckout({
      amountRs: 99,
      description: 'Monthly Subscription — All Books, All Lessons',
      onSuccess: async (paymentId) => {
        const user = await BNMAuth.getUser();
        const startedAt = new Date();
        const expiresAt = new Date(startedAt);
        expiresAt.setDate(expiresAt.getDate() + 30); // 30-day access

        const { error } = await BNMAuth.supabase.from('subscriptions').insert({
          user_id: user.id,
          razorpay_subscription_id: paymentId, // using payment id as reference in this simple flow
          status: 'active',
          started_at: startedAt.toISOString(),
          expires_at: expiresAt.toISOString(),
        });
        if (error) {
          alert('Payment succeeded but recording it failed. Please contact support with this Payment ID: ' + paymentId);
          console.error(error);
          return;
        }
        alert('Subscribed! You now have access to every book and lesson for 30 days. ✓');
        location.reload();
      },
    });
  }

  window.BNMPayments = {
    unlockLesson,
    unlockBook,
    subscribeMonthly,
  };
})();

// ============================================================
// PRODUCTION NOTE (read before accepting real money):
//
// The flow above trusts the client-side `handler` callback to
// confirm payment success. This is fine for TEST MODE, but for
// real transactions it is NOT secure — a malicious user could
// fake a frontend success call without actually paying.
//
// For production, the correct flow is:
//   1. Frontend calls a Supabase Edge Function ("create-order")
//      which calls Razorpay's Orders API server-side using your
//      Key Secret, and returns an order_id.
//   2. Frontend opens Razorpay Checkout using that order_id.
//   3. Razorpay sends a webhook to another Edge Function
//      ("razorpay-webhook") on successful payment.
//   4. That webhook verifies the payment signature using your
//      Key Secret, THEN inserts the `purchases`/`subscriptions`
//      row — never trusting the frontend alone.
//
// This requires Supabase Edge Functions (Deno-based serverless
// functions, still on the free tier). This is the next concrete
// step before going live with real payments — flag this to
// Claude when ready to build it.
// ============================================================
