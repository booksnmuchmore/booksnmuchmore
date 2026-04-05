// ============================================================
//  Books 'n' Much More — Site Data
//
//  HOW TO UPDATE FOR A NEW EPISODE:
//  1. Add a new object at the TOP of the EPISODES array
//  2. Set isLatest: true on it, isLatest: false on the previous one
//  3. Update SITE.latestYoutubeUrl to the new episode's YouTube link
//  4. That's it — hero, stats, stories grid, book stack all update automatically
// ============================================================

const SITE = {
  name: "Books 'n' Much More",
  youtubeChannel: "https://www.youtube.com/@booksnmuchmore",
  latestYoutubeUrl: "https://youtu.be/4ntDHAp0OyM",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdxClppjbZTm6JWkDKqYiPv9Cg3CKvKo-3FcDwGm9bIJLjXUA/viewform?usp=publish-editor",
  logoUrl: "https://raw.githubusercontent.com/booksnmuchmore/booksnmuchmore/main/logo.webp",
  rawBase: "https://raw.githubusercontent.com/booksnmuchmore/booksnmuchmore/main"
};

// Most recent episode FIRST — homepage always shows top 3
const EPISODES = [
  {
    num: 6,
    slug: "ep6",
    title: "Success in a Distracted World — Deep Work",
    titleHindi: "सफलता चाहिए तो Deep Work करना सीख जाओ",
    desc: "अर्जुन रात के 11 बजे तक काम करता था — मीटिंग्स, ईमेल्स, मैसेजेस। फिर भी दिन के अंत में लगता था, कुछ हुआ ही नहीं। जब तक उसे नहीं मिली Cal Newport की Deep Work की सीख।",
    lesson: "💡 \"बिजी होना और प्रोडक्टिव होना एक नहीं है — सही काम, सही तरीके से करना असली सफलता है।\"",
    thumb: "ep6.webp",
    thumbBg: "linear-gradient(135deg,#0a0a0a,#1a1a1a)",
    duration: "~8 min",
    week: "This Week",
    youtubeUrl: "https://youtu.be/4ntDHAp0OyM",
    isLatest: true
  },
  {
    num: 5,
    slug: "ep5",
    title: "Talent is Not Everything… Hard Work Beats Talent Every Time",
    titleHindi: "टैलेंट काफी नहीं है",
    desc: "रेलवे कॉलोनी की पीली रोशनी में टूटे बल्ले से अभ्यास करने वाला एक लड़का — जिसे सबने कहा \"इसमें कुछ नहीं है।\" लेकिन उसकी मेहनत ने एक दिन पूरी दुनिया को चौंका दिया।",
    lesson: "💡 \"टैलेंट आपको शुरुआत देता है, मेहनत आपको पहचान दिलाती है।\"",
    thumb: "ep5.webp",
    thumbBg: "linear-gradient(135deg,#1a0a00,#3d1a00)",
    duration: "~9 min",
    week: "Week 5",
    youtubeUrl: "https://www.youtube.com/watch?v=uD9SxI19GLQ",
    isLatest: false
  },
  {
    num: 4,
    slug: "ep4",
    title: "\"सही क्या है?\" — धर्म की जटिलता",
    titleHindi: "सही क्या है?",
    desc: "अर्जुन एक ईमानदार इंसान था — पर एक दिन उसे एक ऐसे फैसले का सामना करना पड़ा जहाँ सच और झूठ की लकीर धुंधली थी। क्या हमेशा सच बोलना ही धर्म है?",
    lesson: "💡 \"धर्म हमेशा काला या सफेद नहीं होता — सही इरादा + सही निर्णय + सही संतुलन ही असली धर्म है।\"",
    thumb: "ep4.webp",
    thumbBg: "linear-gradient(135deg,#1a3a5c,#0d1f33)",
    duration: "~8 min",
    week: "Week 4",
    youtubeUrl: "https://www.youtube.com/watch?v=MKEMfrzPwIo&t=26s",
    isLatest: false
  },
  {
    num: 3,
    slug: "ep3",
    title: "\"Woh Ek Kadam\" — वो एक कदम",
    titleHindi: "Woh Ek Kadam",
    desc: "आयुष के पास था एक पुराना घिसा camera और बड़े सपने। हर rejection के बाद वो टूटता गया। फिर एक बारिश की सुबह एक बुज़ुर्ग औरत की चुप्पी ने सब कुछ बदल दिया।",
    lesson: "💡 \"आपको पूरी सीढ़ी एक साथ नहीं चढ़नी — बस वो एक कदम उठाइए, बाकी रास्ता खुद बन जाता है।\"",
    thumb: "ep3.webp",
    thumbBg: "linear-gradient(135deg,#5A2008,#2C0E04)",
    duration: "~7 min",
    week: "Week 3",
    youtubeUrl: "https://youtu.be/Hid4iBiUNSg?si=MxizJMcM42XJbJ_L",
    isLatest: false
  },
  {
    num: 2,
    slug: "ep2",
    title: "ज़िंदगी का जार",
    titleHindi: "ज़िंदगी का जार",
    desc: "",
    lesson: "",
    thumb: "ep2.webp",
    thumbBg: "linear-gradient(135deg,#2a1a00,#5c3a00)",
    duration: "~7 min",
    week: "Week 2",
    youtubeUrl: "",
    isLatest: false
  },
  {
    num: 1,
    slug: "ep1",
    title: "Episode 01",
    titleHindi: "Episode 01",
    desc: "",
    lesson: "",
    thumb: "ep1.webp",
    thumbBg: "linear-gradient(135deg,#1a2a1a,#0d1f0d)",
    duration: "~7 min",
    week: "Week 1",
    youtubeUrl: "",
    isLatest: false
  }
];

// Books shown in the homepage promo strip
const PROMO_BOOKS = [
  { title: "Think and Grow Rich", author: "Napoleon Hill",    cover: "https://m.media-amazon.com/images/I/71UypkUjStL._SY466_.jpg" },
  { title: "Atomic Habits",       author: "James Clear",      cover: "https://m.media-amazon.com/images/I/81wgcld4wxL._SY466_.jpg" },
  { title: "Rich Dad Poor Dad",   author: "Robert Kiyosaki",  cover: "https://m.media-amazon.com/images/I/81bsw6fnUiL._SY466_.jpg" },
  { title: "The Alchemist",       author: "Paulo Coelho",     cover: "https://m.media-amazon.com/images/I/71aFt4+OTOL._SY466_.jpg" },
  { title: "Ikigai",              author: "García & Miralles", cover: "https://m.media-amazon.com/images/I/81l3rZK4lnL._SY466_.jpg" }
];

// Lessons preview cards on homepage
const HOMEPAGE_LESSONS = [
  {
    slug: "think-and-grow-rich",
    genre: "Mindset · Finance",
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    cover: "https://m.media-amazon.com/images/I/71UypkUjStL._SY466_.jpg",
    desc: "इच्छाशक्ति, विश्वास और दृढ़ संकल्प से सफलता कैसे पाएं — 1937 का यह क्लासिक आज भी उतना ही प्रासंगिक है।",
    count: "✦ 10 Lessons · Hindi + English",
    live: true,
    featured: true
  },
  {
    slug: "atomic-habits",
    genre: "Habits · Productivity",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://m.media-amazon.com/images/I/81wgcld4wxL._SY466_.jpg",
    desc: "छोटी आदतें, बड़े बदलाव — 1% बेहतर बनने की कला और compound growth का रहस्य।",
    count: "✦ 10 Lessons · Hindi + English",
    live: true,
    featured: false
  },
  {
    slug: "the-alchemist",
    genre: "Philosophy · Inspiration",
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "https://m.media-amazon.com/images/I/71aFt4+OTOL._SY466_.jpg",
    desc: "अपनी Personal Legend की खोज — एक ऐसा सफर जो हर सपने देखने वाले का दिल छू लेता है।",
    count: "✦ 10 Lessons · Hindi + English",
    live: true,
    featured: false
  },
  {
    slug: "rich-dad-poor-dad",
    genre: "Finance · Mindset",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    cover: "https://m.media-amazon.com/images/I/81BE7eeKzAL._SY466_.jpg",
    desc: "पैसा कमाना और पैसा काम करवाना — दो अलग-अलग सोच। अमीर लोग बच्चों को जो सिखाते हैं, वो school नहीं सिखाता।",
    count: "✦ 10 Lessons · Hindi + English",
    live: true,
    featured: false
  },
  {
    slug: "deep-work",
    genre: "Productivity · Focus",
    title: "Deep Work",
    author: "Cal Newport",
    cover: "https://covers.openlibrary.org/b/isbn/9780349411903-L.jpg",
    desc: "बिजी रहना और productive होना एक नहीं है — Deep Work वो कला है जो आपको भीड़ से अलग करती है और सफलता की राह खोलती है।",
    count: "✦ 10 Lessons · Hindi + English",
    live: true,
    featured: false
  }
];
