/**
 * ENGLISH TEP Master - The Battlefield Mock Exam Controller (Bespoke Redesign)
 * Full 90-Item Official Mock Exam (120-minute timer, 4 parts, section analytics)
 */
window.TEP = window.TEP || {};

window.TEP.mockExam = (function () {
    let isActive = false;
    let timerInterval = null;
    let timeLeft = 7200; // 120 minutes = 7200 seconds

    // Track user choices
    let userAnswers = {
        grammar: {},
        error: {},
        cloze: {},
        reading: {}
    };

    let partScores = {
        grammar: 0,
        error: 0,
        cloze: 0,
        reading: 0
    };

    let currentPart = 1; // 1: Grammar, 2: Error, 3: Cloze, 4: Reading
    let currentItemIndex = 0; // within current part

    // Cloze passage tracking in mock
    let mockClozePassageIdx = 0;
    let mockReadingPassageIdx = 0;
    let mockReadingQIdx = 0;

    function start() {
        isActive = true;
        timeLeft = 7200;
        currentPart = 1;
        currentItemIndex = 0;
        mockClozePassageIdx = 0;
        mockReadingPassageIdx = 0;
        mockReadingQIdx = 0;

        userAnswers = { grammar: {}, error: {}, cloze: {}, reading: {} };
        partScores = { grammar: 0, error: 0, cloze: 0, reading: 0 };

        const timerDisplay = document.getElementById('mock-timer-display');
        if (timerDisplay) timerDisplay.classList.remove('hidden');

        updateTimerDisplay();

        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                window.TEP.ui.showToast("Time's Up! หมดเวลาสอบแล้ว", "warning");
                finishExam(true);
            }
        }, 1000);

        renderCurrentPartQuestion();
    }

    function updateTimerDisplay() {
        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        const timeStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        const textEl = document.getElementById('mock-timer-text');
        if (textEl) textEl.textContent = timeStr;

        const badge = document.getElementById('mock-timer-display');
        if (badge) {
            if (timeLeft <= 300) {
                badge.className = 'fixed top-5 right-5 z-[70] px-4 py-2 rounded-full shadow-2xl font-black text-white text-sm sm:text-base tabular-nums flex items-center gap-2 bg-rose-600 animate-pulse border-2 border-white/40';
            } else if (timeLeft <= 900) {
                badge.className = 'fixed top-5 right-5 z-[70] px-4 py-2 rounded-full shadow-2xl font-bold text-amber-600 dark:text-amber-400 text-sm sm:text-base tabular-nums flex items-center gap-2 bg-white/95 dark:bg-slate-900/95 border-2 border-amber-500';
            } else {
                badge.className = 'fixed top-5 right-5 z-[70] px-4 py-2 rounded-full shadow-2xl font-bold text-indigo-600 dark:text-indigo-400 text-sm sm:text-base tabular-nums flex items-center gap-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800';
            }
        }
    }

    function renderCurrentPartQuestion() {
        if (currentPart === 1) renderMockGrammar();
        else if (currentPart === 2) renderMockError();
        else if (currentPart === 3) renderMockCloze();
        else if (currentPart === 4) renderMockReading();
    }

    function renderMockGrammar() {
        window.TEP.ui.showView('view-quiz');
        const list = window.TEP.grammarQuizData || [];
        const q = list[currentItemIndex];
        const globalNum = currentItemIndex + 1;

        updateQuizHeader(globalNum, 90);

        const qText = document.getElementById('quiz-question-text');
        if (qText) qText.textContent = q.q;

        const expBox = document.getElementById('quiz-explanation-box');
        if (expBox) expBox.classList.add('hidden');

        const nextBtn = document.getElementById('quiz-next-btn');
        if (nextBtn) nextBtn.classList.add('hidden');

        const container = document.getElementById('quiz-options-container');
        if (container) {
            container.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];
            q.options.forEach((optText, optIdx) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'quiz-choice-card text-left font-medium flex items-center gap-3.5 w-full';
                btn.innerHTML = `
                    <span class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">
                        ${letters[optIdx]}
                    </span>
                    <span class="flex-1 text-slate-800 dark:text-slate-200 text-sm md:text-base">${optText}</span>
                `;

                btn.onclick = () => {
                    userAnswers.grammar[currentItemIndex] = optIdx;
                    if (optIdx === q.ans) partScores.grammar++;

                    container.querySelectorAll('button').forEach(b => {
                        b.classList.remove('border-indigo-600', 'bg-indigo-50', 'dark:bg-indigo-950/40');
                    });
                    btn.classList.add('border-indigo-600', 'bg-indigo-50', 'dark:bg-indigo-950/40');
                    if (window.TEP.audio) window.TEP.audio.tap();

                    if (nextBtn) {
                        nextBtn.classList.remove('hidden');
                        nextBtn.innerHTML = `<span>${window.TEP.ui.t('btn_next_q')}</span> <i class="fas fa-arrow-right ml-2"></i>`;
                        nextBtn.onclick = () => {
                            currentItemIndex++;
                            if (currentItemIndex < list.length) {
                                renderMockGrammar();
                            } else {
                                currentPart = 2;
                                currentItemIndex = 0;
                                window.TEP.ui.showToast("จบพาร์ท 1 (Grammar) กำลังเข้าสู่พาร์ท 2 (Error)...", "success");
                                renderMockError();
                            }
                        };
                    }
                };
                container.appendChild(btn);
            });
        }
    }

    function renderMockError() {
        window.TEP.ui.showView('view-quiz');
        const list = window.TEP.errorQuizData || [];
        const q = list[currentItemIndex];
        const globalNum = 20 + currentItemIndex + 1; // 21 - 35

        updateQuizHeader(globalNum, 90);

        const qText = document.getElementById('quiz-question-text');
        if (qText) qText.textContent = q.q;

        const expBox = document.getElementById('quiz-explanation-box');
        if (expBox) expBox.classList.add('hidden');

        const nextBtn = document.getElementById('quiz-next-btn');
        if (nextBtn) nextBtn.classList.add('hidden');

        const container = document.getElementById('quiz-options-container');
        if (container) {
            container.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];
            q.options.forEach((optText, optIdx) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'quiz-choice-card text-left font-medium flex items-center gap-3.5 w-full';
                btn.innerHTML = `
                    <span class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">
                        ${letters[optIdx]}
                    </span>
                    <span class="flex-1 text-slate-800 dark:text-slate-200 text-sm md:text-base">${optText}</span>
                `;

                btn.onclick = () => {
                    userAnswers.error[currentItemIndex] = optIdx;
                    if (optIdx === q.ans) partScores.error++;

                    container.querySelectorAll('button').forEach(b => {
                        b.classList.remove('border-indigo-600', 'bg-indigo-50', 'dark:bg-indigo-950/40');
                    });
                    btn.classList.add('border-indigo-600', 'bg-indigo-50', 'dark:bg-indigo-950/40');
                    if (window.TEP.audio) window.TEP.audio.tap();

                    if (nextBtn) {
                        nextBtn.classList.remove('hidden');
                        nextBtn.innerHTML = `<span>${window.TEP.ui.t('btn_next_q')}</span> <i class="fas fa-arrow-right ml-2"></i>`;
                        nextBtn.onclick = () => {
                            currentItemIndex++;
                            if (currentItemIndex < list.length) {
                                renderMockError();
                            } else {
                                currentPart = 3;
                                mockClozePassageIdx = 0;
                                window.TEP.ui.showToast("จบพาร์ท 2 (Error) กำลังเข้าสู่พาร์ท 3 (Cloze Test)...", "success");
                                renderMockCloze();
                            }
                        };
                    }
                };
                container.appendChild(btn);
            });
        }
    }

    function renderMockCloze() {
        window.TEP.ui.showView('view-cloze');
        const passages = window.TEP.clozeData || [];
        const passage = passages[mockClozePassageIdx];
        if (!passage) return;

        const titleEl = document.getElementById('cloze-title-display');
        const progEl = document.getElementById('cloze-progress-text');
        const barEl = document.getElementById('cloze-progress-bar');
        const container = document.getElementById('cloze-text-container');
        const nextPassBtn = document.getElementById('cloze-next-passage-btn');

        if (titleEl) titleEl.textContent = `${passage.title}`;

        const answeredCount = Object.keys(userAnswers.cloze).length;
        const globalNum = 35 + answeredCount;
        if (progEl) progEl.textContent = `${globalNum}/90`;
        if (barEl) barEl.style.width = `${(globalNum / 90) * 100}%`;

        if (container) {
            container.innerHTML = '';
            const parts = passage.text.split(/(\[BLANK_\d+\])/g);

            parts.forEach(part => {
                const match = part.match(/\[BLANK_(\d+)\]/);
                if (match) {
                    const qNum = parseInt(match[1], 10);
                    const q = passage.questions.find(x => x.qNum === qNum);
                    const btn = document.createElement('button');
                    btn.type = 'button';

                    const isAnswered = userAnswers.cloze[qNum] !== undefined;

                    btn.className = "cloze-blank-pill ";
                    if (isAnswered) {
                        btn.textContent = q.options[userAnswers.cloze[qNum]];
                        btn.classList.add('bg-indigo-100', 'dark:bg-indigo-950/80', 'text-indigo-700', 'dark:text-indigo-300');
                    } else {
                        btn.innerHTML = `<i class="fas fa-edit mr-1 text-[10px] opacity-70"></i> Q.${qNum}`;
                    }

                    btn.onclick = () => openMockClozeModal(qNum);
                    container.appendChild(btn);
                } else if (part) {
                    const span = document.createElement('span');
                    span.textContent = part;
                    container.appendChild(span);
                }
            });
        }

        const isPassageComplete = passage.questions.every(q => userAnswers.cloze[q.qNum] !== undefined);
        if (nextPassBtn) {
            if (isPassageComplete) {
                nextPassBtn.classList.remove('hidden');
                nextPassBtn.innerHTML = `<span>${window.TEP.ui.t('btn_next_pass')}</span> <i class="fas fa-arrow-right ml-2"></i>`;
                nextPassBtn.onclick = () => {
                    mockClozePassageIdx++;
                    if (mockClozePassageIdx < passages.length) {
                        renderMockCloze();
                    } else {
                        currentPart = 4;
                        mockReadingPassageIdx = 0;
                        mockReadingQIdx = 0;
                        window.TEP.ui.showToast("จบพาร์ท 3 (Cloze) กำลังเข้าสู่พาร์ทสุดท้าย Reading...", "success");
                        renderMockReading();
                    }
                };
            } else {
                nextPassBtn.classList.add('hidden');
            }
        }
    }

    function openMockClozeModal(qNum) {
        const passages = window.TEP.clozeData || [];
        const passage = passages[mockClozePassageIdx];
        const q = passage.questions.find(x => x.qNum === qNum);
        if (!q) return;

        const numDisplay = document.getElementById('cloze-qnum-display');
        const optsContainer = document.getElementById('cloze-options-container');
        const expBox = document.getElementById('cloze-explanation-box');
        const closeBtn = document.getElementById('cloze-modal-close-btn');

        if (numDisplay) numDisplay.textContent = qNum;
        if (expBox) expBox.classList.add('hidden');
        if (closeBtn) closeBtn.classList.add('hidden');

        if (optsContainer) {
            optsContainer.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];
            q.options.forEach((optText, optIdx) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'quiz-choice-card text-left font-medium flex items-center gap-3 w-full py-3';
                btn.innerHTML = `
                    <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">
                        ${letters[optIdx]}
                    </span>
                    <span class="flex-1 text-slate-800 dark:text-slate-200 text-sm md:text-base">${optText}</span>
                `;

                if (userAnswers.cloze[qNum] === optIdx) {
                    btn.classList.add('border-indigo-600', 'bg-indigo-50', 'dark:bg-indigo-950/40');
                }

                btn.onclick = () => {
                    userAnswers.cloze[qNum] = optIdx;
                    if (optIdx === q.ans) partScores.cloze++;
                    if (window.TEP.audio) window.TEP.audio.tap();

                    const modal = document.getElementById('cloze-modal');
                    if (modal) modal.classList.add('hidden');
                    renderMockCloze();
                };
                optsContainer.appendChild(btn);
            });
        }

        const modal = document.getElementById('cloze-modal');
        if (modal) modal.classList.remove('hidden');
    }

    function renderMockReading() {
        window.TEP.ui.showView('view-reading');
        const passages = window.TEP.readingData || [];
        const passage = passages[mockReadingPassageIdx];
        if (!passage) return;
        const q = passage.questions[mockReadingQIdx];

        let offset = 0;
        for (let i = 0; i < mockReadingPassageIdx; i++) {
            offset += passages[i].questions.length;
        }
        const globalNum = 50 + offset + mockReadingQIdx + 1; // 51 - 90

        const currEl = document.getElementById('reading-current-num');
        const totEl = document.getElementById('reading-total-num');
        const barEl = document.getElementById('reading-progress-bar');
        const passageBox = document.getElementById('reading-passage-text');
        const qBox = document.getElementById('reading-question-text');
        const optsContainer = document.getElementById('reading-options-container');
        const expBox = document.getElementById('reading-explanation-box');
        const nextBtn = document.getElementById('reading-next-btn');

        if (currEl) currEl.textContent = globalNum;
        if (totEl) totEl.textContent = 90;
        if (barEl) barEl.style.width = `${(globalNum / 90) * 100}%`;

        if (passageBox) {
            passageBox.innerHTML = '';
            const heading = document.createElement('h4');
            heading.className = 'font-bold text-sky-600 dark:text-sky-400 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1 text-sm uppercase tracking-wider';
            heading.textContent = passage.title;
            passageBox.appendChild(heading);

            passage.text.split('\n').forEach(line => {
                if (line.trim()) {
                    const p = document.createElement('p');
                    p.className = 'mb-2.5 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base';
                    p.textContent = line;
                    passageBox.appendChild(p);
                }
            });
        }

        if (qBox) qBox.textContent = q.q;
        if (expBox) expBox.classList.add('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');

        if (optsContainer) {
            optsContainer.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];
            q.options.forEach((optText, optIdx) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'quiz-choice-card text-left font-medium flex items-center gap-3 w-full py-3';
                btn.innerHTML = `
                    <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">
                        ${letters[optIdx]}
                    </span>
                    <span class="flex-1 text-slate-800 dark:text-slate-200 text-sm md:text-base">${optText}</span>
                `;

                btn.onclick = () => {
                    const globalKey = `${mockReadingPassageIdx}_${mockReadingQIdx}`;
                    userAnswers.reading[globalKey] = optIdx;
                    if (optIdx === q.ans) partScores.reading++;
                    if (window.TEP.audio) window.TEP.audio.tap();

                    optsContainer.querySelectorAll('button').forEach(b => {
                        b.classList.remove('border-sky-600', 'bg-sky-50', 'dark:bg-sky-950/40');
                    });
                    btn.classList.add('border-sky-600', 'bg-sky-50', 'dark:bg-sky-950/40');

                    if (nextBtn) {
                        nextBtn.classList.remove('hidden');
                        const isFinalItem = globalNum === 90;
                        nextBtn.innerHTML = isFinalItem
                            ? `<span>${window.TEP.ui.t('btn_finish')}</span> <i class="fas fa-trophy ml-2"></i>`
                            : `<span>${window.TEP.ui.t('btn_next_q')}</span> <i class="fas fa-arrow-right ml-2"></i>`;

                        nextBtn.onclick = () => {
                            mockReadingQIdx++;
                            if (mockReadingQIdx >= passage.questions.length) {
                                mockReadingPassageIdx++;
                                mockReadingQIdx = 0;
                            }

                            if (mockReadingPassageIdx < passages.length) {
                                renderMockReading();
                            } else {
                                finishExam(false);
                            }
                        };
                    }
                };
                optsContainer.appendChild(btn);
            });
        }
    }

    function updateQuizHeader(current, total) {
        const currEl = document.getElementById('quiz-current-num');
        const totEl = document.getElementById('quiz-total-num');
        const barEl = document.getElementById('quiz-progress-bar');
        if (currEl) currEl.textContent = current;
        if (totEl) totEl.textContent = total;
        if (barEl) barEl.style.width = `${(current / total) * 100}%`;
    }

    function finishExam(isTimeout = false) {
        if (timerInterval) clearInterval(timerInterval);
        const timerBadge = document.getElementById('mock-timer-display');
        if (timerBadge) timerBadge.classList.add('hidden');
        isActive = false;

        if (window.TEP.audio) window.TEP.audio.complete();

        const totalEarned = partScores.grammar + partScores.error + partScores.cloze + partScores.reading;
        const stateData = window.TEP.state.data;

        if (!stateData.quizScores.mock || totalEarned > stateData.quizScores.mock) {
            stateData.quizScores.mock = totalEarned;
            window.TEP.state.saveState();
        }

        const scoreEl = document.getElementById('summary-score');
        const totalEl = document.getElementById('summary-total');
        const percentEl = document.getElementById('summary-percentage-display');
        const subEl = document.getElementById('summary-subtitle');

        if (scoreEl) scoreEl.textContent = totalEarned;
        if (totalEl) totalEl.textContent = 90;

        const pct = Math.round((totalEarned / 90) * 100);
        if (percentEl) percentEl.textContent = `${pct}%`;

        let feedback = "";
        if (pct >= 85) feedback = "เกียรตินิยมอันดับ 1! 🏆 คุณพร้อมพิชิตข้อสอบ TEP ด้วยคะแนนระดับท็อป";
        else if (pct >= 70) feedback = "ยอดเยี่ยมมาก! 🌟 ผ่านเกณฑ์ระดับสูง แนะนำทบทวนพาร์ทที่หลุดเล็กน้อย";
        else if (pct >= 50) feedback = "ผ่านเกณฑ์พื้นฐาน 👍 หมั่นฝึกฝนจับเวลาและทบทวนทริคในคลังอาวุธเพิ่มขึ้น";
        else feedback = "ยังไม่ผ่านเกณฑ์เป้าหมาย 💡 อย่าเพิ่งท้อ แนะนำให้ท่อง Flashcard ทั้ง 48 ข้อให้แม่นก่อนสอบจริง";

        if (subEl) {
            subEl.innerHTML = `
                <div class="mb-3 font-semibold text-slate-800 dark:text-slate-200">${feedback}</div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-left max-w-md mx-auto pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                    <div class="p-2.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200/30">
                        <span class="font-bold text-indigo-600 dark:text-indigo-400 block">Grammar</span>
                        <span class="font-bold tabular-nums">${partScores.grammar}/20</span>
                    </div>
                    <div class="p-2.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200/30">
                        <span class="font-bold text-rose-600 dark:text-rose-400 block">Error</span>
                        <span class="font-bold tabular-nums">${partScores.error}/15</span>
                    </div>
                    <div class="p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200/30">
                        <span class="font-bold text-purple-600 dark:text-purple-400 block">Cloze</span>
                        <span class="font-bold tabular-nums">${partScores.cloze}/15</span>
                    </div>
                    <div class="p-2.5 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200/30">
                        <span class="font-bold text-sky-600 dark:text-sky-400 block">Reading</span>
                        <span class="font-bold tabular-nums">${partScores.reading}/40</span>
                    </div>
                </div>
            `;
        }

        window.TEP.ui.navigateTo('view-quiz-summary');
    }

    function abort() {
        if (!isActive) return;
        const modal = document.getElementById('abort-mock-modal');
        if (modal) modal.classList.remove('hidden');
    }

    function confirmAbort() {
        if (timerInterval) clearInterval(timerInterval);
        const timerBadge = document.getElementById('mock-timer-display');
        if (timerBadge) timerBadge.classList.add('hidden');
        isActive = false;

        const modal = document.getElementById('abort-mock-modal');
        if (modal) modal.classList.add('hidden');

        window.TEP.ui.navigateTo('view-lobby');
    }

    function closeAbortModal() {
        const modal = document.getElementById('abort-mock-modal');
        if (modal) modal.classList.add('hidden');
    }

    return {
        get isActive() { return isActive; },
        start,
        abort,
        confirmAbort,
        closeAbortModal
    };
})();
