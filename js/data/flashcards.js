/**
 * ENGLISH TEP Master - Flashcards Data
 * Contains all 48 flashcards (Grammar, Error, Reading Tactics, Reading Core Facts)
 * Unaltered question/content retention.
 */
window.TEP = window.TEP || {};

window.TEP.flashcardsData = [
    // --- 1. Grammar & Structure (g1 - g19) ---
    {
        id: 'g1',
        category: 'grammar',
        front: "มีคำเชื่อม and หรือ or คั่นกลาง",
        back: "หน้าและหลังคำเชื่อมต้องเป็น 'คำชนิดเดียวกันเป๊ะ'\n(เช่น Noun คู่ Noun, V.ing คู่ V.ing)",
        hint: "Parallelism (อ้างอิงข้อ 2, 8, 21, 26, 32)"
    },
    {
        id: 'g2',
        category: 'grammar',
        front: "ประธานทำกริยาเองไม่ได้",
        back: "ต้องใช้โครงสร้าง Passive Voice\n'Verb to be + V.3' เสมอ",
        hint: "Passive Voice (อ้างอิงข้อ 3, 11, 17, 27)"
    },
    {
        id: 'g3',
        category: 'grammar',
        front: "โครงสร้าง Not only A but also B",
        back: "กริยาผันตาม 'ประธาน B' (ตัวหลังสุด)\nและแปลว่า 'ไม่เพียงแต่...แต่อีกด้วย'",
        hint: "Correlative Conjunction (อ้างอิงข้อ 8, 50)"
    },
    {
        id: 'g4',
        category: 'grammar',
        front: "เจอคำว่า By the time",
        back: "จับคู่กับ Future Perfect\n(will have + V.3)",
        hint: "Tense & Time Marker (อ้างอิงข้อ 4)"
    },
    {
        id: 'g5',
        category: 'grammar',
        front: "ระบุปีในอดีตชัดเจน\n(เช่น In 2022)",
        back: "ใช้ Past Simple (V.2)",
        hint: "Tense & Time Marker (อ้างอิงข้อ 6)"
    },
    {
        id: 'g6',
        category: 'grammar',
        front: "ประโยคหนึ่งใช้ช่อง 2 (อดีต)",
        back: "อีกประโยคต้องเป็น อดีต (V.2)\nให้สอดคล้องกัน",
        hint: "Sequence of Tenses (อ้างอิงข้อ 10, 15)"
    },
    {
        id: 'g7',
        category: 'grammar',
        front: "เจอคำว่า While",
        back: "มักตามด้วย Past Continuous\n(was/were + V.ing)",
        hint: "Tense & Time Marker (อ้างอิงข้อ 15)"
    },
    {
        id: 'g8',
        category: 'grammar',
        front: "ช่องว่างอยู่หน้าหรือหลังกริยาแท้",
        back: "ตอบ Adverb (คำที่ลงท้ายด้วย -ly)\nเพื่อไปขยายกริยานั้น",
        hint: "Adverb (อ้างอิงข้อ 9, 23)"
    },
    {
        id: 'g9',
        category: 'grammar',
        front: "เจอคำว่า than อยู่หลังช่องว่าง",
        back: "ใช้ 'ขั้นกว่า'\n(เติม -er หรือ more)",
        hint: "Comparison (อ้างอิงข้อ 16)"
    },
    {
        id: 'g10',
        category: 'grammar',
        front: "เจอโครงสร้าง The more..., _____",
        back: "ครึ่งหลังต้องเป็น\n'the + ขั้นกว่า' (เช่น the better...)",
        hint: "Double Comparative (อ้างอิงข้อ 35)"
    },
    {
        id: 'g11',
        category: 'grammar',
        front: "ต้องการคำเชื่อมบอก 'สาเหตุ' เชิงบวก",
        back: "ตอบ 'thanks to'\n(เนื่องจาก/ขอบคุณที่)",
        hint: "Preposition (อ้างอิงข้อ 12)"
    },
    {
        id: 'g12',
        category: 'grammar',
        front: "ประโยคหลังมี also",
        back: "อาจใช้คู่กับ Not only\nหรือใช้เชื่อมความเพิ่มเติม (Moreover)",
        hint: "Conjunction (อ้างอิงข้อ 1, 30)"
    },
    {
        id: 'g13',
        category: 'grammar',
        front: "เจอคำว่า lack (ขาดแคลน)",
        back: "ต้องตามด้วยบุพบท 'of' เสมอ\n(lack of ...)",
        hint: "Preposition (อ้างอิงข้อ 29)"
    },
    {
        id: 'g14',
        category: 'grammar',
        front: "สรรพนามต้องแทน 'คำนามพหูพจน์'",
        back: "ใช้กลุ่มพหูพจน์ they\nหรือ their",
        hint: "Pronoun (อ้างอิงข้อ 18, 34)"
    },
    {
        id: 'g15',
        category: 'grammar',
        front: "สรรพนามแทน 'คน'\nและทำหน้าที่เป็นประธาน",
        back: "ใช้ 'who'",
        hint: "Relative Pronoun (อ้างอิงข้อ 28)"
    },
    {
        id: 'g16',
        category: 'grammar',
        front: "เจอคำว่า be likely",
        back: "ตามด้วย 'to + V.inf'\n(แปลว่า มีแนวโน้มที่จะ)",
        hint: "Infinitive (อ้างอิงข้อ 13)"
    },
    {
        id: 'g17',
        category: 'grammar',
        front: "เจอคำว่า enjoy",
        back: "ตามด้วย 'V.ing' เสมอ",
        hint: "Gerund (อ้างอิงข้อ 33)"
    },
    {
        id: 'g18',
        category: 'grammar',
        front: "หลัง Modal Verbs\n(can, will, should)",
        back: "ต้องเป็นกริยาไม่เปลี่ยนรูป (V.inf)\nห้ามเติม -s, -ed, -ing เด็ดขาด",
        hint: "Modal Verbs (อ้างอิงข้อ 25)"
    },
    {
        id: 'g19',
        category: 'grammar',
        front: "ประโยคหลักเป็น would have + V.3",
        back: "ประโยค If ต้องเป็น Past Perfect\n(had + V.3)",
        hint: "If-clause Type 3 (อ้างอิงข้อ 19)"
    },

    // --- 2. Error Identification (e1 - e13) ---
    {
        id: 'e1',
        category: 'error',
        front: "เจอ more higher หรือ more bigger",
        back: "ผิด! ห้ามใช้ more ซ้อนกับคำที่เติม -er เด็ดขาด\n(ต้องแก้เป็น higher / bigger)",
        hint: "Double Comparative (อ้างอิงข้อ 36, 48)"
    },
    {
        id: 'e2',
        category: 'error',
        front: "ประธานคือ Cinnamon หรือ Japan (เอกพจน์)\nแต่กริยาใช้ have หรือ are",
        back: "ผิด! ประธานเอกพจน์ต้องใช้กริยาเอกพจน์\n(ต้องแก้เป็น has หรือ is)",
        hint: "Subject-Verb Agreement (อ้างอิงข้อ 38, 45)"
    },
    {
        id: 'e3',
        category: 'error',
        front: "ประธานคือ Nocturnal bats (พหูพจน์เติม s)\nแต่ใช้สรรพนาม its",
        back: "ผิด! ค้างคาวหลายตัวต้องใช้สรรพนาม their\n(ของพวกมัน)",
        hint: "Pronoun Agreement (อ้างอิงข้อ 40)"
    },
    {
        id: 'e4',
        category: 'error',
        front: "ประธานหลักคือ Per capita income (รายได้ - นับไม่ได้)\nแต่เผลอดูคำขยายข้างหลังแล้วใช้กริยา are",
        back: "ผิด! นามนับไม่ได้คือเอกพจน์\nต้องใช้ is เสมอ",
        hint: "Subject-Verb Agreement (อ้างอิงข้อ 43)"
    },
    {
        id: 'e5',
        category: 'error',
        front: "เจอ If you... (เงื่อนไขแบบที่ 1)\nแต่ตามด้วยกริยาอดีต เช่น got ill",
        back: "ผิด! ประโยคเงื่อนไขที่เป็นจริงได้ต้องใช้ Present Simple V.1\n(ต้องแก้เป็น get ill)",
        hint: "If-clause Type 1 (อ้างอิงข้อ 37)"
    },
    {
        id: 'e6',
        category: 'error',
        front: "โครงสร้าง need to...\nแต่ตามด้วยคำนาม เช่น response",
        back: "ผิด! หลัง to ต้องตามด้วยกริยาช่อง 1\n(ต้องแก้เป็น respond)",
        hint: "Infinitive with to (อ้างอิงข้อ 39)"
    },
    {
        id: 'e7',
        category: 'error',
        front: "ตัวเลข five ตามด้วยคำนามเอกพจน์ person",
        back: "ผิด! 5 คนต้องตามด้วยนามพหูพจน์\n(ต้องแก้เป็น people)",
        hint: "Plural Nouns (อ้างอิงข้อ 41)"
    },
    {
        id: 'e8',
        category: 'error',
        front: "โครงสร้าง Present Perfect (has/have)\nแต่ตามด้วย V.2 เช่น became",
        back: "ผิด! หลัง has/have ต้องเป็น V.3 เสมอ\n(ต้องแก้เป็น become)",
        hint: "Present Perfect Tense (อ้างอิงข้อ 42)"
    },
    {
        id: 'e9',
        category: 'error',
        front: "หน้าคำนาม (chemicals)\nขยายด้วย Adverb ที่ลงท้ายด้วย -ly (harshly)",
        back: "ผิด! หน้าคำนามต้องเป็น Adjective เท่านั้น\n(ต้องแก้เป็น harsh)",
        hint: "Adjective vs Adverb (อ้างอิงข้อ 44)"
    },
    {
        id: 'e10',
        category: 'error',
        front: "โครงสร้างคู่ขนาน มี or คั่นกลาง\nระหว่าง V.2 (drank) กับ V.1 (smoke)",
        back: "ผิด! กริยาหน้าและหลังคำเชื่อมต้องเป็น Tense เดียวกัน\n(ต้องแก้ drank เป็น drink)",
        hint: "Parallelism (อ้างอิงข้อ 46)"
    },
    {
        id: 'e11',
        category: 'error',
        front: "โครงสร้าง help someone...\nแต่ตามด้วยคำนาม เช่น development",
        back: "ผิด! โครงสร้างนี้ต้องตามด้วยกริยาช่อง 1\n(ต้องแก้เป็น develop)",
        hint: "Help + Object + V.inf (อ้างอิงข้อ 47)"
    },
    {
        id: 'e12',
        category: 'error',
        front: "มีคำเชื่อม and คั่นระหว่างคำนาม (memory, mood)\nแต่มี Adjective (confident)โผล่มา",
        back: "ผิด! โครงสร้างคู่ขนานต้องเป็นคำชนิดเดียวกันทั้งหมด\n(ต้องแก้เป็น confidence)",
        hint: "Parallelism (อ้างอิงข้อ 50)"
    },
    {
        id: 'e13',
        category: 'error',
        front: "เจอคำว่า disconditional",
        back: "ผิด! ไม่มีคำนี้ในหลักภาษาอังกฤษ\n(คำที่แปลว่าไม่มีเงื่อนไขคือ unconditional)",
        hint: "Word Choice / Prefix (อ้างอิงข้อ 49)"
    },

    // --- 3. Reading Tactics (rt1 - rt7) ---
    {
        id: 'rt1',
        category: 'reading_tactics',
        front: "เจอคำถาม What is the main purpose...? หรือ What is the main idea...?",
        back: "ห้ามอ่านทั้งเรื่อง!\nให้อ่านแค่ ประโยคแรกและประโยคสุดท้ายของย่อหน้าแรก จะเจอแก่นของเรื่องเสมอ",
        hint: "Main Idea / Purpose"
    },
    {
        id: 'rt2',
        category: 'reading_tactics',
        front: "เจอคำถามประเภท Which of the following is NOT mentioned...? หรือถามรายละเอียดเฉพาะเจาะจง",
        back: "ใช้เทคนิค Scanning ดึงคีย์เวิร์ดจากโจทย์ (เช่น ชื่อคน ตัวเลข) ไปกวาดสายตาหาในบทความ เจอแล้วอ่านแค่ประโยคนั้น",
        hint: "Scanning / Detail Questions"
    },
    {
        id: 'rt3',
        category: 'reading_tactics',
        front: "เจอคำถาม What does the pronoun 'it' / 'they' refer to?",
        back: "คำตอบซ่อนอยู่ ประโยคก่อนหน้า 1 ประโยคเสมอ\nให้ถอยกลับไปมองหาประธานของประโยคที่แล้ว",
        hint: "Pronoun Reference"
    },
    {
        id: 'rt4',
        category: 'reading_tactics',
        front: "เจอคำถามตีความคำศัพท์ What does the word '...' mean?",
        back: "ดู Context Clues (บริบทรอบข้าง)\nถ้าประโยคแวดล้อมเป็นเรื่องดี คำแปลต้องเป็นบวก ถ้าแวดล้อมมีคำว่า lack, problem คำแปลต้องเป็นลบ",
        hint: "Vocabulary / Context Clues"
    },
    {
        id: 'rt5',
        category: 'reading_tactics',
        front: "เจอคำถาม What is the tone of this passage?",
        back: "สังเกต Adjective (คำคุณศัพท์) ที่ผู้เขียนใช้\nถ้าให้ข้อมูลข้อเท็จจริงล้วนๆ ตอบ Informative ถ้ากระตือรือร้นตื่นเต้นตอบ Enthusiastic",
        hint: "Tone of Passage"
    },
    {
        id: 'rt6',
        category: 'reading_tactics',
        front: "บทความประเภท ประกาศรับสมัครงาน (Job Advertisement)",
        back: "สิ่งที่มักไม่ค่อยบอกและชอบเอามาออกข้อสอบคือ\nสถานที่ตั้งบริษัท (Location) หรือ อีเมลติดต่อ (กวาดสายตาหาไวๆ)",
        hint: "Job Advertisement Trick"
    },
    {
        id: 'rt7',
        category: 'reading_tactics',
        front: "บทความประเภท โฆษณาโรงแรม/รีสอร์ต",
        back: "สิ่งที่มักหลอกถามว่ามีในป้ายโฆษณาหรือไม่คือ\nราคาห้องพัก (Room rate)\n(ข้อสอบมักจะบอกแค่ว่าราคาถูก แต่ไม่ระบุตัวเลข)",
        hint: "Hotel Advertisement Trick"
    },

    // --- 4. Reading Core Facts (rf1 - rf9) ---
    {
        id: 'rf1',
        category: 'reading_facts',
        front: "บทความ Bullying (การกลั่นแกล้ง)",
        back: "เกิดขึ้นได้ ทุกที่ (Anywhere) ทำให้คนรู้สึกแย่\nและน้ำเสียงของบทความนี้คือ ให้ข้อมูล (Informative)",
        hint: "Passage: Bullying"
    },
    {
        id: 'rf2',
        category: 'reading_facts',
        front: "บทความ Education (การศึกษา)",
        back: "การศึกษาเปลี่ยนโลกได้\nสรรพนาม 'it' ในเรื่องแทนคำว่า Education และคำว่า poverty แปลว่า ความยากจน (Poorness)",
        hint: "Passage: Education"
    },
    {
        id: 'rf3',
        category: 'reading_facts',
        front: "อีเมลของ Lydia Houston (เรื่องเซรั่ม)",
        back: "เขียนมาเพื่อ ขอคืนเงิน (request a refund)\nเพราะใช้มาเกือบ 8 สัปดาห์แล้วหน้าแห้ง",
        hint: "Passage: Lydia Houston Email"
    },
    {
        id: 'rf4',
        category: 'reading_facts',
        front: "จดหมายของ Lisa Martinez (ส่งถึง Mrs. Jordan)",
        back: "ห้องของ Lisa อยู่ ข้างใต้ (directly below)\nและเขียนมาขอให้เพื่อนบ้านเกรงใจเรื่อง ทำเสียงดัง",
        hint: "Passage: Lisa Martinez Letter"
    },
    {
        id: 'rf5',
        category: 'reading_facts',
        front: "ประกาศรับสมัครงาน URGENT HIRING",
        back: "รับสมัครทั้งหมด 11 อัตรา (Asst. Manager 3 + HR 8)\nและไม่มีการระบุ สถานที่ตั้งและอีเมลติดต่อ",
        hint: "Passage: URGENT HIRING"
    },
    {
        id: 'rf6',
        category: 'reading_facts',
        front: "จดหมายของ Will",
        back: "เขียนมาเพื่อ ขอเลื่อนนัด (postpone/reschedule) เนื่องจากข้อเท้าแพลง\nและจะนัดคุยเรื่องโปรเจกต์ที่ ร้านอาหาร (restaurant) ในวันจันทร์หน้า",
        hint: "Passage: Will's Letter"
    },
    {
        id: 'rf7',
        category: 'reading_facts',
        front: "เรื่องสั้นของ Maneerat ในสิงคโปร์",
        back: "ทำงานเป็น ไกด์นำเที่ยว (tour guide) โทนเรื่องมีความ กระตือรือร้น (Enthusiastic)\nและสถานที่ที่ไม่ได้พาลูกทัวร์ไปคือ พิพิธภัณฑ์สัตว์น้ำ (Aquariums)",
        hint: "Passage: Maneerat in Singapore"
    },
    {
        id: 'rf8',
        category: 'reading_facts',
        front: "เรื่องสั้นเพื่อนร่วมห้อง Maria",
        back: "Maria เป็นคนนิวซีแลนด์\nมีอาชีพเป็น ครูสอนภาษาอังกฤษ (Teacher)",
        hint: "Passage: Roommate Maria"
    },
    {
        id: 'rf9',
        category: 'reading_facts',
        front: "เรื่องโครงการ Work and travel",
        back: "Suda ทำงานบนเรือสำราญและ ไม่ได้ไปประเทศไทย\nTony ทำงานที่ แคมป์ (Campsite)\nKyra ทำงานที่ ไร่ผลไม้ (Fruit farms)",
        hint: "Passage: Work and travel"
    }
];
