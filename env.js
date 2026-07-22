// ============================================================
// env.js — Books 'n' Much More — shared site configuration
//
// Single source of truth for the values every page on the site
// needs to talk to Supabase. Include this ONE file, before
// auth.js / payments.js / lesson-engagement.js / the book-match
// quiz, on every page:
//
//   <script src="env.js"></script>
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   <script src="auth.js"></script>
//
// TO ROTATE THE KEY LATER: change it here, once. Every page that
// includes env.js picks up the new value automatically — nothing
// else to edit.
//
// IMPORTANT — what belongs here and what does NOT:
// This file ships to every visitor's browser as plain text, same
// as any other .js file on a static site. That's fine for the
// values below: the Supabase URL and PUBLISHABLE (anon) key are
// designed to be public — your Row Level Security policies are
// what actually keep data safe, not secrecy of this key.
//
// NEVER put a service_role key, Razorpay key secret, Razorpay
// webhook secret, or Brevo SMTP password in this file (or anywhere
// else the browser loads). Those already correctly live only in
// Supabase Edge Function secrets / GitHub Actions secrets, and
// must stay there.
// ============================================================

window.BNM_ENV = {
  SUPABASE_URL: 'https://dcewvfkszrpknxdwyual.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_P6kjf7686KpEmyJLuEtbXw_QV2kRJll'
};
