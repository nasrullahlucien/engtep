/**
 * ENGLISH TEP Master - State & Persistence Module
 * Multi-profile, LocalStorage offline engine, schema v3 migration, import/export
 */
window.TEP = window.TEP || {};

window.TEP.state = (function () {
    const SCHEMA_VERSION = 3;
    const STORAGE_PREFIX = 'yru-tep-state-';
    const ACTIVE_PROFILE_KEY = 'yru-tep-active-profile';

    let currentPIN = null;
    let appState = {
        schemaVersion: SCHEMA_VERSION,
        currentCardIndex: 0,
        cardProgress: {},
        quizScores: { grammar: 0, error: 0, cloze: 0, reading: 0, mock: 0 },
        theme: 'system',
        lang: 'th',
        sound: true,
        updatedAt: null
    };

    function listProfiles() {
        const profiles = [];
        try {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(STORAGE_PREFIX)) {
                    profiles.push(key.replace(STORAGE_PREFIX, ''));
                }
            }
        } catch (e) {
            console.warn('LocalStorage access warning:', e);
        }
        return profiles.sort();
    }

    function migrateV2toV3(oldData) {
        const flashcards = window.TEP.flashcardsData || [];
        const newData = {
            ...oldData,
            schemaVersion: SCHEMA_VERSION,
            cardProgress: {},
            quizScores: oldData.quizScores || { grammar: 0, error: 0, cloze: 0, reading: 0, mock: 0 },
            sound: oldData.sound !== undefined ? oldData.sound : true
        };
        if (oldData.cardProgress && typeof oldData.cardProgress === 'object') {
            Object.keys(oldData.cardProgress).forEach(key => {
                const k = parseInt(key, 10);
                if (!isNaN(k) && k >= 0 && k < flashcards.length) {
                    const card = flashcards[k];
                    if (card && card.id) {
                        newData.cardProgress[card.id] = oldData.cardProgress[key];
                    }
                }
            });
        }
        return newData;
    }

    function initProfile() {
        let pin = null;
        try {
            pin = localStorage.getItem(ACTIVE_PROFILE_KEY);
        } catch (e) {}

        if (!pin) {
            const existing = listProfiles();
            if (existing.length > 0) {
                pin = existing[0];
            } else {
                pin = "STUDENT";
            }
        }
        return loadProfile(pin);
    }

    function loadProfile(pin) {
        if (!pin) pin = "STUDENT";
        currentPIN = pin.trim().toUpperCase().substring(0, 20);
        try {
            localStorage.setItem(ACTIVE_PROFILE_KEY, currentPIN);
        } catch (e) {}

        const storageKey = STORAGE_PREFIX + currentPIN;
        let loaded = null;

        try {
            const raw = localStorage.getItem(storageKey);
            if (raw) loaded = JSON.parse(raw);
        } catch (e) {
            console.warn('Error reading localStorage for pin ' + currentPIN, e);
        }

        const flashcards = window.TEP.flashcardsData || [];

        if (loaded) {
            if (loaded.schemaVersion === 2) {
                loaded = migrateV2toV3(loaded);
                saveState(loaded);
            }

            appState.currentCardIndex = typeof loaded.currentCardIndex === 'number' ? loaded.currentCardIndex : 0;
            if (appState.currentCardIndex < 0 || appState.currentCardIndex >= flashcards.length) {
                appState.currentCardIndex = 0;
            }

            appState.theme = ['light', 'dark', 'system'].includes(loaded.theme) ? loaded.theme : 'system';
            appState.lang = ['th', 'en'].includes(loaded.lang) ? loaded.lang : 'th';
            appState.sound = loaded.sound !== undefined ? loaded.sound : true;
            appState.cardProgress = {};

            if (loaded.cardProgress && typeof loaded.cardProgress === 'object') {
                Object.keys(loaded.cardProgress).forEach(id => {
                    if (flashcards.some(c => c.id === id) && ['unsure', 'learning', 'mastered'].includes(loaded.cardProgress[id])) {
                        appState.cardProgress[id] = loaded.cardProgress[id];
                    }
                });
            }

            appState.quizScores = loaded.quizScores || { grammar: 0, error: 0, cloze: 0, reading: 0, mock: 0 };
            if (appState.quizScores.mock === undefined) appState.quizScores.mock = 0;
        } else {
            appState = {
                schemaVersion: SCHEMA_VERSION,
                currentCardIndex: 0,
                cardProgress: {},
                quizScores: { grammar: 0, error: 0, cloze: 0, reading: 0, mock: 0 },
                theme: 'system',
                lang: 'th',
                sound: true,
                updatedAt: Date.now()
            };
            saveState();
        }

        if (window.TEP.audio) {
            window.TEP.audio.setSound(appState.sound);
        }

        return appState;
    }

    function saveState(customState) {
        if (!currentPIN) return;
        const toSave = customState || appState;
        toSave.updatedAt = Date.now();
        try {
            localStorage.setItem(STORAGE_PREFIX + currentPIN, JSON.stringify(toSave));
        } catch (e) {
            console.error('Failed to save state to localStorage:', e);
        }
    }

    function deleteProfile(pin) {
        if (!pin) return;
        try {
            localStorage.removeItem(STORAGE_PREFIX + pin.toUpperCase());
            if (currentPIN === pin.toUpperCase()) {
                const profiles = listProfiles();
                currentPIN = profiles.length > 0 ? profiles[0] : "STUDENT";
                try { localStorage.setItem(ACTIVE_PROFILE_KEY, currentPIN); } catch (e) {}
                loadProfile(currentPIN);
            }
        } catch (e) {
            console.error('Error removing profile:', e);
        }
    }

    function resetCurrentProfile() {
        if (!currentPIN) return;
        appState = {
            schemaVersion: SCHEMA_VERSION,
            currentCardIndex: 0,
            cardProgress: {},
            quizScores: { grammar: 0, error: 0, cloze: 0, reading: 0, mock: 0 },
            theme: appState.theme,
            lang: appState.lang,
            sound: appState.sound,
            updatedAt: Date.now()
        };
        saveState();
        return appState;
    }

    function exportBackup() {
        if (!currentPIN) return;
        const backupData = {
            appName: "ENGLISH TEP Master",
            profileId: currentPIN,
            schemaVersion: SCHEMA_VERSION,
            exportedAt: new Date().toISOString(),
            appState: appState
        };
        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const dateStr = new Date().toISOString().split('T')[0];
        a.href = url;
        a.download = `TEP-Master-Backup-${currentPIN}-${dateStr}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function parseImportFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                try {
                    const parsed = JSON.parse(e.target.result);
                    if (!parsed.appState || parsed.schemaVersion === undefined) {
                        reject(new Error("Invalid backup JSON format"));
                        return;
                    }
                    resolve(parsed);
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = () => reject(new Error("File read error"));
            reader.readAsText(file);
        });
    }

    function restoreBackup(backupObject) {
        if (!currentPIN || !backupObject || !backupObject.appState) return false;
        let loaded = backupObject.appState;
        if (loaded.schemaVersion === 2) {
            loaded = migrateV2toV3(loaded);
        }
        if (!loaded.quizScores) {
            loaded.quizScores = { grammar: 0, error: 0, cloze: 0, reading: 0, mock: 0 };
        }
        appState = loaded;
        saveState();
        return true;
    }

    return {
        get currentPIN() { return currentPIN; },
        get data() { return appState; },
        initProfile,
        listProfiles,
        loadProfile,
        saveState,
        deleteProfile,
        resetCurrentProfile,
        exportBackup,
        parseImportFile,
        restoreBackup
    };
})();
