// ============================================================
//  Books 'n' Much More — Affiliate Links
//  Single source of truth for all Amazon affiliate tags & links.
//  Used by: lessons-book.html, books.html
//
//  Supported marketplaces: IN, US, CA, GB, DE
//  Belgium (BE) and Austria (AT) route to DE.
//  France (FR) and others route to US.
//
//  To add a book  : add a new slug entry to BOOK_LINKS below.
//  To add a market: add tag to AFFILIATE_TAGS, base URL to
//                   AMAZON_BASE_URLS, and map in getMarketKey().
// ============================================================

const AFFILIATE_TAGS = {
  IN: "booksnmuchm02-21",
  US: "booksnmuchmor-20",
  CA: "booksnmuchm08-20",
  GB: "booksnmuchm08-21",
  DE: "booksnmuchm0f-21"
};

// Base dp/ URLs per marketplace — no trailing slash
const AMAZON_BASE_URLS = {
  IN: "https://www.amazon.in/dp/",
  US: "https://www.amazon.com/dp/",
  CA: "https://www.amazon.ca/dp/",
  GB: "https://www.amazon.co.uk/dp/",
  DE: "https://www.amazon.de/dp/"
};

// Maps a visitor's country code → marketplace key
function getMarketKey(countryCode) {
  const map = {
    IN: "IN",
    CA: "CA",
    GB: "GB",
    DE: "DE",
    AT: "DE",  // Austria  → amazon.de
    BE: "DE",  // Belgium  → amazon.de
    CH: "DE"   // Switzerland → amazon.de
  };
  return map[countryCode] || "US";
}

// Builds the full affiliate URL for a book + country code.
// Falls back: market ASIN → US ASIN; market tag → US tag; market base → US base.
function buildAffiliateLink(slug, countryCode) {
  const market = getMarketKey(countryCode);
  const links  = BOOK_LINKS[slug] || {};
  const asin   = links[market] || links.US || "";
  const tag    = AFFILIATE_TAGS[market] || AFFILIATE_TAGS.US;
  const base   = AMAZON_BASE_URLS[market] || AMAZON_BASE_URLS.US;

  // Some entries store full URLs instead of bare ASINs (legacy).
  // If the value already starts with "http", append tag as-is.
  if (asin.startsWith("http")) {
    return asin + (asin.includes("?") ? "&" : "?") + "tag=" + tag;
  }
  return base + asin + "?tag=" + tag;
}

// ── Book link data ────────────────────────────────────────────
// GB / DE values are Amazon UK / DE ASINs (English editions).
// Replace with local-language ASINs if preferred.
// ─────────────────────────────────────────────────────────────

const BOOK_LINKS = {

  "think-and-grow-rich": {
    IN: "https://www.amazon.in/dp/1585424331",
    US: "https://www.amazon.com/dp/1585424331",
    CA: "https://www.amazon.ca/dp/1585424331",
    GB: "1585424331",
    DE: "1585424331"
  },

  "atomic-habits": {
    IN: "https://www.amazon.in/dp/1847941834",
    US: "https://www.amazon.com/dp/0735211299",
    CA: "https://www.amazon.ca/dp/0735211299",
    GB: "1847941834",
    DE: "1847941834"
  },

  "rich-dad-poor-dad": {
    IN: "https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131",
    US: "https://www.amazon.com/dp/1612680194",
    CA: "https://www.amazon.ca/dp/1612680194",
    GB: "1612680194",
    DE: "1612680194"
  },

  "the-alchemist": {
    IN: "https://www.amazon.in/dp/0062315005",
    US: "https://www.amazon.com/dp/0062315005",
    CA: "https://www.amazon.ca/dp/0062315005",
    GB: "0722532938",
    DE: "0062315005"
  },

  "mindset": {
    IN: "https://www.amazon.in/dp/1472139976",
    US: "https://www.amazon.com/dp/0345472322",
    CA: "https://www.amazon.ca/dp/0345472322",
    GB: "1472139976",
    DE: "0345472322"
  },

  "mind-management": {
    IN: "https://www.amazon.in/Mind-Management-Not-Time-Productivity/dp/8119623835",
    US: "https://www.amazon.com/Mind-Management-Not-Time-Productivity/dp/8119623835",
    CA: "https://www.amazon.ca/Mind-Management-Not-Time-Productivity/dp/8119623835",
    GB: "1544514565",
    DE: "1544514565"
  },

  "ikigai": {
    IN: "https://www.amazon.in/dp/178633089X",
    US: "https://www.amazon.com/dp/0143130722",
    CA: "https://www.amazon.ca/dp/0143130722",
    GB: "178633089X",
    DE: "0143130722"
  },

  "deep-work": {
    IN: "https://www.amazon.in/dp/0349413681",
    US: "https://www.amazon.com/dp/1455586692",
    CA: "https://www.amazon.ca/dp/1455586692",
    GB: "0349413681",
    DE: "1455586692"
  },

  "linchpin": {
    IN: "https://www.amazon.in/dp/0749953357",
    US: "https://www.amazon.com/dp/1591843162",
    CA: "https://www.amazon.ca/dp/1591843162",
    GB: "0749953357",
    DE: "1591843162"
  },

  "7-habits-of-highly-effective-people": {
    IN: "https://www.amazon.in/dp/1982137134",
    US: "https://www.amazon.com/dp/1982137134",
    CA: "https://www.amazon.ca/dp/1982137134",
    GB: "1982137134",
    DE: "1982137134"
  },

  "subtle-art": {
    IN: "https://www.amazon.in/dp/0062457713",
    US: "https://www.amazon.com/dp/0062457713",
    CA: "https://www.amazon.ca/dp/0062457713",
    GB: "0062457713",
    DE: "0062457713"
  },

  "how-to-win-friends": {
    IN: "https://www.amazon.in/dp/0671027034",
    US: "https://www.amazon.com/dp/0671027034",
    CA: "https://www.amazon.ca/dp/0671027034",
    GB: "0671027034",
    DE: "0671027034"
  },

  "monk-who-sold-ferrari": {
    IN: "https://www.amazon.in/dp/8172234104",
    US: "https://www.amazon.com/dp/0062515675",
    CA: "https://www.amazon.ca/dp/0062515675",
    GB: "0007549474",
    DE: "0062515675"
  },

  "psychology-of-money": {
    IN: "https://www.amazon.in/dp/9390166268",
    US: "https://www.amazon.com/dp/0857197681",
    CA: "https://www.amazon.ca/dp/0857197681",
    GB: "0857197681",
    DE: "0857197681"
  },

  "practicing-mind": {
    IN: "https://www.amazon.in/dp/1608680908",
    US: "https://www.amazon.com/dp/1608680908",
    CA: "https://www.amazon.ca/dp/1608680908",
    GB: "1608680908",
    DE: "1608680908"
  },

  "tools-of-titans": {
    IN: "https://www.amazon.in/Tools-Titans-Billionaires-World-Class-Performers/dp/1785041274/ref=sr_1_2?crid=U3WXM54PWN2S&dib=eyJ2IjoiMSJ9.aKOdnKV6Lo0HNhsXKzFTiid6C_PC3pA2zOaP80L3HUEOWfqNWyTymaIK2f2CR03wsdhmr1DWe_fKlPuyyN7JJSUHKYH2s_H5BOMAcEkypUvBJdUVShkxuCk8HdNvsSc2y5gVNXHKb-sv5S_hlMhDTsT6bvNT3mso5ATpL8FVckpCYiAtxhA7_R52GHwmyolhUncx-hR9CHPFWp4JsPIZClmg3og4PJkXm5lQQ58elIebTiKFOyJ6uXbLGmozIJXX9r71BY70ggtXmOwLjBtI1xN_J3I5HjjPBvsJdws0F2E.CdljZ3ZDDUPUG3LEYL2sp3Sii-6YNr45vFhMQqGHX74&dib_tag=se&keywords=tools+of+titans&qid=1775654928&sprefix=tools+of+tit%2Caps%2C733&sr=8-2",
    US: "https://www.amazon.com/dp/1328683788",
    CA: "https://www.amazon.ca/dp/1328683788",
    GB: "1785041274",
    DE: "1328683788"
  },

  "lifes-amazing-secrets": {
    IN: "https://www.amazon.in/dp/0143442295",
    US: "https://www.amazon.com/dp/0143442295",
    CA: "https://www.amazon.ca/dp/0143442295",
    GB: "0143442295",
    DE: "0143442295"
  },

  // ── Added [date: see commit] — these 23 books had no entry at all,
  // which is why their "Buy on Amazon" links were broken (empty ASIN).
  // ASINs derived from each book's verified ISBN-13 (the same ISBN-13
  // already used for the cover image URL in Supabase), converted to
  // ISBN-10 via the standard checksum algorithm. This conversion method
  // was cross-checked against 9 books already in this file with known-
  // correct ASINs — all 9 matched exactly, confirming the method.
  //
  // IN defaults to the same ASIN as US for now. Some books (like
  // monk-who-sold-ferrari, psychology-of-money above) have a genuinely
  // different India-specific edition with its own ISBN — if any of
  // these 23 do too, swap in the India-specific ASIN later for better
  // pricing/availability/commission. Not done here since it requires
  // a per-book lookup rather than the ISBN-13 conversion shortcut.

  "cant-hurt-me": {
    IN: "https://www.amazon.in/dp/1544512287",
    US: "https://www.amazon.com/dp/1544512287",
    CA: "https://www.amazon.ca/dp/1544512287",
    GB: "1544512287",
    DE: "1544512287"
  },

  "the-kite-runner": {
    IN: "https://www.amazon.in/dp/1594480001",
    US: "https://www.amazon.com/dp/1594480001",
    CA: "https://www.amazon.ca/dp/1594480001",
    GB: "1594480001",
    DE: "1594480001"
  },

  "old-man-and-the-sea": {
    IN: "https://www.amazon.in/dp/0684801221",
    US: "https://www.amazon.com/dp/0684801221",
    CA: "https://www.amazon.ca/dp/0684801221",
    GB: "0684801221",
    DE: "0684801221"
  },

  "harry-potter-sorcerers-stone": {
    IN: "https://www.amazon.in/dp/059035342X",
    US: "https://www.amazon.com/dp/059035342X",
    CA: "https://www.amazon.ca/dp/059035342X",
    GB: "059035342X",
    DE: "059035342X"
  },

  "why-we-sleep": {
    IN: "https://www.amazon.in/dp/1501144316",
    US: "https://www.amazon.com/dp/1501144316",
    CA: "https://www.amazon.ca/dp/1501144316",
    GB: "1501144316",
    DE: "1501144316"
  },

  "make-it-stick": {
    IN: "https://www.amazon.in/dp/0674729013",
    US: "https://www.amazon.com/dp/0674729013",
    CA: "https://www.amazon.ca/dp/0674729013",
    GB: "0674729013",
    DE: "0674729013"
  },

  "freakonomics": {
    IN: "https://www.amazon.in/dp/006073132X",
    US: "https://www.amazon.com/dp/006073132X",
    CA: "https://www.amazon.ca/dp/006073132X",
    GB: "006073132X",
    DE: "006073132X"
  },

  "long-walk-to-freedom": {
    IN: "https://www.amazon.in/dp/0316548189",
    US: "https://www.amazon.com/dp/0316548189",
    CA: "https://www.amazon.ca/dp/0316548189",
    GB: "0316548189",
    DE: "0316548189"
  },

  "bhagavad-gita": {
    IN: "https://www.amazon.in/dp/0553213652",
    US: "https://www.amazon.com/dp/0553213652",
    CA: "https://www.amazon.ca/dp/0553213652",
    GB: "0553213652",
    DE: "0553213652"
  },

  "mans-search-for-meaning": {
    IN: "https://www.amazon.in/dp/0807014273",
    US: "https://www.amazon.com/dp/0807014273",
    CA: "https://www.amazon.ca/dp/0807014273",
    GB: "0807014273",
    DE: "0807014273"
  },

  "zero-to-one": {
    IN: "https://www.amazon.in/dp/0804139296",
    US: "https://www.amazon.com/dp/0804139296",
    CA: "https://www.amazon.ca/dp/0804139296",
    GB: "0804139296",
    DE: "0804139296"
  },

  "daring-greatly": {
    IN: "https://www.amazon.in/dp/1592408419",
    US: "https://www.amazon.com/dp/1592408419",
    CA: "https://www.amazon.ca/dp/1592408419",
    GB: "1592408419",
    DE: "1592408419"
  },

  "4-hour-workweek": {
    IN: "https://www.amazon.in/dp/0307465357",
    US: "https://www.amazon.com/dp/0307465357",
    CA: "https://www.amazon.ca/dp/0307465357",
    GB: "0307465357",
    DE: "0307465357"
  },

  "almanack-naval-ravikant": {
    IN: "https://www.amazon.in/dp/1544514212",
    US: "https://www.amazon.com/dp/1544514212",
    CA: "https://www.amazon.ca/dp/1544514212",
    GB: "1544514212",
    DE: "1544514212"
  },

  "educated": {
    IN: "https://www.amazon.in/dp/0399590501",
    US: "https://www.amazon.com/dp/0399590501",
    CA: "https://www.amazon.ca/dp/0399590501",
    GB: "0399590501",
    DE: "0399590501"
  },

  "midnight-library": {
    IN: "https://www.amazon.in/dp/0525559477",
    US: "https://www.amazon.com/dp/0525559477",
    CA: "https://www.amazon.ca/dp/0525559477",
    GB: "0525559477",
    DE: "0525559477"
  },

  "steve-jobs": {
    IN: "https://www.amazon.in/dp/1451648537",
    US: "https://www.amazon.com/dp/1451648537",
    CA: "https://www.amazon.ca/dp/1451648537",
    GB: "1451648537",
    DE: "1451648537"
  },

  "fiber-fueled": {
    IN: "https://www.amazon.in/dp/059308456X",
    US: "https://www.amazon.com/dp/059308456X",
    CA: "https://www.amazon.ca/dp/059308456X",
    GB: "059308456X",
    DE: "059308456X"
  },

  "outliers": {
    IN: "https://www.amazon.in/dp/0316017930",
    US: "https://www.amazon.com/dp/0316017930",
    CA: "https://www.amazon.ca/dp/0316017930",
    GB: "0316017930",
    DE: "0316017930"
  },

  "power-of-now": {
    IN: "https://www.amazon.in/dp/1577314808",
    US: "https://www.amazon.com/dp/1577314808",
    CA: "https://www.amazon.ca/dp/1577314808",
    GB: "1577314808",
    DE: "1577314808"
  },

  "blue-zones": {
    IN: "https://www.amazon.in/dp/1426202741",
    US: "https://www.amazon.com/dp/1426202741",
    CA: "https://www.amazon.ca/dp/1426202741",
    GB: "1426202741",
    DE: "1426202741"
  },

  "intelligent-investor": {
    IN: "https://www.amazon.in/dp/0060555661",
    US: "https://www.amazon.com/dp/0060555661",
    CA: "https://www.amazon.ca/dp/0060555661",
    GB: "0060555661",
    DE: "0060555661"
  },

  "sapiens": {
    IN: "https://www.amazon.in/dp/0062316095",
    US: "https://www.amazon.com/dp/0062316095",
    CA: "https://www.amazon.ca/dp/0062316095",
    GB: "0062316095",
    DE: "0062316095"
  },

  "thinking-fast-and-slow": {
    IN: "https://www.amazon.in/dp/3443950698",
    US: "https://www.amazon.com/dp/0374533555",
    CA: "https://www.amazon.ca/dp/0374533555",
    GB: "0141033576",
    DE: "0374533555"
  }

};
