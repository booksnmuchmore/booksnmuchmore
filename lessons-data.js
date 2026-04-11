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
    //
    lessons: [
      {
        title: "The Power of Desire",
        en: "Every great achievement begins with a burning desire — not a wish, not a hope, but an obsessive, white-hot want. Hill argues that desire is the starting point of all riches, and without it no goal can be reached. You must know exactly what you want and want it with everything you have.",
        hi: "हर बड़ी सफलता की शुरुआत एक तीव्र इच्छा से होती है — सिर्फ एक कामना नहीं, बल्कि एक जुनून। Hill कहते हैं कि desire ही सभी धन का पहला कदम है। आपको पता होना चाहिए कि आप क्या चाहते हैं — और उसे पाने की आग दिल में जलती रहनी चाहिए।",
        quote: `"The starting point of all achievement is desire." — Napoleon Hill`
      },
      {
        title: "Faith — Believing Before Seeing",
        en: "Faith is the head chemist of the mind. You must believe you will succeed before any evidence of success appears. Visualise your goals as already achieved and act with the confidence that the universe will conspire to help you. Doubt is the enemy of achievement.",
        hi: "विश्वास मन का सबसे शक्तिशाली हथियार है। सफलता का कोई सबूत आने से पहले ही आपको यकीन होना चाहिए कि आप सफल होंगे। अपने लक्ष्य को पहले से पूरा हुआ मानकर चलें — संदेह आपका सबसे बड़ा दुश्मन है।",
        quote: `"Whatever the mind can conceive and believe, it can achieve." — Napoleon Hill`
      },
      {
        title: "Auto-suggestion — Programme Your Subconscious",
        en: "Your subconscious mind does not distinguish between what is real and what is repeatedly imagined. Feed it positive, goal-oriented thoughts every single day through affirmations and visualisation. What you consistently tell yourself eventually becomes your reality.",
        hi: "आपका अवचेतन मन वास्तविकता और कल्पना में फ़र्क नहीं कर सकता। रोज़ाना सकारात्मक affirmations और visualization से उसे program करें। आप खुद से जो बार-बार कहते हैं, वही एक दिन आपकी सच्चाई बन जाती है।",
        quote: `"Your subconscious mind works continuously, while you are awake, and while you sleep." — Napoleon Hill`
      },
      {
        title: "Specialised Knowledge Over General Knowledge",
        en: "General knowledge is of little value on the path to success. What matters is specialised, organised knowledge applied toward a definite purpose. You don't need to know everything — you need to master one thing deeply and know where to find the rest.",
        hi: "सामान्य ज्ञान अकेले काम का नहीं। असली शक्ति है — किसी एक क्षेत्र में गहरी विशेषज्ञता। आपको सब कुछ जानने की ज़रूरत नहीं — बस एक चीज़ में माहिर बनें और बाकी को खोजना सीखें।",
        quote: `"Knowledge is only potential power. It becomes power only when organised into definite plans." — Napoleon Hill`
      },
      {
        title: "The Mastermind Principle",
        en: "No one achieves great success alone. Surround yourself with a group of driven, like-minded people — a mastermind alliance — and harness the collective intelligence and experience of the group. The whole is exponentially greater than the sum of its parts.",
        hi: "कोई भी बड़ी सफलता अकेले नहीं मिलती। अपने आस-पास ऐसे लोगों का एक समूह बनाएं जो आपके जैसे सोचते हों। मिलकर काम करने से जो शक्ति बनती है, वो अकेले कभी नहीं मिल सकती।",
        quote: `"No two minds ever come together without thereby creating a third, invisible, intangible force." — Napoleon Hill`
      },
      {
        title: "Decision — The Cure for Procrastination",
        en: "Analysis of over 25,000 people showed that lack of decision was a near-universal cause of failure. Successful people make decisions quickly and change them slowly. Unsuccessful people make decisions slowly and change them quickly. Decide and commit — then adjust on the way.",
        hi: "25,000 से ज़्यादा लोगों के अध्ययन में पाया गया कि failure का सबसे बड़ा कारण है — निर्णय न ले पाना। सफल लोग जल्दी फ़ैसला करते हैं और उसे लंबे समय तक निभाते हैं। अनिर्णय आपको आगे नहीं बढ़ने देता।",
        quote: `"Successful people make decisions quickly and change them slowly." — Napoleon Hill`
      },
      {
        title: "Persistence — The Iron Will",
        en: "Persistence is to character what carbon is to steel. Most people give up at the first sign of failure. But every defeat carries the seed of an equivalent success — if you persist long enough. The path to success is paved with repeated failures that most never push through.",
        hi: "Persistence वो गुण है जो लोहे को स्टील बनाता है। ज़्यादातर लोग पहली असफलता पर हार मान लेते हैं। लेकिन हर हार में एक बराबर की जीत का बीज छुपा होता है — बशर्ते आप डटे रहें।",
        quote: `"Every adversity carries with it the seed of an equivalent or greater benefit." — Napoleon Hill`
      },
      {
        title: "The Subconscious Mind — Your Silent Partner",
        en: "You cannot entirely control your subconscious mind, but you can feed it the plans and desires you wish it to act upon. Fill it with positive emotions — faith, love, desire, enthusiasm — and keep fear, jealousy, and hatred away. Your subconscious will work for you or against you depending entirely on what you feed it.",
        hi: "आप अपने अवचेतन मन को पूरी तरह नियंत्रित नहीं कर सकते, लेकिन उसे सही सामग्री दे सकते हैं। उसे विश्वास, प्रेम, उत्साह जैसी सकारात्मक भावनाओं से भरें — डर और ईर्ष्या इसे नकारात्मक बना देते हैं।",
        quote: `"The subconscious mind will not remain idle. Feed it positive thoughts or it will feed on negative ones." — Napoleon Hill`
      },
      {
        title: "The Brain — A Broadcasting Station",
        en: "When charged with strong emotion and desire, your mind broadcasts at a higher frequency — attracting ideas, people, and opportunities aligned with your dominant thoughts. Be intentional about what thoughts you broadcast into the world and what you allow in.",
        hi: "जब आपके विचार तीव्र भावनाओं से भरे होते हैं, तो वो उन्हीं जैसे लोगों और अवसरों को आकर्षित करते हैं। आप जो सोचते हैं, वही आप बनते हैं — इसलिए अपने विचारों का चुनाव सोच-समझकर करें।",
        quote: `"The brain is both a broadcasting and a receiving station for thought vibrations." — Napoleon Hill`
      },
      {
        title: "The Sixth Sense — Infinite Intelligence",
        en: "The final and most powerful principle is the development of your sixth sense — a creative imagination that connects you to infinite intelligence. It's that gut feeling, that sudden flash of insight, that whisper telling you what to do next. It develops only through years of applying all the previous nine principles.",
        hi: "यह Hill की सबसे गहरी शिक्षा है — एक ऐसी छठी इंद्रिय जो आपको अनंत ज्ञान से जोड़ती है। यह वो अंदरूनी आवाज़ है जो बताती है कि अगला कदम क्या होना चाहिए। यह तब विकसित होती है जब आप बाकी नौ सिद्धांतों को जीने लगते हैं।",
        quote: `"The sixth sense is that portion of the subconscious mind referred to as the creative imagination." — Napoleon Hill`
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
    //
    lessons: [
      {
        title: "1% Better Every Day — The Power of Tiny Gains",
        en: "Improving by just 1% each day doesn't feel significant. But compounded over a year, you end up 37 times better. Conversely, getting 1% worse each day leads to near zero. Small habits are not trivial — they are the building blocks of remarkable results.",
        hi: "रोज़ाना सिर्फ 1% बेहतर होना बड़ा नहीं लगता। लेकिन एक साल में यह compound होकर 37 गुना बेहतरी बन जाता है। छोटी आदतें तुच्छ नहीं होतीं — वे बड़े नतीजों की नींव होती हैं।",
        quote: `"You do not rise to the level of your goals. You fall to the level of your systems." — James Clear`
      },
      {
        title: "Forget Goals — Focus on Systems",
        en: "Goals tell you where you want to go; systems determine whether you actually get there. Winners and losers often share the same goals — what separates them is the system they follow daily. Fix the process, and the results take care of themselves.",
        hi: "लक्ष्य बताते हैं कि आप कहाँ जाना चाहते हैं; systems तय करती हैं कि आप वहाँ पहुँचेंगे या नहीं। जीतने और हारने वाले अक्सर एक जैसे goals रखते हैं — फ़र्क उनकी रोज़ की प्रक्रिया में होता है।",
        quote: `"Every action you take is a vote for the type of person you wish to become." — James Clear`
      },
      {
        title: "Identity-Based Habits — Become Before You Do",
        en: "The most powerful habit change comes when you shift your identity, not just your actions. Instead of saying 'I want to run a marathon', say 'I am a runner.' Each habit you follow is a vote cast for the kind of person you believe yourself to be.",
        hi: "सबसे शक्तिशाली बदलाव तब आता है जब आप अपनी पहचान बदलते हैं, सिर्फ अपने काम नहीं। 'मुझे दौड़ना है' की जगह कहें — 'मैं एक runner हूँ।' हर अच्छी आदत उस इंसान के लिए एक वोट है जो आप बनना चाहते हैं।",
        quote: `"The goal is not to read a book, the goal is to become a reader." — James Clear`
      },
      {
        title: "The Four Laws of Behaviour Change",
        en: "Every habit follows a loop: Cue → Craving → Response → Reward. To build a good habit, make the cue obvious, the craving attractive, the response easy, and the reward satisfying. To break a bad habit, invert each law — make it invisible, unattractive, difficult, and unsatisfying.",
        hi: "हर आदत एक loop है: Cue → Craving → Response → Reward। अच्छी आदत बनाने के लिए: cue को obvious, craving को attractive, response को easy और reward को satisfying बनाएं। बुरी आदत तोड़ने के लिए इन्हें उलट दें।",
        quote: `"Make it obvious. Make it attractive. Make it easy. Make it satisfying." — James Clear`
      },
      {
        title: "Implementation Intention — When and Where",
        en: "Vague intentions fail. 'I will exercise more' rarely works. Instead, decide in advance: 'I will exercise at 7 AM in my living room on Monday, Wednesday, and Friday.' Specifying when and where dramatically increases the chance you follow through.",
        hi: "अस्पष्ट इरादे काम नहीं करते। 'मैं ज़्यादा exercise करूँगा' शायद ही काम आए। इसकी बजाय तय करें: 'मैं सोमवार, बुधवार और शुक्रवार को सुबह 7 बजे अपने कमरे में exercise करूँगा।' कब और कहाँ तय करने से follow-through बहुत बढ़ जाता है।",
        quote: `"When situation X arises, I will perform response Y." — James Clear`
      },
      {
        title: "Habit Stacking — Piggyback on What Already Exists",
        en: "Link a new habit to an existing one using the formula: 'After I [current habit], I will [new habit].' Your existing habits are anchors. Stack new behaviours on top of them and you leverage the momentum that already exists in your daily routine.",
        hi: "एक नई आदत को पुरानी आदत से जोड़ें: 'जब मैं [current habit] करूँ, तभी मैं [new habit] करूँगा।' आपकी मौजूदा आदतें anchors हैं। नई आदतें उन पर stack करें और अपनी daily routine की शक्ति का फ़ायदा उठाएं।",
        quote: `"Habits are the compound interest of self-improvement." — James Clear`
      },
      {
        title: "Environment Design — Make the Right Choice the Easy Choice",
        en: "Motivation is overrated. Environment often matters more. Want to eat healthier? Put fruit on the counter, not in the fridge. Want to read more? Place the book on your pillow. Design your physical space so that good habits require less friction and bad habits require more.",
        hi: "Motivation से ज़्यादा ज़रूरी है माहौल। अच्छा खाना चाहते हैं? फल काउंटर पर रखें, फ्रिज में नहीं। ज़्यादा पढ़ना चाहते हैं? किताब तकिए पर रखें। अपना माहौल ऐसे design करें कि अच्छी आदतों में friction कम हो और बुरी में ज़्यादा।",
        quote: `"You don\'t have to be the victim of your environment. You can also be the architect of it." — James Clear`
      },
      {
        title: "The Two-Minute Rule — Never Miss Twice",
        en: "When starting a new habit, it should take less than two minutes to do. 'Read before bed each night' becomes 'read one page.' This scales down the habit until it's easy enough to start. And if you miss a day, never miss twice — one slip is an accident, two is a new pattern.",
        hi: "नई आदत शुरू करते समय उसे 2 मिनट से कम का काम बनाएं। 'रात को पढ़ना' को 'एक पेज पढ़ना' बना दें। और अगर एक दिन छूट जाए तो कभी दो दिन न छोड़ें — एक बार गलती होती है, दो बार नई आदत बनने लगती है।",
        quote: `"A habit must be established before it can be improved." — James Clear`
      },
      {
        title: "Immediate Rewards — Make It Satisfying Now",
        en: "The brain values immediate rewards far more than delayed ones. Good habits often have delayed payoffs and immediate costs — which makes them hard to stick with. Add an immediate reward to your habit — something that feels good right now — to reinforce the behaviour in the short term.",
        hi: "दिमाग तुरंत मिलने वाले इनाम को ज़्यादा तरजीह देता है। अच्छी आदतों का फल देर से मिलता है — इसीलिए वे छूट जाती हैं। हर अच्छी आदत के बाद खुद को तुरंत कुछ अच्छा दें — इससे brain उस आदत को reinforce करता है।",
        quote: `"The Cardinal Rule of Behaviour Change: What is immediately rewarded is repeated." — James Clear`
      },
      {
        title: "The Plateau of Latent Potential — Trust the Process",
        en: "Results are often delayed. You put in weeks of effort and see nothing — then suddenly, everything clicks. Clear calls this the Plateau of Latent Potential. The work was never wasted; it was stored. Keep going past the point where most people quit, and breakthroughs become inevitable.",
        hi: "नतीजे अक्सर देर से आते हैं। हफ्तों मेहनत करने के बाद कुछ नहीं दिखता — फिर अचानक सब कुछ बदल जाता है। Clear इसे Plateau of Latent Potential कहते हैं। मेहनत बेकार नहीं गई — वो जमा हो रही थी। जहाँ लोग छोड़ देते हैं, वहाँ से आगे जाएं।",
        quote: `"Be patient. The most powerful outcomes are delayed." — James Clear`
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
   //
    lessons: [
      {
        title: "Follow Your Personal Legend",
        en: "Every person on earth has a Personal Legend — a dream or purpose that is uniquely theirs. The Alchemist's central message is simple: follow it. Not tomorrow, not when conditions are perfect, but now. The universe conspires to help those who pursue what they truly want.",
        hi: "हर इंसान की एक Personal Legend होती है — एक सपना, एक उद्देश्य जो सिर्फ उसका है। The Alchemist का मूल संदेश यही है: उसका पीछा करो। कल नहीं, जब हालात सही हों तब नहीं — अभी। जो सच में चाहते हैं उसे पाने में ब्रह्मांड भी मदद करता है।",
        quote: `"And, when you want something, all the universe conspires in helping you to achieve it." — Paulo Coelho`
      },
      {
        title: "The Language of the World — Signs Are Everywhere",
        en: "The world speaks to us constantly through signs, coincidences, and feelings. Santiago learns to read the omens the world gives him — a hawk's flight, a stranger's words, a sudden feeling. The Soul of the World is communicating. The question is whether we are paying attention.",
        hi: "दुनिया हमसे हर पल बात करती है — संकेतों, संयोगों और भावनाओं के ज़रिए। Santiago सीखता है कि दुनिया के ये इशारे कैसे पढ़ें। Soul of the World हमेशा बोलती है — सवाल यह है कि क्या हम सुन रहे हैं।",
        quote: `"The secret of life is to fall seven times and to get up eight times." — Paulo Coelho`
      },
      {
        title: "Maktub — It Is Written",
        en: "The word Maktub, meaning 'it is written', reflects the belief that our lives have a path meant for us. But this is not passive fatalism — it is trust. Trust that the things happening to you are preparing you for something greater. Every detour is part of the route.",
        hi: "Maktub का अर्थ है 'यह लिखा हुआ है।' यह दर्शन बताता है कि हमारी ज़िंदगी का एक रास्ता पहले से तय है। लेकिन यह हार नहीं है — यह भरोसा है। भरोसा कि जो हो रहा है, वो आपको किसी बड़ी चीज़ के लिए तैयार कर रहा है।",
        quote: `"Maktub," the merchant said, finally. "It is written." — Paulo Coelho`
      },
      {
        title: "The Fear of Failure Is Worse Than Failure Itself",
        en: "Santiago faces many moments of fear — fear of losing what he has, fear of the unknown, fear of failure. Coelho shows that the fear of suffering is always worse than the actual suffering. Most people never begin their journey because the imagined risk feels greater than the real one.",
        hi: "Santiago कई बार डरता है — जो है उसे खोने का डर, अनजान रास्ते का डर, असफलता का डर। Coelho दिखाते हैं कि दर्द का डर हमेशा असली दर्द से बड़ा होता है। ज़्यादातर लोग अपना सफर शुरू ही नहीं करते क्योंकि काल्पनिक ख़तरा असली से बड़ा लगता है।",
        quote: `"Tell your heart that the fear of suffering is worse than the suffering itself." — Paulo Coelho`
      },
      {
        title: "The Present Moment Is the Only Treasure",
        en: "Through his long journey, Santiago learns that the present moment is where life actually happens. Regret lives in the past; anxiety lives in the future. The alchemist teaches him to be fully present — in each conversation, each desert step, each sunrise. Presence is the real gold.",
        hi: "अपने लंबे सफर में Santiago सीखता है कि ज़िंदगी सिर्फ इसी पल में होती है। अफ़सोस अतीत में रहता है, चिंता भविष्य में। Alchemist उसे सिखाता है — हर बातचीत में, हर कदम में, हर सूरज में पूरी तरह मौजूद रहो। उपस्थिति ही असली सोना है।",
        quote: `"One is loved because one is loved. No reason is needed for loving." — Paulo Coelho`
      },
      {
        title: "Everything Is One — The Soul of the World",
        en: "The Alchemist teaches the concept of the Soul of the World — a universal force that connects all living things. When Santiago learns to speak the language of the world, he realises that the wind, the desert, the sun, and his heart are all part of the same consciousness. We are never truly alone.",
        hi: "Alchemist Soul of the World की अवधारणा सिखाता है — एक ऐसी शक्ति जो हर जीवित चीज़ को जोड़ती है। जब Santiago दुनिया की भाषा समझने लगता है, तो उसे एहसास होता है कि हवा, रेगिस्तान, सूरज और उसका दिल एक ही चेतना के हिस्से हैं। हम कभी अकेले नहीं होते।",
        quote: `"I am the wind, the desert, the sea. I am the Soul of the World." — Paulo Coelho`
      },
      {
        title: "Love Does Not Stop You — It Frees You",
        en: "Santiago falls in love with Fatima in the desert and fears love will hold him back from his dream. But true love, Coelho shows, does not chain you — it gives you courage. Love that is real wants you to be fully alive, even if that means letting you go and trusting you will return.",
        hi: "Santiago को रेगिस्तान में Fatima से प्यार होता है और वो डरता है कि प्यार उसे रोक देगा। लेकिन Coelho दिखाते हैं कि सच्चा प्यार जंजीर नहीं — वो साहस देता है। सच्चा प्यार चाहता है कि आप पूरी तरह जीएं, चाहे इसके लिए आपको जाने देना पड़े।",
        quote: `"If what one finds is made of pure matter, it will never spoil. And one can always come back." — Paulo Coelho`
      },
      {
        title: "The Treasure Was Always Within",
        en: "After crossing deserts, oceans, and wars, Santiago discovers that the treasure he sought was back where he began. The journey was never wasted — it was necessary. You cannot discover what is within you without first going out into the world. The destination is the person you become on the way.",
        hi: "रेगिस्तान, समुद्र और युद्ध पार करने के बाद Santiago पाता है कि खज़ाना वहीं था जहाँ से उसने शुरुआत की थी। सफर बेकार नहीं था — वो ज़रूरी था। जब तक आप बाहर नहीं जाते, भीतर को नहीं खोज सकते। मंज़िल वो इंसान है जो आप रास्ते में बनते हैं।",
        quote: `"The treasure is found wherever the person is standing." — Paulo Coelho`
      },
      {
        title: "Beginners' Luck — The Universe Tests Your Commitment",
        en: "At the beginning of any dream, things often go well. This is what Coelho calls beginner's luck — the universe's way of showing you the dream is possible. But then comes the real test. Obstacles appear to check whether you are truly committed, or merely entertained by the idea.",
        hi: "किसी भी सपने की शुरुआत में चीज़ें अक्सर अच्छी जाती हैं। Coelho इसे beginner's luck कहते हैं — ब्रह्मांड का तरीका यह दिखाने का कि सपना मुमकिन है। फिर असली परीक्षा आती है। रुकावटें यह जाँचने आती हैं कि आप सच में committed हैं या सिर्फ कल्पना में मज़ा ले रहे थे।",
        quote: `"When you play cards the first time, you are almost sure to win. Beginner\'s luck." — Paulo Coelho`
      },
      {
        title: "To Realise One's Destiny Is a Person's Only Obligation",
        en: "Coelho's final and most enduring lesson: you have one true obligation in this life — to live out your Personal Legend. Not your parents' dream, not society's expectation, but yours. Every soul came into this world with a purpose. The greatest tragedy is to leave without ever discovering it.",
        hi: "Coelho का अंतिम और सबसे गहरा सबक: इस जीवन में आपका एक ही सच्चा दायित्व है — अपनी Personal Legend को जीना। अपने माँ-बाप का सपना नहीं, समाज की उम्मीद नहीं — बल्कि अपना। हर आत्मा एक उद्देश्य लेकर आई है। सबसे बड़ी त्रासदी है उसे जाने बिना चले जाना।",
        quote: `"To realize one\'s Personal Legend is a person\'s only real obligation." — Paulo Coelho`
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
    //
    lessons: [
      {
        title: "The Rich Don't Work for Money — Money Works for Them",
        en: "The poor and middle class work for money. The rich make money work for them. Most people spend their entire lives chasing a paycheck, never pausing to ask: what if instead of me working for money, I made money work for me? This mindset shift — from employee to investor — is where financial freedom begins.",
        hi: "गरीब और मध्यम वर्ग पैसे के लिए काम करते हैं। अमीर लोग पैसे को अपने लिए काम करवाते हैं। ज़्यादातर लोग पूरी ज़िंदगी तनख्वाह के पीछे भागते हैं, यह सोचे बिना कि पैसा उनके लिए काम कर सकता है। यही सोच बदलना — नौकरी से निवेशक बनना — वित्तीय स्वतंत्रता की शुरुआत है।",
        quote: `"The poor and the middle class work for money. The rich have money work for them." — Robert Kiyosaki`
      },
      {
        title: "Financial Literacy — Know the Difference Between Asset and Liability",
        en: "The single most important financial lesson: an asset puts money into your pocket, a liability takes money out. Rich people acquire assets. Poor people acquire liabilities thinking they are assets. Your house, your car, your gadgets — most of what people call 'assets' are actually liabilities draining their wealth every month.",
        hi: "सबसे ज़रूरी वित्तीय सबक: Asset वो है जो आपकी जेब में पैसा डाले, Liability वो है जो पैसा निकाले। अमीर लोग assets खरीदते हैं। गरीब लोग liabilities खरीदते हैं और सोचते हैं कि वो assets हैं। आपका घर, गाड़ी, gadgets — जिसे लोग 'asset' कहते हैं वो अक्सर उनकी दौलत हर महीने खींच रहे होते हैं।",
        quote: `"Rich people acquire assets. The poor and middle class acquire liabilities that they think are assets." — Robert Kiyosaki`
      },
      {
        title: "Mind Your Own Business — Build Your Asset Column",
        en: "Kiyosaki's advice is blunt: keep your day job, but start building your own asset column on the side. Don't spend your life making someone else rich. Real businesses, stocks, real estate, intellectual property — these are the assets that generate income while you sleep. Your job is your income; your business is your wealth.",
        hi: "Kiyosaki की सलाह सीधी है: नौकरी करते रहो, लेकिन साथ में अपना asset column बनाओ। पूरी ज़िंदगी किसी और को अमीर मत बनाओ। Business, stocks, real estate, intellectual property — ये वो assets हैं जो सोते वक्त भी कमाते हैं। नौकरी आपकी आमदनी है; business आपकी दौलत है।",
        quote: `"Keep your daytime job, but start buying real assets, not liabilities." — Robert Kiyosaki`
      },
      {
        title: "The History of Taxes — The Rich Don't Pay the Same Way",
        en: "Taxes were originally created to tax the rich, but over time the rich learned to use corporations and legal structures to minimise what they owe. The rich earn, spend, then pay tax. Employees earn, pay tax, then spend with what's left. Understanding how the tax system works — and using it legally — is a skill the wealthy cultivate and the poor ignore.",
        hi: "Tax मूल रूप से अमीरों पर लगाने के लिए बना था, लेकिन धीरे-धीरे अमीरों ने corporations और legal structures का उपयोग करके अपना tax कम करना सीख लिया। अमीर पहले कमाते हैं, खर्च करते हैं, फिर tax देते हैं। नौकरीपेशा पहले कमाते हैं, tax देते हैं, फिर जो बचता है उससे खर्च करते हैं। Tax system को समझना एक कला है जो अमीर सीखते हैं।",
        quote: `"Corporations earn, spend, and pay taxes on what is left. Employees earn, pay taxes, and then spend." — Robert Kiyosaki`
      },
      {
        title: "The Rich Invent Money — Overcome the Fear of Losing",
        en: "The greatest obstacle to wealth is not lack of money — it is fear and self-doubt. Most people play it safe, keep their money in a savings account, and never invest because they are terrified of losing. But Kiyosaki argues that real financial intelligence is the ability to create money out of opportunities that others cannot see because fear blinds them.",
        hi: "दौलत की राह में सबसे बड़ी रुकावट पैसे की कमी नहीं — डर और आत्म-संदेह है। ज़्यादातर लोग safe खेलते हैं, savings account में पैसा रखते हैं, और नुकसान के डर से कभी invest नहीं करते। लेकिन Kiyosaki कहते हैं कि असली financial intelligence उन अवसरों से पैसा बनाने की क्षमता है जो डर की वजह से दूसरों को दिखते ही नहीं।",
        quote: `"It\'s not how much money you make, but how much money you keep, how hard it works for you." — Robert Kiyosaki`
      },
      {
        title: "Work to Learn — Not Just to Earn",
        en: "Kiyosaki recommends taking jobs not just for the salary but for the skills they teach. Sales, marketing, accounting, investing, communication — these are the skills that build wealth. Most people specialise in one skill and feel secure, but that security is fragile. The rich are generalists who can see the whole financial picture.",
        hi: "Kiyosaki सलाह देते हैं कि नौकरी सिर्फ तनख्वाह के लिए नहीं, बल्कि सीखने के लिए करो। Sales, marketing, accounting, investing, communication — ये वो skills हैं जो दौलत बनाती हैं। ज़्यादातर लोग एक skill में माहिर होकर safe महसूस करते हैं, लेकिन वो सुरक्षा नाजुक है। अमीर लोग पूरी financial तस्वीर देख सकते हैं।",
        quote: `"Job is an acronym for Just Over Broke." — Robert Kiyosaki`
      },
      {
        title: "Overcome Obstacles — The Five Roadblocks to Financial Freedom",
        en: "Even financially literate people fail to build wealth because of five roadblocks: fear of losing money, cynicism about what others will think, laziness disguised as busyness, bad habits of paying everyone else before yourself, and arrogance — thinking what you don't know doesn't matter. Recognising these in yourself is half the battle.",
        hi: "वित्तीय रूप से समझदार लोग भी इन पाँच रुकावटों से दौलत नहीं बना पाते: पैसा खोने का डर, दूसरों की राय की चिंता, व्यस्तता की आड़ में आलस्य, पहले खुद को नहीं दूसरों को भुगतान करने की आदत, और घमंड — यह सोचना कि जो नहीं जानते वो मायने नहीं रखता। इन्हें खुद में पहचानना आधी जीत है।",
        quote: `"The primary difference between a rich person and a poor person is how they manage fear." — Robert Kiyosaki`
      },
      {
        title: "Pay Yourself First — The Golden Rule of Personal Finance",
        en: "Before paying your bills, before paying anyone else, pay yourself first — put money into your asset column. Most people pay everyone else first and save what's left, which is usually nothing. The pressure of not having enough forces you to find new income. It builds discipline, resourcefulness, and the habit of wealth.",
        hi: "बिल भरने से पहले, किसी और को देने से पहले — पहले खुद को दो। अपने asset column में पैसा डालो। ज़्यादातर लोग पहले सबको देते हैं और जो बचता है उसे बचाते हैं — जो अक्सर कुछ नहीं होता। खुद के लिए पैसे न होने का दबाव आपको नई आमदनी खोजने पर मजबूर करता है। यही अनुशासन और दौलत की आदत बनाता है।",
        quote: `"Pay yourself first. Invest in your education and your assets before you pay your bills." — Robert Kiyosaki`
      },
      {
        title: "Use Assets to Buy Luxuries — Not Your Salary",
        en: "Want a luxury car? A vacation? Fine jewellery? Don't buy it with your paycheck. Instead, build or buy an asset first — let that asset generate the income to pay for the luxury. This single discipline separates those who build wealth from those who spend it before it arrives. The luxury feels better when it's truly paid for by your money working.",
        hi: "luxury car चाहिए? Vacation? Fine jewellery? इसे तनख्वाह से मत खरीदो। पहले एक asset बनाओ — उसे उस luxury के लिए income generate करने दो। यही एक अनुशासन उन लोगों को अलग करता है जो दौलत बनाते हैं उनसे जो आने से पहले ही खर्च कर देते हैं। जब आपका पैसा आपके लिए काम करता है तो luxury का मज़ा और भी ज़्यादा होता है।",
        quote: `"If you want to be rich, you need to think like a rich person." — Robert Kiyosaki`
      },
      {
        title: "Teach Your Children About Money — The School System Won't",
        en: "Schools teach children to be good employees — how to study, pass exams, and get a job. They do not teach financial literacy, investing, or how money actually works. Kiyosaki's deepest message is that the greatest gift you can give a child is not money — it is financial education. The cycle of poverty is broken not by hard work alone, but by knowledge.",
        hi: "स्कूल बच्चों को अच्छा employee बनना सिखाते हैं — पढ़ना, exam पास करना, नौकरी पाना। वो financial literacy, investing या पैसा कैसे काम करता है — यह नहीं सिखाते। Kiyosaki का सबसे गहरा संदेश यही है: बच्चे को सबसे बड़ा तोहफा पैसा नहीं — financial education है। गरीबी का चक्र सिर्फ मेहनत से नहीं, ज्ञान से टूटता है।",
        quote: `"The most important investment you can make is in yourself and your financial education." — Robert Kiyosaki`
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
    //
    lessons: [
      {
        title: "Don't Criticise, Condemn or Complain",
        en: "Criticism is futile because it puts people on the defensive and makes them justify themselves. It wounds their pride, hurts their sense of importance, and arouses resentment. Carnegie's first and most fundamental principle: if you want to change someone, never start with blame. People don't change through criticism — they change when they feel understood.",
        hi: "आलोचना व्यर्थ है — यह लोगों को defensive बना देती है और उन्हें खुद को सही साबित करने पर मजबूर करती है। यह उनके अहंकार को चोट पहुँचाती है और नाराज़गी पैदा करती है। Carnegie का पहला और सबसे बुनियादी सिद्धांत: किसी को बदलना हो तो कभी दोष से शुरुआत मत करो। लोग आलोचना से नहीं — समझे जाने पर बदलते हैं।",
        quote: `"Criticism is dangerous, because it wounds a person\'s precious pride, hurts his sense of importance." — Dale Carnegie`
      },
      {
        title: "Give Honest and Sincere Appreciation",
        en: "The deepest craving in human nature is the desire to feel important and appreciated. Not flattery — that is hollow and is seen through quickly. Carnegie calls for sincere, genuine appreciation: noticing what someone does well and telling them so. This simple act costs nothing and yet it is the foundation of every strong relationship, personal and professional.",
        hi: "इंसान की सबसे गहरी चाहत है — महत्वपूर्ण और सराहा हुआ महसूस करना। चापलूसी नहीं — वो खोखली होती है और लोग जल्दी पकड़ लेते हैं। Carnegie वास्तविक, दिल से की गई प्रशंसा की बात करते हैं: जब कोई कुछ अच्छा करे, तो उसे बताओ। यह सरल काम कुछ नहीं माँगता — पर हर मज़बूत रिश्ते की नींव यही है।",
        quote: `"Give honest and sincere appreciation — not flattery, but the real desire to acknowledge someone\'s worth." — Dale Carnegie`
      },
      {
        title: "Arouse in the Other Person an Eager Want",
        en: "You can get anyone to do almost anything if you frame it in terms of what they want. Carnegie teaches that the only way to influence people is to talk about what they want and show them how to get it. Stop thinking about what you want. Ask: what does this person want? Then connect your request to their desire. This is not manipulation — it is empathy in action.",
        hi: "आप किसी को भी कुछ करवा सकते हैं अगर उसे उनकी इच्छा के नज़रिये से पेश करें। Carnegie सिखाते हैं कि दूसरों को प्रभावित करने का एकमात्र तरीका है — उनकी चाहत के बारे में बात करना और दिखाना कि वो कैसे पूरी होगी। अपनी इच्छा छोड़ो और पूछो: इस इंसान को क्या चाहिए? फिर अपनी बात को उनकी चाहत से जोड़ो। यह हेरफेर नहीं — यह empathy है।",
        quote: `"The only way to influence other people is to talk about what they want and show them how to get it." — Dale Carnegie`
      },
      {
        title: "Become Genuinely Interested in Other People",
        en: "You can make more friends in two months by becoming genuinely interested in other people than you can in two years by trying to get other people interested in you. People are not interested in you or me — they are interested in themselves. Stop performing and start listening. Ask questions. Remember details. Show that you care about their world, not just yours.",
        hi: "दो महीने में दूसरों में सच्ची दिलचस्पी लेकर आप उससे ज़्यादा दोस्त बना सकते हैं, जितने दो साल में खुद को interesting दिखाने की कोशिश से बनेंगे। लोग आप में या मुझ में नहीं — खुद में रुचि रखते हैं। दिखावा छोड़ो, सुनो। सवाल पूछो। उनकी बातें याद रखो। दिखाओ कि उनकी दुनिया आपके लिए मायने रखती है।",
        quote: `"You can make more friends in two months by being interested in them than in two years trying to get them interested in you." — Dale Carnegie`
      },
      {
        title: "Smile — The Most Powerful Greeting in the World",
        en: "A smile costs nothing but creates everything. It enriches those who receive it without impoverishing those who give it. Carnegie devotes an entire chapter to the smile because actions speak louder than words — and a genuine smile says: I am happy to see you, you matter to me. It is the simplest, cheapest, and most powerful relationship-building tool there is.",
        hi: "एक मुस्कान की कोई कीमत नहीं — पर यह सब कुछ बना सकती है। यह उसे समृद्ध करती है जो इसे पाता है, और देने वाले का कुछ नहीं जाता। Carnegie ने इस पर पूरा अध्याय लिखा क्योंकि कार्य शब्दों से ज़्यादा बोलते हैं — और एक सच्ची मुस्कान कहती है: मैं आपको देखकर खुश हूँ, आप मेरे लिए मायने रखते हैं। यह सबसे सरल, सबसे सस्ता और सबसे शक्तिशाली रिश्ता-निर्माण का साधन है।",
        quote: `"A smile costs nothing, but creates much. It enriches those who receive it without impoverishing those who give." — Dale Carnegie`
      },
      {
        title: "Remember That a Person's Name Is the Sweetest Sound",
        en: "A person's name is, to that person, the sweetest and most important sound in any language. Using someone's name in conversation makes them feel seen, respected, and valued. Carnegie trained himself to remember names as a deliberate habit. Forgetting a name sends a clear signal: you are not important enough for me to remember. Remembering it says the opposite.",
        hi: "किसी के लिए उनके अपने नाम से ज़्यादा मीठी और महत्वपूर्ण कोई आवाज़ नहीं। बातचीत में किसी का नाम लेना उन्हें देखा हुआ, सम्मानित और मूल्यवान महसूस कराता है। Carnegie ने जानबूझकर नाम याद रखने की आदत बनाई। नाम भूलना साफ संदेश देता है: आप मेरे लिए याद करने लायक नहीं। याद रखना इसका उल्टा कहता है।",
        quote: `"A person\'s name is to that person, the sweetest, most important sound in any language." — Dale Carnegie`
      },
      {
        title: "Be a Good Listener — Encourage Others to Talk About Themselves",
        en: "Exclusive attention paid to the person who is speaking to you is very rare and very rewarding. Most people do not listen with the intent to understand — they listen with the intent to reply. Carnegie found that the secret to being an interesting conversationalist is to be an interested listener. Ask questions the other person will enjoy answering and listen without interrupting.",
        hi: "जो आपसे बात कर रहा हो, उसे पूरा ध्यान देना बहुत दुर्लभ है — और बहुत मूल्यवान भी। ज़्यादातर लोग समझने के लिए नहीं, जवाब देने के लिए सुनते हैं। Carnegie ने पाया कि एक interesting वार्ताकार बनने का रहस्य है — एक interested श्रोता बनना। ऐसे सवाल पूछो जिनका जवाब देकर सामने वाला खुश हो, और बिना टोके सुनो।",
        quote: `"To be interesting, be interested. Ask questions the other person will enjoy answering." — Dale Carnegie`
      },
      {
        title: "Talk in Terms of the Other Person's Interests",
        en: "Every person you meet knows something you don't and has something they care deeply about. Before any important conversation, think: what does this person love? What gets them excited? Then begin there. Theodore Roosevelt stayed up the night before any meeting to read about his guest's interests. When you talk to someone about what they love, their eyes light up — and they remember you.",
        hi: "आप जिससे भी मिलते हैं, वो कुछ ऐसा जानता है जो आप नहीं जानते — और कुछ ऐसा है जो उसे गहराई से प्रिय है। किसी भी ज़रूरी बातचीत से पहले सोचो: इस इंसान को क्या पसंद है? क्या चीज़ उसे उत्साहित करती है? वहाँ से शुरू करो। Roosevelt हर मुलाकात से पहले अपने मेहमान की रुचियाँ पढ़ते थे। जब आप किसी से उनकी पसंद की बात करते हैं, उनकी आँखें चमक उठती हैं — और वो आपको याद रखते हैं।",
        quote: `"Talk to someone about themselves and they\'ll listen for hours." — Dale Carnegie`
      },
      {
        title: "Make the Other Person Feel Important — and Do It Sincerely",
        en: "The desire to be important is one of the greatest human motivations. Almost everything people do — the clothes they wear, the car they drive, the stories they tell — is driven by the desire to feel significant. Carnegie's principle: make people feel important and do it sincerely. Notice their strengths. Acknowledge their contributions. A person treated as important will rise to meet your expectations of them.",
        hi: "महत्वपूर्ण महसूस करने की चाहत इंसान की सबसे बड़ी प्रेरणाओं में से एक है। लोग जो पहनते हैं, जो गाड़ी चलाते हैं, जो कहानियाँ सुनाते हैं — सब में यही भाव है कि मुझे महत्वपूर्ण माना जाए। Carnegie का सिद्धांत: लोगों को महत्वपूर्ण महसूस कराओ — और सच्चाई से। उनकी खूबियाँ देखो। उनके योगदान को मानो। जिसे महत्वपूर्ण माना जाए, वो उस उम्मीद पर खरा उतरने की कोशिश करता है।",
        quote: `"The deepest principle in human nature is the craving to be appreciated." — Dale Carnegie`
      },
      {
        title: "If You're Wrong, Admit It Quickly and Emphatically",
        en: "When you know you are wrong, admit it clearly, openly, and before the other person has a chance to say it. This takes the wind out of any argument and disarms the other person completely. By criticising yourself, you take away the need for anyone else to do so. People who can admit their mistakes earn far more respect and trust than those who defend the indefensible. It is not weakness — it is strength.",
        hi: "जब आप जानते हों कि आप गलत हैं, तो इसे साफ और खुलकर स्वीकार करो — इससे पहले कि दूसरा कहे। यह हर बहस की हवा निकाल देता है और सामने वाले को पूरी तरह निरस्त्र कर देता है। खुद की आलोचना करने से किसी और को करने की ज़रूरत नहीं रहती। जो लोग अपनी गलती मान सकते हैं वो उन लोगों से कहीं ज़्यादा सम्मान और विश्वास कमाते हैं जो गलत बात का भी बचाव करते हैं। यह कमज़ोरी नहीं — यह ताकत है।",
        quote: `"If you are wrong, admit it quickly and emphatically. There\'s magic in it." — Dale Carnegie`
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
    //
    lessons: [
      {
        title: "Habit 1 — Be Proactive: You Are the Author, Not the Actor",
        en: "Between stimulus and response, there is a space. In that space lies your freedom — your power to choose. Covey's first and most foundational habit is this: you are not a product of your circumstances, you are a product of your choices. Proactive people focus their energy on what they can influence — their own attitude, effort, and actions. Reactive people spend their energy blaming the weather, their boss, their past. The moment you accept full responsibility for your life, everything changes.",
        hi: "हर घटना और हमारी प्रतिक्रिया के बीच एक पल का अंतर होता है। उसी अंतर में हमारी स्वतंत्रता है — चुनाव करने की शक्ति। Covey की पहली और सबसे ज़रूरी आदत यह है: आप अपनी परिस्थितियों की उपज नहीं — आप अपने चुनावों की उपज हैं। Proactive लोग अपनी ऊर्जा उस पर लगाते हैं जो उनके नियंत्रण में है — अपना नज़रिया, मेहनत, और कार्य। Reactive लोग मौसम, बॉस, और अपने अतीत को दोष देने में ऊर्जा खर्च करते हैं। जिस पल आप अपनी ज़िंदगी की पूरी ज़िम्मेदारी लेते हैं — सब कुछ बदल जाता है।",
        quote: `"Between stimulus and response there is a space. In that space is our power to choose our response." — Stephen R. Covey`
      },
      {
        title: "Habit 2 — Begin With the End in Mind: Live by Design, Not by Default",
        en: "All things are created twice — first in the mind, then in the world. Before you build a house, you draw a blueprint. Before you live a life, you must know what kind of life you want to build. Covey asks you to imagine your own funeral and think: what would you want the people who loved you to say? That answer is your personal mission statement. Most people spend their lives climbing a ladder — only to find at the top that it was leaning against the wrong wall.",
        hi: "हर चीज़ दो बार बनती है — पहले मन में, फिर दुनिया में। घर बनाने से पहले नक्शा बनता है। ज़िंदगी जीने से पहले यह जानना ज़रूरी है कि आप किस तरह की ज़िंदगी बनाना चाहते हैं। Covey आपसे पूछते हैं — कल्पना करो कि आपका अंतिम संस्कार हो रहा है। आप चाहते हैं कि जो लोग आपसे प्यार करते थे, वो आपके बारे में क्या कहें? वही जवाब आपका Personal Mission Statement है। ज़्यादातर लोग ज़िंदगी भर सीढ़ी चढ़ते रहते हैं — और ऊपर पहुँचकर पाते हैं कि सीढ़ी गलत दीवार पर टिकी थी।",
        quote: `"Begin with the end in mind." — Stephen R. Covey`
      },
      {
        title: "Habit 3 — Put First Things First: Manage Your Life, Not Just Your Time",
        en: "Habit 1 says you are the creator. Habit 2 says create the blueprint. Habit 3 is the daily execution of that vision. Covey introduces his famous Time Management Matrix — four quadrants of Urgent/Not Urgent and Important/Not Important. Highly effective people ruthlessly prioritise Quadrant II: things that are important but not yet urgent — relationships, planning, health, growth. Most people live in Quadrant I (crisis) or Quadrant IV (distraction). The secret is not to manage time — it is to manage yourself.",
        hi: "Habit 1 कहती है — आप रचयिता हैं। Habit 2 कहती है — नक्शा बनाओ। Habit 3 है उस दृष्टि का रोज़ाना क्रियान्वयन। Covey अपना प्रसिद्ध Time Management Matrix पेश करते हैं — चार भाग: Urgent/Not Urgent और Important/Not Important। अत्यधिक प्रभावशाली लोग Quadrant II पर ध्यान देते हैं: जो ज़रूरी है पर अभी आपातकाल नहीं — रिश्ते, योजना, स्वास्थ्य, विकास। ज़्यादातर लोग Quadrant I (संकट) या Quadrant IV (विचलन) में रहते हैं। राज़ समय प्रबंधन नहीं — खुद को manage करना है।",
        quote: `"The key is not to prioritise what\'s on your schedule, but to schedule your priorities." — Stephen R. Covey`
      },
      {
        title: "Habit 4 — Think Win-Win: Success Is Not a Finite Pie",
        en: "Most of us were taught to see life as a competition — if you win, I lose. Covey calls this a Scarcity Mentality. Win-Win is a belief in the Abundance Mentality: there is enough success, recognition, and joy for everyone. A Win-Win agreement says: I will not sacrifice your interests to serve mine, and I will not sacrifice mine to serve yours — we will find a solution that genuinely works for both of us. This is not compromise. It is a higher standard. People with Win-Win thinking build relationships that compound over time.",
        hi: "हम में से ज़्यादातर को यह सिखाया गया है कि ज़िंदगी एक प्रतियोगिता है — तुम जीते तो मैं हारा। Covey इसे Scarcity Mentality कहते हैं। Win-Win एक Abundance Mentality में विश्वास है: सफलता, सम्मान और खुशी सबके लिए पर्याप्त है। Win-Win का मतलब है — मैं अपने हित के लिए तुम्हारा नुकसान नहीं करूँगा, और तुम्हारे लिए अपना भी नहीं। हम एक ऐसा रास्ता निकालेंगे जो दोनों के लिए सही हो। यह compromise नहीं — यह एक ऊँचा मानदंड है। Win-Win सोच वाले लोग ऐसे रिश्ते बनाते हैं जो समय के साथ और मज़बूत होते हैं।",
        quote: `"Win-Win is not a technique; it\'s a total philosophy of human interaction." — Stephen R. Covey`
      },
      {
        title: "Habit 5 — Seek First to Understand, Then to Be Understood",
        en: "Most people do not listen with the intent to understand — they listen with the intent to reply. They are either speaking or preparing to speak. Covey calls this Autobiographical Listening: we filter everything through our own story and experience. Empathic listening means you listen with the intent to truly understand the other person's world — their feelings, their fears, their frame of reference. Only when someone feels genuinely heard will they be open to hearing you. This is the most powerful habit for building trust and resolving conflict.",
        hi: "ज़्यादातर लोग समझने के लिए नहीं, जवाब देने के लिए सुनते हैं। वे या तो बोल रहे हैं या बोलने की तैयारी में हैं। Covey इसे Autobiographical Listening कहते हैं — हम सब कुछ अपनी कहानी और अनुभव के चश्मे से देखते हैं। Empathic listening का मतलब है — आप सच में समझने के इरादे से सुनते हैं: उनकी भावनाएं, उनके डर, उनका नज़रिया। जब कोई सच में सुना हुआ महसूस करता है, तभी वो आपको सुनने के लिए तैयार होता है। यह आदत विश्वास बनाने और संघर्ष सुलझाने की सबसे शक्तिशाली आदत है।",
        quote: `"Most people do not listen with the intent to understand; they listen with the intent to reply." — Stephen R. Covey`
      },
      {
        title: "Habit 6 — Synergise: The Whole Is Greater Than the Sum of Its Parts",
        en: "Synergy is what happens when the combined result of two people working together is greater than what either could achieve alone. It is not 1+1=2. It is 1+1=3, or 10, or 100. Synergy is born when people with different strengths, perspectives, and experiences genuinely value each other's differences and build on them. It requires the vulnerability of Habit 4 and the listening of Habit 5. The result is creative solutions that no one person could have imagined alone. The greatest achievements in history were born in synergy.",
        hi: "Synergy वो होता है जब दो लोग मिलकर काम करें और जो नतीजा आए वो अकेले किसी के काम से बड़ा हो। यह 1+1=2 नहीं — यह 1+1=3, या 10, या 100 है। Synergy तब पैदा होती है जब अलग-अलग ताकत, नज़रिये और अनुभव वाले लोग एक-दूसरे के अंतर को सच में महत्व दें और उस पर निर्माण करें। इसके लिए Habit 4 की Win-Win सोच और Habit 5 की empathic सुनने की ज़रूरत है। नतीजा होते हैं ऐसे रचनात्मक समाधान जो अकेला कोई सोच भी नहीं सकता था। इतिहास की सबसे बड़ी उपलब्धियाँ Synergy में जन्मी हैं।",
        quote: `"Synergy is the highest activity in all life — the true test and manifestation of all the other habits combined." — Stephen R. Covey`
      },
      {
        title: "Habit 7 — Sharpen the Saw: Renew Yourself Before You Break",
        en: "Imagine a man desperately sawing a log. A passer-by suggests he stop to sharpen his saw. 'I don't have time to sharpen the saw,' the man replies, 'I'm too busy sawing.' This is Habit 7. It is the habit of continuous self-renewal across four dimensions: physical (exercise, nutrition, rest), mental (reading, learning, writing), social-emotional (relationships, empathy, service), and spiritual (values, meditation, purpose). You cannot give from an empty cup. The most effective people treat renewal not as a luxury but as a sacred obligation to themselves and those who depend on them.",
        hi: "एक आदमी बड़ी मेहनत से लकड़ी काट रहा है। एक राहगीर सुझाता है — रुको, पहले आरी तेज़ करो। वो आदमी कहता है: 'मेरे पास आरी तेज़ करने का वक्त नहीं, मैं बहुत व्यस्त हूँ लकड़ी काटने में।' यही है Habit 7। यह चार आयामों में लगातार खुद को नवीनीकृत करने की आदत है: शारीरिक (व्यायाम, पोषण, नींद), मानसिक (पढ़ना, सीखना, लिखना), सामाजिक-भावनात्मक (रिश्ते, empathy, सेवा), और आध्यात्मिक (मूल्य, ध्यान, उद्देश्य)। खाली कप से कुछ नहीं दे सकते। सबसे प्रभावशाली लोग खुद को renew करना एक ज़िम्मेदारी मानते हैं — अपने प्रति और उन सभी के प्रति जो उन पर निर्भर हैं।",
        quote: `"Sharpen the saw means preserving and enhancing the greatest asset you have — you." — Stephen R. Covey`
      },
      {
        title: "Private Victory Comes Before Public Victory",
        en: "The first three habits — Be Proactive, Begin With the End in Mind, and Put First Things First — Covey calls the Private Victory. They are inward habits of self-mastery: controlling your responses, clarifying your values, managing your own time. Only after you have won the battle with yourself are you ready for the Public Victory — the three outward habits of working with others (Win-Win, Seek First to Understand, Synergise). You cannot build deep relationships from a foundation of inner chaos. Master yourself first.",
        hi: "पहली तीन आदतें — Proactive बनो, अंत को ध्यान में रखो, पहले ज़रूरी काम करो — Covey इन्हें Private Victory कहते हैं। ये आत्म-नियंत्रण की अंदरूनी आदतें हैं: अपनी प्रतिक्रियाओं पर काबू, अपने मूल्यों की स्पष्टता, अपने समय का प्रबंधन। जब आप खुद पर जीत हासिल कर लेते हैं, तभी आप Public Victory के लिए तैयार होते हैं — दूसरों के साथ काम करने की तीन बाहरी आदतें। अंदरूनी अव्यवस्था की नींव पर गहरे रिश्ते नहीं बन सकते। पहले खुद को जीतो।",
        quote: `"Private Victory precedes Public Victory. You can\'t invert that process any more than you can harvest a crop before you plant it." — Stephen R. Covey`
      },
      {
        title: "Character Ethic vs. Personality Ethic: Roots vs. Branches",
        en: "Covey opens the book with a crucial observation: modern self-help is obsessed with the Personality Ethic — techniques, quick fixes, how to dress, how to smile, how to network. But for most of human history, the foundation of success literature was the Character Ethic: integrity, humility, courage, patience, and service. Personality Ethic is the branches; Character Ethic is the roots. Without deep roots, no amount of leaf-polishing will keep the tree standing in a storm. Covey's entire framework is a return to character as the foundation of lasting effectiveness.",
        hi: "Covey किताब की शुरुआत एक महत्वपूर्ण अवलोकन से करते हैं: आधुनिक self-help Personality Ethic पर ज़्यादा ध्यान देती है — तकनीक, quick fixes, कैसे कपड़े पहनें, कैसे मुस्कुराएं, कैसे networking करें। लेकिन इतिहास में अधिकांश समय सफलता का आधार Character Ethic था: ईमानदारी, विनम्रता, साहस, धैर्य और सेवा। Personality Ethic है शाखाएं; Character Ethic है जड़ें। गहरी जड़ों के बिना, पत्तियों को कितना भी चमकाओ — तूफान में पेड़ टिकेगा नहीं। Covey का पूरा framework एक वापसी है — चरित्र को दीर्घकालिक प्रभावशीलता की नींव के रूप में।",
        quote: `"The character has to be there — techniques and tactics of social influence without character are manipulation." — Stephen R. Covey`
      },
      {
        title: "The Paradigm Shift: Change How You See, Change How You Act",
        en: "A paradigm is the lens through which you see the world — your assumptions, your mental maps, your deeply held beliefs about how things are. Covey shows that most personal and organisational problems are not problems of attitude or behaviour — they are problems of perception. He illustrates this with the story of a man on a subway whose children are running wild — and the moment he learns the man just lost his wife, the entire situation is seen differently. You don't just see with your eyes; you see with your whole being. Change the lens — change the world.",
        hi: "Paradigm वो चश्मा है जिससे आप दुनिया देखते हैं — आपकी मान्यताएं, मानसिक नक्शे, और गहरे विश्वास कि चीज़ें कैसी हैं। Covey दिखाते हैं कि अधिकांश व्यक्तिगत और संगठनात्मक समस्याएं attitude या behavior की नहीं — perception की समस्याएं हैं। वे subway की एक कहानी सुनाते हैं — एक आदमी के बच्चे शोर मचा रहे हैं, और जब पता चलता है कि उसकी पत्नी अभी गुज़री है, तो पूरा दृश्य अलग नज़र आता है। आप सिर्फ आँखों से नहीं देखते — पूरे अस्तित्व से देखते हैं। चश्मा बदलो — दुनिया बदल जाएगी।",
        quote: `"We see the world not as it is, but as we are — or as we are conditioned to see it." — Stephen R. Covey`
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
  //
  lessons: [
    {
      title: "Deep Work vs. Shallow Work — Know the Difference",
      en: "Deep Work is professional activity performed in a state of distraction-free concentration that pushes your cognitive capabilities to their limit. Shallow Work is non-cognitively demanding, logistical-style tasks often performed while distracted — emails, meetings, messages. The tragedy of the modern workplace is that we have filled our days with Shallow Work and wonder why we feel busy but not productive.",
      hi: "Deep Work वो काम है जो पूरी एकाग्रता और बिना किसी रुकावट के किया जाए — जो आपकी मानसिक क्षमता को उसकी सीमा तक ले जाए। Shallow Work वो है जो बिखरे ध्यान से होता है — ईमेल, मीटिंग्स, मैसेजेस। आधुनिक कार्यस्थल की सबसे बड़ी त्रासदी यह है कि हमने अपना पूरा दिन Shallow Work से भर लिया है — और फिर सोचते हैं कि व्यस्त होने के बाद भी आगे क्यों नहीं बढ़ रहे।",
      quote: `"Deep Work: Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit." — Cal Newport`
    },
    {
      title: "Deep Work Is Becoming Rare — and More Valuable",
      en: "As the economy becomes more complex and information-driven, the ability to do Deep Work is becoming increasingly rare. Simultaneously, it is becoming more valuable. Those who can master deep focus will produce at an elite level and thrive. Those who cannot will struggle to compete. Newport argues that the ability to perform Deep Work is the superpower of the 21st century.",
      hi: "जैसे-जैसे अर्थव्यवस्था जटिल और सूचना-आधारित होती जा रही है, Deep Work की क्षमता दुर्लभ होती जा रही है — और साथ ही अधिक मूल्यवान भी। जो लोग गहरे focus में काम करना सीख लेंगे, वो शीर्ष पर पहुँचेंगे। जो नहीं सीखेंगे, वो पीछे रह जाएंगे। Newport कहते हैं कि Deep Work 21वीं सदी की सबसे बड़ी महाशक्ति है।",
      quote: `"The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable." — Cal Newport`
    },
    {
      title: "The Deep Work Hypothesis — A Life Well Lived",
      en: "Newport's central thesis is this: the ability to do Deep Work is not just a career advantage — it is the foundation of a meaningful life. Craftsmanship, mastery, and the satisfaction of doing difficult work well are sources of deep fulfillment that no amount of social media scrolling can replicate. A deep life, Newport argues, is a good life.",
      hi: "Newport का मूल विचार यह है: Deep Work की क्षमता सिर्फ एक career advantage नहीं — यह एक सार्थक जीवन की नींव है। किसी कठिन काम में महारत हासिल करने का संतोष, जो social media scrolling से कभी नहीं मिल सकता। Newport कहते हैं — एक गहरा जीवन ही एक अच्छा जीवन है।",
      quote: `"A deep life is a good life." — Cal Newport`
    },
    {
      title: "Choose Your Deep Work Philosophy",
      en: "Newport outlines four approaches to scheduling Deep Work. The Monastic Philosophy means eliminating all shallow obligations entirely. The Bimodal Philosophy divides time between deep and shallow — deep for days or weeks at a stretch. The Rhythmic Philosophy builds a daily habit of deep work at a fixed time. The Journalistic Philosophy fits deep work whenever possible. For most people, the Rhythmic approach — a fixed daily block — is the most practical and sustainable.",
      hi: "Newport Deep Work schedule करने के चार तरीके बताते हैं। Monastic Philosophy: सभी shallow कामों को पूरी तरह छोड़ दो। Bimodal Philosophy: कुछ दिन या हफ्ते सिर्फ deep work के लिए। Rhythmic Philosophy: रोज़ एक निश्चित समय पर deep work का block। Journalistic Philosophy: जब भी मौका मिले, deep work करो। ज़्यादातर लोगों के लिए Rhythmic approach — रोज़ एक fixed block — सबसे practical और टिकाऊ है।",
      quote: `"The key to developing a deep work habit is to move beyond good intentions and add routines and rituals." — Cal Newport`
    },
    {
      title: "Ritualize — Build Your Deep Work Environment",
      en: "Waiting for inspiration or motivation to do deep work is a losing strategy. Instead, build rituals that remove the need for willpower. Decide in advance: where will you work? For how long? How will you handle distractions? What will you do when you get stuck? The more you ritualize the beginning of a deep work session, the less mental energy you waste on deciding how to start — and the more you have for the work itself.",
      hi: "Deep work के लिए प्रेरणा या motivation का इंतज़ार करना एक हारी हुई रणनीति है। इसकी जगह — ऐसी rituals बनाएं जो willpower की ज़रूरत ही न रहने दें। पहले से तय करें: कहाँ काम करेंगे? कितनी देर? distraction आने पर क्या करेंगे? अटकने पर क्या? जितना ज़्यादा आप शुरुआत को ritualize करेंगे, उतनी कम मानसिक ऊर्जा शुरू करने में जाएगी — और उतनी ज़्यादा काम में।",
      quote: `"Great creative minds think like artists but work like accountants." — Cal Newport`
    },
    {
      title: "Embrace Boredom — Train Your Attention",
      en: "If you seek distraction the moment you feel bored — reaching for your phone, opening social media — you are training your brain to be incapable of deep focus. Newport argues that the ability to concentrate is like a muscle: it must be trained. Embrace boredom. Resist the urge to reach for your phone in every idle moment. Let your mind wander. This is not wasted time — it is the training ground for Deep Work.",
      hi: "जब भी बोरियत महसूस हो और आप तुरंत फोन उठाएं या social media खोलें — आप अपने दिमाग को deep focus के लिए अनुपयुक्त बना रहे हैं। Newport कहते हैं कि concentrate करने की क्षमता एक मांसपेशी की तरह है — इसे train करना होगा। बोरियत को गले लगाओ। हर खाली पल में फोन न उठाओ। दिमाग को भटकने दो। यह बर्बाद समय नहीं — Deep Work की training ground है।",
      quote: `"Efforts to deepen your focus will struggle if you don\'t simultaneously wean your mind from a dependence on distraction." — Cal Newport`
    },
    {
      title: "Quit Social Media — Or Be Ruthlessly Selective",
      en: "Newport does not say social media is evil. He says you should only use a tool if its benefits substantially outweigh its harms. Most people adopt every new platform without question. Newport recommends the Craftsman Approach: identify your core goals, then only use tools that have a significant positive impact on those goals. For most professionals, quitting or severely limiting social media leads to more deep work and a better life.",
      hi: "Newport यह नहीं कहते कि social media बुरा है। वो कहते हैं — किसी tool का उपयोग तभी करो जब उसके फायदे नुकसान से काफी ज़्यादा हों। ज़्यादातर लोग बिना सोचे हर नया platform अपना लेते हैं। Newport Craftsman Approach सुझाते हैं: अपने मुख्य लक्ष्य तय करो, फिर सिर्फ उन tools का उपयोग करो जो उन लक्ष्यों पर सकारात्मक प्रभाव डालते हों। ज़्यादातर professionals के लिए social media छोड़ना या सीमित करना — Deep Work और बेहतर जीवन की ओर पहला कदम है।",
      quote: `"The ability to concentrate without distraction is becoming increasingly valuable — and increasingly rare." — Cal Newport`
    },
    {
      title: "Drain the Shallows — Protect Your Deep Work Time",
      en: "Newport recommends scheduling every minute of your workday in advance. This is not about rigidity — it is about intention. When you plan your day, you are forced to confront how much time you actually have and how much of it is being consumed by shallow tasks. The goal is not to eliminate shallow work entirely — it is necessary. The goal is to confine it to its proper place so that it does not crowd out the deep work that matters most.",
      hi: "Newport सलाह देते हैं कि अपने पूरे कार्यदिवस को पहले से schedule करें। यह कठोरता नहीं — यह इरादा है। जब आप दिन plan करते हैं, तो आप देखते हैं कि आपके पास actually कितना समय है और उसमें से कितना shallow कामों में जा रहा है। लक्ष्य shallow work को पूरी तरह हटाना नहीं — वो ज़रूरी है। लक्ष्य है उसे उसकी सही जगह तक सीमित रखना ताकि वो deep work को दबा न सके।",
      quote: `"Schedule every minute of your day. Without this, it\'s too easy to allow the shallow to crowd out the deep." — Cal Newport`
    },
    {
      title: "The 4DX Framework — Execute on the Wildly Important",
      en: "Newport adapts the 4 Disciplines of Execution for Deep Work. Focus on the wildly important — one or two deep goals, not twenty. Act on lead measures — track the hours of deep work you put in each week, not just the outcomes. Keep a compelling scoreboard — a physical tally of your deep work hours creates accountability and momentum. Create a cadence of accountability — a weekly review to see if you hit your deep work targets. These disciplines transform vague intentions into measurable habits.",
      hi: "Newport 4 Disciplines of Execution को Deep Work के लिए adapt करते हैं। सबसे ज़रूरी एक-दो deep goals पर focus करो — बीस पर नहीं। Lead measures पर काम करो — हर हफ्ते के deep work के घंटे track करो, सिर्फ नतीजे नहीं। एक scoreboard रखो — deep work के घंटों का physical record accountability और momentum बनाता है। साप्ताहिक समीक्षा करो कि क्या आपने अपने deep work targets पूरे किए। ये disciplines अस्पष्ट इरादों को measurable आदतों में बदलती हैं।",
      quote: `"A small amount of extra quality in your output can translate into a large amount of extra value." — Cal Newport`
    },
    {
      title: "Shutdown Ritual — Rest Is Part of the Work",
      en: "At the end of every workday, Newport performs a shutdown ritual — reviewing all incomplete tasks, planning the next day, and saying the words: 'Shutdown complete.' This signals to his brain that work is over. Without a clear shutdown, the unconscious mind keeps processing work problems during rest — degrading the quality of both rest and the next day's deep work. True rest is not laziness. It is the recovery that makes tomorrow's deep work possible.",
      hi: "हर कार्यदिवस के अंत में Newport एक shutdown ritual करते हैं — सभी अधूरे कामों की समीक्षा, अगले दिन की planning, और फिर कहते हैं: 'Shutdown complete।' यह उनके दिमाग को संकेत देता है कि काम खत्म हुआ। बिना clear shutdown के, अवचेतन मन आराम के समय भी काम की समस्याओं को process करता रहता है — जिससे rest और अगले दिन का deep work दोनों कमज़ोर होते हैं। सच्चा आराम आलस्य नहीं — यह वो recovery है जो कल के deep work को संभव बनाती है।",
      quote: `"Idleness is not just a vacation, an indulgence or a vice; it is as indispensable to the brain as vitamin D is to the body." — Cal Newport`
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
    lessons: [
      {
        title: "Morning Routines Are Non-Negotiable",
        en: "Nearly every world-class performer Ferriss interviewed had a consistent morning routine — not inherited by accident, but designed with intention. Whether it was meditation, journaling, exercise, or cold exposure, the first hour of the day was protected fiercely. The morning routine is not a luxury. It is armour. It sets the tone for every decision, every interaction, and every creative output that follows. Win the morning, win the day.",
        hi: "Ferriss ने जितने भी world-class performers का interview लिया, उन लगभग सभी की एक consistent morning routine थी — जो आकस्मिक नहीं, बल्कि जानबूझकर design की गई थी। चाहे meditation हो, journaling, exercise या cold exposure — दिन का पहला घंटा हर हाल में सुरक्षित रखा जाता था। Morning routine कोई विलासिता नहीं — यह एक कवच है। यह दिन के हर निर्णय, हर बातचीत और हर रचनात्मक काम की नींव रखती है। सुबह जीती, तो दिन जीता।",
        quote: `"The first 60 minutes of each day are often sacred time for the most successful people." — Tim Ferriss`
      },
      {
        title: "Fear-Setting: Define the Worst Case",
        en: "Most people are paralysed not by real danger but by imagined catastrophe. Ferriss, inspired by Stoicism, practises Fear-Setting: write down the worst-case scenario of an action you are afraid to take, then ask — how likely is it? How bad would it really be? How would you recover? Almost always, the worst case is survivable. And the cost of inaction — of staying stuck — is almost always far greater than the cost of trying and failing.",
        hi: "ज़्यादातर लोग असली खतरे से नहीं, बल्कि कल्पना में बनाई गई तबाही से लकवाग्रस्त होते हैं। Ferriss, Stoicism से प्रेरित होकर, Fear-Setting का अभ्यास करते हैं: जो काम करने से डर लग रहा है उसका worst-case scenario लिखो — फिर पूछो: यह कितना संभव है? असल में कितना बुरा होगा? आप कैसे उबरेंगे? लगभग हमेशा, worst case से उबरा जा सकता है। और कुछ न करने की कीमत — फंसे रहने की — हमेशा try करके fail होने की कीमत से कहीं ज़्यादा होती है।",
        quote: `"Define your nightmare, the absolute worst that could happen if you did what you are considering.' — Tim Ferriss`
      },
      {
        title: "The 80/20 of Everything — Find the Vital Few",
        en: "Many titans apply the Pareto Principle obsessively: 20% of inputs drive 80% of outputs. This applies to clients, habits, relationships, and skills. The question is not 'What can I add?' — it is 'What can I eliminate?' The most successful people Ferriss interviewed were ruthless about cutting everything that did not move the needle on their highest priorities. Subtraction is often more powerful than addition.",
        hi: "कई titans Pareto Principle को जुनून की हद तक apply करते हैं: 20% कारण 80% परिणाम देते हैं। यह clients, आदतों, रिश्तों और skills — सब पर लागू होता है। सवाल यह नहीं कि 'मैं क्या जोड़ूं?' — सवाल यह है: 'मैं क्या हटाऊं?' Ferriss ने जिन सबसे सफल लोगों का interview किया, वो सब उन चीज़ों को काटने में निर्दयी थे जो उनकी सबसे बड़ी प्राथमिकताओं को आगे नहीं बढ़ाती थीं। घटाना अक्सर जोड़ने से ज़्यादा शक्तिशाली होता है।",
        quote: `"Being busy is a form of laziness — lazy thinking and indiscriminate action.' — Tim Ferriss`
      },
      {
        title: "Meditation Is the Meta-Skill",
        en: "Over 80% of the world-class performers Ferriss interviewed had some form of daily meditation or mindfulness practice. Not because they are spiritual — but because it works. Meditation trains the ability to observe your own thoughts without being controlled by them. It improves focus, reduces anxiety, accelerates decision-making, and builds emotional resilience. It is the one practice that makes every other practice more effective.",
        hi: "Ferriss ने जिन 80% से ज़्यादा world-class performers का interview किया, उन सभी की कोई न कोई दैनिक meditation या mindfulness practice थी। इसलिए नहीं कि वो आध्यात्मिक हैं — बल्कि इसलिए कि यह काम करती है। Meditation अपने विचारों को बिना उनके नियंत्रण में आए देखने की क्षमता train करती है। यह focus सुधारती है, चिंता कम करती है, निर्णय लेने की गति बढ़ाती है और भावनात्मक लचीलापन बनाती है। यह एक ऐसी practice है जो बाकी हर practice को और प्रभावशाली बनाती है।",
        quote: `"If you don't have 10 minutes for meditation, you don't have a life.' — Tim Ferriss`
      },
      {
        title: "Saying No Is a Superpower",
        en: "Every titan Ferriss profiles guards their time and attention with ferocity. The default answer to almost every request is no — not because they are rude, but because they understand that every yes is a no to something else. Warren Buffett says the difference between successful people and very successful people is that very successful people say no to almost everything. Your time is finite. Your attention is finite. Protect them both as if your life depends on it — because your best work does.",
        hi: "Ferriss के हर titan अपने समय और ध्यान की रक्षा जुनून के साथ करते हैं। लगभग हर अनुरोध का डिफ़ॉल्ट जवाब 'नहीं' होता है — इसलिए नहीं कि वो असभ्य हैं, बल्कि इसलिए कि वो समझते हैं कि हर 'हां' किसी और चीज़ को 'नहीं' है। Warren Buffett कहते हैं: सफल और बहुत सफल लोगों में फ़र्क यह है कि बहुत सफल लोग लगभग हर चीज़ को 'नहीं' कहते हैं। आपका समय सीमित है। आपका ध्यान सीमित है। दोनों की रक्षा करें जैसे आपकी ज़िंदगी इस पर निर्भर हो — क्योंकि आपका सर्वश्रेष्ठ काम इस पर निर्भर है।",
        quote: `"You are the average of the five people you most associate with.' — Tim Ferriss`
      },
      {
        title: "Failure Is Data, Not Verdict",
        en: "Every world-class performer Ferriss interviewed had failed — spectacularly, publicly, or repeatedly. What distinguished them was not the absence of failure but the relationship with it. They treated failure as feedback, not as final judgement. They asked: what did this teach me? What would I do differently? The most dangerous thing is not failure — it is the interpretation of failure as identity. You are not your failures. They are just data points on the way to mastery.",
        hi: "Ferriss ने जिस भी world-class performer का interview लिया, वो fail हुए थे — शानदार तरीके से, सार्वजनिक रूप से, या बार-बार। उन्हें बाकियों से जो अलग करता था वो failure की अनुपस्थिति नहीं, बल्कि failure के साथ उनका रिश्ता था। वो failure को feedback मानते थे, अंतिम फैसला नहीं। वो पूछते थे: इसने मुझे क्या सिखाया? मैं क्या अलग करता? सबसे खतरनाक बात failure नहीं है — बल्कि failure को अपनी पहचान मान लेना है। आप अपनी failures नहीं हैं। वो सिर्फ महारत की राह पर data points हैं।",
        quote: `"What we fear doing most is usually what we most need to do.' — Tim Ferriss`
      },
      {
        title: "The Importance of Mentors and Asking",
        en: "Most people do not ask for help, advice, or access because they assume the answer will be no. The titans Ferriss profiles think differently. They understand that the worst answer is 'no' — and 'no' is where they already are. A bold, specific, well-researched ask to the right person can compress years of learning into a single conversation. The people at the top are often more accessible than you think — and they remember those who ask great questions.",
        hi: "ज़्यादातर लोग मदद, सलाह या अवसर नहीं माँगते क्योंकि उन्हें लगता है जवाब 'नहीं' होगा। Ferriss के titans अलग तरह से सोचते हैं। वो समझते हैं कि सबसे बुरा जवाब 'नहीं' है — और वो already 'नहीं' की जगह पर खड़े हैं। सही व्यक्ति से एक साहसी, specific और अच्छी तरह से शोध किया गया सवाल सीखने के वर्षों को एक ही बातचीत में समेट सकता है। शीर्ष पर बैठे लोग अक्सर उतने दुर्गम नहीं होते जितना आप सोचते हैं — और वो उन लोगों को याद रखते हैं जो अच्छे सवाल पूछते हैं।",
        quote: `"A person's success in life can usually be measured by the number of uncomfortable conversations he or she is willing to have.' — Tim Ferriss`
      },
      {
        title: "Strength Training Is the Foundation",
        en: "An overwhelming number of Ferriss's interviewees — regardless of profession — maintained a serious physical fitness practice. Not for vanity, but for cognitive performance, emotional regulation, and longevity. The body is not separate from the mind. Physical discipline creates mental discipline. The habits of showing up, pushing through discomfort, and recovering well in the gym transfer directly to creative and professional life. Your body is the vehicle for everything else you want to do.",
        hi: "Ferriss के साक्षात्कारकर्ताओं में से भारी बहुमत — चाहे किसी भी पेशे से हों — एक गंभीर शारीरिक fitness practice बनाए रखते थे। दिखावे के लिए नहीं, बल्कि cognitive performance, भावनात्मक संतुलन और दीर्घायु के लिए। शरीर और मन अलग नहीं हैं। शारीरिक अनुशासन मानसिक अनुशासन बनाता है। gym में उपस्थित रहने, असुविधा से गुज़रने और ठीक से recover करने की आदतें सीधे रचनात्मक और professional जीवन में transfer होती हैं। आपका शरीर वो वाहन है जिससे आप बाकी सब कुछ करना चाहते हैं।",
        quote: `"Focus on being productive instead of busy.' — Tim Ferriss`
      },
      {
        title: "Journaling: The Clarity Tool",
        en: "Many of the most successful people Ferriss profiles — including Tony Robbins, Tim Ferriss himself, and numerous CEOs — journal daily. Not to record events, but to process them. Journaling externalises your thinking, helping you see patterns, fears, and opportunities that stay invisible when they remain only in your head. A regular journaling practice is one of the cheapest and most powerful therapies available — it is thinking on paper, and thinking clearly is the rarest of skills.",
        hi: "Ferriss के कई सबसे सफल लोग — जिनमें Tony Robbins, Tim Ferriss खुद, और अनेक CEOs शामिल हैं — रोज़ journal लिखते हैं। घटनाओं को record करने के लिए नहीं, बल्कि उन्हें process करने के लिए। Journaling आपकी सोच को बाहर लाती है, आपको उन patterns, डर और अवसरों को देखने में मदद करती है जो केवल आपके दिमाग में रहने पर अदृश्य रहते हैं। नियमित journaling practice सबसे सस्ती और सबसे शक्तिशाली therapies में से एक है — यह कागज़ पर सोचना है, और स्पष्ट रूप से सोचना सबसे दुर्लभ कौशल है।",
        quote: `"Keeping a journal will absolutely change your life in ways you've never imagined.' — Tim Ferriss`
      },
      {
        title: "Optimise for Interesting, Not Optimal",
        en: "A recurring theme across Ferriss's interviews is that the most fulfilled performers did not optimise purely for money, status, or conventional success. They optimised for what was interesting to them — for problems that made them want to get out of bed. Purpose and curiosity are more sustainable fuels than money alone. When work feels like a mission rather than a job, performance compounds. Find the intersection of what you are good at, what the world needs, and what genuinely fascinates you — and then go all in.",
        hi: "Ferriss के interviews में एक बार-बार आने वाला विषय यह है कि सबसे संतुष्ट performers ने केवल पैसे, status या परंपरागत सफलता के लिए optimize नहीं किया। उन्होंने उसके लिए optimize किया जो उन्हें interesting लगता था — उन समस्याओं के लिए जो उन्हें सुबह बिस्तर से उठने पर मजबूर करती थीं। Purpose और जिज्ञासा अकेले पैसे से ज़्यादा टिकाऊ ईंधन हैं। जब काम नौकरी की तरह नहीं, mission की तरह लगे — तो performance compounding होती है। वो intersection खोजें जहाँ आप अच्छे हों, दुनिया को ज़रूरत हो, और जो आपको genuinely आकर्षित करे — फिर पूरी तरह से जुट जाएं।",
        quote: `"The goal is not to simply eliminate the bad, but to pursue and experience the best in the world.' — Tim Ferriss`
      }
    ]
  }
,
   "ikigai": {
    live: true,
    slug: "ikigai",
    title: "Ikigai",
    titleHtml: "<em>Ikigai</em>",
    author: "Héctor García & Francesc Miralles",
    genre: "Philosophy · Wellbeing",
    rating: "★★★★★",
    cover: "https://m.media-amazon.com/images/I/81l3rZK4lnL._SY466_.jpg",
    heroDesc: "From the Japanese island of Okinawa — home to the world's longest-living people — comes a timeless philosophy of purpose, simplicity, and daily joy. Here are 10 lessons from Ikigai that will help you find your reason for being.",
    amazon: {
      IN: "https://www.amazon.in/dp/178633089X",
      US: "https://www.amazon.com/dp/0143130722",
      CA: "https://www.amazon.ca/dp/0143130722"
    },
    lessons: [
      {
        title: "Find Your Ikigai — Your Reason for Getting Up",
        en: "Ikigai is the Japanese concept for 'reason for being' — the sweet spot where what you love, what you are good at, what the world needs, and what you can be paid for all intersect. The Okinawans don't retire because they never stop doing what gives their life meaning. Finding your ikigai is not a luxury — it is a necessity for a long and fulfilled life.",
        hi: "Ikigai एक जापानी अवधारणा है — 'जीने का कारण।' वो जगह जहाँ आपकी पसंद, आपकी प्रतिभा, दुनिया की ज़रूरत और आपकी आजीविका आपस में मिलती हैं। Okinawa के लोग कभी retire नहीं करते क्योंकि वो कभी रुकते नहीं। अपना Ikigai खोजना एक विलासिता नहीं — एक लंबे और संतुष्ट जीवन की ज़रूरत है।",
        quote: '"Only staying active will make you want to live a hundred years." — Japanese proverb'
      },
      {
        title: "Stay Active — Never Fully Retire",
        en: "The longest-living people in the world never fully stop working — not because they have to, but because their work gives them purpose. Complete retirement, as the West defines it, is linked to cognitive decline and shorter life spans. Keep moving, keep creating, keep contributing. Purposeful busyness is medicine.",
        hi: "दुनिया में सबसे लंबे जीने वाले लोग कभी पूरी तरह काम बंद नहीं करते — मजबूरी से नहीं, बल्कि इसलिए कि उनका काम उन्हें उद्देश्य देता है। पश्चिम की तरह का पूर्ण retirement मानसिक गिरावट और छोटी उम्र से जुड़ा है। चलते रहो, बनाते रहो, योगदान देते रहो। अर्थपूर्ण व्यस्तता ही दवा है।",
        quote: '"He who has a why to live for can bear almost any how." — Viktor Frankl'
      },
      {
        title: "Hara Hachi Bu — Stop at 80%",
        en: "Okinawans practice Hara Hachi Bu — eating until they are 80% full. This ancient teaching prevents overeating and reduces inflammation. The lesson extends beyond food: in every area of life, leaving a little space rather than pushing to the maximum allows the body and mind to breathe, recover, and sustain. Less is often more.",
        hi: "Okinawa के लोग Hara Hachi Bu का पालन करते हैं — 80% पेट भरने पर खाना बंद करना। यह प्राचीन शिक्षा अधिक खाने से बचाती है और सूजन कम करती है। यह सबक खाने से आगे जाता है: जीवन के हर क्षेत्र में थोड़ी जगह छोड़ना — maximum तक न जाना — शरीर और मन को recover करने देता है। कम अक्सर ज़्यादा होता है।",
        quote: '"Eat less, move more, and find your purpose." — Okinawan wisdom'
      },
      {
        title: "Moai — Surround Yourself With the Right People",
        en: "Okinawans form moai — close-knit social groups that meet regularly, support each other financially and emotionally, and hold each other accountable throughout life. Research shows that loneliness is as deadly as smoking 15 cigarettes a day. Your tribe is your longevity. Choose your moai carefully.",
        hi: "Okinawa के लोग moai बनाते हैं — करीबी सामाजिक समूह जो नियमित मिलते हैं, एक-दूसरे को भावनात्मक और आर्थिक सहारा देते हैं, और जीवनभर साथ रहते हैं। शोध बताता है कि अकेलापन रोज़ाना 15 सिगरेट पीने जितना खतरनाक है। आपकी टोली ही आपकी दीर्घायु है। अपना moai सोच-समझकर चुनें।",
        quote: '"In Okinawa, they say that your ikigai is also your moai." — Héctor García'
      },
      {
        title: "Flow — The Secret of Happiness at Work",
        en: "Psychologist Mihaly Csikszentmihalyi's concept of flow — complete absorption in a challenging task — is central to ikigai. When you are in flow, time disappears, self-consciousness fades, and you are at your most alive. Those with a clear ikigai experience flow regularly, and this is the foundation of lasting happiness.",
        hi: "मनोवैज्ञानिक Mihaly Csikszentmihalyi का flow का concept — किसी चुनौतीपूर्ण काम में पूरी तरह डूब जाना — ikigai का केंद्र है। जब आप flow में होते हैं, समय गायब हो जाता है, आत्म-चेतना मिट जाती है, और आप सबसे ज़्यादा जीवित होते हैं। जिन्हें अपना ikigai पता है, वो नियमित रूप से flow अनुभव करते हैं — और यही lasting खुशी की नींव है।",
        quote: '"Flow is the state in which people are so involved in an activity that nothing else seems to matter." — Mihaly Csikszentmihalyi'
      },
      {
        title: "Embrace Wabi-Sabi — Find Beauty in Imperfection",
        en: "Wabi-sabi is the Japanese art of finding beauty in imperfection and impermanence. A cracked tea bowl repaired with gold. A weathered face full of stories. Perfectionism is the enemy of action, creativity, and peace. Accepting imperfection — in your work, in your relationships, in yourself — is essential to inner calm and long life.",
        hi: "Wabi-sabi जापानी कला है — अपूर्णता और क्षणभंगुरता में सुंदरता खोजना। सोने से जोड़ा हुआ टूटा हुआ कप। झुर्रियों से भरा चेहरा जो कहानियाँ सुनाता है। Perfectionism action, रचनात्मकता और शांति का दुश्मन है। अपूर्णता को स्वीकार करना — अपने काम में, रिश्तों में, खुद में — आंतरिक शांति की चाबी है।",
        quote: '"Wabi-sabi teaches us to embrace the beauty of impermanence." — Héctor García'
      },
      {
        title: "Move Every Day — The Okinawan Way",
        en: "Okinawans don't go to gyms — they move naturally all day. They garden, walk, do Radio Taiso, and sit on the floor. Research shows that light, frequent movement throughout the day is more beneficial than one intense gym session. The body was designed to move — honour that design daily.",
        hi: "Okinawa के लोग gym नहीं जाते — वो पूरे दिन स्वाभाविक रूप से हिलते-डुलते रहते हैं। बागवानी करते हैं, चलते हैं, Radio Taiso करते हैं और ज़मीन पर बैठते हैं। शोध बताता है कि पूरे दिन हल्की, नियमित गतिविधि एक intensive gym session से ज़्यादा फायदेमंद है। शरीर हिलने के लिए बना है — रोज़ उस डिज़ाइन का सम्मान करें।",
        quote: '"Movement is the best medicine — and the Okinawans have always known this." — Héctor García'
      },
      {
        title: "Live With Purpose — Logotherapy and Meaning",
        en: "Drawing on Viktor Frankl's logotherapy, the authors show that the search for meaning — not pleasure, not power — is the deepest human motivation. People with a clear sense of purpose recover faster from illness, cope better with adversity, and live longer. Don't chase happiness directly — find meaning, and happiness follows as a byproduct.",
        hi: "Viktor Frankl की logotherapy पर आधारित, लेखक दिखाते हैं कि अर्थ की खोज — सुख की नहीं, शक्ति की नहीं — इंसान की सबसे गहरी प्रेरणा है। जिन लोगों को अपने उद्देश्य का स्पष्ट बोध है, वो बीमारी से जल्दी उबरते हैं और लंबे जीते हैं। सीधे खुशी मत खोजो — अर्थ खोजो, खुशी खुद-ब-खुद पीछे आएगी।",
        quote: '"Those who have a why to live can bear almost any how." — Viktor Frankl'
      },
      {
        title: "Simplicity — A Stress-Free Life Is a Long Life",
        en: "The Okinawan lifestyle is one of radical simplicity — small homes, few possessions, simple food, deep relationships. Most modern stress comes from complexity: too many choices, too much stuff, too many obligations. Simplifying your life is not giving up — it is making room for what actually matters. Stress is the silent killer; simplicity is the antidote.",
        hi: "Okinawa की जीवनशैली पूरी तरह सादगी पर आधारित है — छोटे घर, कम सामान, सरल खाना, गहरे रिश्ते। अधिकांश आधुनिक तनाव जटिलता से आता है: बहुत सारे विकल्प, बहुत सारी चीज़ें, बहुत सारी ज़िम्मेदारियाँ। जीवन को सरल बनाना छोड़ना नहीं — असली मायने रखने वाली चीज़ों के लिए जगह बनाना है। तनाव मौन हत्यारा है; सादगी उसका इलाज है।",
        quote: '"The secret to a happy life is simple: do what matters, with the people who matter." — Ikigai'
      },
      {
        title: "Your Ikigai Is Already Inside You — Start Now",
        en: "The final lesson: you don't need a grand, world-changing purpose. Your ikigai may be as simple as tending your garden, making music, cooking for family, or teaching a child. The search itself is often the purpose. Stop waiting for perfect clarity. Start small, stay curious, and let your ikigai reveal itself through living.",
        hi: "अंतिम सबक: आपको कोई विश्व-बदलने वाला महान उद्देश्य खोजने की ज़रूरत नहीं। आपका ikigai उतना सरल हो सकता है जितना बागवानी करना, संगीत बनाना, परिवार के लिए खाना पकाना, या किसी बच्चे को पढ़ाना। खोज ही अक्सर उद्देश्य होती है। सही स्पष्टता का इंतज़ार मत करो — छोटे से शुरू करो, जिज्ञासु रहो।",
        quote: '"Your ikigai is at the intersection of what you are good at and what you love doing." — Héctor García'
      }
    ]
  },
 
  "mind-management": {
    live: true,
    slug: "mind-management",
    title: "Mind Management, Not Time Management",
    titleHtml: "Mind Management, Not <em>Time Management</em>",
    author: "David Kadavy",
    genre: "Productivity · Creativity",
    rating: "★★★★☆",
    cover: "https://covers.openlibrary.org/b/isbn/9780525538585-L.jpg",
    heroDesc: "Productivity advice has always focused on managing time — but time is not your scarcest resource. Your mind is. David Kadavy reveals how to work with your mental energy, not against it, and create more in less time.",
    amazon: {
      IN: "https://www.amazon.in/dp/0525538585",
      US: "https://www.amazon.com/dp/0525538585",
      CA: "https://www.amazon.ca/dp/0525538585"
    },
    lessons: [
      {
        title: "Manage Your Mind, Not Your Clock",
        en: "Time management assumes all hours are equal — but they are not. Your mental energy fluctuates throughout the day. Trying to do creative, demanding work when your mind is depleted is like driving a car with no fuel. The most productive people don't manage their schedule — they manage their mental state and match their work to their energy.",
        hi: "Time management यह मानता है कि सभी घंटे समान हैं — लेकिन ऐसा नहीं है। आपकी मानसिक ऊर्जा पूरे दिन बदलती रहती है। जब दिमाग थका हो तब रचनात्मक काम करने की कोशिश ऐसी है जैसे बिना ईंधन के गाड़ी चलाना। सबसे productive लोग अपना schedule नहीं — अपनी mental state manage करते हैं और काम को ऊर्जा के हिसाब से जोड़ते हैं।",
        quote: '"The most valuable resource you have is not time — it\'s mental energy." — David Kadavy'
      },
      {
        title: "Creative Work First — Protect Your Peak Hours",
        en: "Most people do their most important creative work last, after emails and meetings have depleted their mental reserves. Kadavy argues the opposite: identify your peak mental hours — usually morning — and protect them fiercely for your most demanding creative work. Everything else can wait.",
        hi: "ज़्यादातर लोग अपना सबसे ज़रूरी रचनात्मक काम सबसे आखिर में करते हैं, जब emails और meetings ने उनकी मानसिक ऊर्जा खत्म कर दी होती है। Kadavy इसका उल्टा कहते हैं: अपने peak mental hours पहचानें — अधिकतर लोगों के लिए सुबह — और उन्हें अपने सबसे demanding काम के लिए बचाकर रखें। बाकी सब इंतज़ार कर सकता है।",
        quote: '"Do your most important work when your mind is at its best." — David Kadavy'
      },
      {
        title: "The Four Stages of Creativity",
        en: "Kadavy maps the creative process into four stages: Prepare (gather raw material), Incubate (let ideas simmer unconsciously), Illuminate (the breakthrough moment), and Implement (execute). Most people skip Prepare and Incubate and wonder why breakthroughs never come. Great ideas are not summoned on demand — they are the result of a patient, staged process.",
        hi: "Kadavy रचनात्मक प्रक्रिया को चार चरणों में बाँटते हैं: Prepare (कच्ची सामग्री इकट्ठा करना), Incubate (विचारों को अवचेतन में पकने देना), Illuminate (breakthrough का पल), और Implement (क्रियान्वयन)। ज़्यादातर लोग Prepare और Incubate छोड़ देते हैं। महान विचार माँगने पर नहीं आते — वो एक धैर्यपूर्ण, staged प्रक्रिया का नतीजा हैं।",
        quote: '"You can\'t force a creative breakthrough. You can only prepare the ground for it." — David Kadavy'
      },
      {
        title: "Make Creative Leaps — Connect Distant Ideas",
        en: "The most valuable creative insights come from connecting ideas that seem unrelated. Kadavy calls this the creative leap — seeing a pattern across two distant domains that no one else has noticed. Reading widely, exploring outside your field, and allowing your mind to wander are not wastes of time. They are the raw material of creative breakthroughs.",
        hi: "सबसे मूल्यवान रचनात्मक अंतर्दृष्टि असंबंधित लगने वाले विचारों को जोड़ने से आती है। Kadavy इसे creative leap कहते हैं — दो दूर के क्षेत्रों में एक pattern देखना जो किसी और ने नहीं देखा। व्यापक पढ़ना, अपने क्षेत्र से बाहर जाना और मन को भटकने देना समय की बर्बादी नहीं — ये creative breakthroughs का कच्चा माल हैं।",
        quote: '"Creativity is connecting things that others haven\'t connected yet." — David Kadavy'
      },
      {
        title: "Motivation Is a Myth — Build Systems Instead",
        en: "Waiting for motivation before starting work is a trap. Motivation follows action — it does not precede it. Kadavy recommends building systems and rituals that automatically put you in a productive state, regardless of how you feel. A consistent start ritual — same time, same place, same first action — bypasses the need for motivation entirely.",
        hi: "काम शुरू करने से पहले motivation का इंतज़ार करना एक जाल है। Motivation action के बाद आती है — पहले नहीं। Kadavy systems और rituals बनाने की सलाह देते हैं जो आपको automatically एक productive state में डाल दें, चाहे आप कैसा भी महसूस करें। एक consistent start ritual — एक ही समय, एक ही जगह, एक ही पहला कदम — motivation की ज़रूरत को खत्म कर देता है।",
        quote: '"Don\'t wait for motivation. Build the ritual that creates it." — David Kadavy'
      },
      {
        title: "Energy Cycles — Work With Your Biology",
        en: "Your mental energy follows biological rhythms — ultradian cycles of roughly 90 minutes of high focus followed by a natural dip. Fighting these dips with caffeine and willpower leads to burnout. Working with them — taking genuine rest during low-energy periods — leads to sustainable, high-quality output. Your biology is not the enemy; ignoring it is.",
        hi: "आपकी मानसिक ऊर्जा जैविक लय का पालन करती है — लगभग 90 मिनट की उच्च-focus cycle जिसके बाद एक प्राकृतिक गिरावट आती है। इन गिरावटों को caffeine और willpower से लड़ना burnout की ओर ले जाता है। इनके साथ काम करना — कम-ऊर्जा के पलों में असली आराम लेना — टिकाऊ, उच्च-गुणवत्ता वाले output की ओर ले जाता है।",
        quote: '"Work with your energy cycles, not against them." — David Kadavy'
      },
      {
        title: "The Power of Constraints — Less Opens More",
        en: "Unlimited time and resources do not produce better creative work — they often produce paralysis. Constraints force prioritisation, trigger creative thinking, and give your work a clear shape. Kadavy recommends deliberately imposing limits: a two-hour work window, a single output goal, a limited set of tools. Constraints are not obstacles to creativity — they are the conditions that make it possible.",
        hi: "असीमित समय और संसाधन बेहतर रचनात्मक काम नहीं पैदा करते — वो अक्सर paralysis पैदा करते हैं। Constraints प्राथमिकता तय करने पर मजबूर करते हैं, रचनात्मक सोच को trigger करते हैं, और आपके काम को स्पष्ट आकार देते हैं। Constraints रचनात्मकता में बाधा नहीं — वो उसे संभव बनाने की शर्तें हैं।",
        quote: '"Constraints are the mother of creativity." — David Kadavy'
      },
      {
        title: "Incubation — Do Nothing to Do Everything",
        en: "Some of the most powerful thinking happens when you are not actively thinking. Walking, showering, sleeping — these are not unproductive. They are when your unconscious mind processes the problems you have been consciously working on and delivers unexpected solutions. Scheduling true downtime is not laziness — it is a strategic part of the creative process.",
        hi: "कुछ सबसे शक्तिशाली सोच तब होती है जब आप सक्रिय रूप से सोच नहीं रहे होते। चलना, नहाना, सोना — ये अनुत्पादक नहीं हैं। यही वो समय है जब आपका अवचेतन मन उन समस्याओं को process करता है जिन पर आप consciously काम कर रहे थे और अप्रत्याशित समाधान देता है। असली downtime schedule करना आलस नहीं — creative process का एक strategic हिस्सा है।",
        quote: '"The unconscious mind is always working. Give it the right material and then get out of the way." — David Kadavy'
      },
      {
        title: "Ship Before You Are Ready",
        en: "Perfectionism is the final boss of the creative process. The fear of imperfection keeps most people from ever finishing — let alone sharing — their work. The only way to improve is to ship, get feedback, and iterate. Done and imperfect beats perfect and never-finished every single time. Progress, not perfection, is the goal.",
        hi: "Perfectionism रचनात्मक प्रक्रिया का अंतिम दुश्मन है। अपूर्णता का डर ज़्यादातर लोगों को अपना काम कभी खत्म नहीं करने देता। बेहतर बनने का एकमात्र तरीका है — ship करो, feedback लो, और iterate करो। अधूरा-perfect काम कभी-भी-सही से हमेशा बेहतर है। Progress, perfection नहीं, लक्ष्य है।",
        quote: '"The enemy of done is perfect." — David Kadavy'
      },
      {
        title: "Design Your Day Around Your Creative Self",
        en: "The ultimate lesson of mind management: your best work comes from understanding yourself — when you think best, how you recharge, what environments unlock your creativity, what drains you. There is no universal productivity system. The most effective system is the one built specifically around your mind. Self-knowledge is the foundation of all creative output.",
        hi: "Mind management का अंतिम सबक: आपका सबसे अच्छा काम खुद को समझने से आता है — आप कब सबसे अच्छा सोचते हैं, कैसे recharge होते हैं, कौन सा माहौल आपकी रचनात्मकता को unlock करता है। कोई universal productivity system नहीं होता। सबसे effective system वो है जो आपके मन के हिसाब से बना हो। आत्म-ज्ञान ही सभी creative output की नींव है।",
        quote: '"Know yourself. Design your life around that knowledge." — David Kadavy'
      }
    ]
  },
 
  "psychology-of-money": {
    live: true,
    slug: "psychology-of-money",
    title: "The Psychology of Money",
    titleHtml: "The Psychology of <em>Money</em>",
    author: "Morgan Housel",
    genre: "Finance · Mindset",
    rating: "★★★★★",
    cover: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    heroDesc: "Doing well with money has little to do with how smart you are and a lot to do with how you behave. Morgan Housel's modern classic reveals the hidden psychological forces that drive our financial decisions — and how to master them.",
    amazon: {
      IN: "https://www.amazon.in/dp/9390166268",
      US: "https://www.amazon.com/dp/0857197681",
      CA: "https://www.amazon.ca/dp/0857197681"
    },
    lessons: [
      {
        title: "No One Is Crazy — Your Financial Choices Make Sense to You",
        en: "Every financial decision a person makes is shaped by their unique experiences — what they grew up with, what they survived, what they fear. Someone who lived through a depression will hoard cash; someone who grew up wealthy will invest fearlessly. Neither is objectively right or wrong. Understanding this teaches humility: judge less, understand more.",
        hi: "हर व्यक्ति का वित्तीय फैसला उनके पैसे के साथ अनूठे अनुभवों से आकार लेता है — वे किसके साथ बड़े हुए, क्या झेला, किससे डरते हैं। जो मंदी से गुज़रा है वो cash जमा करेगा; जो अमीरी में पला है वो बेझिझक invest करेगा। कोई भी objectively गलत या सही नहीं है। यह समझ विनम्रता सिखाती है: कम judge करो, ज़्यादा समझो।",
        quote: '"No one is crazy. We all make decisions based on our own unique experiences." — Morgan Housel'
      },
      {
        title: "Luck and Risk — Both Are More Powerful Than Skill",
        en: "Bill Gates went to one of the only high schools in the world with a computer in 1968. His equally talented friend died in a mountaineering accident before he could show the world what he was capable of. Luck and risk are siblings — both are real, powerful, and largely invisible. Be humble about your successes and compassionate about others' failures.",
        hi: "Bill Gates 1968 में दुनिया के उन चुनिंदा स्कूलों में से एक में गए जहाँ computer था। उनके उतने ही प्रतिभाशाली दोस्त एक पर्वतारोहण दुर्घटना में चले गए। Luck और Risk सगे भाई हैं — दोनों असली हैं, शक्तिशाली हैं, और अक्सर अदृश्य हैं। अपनी सफलता पर विनम्र रहो और दूसरों की विफलता पर दयालु।",
        quote: '"Luck and risk are siblings — both the reality that every outcome is guided by forces beyond individual effort." — Morgan Housel'
      },
      {
        title: "Enough — The Hardest Financial Skill",
        en: "The hardest financial skill is getting the goalposts to stop moving. More money brings desire for more money — an endless treadmill. Knowing when you have 'enough' — and actually stopping there — is one of the rarest and most important financial skills. The insatiable pursuit of more has destroyed more wealth than any market crash.",
        hi: "सबसे कठिन वित्तीय कौशल है — लक्ष्य की रेखा को हिलने से रोकना। ज़्यादा पैसा ज़्यादा पैसे की चाहत लाता है — एक अंतहीन treadmill। यह जानना कि आपके पास 'enough' है — और वास्तव में वहीं रुकना — सबसे दुर्लभ और महत्वपूर्ण वित्तीय कौशलों में से एक है। अधिक की अतृप्त खोज ने किसी भी market crash से ज़्यादा दौलत बर्बाद की है।",
        quote: '"There is no reason to risk what you have and need for what you don\'t have and don\'t need." — Morgan Housel'
      },
      {
        title: "Compounding — The Eighth Wonder of the World",
        en: "Warren Buffett's net worth is around $80 billion — but $75 billion of that was accumulated after his 65th birthday. His secret is not just returns — it is time. Compounding is counterintuitive: results feel negligible for years, then suddenly overwhelming. The enemy of compounding is interrupting it. Start early, stay consistent, don't stop.",
        hi: "Warren Buffett की net worth लगभग $80 billion है — लेकिन उसमें से $75 billion उनके 65वें जन्मदिन के बाद जमा हुई। उनका रहस्य सिर्फ returns नहीं — समय है। Compounding counter-intuitive है: सालों तक नतीजे नगण्य लगते हैं, फिर अचानक overwhelming हो जाते हैं। Compounding का दुश्मन है इसे बीच में रोकना। जल्दी शुरू करो, consistent रहो।",
        quote: '"Good investing is not about earning the highest returns. It\'s about earning returns you can stick with." — Morgan Housel'
      },
      {
        title: "Getting Wealthy vs. Staying Wealthy",
        en: "Getting money and keeping money are two entirely different skills. Getting money requires optimism, risk-taking, and putting yourself out there. Keeping money requires the opposite — humility, frugality, and paranoia about what could go wrong. Many people who got rich lost it all because they applied the skills of getting wealthy to the problem of staying wealthy.",
        hi: "पैसा कमाना और पैसा रखना दो बिल्कुल अलग कौशल हैं। पैसा कमाने के लिए optimism, risk लेना ज़रूरी है। पैसा रखने के लिए इसका उल्टा — विनम्रता, मितव्ययिता, और क्या गलत हो सकता है इस बारे में सावधानी। जो अमीर बने और सब खो बैठे, उन्होंने अमीर होने के कौशल को अमीर रहने की समस्या पर लागू किया। ये एक ही game नहीं हैं।",
        quote: '"The ability to stick around is the most important financial skill." — Morgan Housel'
      },
      {
        title: "You'll Change — Plan for It",
        en: "We are poor forecasters of our future selves. What you want at 25 is not what you will want at 45. Housel calls this the End of History Illusion — we know we have changed in the past but assume we are done changing. Financial plans built on who you are today will fail the person you will become. Build in flexibility.",
        hi: "हम अपने भविष्य के self के बारे में घटिया अनुमान लगाते हैं। 25 साल में जो चाहते हैं, 45 में वो नहीं चाहेंगे। Housel इसे End of History Illusion कहते हैं — हम जानते हैं कि हम बदले हैं लेकिन मानते हैं कि अब नहीं बदलेंगे। आज के आप के हिसाब से बनाई गई financial plan उस इंसान के लिए fail होगी जो आप कल बनेंगे। लचीलापन बनाए रखें।",
        quote: '"Things that have never happened before happen all the time." — Morgan Housel'
      },
      {
        title: "Save — Without a Specific Reason",
        en: "Most financial advice says: save for a house, save for retirement, save for a goal. Housel argues for saving without a specific goal — because the most valuable thing savings buys is options and flexibility in an uncertain world. You don't know what will happen next year. Savings means you won't be forced into bad decisions when it does. Savings is about control.",
        hi: "ज़्यादातर वित्तीय सलाह कहती है: घर के लिए बचाओ, retirement के लिए बचाओ। Housel बिना किसी specific लक्ष्य के बचाने की बात करते हैं — क्योंकि savings जो सबसे मूल्यवान चीज़ खरीदती है वो है अनिश्चित दुनिया में विकल्प और लचीलापन। Savings दौलत के बारे में नहीं — नियंत्रण के बारे में है।",
        quote: '"Savings without a specific goal gives you options and flexibility." — Morgan Housel'
      },
      {
        title: "Reasonable Over Rational",
        en: "Cold rationality in investing — always doing the mathematically optimal thing — sounds wise but is nearly impossible to sustain. Being reasonable rather than perfectly rational is a better goal. A strategy you can stick with through fear and greed is worth more than the theoretically optimal strategy you will abandon at the first crisis.",
        hi: "Investing में ठंडी तर्कसंगतता — हमेशा mathematically optimal काम करना — बुद्धिमान लगता है लेकिन टिकाना लगभग असंभव है। Perfectly rational से ज़्यादा reasonable होना बेहतर लक्ष्य है। एक strategy जिसे आप डर और लालच के बीच भी जारी रख सकते हैं, उस theoretically optimal strategy से ज़्यादा कीमती है जिसे आप पहले crisis पर छोड़ देंगे।",
        quote: '"Aiming to be mostly reasonable works better than trying to be coldly rational." — Morgan Housel'
      },
      {
        title: "Room for Error — The Most Important Part of Any Plan",
        en: "The most important part of any financial plan is planning for the plan not going according to plan. Housel calls this a margin of safety — a buffer wide enough that random bad luck cannot destroy you. Optimism about the future is fine; overconfidence about specifics is dangerous. The goal is not just to survive when things go right, but to still be in the game when they go wrong.",
        hi: "किसी भी financial plan का सबसे ज़रूरी हिस्सा यह plan करना है कि plan अनुसार नहीं चलेगा। Housel इसे margin of safety कहते हैं — एक buffer जो इतना चौड़ा हो कि अचानक की बदकिस्मती आपको तबाह न कर सके। भविष्य के बारे में optimism ठीक है; specifics के बारे में overconfidence खतरनाक है।",
        quote: '"The most important part of every plan is planning on your plan not going according to plan." — Morgan Housel'
      },
      {
        title: "Wealth Is What You Don't See",
        en: "We judge wealth by what we can see — the car, the house, the clothes. But real wealth is invisible: it is the money not spent, the investments quietly compounding, the options quietly building. The person driving the expensive car may be broke; the person in modest clothes may be a millionaire. Stop performing wealth. Start building it.",
        hi: "हम दौलत को उससे आँकते हैं जो दिखती है — गाड़ी, घर, कपड़े। लेकिन असली दौलत अदृश्य है: वो पैसा जो खर्च नहीं हुआ, वो investments जो चुपचाप compound हो रहे हैं। महंगी गाड़ी चलाने वाला दिवालिया हो सकता है; साधारण कपड़ों में इंसान करोड़पति हो सकता है। दौलत का प्रदर्शन बंद करो। दौलत बनाना शुरू करो।",
        quote: '"Wealth is what you don\'t see. Spending money to show people how much money you have is the fastest way to have less." — Morgan Housel'
      }
    ]
  },
 
  "monk-who-sold-ferrari": {
    live: true,
    slug: "monk-who-sold-ferrari",
    title: "The Monk Who Sold His Ferrari",
    titleHtml: "The Monk Who Sold <em>His Ferrari</em>",
    author: "Robin Sharma",
    genre: "Philosophy · Personal Development",
    rating: "★★★★★",
    cover: "https://covers.openlibrary.org/b/isbn/9780062515674-L.jpg",
    heroDesc: "A fable about a high-powered lawyer who collapses in a courtroom, sells everything, travels to India, and returns with the secrets of a joyful and purposeful life. Here are the 10 most powerful lessons from Robin Sharma's beloved classic.",
    amazon: {
      IN: "https://www.amazon.in/dp/8172234104",
      US: "https://www.amazon.com/dp/0062515675",
      CA: "https://www.amazon.ca/dp/0062515675"
    },
    lessons: [
      {
        title: "Master Your Mind — The Garden Within",
        en: "The Sages of Sivana teach Julian that the mind is like a garden. Left unattended, weeds — negative thoughts, fears, and doubts — grow wild and choke out everything good. Tended carefully with positive thoughts, the garden blooms. You cannot control what happens to you, but you can always control what happens within you. Master your mind, and you master your life.",
        hi: "Sivana के साधु Julian को सिखाते हैं कि मन एक बगीचे की तरह है। अनदेखा छोड़ दो तो खरपतवार — नकारात्मक विचार, डर और संदेह — उग आते हैं और सब कुछ दबा देते हैं। ध्यान से सींचो तो बगीचा खिलता है। आप यह नियंत्रित नहीं कर सकते कि आपके साथ क्या होता है, लेकिन यह हमेशा नियंत्रित कर सकते हैं कि आपके भीतर क्या होता है।",
        quote: '"The secret of happiness is simple: find out what you truly love to do and direct all your energy towards doing it." — Robin Sharma'
      },
      {
        title: "Follow Your Purpose — The Lighthouse of Life",
        en: "A lighthouse stands firm in any storm because it is anchored to the rock below. Your purpose is that anchor. A life without a clear, written personal purpose is a life of drift — reactive, exhausted, and ultimately empty. Spend time discovering what you are here for. Write it down. Return to it daily. Let it be the compass that guides every decision.",
        hi: "एक lighthouse किसी भी तूफान में मज़बूती से खड़ा रहता है क्योंकि वो नीचे की चट्टान से जुड़ा है। आपका उद्देश्य वही लंगर है। बिना स्पष्ट, लिखित personal purpose के जीवन भटकाव है — reactive, थका हुआ, और अंततः खालीपन। जानने में समय लगाएं कि आप यहाँ किसलिए हैं। इसे लिखें। रोज़ इस पर वापस आएं।",
        quote: '"Your I can is more important than your IQ." — Robin Sharma'
      },
      {
        title: "Practice Kaizen — Small Daily Improvements",
        en: "The Japanese philosophy of Kaizen — continuous improvement — is at the heart of the Sages' teachings. You don't need a dramatic transformation overnight. Improve by just 1% each day in the areas that matter most: your mind, your body, your relationships, your craft. These tiny, daily improvements are invisible in the short term and unstoppable in the long term.",
        hi: "Kaizen का जापानी दर्शन — निरंतर सुधार — साधुओं की शिक्षाओं के केंद्र में है। आपको रातों-रात dramatic बदलाव की ज़रूरत नहीं। जो क्षेत्र सबसे ज़रूरी हैं उनमें हर दिन सिर्फ 1% बेहतर हों: मन, शरीर, रिश्ते, अपना काम। ये छोटे, रोज़ाना के सुधार कम समय में दिखाई नहीं देते और लंबे समय में अपराजेय होते हैं।",
        quote: '"Kaizen is the Japanese word for continuous, never-ending improvement." — Robin Sharma'
      },
      {
        title: "Live With Discipline — The Foundation of All Achievement",
        en: "Sharma teaches that self-discipline is the foundation of all achievement. The Sages wake before dawn, meditate, exercise, and eat mindfully — every day, without exception. Discipline is not punishment; it is the highest form of self-respect. Every time you keep a promise to yourself, you strengthen the most important relationship in your life — the one with yourself.",
        hi: "Sharma सिखाते हैं कि self-discipline सभी उपलब्धियों की नींव है। साधु भोर से पहले जागते हैं, ध्यान करते हैं, व्यायाम करते हैं — हर दिन, बिना अपवाद। अनुशासन दंड नहीं — यह आत्म-सम्मान का सर्वोच्च रूप है। जब भी आप खुद से किया वादा निभाते हैं, आप अपनी ज़िंदगी का सबसे ज़रूरी रिश्ता मज़बूत करते हैं — खुद के साथ।",
        quote: '"Happiness comes through the consistent application of discipline." — Robin Sharma'
      },
      {
        title: "Respect Your Time — It Is Your Life",
        en: "Time is the great equaliser — every person has 24 hours a day. But most people treat their time as if it were infinite, wasting it on low-value activities while their deepest dreams gather dust. Sharma teaches that time mastery is life mastery. Ruthlessly eliminate what does not matter. Your calendar is a mirror of your priorities.",
        hi: "समय महान समानकर्ता है — हर इंसान के पास दिन में 24 घंटे हैं। लेकिन ज़्यादातर लोग अपने समय को ऐसे treat करते हैं जैसे वो अनंत हो, कम-मूल्य वाली गतिविधियों में बर्बाद करते हैं जबकि उनके सबसे गहरे सपने धूल जमा करते रहते हैं। Sharma सिखाते हैं कि समय mastery ही जीवन mastery है। आपका calendar आपकी प्राथमिकताओं का आईना है।",
        quote: '"Time mastery is life mastery." — Robin Sharma'
      },
      {
        title: "Selflessly Serve Others — Give Without Expectation",
        en: "One of the Sages' central teachings is that a truly meaningful life is one of service to others. When you focus on lifting others, your own problems shrink. When you give without expecting return, you receive more than you could have imagined. Service is not sacrifice — it is the highest form of self-expression.",
        hi: "साधुओं की केंद्रीय शिक्षाओं में से एक यह है कि सच में अर्थपूर्ण जीवन दूसरों की सेवा का जीवन है। जब आप दूसरों को उठाने पर ध्यान देते हैं, आपकी अपनी समस्याएं सिकुड़ जाती हैं। जब आप बिना वापसी की उम्मीद के देते हैं, आप उससे ज़्यादा पाते हैं जितना आप सोच सकते थे। सेवा बलिदान नहीं — यह आत्म-अभिव्यक्ति का सर्वोच्च रूप है।",
        quote: '"The secret of happiness is simple: give more than you take." — Robin Sharma'
      },
      {
        title: "Embrace the Present — Live Fully Now",
        en: "Julian arrives in Sivana carrying the weight of regret and anxiety — always in the past or the future, never in the present. The Sages teach him that the present moment is the only place where life actually happens. Stop rehearsing disasters. Stop replaying failures. The person standing in front of you, the sky above you — these are the gifts of a life fully lived.",
        hi: "Julian Sivana में पछतावे और चिंता का बोझ लेकर पहुँचता है — हमेशा अतीत या भविष्य में, कभी वर्तमान में नहीं। साधु उसे सिखाते हैं कि वर्तमान पल ही वो एकमात्र जगह है जहाँ जीवन वास्तव में होता है। आपदाओं का पूर्वाभ्यास बंद करो। विफलताओं को दोबारा मत जियो। आपके सामने खड़ा इंसान, ऊपर आसमान — ये एक पूरी तरह जीए हुए जीवन के तोहफे हैं।",
        quote: '"The past is a grave. Do not bury yourself in it." — Robin Sharma'
      },
      {
        title: "Nurture Your Relationships — People Are Everything",
        en: "Success without meaningful relationships is hollow — a fact Julian learns the hard way before his transformation. The quality of your life is the quality of your relationships. Invest in the people around you consistently. Small acts of kindness, presence, and genuine interest compound into bonds that sustain you through every storm.",
        hi: "सार्थक रिश्तों के बिना सफलता खोखली है — एक तथ्य जो Julian अपने transformation से पहले कठिन तरीके से सीखता है। आपके जीवन की गुणवत्ता आपके रिश्तों की गुणवत्ता है। अपने आस-पास के लोगों में लगातार निवेश करें।親切ता, उपस्थिति और सच्ची रुचि के छोटे-छोटे कार्य ऐसे बंधन बनाते हैं जो हर तूफान में सहारा देते हैं।",
        quote: '"The quality of your life is the quality of your relationships." — Robin Sharma'
      },
      {
        title: "Care for Your Body — The Temple of the Mind",
        en: "A brilliant mind in a neglected body is like a race car with no fuel. The Sages treat their bodies as sacred: they eat clean food, sleep deeply, and move daily. Physical vitality is the foundation of mental clarity and emotional resilience. You cannot do your best thinking when you are exhausted and physically depleted.",
        hi: "एक उपेक्षित शरीर में प्रतिभाशाली मन ऐसा है जैसे बिना ईंधन की race car। साधु अपने शरीर को पवित्र मानते हैं: साफ खाना खाते हैं, गहरी नींद लेते हैं, रोज़ हिलते-डुलते हैं। Physical vitality मानसिक स्पष्टता और भावनात्मक लचीलेपन की नींव है। जब आप थके हुए और शारीरिक रूप से depleted होते हैं, तो आप अपनी सबसे अच्छी सोच नहीं सोच सकते।",
        quote: '"Take care of your body. It\'s the only place you have to live." — Robin Sharma'
      },
      {
        title: "Live Your Legacy — Begin It Today",
        en: "The final lesson of the Sages: don't wait until the end of your life to think about what you will leave behind. Your legacy is built one day at a time, one choice at a time. Ask yourself every morning: 'If today were the last day of my life, would I be proud of how I am spending it?' Live the answer to that question — and you will never have regrets.",
        hi: "साधुओं का अंतिम सबक: अपनी ज़िंदगी के अंत तक इंतज़ार मत करो यह सोचने के लिए कि आप क्या छोड़ जाएंगे। आपकी विरासत एक दिन में एक दिन, एक चुनाव में एक चुनाव से बनती है। हर सुबह खुद से पूछें: 'अगर यह मेरी ज़िंदगी का आखिरी दिन होता, तो क्या मुझे गर्व होता?' उस सवाल का जवाब जीओ — और आपको कभी पछतावा नहीं होगा।",
        quote: '"The purpose of life is a life of purpose." — Robin Sharma'
      }
    ]
  },
 
  "practicing-mind": {
    live: true,
    slug: "practicing-mind",
    title: "The Practicing Mind",
    titleHtml: "The <em>Practicing Mind</em>",
    author: "Thomas M. Sterner",
    genre: "Mindset · Mastery",
    rating: "★★★★☆",
    cover: "https://covers.openlibrary.org/b/isbn/9781608680900-L.jpg",
    heroDesc: "In a world obsessed with results, Thomas Sterner makes a radical argument: the process is the point. Here are 10 lessons on how to develop patience, focus, and the joy of deliberate practice.",
    amazon: {
      IN: "https://www.amazon.in/dp/1608680908",
      US: "https://www.amazon.com/dp/1608680908",
      CA: "https://www.amazon.ca/dp/1608680908"
    },
    lessons: [
      {
        title: "Process Over Outcome — The Present Is the Goal",
        en: "Society has conditioned us to focus obsessively on outcomes — the finished product, the result, the destination. But mastery is built in the process. Sterner's central teaching is radical: the practice itself is the goal. When you are fully absorbed in the process of doing, you are already at the destination. The product is just a byproduct of a well-practiced process.",
        hi: "समाज ने हमें outcomes पर जुनूनी रूप से ध्यान देने के लिए conditioned किया है — finished product, नतीजा, मंज़िल। लेकिन mastery process में बनती है। Sterner की केंद्रीय शिक्षा radical है: practice ही लक्ष्य है। जब आप करने की प्रक्रिया में पूरी तरह लीन होते हैं, तो आप पहले से ही मंज़िल पर हैं। उत्पाद सिर्फ एक अच्छी तरह से practice की गई process का byproduct है।",
        quote: '"The process is the goal. When you work at something, you are already there." — Thomas M. Sterner'
      },
      {
        title: "Do, Observe, Correct — The Learning Loop",
        en: "Sterner teaches a three-part approach to deliberate practice: Do, Observe, and Correct. Do the action. Observe the result without judgment — was it what you intended? Correct calmly and try again. Self-criticism derails the learning cycle. Neutral observation accelerates it.",
        hi: "Sterner जानबूझकर practice के लिए तीन-भाग वाला दृष्टिकोण सिखाते हैं: Do, Observe, और Correct। काम करो। बिना judgment के नतीजा देखो — क्या यह वो था जो आप चाहते थे? शांति से सुधारो और फिर कोशिश करो। आत्म-आलोचना सीखने के चक्र को पटरी से उतार देती है। तटस्थ अवलोकन इसे तेज़ करता है।",
        quote: '"Remove judgment from the learning loop and watch how fast you improve." — Thomas M. Sterner'
      },
      {
        title: "Patience Is a Skill — Train It Like Any Other",
        en: "We treat patience as a personality trait — either you have it or you don't. Sterner argues that patience is a skill that can be deliberately trained through practice. Every time you choose to stay with a difficult task rather than jumping to something easier, you are building your patience muscle. And like all muscles, the more you train it, the stronger it becomes.",
        hi: "हम patience को एक personality trait की तरह treat करते हैं — या तो आपके पास है या नहीं। Sterner का तर्क है कि patience एक ऐसा कौशल है जिसे जानबूझकर practice से train किया जा सकता है। जब भी आप किसी कठिन काम में लगे रहते हैं बजाय किसी आसान चीज़ पर कूदने के, आप अपनी patience train कर रहे हैं। और सभी muscles की तरह, जितना train करोगे, उतना मज़बूत होगा।",
        quote: '"Patience is not something we have or don\'t have. It is something we train." — Thomas M. Sterner'
      },
      {
        title: "Simplify — Reduce to the Essential",
        en: "When learning any complex skill, break it into the smallest possible components and master each one individually before combining them. Trying to work on everything at once creates overwhelm and slow progress. Deliberate practice is the art of reducing complexity to its essence and working there with full focus.",
        hi: "किसी भी complex skill को सीखते समय, उसे सबसे छोटे possible components में तोड़ें और उन्हें जोड़ने से पहले एक-एक को अलग-अलग master करें। एक साथ सब पर काम करने की कोशिश overwhelm और धीमी प्रगति पैदा करती है। Deliberate practice जटिलता को उसके सार तक कम करने और वहाँ पूरे focus के साथ काम करने की कला है।",
        quote: '"Reduce the target area of your attention until you are working on the smallest possible component." — Thomas M. Sterner'
      },
      {
        title: "Discipline Equals Freedom",
        en: "Discipline creates freedom, not restriction. The musician who practices scales every day has the freedom to improvise beautifully. The writer who shows up daily has the freedom to produce great work. The person who never practices is always a prisoner of their current limitations. Discipline is the price of freedom.",
        hi: "अनुशासन प्रतिबंध नहीं — स्वतंत्रता पैदा करता है। वो musician जो रोज़ scales practice करता है, उसे खूबसूरती से improvise करने की स्वतंत्रता है। वो writer जो रोज़ बैठता है, उसे महान काम करने की स्वतंत्रता है। जो कभी practice नहीं करता वो हमेशा अपनी मौजूदा सीमाओं का कैदी है। अनुशासन स्वतंत्रता की कीमत है।",
        quote: '"Discipline is not a restriction. It is the path to freedom." — Thomas M. Sterner'
      },
      {
        title: "Stay in the Moment — One Stroke at a Time",
        en: "When you are practicing, focus only on the note, the stroke, the word, the movement in front of you right now. Not the next measure. Not the whole symphony. Just this. The ability to stay present during repetitive, difficult practice is the skill that separates masters from amateurs.",
        hi: "Practice करते समय सिर्फ उस note, उस stroke, उस word, उस movement पर ध्यान दो जो अभी आपके सामने है। अगले measure पर नहीं। पूरी symphony पर नहीं। बस यह। दोहराव वाली, कठिन practice के दौरान present रहने की क्षमता वो कौशल है जो masters को amateurs से अलग करता है।",
        quote: '"Stay in the present. Just this note, just this stroke, just this moment." — Thomas M. Sterner'
      },
      {
        title: "Equanimity — The Unshakeable Practitioner",
        en: "Equanimity — a calm, even-minded response to both success and failure — is the hallmark of the master practitioner. When a practice session goes badly, the master does not spiral into frustration. When it goes well, they do not become complacent. Both outcomes are simply information. Emotional flatness in practice is the fertile ground in which mastery grows.",
        hi: "Equanimity — सफलता और विफलता दोनों के प्रति शांत, संतुलित प्रतिक्रिया — master practitioner की पहचान है। जब practice session बुरा जाता है, master निराशा में नहीं डूबता। जब अच्छा जाता है, तो complacent नहीं होता। दोनों नतीजे सिर्फ जानकारी हैं। Practice में भावनात्मक स्थिरता वो उपजाऊ ज़मीन है जिसमें mastery उगती है।",
        quote: '"Equanimity is the foundation of mastery." — Thomas M. Sterner'
      },
      {
        title: "Embrace Boredom — Where Growth Actually Lives",
        en: "The most important repetitions in any practice are the boring ones — the ones you don't feel like doing. The ability to embrace boredom, to find meaning in repetition, is what separates those who achieve mastery from those who plateau. Boredom is not a signal to stop. It is a signal that deep work is happening.",
        hi: "किसी भी practice में सबसे ज़रूरी repetitions वो boring वाले हैं — जो करने का मन नहीं करता। बोरियत को embrace करने की क्षमता, दोहराव में अर्थ खोजना, वो है जो mastery पाने वालों को plateau पर रुकने वालों से अलग करती है। बोरियत रुकने का संकेत नहीं — यह संकेत है कि गहरा काम हो रहा है।",
        quote: '"Boredom is not the enemy of practice. It is the doorway to mastery." — Thomas M. Sterner'
      },
      {
        title: "The Four S Words — Simplify, Small, Short, Slow",
        en: "When learning overwhelms you, Sterner prescribes four remedies: make it Simpler, make the target Smaller, shorten the Session, and slow Down the movement. Most learners do the opposite — they try harder, go longer, move faster — and burn out. When in doubt, do less. The tortoise always wins the long race.",
        hi: "जब सीखना आपको overwhelm करे, Sterner चार उपाय बताते हैं: इसे Simpler बनाओ, target को Smaller करो, Session छोटा करो, और movement को Slow करो। ज़्यादातर learners इसका उल्टा करते हैं — ज़्यादा कोशिश करते हैं, लंबे समय तक करते हैं — और burn out हो जाते हैं। संदेह होने पर कम करो। लंबी दौड़ में कछुआ हमेशा जीतता है।",
        quote: '"When in doubt, do less. Slow down. Simplify. The mastery will come." — Thomas M. Sterner'
      },
      {
        title: "You Are Always Practicing — Choose What",
        en: "The most unsettling insight: you are always practicing something. Every habit, every reaction, every thought pattern is a form of practice — and you are getting better at it every day, whether you intend to or not. Impatience, anxiety, avoidance — these are skills too. Choose your practice deliberately.",
        hi: "सबसे unsettling insight: आप हमेशा कुछ न कुछ practice कर रहे हैं। हर आदत, हर प्रतिक्रिया, हर विचार pattern एक प्रकार की practice है — और आप हर दिन उसमें बेहतर हो रहे हैं, चाहे आपका इरादा हो या न हो। अधीरता, चिंता, टालमटोल — ये भी कौशल हैं। अपनी practice जानबूझकर चुनें।",
        quote: '"You are always practicing something. The only question is: what?" — Thomas M. Sterner'
      }
    ]
  },
 
  "linchpin": {
    live: true,
    slug: "linchpin",
    title: "Linchpin",
    titleHtml: "<em>Linchpin</em>",
    author: "Seth Godin",
    genre: "Career · Creativity",
    rating: "★★★★★",
    cover: "https://covers.openlibrary.org/b/isbn/9781591843160-L.jpg",
    heroDesc: "The old social contract — follow the rules, show up, and get a safe job — is broken. Seth Godin makes the case for becoming indispensable: an artist, a giver, a linchpin. Here are 10 lessons that will change how you think about your work.",
    amazon: {
      IN: "https://www.amazon.in/dp/0749953357",
      US: "https://www.amazon.com/dp/1591843162",
      CA: "https://www.amazon.ca/dp/1591843162"
    },
    lessons: [
      {
        title: "Be a Linchpin — The Indispensable Human",
        en: "A linchpin is the pin that holds the wheel to the axle — remove it and everything falls apart. In the modern economy, the only truly secure position is being indispensable — not by following instructions better than anyone else, but by bringing something unique, creative, and human to your work that cannot be automated, outsourced, or replaced. Anyone can be a linchpin. Few choose to be.",
        hi: "Linchpin वो कील है जो पहिये को धुरी से जोड़ती है — इसे हटाओ और सब कुछ बिखर जाता है। आधुनिक अर्थव्यवस्था में, एकमात्र सच में सुरक्षित स्थान अपरिहार्य होना है — दूसरों से बेहतर निर्देशों का पालन करने से नहीं, बल्कि अपने काम में कुछ अनूठा, रचनात्मक और मानवीय लाने से जिसे automate, outsource या replace नहीं किया जा सकता।",
        quote: '"The only way to get what you\'re worth is to stand out, to exert emotional labor, to be seen as indispensable." — Seth Godin'
      },
      {
        title: "The Resistance — Your Brain's Safety Mechanism",
        en: "The biggest enemy of creative work is what Godin calls The Resistance — the lizard brain's attempt to keep you safe by keeping you small. It whispers: who are you to try this? What if you fail? The Resistance is not a sign that you are wrong. It is a sign that you are on the right track. Ship the work anyway.",
        hi: "रचनात्मक काम का सबसे बड़ा दुश्मन वो है जिसे Godin The Resistance कहते हैं — आपके lizard brain की आपको छोटा रखकर सुरक्षित रखने की कोशिश। यह फुसफुसाता है: तुम यह करने वाले कौन हो? अगर fail हो गए तो? Resistance इस बात का संकेत नहीं कि आप गलत हैं — यह संकेत है कि आप सही रास्ते पर हैं। फिर भी काम deliver करो।",
        quote: '"The Resistance is the voice in the back of our head telling us to back off, be careful, go slow, compromise." — Seth Godin'
      },
      {
        title: "Give Art — Emotional Labor Is the New Work",
        en: "Godin redefines art: it is not painting or music. Art is any act of genuine human creativity and connection — the waitress who makes you feel seen, the manager who resolves a conflict beautifully, the teacher who changes how a student sees the world. This kind of work — done with soul — is what Godin calls emotional labor. It cannot be outsourced.",
        hi: "Godin art को फिर से परिभाषित करते हैं: यह painting या music नहीं है। Art वास्तविक मानवीय रचनात्मकता और connection का कोई भी कार्य है — वो waitress जो आपको देखा हुआ महसूस कराती है, वो manager जो किसी conflict को खूबसूरती से सुलझाता है, वो teacher जो किसी student का दुनिया देखने का तरीका बदल देता है। यह emotional labor है। इसे outsource नहीं किया जा सकता।",
        quote: '"Art is the act of a human being doing something that might not work, and doing it anyway." — Seth Godin'
      },
      {
        title: "Maps vs. Compass — Lead Yourself",
        en: "Industrial workers need maps — clear instructions, defined steps, predictable outcomes. Linchpins need a compass — a sense of direction, a set of values, the ability to navigate uncertainty without being told what to do next. The economy no longer needs more map-followers. It desperately needs people who can lead themselves through ambiguity.",
        hi: "Industrial workers को maps चाहिए — स्पष्ट निर्देश, defined steps। Linchpins को compass चाहिए — दिशा का बोध, मूल्यों का समूह, यह बताए बिना कि आगे क्या करना है, अनिश्चितता में navigate करने की क्षमता। अर्थव्यवस्था को अब ज़्यादा map-followers की ज़रूरत नहीं। उसे उन लोगों की बेतहाशा ज़रूरत है जो खुद को अस्पष्टता के बीच lead कर सकें।",
        quote: '"The factory wants map readers. The new economy needs compass carriers." — Seth Godin'
      },
      {
        title: "Ship — Done Is the Engine of More",
        en: "The most important word in Godin's vocabulary is ship. Not plan. Not perfect. Ship. Get the work done, get it out into the world, and let it be judged. The Resistance will always find a reason to delay. The linchpin ships anyway — on time, with soul, even when it is not perfect. Shipping is what turns creative people into professionals.",
        hi: "Godin की शब्दावली में सबसे ज़रूरी शब्द है ship। Plan नहीं। Perfect नहीं। Ship। काम खत्म करो, दुनिया में बाहर निकालो, और उसे judge होने दो। Resistance हमेशा देरी का एक कारण खोज लेगा। Linchpin फिर भी ship करता है — समय पर, आत्मा के साथ, चाहे perfect न हो। Shipping वो प्रतिबद्धता है जो रचनात्मक लोगों को professionals में बदलती है।",
        quote: '"The only purpose of starting is to finish, and while the projects we do are never really finished, they must be shipped." — Seth Godin'
      },
      {
        title: "Give Gifts — Generosity as Strategy",
        en: "The most powerful thing a linchpin can do is give — ideas, help, credit, attention — without keeping score and without expectation of return. This is not naivety. It is a strategy. Generous people create obligation, trust, and connection that no amount of money can buy. The most successful people in every field are voracious givers.",
        hi: "एक linchpin जो सबसे शक्तिशाली काम कर सकता है वो है देना — ideas देना, मदद देना, credit देना — बिना हिसाब रखे और वापसी की उम्मीद के बिना। यह भोलापन नहीं। यह एक strategy है। उदार लोग obligation, भरोसा और connection बनाते हैं जो कोई भी पैसा नहीं खरीद सकता। हर क्षेत्र के सबसे सफल लोग voracious givers हैं।",
        quote: '"The linchpin gives gifts. Not to get something back, but because giving is what humans do." — Seth Godin'
      },
      {
        title: "You Are Not Your Job Title",
        en: "Factories taught us to identify ourselves by our job title. Godin challenges this. You are not your title. You are your work, your relationships, your ideas, your gifts. When you define yourself by what you do for people — not what you are called — you become free to be remarkable regardless of what the organisation chart says.",
        hi: "Factories ने हमें अपनी job title से खुद को पहचानना सिखाया। Godin इसे challenge करते हैं। आप अपनी title नहीं हैं। आप अपना काम हैं, अपने रिश्ते, अपने विचार, अपने gifts। जब आप खुद को इससे define करते हैं कि आप लोगों के लिए क्या करते हैं — न कि आपको क्या कहते हैं — तो आप remarkable होने के लिए स्वतंत्र हो जाते हैं।",
        quote: '"You don\'t need a job title to do great work. You just need to decide to." — Seth Godin'
      },
      {
        title: "Tribes Need Leaders — Be One",
        en: "Human beings are wired to form tribes — groups connected by shared ideas, values, and goals. Every tribe needs a leader who steps up, articulates the vision, and moves the group forward. Leadership is not a position — it is a choice available to anyone with the courage to make it. The world needs more leaders of followers.",
        hi: "इंसान tribes बनाने के लिए wired हैं — साझा ideas, मूल्यों और लक्ष्यों से जुड़े समूह। हर tribe को एक leader चाहिए जो आगे आए, vision को articulate करे। Leadership एक पद नहीं — यह एक विकल्प है जो उस साहस वाले किसी के लिए भी उपलब्ध है जो इसे बनाए। दुनिया को followers के ज़्यादा leaders चाहिए।",
        quote: '"Leaders lead when they choose to, not when they are told to." — Seth Godin'
      },
      {
        title: "The Gift of Not Fitting In",
        en: "School, corporations, and society reward conformity. But the linchpin does not entirely fit the mold — they bring a perspective, an approach, or a talent that is distinctly their own. What felt like a liability in school — being different, seeing things others don't — becomes the greatest asset in the real world. Your quirks are your competitive advantage.",
        hi: "स्कूल, corporations, और समाज conformity को पुरस्कृत करते हैं। लेकिन linchpin पूरी तरह साँचे में फिट नहीं होता — जो एक ऐसा perspective, approach, या talent लाता है जो distinctly उनका अपना है। जो स्कूल में liability लगता था — अलग होना, वो देखना जो दूसरे नहीं देखते — असली दुनिया में सबसे बड़ी asset बन जाता है।",
        quote: '"Being different is not a bug. It\'s a feature." — Seth Godin'
      },
      {
        title: "Choose Yourself — Stop Waiting for Permission",
        en: "The old model said: get the right credentials, impress the gatekeepers, and they will choose you. That model is dead. The internet and the connected economy have made it possible for anyone to choose themselves — to start, to publish, to lead, to create — without waiting for permission from anyone. The only question left is: will you?",
        hi: "पुराना model कहता था: सही credentials पाओ, gatekeepers को impress करो, और वो तुम्हें चुनेंगे। वो model मर चुका है। Internet और connected economy ने किसी के लिए भी खुद को चुनना संभव बना दिया है — शुरू करना, publish करना, lead करना, create करना — किसी से भी permission का इंतज़ार किए बिना। बचा सिर्फ एक सवाल है: क्या आप करेंगे?",
        quote: '"The only thing standing between you and your goal is the story you keep telling yourself." — Seth Godin'
      }
    ]
  },
 
  "subtle-art": {
    live: true,
    slug: "subtle-art",
    title: "The Subtle Art of Not Giving a F*ck",
    titleHtml: "The Subtle Art of <em>Not Giving a F*ck</em>",
    author: "Mark Manson",
    genre: "Philosophy · Self-Help",
    rating: "★★★★☆",
    cover: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
    heroDesc: "A counterintuitive approach to living a good life. Mark Manson argues that the key to happiness is not positivity — it is choosing what to care about carefully and embracing life's inevitable struggles. Here are 10 lessons that cut through the noise.",
    amazon: {
      IN: "https://www.amazon.in/dp/0062457713",
      US: "https://www.amazon.com/dp/0062457713",
      CA: "https://www.amazon.ca/dp/0062457713"
    },
    lessons: [
      {
        title: "Not Giving a F*ck Does Not Mean Indifference",
        en: "Manson's title is deliberately provocative, but his point is precise: not giving a f*ck doesn't mean caring about nothing. It means choosing very carefully what you give a f*ck about. The problem is not that people care too little — it is that they care too much about things that don't matter: other people's opinions, social media metrics, minor slights. The art is in the selection.",
        hi: "Manson का title जानबूझकर provocative है, लेकिन उनका point precise है: परवाह न करना मतलब किसी चीज़ की परवाह न करना नहीं। इसका मतलब है यह बहुत सावधानी से चुनना कि आप किसकी परवाह करते हैं। समस्या यह नहीं कि लोग बहुत कम परवाह करते हैं — यह है कि वो बहुत सारी ऐसी चीज़ों की बहुत ज़्यादा परवाह करते हैं जो मायने नहीं रखतीं। कला चुनाव में है।",
        quote: '"The key to a good life is not giving a f*ck about more; it\'s giving a f*ck about less." — Mark Manson'
      },
      {
        title: "The Feedback Loop From Hell",
        en: "Modern culture tells us we should feel good all the time. So when we feel bad, we feel bad about feeling bad — which makes us feel worse. Manson calls this the Feedback Loop From Hell. The path out is counterintuitive: stop trying to feel good. Accept that negative emotions — anxiety, sadness, anger — are a natural and necessary part of a meaningful life.",
        hi: "आधुनिक संस्कृति हमें बताती है कि हमें हर समय अच्छा महसूस करना चाहिए। इसलिए जब हम बुरा महसूस करते हैं, तो हम बुरा महसूस करने के बारे में बुरा महसूस करते हैं। Manson इसे Feedback Loop From Hell कहते हैं। बाहर का रास्ता counter-intuitive है: अच्छा महसूस करने की कोशिश बंद करो। स्वीकार करो कि नकारात्मक भावनाएं एक meaningful जीवन का स्वाभाविक हिस्सा हैं।",
        quote: '"Don\'t hope for a life without problems. Hope for a life with good problems." — Mark Manson'
      },
      {
        title: "You Are Not Special — And That Is Liberating",
        en: "An entire generation was raised on the idea that they were special and destined for greatness. Manson argues this has backfired spectacularly. The belief that you are exceptional — without evidence — creates entitlement, fragility, and chronic dissatisfaction. The liberation comes from accepting that ordinariness — done with love, consistency, and craft — is more than enough.",
        hi: "एक पूरी पीढ़ी इस विचार पर पली है कि वे special और महानता के लिए destined हैं। Manson का तर्क है कि यह बुरी तरह backfire हुआ है। बिना सबूत के exceptional होने का विश्वास entitlement, fragility और chronic dissatisfaction पैदा करता है। मुक्ति इस स्वीकृति से आती है कि प्रेम, consistency और craft के साथ की गई साधारणता काफी से ज़्यादा है।",
        quote: '"The desire for more positive experience is itself a negative experience." — Mark Manson'
      },
      {
        title: "The Value of Suffering — Choose Your Problems",
        en: "Happiness is not about having no problems. It is about having good problems — problems that are meaningful, that align with your values, that you are willing to struggle for. Manson asks: what pain are you willing to sustain? Your answer to that question determines more about your life than any goal you might set.",
        hi: "खुशी कोई समस्या न होने के बारे में नहीं है। यह अच्छी समस्याएं होने के बारे में है — ऐसी समस्याएं जो meaningful हैं, जो आपके मूल्यों के अनुरूप हैं, जिनके लिए आप संघर्ष करने को तैयार हैं। Manson पूछते हैं: आप किस दर्द को झेलने के लिए तैयार हैं? उस सवाल का आपका जवाब आपकी ज़िंदगी के बारे में किसी भी लक्ष्य से ज़्यादा कुछ तय करता है।",
        quote: '"What determines your success isn\'t what you want to enjoy — it\'s what pain you are willing to sustain." — Mark Manson'
      },
      {
        title: "You Are Always Choosing — Radical Responsibility",
        en: "You are always responsible for your own experience, even when you didn't choose the circumstances. You didn't choose your childhood or your trauma — but you always choose how you interpret and respond to them. Blame feels comfortable because it transfers responsibility. But it also transfers your power. Taking radical ownership is the only path to freedom.",
        hi: "आप हमेशा अपने अनुभव के लिए ज़िम्मेदार हैं, तब भी जब आपने परिस्थितियाँ नहीं चुनी थीं। आपने अपना बचपन, अपना trauma नहीं चुना — लेकिन आप हमेशा यह चुनते हैं कि उन्हें कैसे interpret और respond करते हैं। दोष देना comfortable लगता है क्योंकि यह ज़िम्मेदारी transfer करता है। लेकिन यह आपकी शक्ति भी transfer करता है। Radical ownership ही स्वतंत्रता का एकमात्र रास्ता है।",
        quote: '"We don\'t always control what happens to us. But we always control how we interpret it and what we do next." — Mark Manson'
      },
      {
        title: "Be Wrong Often — It Means You Are Growing",
        en: "Certainty is the enemy of growth. The more certain you are about your beliefs, the less open you are to learning and improving. Intellectual humility is a core life skill: assume you are wrong about many things, seek out evidence that challenges your views, and update your beliefs when the evidence demands it. Being wrong often is how the wise become wiser.",
        hi: "निश्चितता विकास की दुश्मन है। आप अपनी beliefs के बारे में जितने निश्चित हैं, सीखने और बेहतर होने के लिए उतने कम खुले हैं। Intellectual humility एक core जीवन कौशल है: मान लो कि आप बहुत सी चीज़ों के बारे में गलत हो, ऐसे सबूत ढूंढो जो आपके views को challenge करें, और जब सबूत माँगे तो अपनी beliefs update करो।",
        quote: '"The more something threatens your identity, the more you will avoid it." — Mark Manson'
      },
      {
        title: "Failure Is Forward",
        en: "Most people avoid failure at all costs — and as a result, they avoid growth. Failure is not the opposite of success; it is part of success. Every meaningful achievement is built on a foundation of failed attempts and humbling setbacks. The only way to avoid failure is to never try anything worth doing. And that is the greatest failure of all.",
        hi: "ज़्यादातर लोग हर कीमत पर failure से बचते हैं — और नतीजतन, विकास से बचते हैं। Failure सफलता का विपरीत नहीं — यह सफलता का हिस्सा है। हर meaningful उपलब्धि failed प्रयासों की नींव पर बनी है। Failure से बचने का एकमात्र तरीका है — कभी कुछ ऐसा try न करो जो करने लायक हो। और वही सबसे बड़ी failure है।",
        quote: '"Don\'t just sit there. Do something. The answers will follow." — Mark Manson'
      },
      {
        title: "The Importance of Saying No",
        en: "Depth of relationship, skill, and meaning — all require saying no to the many so you can say yes to the few. Without rejection — of opportunities, people, possible paths — you cannot build anything of lasting value. Every yes costs a no. Choose your yeses carefully.",
        hi: "रिश्ते की गहराई, कौशल की गहराई, अर्थ की गहराई — सब के लिए कई चीज़ों को ना कहना ज़रूरी है ताकि आप कुछ को हाँ कह सकें। Rejection के बिना — अवसरों के, लोगों के, possible paths के — आप कोई भी lasting मूल्य की चीज़ नहीं बना सकते। हर हाँ एक ना की कीमत पर आती है। अपनी हाँ सावधानी से चुनें।",
        quote: '"Pursuing things that make us feel good is at odds with pursuing things that are actually good for us." — Mark Manson'
      },
      {
        title: "Death Is the Answer — Use It as a Compass",
        en: "Our awareness of mortality — if we face it honestly rather than avoiding it — is the most clarifying force in a human life. When you know you will die, trivial concerns fall away. The question becomes: what is worth my finite time and energy? Death is not the enemy of a good life. Ignoring it is.",
        hi: "मृत्यु की हमारी जागरूकता — अगर हम इसे avoid करने की बजाय honestly face करें — एक human जीवन में सबसे clarifying शक्ति है। जब आप जानते हैं कि आप मरेंगे, तुच्छ चिंताएं गायब हो जाती हैं। सवाल बनता है: मेरे सीमित समय और ऊर्जा के लायक क्या है? मृत्यु एक अच्छे जीवन की दुश्मन नहीं। उसे ignore करना है।",
        quote: '"The only way to be comfortable with death is to understand yourself as something bigger than yourself." — Mark Manson'
      },
      {
        title: "Commitment Is Freedom",
        en: "The pursuit of endless options — always keeping choices open, never fully committing — feels like freedom but creates anxiety, shallowness, and regret. Commitment is what creates freedom: committing to a partner deepens love in ways casual relationships never can; committing to a craft creates mastery; committing to values creates peace. The fear of missing out is the guarantee of missing everything.",
        hi: "अनंत विकल्पों की खोज — हमेशा choices खुले रखना, कभी पूरी तरह commit न करना — स्वतंत्रता जैसी लगती है लेकिन चिंता, उथलापन, और अफ़सोस पैदा करती है। Commitment ही स्वतंत्रता पैदा करती है: किसी partner के प्रति commitment प्रेम को गहरा करती है; एक craft के प्रति commitment mastery बनाती है। FOMO का डर सब कुछ miss करने की गारंटी है।",
        quote: '"Commitment gives you freedom because you\'re no longer distracted by the unimportant." — Mark Manson'
      }
    ]
  }
};
