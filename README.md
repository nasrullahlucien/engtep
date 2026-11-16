# ENGLISH TEP Master 🎓

แอปพลิเคชันเตรียมสอบภาษาอังกฤษ TEP (Test of English Proficiency) ฉบับยกเครื่องใหม่ ดีไซน์มินิมอล ทันสมัย สวยงาม ทำงานแบบออฟไลน์ 100% พร้อมฟังก์ชันครบถ้วน

---

## 📁 โครงสร้างโปรเจกต์ (Modular Architecture)

โปรเจกต์ได้รับการแยกไฟล์และจัดระเบียบตามหลักวิศวกรรมซอฟต์แวร์ที่สะอาดและเป็นระเบียบ:

```text
ENG/
├── index.html                 # โครงสร้างหน้าเว็บหลัก (Semantic HTML5 + Tailwind CSS)
├── css/
│   └── style.css              # ระบบดีไซน์มินิมอล โมเดิร์น, Glassmorphism, 3D Flashcards, Dark/Light theme
├── js/
│   ├── data/
│   │   ├── flashcards.js      # คลัง Flashcard ครบ 48 ข้อ (Grammar, Error, Tactics, Facts)
│   │   ├── quizzes.js         # คลังข้อสอบจริงครบ 90 ข้อ (Grammar 20, Error 15, Cloze 15, Reading 40)
│   │   └── i18n.js            # ระบบสลับภาษา ไทย (TH) / อังกฤษ (EN)
│   ├── modules/
│   │   ├── audio.js           # เอฟเฟกต์เสียงสังเคราะห์ (Web Audio API) + ระบบสั่น (Haptics) ไม่ง้อเน็ต
│   │   ├── state.js           # ระบบบันทึกโปรไฟล์ผู้ใช้ LocalStorage, Migration v3, Backup/Restore JSON
│   │   ├── ui.js              # ตัวควบคุม UI, Dashboard Ring, Countdown Timer, Toast, Routing
│   │   ├── flashcards.js      # ระบบ 3D Flip Card, Spaced Repetition (Unsure, Learning, Mastered), Swipe Gesture
│   │   ├── quiz.js            # ระบบควิซแยกหมวดพร้อมเฉลยละเอียดและวิเคราะห์จุดตาย
│   │   └── mockExam.js        # The Battlefield: ข้อสอบเสมือนจริง 90 ข้อ จับเวลา 120 นาที พร้อมสรุปผลรายพาร์ท
│   └── app.js                 # ตัวประสานงานหลัก (Application Bootstrap & Event Listeners)
└── README.md                  # เอกสารคู่มือการใช้งาน
```

---

## ✨ จุดเด่นและการปรับปรุง UI/UX

1. **ดีไซน์มินิมอล สบายตา และหรูหรา (Modern Minimalist & Clean)**
   - ใช้โทนสี Slate ผสม Indigo, Violet, Emerald, Rose อย่างลงตัว
   - Glassmorphism แผงโปร่งแสงระดับ Blur 16px พร้อมขอบเส้นบางเฉียบ
   - ฟอนต์พรีเมียม `Plus Jakarta Sans` คู่กับ `Prompt` อ่านง่าย สบายตาทั้งภาษาไทยและอังกฤษ

2. **คลังข้อสอบและเนื้อหาคงเดิม 100% (Zero Modification to Test Content)**
   - **Flashcard 48 ข้อ**:
     - Grammar & Structure (19 กฎเหล็ก)
     - Error Identification (13 จุดตาย)
     - Reading Tactics (7 เทคนิคสแกน)
     - Reading Core Facts (9 แก่นข้อเท็จจริง)
   - **ข้อสอบจริง 90 ข้อ**:
     - Grammar & Structure: 20 ข้อ
     - Error Identification: 15 ข้อ
     - Cloze Test: 3 บทความ (15 ข้อ)
     - Reading Comprehension: 14 บทความ (40 ข้อ)

3. **3 โหมดการฝึกฝนตอบโจทย์ทุกระดับ**
   - **คลังอาวุธ (Flashcard Arsenal)**: พลิกการ์ด 3 มิติ รองรับ Swipe ท่าทางบนมือถือ และปุ่มลัดคีย์บอร์ด (`Space`/`Enter` เพื่อพลิก, ลูกศรซ้าย-ขวา, ตัวเลข `1`/`2`/`3` เพื่อประเมินตนเอง)
   - **ห้องซ้อมรบ (Training Room)**: ฝึกทำโจทย์แยกพาร์ท พร้อมเฉลยวิเคราะห์จุดตายทันทีหลังตอบ
   - **ลงสนามจริง (The Battlefield - Mock Exam)**: สอบเสมือนจริง 90 ข้อ จับเวลา 120 นาที ซ่อนเฉลยระหว่างทำ พร้อมออก Report แจกแจงคะแนนแบบละเอียดทุกพาร์ท

4. **ทำงานออฟไลน์ 100% ปลอดภัย ไม่ต้องต่อเซิร์ฟเวอร์**
   - จัดการโปรไฟล์นักศึกษา/ผู้ใช้ได้หลายคน (Multi-Profile)
   - สามารถดาวน์โหลดไฟล์ Backup (JSON) และ Restore กลับมาได้ตลอดเวลา
   - มีระบบจำลองเสียงปุ่ม เสียงพลิกการ์ด และเสียงตอบถูก/ผิด ด้วย Web Audio API ในตัว (เปิด/ปิดเสียงได้)
   - สลับ Dark Mode / Light Mode / System อัตโนมัติ

---

## 🚀 วิธีเปิดใช้งาน

- ดับเบิลคลิกไฟล์ `index.html` เพื่อเปิดใช้งานบนบราวเซอร์ใดก็ได้ (Chrome, Safari, Edge, Firefox) ได้ทันทีโดยไม่ต้องรันเซิร์ฟเวอร์
- หรือเปิดผ่าน Local Web Server เช่น `npx serve .` หรือ `python3 -m http.server 8080`
