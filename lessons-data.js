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
    amazon: {
      IN: "https://www.amazon.in/dp/1585424331",
      US: "https://www.amazon.com/dp/1585424331",
      CA: "https://www.amazon.ca/dp/1585424331"
    },
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
    amazon: {
      IN: "https://www.amazon.in/dp/1847941834",
      US: "https://www.amazon.com/dp/0735211299",
      CA: "https://www.amazon.ca/dp/0735211299"
    },
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
    amazon: {
      IN: "https://www.amazon.in/dp/0062315005",
      US: "https://www.amazon.com/dp/0062315005",
      CA: "https://www.amazon.ca/dp/0062315005"
    },
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
    amazon: {
      IN: "https://www.amazon.in/dp/1612680194",
      US: "https://www.amazon.com/dp/1612680194",
      CA: "https://www.amazon.ca/dp/1612680194"
    },
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
  }

};
