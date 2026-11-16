/**
 * ENGLISH TEP Master - UI Controller & View Navigation (Bespoke Redesign)
 */
window.TEP = window.TEP || {};

window.TEP.ui = (function () {
    let viewHistory = ['view-lobby'];
    let countdownInterval = null;

    function t(key) {
        const lang = (window.TEP.state && window.TEP.state.data && window.TEP.state.data.lang) || 'th';
        const dict = window.TEP.i18n && window.TEP.i18n[lang];
        if (dict && dict[key] !== undefined) return dict[key];
        if (window.TEP.i18n && window.TEP.i18n.en && window.TEP.i18n.en[key] !== undefined) {
            return window.TEP.i18n.en[key];
        }
        return key;
    }

    function applyI18n() {
        const lang = (window.TEP.state && window.TEP.state.data && window.TEP.state.data.lang) || 'th';
        const dict = (window.TEP.i18n && window.TEP.i18n[lang]) || {};

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                if (el.tagName === 'INPUT' && el.type === 'text') {
                    el.placeholder = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Lang button label
        const langBtn = document.getElementById('lang-btn');
        if (langBtn) {
            langBtn.textContent = lang === 'en' ? 'EN' : 'TH';
            langBtn.setAttribute('title', lang === 'en' ? 'Switch to Thai' : 'เปลี่ยนเป็นภาษาอังกฤษ');
        }

        // Sound toggle button icon
        const soundBtn = document.getElementById('sound-toggle-btn');
        if (soundBtn) {
            const isMuted = !window.TEP.audio.isEnabled();
            soundBtn.setAttribute('title', isMuted ? t('sound_off') : t('sound_on'));
            soundBtn.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
            if (isMuted) {
                soundBtn.classList.add('text-rose-500', 'opacity-80');
            } else {
                soundBtn.classList.remove('text-rose-500', 'opacity-80');
            }
        }
    }

    function applyTheme() {
        const theme = (window.TEP.state && window.TEP.state.data && window.TEP.state.data.theme) || 'system';
        const root = document.documentElement;
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = theme === 'dark' || (theme === 'system' && prefersDark);

        if (isDark) {
            root.setAttribute('data-theme', 'dark');
            root.classList.add('dark');
        } else {
            root.setAttribute('data-theme', 'light');
            root.classList.remove('dark');
        }

        // Theme toggle icon update
        const themeIcon = document.getElementById('theme-toggle-icon');
        if (themeIcon) {
            themeIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    function showToast(message, type = "success") {
        const container = document.getElementById('toast-container');
        const icon = document.getElementById('toast-icon');
        const text = document.getElementById('toast-message');
        if (!container || !text) return;

        text.textContent = message;

        if (type === 'warning' || type === 'danger') {
            icon.className = 'fas fa-exclamation-triangle text-amber-500 text-lg';
        } else if (type === 'error') {
            icon.className = 'fas fa-times-circle text-rose-500 text-lg';
        } else {
            icon.className = 'fas fa-check-circle text-emerald-500 text-lg';
        }

        container.classList.remove('hidden');
        clearTimeout(container._hideTimeout);
        container._hideTimeout = setTimeout(() => {
            container.classList.add('hidden');
        }, 3200);
    }

    function navigateTo(viewId) {
        if (window.TEP.audio) window.TEP.audio.tap();
        const existingIdx = viewHistory.indexOf(viewId);
        if (existingIdx !== -1) {
            viewHistory = viewHistory.slice(0, existingIdx + 1);
        } else {
            viewHistory.push(viewId);
        }
        showView(viewId);
        if (viewId === 'view-lobby') {
            renderDashboard();
        }
    }

    function goBack() {
        if (window.TEP.audio) window.TEP.audio.tap();
        if (viewHistory.length > 1) {
            viewHistory.pop();
            const prevView = viewHistory[viewHistory.length - 1];
            showView(prevView);
            if (prevView === 'view-lobby') {
                renderDashboard();
            }
        } else {
            navigateTo('view-lobby');
        }
    }

    function showView(viewId) {
        const viewList = [
            'view-lobby',
            'view-flashcard-menu',
            'view-flashcards',
            'view-practice-menu',
            'view-quiz',
            'view-cloze',
            'view-reading',
            'view-quiz-summary',
            'view-coming-soon'
        ];

        viewList.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            if (id === viewId) {
                el.classList.remove('hidden');
                el.setAttribute('aria-hidden', 'false');
                const heading = el.querySelector('h1, h2, h3, .section-heading');
                if (heading) {
                    heading.setAttribute('tabindex', '-1');
                    heading.focus({ preventScroll: true });
                }
            } else {
                el.classList.add('hidden');
                el.setAttribute('aria-hidden', 'true');
            }
        });
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    function initCountdown() {
        if (countdownInterval) clearInterval(countdownInterval);
        const examDate = new Date('2026-10-03T09:00:00').getTime();

        function update() {
            const now = new Date().getTime();
            const diff = examDate - now;
            if (diff < 0) {
                clearInterval(countdownInterval);
                return;
            }
            const days = Math.floor(diff / 86400000);
            const hours = Math.floor((diff % 86400000) / 3600000);
            const mins = Math.floor((diff % 3600000) / 60000);

            const daysPill = document.getElementById('header-countdown-pill');
            if (daysPill) {
                daysPill.innerHTML = `<i class="fas fa-calendar-alt text-amber-500 mr-1.5"></i> <span>อีก ${days} วัน (${days}d ${hours}h)</span>`;
            }
        }

        update();
        countdownInterval = setInterval(update, 1000);
    }

    function renderDashboard() {
        applyI18n();

        const stateData = window.TEP.state.data;
        const currentPIN = window.TEP.state.currentPIN || "STUDENT";
        const flashcards = window.TEP.flashcardsData || [];
        const totalCards = flashcards.length; // 48

        // Update profile displays
        const pinDisplays = document.querySelectorAll('.user-pin-label');
        pinDisplays.forEach(el => el.textContent = currentPIN);

        let mastered = 0, learning = 0, unsure = 0;
        flashcards.forEach(card => {
            const status = stateData.cardProgress[card.id];
            if (status === 'mastered') mastered++;
            else if (status === 'learning') learning++;
            else if (status === 'unsure') unsure++;
        });

        const unattempted = totalCards - (mastered + learning + unsure);
        const flashPercentage = totalCards > 0 ? Math.round((mastered / totalCards) * 100) : 0;

        // Quiz score calculations
        const maxGrammar = 20;
        const maxError = 15;
        const maxCloze = 15;
        const maxReading = 40;
        const totalQuizQuestions = maxGrammar + maxError + maxCloze + maxReading; // 90
        const maxMockScore = 90;

        const scores = stateData.quizScores || {};
        const userGrammar = scores.grammar || 0;
        const userError = scores.error || 0;
        const userCloze = scores.cloze || 0;
        const userReading = scores.reading || 0;
        const totalUserQuiz = userGrammar + userError + userCloze + userReading;
        const userMock = scores.mock || 0;

        const quizPercentage = Math.round((totalUserQuiz / totalQuizQuestions) * 100);
        const mockPercentage = Math.round((userMock / maxMockScore) * 100);

        // Overall Weighted Completion
        const grandTotal = totalCards + totalQuizQuestions + maxMockScore;
        const userEarned = mastered + totalUserQuiz + userMock;
        const overallPercentage = Math.min(100, Math.round((userEarned / grandTotal) * 100));

        // Update DOM stats
        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
        };

        setVal('stat-mastered', mastered);
        setVal('stat-learning', learning);
        setVal('stat-unsure', unsure);
        setVal('stat-unattempted', unattempted);

        setVal('progress-percentage', `${overallPercentage}%`);
        setVal('prog-txt-flashcard', `${flashPercentage}%`);
        setVal('prog-txt-training', `${quizPercentage}%`);
        setVal('prog-txt-mock', `${mockPercentage}%`);

        // Greeting
        const hour = new Date().getHours();
        const greeting = hour >= 5 && hour < 12
            ? t('greeting_morning')
            : hour >= 12 && hour < 17
                ? t('greeting_afternoon')
                : t('greeting_evening');
        setVal('greeting-text', `${greeting} ${currentPIN}`);

        // Animate mini bars
        setTimeout(() => {
            const barFlash = document.getElementById('prog-bar-flashcard');
            const barTrain = document.getElementById('prog-bar-training');
            const barMock = document.getElementById('prog-bar-mock');
            const barOverall = document.getElementById('prog-bar-overall');
            if (barFlash) barFlash.style.width = `${flashPercentage}%`;
            if (barTrain) barTrain.style.width = `${quizPercentage}%`;
            if (barMock) barMock.style.width = `${mockPercentage}%`;
            if (barOverall) barOverall.style.width = `${overallPercentage}%`;
        }, 80);

        // Circular ring
        const ring = document.getElementById('progress-ring-circle');
        if (ring) {
            ring.style.transition = 'none';
            ring.setAttribute('stroke-dashoffset', '100');
            ring.getBoundingClientRect();
            requestAnimationFrame(() => {
                ring.style.transition = 'stroke-dashoffset 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
                ring.setAttribute('stroke-dashoffset', (100 - overallPercentage).toString());
                ring.style.stroke = overallPercentage >= 90 ? 'var(--emerald)' : 'var(--accent)';
            });
        }

        // Dynamic continue button
        const btnContinue = document.getElementById('btn-continue-learning');
        if (btnContinue) {
            if (Object.keys(stateData.cardProgress).length === 0 && stateData.currentCardIndex === 0) {
                btnContinue.innerHTML = `<span>${t('btn_start_flashcard')}</span> <i class="fas fa-arrow-right text-xs ml-1.5"></i>`;
                btnContinue.onclick = () => window.TEP.ui.navigateTo('view-flashcard-menu');
            } else {
                const currentCard = flashcards[stateData.currentCardIndex];
                const cat = (currentCard && currentCard.category) || 'grammar';
                const catNames = {
                    'grammar': t('fc_gram_title'),
                    'error': t('fc_err_title'),
                    'reading_tactics': t('fc_read_tac_title'),
                    'reading_facts': t('fc_read_fact_title')
                };
                const catName = catNames[cat] || 'Flashcards';
                btnContinue.innerHTML = `<span>${t('btn_resume_flashcard')} (${catName})</span> <i class="fas fa-redo-alt text-xs ml-1.5"></i>`;
                btnContinue.onclick = () => window.TEP.flashcards.resume();
            }
        }
    }

    return {
        t,
        applyI18n,
        applyTheme,
        showToast,
        navigateTo,
        goBack,
        showView,
        initCountdown,
        renderDashboard
    };
})();
