/**
 * ENGLISH TEP Master - 3D Flashcards Engine
 * Spaced Repetition, 3D flip card, swipe gestures, keyboard shortcuts
 */
window.TEP = window.TEP || {};

window.TEP.flashcards = (function () {
    let currentCategory = 'grammar';
    let categoryIndices = [];
    let activeQueue = [];
    let queuePointer = 0;
    let isFlipped = false;
    let isTransitioning = false;
    let _isSwiping = false;

    function shuffle(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function setupCategory(cat) {
        currentCategory = cat;
        categoryIndices = [];
        const allCards = window.TEP.flashcardsData || [];
        allCards.forEach((card, index) => {
            if (card.category === cat) {
                categoryIndices.push(index);
            }
        });
    }

    function start(category) {
        setupCategory(category);
        const stateData = window.TEP.state.data;
        const allCards = window.TEP.flashcardsData || [];

        // Prioritize non-mastered cards
        activeQueue = categoryIndices.filter(i => stateData.cardProgress[allCards[i].id] !== 'mastered');
        if (activeQueue.length === 0) {
            activeQueue = [...categoryIndices];
        }

        activeQueue = shuffle(activeQueue);
        queuePointer = 0;

        stateData.currentCardIndex = activeQueue[queuePointer];
        window.TEP.state.saveState();

        window.TEP.ui.navigateTo('view-flashcards');
        ensureFrontAndLoad(stateData.currentCardIndex);
    }

    function resume() {
        const stateData = window.TEP.state.data;
        const allCards = window.TEP.flashcardsData || [];
        const currentCard = allCards[stateData.currentCardIndex];
        const cat = (currentCard && currentCard.category) || 'grammar';

        setupCategory(cat);

        activeQueue = categoryIndices.filter(i => stateData.cardProgress[allCards[i].id] !== 'mastered');
        if (activeQueue.length === 0) {
            activeQueue = [...categoryIndices];
        }

        activeQueue = shuffle(activeQueue);
        const pos = activeQueue.indexOf(stateData.currentCardIndex);
        if (pos !== -1) {
            [activeQueue[0], activeQueue[pos]] = [activeQueue[pos], activeQueue[0]];
        } else {
            stateData.currentCardIndex = activeQueue[0];
        }

        queuePointer = 0;
        window.TEP.ui.navigateTo('view-flashcards');
        ensureFrontAndLoad(stateData.currentCardIndex);
    }

    function ensureFrontAndLoad(cardIndex) {
        if (isTransitioning) return;
        const innerCard = document.getElementById('flashcard-inner');
        if (isFlipped && innerCard) {
            isTransitioning = true;
            isFlipped = false;
            innerCard.classList.remove('is-flipped');
            setTimeout(() => {
                populateCard(cardIndex);
                isTransitioning = false;
            }, 300);
        } else {
            populateCard(cardIndex);
        }
    }

    function populateCard(cardIndex) {
        const allCards = window.TEP.flashcardsData || [];
        if (cardIndex < 0 || cardIndex >= allCards.length) {
            cardIndex = 0;
        }
        const card = allCards[cardIndex];
        if (!card) return;

        const renderWithLineBreaks = (elId, text) => {
            const el = document.getElementById(elId);
            if (!el) return;
            el.textContent = '';
            text.split('\n').forEach((line, idx, arr) => {
                el.appendChild(document.createTextNode(line));
                if (idx < arr.length - 1) el.appendChild(document.createElement('br'));
            });
        };

        renderWithLineBreaks('card-front-text', card.front);
        renderWithLineBreaks('card-back-text', card.back);

        const hintEl = document.getElementById('card-hint-text');
        if (hintEl) hintEl.textContent = card.hint || '-';

        const currEl = document.getElementById('current-card-num');
        const totEl = document.getElementById('total-cards');
        if (currEl) currEl.textContent = queuePointer + 1;
        if (totEl) totEl.textContent = activeQueue.length;

        // Title
        const catNames = {
            'grammar': window.TEP.ui.t('fc_gram_title'),
            'error': window.TEP.ui.t('fc_err_title'),
            'reading_tactics': window.TEP.ui.t('fc_read_tac_title'),
            'reading_facts': window.TEP.ui.t('fc_read_fact_title')
        };
        const titleEl = document.getElementById('flashcard-category-title');
        if (titleEl) titleEl.textContent = catNames[currentCategory] || 'Flashcards';

        updateNavUI();
        updateRatingUI();
        updateCategoryProgress();
    }

    function flip() {
        if (_isSwiping || isTransitioning) return;
        isTransitioning = true;
        isFlipped = !isFlipped;
        const innerCard = document.getElementById('flashcard-inner');
        if (innerCard) {
            if (isFlipped) {
                innerCard.classList.add('is-flipped');
            } else {
                innerCard.classList.remove('is-flipped');
            }
        }
        if (window.TEP.audio) window.TEP.audio.flip();
        setTimeout(() => { isTransitioning = false; }, 400);
    }

    function setRating(status) {
        if (!['unsure', 'learning', 'mastered'].includes(status)) return;
        const allCards = window.TEP.flashcardsData || [];
        const stateData = window.TEP.state.data;
        const currentCard = allCards[stateData.currentCardIndex];
        if (!currentCard) return;

        stateData.cardProgress[currentCard.id] = status;
        window.TEP.state.saveState();

        if (window.TEP.audio) {
            if (status === 'mastered') window.TEP.audio.correct();
            else if (status === 'learning') window.TEP.audio.tap();
            else window.TEP.audio.incorrect();
        }

        updateRatingUI();
        updateCategoryProgress();

        // Auto advance after rating
        setTimeout(() => {
            if (status === 'mastered') {
                activeQueue.splice(queuePointer, 1);
                if (activeQueue.length === 0) {
                    if (window.TEP.audio) window.TEP.audio.complete();
                    window.TEP.ui.showToast(window.TEP.ui.t('fc_learned') + " 100%! 🎉", "success");
                    setTimeout(() => window.TEP.ui.goBack(), 1200);
                    return;
                }
                if (queuePointer >= activeQueue.length) {
                    queuePointer = 0;
                    activeQueue = shuffle(activeQueue);
                }
            } else {
                queuePointer++;
                if (queuePointer >= activeQueue.length) {
                    queuePointer = 0;
                    activeQueue = shuffle(activeQueue);
                }
            }

            stateData.currentCardIndex = activeQueue[queuePointer];
            window.TEP.state.saveState();
            ensureFrontAndLoad(stateData.currentCardIndex);
        }, 250);
    }

    function next() {
        if (isTransitioning || activeQueue.length === 0) return;
        queuePointer++;
        if (queuePointer >= activeQueue.length) {
            queuePointer = 0;
            activeQueue = shuffle(activeQueue);
        }
        const stateData = window.TEP.state.data;
        stateData.currentCardIndex = activeQueue[queuePointer];
        window.TEP.state.saveState();
        if (window.TEP.audio) window.TEP.audio.tap();
        ensureFrontAndLoad(stateData.currentCardIndex);
    }

    function prev() {
        if (isTransitioning || activeQueue.length === 0) return;
        queuePointer--;
        if (queuePointer < 0) {
            queuePointer = activeQueue.length - 1;
        }
        const stateData = window.TEP.state.data;
        stateData.currentCardIndex = activeQueue[queuePointer];
        window.TEP.state.saveState();
        if (window.TEP.audio) window.TEP.audio.tap();
        ensureFrontAndLoad(stateData.currentCardIndex);
    }

    function updateNavUI() {
        const isSingle = activeQueue.length <= 1;
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        if (prevBtn) prevBtn.disabled = isSingle;
        if (nextBtn) nextBtn.disabled = isSingle;
    }

    function updateRatingUI() {
        const allCards = window.TEP.flashcardsData || [];
        const stateData = window.TEP.state.data;
        const currentCard = allCards[stateData.currentCardIndex];
        const status = (currentCard && stateData.cardProgress[currentCard.id]) || null;

        ['unsure', 'learning', 'mastered'].forEach(s => {
            const btn = document.getElementById(`btn-${s}`);
            if (btn) {
                btn.setAttribute('aria-pressed', status === s ? 'true' : 'false');
                btn.classList.remove('ring-2', 'ring-offset-2', 'ring-rose-500', 'ring-amber-500', 'ring-emerald-500', 'bg-rose-50', 'bg-amber-50', 'bg-emerald-50', 'dark:bg-rose-950/40', 'dark:bg-amber-950/40', 'dark:bg-emerald-950/40');
                if (status === s) {
                    if (s === 'unsure') btn.classList.add('ring-2', 'ring-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-600', 'dark:text-rose-400');
                    if (s === 'learning') btn.classList.add('ring-2', 'ring-amber-500', 'bg-amber-50', 'dark:bg-amber-950/40', 'text-amber-600', 'dark:text-amber-400');
                    if (s === 'mastered') btn.classList.add('ring-2', 'ring-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-600', 'dark:text-emerald-400');
                }
            }
        });
    }

    function updateCategoryProgress() {
        const allCards = window.TEP.flashcardsData || [];
        const stateData = window.TEP.state.data;
        const masteredCount = categoryIndices.filter(i => stateData.cardProgress[allCards[i].id] === 'mastered').length;
        const totalInCat = categoryIndices.length;
        const percent = totalInCat > 0 ? Math.round((masteredCount / totalInCat) * 100) : 0;

        const progressBar = document.getElementById('progress-bar');
        const countEl = document.getElementById('learned-count');
        if (progressBar) progressBar.style.width = `${percent}%`;
        if (countEl) countEl.textContent = `${masteredCount}/${totalInCat}`;
    }

    function resetCategoryProgress() {
        const allCards = window.TEP.flashcardsData || [];
        const stateData = window.TEP.state.data;
        categoryIndices.forEach(i => {
            delete stateData.cardProgress[allCards[i].id];
        });
        window.TEP.state.saveState();
        start(currentCategory);
        window.TEP.ui.showToast(window.TEP.ui.t('fc_learned') + ": 0", "info");
    }

    function initGestures() {
        const container = document.getElementById('flashcard-container');
        if (!container) return;

        let startX = 0, startY = 0;

        container.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].screenX;
            startY = e.changedTouches[0].screenY;
            _isSwiping = false;
        }, { passive: true });

        container.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].screenX;
            const endY = e.changedTouches[0].screenY;
            const dx = endX - startX;
            const dy = endY - startY;

            if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) {
                _isSwiping = true;
                if (dx > 0) prev();
                else next();
                setTimeout(() => { _isSwiping = false; }, 100);
            }
        }, { passive: true });
    }

    return {
        start,
        resume,
        flip,
        next,
        prev,
        setRating,
        resetCategoryProgress,
        initGestures
    };
})();
