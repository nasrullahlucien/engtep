/**
 * ENGLISH TEP Master - Quizzes Data
 * Contains 90 questions:
 *  - 20 Grammar & Structure
 *  - 15 Error Identification
 *  - 15 Cloze Test (3 passages)
 *  - 40 Reading Comprehension (14 passages)
 * Unaltered question/content retention.
 */
window.TEP = window.TEP || {};

// 1. Grammar & Structure (20 Items)
window.TEP.grammarQuizData = [
    {
        q: "1. Blocking some people on Facebook not only prevents them from contacting or communicating with you, but it also ________ you invisible to them - like Harry Potter's magic cloak.",
        options: ["make", "makes", "is made", "have made"],
        ans: 1,
        exp: "จุดตาย: โครงสร้าง Not only... but also กริยาคล้อยตามประธานหลัง (it) จึงต้องเติม -s (makes)"
    },
    {
        q: "2. Students who are motivated can produce higher quality effort, learn more deeply, and ________ better in classes and on proficiency tests.",
        options: ["perform", "performing", "to perform", "are performing"],
        ans: 0,
        exp: "จุดตาย: Parallelism หน้า and เป็น V.inf (produce, learn) หลัง and ก็ต้องเป็น V.inf (perform)"
    },
    {
        q: "3. According to the news, two men ________ buyer.",
        options: ["arrested", "are arresting", "were arrested", "would arrest"],
        ans: 2,
        exp: "จุดตาย: ผู้ชายสองคนถูกจับ (ประธานทำกริยาเองไม่ได้) ต้องใช้ Passive Voice (Verb to be + V.3) และเป็นอดีต (were arrested)"
    },
    {
        q: "4. By the time everyone arrives at the airport, the plane ________",
        options: ["will take off", "has taken off", "is going to take off", "will have taken off"],
        ans: 3,
        exp: "จุดตาย: เจอ By the time + Present ต้องจับคู่กับ Future Perfect (will have + V.3)"
    },
    {
        q: "5. Today, Mount Everest is so overcrowded and full of trash that it has been called the 'world's ________ garbage dump.'",
        options: ["higher", "more higher", "highest", "most highest"],
        ans: 2,
        exp: "จุดตาย: ต้องการความหมายขั้นสุด 'ที่สุดในโลก' ใช้ highest (the highest)"
    },
    {
        q: "6. In 2022, the United States ________ over 25 natural disasters, like hurricanes and wildfires...",
        options: ["encounters", "encountered", "was encountering", "has encountered"],
        ans: 1,
        exp: "จุดตาย: ระบุปีในอดีตชัดเจน (In 2022) ต้องใช้ Past Simple ช่อง 2 (encountered)"
    },
    {
        q: "7. Having a lot of homework and assignments, my friends and I ________ after studying in this prestigious university.",
        options: ["always", "usually", "often", "seldom"],
        ans: 3,
        exp: "ความหมาย: เพราะมีการบ้านเยอะ พวกเราจึง 'แทบจะไม่ (seldom)' ได้พักหลังเรียนจบ"
    },
    {
        q: "8. Not only can the study of foreign language broaden your perspectives of the world, but it also ________ more positive attitudes...",
        options: ["create", "creates", "creating", "creation"],
        ans: 1,
        exp: "จุดตาย: Not only... but also กริยาผันตามประธานหลัง (it) เป็นเอกพจน์ จึงเติม -s (creates)"
    },
    {
        q: "9. People who ________ alcohol can become dependent on the drug...",
        options: ["regular drink", "regularly drink", "drink regular", "drink regularly"],
        ans: 1,
        exp: "จุดตาย: ขยายกริยา drink ต้องใช้ Adverb (regularly) วางไว้หน้ากริยาแท้ -> regularly drink"
    },
    {
        q: "10. The huge number of car accidents ________ when the drivers used their smartphones for texting while driving.",
        options: ["occur", "occurs", "occurred", "have occurred"],
        ans: 2,
        exp: "จุดตาย: ประโยคหลังบอกเวลาในอดีต (used) ประโยคหลักก็ต้องเป็นอดีตช่อง 2 (occurred) ให้สอดคล้องกัน"
    },
    {
        q: "11. Nowadays, GPS ________ as a navigation and positioning tool in airplanes, cars, or ships...",
        options: ["is using", "will use", "has been used", "which is used"],
        ans: 2,
        exp: "จุดตาย: GPS ถูกใช้ (Passive Voice: be + V.3) และเป็นเรื่องตั้งแต่อดีตถึงปัจจุบัน จึงเป็น Present Perfect Passive (has been used)"
    },
    {
        q: "12. The best-known benefit of sunlight is its ability to boost the body's vitamin D supply; most cases of vitamin D deficiency are ________ the lack of outdoor sun exposure.",
        options: ["in case of", "thanks to", "in spite of", "in addition to"],
        ans: 1,
        exp: "จุดตาย: ต้องการคำบอกสาเหตุ 'เนื่องจาก' (thanks to) การขาดการโดนแดด"
    },
    {
        q: "13. Having various kinds of problems to deal with, some university students are likely ________ from mental problems.",
        options: ["to suffer", "suffer", "suffering", "suffered"],
        ans: 0,
        exp: "จุดตาย: เจอคำว่า likely (มีแนวโน้ม) ต้องตามด้วย to + V.inf เสมอ (to suffer)"
    },
    {
        q: "14. Since he, together with his friends, ________ Facebook when he was just nineteen years old...",
        options: ["found", "founded", "was founding", "had been founded"],
        ans: 1,
        exp: "คำศัพท์: คำว่าก่อตั้งคือ found (ช่อง 1) เป็นอดีตเติม -ed กลายเป็น founded (ส่วน found ที่แปลว่าพบ มาจาก find)"
    },
    {
        q: "15. While my friends and I ________ our study notes in the school library, we heard an explosion coming from the experiment room.",
        options: ["review", "are reviewing", "have reviewed", "were reviewing"],
        ans: 3,
        exp: "จุดตาย: เจอ While มักจะตามด้วย Past Continuous (were reviewing) ตัดกับเหตุการณ์ที่แทรกเข้ามา (heard - V.2)"
    },
    {
        q: "16. Nowadays, it is undeniable that online shopping is ________ than in-store shopping due to its convenience and simplicity.",
        options: ["more popular", "the most popular", "as popular", "so much popular"],
        ans: 0,
        exp: "จุดตาย: เจอคำว่า than ต้องใช้ขั้นกว่า (more popular)"
    },
    {
        q: "17. Although almost all spiders produce venom, only a few ________ as venomous and able to cause significant harm to humans...",
        options: ["classify", "is classifying", "are classified", "will classify"],
        ans: 2,
        exp: "จุดตาย: แมงมุมจำนวนน้อย 'ถูกจัดประเภท' (Passive Voice) และ a few เป็นพหูพจน์ ต้องใช้ are classified"
    },
    {
        q: "18. In fact, there are slight differences between type and kind, but ________ can often be used interchangeably, especially when talking about food",
        options: ["it", "they", "theirs", "them"],
        ans: 1,
        exp: "จุดตาย: สรรพนามทำหน้าที่ประธาน แทนคำนามพหูพจน์ (differences) ต้องใช้ they"
    },
    {
        q: "19. If the committee ________ any scientific evidence, they wouldn't have changed the regulations to allow men to compete with women.",
        options: ["reviews", "have reviewed", "was reviewing", "had reviewed"],
        ans: 3,
        exp: "จุดตาย: ประโยคหลักเป็น wouldn't have + V.3 แสดงว่าเป็น If-clause type 3 ประโยค If ต้องเป็น Past Perfect (had + V.3)"
    },
    {
        q: "20. Apples, rich in vitamins, minerals, and fiber, ________ an incredibly nutritious fruit that offers multiple health benefits.",
        options: ["is", "are", "have", "has"],
        ans: 1,
        exp: "ความสอดคล้อง: ประธานคือ Apples (พหูพจน์) ส่วนที่คั่นจุลภาคเป็นแค่ส่วนขยาย กริยาแท้ต้องสอดคล้องกับพหูพจน์คือ are"
    }
];

// 2. Error Identification (15 Items, 36 - 50)
window.TEP.errorQuizData = [
    {
        q: "36. (A) Most types of instant noodles (B) tend to be low in calories, fiber and protein, with (C) more higher (D) amounts of fat, carbs, sodium and select micronutrients.",
        options: ["Most types", "tend to be", "more higher", "amounts of fat"],
        ans: 2,
        exp: "จุดตาย: more higher (แก้ไขเป็น higher) - ห้ามใช้ more ซ้อนกับคำที่เติม -er เด็ดขาด (Double Comparative)"
    },
    {
        q: "37. Steroid treatment can stop the body producing (A) natural hormones, (B) which can be (C) dangerous if you (D) got ill, have an accident or need an operation.",
        options: ["natural hormones", "which can be", "dangerous", "got ill"],
        ans: 3,
        exp: "จุดตาย: got ill (แก้ไขเป็น get ill) - ประโยคเงื่อนไข If-clause Type 1 ที่เป็นความจริงทั่วไป ต้องใช้ Present Simple (V.1)"
    },
    {
        q: "38. Cinnamon has (A) potent antioxidant activity, (B) helps fight inflammation and (C) have been shown (D) to lower cholesterol and triglycerides in the blood.",
        options: ["potent antioxidant", "helps fight", "have been shown", "to lower cholesterol"],
        ans: 2,
        exp: "จุดตาย: have been shown (แก้ไขเป็น has been shown) - ประธานคือ Cinnamon เป็นเอกพจน์ กริยาต้องใช้ has (Subject-Verb Agreement)"
    },
    {
        q: "39. If you want to get (A) more views on YouTube, you need (B) to response to viewer comments, (C) create video playlists, design attention-grabbing thumbnails (D) and more.",
        options: ["more views", "to response", "create video", "and more"],
        ans: 1,
        exp: "จุดตาย: to response (แก้ไขเป็น to respond) - โครงสร้าง need to ต้องตามด้วยกริยาช่อง 1 (Infinitive) แต่ response เป็นคำนาม"
    },
    {
        q: "40. Nocturnal bats find (A) its food by using sound, (B) while some snakes (C) hunt by sensing body (D) warmth.",
        options: ["its food", "while some", "hunt by sensing", "warmth"],
        ans: 0,
        exp: "จุดตาย: its food (แก้ไขเป็น their food) - ค้างคาว (bats) เป็นพหูพจน์ สรรพนามแสดงความเป็นเจ้าของต้องใช้ their (Pronoun Agreement)"
    },
    {
        q: "41. A deep-sea submersible (A) carrying five (B) person on a voyage to the century-old wreck of the Titanic (C) was found in pieces from a catastrophic implosion that (D) killed everyone aboard.",
        options: ["carrying five", "person", "was found in pieces", "killed everyone"],
        ans: 1,
        exp: "จุดตาย: person (แก้ไขเป็น people) - ตัวเลข 5 ต้องตามด้วยคำนามพหูพจน์ (Plural Nouns)"
    },
    {
        q: "42. Social welfare is an (A) essential service system for (B) the elderly in Thailand, (C) especially when Thailand (D) has became an 'Aging Society'.",
        options: ["essential service", "the elderly", "especially", "has became"],
        ans: 3,
        exp: "จุดตาย: has became (แก้ไขเป็น has become) - โครงสร้าง Present Perfect (has/have + V.3) กริยาช่อง 3 ของ become คือ become (ไม่ใช่ became)"
    },
    {
        q: "43. Per capita income of (A) all the countries (B) are calculated in dollars because US dollar (C) is considered (D) as the medium of international exchange.",
        options: ["all the countries", "are calculated", "is considered", "as the medium"],
        ans: 1,
        exp: "จุดตาย: are calculated (แก้ไขเป็น is calculated) - ประธานหลักคือ Per capita income (รายได้) เป็นนามนับไม่ได้ถือเป็นเอกพจน์ ต้องใช้ is"
    },
    {
        q: "44. Shampoos containing (A) harshly chemicals can strip off the natural oils from your scalp and hair, (B) so wash your hair (C) less often and use shampoos that (D) suit your hair type.",
        options: ["harshly", "so wash your hair", "less often", "suit your hair"],
        ans: 0,
        exp: "จุดตาย: harshly (แก้ไขเป็น harsh) - หน้าคำนาม (chemicals) ต้องขยายด้วย Adjective ไม่ใช่ Adverb (-ly)"
    },
    {
        q: "45. Japan, (A) one of the world's most literate and (B) technically advanced countries, (C) are an East Asian archipelago country (D) made up of four primary islands and more than 6,800 others.",
        options: ["one of the world's", "technically advanced", "are an", "made up of"],
        ans: 2,
        exp: "จุดตาย: are an (แก้ไขเป็น is an) - ประธานของประโยคคือ Japan (เอกพจน์) ดังนั้นกริยาต้องใช้ is"
    },
    {
        q: "46. If you (A) drank alcohol or smoke cigarettes (B) while you're pregnant, you (C) can put your unborn baby's health (D) at risk, as well as your own.",
        options: ["drank", "while you're", "can put your", "at risk"],
        ans: 0,
        exp: "จุดตาย: drank (แก้ไขเป็น drink) - โครงสร้างคู่ขนาน (Parallelism) เชื่อมด้วย or ข้างหลังเป็น smoke (V.1) ข้างหน้าก็ต้องเป็น drink (V.1)"
    },
    {
        q: "47. Education helps you (A) development a variety of (B) skills (C) like decision-making, problem-solving, or logical and critical (D) thinking.",
        options: ["development", "skills", "like decision-making", "thinking"],
        ans: 0,
        exp: "จุดตาย: development (แก้ไขเป็น develop) - โครงสร้าง help someone... ต้องตามด้วยกริยาช่อง 1 (V.inf) แต่ development เป็นคำนาม"
    },
    {
        q: "48. Planetary researchers (A) have found that the Lava tubes on Mars and the Moon are up to 1,000 times (B) more bigger than (C) those on the Earth, and can host entire planetary bases (D) for future space exploration.",
        options: ["have found", "more bigger", "those on the Earth", "for future"],
        ans: 1,
        exp: "จุดตาย: more bigger (แก้ไขเป็น bigger) - เป็นการใช้ขั้นกว่าซ้ำซ้อน (Double Comparative) คำที่เติม -er แล้วห้ามใส่ more"
    },
    {
        q: "49. From their (A) disconditional love to their ability (B) to combat loneliness and teach empathy, pets (C) provide physical, mental and emotional benefits (D) which can help their owners be better people.",
        options: ["disconditional", "to combat", "provide physical", "which can help"],
        ans: 0,
        exp: "จุดตาย: disconditional (แก้ไขเป็น unconditional) - เป็นการใช้ Prefix ผิดความหมาย คำว่าไม่มีเงื่อนไขในภาษาอังกฤษคือ unconditional"
    },
    {
        q: "50. (A) Not only does exercise (B) relieve depression and anxiety, (C) but it also lowers stress levels, improves (D) confident, memory and overall mood.",
        options: ["Not only does", "relieve depression", "but it also lowers", "confident"],
        ans: 3,
        exp: "จุดตาย: confident (แก้ไขเป็น confidence) - โครงสร้างคู่ขนาน (Parallelism) หลัง and เป็นคำนาม (memory, mood) ดังนั้นหน้า and ต้องเป็นนามด้วย"
    }
];

// 3. Cloze Test (3 Passages, 15 Items, 21 - 35)
window.TEP.clozeData = [
    {
        id: 1,
        title: "Passage 1: The land of smiles",
        text: "Thailand is one of the most favorite countries among travelers or tourists from around the world to visit for many reasons. One of those reasons is that Thai people are very nice and friendly. They're always happy, always smiling, extremely polite, and always [BLANK_21]. We can see them smiling everywhere, especially when they see us walking along the street, sitting on the train, eating at restaurants, [BLANK_22] even buying things at the 7-Eleven convenient stores. Not only do they smile to us pleasantly, but they often greet us with heart-warming gestures. When we are in trouble, they will [BLANK_23] help us out although we cannot communicate with them in Thai. They always lend a hand when the occasion arises. They have a heart of gold and are extremely helpful. [BLANK_24] the renowned kindness and hospitality of the Thais, their ways of life are also incredibly amazing. The cost of living here is also reasonable. The foods, the prices, the beautiful hotels or cheap hostels, the beautiful beaches or islands, and various kinds of the tourist attractions here are out of the world. That's the reason why this land of smiles can always [BLANK_25] the hearts of a massive numbers of the travelers and tourists worldwide.",
        questions: [
            {
                qNum: 21,
                options: ["entertain", "entertainment", "entertaining", "entertained"],
                ans: 2,
                exp: "จุดตาย: Parallelism หน้า and เป็น adj. (happy, smiling, polite) หลัง and ก็ต้องเป็น adj. ด้วย (entertaining)"
            },
            {
                qNum: 22,
                options: ["or", "but", "so", "also"],
                ans: 0,
                exp: "ความหมาย: เชื่อมตัวเลือกที่คล้อยตามกัน (หรือแม้กระทั่ง...) ใช้ or"
            },
            {
                qNum: 23,
                options: ["active", "actively", "activeness", "activity"],
                ans: 1,
                exp: "จุดตาย: ขยายกริยา (help) ต้องใช้ Adverb (actively)"
            },
            {
                qNum: 24,
                options: ["Due to", "In case of", "Despite", "In addition to"],
                ans: 3,
                exp: "ความหมาย: เนื้อความเสริมกัน นอกเหนือจากความใจดีแล้ว (In addition to) วิถีชีวิตก็น่าทึ่งด้วย"
            },
            {
                qNum: 25,
                options: ["embrace", "embraces", "embracing", "embracement"],
                ans: 0,
                exp: "จุดตาย: หลัง Modal verb (can) ต้องเป็น V.inf ไม่เปลี่ยนรูป (embrace)"
            }
        ]
    },
    {
        id: 2,
        title: "Passage 2: Job Interview",
        text: "The job interview is probably one of the most challenging steps you will take before getting your dream job. It's considered your best chance to express how talented you really are and [BLANK_26] a hiring personnel manager or convince a recruitment team that you are qualified and suitable for the job. Therefore, getting ready for it or knowing how to prepare for the job interview is highly recommended in order not to miss your change to get your desired job. Firstly, you should read and review the job description, for example, what kinds of jobs you are going to do when hired, what duties or tasks you will be specially assigned, or what skills [BLANK_27] for the job. This can provide an understanding of the major purpose of the position and where the role fits into the organization. Try to read it thoroughly and be sure to align your abilities and competencies with the skills required for the job. Next, research the company or organization you are going to apply for your job. In general, organizations look to hire applicants [BLANK_28] have similar values to those of the company culture. This will give you an insight into the organization's future goals and plans. Last but not least, prepare for questions you will be asked so that you can give them the proper answers. Hesitation or lack [BLANK_29] your self-confidence while getting interviewed may lead to failure. During the interview, be confident, be honest and be positive. Remember that no one likes a complainer, so don't dwell on negative experiences while expressing your ideas or attitudes. [BLANK_30], you should plan your journey to the interview. Make sure you arrive on time, or better yet, at least 30 minutes early. Think of what you are going to wear. Make sure your clothes are clean, ironed and presentable.",
        questions: [
            {
                qNum: 26,
                options: ["show", "showing", "to show", "be shown"],
                ans: 0,
                exp: "จุดตาย: Parallelism เชื่อมด้วย and หน้าคือ express (V.inf) หลังก็ต้องเป็น show (V.inf)"
            },
            {
                qNum: 27,
                options: ["requires", "requiring", "are required", "have required"],
                ans: 2,
                exp: "จุดตาย: ทักษะอะไร 'ถูกต้องการ' สำหรับงาน (Passive Voice: are required)"
            },
            {
                qNum: 28,
                options: ["who", "whom", "whose", "which"],
                ans: 0,
                exp: "จุดตาย: Relative Pronoun แทนคน (applicants) ทำหน้าที่เป็นประธานของประโยคย่อย ใช้ who"
            },
            {
                qNum: 29,
                options: ["with", "for", "in", "of"],
                ans: 3,
                exp: "จุดตาย: คำว่า lack มักตามด้วยบุพบท of (lack of = ขาดแคลน)"
            },
            {
                qNum: 30,
                options: ["However", "Moreover", "On the contrary", "As a result"],
                ans: 1,
                exp: "จุดตาย: ข้อความเสริมกัน (ให้เตรียมตอบคำถาม และ 'นอกจากนี้' ยังต้องเตรียมการเดินทาง) ใช้ Moreover"
            }
        ]
    },
    {
        id: 3,
        title: "Passage 3: English Language",
        text: "As the world continues to move in a globalized direction, English is one of the most important languages to know. English is considered crucial not only in Thailand but also in many countries across the world. Knowing English can bring a lot of benefits to everyone, no matter who you are or where you live. Simply said, speaking English is incredibly sexy and it can make you more [BLANK_31], interesting, and gives you an air of intelligence. It is undeniable that English is the main language for studying any subject all over the world. If you want to broaden your minds, develop your skills, and [BLANK_32] the quality of life, you shouldn't leave your English behind. Make sure you keep practicing all four skills every day: reading, listening, speaking and writing. One of the best ways is to try out as many resources as you can. Discard the ones that are too easy or too difficult. This may discourage and demotivate you to learn or even waste your time. Choose and keep using the ones that meet your interests and are just right to your English level. For example, a lot of people enjoy [BLANK_33] their English skills by watching English movies, listening to English songs, or reading English novels, magazines, articles, and news. In Thailand, those who can speak English are likely to get [BLANK_34] desired job. Also, a number of well-known jobs or occupations require good English speakers. Proficiency in English is a critical component of a successful modern society. The more proficient you are, the [BLANK_35] you can get hired. In addition to opening up your employment opportunities, being able to speak English provides you an endless advantage.",
        questions: [
            {
                qNum: 31,
                options: ["charisma", "charismatic", "charismatically", "charismas"],
                ans: 1,
                exp: "ไวยากรณ์: ตามหลัง make you + adjective ต้องเป็น charismatic (มีเสน่ห์)"
            },
            {
                qNum: 32,
                options: ["improve", "improving", "improvable", "improvement"],
                ans: 0,
                exp: "จุดตาย: Parallelism -> broaden, develop, and improve (V.inf ทั้งหมด)"
            },
            {
                qNum: 33,
                options: ["practices", "to practice", "practicing", "for practicing"],
                ans: 2,
                exp: "จุดตาย: กริยา enjoy ต้องตามด้วย V.ing เสมอ (enjoy practicing)"
            },
            {
                qNum: 34,
                options: ["his", "her", "his or her", "their"],
                ans: 3,
                exp: "จุดตาย: สรรพนามแทน those who (พหูพจน์) ต้องใช้ their"
            },
            {
                qNum: 35,
                options: ["better", "more better", "best", "most best"],
                ans: 0,
                exp: "จุดตาย: โครงสร้าง Double Comparative (The more..., the better...)"
            }
        ]
    }
];

// 4. Reading Comprehension (14 Passages, 40 Items)
window.TEP.readingData = [
    {
        title: "Passage 1: Bullying",
        text: `Bullying takes place in the context of relationships. It is behavior that can make people feel hurt, threatened, frightened and left out and it can happen face to face and online.
Bullying is both behavior and impact; what someone does and the impact it has on the other person's capacity to feel in control of themselves. We call this their sense of 'agency'. Bullying takes place in the context of relationships. It is behavior that can make people feel hurt, threatened, frightened and left out and it can happen anywhere, both face to face and online.
Bullying behavior can harm people physically or emotionally and, although the actual behavior might not be repeated, the threat that it might can be sustained over time, typically by actions: looks, messages, confrontations, physical interventions, or the fear of these. This behavior can include: Being called names, teased, put down or threatened face to face and/or online, being hit, tripped, pushed or kicked. Having belongings taken or damaged. Being ignored, left out or having rumors spread about you. Sending abusive messages, pictures or images on social media, online gaming platforms or phone. Behavior which makes people feel like they are not in control of themselves or their lives. Being targeted because of who you are or who you are perceived to be.
Every bullying incident should be looked at individually. In some cases, children or young people may not be aware that their behavior is actually bullying. They are perhaps modelling the behavior of adults or other children and young people, not understanding that it is wrong because they have never been taught otherwise. In these circumstances, the intent to bully may not be present, but the impact and effect on the person being bullied will be no less severe because of this.
It must be explained to the person bullying that their behavior is unacceptable and why. Intent is difficult to prove and young people can often reframe their behavior when challenged. It's more important to focus on the behavior and the impact it had, rather than trying to establish whether someone acted deliberately or not.`,
        questions: [
            {
                q: "1. What is the main purpose of the passage?",
                options: [
                    "To help bullied people deal with the problems more effectively.",
                    "To support a person being bullied on social media.",
                    "To explain the reasons why bullying can harm people physically and emotionally.",
                    "To blame people who bully others deliberately"
                ],
                ans: 2,
                exp: "ใช้แทคติก คำถาม Main purpose: อ่านแค่ย่อหน้าแรกและย่อหน้าสุดท้ายก็จับแก่นได้ว่า บทความอธิบายถึงพฤติกรรมกลั่นแกล้งและผลกระทบทางร่างกายและจิตใจ"
            },
            {
                q: "2. According to the text, where can bullying take place?",
                options: ["Anywhere", "At work places", "On teenagers' websites", "At home"],
                ans: 0,
                exp: "ใช้แก่นข้อเท็จจริง Bullying: จำได้ทันทีว่าการกลั่นแกล้งเกิดขึ้นได้ \"ทุกที่\" (Anywhere)"
            },
            {
                q: "3. Which of the following is TRUE about bullying?",
                options: [
                    "It can lead to social problems and economic crises.",
                    "It can have both advantages and disadvantages to teenagers.",
                    "It can happen when people are painful and frightened.",
                    "It can make people experience unpleasant feelings."
                ],
                ans: 3,
                exp: "ใช้แก่นข้อเท็จจริง Bullying: พฤติกรรมนี้ทำให้คนรู้สึกแย่ หรือตกอยู่ในความรู้สึกที่ไม่พึงประสงค์ (unpleasant feelings)"
            },
            {
                q: "4. Which of the following can best replace the word \"understanding\" in line 22?",
                options: ["acknowledging", "perceiving", "anticipating", "synthesizing"],
                ans: 1,
                exp: "หลักการระบุให้ดูบริบทรอบข้างเพื่อหาทิศทางของคำศัพท์ ในประโยค \"...not understanding that it is wrong...\" บริบทแวดล้อมคือเรื่องของการที่เด็กมองไม่เห็นหรือไม่รับรู้สภาวะว่าสิ่งที่ทำนั้น \"ผิด\""
            },
            {
                q: "5. What is the tone of this passage?",
                options: ["Informative", "Sarcastic", "Aggressive", "Apologetic"],
                ans: 0,
                exp: "ใช้แทคติกสังเกต Tone และแก่นข้อเท็จจริง: บทความนี้เขียนด้วยการให้ข้อมูลและข้อเท็จจริงล้วนๆ จึงเป็นแนว Informative"
            }
        ]
    },
    {
        title: "Passage 2: Education",
        text: `Education can form a personality and make the individual develop knowledge. Through it, a person integrates into school activities, socializes, frees himself, communicates, and orients himself. And it is not only at school that we acquire education: different spheres of society, in general, can influence the individual in this sense.
To gain knowledge, one must follow a procedure whether formal or not. Knowledge can be acquired through basic or applied research. Knowledge can also pass from one individual to another through communication.
Education is a powerful weapon which can change the world a better place. Through it, a citizen becomes more critical, has more job opportunities, and improves their quality of life. The importance of learning for yourself is sharing your knowledge with others. Through this sharing, education acts directly on economic, social, and cultural development.
Without access to knowledge, we are unaware of rights, the environment, adequate working conditions, and respect. Find out now what quality education can do!
The more you know, the more opportunities arise in the job market. A person who qualifies and specializes is more likely to get a job than someone who has not studied. This happens in several countries: those who study earn more than those who are not literate. This impact is explicit in all grades of schooling. People who seek education can get out of poverty more easily.
Education can help protect the environment, alleviate violence, give access to rights, and allow understanding of the world. The importance of understanding the world is for any human being. Education makes people more critical and aware, contributes to the country's economic growth, and promotes social equality.`,
        questions: [
            {
                q: "6. What is the main idea of this passage?",
                options: [
                    "The more people study and respect one another, the better education system can be.",
                    "People who are illiterate always experience life failures.",
                    "People should share their knowledge to others.",
                    "Education can change the world and make people's lives better."
                ],
                ans: 3,
                exp: "ใช้แก่นข้อเท็จจริง Education: ตอบได้ทันทีว่า \"การศึกษาเปลี่ยนโลกได้\" (Education can change the world)"
            },
            {
                q: "7. Which of the following is NOT the benefits of education?",
                options: [
                    "Increasing more opportunities to get a desired job",
                    "Helping alleviate violence",
                    "Enhancing social inequality",
                    "Improving people's quality of life"
                ],
                ans: 2,
                exp: "ใช้แทคติก Scanning: กวาดสายตาหาคีย์เวิร์ดในชอยส์ จะพบว่าข้อความในบทความระบุว่าการศึกษาส่งเสริมความเท่าเทียม (social equality) การระบุว่าเพิ่มความเหลื่อมล้ำ (Enhancing social inequality) จึงผิด"
            },
            {
                q: "8. What does the pronoun \"it\" in line 8 refer to?",
                options: ["A better place", "A citizen", "The world", "Education"],
                ans: 3,
                exp: "ใช้แทคติก Pronoun \"it\": ถอยกลับไปมองหาประธานของประโยคที่แล้ว (Education is a powerful weapon...) คำตอบจึงเป็น Education"
            },
            {
                q: "9. What does the word \"poverty\" in line 17 mean?",
                options: ["Poorness", "Unemployment", "Exhaustion", "Ambition"],
                ans: 0,
                exp: "ใช้แก่นข้อเท็จจริง Education: คำว่า poverty แปลตรงตัวว่าความยากจน (Poorness)"
            },
            {
                q: "10. Which of the following CANNOT be inferred from this passage?",
                options: [
                    "Education can make an individual develop his or her knowledge.",
                    "Those who are lack of world knowledge normally come from poor families and suffer exclusion from the society.",
                    "Without education, not only will the world deteriorate but the people's quality of life also becomes worse.",
                    "People who are literate are more likely to get a job than those who are not."
                ],
                ans: 1,
                exp: "ใช้แทคติก Scanning: กวาดสายตาหาข้อความที่ไม่จริง บทความไม่ได้ระบุตรรกะที่ว่าคนขาดความรู้ต้องมาจากครอบครัวยากจนและถูกกีดกันเสมอไป"
            }
        ]
    },
    {
        title: "Passage 3: Absolute Resorts & Hotels",
        text: `Absolute Resorts & Hotels
THAILAND +66 76 292 525

On an Absolute Resorts holiday, you'll take home more than just wonderful memories. You'll reconnect with those you love under the warm Thai sunshine. You'll rediscover yourself by taking time to indulge in your own wellbeing under the guidance of our expert Wellness team. You'll experience the flavors of Thailand at one of our acclaimed restaurants. You'll remember the outstanding quality and size of your suite, whichever you choose. You'll have your belief in great standards of service restored with every warm Thai smile. And you'll be astonished at how little it all costs.
Choose chic sophistication overlooking the famous Soi Bangla whilst indulging in a private terrace hot tub within your designer adults only suite in the heart of the action at Bangla Suites; or escape with the family to our flagship resort, Twin Sands, and relax and unwind with a wellness massage overlooking a peninsula of crystal seas, before catching one of the most spectacular sunsets at our swim unbar before heading off for a divine meal at one of our resort restaurants.
Whichever Absolute Resort will decide to make home while on the island of Phuket, we will look forward to welcoming you. Please visit our website: https://www.absoluteresorts.com/ Or email us on info@absolutetwinsands.com`,
        questions: [
            {
                q: "11. What is the main purpose of this advertisement?",
                options: [
                    "To sell its land and property at auction.",
                    "To inform further details to its staff and clients.",
                    "To promote its picturesque places and services.",
                    "To offer its special campaigns to all residents."
                ],
                ans: 2,
                exp: "ใช้แทคติก คำถาม Main purpose: อ่านแค่ประโยคแรกก็ทราบเป้าหมาย เพื่อโปรโมทสถานที่ บริการ ร้านอาหาร และสิ่งอำนวยความสะดวกต่างๆ ของรีสอร์ทเพื่อดึงดูดนักท่องเที่ยว"
            },
            {
                q: "12. What is NOT mentioned in this advertisement?",
                options: [
                    "The contact information",
                    "The hotel facilities",
                    "The hotel location",
                    "The room rates and special discounts"
                ],
                ans: 3,
                exp: "แม้โฆษณาจะบอกว่าราคาคุ้มค่า (\"how little it all costs\") แต่ไม่ได้มีการระบุ \"ราคาห้องพักและส่วนลดพิเศษ\" เป็นตัวเลขหรือรายละเอียดที่ชัดเจน"
            }
        ]
    },
    {
        title: "Passage 4: Flight Announcement",
        text: `"Ladies and gentlemen, the Captain has turned on the Fasten Seat Belt sign. If you haven't already done so, please stow your carry-on luggage underneath the seat in front of you or in an overhead bin. Please take your seat and fasten your seat belt. And also make sure your seat back and folding trays are in their full upright position.
If you are seated next to an emergency exit, please read carefully the special instructions card located by your seat. If you do not wish to perform the functions described in the event of an emergency, please ask a flight attendant to reseat you.
We remind you that this is a non-smoking flight. Smoking is prohibited on the entire aircraft, including the lavatories. Tampering with, disabling or destroying the lavatory smoke detectors is prohibited by law.
If you have any questions about our flight today, please don't hesitate to ask one of our flight attendants. Thank you."`,
        questions: [
            {
                q: "13. Who is the target audience of this announcement?",
                options: [
                    "Cabin crew members and staff",
                    "Passengers on board",
                    "Pilots and flight attendants",
                    "Pilots and co-pilots"
                ],
                ans: 1,
                exp: "ใช้แทคติก Scanning: กวาดหาคีย์เวิร์ดขึ้นต้น \"Ladies and gentlemen\" ตามด้วยคำสั่งให้รัดเข็มขัด เป้าหมายของสารนี้คือผู้โดยสารบนเครื่อง"
            },
            {
                q: "14. What is strictly forbidden while traveling on a flight?",
                options: [
                    "Stowing your carry-on luggage underneath the seat",
                    "Eating a snack or meal during the flight.",
                    "Standing or sitting next to an emergency exit.",
                    "Smoking cigarettes"
                ],
                ans: 3,
                exp: "ใช้แทคติก Scanning: กวาดหาคำว่า prohibited (ถูกสั่งห้าม) จะเจอประโยคข้อห้ามสูบบุหรี่อย่างชัดเจน"
            }
        ]
    },
    {
        title: "Passage 5: Email to Leslie Smith",
        text: `To: Leslie Smith lesliebkk@miracleserum.com
From: Lydia Houston <lydiainwonderland@hotmail.com >
Subject: Money-back Guarantee
Date: January 28

Dear Mr. Smith,
My name is Lydia Houston who bought your new anti-ageing facial serum to visibly reduce the appearance of fine lines, wrinkles, and dark spots caused by melasma.
In order to get rid of these skin problems, I have been using the serum every day, as per your instructions. Although I have been applying this serum on my face every day for almost eight weeks, I have yet to see any significant change or improvement. In fact - to my surprise - I feel my face become dry after use.
I was informed before buying your product that this serum comes with 100% money-back guarantee, so I am writing to request a refund. Please kindly send me a check for the total amount as soon as possible.`,
        questions: [
            {
                q: "15. What is the purpose of this email?",
                options: [
                    "To ask for a refund",
                    "To purchase an anti-melasma serum",
                    "To report side effects after use",
                    "To change a product"
                ],
                ans: 0,
                exp: "ใช้แก่นข้อเท็จจริง อีเมลของ Lydia: เธอเขียนมาเพื่อ \"ขอคืนเงิน\" (\"I am writing to request a refund\") เนื่องจากสินค้าไม่เห็นผลตามที่โฆษณา"
            },
            {
                q: "16. How long has Lydia Houston used the product?",
                options: [
                    "About a month",
                    "For half a month",
                    "Approximately a month and a half",
                    "Over eight weeks"
                ],
                ans: 2,
                exp: "แก่นข้อเท็จจริงที่กำหนดไว้ชัดเจนคือ \"ใช้มาเกือบ 8 สัปดาห์ (almost eight weeks)\" เมื่อใช้การ Scan หาคีย์เวิร์ดในตัวเลือก จะพบว่าตัวเลือก Over eight weeks (เกิน 8 สัปดาห์) นั้นขัดแย้งกับคำว่า almost (เกือบ) ข้อมูลนี้จึงบิดเบือนความจริงและต้องตัดทิ้ง ข้อที่ถูกคือประมาณเดือนครึ่ง (เกือบ 8 สัปดาห์)"
            }
        ]
    },
    {
        title: "Passage 6: Letter from Lisa Martinez",
        text: `March 31
Dear Mrs. Jordan,
I am Lisa Martinez who is living in the same apartment, directly below your room. I am writing this letter to inform you that I always hear noises coming from your room almost every day. I understand that you have kids and they may play around, turn on their music or TV, drag the tables or drop some objects like toys, balls, or heavy items on the floor.
I also have a kid, but the noises from your room often disrupt his full night's sleep. I would like to beg you to please avoid making such loud noises, especially in the nighttime hours. However, I do not object to your having a party and making a loud noise on your special occasion. You can let me know in advance so that I can manage myself and deal with the noises.
Thank you for your kind consideration and co-operation in advance.
Your neighbor,
Lisa Martinez
Apartment #5C`,
        questions: [
            {
                q: "17. Why does Lisa write the letter to Mrs. Jordan?",
                options: [
                    "To introduce herself after having moved into the apartment",
                    "To ask if Mrs. Jordan can be more considerate to others living in the same building",
                    "To warn Mrs. Jordan not to make loud noises while having a party",
                    "To blame her for letting her naughty children destroy other people's objects"
                ],
                ans: 1,
                exp: "ใช้แก่นข้อเท็จจริง จดหมายของ Lisa: เธอเขียนจดหมายเพื่อขอความกรุณาให้คุณจอร์แดนระมัดระวังเรื่องการทำเสียงดังรบกวนคนอื่น โดยเฉพาะในเวลากลางคืน"
            },
            {
                q: "18. Where is Mrs. Martinez's room?",
                options: [
                    "Beneath Mrs. Jordan's room.",
                    "Above Mrs. Jordan's room",
                    "In front of Mrs. Jordan's room",
                    "Next to Mrs. Jordan's room"
                ],
                ans: 0,
                exp: "ใช้แก่นข้อเท็จจริง จดหมายของ Lisa: ห้องของเธออยู่ \"ข้างใต้\" โดยตรง (directly below / Beneath)"
            }
        ]
    },
    {
        title: "Passage 7: Job Advertisement",
        text: `URGENT HIRING
Our prestigious organization is looking to hire competent and energetic staff to join our team for the following positions.

ASST. MANAGER - BUSINESS DEVELOPMENT
(3 Positions)
EXPERIENCED applicants from Finance, International Business, Marketing, Banking, Business administration and management or related fields, with proven track record of success. Good command of spoken and written English is advantageous.
Salary Range Baht 48,000 - Baht 55,000 Per Month With additional performance incentives

Manager Trainee Officers Human Resources (HR) Officers
(8 positions)
Bachelor's Degree in in business administration or related fields Ability to communicate in English is preferable`,
        questions: [
            {
                q: "19. How many job vacancies are there in the job advertisement?",
                options: ["Two", "Three", "Eight", "Eleven"],
                ans: 3,
                exp: "ใช้แก่นข้อเท็จจริง ประกาศรับสมัครงาน URGENT HIRING: คำนวณอัตราว่างได้ 11 อัตรา (Asst. Manager 3 + HR 8)"
            },
            {
                q: "20. Which of the following is NOT mentioned in the job advertisement?",
                options: [
                    "Education background",
                    "Ability to communicate English",
                    "The organization location and contact email",
                    "Salary and incentives"
                ],
                ans: 2,
                exp: "ใช้แทคติก Job Advertisement: สิ่งที่ป้ายนี้ไม่ได้บอกและชอบเอามาออกข้อสอบคือ \"สถานที่ตั้งบริษัทและอีเมลติดต่อ\" (Location and contact email)"
            }
        ]
    },
    {
        title: "Passage 8: Email to Ms. Tracy",
        text: `Dear Ms. Tracy,
Thank you so much for the pleasant news that my application has to Smile Club Com. has been accepted. I am thankful for the information regarding my responsibilities and payment in your email and also grateful for your kindness to offer discussion the condition of payment with me.
I am keen to start working with Smile Club Com. as soon as possible. I am so excited to have a great opportunity to work with such a well-known company since I have read a lot about your company, especially the increasing growth of your business.
Regarding your appointment mentioned in your email, I surely confirm to meet you at 10.00 a.m. on July 3.
I am looking forward to meeting and have discussions further about my position.

Sincerely,
Katherine`,
        questions: [
            {
                q: "21. What is the main purpose of this e-mail?",
                options: [
                    "To book a ticket for holidays",
                    "To make a reservation",
                    "To make an appointment",
                    "To confirm an appointment"
                ],
                ans: 3,
                exp: "ใช้แทคติก คำถาม Main purpose: อ่านประโยคแรกและประโยคสุดท้าย สรุปได้ว่าเป็นการตอบยืนยันการนัดหมาย (confirm an appointment)"
            },
            {
                q: "22. What is NOT true about this e-mail?",
                options: [
                    "Ms. Tracy previously wrote an email to Katherine.",
                    "Ms. Katherine has been offered a job.",
                    "Ms. Katherine has to start working on 3 July.",
                    "Ms. Tracy is working for Smile Club Com."
                ],
                ans: 2,
                exp: "ใช้แทคติก Scanning: กวาดสายตาวันที่ 3 กรกฎาคม คือวันที่นัดเจรจา ไม่ใช่วันที่เริ่มทำงาน"
            }
        ]
    },
    {
        title: "Passage 9: YRU Co., Ltd.",
        text: `YRU Co., Ltd.
YRU Company Limited is presently looking for highly qualification candidates to work with us.
Secretary
Job Descriptions
- Arranging meetings and doing meeting reports
- Preparing slide presentation
- Dealing with correspondences
- Proceeding general office management etc.

Qualifications
- Female, Thai , age 25-30 years
- Good command of spoken and written English
- Having bachelor's degree in English, Business English or related fields
- Having positive attitudes and problem solving skills
- At least 2 year experiences in secretarial work or related positions`,
        questions: [
            {
                q: "23. What is TRUE about this job announcement?",
                options: [
                    "The candidates can send their resume via the website of the company.",
                    "All candidates must have Bachelors' degree in Business English only.",
                    "Problem solving skill is required.",
                    "The application date starts on 30 September."
                ],
                ans: 2,
                exp: "ใช้แทคติก Scanning: กวาดสายตาไปที่หมวด Qualifications จะพบว่าทักษะแก้ปัญหา (Problem solving skill) เป็นสิ่งที่ต้องการ"
            },
            {
                q: "24. Who is the most appropriate for this job?",
                options: [
                    "Alfred graduated Bachelor's degree in English and used to work as a secretary.",
                    "Mili used to be a secretary assistant with 3 year experience.",
                    "Jessy is 31 year old and has 5 year experiences with secretarial work.",
                    "Tony has excellent problem solving skills with 3 year experience as a secretary."
                ],
                ans: 1,
                exp: "ใช้แทคติก Scanning: เช็คเงื่อนไขทีละชอยส์ ตำแหน่งนี้ต้องการผู้หญิงและประสบการณ์อย่างน้อย 2 ปี Mili จึงเป็นคำตอบที่ถูกต้องที่สุด"
            }
        ]
    },
    {
        title: "Passage 10: Letter from Will",
        text: `Dear Lisa,
I am writing to inform you that I have to postpone our appointment tomorrow morning since I have sprained my ankle this morning. It accidentally happened when I was going to work. I was wearing my high heels but my right high heel stuck in a crack of sidewalk. It made me fall down and hurt my ankle. Poor me! My doctor said that there was no fracture, but the doctor advised I take a day off today and tried not to walk so much.
I have to say sorry for the cancellation. I am wondering that you will be available next Monday at lunchtime. I would like to invite you to discuss new staff training project at a restaurant near our office instead of visiting me at my office.
I am looking forward to your reply
Regards,
Will`,
        questions: [
            {
                q: "25. What is the purpose of this letter?",
                options: [
                    "To advice Will to see a doctor",
                    "To talk about the training program",
                    "To reschedule the meeting",
                    "To report an accident"
                ],
                ans: 2,
                exp: "ใช้แก่นข้อเท็จจริง จดหมายของ Will: เขาเขียนมาเพื่อ \"ขอเลื่อนนัด\" (reschedule / postpone) เนื่องจากข้อเท้าแพลง"
            },
            {
                q: "26. What are Lisa and Will probably doing next Monday?",
                options: [
                    "Seeing at Will's office",
                    "Having an appointment with the doctor",
                    "Discussing a staff training course",
                    "Writing a project"
                ],
                ans: 2,
                exp: "ใช้แก่นข้อเท็จจริง จดหมายของ Will: การนัดหมายใหม่จะไปคุยเรื่องโปรเจกต์ (staff training course) ที่ร้านอาหารในวันจันทร์หน้า"
            }
        ]
    },
    {
        title: "Passage 11: BANYAN TREE",
        text: `BANYAN TREE, KRABI, THAILAND
We warmly welcome you to a peach and comfortable oasis in our heavenly beachfront resort. Feel the family embrace of Banyan Tree hospitality from the peaceful treatments at Banyan Tree Spa to mouthwatering food at our Thai style restaurants with Thai, Chinese, and Western dishes to the beach bar with its marvelous views of the Andaman Sea.
72 luxurious suites and villas of Banyan Tree have their own private pools which provide privacy and familiarity in a tropical rainforest atmosphere. Whether you're finding a romantic setting with your loved one or a fun time with your family, you can have sunbathe in nature among natural gardens, beautiful water features, and spectacular views of the fascinating Andaman Sea.
We will look forward to welcoming you with the memorable vacation.`,
        questions: [
            {
                q: "27. Which of the following is NOT mentioned in the advertisement?",
                options: ["A resort facility", "A resort location", "Room types", "A room rate"],
                ans: 3,
                exp: "ใช้แทคติก โฆษณาโรงแรม/รีสอร์ต: ในโฆษณามีการกล่าวถึงสิ่งอำนวยความสะดวก สถานที่ตั้ง และประเภทของห้อง แต่ไม่มีการระบุ \"ราคาห้องพัก\""
            },
            {
                q: "28. What is NOT true according to the advertisement?",
                options: [
                    "The resort offers only Thai food to the customers.",
                    "The resort offers privacy swimming pools to each of the rooms.",
                    "The resort is suitable for a couple and a family.",
                    "The resort is located in the south of Thailand."
                ],
                ans: 0,
                exp: "ใช้แทคติก Scanning: กวาดสายตาหาข้อมูลร้านอาหาร พบว่ามีทั้งอาหารไทย จีน และตะวันตก การสรุปว่ามีแค่อาหารไทยจึงผิด"
            }
        ]
    },
    {
        title: "Passage 12: PUBLIC NOTICE",
        text: `PUBLIC NOTICE OF CITY ELECTION
NOTICE, is hereby given that the City of Jennings, Florida, will hold a City Election to fill two (2) City Council seats for a full four (4) year term and three (3) City Council seats for a full two (2) year term. The Qualifying Period will commence at noon, April 20, 2023 and will end at noon on April 24, 2023. Oaths may be secured at Jennings City Hall. The City Election will be held on Tuesday, June 2, 2023, between the hours of 7. 00 AM and 7.00 PM. All voting will take place at Jennings Council Chambers. The books for registration to vote in this election will close on May 2, 2023.
Cindy Pedicini
City Clerk`,
        questions: [
            {
                q: "29. Which of the following is correct according to the notice?",
                options: [
                    "This is the national election.",
                    "The election will be on Tuesday, June 2.",
                    "The election will last 24 hours on May 2, 2023.",
                    "There are two chairs to sit in at Jennings City Hall."
                ],
                ans: 1,
                exp: "ใช้แทคติก Scanning: กวาดสายตาหาข้อมูลวันที่ในชอยส์ จะตรงกับ Tuesday, June 2 พอดี"
            },
            {
                q: "30. What will happen on June 2, 2023?",
                options: [
                    "The votes will be counted.",
                    "The election will be organized.",
                    "The books for registration to vote will be opened.",
                    "The results of the election will be announced."
                ],
                ans: 1,
                exp: "ใช้แทคติก Scanning: กวาดจากวันที่ June 2, 2023 จะพบว่าเป็นกำหนดการของการจัดเลือกตั้ง (City Election will be held)"
            }
        ]
    },
    {
        title: "Passage 13: Maneerat in Singapore",
        text: `Hi Dara,
How are things back home in Thailand? I'm fine here in Singapore. It's a great country. Great news! I have got a place to live. It's an apartment with two bedrooms. I share it with two roommates: Maria and Jin.
Maria, from New Zealand, works in a high school. She teaches English to students. She also has a second job. She works at a restaurant as a waitress on weekends. Jin is a cook at a Chinese restaurant. She sometimes cooks for us. It's very delicious.
I started my new job two weeks ago. I work as a tour guide. Well, I really like my new job and I'm willing to learn everything from my boss. I take people around Singapore to many places, such as amusement parks, museums and shopping malls. I love to take people to aquariums. Unfortunately, they aren't in my program. After work, I'm quite tired. I sometimes go to bed early.
Take care,
Maneerat`,
        questions: [
            {
                q: "31. What does \"it\" in the first paragraph refer to?",
                options: ["A country", "Great news", "An apartment", "Home in Thailand"],
                ans: 2,
                exp: "ใช้แทคติก Pronoun \"it\": ถอยกลับไปมองหาประธาน 1 ประโยค (\"It's an apartment...\") สรรพนาม it จึงหมายถึง อพาร์ทเมนต์"
            },
            {
                q: "32. What job does Maria do for a living?",
                options: ["Cook", "Teacher", "Student", "Tour guide"],
                ans: 1,
                exp: "ใช้แก่นข้อเท็จจริง เพื่อนร่วมห้อง Maria: ข้อมูลระบุว่าเธอมีอาชีพเป็น ครูสอนภาษาอังกฤษ (Teacher)"
            },
            {
                q: "33. Which country does the writer work in?",
                options: ["Singapore", "Thailand", "New Zealand", "China"],
                ans: 0,
                exp: "ใช้แก่นข้อเท็จจริง เรื่องสั้น Maneerat: มณีรัตน์อาศัยและทำงานอยู่ที่ประเทศ \"สิงคโปร์\""
            },
            {
                q: "34. What is the tone of the writer when talking about their new job?",
                options: ["Bored", "Surprised", "Depressed", "Enthusiastic"],
                ans: 3,
                exp: "ใช้แทคติกสังเกต Tone และแก่นข้อเท็จจริง: น้ำเสียงของผู้เขียนเต็มไปด้วยความกระตือรือร้น (Enthusiastic) โดยบอกว่า \"ฉันชอบงานใหม่นี้มากและพร้อมที่จะเรียนรู้ทุกอย่าง\" (\"I really like my new job and I'm willing to learn everything\")"
            },
            {
                q: "35. Which of the following does the writer NOT take people to?",
                options: ["Museums", "Aquariums", "Shopping malls", "Amusement parks"],
                ans: 1,
                exp: "ใช้แก่นข้อเท็จจริง เรื่องสั้น Maneerat: สถานที่ที่ไม่ได้พาลูกทัวร์ไปคือ พิพิธภัณฑ์สัตว์น้ำ (Aquariums) เพราะไม่อยู่ในโปรแกรม"
            }
        ]
    },
    {
        title: "Passage 14: Work and Travel",
        text: `When some teenagers want to travel but they don't have enough money, they sometimes cancel their trip. There is a way that teenagers can get help to travel to other places and earn some money. Here are some students who joined the work and travel program. They shared their reasons and experiences.
Tony from Taiwan wants to see the Eiffel Tower and the Colosseum, so he decided to work at a vacation camp. At the camp, he looked after children in the morning. The children did painting, drama and lots of other activities, like surfing. He spent the money from work on traveling from France to Italy. He loved both places very much. Next year, he is going to go back to the campsite and he will work there again. 
Suda, a Thai student, wants to improve her English. She chose to work on a cruise ship. She went to many countries, such as Singapore, Japan, Taiwan and Vietnam. She met a lot of people who spoke English. She thinks her English is improving.
Kyra, a girl from Japan, traveled around Australia. She joined the program to see how tough she could be. She decided to work on fruit farms to pick fruit. First, she picked strawberries. Then, she picked peaches. She had to get up early in the morning and worked long hours. It was hard work at first but she could do it. She could also eat more fruit than she had ever eaten before. She said, "I don't think I ever want to see another strawberry!"`,
        questions: [
            {
                q: "36. What kind of program can the teenagers travel and earn money at the same time?",
                options: ["Volunteering", "Work and travel", "Student exchange", "International conference"],
                ans: 1,
                exp: "ใช้แก่นข้อเท็จจริง โครงการนี้: เป็นโครงการที่ช่วยให้เดินทางและได้เงินด้วย นั่นคือ Work and travel"
            },
            {
                q: "37. What is a children's activity at the vacation camp?",
                options: ["Painting", "Surfing the Internet", "Looking after children", "Watching drama on TV"],
                ans: 0,
                exp: "ใช้แทคติก Scanning: กวาดสายตาหาคีย์เวิร์ด activities ภายในแคมป์ เจอคำว่า painting"
            },
            {
                q: "38. Where does Kyra work for?",
                options: ["Traveling agencies", "The campsite", "Fruit farms", "School"],
                ans: 2,
                exp: "ใช้แก่นข้อเท็จจริง เรื่อง Work and travel: Kyra เดินทางไปทำงานที่ ไร่ผลไม้ (Fruit farms)"
            },
            {
                q: "39. What does \"there\" in the second paragraph refer to?",
                options: ["Taiwan", "Colosseum", "The campsite", "The Eiffel Tower"],
                ans: 2,
                exp: "ใช้แทคติก Pronoun \"there\": ถอยกลับไปหาคำนามแสดงสถานที่ในประโยคก่อนหน้า เจอคำว่า the campsite"
            },
            {
                q: "40. Which country did Suda NOT visit during her cruise work?",
                options: ["Japan", "Taiwan", "Vietnam", "Thailand"],
                ans: 3,
                exp: "ใช้แก่นข้อเท็จจริง เรื่อง Work and travel: Suda เดินทางไปทำงานบนเรือสำราญ และประเทศที่ไม่ได้แวะคือ \"ประเทศไทย\""
            }
        ]
    }
];
