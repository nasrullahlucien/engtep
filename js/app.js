/**
 * ENGLISH TEP Master - Main Application Bootstrapper
 */
window.TEP = window.TEP || {};

(function () {
    let pendingImportData = null;
    let profileToDelete = null;

    function init() {
        renderProfileSelect();
        window.TEP.ui.initCountdown();
        window.TEP.flashcards.initGestures();
        setupGlobalEvents();

        // Check if there are existing profiles to auto-suggest
        const profiles = window.TEP.state.listProfiles();
        if (profiles.length > 0) {
            const selectEl = document.getElementById('auth-profile-select');
            if (selectEl) selectEl.value = profiles[0];
        }
    }

    function renderProfileSelect() {
        const profiles = window.TEP.state.listProfiles();
        const container = document.getElementById('profile-selection-container');
        const select = document.getElementById('auth-profile-select');

        if (!container || !select) return;

        if (profiles.length > 0) {
            container.classList.remove('hidden');
            select.innerHTML = profiles.map(p => `<option value="${p}">${p}</option>`).join('');
        } else {
            container.classList.add('hidden');
        }
    }

    function handleLogin(e) {
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

        const btnEl = document.getElementById('auth-submit-btn');
        if (btnEl) {
            btnEl.disabled = true;
            btnEl.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Loading...';
        }

        setTimeout(() => {
            try {
                window.TEP.state.loadProfile(rawPIN);

                // Update UI PIN displays
                const headerPin = document.getElementById('header-pin-display');
                const resetPin = document.getElementById('reset-pin-display');
                if (headerPin) headerPin.textContent = rawPIN;
                if (resetPin) resetPin.textContent = rawPIN;

                // Close login modal & reveal app
                const authModal = document.getElementById('auth-modal');
                const mainApp = document.getElementById('main-app-container');
                if (authModal) authModal.classList.add('hidden');
                if (mainApp) mainApp.classList.remove('hidden');

                window.TEP.ui.applyTheme();
                window.TEP.ui.renderDashboard();
                window.TEP.ui.showToast(`ยินดีต้อนรับ ${rawPIN}`, "success");
                if (window.TEP.audio) window.TEP.audio.complete();

            } catch (err) {
                console.error("Login initialization error:", err);
                alert("Error loading profile: " + err.message);
            } finally {
                if (btnEl) {
                    btnEl.disabled = false;
                    btnEl.innerHTML = `<span>${window.TEP.ui.t('auth_btn')}</span> <i class="fas fa-arrow-right ml-2 text-sm"></i>`;
                }
            }
        }, 120);
    }

    function setupGlobalEvents() {
        // Form submit
        const authForm = document.getElementById('auth-form');
        if (authForm) {
            authForm.addEventListener('submit', handleLogin);
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
        ['delete-profile-modal', 'reset-modal', 'import-modal', 'abort-mock-modal', 'cloze-modal'].forEach(id => {
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
        const btn = document.getElementById('sound-toggle-btn');
        if (btn) {
            btn.innerHTML = enabled ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
            btn.setAttribute('title', enabled ? window.TEP.ui.t('sound_on') : window.TEP.ui.t('sound_off'));
        }
        window.TEP.ui.showToast(enabled ? window.TEP.ui.t('sound_on') : window.TEP.ui.t('sound_off'), "info");
    }

    function setTheme(theme) {
        if (!['light', 'dark', 'system'].includes(theme)) return;
        window.TEP.state.data.theme = theme;
        window.TEP.state.saveState();
        window.TEP.ui.applyTheme();
    }

    // Expose helpers to window.TEP
    window.TEP.app = {
        init,
        handleLogin,
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
        setTheme
    };

    window.addEventListener('DOMContentLoaded', init);
})();
