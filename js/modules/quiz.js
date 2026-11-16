/**
 * ENGLISH TEP Master - Practice Quizzes Controller
 * Manages Grammar (20), Error (15), Cloze (15), Reading (40)
 */
window.TEP = window.TEP || {};

window.TEP.quiz = (function () {
    let currentMode = null; // 'grammar', 'error', 'cloze', 'reading'
    let currentQIdx = 0;
    let score = 0;
    let totalQuestions = 0;

    let activeQuestions = [];
    let optionsMap = {}; // mapping question index to shuffled option order

    // Cloze state
    let activeClozePassageIdx = 0;
    let clozeAnswers = {}; // qNum -> chosen index
    let clozeOptionsMap = {};

    // Reading state
    let activeReadingPassageIdx = 0;
    let activeReadingQIdx = 0;

    function shuffle(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function start(mode) {
        currentMode = mode;
        currentQIdx = 0;
        score = 0;

        if (mode === 'grammar') {
            activeQuestions = window.TEP.grammarQuizData || [];
            totalQuestions = activeQuestions.length; // 20
            optionsMap = {};
            activeQuestions.forEach((_, i) => {
                optionsMap[i] = shuffle([0, 1, 2, 3]);
            });
            window.TEP.ui.navigateTo('view-quiz');
            renderSingleChoiceQuestion();

        } else if (mode === 'error') {
            activeQuestions = window.TEP.errorQuizData || [];
            totalQuestions = activeQuestions.length; // 15
            optionsMap = {};
            activeQuestions.forEach((_, i) => {
                optionsMap[i] = [0, 1, 2, 3]; // Keep A, B, C, D in order for Error
            });
            window.TEP.ui.navigateTo('view-quiz');
            renderSingleChoiceQuestion();

        } else if (mode === 'cloze') {
            activeClozePassageIdx = 0;
            clozeAnswers = {};
            const clozePassages = window.TEP.clozeData || [];
            totalQuestions = clozePassages.reduce((acc, p) => acc + p.questions.length, 0); // 15
            clozeOptionsMap = {};
            clozePassages.forEach(p => {
                p.questions.forEach(q => {
                    clozeOptionsMap[q.qNum] = shuffle([0, 1, 2, 3]);
                });
            });
            window.TEP.ui.navigateTo('view-cloze');
            renderClozePassage();

        } else if (mode === 'reading') {
            activeReadingPassageIdx = 0;
            activeReadingQIdx = 0;
            const readingPassages = window.TEP.readingData || [];
            totalQuestions = readingPassages.reduce((acc, p) => acc + p.questions.length, 0); // 40
            optionsMap = {};
            let gIdx = 0;
            readingPassages.forEach(p => {
                p.questions.forEach(() => {
                    optionsMap[gIdx] = shuffle([0, 1, 2, 3]);
                    gIdx++;
                });
            });
            window.TEP.ui.navigateTo('view-reading');
            renderReadingQuestion();
        }
    }

    // --- Single Choice Question Renderer (Grammar & Error) ---
    function renderSingleChoiceQuestion() {
        if (currentQIdx < 0 || currentQIdx >= totalQuestions) return;
        const q = activeQuestions[currentQIdx];
        const optOrder = optionsMap[currentQIdx] || [0, 1, 2, 3];

        const currEl = document.getElementById('quiz-current-num');
        const totEl = document.getElementById('quiz-total-num');
        const barEl = document.getElementById('quiz-progress-bar');
        const textEl = document.getElementById('quiz-question-text');
        const optsContainer = document.getElementById('quiz-options-container');
        const expBox = document.getElementById('quiz-explanation-box');
        const nextBtn = document.getElementById('quiz-next-btn');

        if (currEl) currEl.textContent = currentQIdx + 1;
        if (totEl) totEl.textContent = totalQuestions;
        if (barEl) barEl.style.width = `${((currentQIdx) / totalQuestions) * 100}%`;
        if (textEl) textEl.textContent = q.q;

        if (expBox) {
            expBox.classList.add('hidden');
            expBox.classList.remove('slide-down-enter');
        }
        if (nextBtn) nextBtn.classList.add('hidden');

        if (optsContainer) {
            optsContainer.innerHTML = '';
            optsContainer.dataset.answered = 'false';

            const letters = ['A', 'B', 'C', 'D'];
            optOrder.forEach((origIdx, displayIdx) => {
                const optText = q.options[origIdx];
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'quiz-option surface-solid p-4 rounded-2xl text-left font-medium flex items-center gap-3.5 w-full group border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all duration-150';
                btn.innerHTML = `
                    <span class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0 shadow-xs">
                        ${letters[displayIdx]}
                    </span>
                    <span class="flex-1 text-slate-800 dark:text-slate-200 text-sm md:text-base leading-relaxed">${optText}</span>
                `;
                btn.onclick = () => handleChoiceAnswer(displayIdx, btn);
                optsContainer.appendChild(btn);
            });
        }
    }

    function handleChoiceAnswer(displayIdx, clickedBtn) {
        const optsContainer = document.getElementById('quiz-options-container');
        if (!optsContainer || optsContainer.dataset.answered === 'true') return;
        optsContainer.dataset.answered = 'true';

        const q = activeQuestions[currentQIdx];
        const optOrder = optionsMap[currentQIdx];
        const selectedOrigIdx = optOrder[displayIdx];
        const isCorrect = selectedOrigIdx === q.ans;

        const btns = optsContainer.querySelectorAll('button');
        btns.forEach(b => b.disabled = true);

        if (isCorrect) {
            score++;
            clickedBtn.classList.add('correct', 'border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/30');
            const badge = clickedBtn.querySelector('span');
            if (badge) badge.className = 'w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0';
            if (window.TEP.audio) window.TEP.audio.correct();
        } else {
            clickedBtn.classList.add('incorrect', 'border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/30');
            const badge = clickedBtn.querySelector('span');
            if (badge) badge.className = 'w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold text-sm shrink-0';

            // Highlight correct one
            const correctDisplayIdx = optOrder.indexOf(q.ans);
            if (correctDisplayIdx !== -1 && btns[correctDisplayIdx]) {
                const correctBtn = btns[correctDisplayIdx];
                correctBtn.classList.add('correct', 'border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/30');
                const cBadge = correctBtn.querySelector('span');
                if (cBadge) cBadge.className = 'w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0';
            }
            if (window.TEP.audio) window.TEP.audio.incorrect();
        }

        // Show explanation
        const expBox = document.getElementById('quiz-explanation-box');
        const expText = document.getElementById('quiz-explanation-text');
        if (expBox && expText) {
            expText.textContent = q.exp;
            expBox.classList.remove('hidden');
            expBox.classList.add('slide-down-enter');
        }

        // Show next button
        const nextBtn = document.getElementById('quiz-next-btn');
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            if (currentQIdx === totalQuestions - 1) {
                nextBtn.innerHTML = `<span>${window.TEP.ui.t('btn_finish')}</span> <i class="fas fa-trophy ml-2"></i>`;
            } else {
                nextBtn.innerHTML = `<span>${window.TEP.ui.t('btn_next_q')}</span> <i class="fas fa-arrow-right ml-2"></i>`;
            }
        }
    }

    function nextQuestion() {
        if (window.TEP.audio) window.TEP.audio.tap();
        currentQIdx++;
        if (currentQIdx < totalQuestions) {
            renderSingleChoiceQuestion();
        } else {
            finishQuiz();
        }
    }

    // --- Cloze Test Renderer ---
    function renderClozePassage() {
        const clozePassages = window.TEP.clozeData || [];
        if (activeClozePassageIdx < 0 || activeClozePassageIdx >= clozePassages.length) return;
        const passage = clozePassages[activeClozePassageIdx];

        const titleEl = document.getElementById('cloze-title-display');
        const progEl = document.getElementById('cloze-progress-text');
        const barEl = document.getElementById('cloze-progress-bar');
        const container = document.getElementById('cloze-text-container');
        const nextPassBtn = document.getElementById('cloze-next-passage-btn');

        if (titleEl) titleEl.textContent = passage.title;
        const answeredCount = Object.keys(clozeAnswers).length;
        if (progEl) progEl.textContent = `${answeredCount}/${totalQuestions}`;
        if (barEl) barEl.style.width = `${(answeredCount / totalQuestions) * 100}%`;

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

                    const isAnswered = clozeAnswers[qNum] !== undefined;
                    const isCorrect = isAnswered && clozeAnswers[qNum] === q.ans;

                    btn.className = "inline-flex items-center justify-center px-3 py-1 mx-1.5 my-1 rounded-xl text-sm md:text-base font-bold transition-all border shadow-xs cursor-pointer align-middle ";

                    if (isAnswered) {
                        btn.textContent = q.options[clozeAnswers[qNum]];
                        btn.className += isCorrect
                            ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 border-emerald-400"
                            : "bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300 border-rose-400 line-through";
                    } else {
                        btn.innerHTML = `<i class="fas fa-edit mr-1 text-xs opacity-60"></i> Q.${qNum}`;
                        btn.className += "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700 hover:bg-indigo-100 hover:scale-105 cloze-btn-unanswered";
                    }

                    btn.onclick = () => openClozeModal(qNum);
                    container.appendChild(btn);
                } else if (part) {
                    const span = document.createElement('span');
                    span.textContent = part;
                    container.appendChild(span);
                }
            });
        }

        const isPassageComplete = passage.questions.every(q => clozeAnswers[q.qNum] !== undefined);
        if (nextPassBtn) {
            if (isPassageComplete) {
                nextPassBtn.classList.remove('hidden');
                const isLast = activeClozePassageIdx === clozePassages.length - 1;
                nextPassBtn.innerHTML = isLast
                    ? `<span>${window.TEP.ui.t('btn_finish')}</span> <i class="fas fa-trophy ml-2"></i>`
                    : `<span>${window.TEP.ui.t('btn_next_pass')}</span> <i class="fas fa-arrow-right ml-2"></i>`;
            } else {
                nextPassBtn.classList.add('hidden');
            }
        }
    }

    function openClozeModal(qNum) {
        const clozePassages = window.TEP.clozeData || [];
        const passage = clozePassages[activeClozePassageIdx];
        const q = passage.questions.find(x => x.qNum === qNum);
        if (!q) return;

        const optOrder = clozeOptionsMap[qNum] || [0, 1, 2, 3];
        const isAnswered = clozeAnswers[qNum] !== undefined;

        const numDisplay = document.getElementById('cloze-qnum-display');
        const optsContainer = document.getElementById('cloze-options-container');
        const expBox = document.getElementById('cloze-explanation-box');
        const expText = document.getElementById('cloze-explanation-text');
        const closeBtn = document.getElementById('cloze-modal-close-btn');

        if (numDisplay) numDisplay.textContent = qNum;

        if (optsContainer) {
            optsContainer.innerHTML = '';
            optsContainer.dataset.answered = isAnswered ? 'true' : 'false';

            const letters = ['A', 'B', 'C', 'D'];
            optOrder.forEach((origIdx, displayIdx) => {
                const optText = q.options[origIdx];
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'quiz-option surface-solid p-3.5 rounded-xl text-left font-medium flex items-center gap-3 w-full border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all';
                btn.innerHTML = `
                    <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">
                        ${letters[displayIdx]}
                    </span>
                    <span class="flex-1 text-slate-800 dark:text-slate-200 text-sm md:text-base">${optText}</span>
                `;

                if (isAnswered) {
                    btn.disabled = true;
                    if (origIdx === q.ans) {
                        btn.classList.add('correct', 'border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/30');
                        btn.querySelector('span').className = 'w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0';
                    } else if (origIdx === clozeAnswers[qNum]) {
                        btn.classList.add('incorrect', 'border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/30');
                        btn.querySelector('span').className = 'w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center font-bold text-sm shrink-0';
                    }
                } else {
                    btn.onclick = () => handleClozeChoice(qNum, origIdx, btn);
                }
                optsContainer.appendChild(btn);
            });
        }

        if (isAnswered) {
            if (expBox && expText) {
                expText.textContent = q.exp;
                expBox.classList.remove('hidden');
            }
            if (closeBtn) closeBtn.classList.remove('hidden');
        } else {
            if (expBox) expBox.classList.add('hidden');
            if (closeBtn) closeBtn.classList.add('hidden');
        }

        const modal = document.getElementById('cloze-modal');
        if (modal) modal.classList.remove('hidden');
    }

    function handleClozeChoice(qNum, selectedOrigIdx, clickedBtn) {
        const clozePassages = window.TEP.clozeData || [];
        const passage = clozePassages[activeClozePassageIdx];
        const q = passage.questions.find(x => x.qNum === qNum);
        if (!q) return;

        clozeAnswers[qNum] = selectedOrigIdx;
        const isCorrect = selectedOrigIdx === q.ans;
        if (isCorrect) score++;

        const optsContainer = document.getElementById('cloze-options-container');
        if (optsContainer) {
            optsContainer.dataset.answered = 'true';
            const btns = optsContainer.querySelectorAll('button');
            btns.forEach(b => b.disabled = true);
        }

        if (isCorrect) {
            clickedBtn.classList.add('correct', 'border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/30');
            const badge = clickedBtn.querySelector('span');
            if (badge) badge.className = 'w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0';
            if (window.TEP.audio) window.TEP.audio.correct();
        } else {
            clickedBtn.classList.add('incorrect', 'border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/30');
            const badge = clickedBtn.querySelector('span');
            if (badge) badge.className = 'w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center font-bold text-sm shrink-0';

            const optOrder = clozeOptionsMap[qNum];
            const correctDisplayIdx = optOrder.indexOf(q.ans);
            const btns = optsContainer.querySelectorAll('button');
            if (correctDisplayIdx !== -1 && btns[correctDisplayIdx]) {
                const cBtn = btns[correctDisplayIdx];
                cBtn.classList.add('correct', 'border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/30');
                const cBadge = cBtn.querySelector('span');
                if (cBadge) cBadge.className = 'w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0';
            }
            if (window.TEP.audio) window.TEP.audio.incorrect();
        }

        const expBox = document.getElementById('cloze-explanation-box');
        const expText = document.getElementById('cloze-explanation-text');
        if (expBox && expText) {
            expText.textContent = q.exp;
            expBox.classList.remove('hidden');
            expBox.classList.add('slide-down-enter');
        }

        const closeBtn = document.getElementById('cloze-modal-close-btn');
        if (closeBtn) closeBtn.classList.remove('hidden');

        renderClozePassage();
    }

    function closeClozeModal() {
        const modal = document.getElementById('cloze-modal');
        if (modal) modal.classList.add('hidden');
    }

    function nextClozePassage() {
        const clozePassages = window.TEP.clozeData || [];
        activeClozePassageIdx++;
        if (activeClozePassageIdx < clozePassages.length) {
            renderClozePassage();
        } else {
            finishQuiz();
        }
    }

    // --- Reading Comprehension Renderer ---
    function renderReadingQuestion() {
        const readingPassages = window.TEP.readingData || [];
        if (activeReadingPassageIdx >= readingPassages.length) return;

        const passage = readingPassages[activeReadingPassageIdx];
        const q = passage.questions[activeReadingQIdx];

        // Global question index
        let globalQIdx = 0;
        for (let i = 0; i < activeReadingPassageIdx; i++) {
            globalQIdx += readingPassages[i].questions.length;
        }
        globalQIdx += activeReadingQIdx;

        const optOrder = optionsMap[globalQIdx] || [0, 1, 2, 3];

        const currEl = document.getElementById('reading-current-num');
        const totEl = document.getElementById('reading-total-num');
        const barEl = document.getElementById('reading-progress-bar');
        const passageBox = document.getElementById('reading-passage-text');
        const qBox = document.getElementById('reading-question-text');
        const optsContainer = document.getElementById('reading-options-container');
        const expBox = document.getElementById('reading-explanation-box');
        const nextBtn = document.getElementById('reading-next-btn');

        if (currEl) currEl.textContent = globalQIdx + 1;
        if (totEl) totEl.textContent = totalQuestions;
        if (barEl) barEl.style.width = `${(globalQIdx / totalQuestions) * 100}%`;

        // Render passage
        if (passageBox) {
            passageBox.innerHTML = '';
            const heading = document.createElement('h4');
            heading.className = 'font-bold text-indigo-600 dark:text-indigo-400 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1';
            heading.textContent = passage.title;
            passageBox.appendChild(heading);

            passage.text.split('\n').forEach(line => {
                if (line.trim()) {
                    const p = document.createElement('p');
                    p.className = 'mb-2 text-slate-700 dark:text-slate-300 leading-relaxed';
                    p.textContent = line;
                    passageBox.appendChild(p);
                }
            });
        }

        if (qBox) qBox.textContent = q.q;

        if (expBox) {
            expBox.classList.add('hidden');
            expBox.classList.remove('slide-down-enter');
        }
        if (nextBtn) nextBtn.classList.add('hidden');

        if (optsContainer) {
            optsContainer.innerHTML = '';
            optsContainer.dataset.answered = 'false';

            const letters = ['A', 'B', 'C', 'D'];
            optOrder.forEach((origIdx, displayIdx) => {
                const optText = q.options[origIdx];
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'quiz-option surface-solid p-3.5 md:p-4 rounded-xl text-left font-medium flex items-center gap-3 w-full border border-slate-200 dark:border-slate-800 hover:border-sky-500 transition-all';
                btn.innerHTML = `
                    <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                        ${letters[displayIdx]}
                    </span>
                    <span class="flex-1 text-slate-800 dark:text-slate-200 text-sm md:text-base">${optText}</span>
                `;
                btn.onclick = () => handleReadingAnswer(globalQIdx, displayIdx, btn);
                optsContainer.appendChild(btn);
            });
        }
    }

    function handleReadingAnswer(globalQIdx, displayIdx, clickedBtn) {
        const optsContainer = document.getElementById('reading-options-container');
        if (!optsContainer || optsContainer.dataset.answered === 'true') return;
        optsContainer.dataset.answered = 'true';

        const readingPassages = window.TEP.readingData || [];
        const passage = readingPassages[activeReadingPassageIdx];
        const q = passage.questions[activeReadingQIdx];
        const optOrder = optionsMap[globalQIdx];
        const selectedOrigIdx = optOrder[displayIdx];
        const isCorrect = selectedOrigIdx === q.ans;

        const btns = optsContainer.querySelectorAll('button');
        btns.forEach(b => b.disabled = true);

        if (isCorrect) {
            score++;
            clickedBtn.classList.add('correct', 'border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/30');
            const badge = clickedBtn.querySelector('span');
            if (badge) badge.className = 'w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0';
            if (window.TEP.audio) window.TEP.audio.correct();
        } else {
            clickedBtn.classList.add('incorrect', 'border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/30');
            const badge = clickedBtn.querySelector('span');
            if (badge) badge.className = 'w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center font-bold text-sm shrink-0';

            const correctDisplayIdx = optOrder.indexOf(q.ans);
            if (correctDisplayIdx !== -1 && btns[correctDisplayIdx]) {
                const cBtn = btns[correctDisplayIdx];
                cBtn.classList.add('correct', 'border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/30');
                const cBadge = cBtn.querySelector('span');
                if (cBadge) cBadge.className = 'w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0';
            }
            if (window.TEP.audio) window.TEP.audio.incorrect();
        }

        const expBox = document.getElementById('reading-explanation-box');
        const expText = document.getElementById('reading-explanation-text');
        if (expBox && expText) {
            expText.textContent = q.exp;
            expBox.classList.remove('hidden');
            expBox.classList.add('slide-down-enter');
        }

        const nextBtn = document.getElementById('reading-next-btn');
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            if (globalQIdx === totalQuestions - 1) {
                nextBtn.innerHTML = `<span>${window.TEP.ui.t('btn_finish')}</span> <i class="fas fa-trophy ml-2"></i>`;
            } else {
                nextBtn.innerHTML = `<span>${window.TEP.ui.t('btn_next_q')}</span> <i class="fas fa-arrow-right ml-2"></i>`;
            }
        }
    }

    function nextReadingQuestion() {
        const readingPassages = window.TEP.readingData || [];
        const passage = readingPassages[activeReadingPassageIdx];
        activeReadingQIdx++;

        if (activeReadingQIdx >= passage.questions.length) {
            activeReadingPassageIdx++;
            activeReadingQIdx = 0;
        }

        if (activeReadingPassageIdx < readingPassages.length) {
            renderReadingQuestion();
        } else {
            finishQuiz();
        }
    }

    function finishQuiz() {
        if (window.TEP.audio) window.TEP.audio.complete();
        const stateData = window.TEP.state.data;

        // Save best score
        if (!stateData.quizScores[currentMode] || score > stateData.quizScores[currentMode]) {
            stateData.quizScores[currentMode] = score;
            window.TEP.state.saveState();
        }

        const scoreEl = document.getElementById('summary-score');
        const totalEl = document.getElementById('summary-total');
        const percentEl = document.getElementById('summary-percentage-display');
        const subEl = document.getElementById('summary-subtitle');

        if (scoreEl) scoreEl.textContent = score;
        if (totalEl) totalEl.textContent = totalQuestions;

        const pct = Math.round((score / totalQuestions) * 100);
        if (percentEl) percentEl.textContent = `${pct}%`;

        if (subEl) {
            if (pct >= 80) subEl.textContent = "ยอดเยี่ยมมาก! คุณทำคะแนนได้ในเกณฑ์ Master 🌟";
            else if (pct >= 50) subEl.textContent = "ทำได้ดีมาก! ลองทบทวนจุดที่พลาดอีกนิดจะแม่นยำยิ่งขึ้น 👍";
            else subEl.textContent = "พยายามได้ดี! แนะนำให้ทบทวน Flashcard เพิ่มเติมก่อนฝึกซ้ำ 📚";
        }

        window.TEP.ui.navigateTo('view-quiz-summary');
    }

    function abort() {
        window.TEP.ui.goBack();
    }

    return {
        start,
        nextQuestion,
        renderClozePassage,
        openClozeModal,
        closeClozeModal,
        nextClozePassage,
        nextReadingQuestion,
        abort
    };
})();
