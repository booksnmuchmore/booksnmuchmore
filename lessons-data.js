// ============================================================
//  Books 'n' Much More — Lessons Data
//  To add a new book: copy a book object, fill in the fields,
//  set live: true when ready, live: false for "Coming Soon"
// ============================================================

const BOOKS_DATA = {

  "think-and-grow-rich": {
    live: true,
    slug: "think-and-grow-rich",
    title: "Think and Grow Rich",
    titleHtml: "Think and <em>Grow Rich</em>",
    author: "Napoleon Hill",
    genre: "Mindset · Finance",
    rating: "★★★★★",
    cover: "https://m.media-amazon.com/images/I/71UypkUjStL._SY466_.jpg",
    heroDesc: "First published in 1937, this timeless classic has transformed millions of lives worldwide. Here are the 10 most powerful lessons that can change the way you think, act, and succeed.",
    //amazon: {
    //  IN: "https://www.amazon.in/dp/1585424331",
    //  US: "https://www.amazon.com/dp/1585424331",
    //  CA: "https://www.amazon.ca/dp/1585424331"
   // },
    lessons: [
      {
        title: "The Power of Desire",
        en: "Every great achievement begins with a burning desire — not a wish, not a hope, but an obsessive, white-hot want. Hill argues that desire is the starting point of all riches, and without it no goal can be reached. You must know exactly what you want and want it with everything you have.",
        hi: "हर बड़ी सफलता की शुरुआत एक तीव्र इच्छा से होती है — सिर्फ एक कामना नहीं, बल्कि एक जुनून। Hill कहते हैं कि desire ही सभी धन का पहला कदम है। आपको पता होना चाहिए कि आप क्या चाहते हैं — और उसे पाने की आग दिल में जलती रहनी चाहिए।",
        quote: '"The starting point of all achievement is desire." — Napoleon Hill'
      },
      {
        title: "Faith — Believing Before Seeing",
        en: "Faith is the head chemist of the mind. You must believe you will succeed before any evidence of success appears. Visualise your goals as already achieved and act with the confidence that the universe will conspire to help you. Doubt is the enemy of achievement.",
        hi: "विश्वास मन का सबसे शक्तिशाली हथियार है। सफलता का कोई सबूत आने से पहले ही आपको यकीन होना चाहिए कि आप सफल होंगे। अपने लक्ष्य को पहले से पूरा हुआ मानकर चलें — संदेह आपका सबसे बड़ा दुश्मन है।",
        quote: '"Whatever the mind can conceive and believe, it can achieve." — Napoleon Hill'
      },
      {
        title: "Auto-suggestion — Programme Your Subconscious",
        en: "Your subconscious mind does not distinguish between what is real and what is repeatedly imagined. Feed it positive, goal-oriented thoughts every single day through affirmations and visualisation. What you consistently tell yourself eventually becomes your reality.",
        hi: "आपका अवचेतन मन वास्तविकता और कल्पना में फ़र्क नहीं कर सकता। रोज़ाना सकारात्मक affirmations और visualization से उसे program करें। आप खुद से जो बार-बार कहते हैं, वही एक दिन आपकी सच्चाई बन जाती है।",
        quote: '"Your subconscious mind works continuously, while you are awake, and while you sleep." — Napoleon Hill'
      },
      {
        title: "Specialised Knowledge Over General Knowledge",
        en: "General knowledge is of little value on the path to success. What matters is specialised, organised knowledge applied toward a definite purpose. You don't need to know everything — you need to master one thing deeply and know where to find the rest.",
        hi: "सामान्य ज्ञान अकेले काम का नहीं। असली शक्ति है — किसी एक क्षेत्र में गहरी विशेषज्ञता। आपको सब कुछ जानने की ज़रूरत नहीं — बस एक चीज़ में माहिर बनें और बाकी को खोजना सीखें।",
        quote: '"Knowledge is only potential power. It becomes power only when organised into definite plans." — Napoleon Hill'
      },
      {
        title: "The Mastermind Principle",
        en: "No one achieves great success alone. Surround yourself with a group of driven, like-minded people — a mastermind alliance — and harness the collective intelligence and experience of the group. The whole is exponentially greater than the sum of its parts.",
        hi: "कोई भी बड़ी सफलता अकेले नहीं मिलती। अपने आस-पास ऐसे लोगों का एक समूह बनाएं जो आपके जैसे सोचते हों। मिलकर काम करने से जो शक्ति बनती है, वो अकेले कभी नहीं मिल सकती।",
        quote: '"No two minds ever come together without thereby creating a third, invisible, intangible force." — Napoleon Hill'
      },
      {
        title: "Decision — The Cure for Procrastination",
        en: "Analysis of over 25,000 people showed that lack of decision was a near-universal cause of failure. Successful people make decisions quickly and change them slowly. Unsuccessful people make decisions slowly and change them quickly. Decide and commit — then adjust on the way.",
        hi: "25,000 से ज़्यादा लोगों के अध्ययन में पाया गया कि failure का सबसे बड़ा कारण है — निर्णय न ले पाना। सफल लोग जल्दी फ़ैसला करते हैं और उसे लंबे समय तक निभाते हैं। अनिर्णय आपको आगे नहीं बढ़ने देता।",
        quote: '"Successful people make decisions quickly and change them slowly." — Napoleon Hill'
      },
      {
        title: "Persistence — The Iron Will",
        en: "Persistence is to character what carbon is to steel. Most people give up at the first sign of failure. But every defeat carries the seed of an equivalent success — if you persist long enough. The path to success is paved with repeated failures that most never push through.",
        hi: "Persistence वो गुण है जो लोहे को स्टील बनाता है। ज़्यादातर लोग पहली असफलता पर हार मान लेते हैं। लेकिन हर हार में एक बराबर की जीत का बीज छुपा होता है — बशर्ते आप डटे रहें।",
        quote: '"Every adversity carries with it the seed of an equivalent or greater benefit." — Napoleon Hill'
      },
      {
        title: "The Subconscious Mind — Your Silent Partner",
        en: "You cannot entirely control your subconscious mind, but you can feed it the plans and desires you wish it to act upon. Fill it with positive emotions — faith, love, desire, enthusiasm — and keep fear, jealousy, and hatred away. Your subconscious will work for you or against you depending entirely on what you feed it.",
        hi: "आप अपने अवचेतन मन को पूरी तरह नियंत्रित नहीं कर सकते, लेकिन उसे सही सामग्री दे सकते हैं। उसे विश्वास, प्रेम, उत्साह जैसी सकारात्मक भावनाओं से भरें — डर और ईर्ष्या इसे नकारात्मक बना देते हैं।",
        quote: '"The subconscious mind will not remain idle. Feed it positive thoughts or it will feed on negative ones." — Napoleon Hill'
      },
      {
        title: "The Brain — A Broadcasting Station",
        en: "When charged with strong emotion and desire, your mind broadcasts at a higher frequency — attracting ideas, people, and opportunities aligned with your dominant thoughts. Be intentional about what thoughts you broadcast into the world and what you allow in.",
        hi: "जब आपके विचार तीव्र भावनाओं से भरे होते हैं, तो वो उन्हीं जैसे लोगों और अवसरों को आकर्षित करते हैं। आप जो सोचते हैं, वही आप बनते हैं — इसलिए अपने विचारों का चुनाव सोच-समझकर करें।",
        quote: '"The brain is both a broadcasting and a receiving station for thought vibrations." — Napoleon Hill'
      },
      {
        title: "The Sixth Sense — Infinite Intelligence",
        en: "The final and most powerful principle is the development of your sixth sense — a creative imagination that connects you to infinite intelligence. It's that gut feeling, that sudden flash of insight, that whisper telling you what to do next. It develops only through years of applying all the previous nine principles.",
        hi: "यह Hill की सबसे गहरी शिक्षा है — एक ऐसी छठी इंद्रिय जो आपको अनंत ज्ञान से जोड़ती है। यह वो अंदरूनी आवाज़ है जो बताती है कि अगला कदम क्या होना चाहिए। यह तब विकसित होती है जब आप बाकी नौ सिद्धांतों को जीने लगते हैं।",
        quote: '"The sixth sense is that portion of the subconscious mind referred to as the creative imagination." — Napoleon Hill'
      }
    ]
  },

  "atomic-habits": {
    live: true,
    slug: "atomic-habits",
    title: "Atomic Habits",
    titleHtml: "Atomic <em>Habits</em>",
    author: "James Clear",
    genre: "Habits · Productivity",
    rating: "★★★★★",
    cover: "https://m.media-amazon.com/images/I/81wgcld4wxL._SY466_.jpg",
    heroDesc: "James Clear's Atomic Habits is the definitive guide to building good habits and breaking bad ones. Rooted in science and packed with practical strategies, here are the 10 lessons that will rewire the way you think about change.",
    //amazon: {
    //  IN: "https://www.amazon.in/dp/1847941834",
    // US: "https://www.amazon.com/dp/0735211299",
    // CA: "https://www.amazon.ca/dp/0735211299"
  //  },
    lessons: [
      {
        title: "1% Better Every Day — The Power of Tiny Gains",
        en: "Improving by just 1% each day doesn't feel significant. But compounded over a year, you end up 37 times better. Conversely, getting 1% worse each day leads to near zero. Small habits are not trivial — they are the building blocks of remarkable results.",
        hi: "रोज़ाना सिर्फ 1% बेहतर होना बड़ा नहीं लगता। लेकिन एक साल में यह compound होकर 37 गुना बेहतरी बन जाता है। छोटी आदतें तुच्छ नहीं होतीं — वे बड़े नतीजों की नींव होती हैं।",
        quote: '"You do not rise to the level of your goals. You fall to the level of your systems." — James Clear'
      },
      {
        title: "Forget Goals — Focus on Systems",
        en: "Goals tell you where you want to go; systems determine whether you actually get there. Winners and losers often share the same goals — what separates them is the system they follow daily. Fix the process, and the results take care of themselves.",
        hi: "लक्ष्य बताते हैं कि आप कहाँ जाना चाहते हैं; systems तय करती हैं कि आप वहाँ पहुँचेंगे या नहीं। जीतने और हारने वाले अक्सर एक जैसे goals रखते हैं — फ़र्क उनकी रोज़ की प्रक्रिया में होता है।",
        quote: '"Every action you take is a vote for the type of person you wish to become." — James Clear'
      },
      {
        title: "Identity-Based Habits — Become Before You Do",
        en: "The most powerful habit change comes when you shift your identity, not just your actions. Instead of saying 'I want to run a marathon', say 'I am a runner.' Each habit you follow is a vote cast for the kind of person you believe yourself to be.",
        hi: "सबसे शक्तिशाली बदलाव तब आता है जब आप अपनी पहचान बदलते हैं, सिर्फ अपने काम नहीं। 'मुझे दौड़ना है' की जगह कहें — 'मैं एक runner हूँ।' हर अच्छी आदत उस इंसान के लिए एक वोट है जो आप बनना चाहते हैं।",
        quote: '"The goal is not to read a book, the goal is to become a reader." — James Clear'
      },
      {
        title: "The Four Laws of Behaviour Change",
        en: "Every habit follows a loop: Cue → Craving → Response → Reward. To build a good habit, make the cue obvious, the craving attractive, the response easy, and the reward satisfying. To break a bad habit, invert each law — make it invisible, unattractive, difficult, and unsatisfying.",
        hi: "हर आदत एक loop है: Cue → Craving → Response → Reward। अच्छी आदत बनाने के लिए: cue को obvious, craving को attractive, response को easy और reward को satisfying बनाएं। बुरी आदत तोड़ने के लिए इन्हें उलट दें।",
        quote: '"Make it obvious. Make it attractive. Make it easy. Make it satisfying." — James Clear'
      },
      {
        title: "Implementation Intention — When and Where",
        en: "Vague intentions fail. 'I will exercise more' rarely works. Instead, decide in advance: 'I will exercise at 7 AM in my living room on Monday, Wednesday, and Friday.' Specifying when and where dramatically increases the chance you follow through.",
        hi: "अस्पष्ट इरादे काम नहीं करते। 'मैं ज़्यादा exercise करूँगा' शायद ही काम आए। इसकी बजाय तय करें: 'मैं सोमवार, बुधवार और शुक्रवार को सुबह 7 बजे अपने कमरे में exercise करूँगा।' कब और कहाँ तय करने से follow-through बहुत बढ़ जाता है।",
        quote: '"When situation X arises, I will perform response Y." — James Clear'
      },
      {
        title: "Habit Stacking — Piggyback on What Already Exists",
        en: "Link a new habit to an existing one using the formula: 'After I [current habit], I will [new habit].' Your existing habits are anchors. Stack new behaviours on top of them and you leverage the momentum that already exists in your daily routine.",
        hi: "एक नई आदत को पुरानी आदत से जोड़ें: 'जब मैं [current habit] करूँ, तभी मैं [new habit] करूँगा।' आपकी मौजूदा आदतें anchors हैं। नई आदतें उन पर stack करें और अपनी daily routine की शक्ति का फ़ायदा उठाएं।",
        quote: '"Habits are the compound interest of self-improvement." — James Clear'
      },
      {
        title: "Environment Design — Make the Right Choice the Easy Choice",
        en: "Motivation is overrated. Environment often matters more. Want to eat healthier? Put fruit on the counter, not in the fridge. Want to read more? Place the book on your pillow. Design your physical space so that good habits require less friction and bad habits require more.",
        hi: "Motivation से ज़्यादा ज़रूरी है माहौल। अच्छा खाना चाहते हैं? फल काउंटर पर रखें, फ्रिज में नहीं। ज़्यादा पढ़ना चाहते हैं? किताब तकिए पर रखें। अपना माहौल ऐसे design करें कि अच्छी आदतों में friction कम हो और बुरी में ज़्यादा।",
        quote: '"You don\'t have to be the victim of your environment. You can also be the architect of it." — James Clear'
      },
      {
        title: "The Two-Minute Rule — Never Miss Twice",
        en: "When starting a new habit, it should take less than two minutes to do. 'Read before bed each night' becomes 'read one page.' This scales down the habit until it's easy enough to start. And if you miss a day, never miss twice — one slip is an accident, two is a new pattern.",
        hi: "नई आदत शुरू करते समय उसे 2 मिनट से कम का काम बनाएं। 'रात को पढ़ना' को 'एक पेज पढ़ना' बना दें। और अगर एक दिन छूट जाए तो कभी दो दिन न छोड़ें — एक बार गलती होती है, दो बार नई आदत बनने लगती है।",
        quote: '"A habit must be established before it can be improved." — James Clear'
      },
      {
        title: "Immediate Rewards — Make It Satisfying Now",
        en: "The brain values immediate rewards far more than delayed ones. Good habits often have delayed payoffs and immediate costs — which makes them hard to stick with. Add an immediate reward to your habit — something that feels good right now — to reinforce the behaviour in the short term.",
        hi: "दिमाग तुरंत मिलने वाले इनाम को ज़्यादा तरजीह देता है। अच्छी आदतों का फल देर से मिलता है — इसीलिए वे छूट जाती हैं। हर अच्छी आदत के बाद खुद को तुरंत कुछ अच्छा दें — इससे brain उस आदत को reinforce करता है।",
        quote: '"The Cardinal Rule of Behaviour Change: What is immediately rewarded is repeated." — James Clear'
      },
      {
        title: "The Plateau of Latent Potential — Trust the Process",
        en: "Results are often delayed. You put in weeks of effort and see nothing — then suddenly, everything clicks. Clear calls this the Plateau of Latent Potential. The work was never wasted; it was stored. Keep going past the point where most people quit, and breakthroughs become inevitable.",
        hi: "नतीजे अक्सर देर से आते हैं। हफ्तों मेहनत करने के बाद कुछ नहीं दिखता — फिर अचानक सब कुछ बदल जाता है। Clear इसे Plateau of Latent Potential कहते हैं। मेहनत बेकार नहीं गई — वो जमा हो रही थी। जहाँ लोग छोड़ देते हैं, वहाँ से आगे जाएं।",
        quote: '"Be patient. The most powerful outcomes are delayed." — James Clear'
      }
    ]
  },

  "the-alchemist": {
    live: true,
    slug: "the-alchemist",
    title: "The Alchemist",
    titleHtml: "The <em>Alchemist</em>",
    author: "Paulo Coelho",
    genre: "Philosophy · Inspiration",
    rating: "★★★★★",
    cover: "https://m.media-amazon.com/images/I/71aFt4+OTOL._SY466_.jpg",
    heroDesc: "Paulo Coelho's masterpiece has sold over 65 million copies worldwide. A short novel with a timeless soul — here are the 10 lessons from The Alchemist that will make you look at your own journey differently.",
   // amazon: {
   //   IN: "https://www.amazon.in/dp/0062315005",
   //   US: "https://www.amazon.com/dp/0062315005",
   //   CA: "https://www.amazon.ca/dp/0062315005"
   // },
    lessons: [
      {
        title: "Follow Your Personal Legend",
        en: "Every person on earth has a Personal Legend — a dream or purpose that is uniquely theirs. The Alchemist's central message is simple: follow it. Not tomorrow, not when conditions are perfect, but now. The universe conspires to help those who pursue what they truly want.",
        hi: "हर इंसान की एक Personal Legend होती है — एक सपना, एक उद्देश्य जो सिर्फ उसका है। The Alchemist का मूल संदेश यही है: उसका पीछा करो। कल नहीं, जब हालात सही हों तब नहीं — अभी। जो सच में चाहते हैं उसे पाने में ब्रह्मांड भी मदद करता है।",
        quote: '"And, when you want something, all the universe conspires in helping you to achieve it." — Paulo Coelho'
      },
      {
        title: "The Language of the World — Signs Are Everywhere",
        en: "The world speaks to us constantly through signs, coincidences, and feelings. Santiago learns to read the omens the world gives him — a hawk's flight, a stranger's words, a sudden feeling. The Soul of the World is communicating. The question is whether we are paying attention.",
        hi: "दुनिया हमसे हर पल बात करती है — संकेतों, संयोगों और भावनाओं के ज़रिए। Santiago सीखता है कि दुनिया के ये इशारे कैसे पढ़ें। Soul of the World हमेशा बोलती है — सवाल यह है कि क्या हम सुन रहे हैं।",
        quote: '"The secret of life is to fall seven times and to get up eight times." — Paulo Coelho'
      },
      {
        title: "Maktub — It Is Written",
        en: "The word Maktub, meaning 'it is written', reflects the belief that our lives have a path meant for us. But this is not passive fatalism — it is trust. Trust that the things happening to you are preparing you for something greater. Every detour is part of the route.",
        hi: "Maktub का अर्थ है 'यह लिखा हुआ है।' यह दर्शन बताता है कि हमारी ज़िंदगी का एक रास्ता पहले से तय है। लेकिन यह हार नहीं है — यह भरोसा है। भरोसा कि जो हो रहा है, वो आपको किसी बड़ी चीज़ के लिए तैयार कर रहा है।",
        quote: '"Maktub," the merchant said, finally. "It is written." — Paulo Coelho'
      },
      {
        title: "The Fear of Failure Is Worse Than Failure Itself",
        en: "Santiago faces many moments of fear — fear of losing what he has, fear of the unknown, fear of failure. Coelho shows that the fear of suffering is always worse than the actual suffering. Most people never begin their journey because the imagined risk feels greater than the real one.",
        hi: "Santiago कई बार डरता है — जो है उसे खोने का डर, अनजान रास्ते का डर, असफलता का डर। Coelho दिखाते हैं कि दर्द का डर हमेशा असली दर्द से बड़ा होता है। ज़्यादातर लोग अपना सफर शुरू ही नहीं करते क्योंकि काल्पनिक ख़तरा असली से बड़ा लगता है।",
        quote: '"Tell your heart that the fear of suffering is worse than the suffering itself." — Paulo Coelho'
      },
      {
        title: "The Present Moment Is the Only Treasure",
        en: "Through his long journey, Santiago learns that the present moment is where life actually happens. Regret lives in the past; anxiety lives in the future. The alchemist teaches him to be fully present — in each conversation, each desert step, each sunrise. Presence is the real gold.",
        hi: "अपने लंबे सफर में Santiago सीखता है कि ज़िंदगी सिर्फ इसी पल में होती है। अफ़सोस अतीत में रहता है, चिंता भविष्य में। Alchemist उसे सिखाता है — हर बातचीत में, हर कदम में, हर सूरज में पूरी तरह मौजूद रहो। उपस्थिति ही असली सोना है।",
        quote: '"One is loved because one is loved. No reason is needed for loving." — Paulo Coelho'
      },
      {
        title: "Everything Is One — The Soul of the World",
        en: "The Alchemist teaches the concept of the Soul of the World — a universal force that connects all living things. When Santiago learns to speak the language of the world, he realises that the wind, the desert, the sun, and his heart are all part of the same consciousness. We are never truly alone.",
        hi: "Alchemist Soul of the World की अवधारणा सिखाता है — एक ऐसी शक्ति जो हर जीवित चीज़ को जोड़ती है। जब Santiago दुनिया की भाषा समझने लगता है, तो उसे एहसास होता है कि हवा, रेगिस्तान, सूरज और उसका दिल एक ही चेतना के हिस्से हैं। हम कभी अकेले नहीं होते।",
        quote: '"I am the wind, the desert, the sea. I am the Soul of the World." — Paulo Coelho'
      },
      {
        title: "Love Does Not Stop You — It Frees You",
        en: "Santiago falls in love with Fatima in the desert and fears love will hold him back from his dream. But true love, Coelho shows, does not chain you — it gives you courage. Love that is real wants you to be fully alive, even if that means letting you go and trusting you will return.",
        hi: "Santiago को रेगिस्तान में Fatima से प्यार होता है और वो डरता है कि प्यार उसे रोक देगा। लेकिन Coelho दिखाते हैं कि सच्चा प्यार जंजीर नहीं — वो साहस देता है। सच्चा प्यार चाहता है कि आप पूरी तरह जीएं, चाहे इसके लिए आपको जाने देना पड़े।",
        quote: '"If what one finds is made of pure matter, it will never spoil. And one can always come back." — Paulo Coelho'
      },
      {
        title: "The Treasure Was Always Within",
        en: "After crossing deserts, oceans, and wars, Santiago discovers that the treasure he sought was back where he began. The journey was never wasted — it was necessary. You cannot discover what is within you without first going out into the world. The destination is the person you become on the way.",
        hi: "रेगिस्तान, समुद्र और युद्ध पार करने के बाद Santiago पाता है कि खज़ाना वहीं था जहाँ से उसने शुरुआत की थी। सफर बेकार नहीं था — वो ज़रूरी था। जब तक आप बाहर नहीं जाते, भीतर को नहीं खोज सकते। मंज़िल वो इंसान है जो आप रास्ते में बनते हैं।",
        quote: '"The treasure is found wherever the person is standing." — Paulo Coelho'
      },
      {
        title: "Beginners' Luck — The Universe Tests Your Commitment",
        en: "At the beginning of any dream, things often go well. This is what Coelho calls beginner's luck — the universe's way of showing you the dream is possible. But then comes the real test. Obstacles appear to check whether you are truly committed, or merely entertained by the idea.",
        hi: "किसी भी सपने की शुरुआत में चीज़ें अक्सर अच्छी जाती हैं। Coelho इसे beginner's luck कहते हैं — ब्रह्मांड का तरीका यह दिखाने का कि सपना मुमकिन है। फिर असली परीक्षा आती है। रुकावटें यह जाँचने आती हैं कि आप सच में committed हैं या सिर्फ कल्पना में मज़ा ले रहे थे।",
        quote: '"When you play cards the first time, you are almost sure to win. Beginner\'s luck." — Paulo Coelho'
      },
      {
        title: "To Realise One's Destiny Is a Person's Only Obligation",
        en: "Coelho's final and most enduring lesson: you have one true obligation in this life — to live out your Personal Legend. Not your parents' dream, not society's expectation, but yours. Every soul came into this world with a purpose. The greatest tragedy is to leave without ever discovering it.",
        hi: "Coelho का अंतिम और सबसे गहरा सबक: इस जीवन में आपका एक ही सच्चा दायित्व है — अपनी Personal Legend को जीना। अपने माँ-बाप का सपना नहीं, समाज की उम्मीद नहीं — बल्कि अपना। हर आत्मा एक उद्देश्य लेकर आई है। सबसे बड़ी त्रासदी है उसे जाने बिना चले जाना।",
        quote: '"To realize one\'s Personal Legend is a person\'s only real obligation." — Paulo Coelho'
      }
    ]
  },

  "rich-dad-poor-dad": {
    live: true,
    slug: "rich-dad-poor-dad",
    title: "Rich Dad Poor Dad",
    titleHtml: "Rich Dad <em>Poor Dad</em>",
    author: "Robert Kiyosaki",
    genre: "Finance · Mindset",
    rating: "★★★★★",
    cover: "https://m.media-amazon.com/images/I/81BE7eeKzAL._SY466_.jpg",
    heroDesc: "First published in 1997, Rich Dad Poor Dad has sold over 32 million copies and remains the #1 personal finance book of all time. Through the story of two fathers, Kiyosaki shatters the myths about money that keep most people trapped — and shows a different path entirely.",
    //amazon: {
     // IN: "https://www.amazon.in/dp/1612680194",
      //US: "https://www.amazon.com/dp/1612680194",
     // CA: "https://www.amazon.ca/dp/1612680194"
    //},
    lessons: [
      {
        title: "The Rich Don't Work for Money — Money Works for Them",
        en: "The poor and middle class work for money. The rich make money work for them. Most people spend their entire lives chasing a paycheck, never pausing to ask: what if instead of me working for money, I made money work for me? This mindset shift — from employee to investor — is where financial freedom begins.",
        hi: "गरीब और मध्यम वर्ग पैसे के लिए काम करते हैं। अमीर लोग पैसे को अपने लिए काम करवाते हैं। ज़्यादातर लोग पूरी ज़िंदगी तनख्वाह के पीछे भागते हैं, यह सोचे बिना कि पैसा उनके लिए काम कर सकता है। यही सोच बदलना — नौकरी से निवेशक बनना — वित्तीय स्वतंत्रता की शुरुआत है।",
        quote: '"The poor and the middle class work for money. The rich have money work for them." — Robert Kiyosaki'
      },
      {
        title: "Financial Literacy — Know the Difference Between Asset and Liability",
        en: "The single most important financial lesson: an asset puts money into your pocket, a liability takes money out. Rich people acquire assets. Poor people acquire liabilities thinking they are assets. Your house, your car, your gadgets — most of what people call 'assets' are actually liabilities draining their wealth every month.",
        hi: "सबसे ज़रूरी वित्तीय सबक: Asset वो है जो आपकी जेब में पैसा डाले, Liability वो है जो पैसा निकाले। अमीर लोग assets खरीदते हैं। गरीब लोग liabilities खरीदते हैं और सोचते हैं कि वो assets हैं। आपका घर, गाड़ी, gadgets — जिसे लोग 'asset' कहते हैं वो अक्सर उनकी दौलत हर महीने खींच रहे होते हैं।",
        quote: '"Rich people acquire assets. The poor and middle class acquire liabilities that they think are assets." — Robert Kiyosaki'
      },
      {
        title: "Mind Your Own Business — Build Your Asset Column",
        en: "Kiyosaki's advice is blunt: keep your day job, but start building your own asset column on the side. Don't spend your life making someone else rich. Real businesses, stocks, real estate, intellectual property — these are the assets that generate income while you sleep. Your job is your income; your business is your wealth.",
        hi: "Kiyosaki की सलाह सीधी है: नौकरी करते रहो, लेकिन साथ में अपना asset column बनाओ। पूरी ज़िंदगी किसी और को अमीर मत बनाओ। Business, stocks, real estate, intellectual property — ये वो assets हैं जो सोते वक्त भी कमाते हैं। नौकरी आपकी आमदनी है; business आपकी दौलत है।",
        quote: '"Keep your daytime job, but start buying real assets, not liabilities." — Robert Kiyosaki'
      },
      {
        title: "The History of Taxes — The Rich Don't Pay the Same Way",
        en: "Taxes were originally created to tax the rich, but over time the rich learned to use corporations and legal structures to minimise what they owe. The rich earn, spend, then pay tax. Employees earn, pay tax, then spend with what's left. Understanding how the tax system works — and using it legally — is a skill the wealthy cultivate and the poor ignore.",
        hi: "Tax मूल रूप से अमीरों पर लगाने के लिए बना था, लेकिन धीरे-धीरे अमीरों ने corporations और legal structures का उपयोग करके अपना tax कम करना सीख लिया। अमीर पहले कमाते हैं, खर्च करते हैं, फिर tax देते हैं। नौकरीपेशा पहले कमाते हैं, tax देते हैं, फिर जो बचता है उससे खर्च करते हैं। Tax system को समझना एक कला है जो अमीर सीखते हैं।",
        quote: '"Corporations earn, spend, and pay taxes on what is left. Employees earn, pay taxes, and then spend." — Robert Kiyosaki'
      },
      {
        title: "The Rich Invent Money — Overcome the Fear of Losing",
        en: "The greatest obstacle to wealth is not lack of money — it is fear and self-doubt. Most people play it safe, keep their money in a savings account, and never invest because they are terrified of losing. But Kiyosaki argues that real financial intelligence is the ability to create money out of opportunities that others cannot see because fear blinds them.",
        hi: "दौलत की राह में सबसे बड़ी रुकावट पैसे की कमी नहीं — डर और आत्म-संदेह है। ज़्यादातर लोग safe खेलते हैं, savings account में पैसा रखते हैं, और नुकसान के डर से कभी invest नहीं करते। लेकिन Kiyosaki कहते हैं कि असली financial intelligence उन अवसरों से पैसा बनाने की क्षमता है जो डर की वजह से दूसरों को दिखते ही नहीं।",
        quote: '"It\'s not how much money you make, but how much money you keep, how hard it works for you." — Robert Kiyosaki'
      },
      {
        title: "Work to Learn — Not Just to Earn",
        en: "Kiyosaki recommends taking jobs not just for the salary but for the skills they teach. Sales, marketing, accounting, investing, communication — these are the skills that build wealth. Most people specialise in one skill and feel secure, but that security is fragile. The rich are generalists who can see the whole financial picture.",
        hi: "Kiyosaki सलाह देते हैं कि नौकरी सिर्फ तनख्वाह के लिए नहीं, बल्कि सीखने के लिए करो। Sales, marketing, accounting, investing, communication — ये वो skills हैं जो दौलत बनाती हैं। ज़्यादातर लोग एक skill में माहिर होकर safe महसूस करते हैं, लेकिन वो सुरक्षा नाजुक है। अमीर लोग पूरी financial तस्वीर देख सकते हैं।",
        quote: '"Job is an acronym for Just Over Broke." — Robert Kiyosaki'
      },
      {
        title: "Overcome Obstacles — The Five Roadblocks to Financial Freedom",
        en: "Even financially literate people fail to build wealth because of five roadblocks: fear of losing money, cynicism about what others will think, laziness disguised as busyness, bad habits of paying everyone else before yourself, and arrogance — thinking what you don't know doesn't matter. Recognising these in yourself is half the battle.",
        hi: "वित्तीय रूप से समझदार लोग भी इन पाँच रुकावटों से दौलत नहीं बना पाते: पैसा खोने का डर, दूसरों की राय की चिंता, व्यस्तता की आड़ में आलस्य, पहले खुद को नहीं दूसरों को भुगतान करने की आदत, और घमंड — यह सोचना कि जो नहीं जानते वो मायने नहीं रखता। इन्हें खुद में पहचानना आधी जीत है।",
        quote: '"The primary difference between a rich person and a poor person is how they manage fear." — Robert Kiyosaki'
      },
      {
        title: "Pay Yourself First — The Golden Rule of Personal Finance",
        en: "Before paying your bills, before paying anyone else, pay yourself first — put money into your asset column. Most people pay everyone else first and save what's left, which is usually nothing. The pressure of not having enough forces you to find new income. It builds discipline, resourcefulness, and the habit of wealth.",
        hi: "बिल भरने से पहले, किसी और को देने से पहले — पहले खुद को दो। अपने asset column में पैसा डालो। ज़्यादातर लोग पहले सबको देते हैं और जो बचता है उसे बचाते हैं — जो अक्सर कुछ नहीं होता। खुद के लिए पैसे न होने का दबाव आपको नई आमदनी खोजने पर मजबूर करता है। यही अनुशासन और दौलत की आदत बनाता है।",
        quote: '"Pay yourself first. Invest in your education and your assets before you pay your bills." — Robert Kiyosaki'
      },
      {
        title: "Use Assets to Buy Luxuries — Not Your Salary",
        en: "Want a luxury car? A vacation? Fine jewellery? Don't buy it with your paycheck. Instead, build or buy an asset first — let that asset generate the income to pay for the luxury. This single discipline separates those who build wealth from those who spend it before it arrives. The luxury feels better when it's truly paid for by your money working.",
        hi: "luxury car चाहिए? Vacation? Fine jewellery? इसे तनख्वाह से मत खरीदो। पहले एक asset बनाओ — उसे उस luxury के लिए income generate करने दो। यही एक अनुशासन उन लोगों को अलग करता है जो दौलत बनाते हैं उनसे जो आने से पहले ही खर्च कर देते हैं। जब आपका पैसा आपके लिए काम करता है तो luxury का मज़ा और भी ज़्यादा होता है।",
        quote: '"If you want to be rich, you need to think like a rich person." — Robert Kiyosaki'
      },
      {
        title: "Teach Your Children About Money — The School System Won't",
        en: "Schools teach children to be good employees — how to study, pass exams, and get a job. They do not teach financial literacy, investing, or how money actually works. Kiyosaki's deepest message is that the greatest gift you can give a child is not money — it is financial education. The cycle of poverty is broken not by hard work alone, but by knowledge.",
        hi: "स्कूल बच्चों को अच्छा employee बनना सिखाते हैं — पढ़ना, exam पास करना, नौकरी पाना। वो financial literacy, investing या पैसा कैसे काम करता है — यह नहीं सिखाते। Kiyosaki का सबसे गहरा संदेश यही है: बच्चे को सबसे बड़ा तोहफा पैसा नहीं — financial education है। गरीबी का चक्र सिर्फ मेहनत से नहीं, ज्ञान से टूटता है।",
        quote: '"The most important investment you can make is in yourself and your financial education." — Robert Kiyosaki'
      }
    ]
  },

  "how-to-win-friends": {
    live: true,
    slug: "how-to-win-friends",
    title: "How to Win Friends and Influence People",
    titleHtml: "How to Win Friends and <em>Influence People</em>",
    author: "Dale Carnegie",
    genre: "Communication · Leadership",
    rating: "★★★★★",
    cover: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg",
    heroDesc: "First published in 1936, this all-time bestseller has helped millions become better communicators, leaders, and human beings. These 10 lessons distil Carnegie's timeless wisdom on building genuine relationships and inspiring others — without manipulation, without force.",
    //amazon: {
   //   IN: "https://www.amazon.in/dp/0671027034",
   //   US: "https://www.amazon.com/dp/0671027034",
   //   CA: "https://www.amazon.ca/dp/0671027034"
   // },
    lessons: [
      {
        title: "Don't Criticise, Condemn or Complain",
        en: "Criticism is futile because it puts people on the defensive and makes them justify themselves. It wounds their pride, hurts their sense of importance, and arouses resentment. Carnegie's first and most fundamental principle: if you want to change someone, never start with blame. People don't change through criticism — they change when they feel understood.",
        hi: "आलोचना व्यर्थ है — यह लोगों को defensive बना देती है और उन्हें खुद को सही साबित करने पर मजबूर करती है। यह उनके अहंकार को चोट पहुँचाती है और नाराज़गी पैदा करती है। Carnegie का पहला और सबसे बुनियादी सिद्धांत: किसी को बदलना हो तो कभी दोष से शुरुआत मत करो। लोग आलोचना से नहीं — समझे जाने पर बदलते हैं।",
        quote: '"Criticism is dangerous, because it wounds a person\'s precious pride, hurts his sense of importance." — Dale Carnegie'
      },
      {
        title: "Give Honest and Sincere Appreciation",
        en: "The deepest craving in human nature is the desire to feel important and appreciated. Not flattery — that is hollow and is seen through quickly. Carnegie calls for sincere, genuine appreciation: noticing what someone does well and telling them so. This simple act costs nothing and yet it is the foundation of every strong relationship, personal and professional.",
        hi: "इंसान की सबसे गहरी चाहत है — महत्वपूर्ण और सराहा हुआ महसूस करना। चापलूसी नहीं — वो खोखली होती है और लोग जल्दी पकड़ लेते हैं। Carnegie वास्तविक, दिल से की गई प्रशंसा की बात करते हैं: जब कोई कुछ अच्छा करे, तो उसे बताओ। यह सरल काम कुछ नहीं माँगता — पर हर मज़बूत रिश्ते की नींव यही है।",
        quote: '"Give honest and sincere appreciation — not flattery, but the real desire to acknowledge someone\'s worth." — Dale Carnegie'
      },
      {
        title: "Arouse in the Other Person an Eager Want",
        en: "You can get anyone to do almost anything if you frame it in terms of what they want. Carnegie teaches that the only way to influence people is to talk about what they want and show them how to get it. Stop thinking about what you want. Ask: what does this person want? Then connect your request to their desire. This is not manipulation — it is empathy in action.",
        hi: "आप किसी को भी कुछ करवा सकते हैं अगर उसे उनकी इच्छा के नज़रिये से पेश करें। Carnegie सिखाते हैं कि दूसरों को प्रभावित करने का एकमात्र तरीका है — उनकी चाहत के बारे में बात करना और दिखाना कि वो कैसे पूरी होगी। अपनी इच्छा छोड़ो और पूछो: इस इंसान को क्या चाहिए? फिर अपनी बात को उनकी चाहत से जोड़ो। यह हेरफेर नहीं — यह empathy है।",
        quote: '"The only way to influence other people is to talk about what they want and show them how to get it." — Dale Carnegie'
      },
      {
        title: "Become Genuinely Interested in Other People",
        en: "You can make more friends in two months by becoming genuinely interested in other people than you can in two years by trying to get other people interested in you. People are not interested in you or me — they are interested in themselves. Stop performing and start listening. Ask questions. Remember details. Show that you care about their world, not just yours.",
        hi: "दो महीने में दूसरों में सच्ची दिलचस्पी लेकर आप उससे ज़्यादा दोस्त बना सकते हैं, जितने दो साल में खुद को interesting दिखाने की कोशिश से बनेंगे। लोग आप में या मुझ में नहीं — खुद में रुचि रखते हैं। दिखावा छोड़ो, सुनो। सवाल पूछो। उनकी बातें याद रखो। दिखाओ कि उनकी दुनिया आपके लिए मायने रखती है।",
        quote: '"You can make more friends in two months by being interested in them than in two years trying to get them interested in you." — Dale Carnegie'
      },
      {
        title: "Smile — The Most Powerful Greeting in the World",
        en: "A smile costs nothing but creates everything. It enriches those who receive it without impoverishing those who give it. Carnegie devotes an entire chapter to the smile because actions speak louder than words — and a genuine smile says: I am happy to see you, you matter to me. It is the simplest, cheapest, and most powerful relationship-building tool there is.",
        hi: "एक मुस्कान की कोई कीमत नहीं — पर यह सब कुछ बना सकती है। यह उसे समृद्ध करती है जो इसे पाता है, और देने वाले का कुछ नहीं जाता। Carnegie ने इस पर पूरा अध्याय लिखा क्योंकि कार्य शब्दों से ज़्यादा बोलते हैं — और एक सच्ची मुस्कान कहती है: मैं आपको देखकर खुश हूँ, आप मेरे लिए मायने रखते हैं। यह सबसे सरल, सबसे सस्ता और सबसे शक्तिशाली रिश्ता-निर्माण का साधन है।",
        quote: '"A smile costs nothing, but creates much. It enriches those who receive it without impoverishing those who give." — Dale Carnegie'
      },
      {
        title: "Remember That a Person's Name Is the Sweetest Sound",
        en: "A person's name is, to that person, the sweetest and most important sound in any language. Using someone's name in conversation makes them feel seen, respected, and valued. Carnegie trained himself to remember names as a deliberate habit. Forgetting a name sends a clear signal: you are not important enough for me to remember. Remembering it says the opposite.",
        hi: "किसी के लिए उनके अपने नाम से ज़्यादा मीठी और महत्वपूर्ण कोई आवाज़ नहीं। बातचीत में किसी का नाम लेना उन्हें देखा हुआ, सम्मानित और मूल्यवान महसूस कराता है। Carnegie ने जानबूझकर नाम याद रखने की आदत बनाई। नाम भूलना साफ संदेश देता है: आप मेरे लिए याद करने लायक नहीं। याद रखना इसका उल्टा कहता है।",
        quote: '"A person\'s name is to that person, the sweetest, most important sound in any language." — Dale Carnegie'
      },
      {
        title: "Be a Good Listener — Encourage Others to Talk About Themselves",
        en: "Exclusive attention paid to the person who is speaking to you is very rare and very rewarding. Most people do not listen with the intent to understand — they listen with the intent to reply. Carnegie found that the secret to being an interesting conversationalist is to be an interested listener. Ask questions the other person will enjoy answering and listen without interrupting.",
        hi: "जो आपसे बात कर रहा हो, उसे पूरा ध्यान देना बहुत दुर्लभ है — और बहुत मूल्यवान भी। ज़्यादातर लोग समझने के लिए नहीं, जवाब देने के लिए सुनते हैं। Carnegie ने पाया कि एक interesting वार्ताकार बनने का रहस्य है — एक interested श्रोता बनना। ऐसे सवाल पूछो जिनका जवाब देकर सामने वाला खुश हो, और बिना टोके सुनो।",
        quote: '"To be interesting, be interested. Ask questions the other person will enjoy answering." — Dale Carnegie'
      },
      {
        title: "Talk in Terms of the Other Person's Interests",
        en: "Every person you meet knows something you don't and has something they care deeply about. Before any important conversation, think: what does this person love? What gets them excited? Then begin there. Theodore Roosevelt stayed up the night before any meeting to read about his guest's interests. When you talk to someone about what they love, their eyes light up — and they remember you.",
        hi: "आप जिससे भी मिलते हैं, वो कुछ ऐसा जानता है जो आप नहीं जानते — और कुछ ऐसा है जो उसे गहराई से प्रिय है। किसी भी ज़रूरी बातचीत से पहले सोचो: इस इंसान को क्या पसंद है? क्या चीज़ उसे उत्साहित करती है? वहाँ से शुरू करो। Roosevelt हर मुलाकात से पहले अपने मेहमान की रुचियाँ पढ़ते थे। जब आप किसी से उनकी पसंद की बात करते हैं, उनकी आँखें चमक उठती हैं — और वो आपको याद रखते हैं।",
        quote: '"Talk to someone about themselves and they\'ll listen for hours." — Dale Carnegie'
      },
      {
        title: "Make the Other Person Feel Important — and Do It Sincerely",
        en: "The desire to be important is one of the greatest human motivations. Almost everything people do — the clothes they wear, the car they drive, the stories they tell — is driven by the desire to feel significant. Carnegie's principle: make people feel important and do it sincerely. Notice their strengths. Acknowledge their contributions. A person treated as important will rise to meet your expectations of them.",
        hi: "महत्वपूर्ण महसूस करने की चाहत इंसान की सबसे बड़ी प्रेरणाओं में से एक है। लोग जो पहनते हैं, जो गाड़ी चलाते हैं, जो कहानियाँ सुनाते हैं — सब में यही भाव है कि मुझे महत्वपूर्ण माना जाए। Carnegie का सिद्धांत: लोगों को महत्वपूर्ण महसूस कराओ — और सच्चाई से। उनकी खूबियाँ देखो। उनके योगदान को मानो। जिसे महत्वपूर्ण माना जाए, वो उस उम्मीद पर खरा उतरने की कोशिश करता है।",
        quote: '"The deepest principle in human nature is the craving to be appreciated." — Dale Carnegie'
      },
      {
        title: "If You're Wrong, Admit It Quickly and Emphatically",
        en: "When you know you are wrong, admit it clearly, openly, and before the other person has a chance to say it. This takes the wind out of any argument and disarms the other person completely. By criticising yourself, you take away the need for anyone else to do so. People who can admit their mistakes earn far more respect and trust than those who defend the indefensible. It is not weakness — it is strength.",
        hi: "जब आप जानते हों कि आप गलत हैं, तो इसे साफ और खुलकर स्वीकार करो — इससे पहले कि दूसरा कहे। यह हर बहस की हवा निकाल देता है और सामने वाले को पूरी तरह निरस्त्र कर देता है। खुद की आलोचना करने से किसी और को करने की ज़रूरत नहीं रहती। जो लोग अपनी गलती मान सकते हैं वो उन लोगों से कहीं ज़्यादा सम्मान और विश्वास कमाते हैं जो गलत बात का भी बचाव करते हैं। यह कमज़ोरी नहीं — यह ताकत है।",
        quote: '"If you are wrong, admit it quickly and emphatically. There\'s magic in it." — Dale Carnegie'
      }
    ]
  },

  "7-habits-of-highly-effective-people": {
    live: true,
    slug: "7-habits-of-highly-effective-people",
    title: "The 7 Habits of Highly Effective People",
    titleHtml: "The 7 Habits of <em>Highly Effective People</em>",
    author: "Stephen R. Covey",
    genre: "Leadership · Personal Development",
    rating: "★★★★★",
    cover: "https://covers.openlibrary.org/b/isbn/9781982137137-L.jpg",
    heroDesc: "First published in 1989, Stephen Covey's masterwork has sold over 40 million copies and been called the most influential business book of the 20th century. These 10 lessons are not quick fixes — they are a complete framework for living with integrity, purpose, and lasting effectiveness.",
    //amazon: {
    //  IN: "https://www.amazon.in/dp/1982137134",
    //  US: "https://www.amazon.com/dp/1982137134",
     // CA: "https://www.amazon.ca/dp/1982137134"
    //},
    lessons: [
      {
        title: "Habit 1 — Be Proactive: You Are the Author, Not the Actor",
        en: "Between stimulus and response, there is a space. In that space lies your freedom — your power to choose. Covey's first and most foundational habit is this: you are not a product of your circumstances, you are a product of your choices. Proactive people focus their energy on what they can influence — their own attitude, effort, and actions. Reactive people spend their energy blaming the weather, their boss, their past. The moment you accept full responsibility for your life, everything changes.",
        hi: "हर घटना और हमारी प्रतिक्रिया के बीच एक पल का अंतर होता है। उसी अंतर में हमारी स्वतंत्रता है — चुनाव करने की शक्ति। Covey की पहली और सबसे ज़रूरी आदत यह है: आप अपनी परिस्थितियों की उपज नहीं — आप अपने चुनावों की उपज हैं। Proactive लोग अपनी ऊर्जा उस पर लगाते हैं जो उनके नियंत्रण में है — अपना नज़रिया, मेहनत, और कार्य। Reactive लोग मौसम, बॉस, और अपने अतीत को दोष देने में ऊर्जा खर्च करते हैं। जिस पल आप अपनी ज़िंदगी की पूरी ज़िम्मेदारी लेते हैं — सब कुछ बदल जाता है।",
        quote: '"Between stimulus and response there is a space. In that space is our power to choose our response." — Stephen R. Covey'
      },
      {
        title: "Habit 2 — Begin With the End in Mind: Live by Design, Not by Default",
        en: "All things are created twice — first in the mind, then in the world. Before you build a house, you draw a blueprint. Before you live a life, you must know what kind of life you want to build. Covey asks you to imagine your own funeral and think: what would you want the people who loved you to say? That answer is your personal mission statement. Most people spend their lives climbing a ladder — only to find at the top that it was leaning against the wrong wall.",
        hi: "हर चीज़ दो बार बनती है — पहले मन में, फिर दुनिया में। घर बनाने से पहले नक्शा बनता है। ज़िंदगी जीने से पहले यह जानना ज़रूरी है कि आप किस तरह की ज़िंदगी बनाना चाहते हैं। Covey आपसे पूछते हैं — कल्पना करो कि आपका अंतिम संस्कार हो रहा है। आप चाहते हैं कि जो लोग आपसे प्यार करते थे, वो आपके बारे में क्या कहें? वही जवाब आपका Personal Mission Statement है। ज़्यादातर लोग ज़िंदगी भर सीढ़ी चढ़ते रहते हैं — और ऊपर पहुँचकर पाते हैं कि सीढ़ी गलत दीवार पर टिकी थी।",
        quote: '"Begin with the end in mind." — Stephen R. Covey'
      },
      {
        title: "Habit 3 — Put First Things First: Manage Your Life, Not Just Your Time",
        en: "Habit 1 says you are the creator. Habit 2 says create the blueprint. Habit 3 is the daily execution of that vision. Covey introduces his famous Time Management Matrix — four quadrants of Urgent/Not Urgent and Important/Not Important. Highly effective people ruthlessly prioritise Quadrant II: things that are important but not yet urgent — relationships, planning, health, growth. Most people live in Quadrant I (crisis) or Quadrant IV (distraction). The secret is not to manage time — it is to manage yourself.",
        hi: "Habit 1 कहती है — आप रचयिता हैं। Habit 2 कहती है — नक्शा बनाओ। Habit 3 है उस दृष्टि का रोज़ाना क्रियान्वयन। Covey अपना प्रसिद्ध Time Management Matrix पेश करते हैं — चार भाग: Urgent/Not Urgent और Important/Not Important। अत्यधिक प्रभावशाली लोग Quadrant II पर ध्यान देते हैं: जो ज़रूरी है पर अभी आपातकाल नहीं — रिश्ते, योजना, स्वास्थ्य, विकास। ज़्यादातर लोग Quadrant I (संकट) या Quadrant IV (विचलन) में रहते हैं। राज़ समय प्रबंधन नहीं — खुद को manage करना है।",
        quote: '"The key is not to prioritise what\'s on your schedule, but to schedule your priorities." — Stephen R. Covey'
      },
      {
        title: "Habit 4 — Think Win-Win: Success Is Not a Finite Pie",
        en: "Most of us were taught to see life as a competition — if you win, I lose. Covey calls this a Scarcity Mentality. Win-Win is a belief in the Abundance Mentality: there is enough success, recognition, and joy for everyone. A Win-Win agreement says: I will not sacrifice your interests to serve mine, and I will not sacrifice mine to serve yours — we will find a solution that genuinely works for both of us. This is not compromise. It is a higher standard. People with Win-Win thinking build relationships that compound over time.",
        hi: "हम में से ज़्यादातर को यह सिखाया गया है कि ज़िंदगी एक प्रतियोगिता है — तुम जीते तो मैं हारा। Covey इसे Scarcity Mentality कहते हैं। Win-Win एक Abundance Mentality में विश्वास है: सफलता, सम्मान और खुशी सबके लिए पर्याप्त है। Win-Win का मतलब है — मैं अपने हित के लिए तुम्हारा नुकसान नहीं करूँगा, और तुम्हारे लिए अपना भी नहीं। हम एक ऐसा रास्ता निकालेंगे जो दोनों के लिए सही हो। यह compromise नहीं — यह एक ऊँचा मानदंड है। Win-Win सोच वाले लोग ऐसे रिश्ते बनाते हैं जो समय के साथ और मज़बूत होते हैं।",
        quote: '"Win-Win is not a technique; it\'s a total philosophy of human interaction." — Stephen R. Covey'
      },
      {
        title: "Habit 5 — Seek First to Understand, Then to Be Understood",
        en: "Most people do not listen with the intent to understand — they listen with the intent to reply. They are either speaking or preparing to speak. Covey calls this Autobiographical Listening: we filter everything through our own story and experience. Empathic listening means you listen with the intent to truly understand the other person's world — their feelings, their fears, their frame of reference. Only when someone feels genuinely heard will they be open to hearing you. This is the most powerful habit for building trust and resolving conflict.",
        hi: "ज़्यादातर लोग समझने के लिए नहीं, जवाब देने के लिए सुनते हैं। वे या तो बोल रहे हैं या बोलने की तैयारी में हैं। Covey इसे Autobiographical Listening कहते हैं — हम सब कुछ अपनी कहानी और अनुभव के चश्मे से देखते हैं। Empathic listening का मतलब है — आप सच में समझने के इरादे से सुनते हैं: उनकी भावनाएं, उनके डर, उनका नज़रिया। जब कोई सच में सुना हुआ महसूस करता है, तभी वो आपको सुनने के लिए तैयार होता है। यह आदत विश्वास बनाने और संघर्ष सुलझाने की सबसे शक्तिशाली आदत है।",
        quote: '"Most people do not listen with the intent to understand; they listen with the intent to reply." — Stephen R. Covey'
      },
      {
        title: "Habit 6 — Synergise: The Whole Is Greater Than the Sum of Its Parts",
        en: "Synergy is what happens when the combined result of two people working together is greater than what either could achieve alone. It is not 1+1=2. It is 1+1=3, or 10, or 100. Synergy is born when people with different strengths, perspectives, and experiences genuinely value each other's differences and build on them. It requires the vulnerability of Habit 4 and the listening of Habit 5. The result is creative solutions that no one person could have imagined alone. The greatest achievements in history were born in synergy.",
        hi: "Synergy वो होता है जब दो लोग मिलकर काम करें और जो नतीजा आए वो अकेले किसी के काम से बड़ा हो। यह 1+1=2 नहीं — यह 1+1=3, या 10, या 100 है। Synergy तब पैदा होती है जब अलग-अलग ताकत, नज़रिये और अनुभव वाले लोग एक-दूसरे के अंतर को सच में महत्व दें और उस पर निर्माण करें। इसके लिए Habit 4 की Win-Win सोच और Habit 5 की empathic सुनने की ज़रूरत है। नतीजा होते हैं ऐसे रचनात्मक समाधान जो अकेला कोई सोच भी नहीं सकता था। इतिहास की सबसे बड़ी उपलब्धियाँ Synergy में जन्मी हैं।",
        quote: '"Synergy is the highest activity in all life — the true test and manifestation of all the other habits combined." — Stephen R. Covey'
      },
      {
        title: "Habit 7 — Sharpen the Saw: Renew Yourself Before You Break",
        en: "Imagine a man desperately sawing a log. A passer-by suggests he stop to sharpen his saw. 'I don't have time to sharpen the saw,' the man replies, 'I'm too busy sawing.' This is Habit 7. It is the habit of continuous self-renewal across four dimensions: physical (exercise, nutrition, rest), mental (reading, learning, writing), social-emotional (relationships, empathy, service), and spiritual (values, meditation, purpose). You cannot give from an empty cup. The most effective people treat renewal not as a luxury but as a sacred obligation to themselves and those who depend on them.",
        hi: "एक आदमी बड़ी मेहनत से लकड़ी काट रहा है। एक राहगीर सुझाता है — रुको, पहले आरी तेज़ करो। वो आदमी कहता है: 'मेरे पास आरी तेज़ करने का वक्त नहीं, मैं बहुत व्यस्त हूँ लकड़ी काटने में।' यही है Habit 7। यह चार आयामों में लगातार खुद को नवीनीकृत करने की आदत है: शारीरिक (व्यायाम, पोषण, नींद), मानसिक (पढ़ना, सीखना, लिखना), सामाजिक-भावनात्मक (रिश्ते, empathy, सेवा), और आध्यात्मिक (मूल्य, ध्यान, उद्देश्य)। खाली कप से कुछ नहीं दे सकते। सबसे प्रभावशाली लोग खुद को renew करना एक ज़िम्मेदारी मानते हैं — अपने प्रति और उन सभी के प्रति जो उन पर निर्भर हैं।",
        quote: '"Sharpen the saw means preserving and enhancing the greatest asset you have — you." — Stephen R. Covey'
      },
      {
        title: "Private Victory Comes Before Public Victory",
        en: "The first three habits — Be Proactive, Begin With the End in Mind, and Put First Things First — Covey calls the Private Victory. They are inward habits of self-mastery: controlling your responses, clarifying your values, managing your own time. Only after you have won the battle with yourself are you ready for the Public Victory — the three outward habits of working with others (Win-Win, Seek First to Understand, Synergise). You cannot build deep relationships from a foundation of inner chaos. Master yourself first.",
        hi: "पहली तीन आदतें — Proactive बनो, अंत को ध्यान में रखो, पहले ज़रूरी काम करो — Covey इन्हें Private Victory कहते हैं। ये आत्म-नियंत्रण की अंदरूनी आदतें हैं: अपनी प्रतिक्रियाओं पर काबू, अपने मूल्यों की स्पष्टता, अपने समय का प्रबंधन। जब आप खुद पर जीत हासिल कर लेते हैं, तभी आप Public Victory के लिए तैयार होते हैं — दूसरों के साथ काम करने की तीन बाहरी आदतें। अंदरूनी अव्यवस्था की नींव पर गहरे रिश्ते नहीं बन सकते। पहले खुद को जीतो।",
        quote: '"Private Victory precedes Public Victory. You can\'t invert that process any more than you can harvest a crop before you plant it." — Stephen R. Covey'
      },
      {
        title: "Character Ethic vs. Personality Ethic: Roots vs. Branches",
        en: "Covey opens the book with a crucial observation: modern self-help is obsessed with the Personality Ethic — techniques, quick fixes, how to dress, how to smile, how to network. But for most of human history, the foundation of success literature was the Character Ethic: integrity, humility, courage, patience, and service. Personality Ethic is the branches; Character Ethic is the roots. Without deep roots, no amount of leaf-polishing will keep the tree standing in a storm. Covey's entire framework is a return to character as the foundation of lasting effectiveness.",
        hi: "Covey किताब की शुरुआत एक महत्वपूर्ण अवलोकन से करते हैं: आधुनिक self-help Personality Ethic पर ज़्यादा ध्यान देती है — तकनीक, quick fixes, कैसे कपड़े पहनें, कैसे मुस्कुराएं, कैसे networking करें। लेकिन इतिहास में अधिकांश समय सफलता का आधार Character Ethic था: ईमानदारी, विनम्रता, साहस, धैर्य और सेवा। Personality Ethic है शाखाएं; Character Ethic है जड़ें। गहरी जड़ों के बिना, पत्तियों को कितना भी चमकाओ — तूफान में पेड़ टिकेगा नहीं। Covey का पूरा framework एक वापसी है — चरित्र को दीर्घकालिक प्रभावशीलता की नींव के रूप में।",
        quote: '"The character has to be there — techniques and tactics of social influence without character are manipulation." — Stephen R. Covey'
      },
      {
        title: "The Paradigm Shift: Change How You See, Change How You Act",
        en: "A paradigm is the lens through which you see the world — your assumptions, your mental maps, your deeply held beliefs about how things are. Covey shows that most personal and organisational problems are not problems of attitude or behaviour — they are problems of perception. He illustrates this with the story of a man on a subway whose children are running wild — and the moment he learns the man just lost his wife, the entire situation is seen differently. You don't just see with your eyes; you see with your whole being. Change the lens — change the world.",
        hi: "Paradigm वो चश्मा है जिससे आप दुनिया देखते हैं — आपकी मान्यताएं, मानसिक नक्शे, और गहरे विश्वास कि चीज़ें कैसी हैं। Covey दिखाते हैं कि अधिकांश व्यक्तिगत और संगठनात्मक समस्याएं attitude या behavior की नहीं — perception की समस्याएं हैं। वे subway की एक कहानी सुनाते हैं — एक आदमी के बच्चे शोर मचा रहे हैं, और जब पता चलता है कि उसकी पत्नी अभी गुज़री है, तो पूरा दृश्य अलग नज़र आता है। आप सिर्फ आँखों से नहीं देखते — पूरे अस्तित्व से देखते हैं। चश्मा बदलो — दुनिया बदल जाएगी।",
        quote: '"We see the world not as it is, but as we are — or as we are conditioned to see it." — Stephen R. Covey'
      }
    ]
  },
  "deep-work": {
  live: true,
  slug: "deep-work",
  title: "Deep Work",
  titleHtml: "Deep <em>Work</em>",
  author: "Cal Newport",
  genre: "Productivity · Focus",
  rating: "★★★★★",
  cover: "https://covers.openlibrary.org/b/isbn/9780349411903-L.jpg",
  heroDesc: "In a world of constant distraction, Cal Newport's Deep Work is a manifesto for focus. These 10 lessons will help you reclaim your attention, do your best work, and build a life that truly matters.",
  //amazon: {
  //  IN: "https://www.amazon.in/DEEP-WORK-FOCUSED-SUCCESS-DISTRACTED/dp/0349413681",
  //  US: "https://www.amazon.com/dp/1455586692",
  //  CA: "https://www.amazon.ca/dp/1455586692"
 // },
  lessons: [
    {
      title: "Deep Work vs. Shallow Work — Know the Difference",
      en: "Deep Work is professional activity performed in a state of distraction-free concentration that pushes your cognitive capabilities to their limit. Shallow Work is non-cognitively demanding, logistical-style tasks often performed while distracted — emails, meetings, messages. The tragedy of the modern workplace is that we have filled our days with Shallow Work and wonder why we feel busy but not productive.",
      hi: "Deep Work वो काम है जो पूरी एकाग्रता और बिना किसी रुकावट के किया जाए — जो आपकी मानसिक क्षमता को उसकी सीमा तक ले जाए। Shallow Work वो है जो बिखरे ध्यान से होता है — ईमेल, मीटिंग्स, मैसेजेस। आधुनिक कार्यस्थल की सबसे बड़ी त्रासदी यह है कि हमने अपना पूरा दिन Shallow Work से भर लिया है — और फिर सोचते हैं कि व्यस्त होने के बाद भी आगे क्यों नहीं बढ़ रहे।",
      quote: '"Deep Work: Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit." — Cal Newport'
    },
    {
      title: "Deep Work Is Becoming Rare — and More Valuable",
      en: "As the economy becomes more complex and information-driven, the ability to do Deep Work is becoming increasingly rare. Simultaneously, it is becoming more valuable. Those who can master deep focus will produce at an elite level and thrive. Those who cannot will struggle to compete. Newport argues that the ability to perform Deep Work is the superpower of the 21st century.",
      hi: "जैसे-जैसे अर्थव्यवस्था जटिल और सूचना-आधारित होती जा रही है, Deep Work की क्षमता दुर्लभ होती जा रही है — और साथ ही अधिक मूल्यवान भी। जो लोग गहरे focus में काम करना सीख लेंगे, वो शीर्ष पर पहुँचेंगे। जो नहीं सीखेंगे, वो पीछे रह जाएंगे। Newport कहते हैं कि Deep Work 21वीं सदी की सबसे बड़ी महाशक्ति है।",
      quote: '"The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable." — Cal Newport'
    },
    {
      title: "The Deep Work Hypothesis — A Life Well Lived",
      en: "Newport's central thesis is this: the ability to do Deep Work is not just a career advantage — it is the foundation of a meaningful life. Craftsmanship, mastery, and the satisfaction of doing difficult work well are sources of deep fulfillment that no amount of social media scrolling can replicate. A deep life, Newport argues, is a good life.",
      hi: "Newport का मूल विचार यह है: Deep Work की क्षमता सिर्फ एक career advantage नहीं — यह एक सार्थक जीवन की नींव है। किसी कठिन काम में महारत हासिल करने का संतोष, जो social media scrolling से कभी नहीं मिल सकता। Newport कहते हैं — एक गहरा जीवन ही एक अच्छा जीवन है।",
      quote: '"A deep life is a good life." — Cal Newport'
    },
    {
      title: "Choose Your Deep Work Philosophy",
      en: "Newport outlines four approaches to scheduling Deep Work. The Monastic Philosophy means eliminating all shallow obligations entirely. The Bimodal Philosophy divides time between deep and shallow — deep for days or weeks at a stretch. The Rhythmic Philosophy builds a daily habit of deep work at a fixed time. The Journalistic Philosophy fits deep work whenever possible. For most people, the Rhythmic approach — a fixed daily block — is the most practical and sustainable.",
      hi: "Newport Deep Work schedule करने के चार तरीके बताते हैं। Monastic Philosophy: सभी shallow कामों को पूरी तरह छोड़ दो। Bimodal Philosophy: कुछ दिन या हफ्ते सिर्फ deep work के लिए। Rhythmic Philosophy: रोज़ एक निश्चित समय पर deep work का block। Journalistic Philosophy: जब भी मौका मिले, deep work करो। ज़्यादातर लोगों के लिए Rhythmic approach — रोज़ एक fixed block — सबसे practical और टिकाऊ है।",
      quote: '"The key to developing a deep work habit is to move beyond good intentions and add routines and rituals." — Cal Newport'
    },
    {
      title: "Ritualize — Build Your Deep Work Environment",
      en: "Waiting for inspiration or motivation to do deep work is a losing strategy. Instead, build rituals that remove the need for willpower. Decide in advance: where will you work? For how long? How will you handle distractions? What will you do when you get stuck? The more you ritualize the beginning of a deep work session, the less mental energy you waste on deciding how to start — and the more you have for the work itself.",
      hi: "Deep work के लिए प्रेरणा या motivation का इंतज़ार करना एक हारी हुई रणनीति है। इसकी जगह — ऐसी rituals बनाएं जो willpower की ज़रूरत ही न रहने दें। पहले से तय करें: कहाँ काम करेंगे? कितनी देर? distraction आने पर क्या करेंगे? अटकने पर क्या? जितना ज़्यादा आप शुरुआत को ritualize करेंगे, उतनी कम मानसिक ऊर्जा शुरू करने में जाएगी — और उतनी ज़्यादा काम में।",
      quote: '"Great creative minds think like artists but work like accountants." — Cal Newport'
    },
    {
      title: "Embrace Boredom — Train Your Attention",
      en: "If you seek distraction the moment you feel bored — reaching for your phone, opening social media — you are training your brain to be incapable of deep focus. Newport argues that the ability to concentrate is like a muscle: it must be trained. Embrace boredom. Resist the urge to reach for your phone in every idle moment. Let your mind wander. This is not wasted time — it is the training ground for Deep Work.",
      hi: "जब भी बोरियत महसूस हो और आप तुरंत फोन उठाएं या social media खोलें — आप अपने दिमाग को deep focus के लिए अनुपयुक्त बना रहे हैं। Newport कहते हैं कि concentrate करने की क्षमता एक मांसपेशी की तरह है — इसे train करना होगा। बोरियत को गले लगाओ। हर खाली पल में फोन न उठाओ। दिमाग को भटकने दो। यह बर्बाद समय नहीं — Deep Work की training ground है।",
      quote: '"Efforts to deepen your focus will struggle if you don\'t simultaneously wean your mind from a dependence on distraction." — Cal Newport'
    },
    {
      title: "Quit Social Media — Or Be Ruthlessly Selective",
      en: "Newport does not say social media is evil. He says you should only use a tool if its benefits substantially outweigh its harms. Most people adopt every new platform without question. Newport recommends the Craftsman Approach: identify your core goals, then only use tools that have a significant positive impact on those goals. For most professionals, quitting or severely limiting social media leads to more deep work and a better life.",
      hi: "Newport यह नहीं कहते कि social media बुरा है। वो कहते हैं — किसी tool का उपयोग तभी करो जब उसके फायदे नुकसान से काफी ज़्यादा हों। ज़्यादातर लोग बिना सोचे हर नया platform अपना लेते हैं। Newport Craftsman Approach सुझाते हैं: अपने मुख्य लक्ष्य तय करो, फिर सिर्फ उन tools का उपयोग करो जो उन लक्ष्यों पर सकारात्मक प्रभाव डालते हों। ज़्यादातर professionals के लिए social media छोड़ना या सीमित करना — Deep Work और बेहतर जीवन की ओर पहला कदम है।",
      quote: '"The ability to concentrate without distraction is becoming increasingly valuable — and increasingly rare." — Cal Newport'
    },
    {
      title: "Drain the Shallows — Protect Your Deep Work Time",
      en: "Newport recommends scheduling every minute of your workday in advance. This is not about rigidity — it is about intention. When you plan your day, you are forced to confront how much time you actually have and how much of it is being consumed by shallow tasks. The goal is not to eliminate shallow work entirely — it is necessary. The goal is to confine it to its proper place so that it does not crowd out the deep work that matters most.",
      hi: "Newport सलाह देते हैं कि अपने पूरे कार्यदिवस को पहले से schedule करें। यह कठोरता नहीं — यह इरादा है। जब आप दिन plan करते हैं, तो आप देखते हैं कि आपके पास actually कितना समय है और उसमें से कितना shallow कामों में जा रहा है। लक्ष्य shallow work को पूरी तरह हटाना नहीं — वो ज़रूरी है। लक्ष्य है उसे उसकी सही जगह तक सीमित रखना ताकि वो deep work को दबा न सके।",
      quote: '"Schedule every minute of your day. Without this, it\'s too easy to allow the shallow to crowd out the deep." — Cal Newport'
    },
    {
      title: "The 4DX Framework — Execute on the Wildly Important",
      en: "Newport adapts the 4 Disciplines of Execution for Deep Work. Focus on the wildly important — one or two deep goals, not twenty. Act on lead measures — track the hours of deep work you put in each week, not just the outcomes. Keep a compelling scoreboard — a physical tally of your deep work hours creates accountability and momentum. Create a cadence of accountability — a weekly review to see if you hit your deep work targets. These disciplines transform vague intentions into measurable habits.",
      hi: "Newport 4 Disciplines of Execution को Deep Work के लिए adapt करते हैं। सबसे ज़रूरी एक-दो deep goals पर focus करो — बीस पर नहीं। Lead measures पर काम करो — हर हफ्ते के deep work के घंटे track करो, सिर्फ नतीजे नहीं। एक scoreboard रखो — deep work के घंटों का physical record accountability और momentum बनाता है। साप्ताहिक समीक्षा करो कि क्या आपने अपने deep work targets पूरे किए। ये disciplines अस्पष्ट इरादों को measurable आदतों में बदलती हैं।",
      quote: '"A small amount of extra quality in your output can translate into a large amount of extra value." — Cal Newport'
    },
    {
      title: "Shutdown Ritual — Rest Is Part of the Work",
      en: "At the end of every workday, Newport performs a shutdown ritual — reviewing all incomplete tasks, planning the next day, and saying the words: 'Shutdown complete.' This signals to his brain that work is over. Without a clear shutdown, the unconscious mind keeps processing work problems during rest — degrading the quality of both rest and the next day's deep work. True rest is not laziness. It is the recovery that makes tomorrow's deep work possible.",
      hi: "हर कार्यदिवस के अंत में Newport एक shutdown ritual करते हैं — सभी अधूरे कामों की समीक्षा, अगले दिन की planning, और फिर कहते हैं: 'Shutdown complete।' यह उनके दिमाग को संकेत देता है कि काम खत्म हुआ। बिना clear shutdown के, अवचेतन मन आराम के समय भी काम की समस्याओं को process करता रहता है — जिससे rest और अगले दिन का deep work दोनों कमज़ोर होते हैं। सच्चा आराम आलस्य नहीं — यह वो recovery है जो कल के deep work को संभव बनाती है।",
      quote: '"Idleness is not just a vacation, an indulgence or a vice; it is as indispensable to the brain as vitamin D is to the body." — Cal Newport'
    }
  ]
}

  ,
  "tools-of-titans": {
    live: true,
    slug: "tools-of-titans",
    title: "Tools of Titans",
    titleHtml: "Tools of <em>Titans</em>",
    author: "Tim Ferriss",
    genre: "Productivity · Success",
    rating: "★★★★★",
    cover: "https://covers.openlibrary.org/b/isbn/9781785041273-L.jpg",
    heroDesc: "Tim Ferriss spent years interviewing world-class performers — billionaires, athletes, artists, and scientists — and distilled their habits, routines, and tactics into one book. Here are the 10 most powerful lessons that separate the extraordinary from the ordinary.",
    amazon: {
      IN: "https://www.amazon.in/Tools-Titans-Billionaires-World-Class-Performers/dp/1785041274/ref=sr_1_2?crid=U3WXM54PWN2S&dib=eyJ2IjoiMSJ9.aKOdnKV6Lo0HNhsXKzFTiid6C_PC3pA2zOaP80L3HUEOWfqNWyTymaIK2f2CR03wsdhmr1DWe_fKlPuyyN7JJSUHKYH2s_H5BOMAcEkypUvBJdUVShkxuCk8HdNvsSc2y5gVNXHKb-sv5S_hlMhDTsT6bvNT3mso5ATpL8FVckpCYiAtxhA7_R52GHwmyolhUncx-hR9CHPFWp4JsPIZClmg3og4PJkXm5lQQ58elIebTiKFOyJ6uXbLGmozIJXX9r71BY70ggtXmOwLjBtI1xN_J3I5HjjPBvsJdws0F2E.CdljZ3ZDDUPUG3LEYL2sp3Sii-6YNr45vFhMQqGHX74&dib_tag=se&keywords=tools+of+titans&qid=1775654928&sprefix=tools+of+tit%2Caps%2C733&sr=8-2",
      US: "https://www.amazon.com/dp/1328683788",
      CA: "https://www.amazon.ca/dp/1328683788"
    },
    lessons: [
      {
        title: "Morning Routines Are Non-Negotiable",
        en: "Nearly every world-class performer Ferriss interviewed had a consistent morning routine — not inherited by accident, but designed with intention. Whether it was meditation, journaling, exercise, or cold exposure, the first hour of the day was protected fiercely. The morning routine is not a luxury. It is armour. It sets the tone for every decision, every interaction, and every creative output that follows. Win the morning, win the day.",
        hi: "Ferriss ने जितने भी world-class performers का interview लिया, उन लगभग सभी की एक consistent morning routine थी — जो आकस्मिक नहीं, बल्कि जानबूझकर design की गई थी। चाहे meditation हो, journaling, exercise या cold exposure — दिन का पहला घंटा हर हाल में सुरक्षित रखा जाता था। Morning routine कोई विलासिता नहीं — यह एक कवच है। यह दिन के हर निर्णय, हर बातचीत और हर रचनात्मक काम की नींव रखती है। सुबह जीती, तो दिन जीता।",
        quote: '"The first 60 minutes of each day are often 'sacred time' for the most successful people.' — Tim Ferriss'
      },
      {
        title: "Fear-Setting: Define the Worst Case",
        en: "Most people are paralysed not by real danger but by imagined catastrophe. Ferriss, inspired by Stoicism, practises Fear-Setting: write down the worst-case scenario of an action you are afraid to take, then ask — how likely is it? How bad would it really be? How would you recover? Almost always, the worst case is survivable. And the cost of inaction — of staying stuck — is almost always far greater than the cost of trying and failing.",
        hi: "ज़्यादातर लोग असली खतरे से नहीं, बल्कि कल्पना में बनाई गई तबाही से लकवाग्रस्त होते हैं। Ferriss, Stoicism से प्रेरित होकर, Fear-Setting का अभ्यास करते हैं: जो काम करने से डर लग रहा है उसका worst-case scenario लिखो — फिर पूछो: यह कितना संभव है? असल में कितना बुरा होगा? आप कैसे उबरेंगे? लगभग हमेशा, worst case से उबरा जा सकता है। और कुछ न करने की कीमत — फंसे रहने की — हमेशा try करके fail होने की कीमत से कहीं ज़्यादा होती है।",
        quote: '"Define your nightmare, the absolute worst that could happen if you did what you are considering.' — Tim Ferriss'
      },
      {
        title: "The 80/20 of Everything — Find the Vital Few",
        en: "Many titans apply the Pareto Principle obsessively: 20% of inputs drive 80% of outputs. This applies to clients, habits, relationships, and skills. The question is not 'What can I add?' — it is 'What can I eliminate?' The most successful people Ferriss interviewed were ruthless about cutting everything that did not move the needle on their highest priorities. Subtraction is often more powerful than addition.",
        hi: "कई titans Pareto Principle को जुनून की हद तक apply करते हैं: 20% कारण 80% परिणाम देते हैं। यह clients, आदतों, रिश्तों और skills — सब पर लागू होता है। सवाल यह नहीं कि 'मैं क्या जोड़ूं?' — सवाल यह है: 'मैं क्या हटाऊं?' Ferriss ने जिन सबसे सफल लोगों का interview किया, वो सब उन चीज़ों को काटने में निर्दयी थे जो उनकी सबसे बड़ी प्राथमिकताओं को आगे नहीं बढ़ाती थीं। घटाना अक्सर जोड़ने से ज़्यादा शक्तिशाली होता है।",
        quote: '"Being busy is a form of laziness — lazy thinking and indiscriminate action.' — Tim Ferriss'
      },
      {
        title: "Meditation Is the Meta-Skill",
        en: "Over 80% of the world-class performers Ferriss interviewed had some form of daily meditation or mindfulness practice. Not because they are spiritual — but because it works. Meditation trains the ability to observe your own thoughts without being controlled by them. It improves focus, reduces anxiety, accelerates decision-making, and builds emotional resilience. It is the one practice that makes every other practice more effective.",
        hi: "Ferriss ने जिन 80% से ज़्यादा world-class performers का interview किया, उन सभी की कोई न कोई दैनिक meditation या mindfulness practice थी। इसलिए नहीं कि वो आध्यात्मिक हैं — बल्कि इसलिए कि यह काम करती है। Meditation अपने विचारों को बिना उनके नियंत्रण में आए देखने की क्षमता train करती है। यह focus सुधारती है, चिंता कम करती है, निर्णय लेने की गति बढ़ाती है और भावनात्मक लचीलापन बनाती है। यह एक ऐसी practice है जो बाकी हर practice को और प्रभावशाली बनाती है।",
        quote: '"If you don't have 10 minutes for meditation, you don't have a life.' — Tim Ferriss'
      },
      {
        title: "Saying No Is a Superpower",
        en: "Every titan Ferriss profiles guards their time and attention with ferocity. The default answer to almost every request is no — not because they are rude, but because they understand that every yes is a no to something else. Warren Buffett says the difference between successful people and very successful people is that very successful people say no to almost everything. Your time is finite. Your attention is finite. Protect them both as if your life depends on it — because your best work does.",
        hi: "Ferriss के हर titan अपने समय और ध्यान की रक्षा जुनून के साथ करते हैं। लगभग हर अनुरोध का डिफ़ॉल्ट जवाब 'नहीं' होता है — इसलिए नहीं कि वो असभ्य हैं, बल्कि इसलिए कि वो समझते हैं कि हर 'हां' किसी और चीज़ को 'नहीं' है। Warren Buffett कहते हैं: सफल और बहुत सफल लोगों में फ़र्क यह है कि बहुत सफल लोग लगभग हर चीज़ को 'नहीं' कहते हैं। आपका समय सीमित है। आपका ध्यान सीमित है। दोनों की रक्षा करें जैसे आपकी ज़िंदगी इस पर निर्भर हो — क्योंकि आपका सर्वश्रेष्ठ काम इस पर निर्भर है।",
        quote: '"You are the average of the five people you most associate with.' — Tim Ferriss'
      },
      {
        title: "Failure Is Data, Not Verdict",
        en: "Every world-class performer Ferriss interviewed had failed — spectacularly, publicly, or repeatedly. What distinguished them was not the absence of failure but the relationship with it. They treated failure as feedback, not as final judgement. They asked: what did this teach me? What would I do differently? The most dangerous thing is not failure — it is the interpretation of failure as identity. You are not your failures. They are just data points on the way to mastery.",
        hi: "Ferriss ने जिस भी world-class performer का interview लिया, वो fail हुए थे — शानदार तरीके से, सार्वजनिक रूप से, या बार-बार। उन्हें बाकियों से जो अलग करता था वो failure की अनुपस्थिति नहीं, बल्कि failure के साथ उनका रिश्ता था। वो failure को feedback मानते थे, अंतिम फैसला नहीं। वो पूछते थे: इसने मुझे क्या सिखाया? मैं क्या अलग करता? सबसे खतरनाक बात failure नहीं है — बल्कि failure को अपनी पहचान मान लेना है। आप अपनी failures नहीं हैं। वो सिर्फ महारत की राह पर data points हैं।",
        quote: '"What we fear doing most is usually what we most need to do.' — Tim Ferriss'
      },
      {
        title: "The Importance of Mentors and Asking",
        en: "Most people do not ask for help, advice, or access because they assume the answer will be no. The titans Ferriss profiles think differently. They understand that the worst answer is 'no' — and 'no' is where they already are. A bold, specific, well-researched ask to the right person can compress years of learning into a single conversation. The people at the top are often more accessible than you think — and they remember those who ask great questions.",
        hi: "ज़्यादातर लोग मदद, सलाह या अवसर नहीं माँगते क्योंकि उन्हें लगता है जवाब 'नहीं' होगा। Ferriss के titans अलग तरह से सोचते हैं। वो समझते हैं कि सबसे बुरा जवाब 'नहीं' है — और वो already 'नहीं' की जगह पर खड़े हैं। सही व्यक्ति से एक साहसी, specific और अच्छी तरह से शोध किया गया सवाल सीखने के वर्षों को एक ही बातचीत में समेट सकता है। शीर्ष पर बैठे लोग अक्सर उतने दुर्गम नहीं होते जितना आप सोचते हैं — और वो उन लोगों को याद रखते हैं जो अच्छे सवाल पूछते हैं।",
        quote: '"A person's success in life can usually be measured by the number of uncomfortable conversations he or she is willing to have.' — Tim Ferriss'
      },
      {
        title: "Strength Training Is the Foundation",
        en: "An overwhelming number of Ferriss's interviewees — regardless of profession — maintained a serious physical fitness practice. Not for vanity, but for cognitive performance, emotional regulation, and longevity. The body is not separate from the mind. Physical discipline creates mental discipline. The habits of showing up, pushing through discomfort, and recovering well in the gym transfer directly to creative and professional life. Your body is the vehicle for everything else you want to do.",
        hi: "Ferriss के साक्षात्कारकर्ताओं में से भारी बहुमत — चाहे किसी भी पेशे से हों — एक गंभीर शारीरिक fitness practice बनाए रखते थे। दिखावे के लिए नहीं, बल्कि cognitive performance, भावनात्मक संतुलन और दीर्घायु के लिए। शरीर और मन अलग नहीं हैं। शारीरिक अनुशासन मानसिक अनुशासन बनाता है। gym में उपस्थित रहने, असुविधा से गुज़रने और ठीक से recover करने की आदतें सीधे रचनात्मक और professional जीवन में transfer होती हैं। आपका शरीर वो वाहन है जिससे आप बाकी सब कुछ करना चाहते हैं।",
        quote: '"Focus on being productive instead of busy.' — Tim Ferriss'
      },
      {
        title: "Journaling: The Clarity Tool",
        en: "Many of the most successful people Ferriss profiles — including Tony Robbins, Tim Ferriss himself, and numerous CEOs — journal daily. Not to record events, but to process them. Journaling externalises your thinking, helping you see patterns, fears, and opportunities that stay invisible when they remain only in your head. A regular journaling practice is one of the cheapest and most powerful therapies available — it is thinking on paper, and thinking clearly is the rarest of skills.",
        hi: "Ferriss के कई सबसे सफल लोग — जिनमें Tony Robbins, Tim Ferriss खुद, और अनेक CEOs शामिल हैं — रोज़ journal लिखते हैं। घटनाओं को record करने के लिए नहीं, बल्कि उन्हें process करने के लिए। Journaling आपकी सोच को बाहर लाती है, आपको उन patterns, डर और अवसरों को देखने में मदद करती है जो केवल आपके दिमाग में रहने पर अदृश्य रहते हैं। नियमित journaling practice सबसे सस्ती और सबसे शक्तिशाली therapies में से एक है — यह कागज़ पर सोचना है, और स्पष्ट रूप से सोचना सबसे दुर्लभ कौशल है।",
        quote: '"Keeping a journal will absolutely change your life in ways you've never imagined.' — Tim Ferriss'
      },
      {
        title: "Optimise for Interesting, Not Optimal",
        en: "A recurring theme across Ferriss's interviews is that the most fulfilled performers did not optimise purely for money, status, or conventional success. They optimised for what was interesting to them — for problems that made them want to get out of bed. Purpose and curiosity are more sustainable fuels than money alone. When work feels like a mission rather than a job, performance compounds. Find the intersection of what you are good at, what the world needs, and what genuinely fascinates you — and then go all in.",
        hi: "Ferriss के interviews में एक बार-बार आने वाला विषय यह है कि सबसे संतुष्ट performers ने केवल पैसे, status या परंपरागत सफलता के लिए optimize नहीं किया। उन्होंने उसके लिए optimize किया जो उन्हें interesting लगता था — उन समस्याओं के लिए जो उन्हें सुबह बिस्तर से उठने पर मजबूर करती थीं। Purpose और जिज्ञासा अकेले पैसे से ज़्यादा टिकाऊ ईंधन हैं। जब काम नौकरी की तरह नहीं, mission की तरह लगे — तो performance compounding होती है। वो intersection खोजें जहाँ आप अच्छे हों, दुनिया को ज़रूरत हो, और जो आपको genuinely आकर्षित करे — फिर पूरी तरह से जुट जाएं।",
        quote: '"The goal is not to simply eliminate the bad, but to pursue and experience the best in the world.' — Tim Ferriss'
      }
    ]
  }

};
