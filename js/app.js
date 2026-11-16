/**
 * ENGLISH TEP Master - Main Application Bootstrapper (Bespoke Redesign)
 */
window.TEP = window.TEP || {};

(function () {
    let pendingImportData = null;
    let profileToDelete = null;

    function init() {
        // Initialize profile automatically without blocking user
        window.TEP.state.initProfile();

        renderProfileSelect();
        window.TEP.ui.initCountdown();
        window.TEP.flashcards.initGestures();
        setupGlobalEvents();

        window.TEP.ui.applyTheme();
        window.TEP.ui.renderDashboard();
    }

    function renderProfileSelect() {
        const profiles = window.TEP.state.listProfiles();
        const container = document.getElementById('profile-selection-container');
        const select = document.getElementById('auth-profile-select');
        const currentPIN = window.TEP.state.currentPIN;

        if (!container || !select) return;

        if (profiles.length > 0) {
            container.classList.remove('hidden');
            select.innerHTML = profiles.map(p => `<option value="${p}" ${p === currentPIN ? 'selected' : ''}>${p}</option>`).join('');
        } else {
            container.classList.add('hidden');
        }
    }

    function openProfileModal() {
        renderProfileSelect();
        const m = document.getElementById('auth-modal');
        if (m) m.classList.remove('hidden');
    }

    function closeProfileModal() {
        const m = document.getElementById('auth-modal');
        if (m) m.classList.add('hidden');
    }

    function handleProfileSwitchOrAdd(e) {
        if (e) e.preventDefault();

        const inputEl = document.getElementById('auth-pin-input');
        const selectEl = document.getElementById('auth-profile-select');
        const container = document.getElementById('profile-selection-container');

        let rawPIN = inputEl ? inputEl.value.trim() : '';
        if (!rawPIN && container && !container.classList.contains('hidden') && selectEl && selectEl.value) {
            rawPIN = selectEl.value;
        }

        if (!rawPIN) {
            window.TEP.ui.showToast("กรุณาระบุชื่อโปรไฟล์หรือเลือกจากรายการ", "warning");
            if (inputEl) inputEl.focus();
            return;
        }

        rawPIN = rawPIN.substring(0, 20).toUpperCase();

        try {
            window.TEP.state.loadProfile(rawPIN);
            closeProfileModal();
            window.TEP.ui.renderDashboard();
            window.TEP.ui.showToast(`สลับโปรไฟล์เป็น ${rawPIN} แล้ว`, "success");
            if (window.TEP.audio) window.TEP.audio.complete();
            if (inputEl) inputEl.value = '';
        } catch (err) {
            console.error("Profile error:", err);
            alert("Error loading profile: " + err.message);
        }
    }

    function setupGlobalEvents() {
        // Form submit
        const authForm = document.getElementById('auth-form');
        if (authForm) {
            authForm.addEventListener('submit', handleProfileSwitchOrAdd);
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const activeEl = document.activeElement;
            const isTyping = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable);
            if (isTyping) return;

            // Escape to close modals
            if (e.key === 'Escape') {
                closeAllModals();
                return;
            }

            const flashcardsView = document.getElementById('view-flashcards');
            if (flashcardsView && !flashcardsView.classList.contains('hidden')) {
                if (e.code === 'Space' || e.key === 'Enter') {
                    e.preventDefault();
                    window.TEP.flashcards.flip();
                } else if (e.key === 'ArrowLeft') {
                    window.TEP.flashcards.prev();
                } else if (e.key === 'ArrowRight') {
                    window.TEP.flashcards.next();
                } else if (e.key === '1' || e.code === 'Numpad1') {
                    window.TEP.flashcards.setRating('unsure');
                } else if (e.key === '2' || e.code === 'Numpad2') {
                    window.TEP.flashcards.setRating('learning');
                } else if (e.key === '3' || e.code === 'Numpad3') {
                    window.TEP.flashcards.setRating('mastered');
                }
            }
        });
    }

    function closeAllModals() {
        ['auth-modal', 'delete-profile-modal', 'reset-modal', 'import-modal', 'abort-mock-modal', 'cloze-modal'].forEach(id => {
            const m = document.getElementById(id);
            if (m) m.classList.add('hidden');
        });
    }

    // Modal helpers
    function openDeleteProfileModal() {
        const select = document.getElementById('auth-profile-select');
        if (!select || !select.value) return;
        profileToDelete = select.value;
        const nameEl = document.getElementById('delete-profile-name');
        if (nameEl) nameEl.textContent = profileToDelete;
        const m = document.getElementById('delete-profile-modal');
        if (m) m.classList.remove('hidden');
    }

    function closeDeleteProfileModal() {
        profileToDelete = null;
        const m = document.getElementById('delete-profile-modal');
        if (m) m.classList.add('hidden');
    }

    function confirmDeleteProfile() {
        if (profileToDelete) {
            window.TEP.state.deleteProfile(profileToDelete);
            renderProfileSelect();
            window.TEP.ui.renderDashboard();
            window.TEP.ui.showToast(`ลบโปรไฟล์ ${profileToDelete} สำเร็จ`, "info");
        }
        closeDeleteProfileModal();
    }

    function openResetModal() {
        const m = document.getElementById('reset-modal');
        if (m) m.classList.remove('hidden');
    }

    function closeResetModal() {
        const m = document.getElementById('reset-modal');
        if (m) m.classList.add('hidden');
    }

    function confirmReset() {
        window.TEP.state.resetCurrentProfile();
        closeResetModal();
        window.TEP.ui.renderDashboard();
        window.TEP.ui.showToast("ล้างสถิติเริ่มต้นใหม่เรียบร้อย", "info");
        const flashcardView = document.getElementById('view-flashcards');
        if (flashcardView && !flashcardView.classList.contains('hidden')) {
            window.TEP.flashcards.start('grammar');
        }
    }

    function handleImportFile(event) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        window.TEP.state.parseImportFile(file).then(data => {
            pendingImportData = data;
            const nameEl = document.getElementById('import-profile-name');
            if (nameEl) nameEl.textContent = data.profileId || "Unknown";
            const m = document.getElementById('import-modal');
            if (m) m.classList.remove('hidden');
        }).catch(err => {
            window.TEP.ui.showToast("ไฟล์ข้อมูลไม่ถูกต้อง: " + err.message, "error");
        });

        event.target.value = '';
    }

    function closeImportModal() {
        pendingImportData = null;
        const m = document.getElementById('import-modal');
        if (m) m.classList.add('hidden');
    }

    function confirmImport() {
        if (!pendingImportData) return;
        const success = window.TEP.state.restoreBackup(pendingImportData);
        if (success) {
            closeImportModal();
            window.TEP.ui.renderDashboard();
            window.TEP.ui.showToast("กู้คืนข้อมูลสำเร็จ 🎉", "success");
        } else {
            window.TEP.ui.showToast("ไม่สามารถกู้คืนข้อมูลได้", "error");
        }
    }

    function toggleLanguage() {
        const current = window.TEP.state.data.lang;
        window.TEP.state.data.lang = current === 'en' ? 'th' : 'en';
        window.TEP.state.saveState();
        window.TEP.ui.renderDashboard();
    }

    function toggleSound() {
        const enabled = window.TEP.audio.toggleSound();
        window.TEP.state.data.sound = enabled;
        window.TEP.state.saveState();
        window.TEP.ui.applyI18n();
        window.TEP.ui.showToast(enabled ? window.TEP.ui.t('sound_on') : window.TEP.ui.t('sound_off'), "info");
    }

    function toggleTheme() {
        const current = window.TEP.state.data.theme;
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = current === 'dark' || (current === 'system' && prefersDark);
        const next = isDark ? 'light' : 'dark';
        window.TEP.state.data.theme = next;
        window.TEP.state.saveState();
        window.TEP.ui.applyTheme();
    }

    // Expose helpers to window.TEP
    window.TEP.app = {
        init,
        openProfileModal,
        closeProfileModal,
        handleProfileSwitchOrAdd,
        openDeleteProfileModal,
        closeDeleteProfileModal,
        confirmDeleteProfile,
        openResetModal,
        closeResetModal,
        confirmReset,
        handleImportFile,
        closeImportModal,
        confirmImport,
        toggleLanguage,
        toggleSound,
        toggleTheme
    };

    window.addEventListener('DOMContentLoaded', init);
})();
