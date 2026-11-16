/**
 * ENGLISH TEP Master - Synthesized Web Audio & Haptics
 * 100% Offline, no external mp3 files required.
 */
window.TEP = window.TEP || {};

window.TEP.audio = (function () {
    let audioCtx = null;
    let isSoundEnabled = true;

    function getContext() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                audioCtx = new AudioContext();
            }
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    function playTone(freq, type, duration, startTime = 0, gainVal = 0.1) {
        if (!isSoundEnabled) return;
        try {
            const ctx = getContext();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

            gain.gain.setValueAtTime(gainVal, ctx.currentTime + startTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + startTime + duration);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + startTime);
            osc.stop(ctx.currentTime + startTime + duration);
        } catch (e) {
            // Audio context might be restricted before user gesture
        }
    }

    return {
        isEnabled() {
            return isSoundEnabled;
        },
        toggleSound() {
            isSoundEnabled = !isSoundEnabled;
            return isSoundEnabled;
        },
        setSound(enabled) {
            isSoundEnabled = !!enabled;
        },
        flip() {
            playTone(420, 'sine', 0.08, 0, 0.08);
            if (navigator.vibrate) navigator.vibrate(10);
        },
        tap() {
            playTone(600, 'triangle', 0.04, 0, 0.04);
        },
        correct() {
            playTone(523.25, 'sine', 0.1, 0, 0.12);       // C5
            playTone(659.25, 'sine', 0.12, 0.08, 0.14);   // E5
            playTone(783.99, 'sine', 0.25, 0.16, 0.16);   // G5
            if (navigator.vibrate) navigator.vibrate([15, 30, 20]);
        },
        incorrect() {
            playTone(280, 'sawtooth', 0.12, 0, 0.09);
            playTone(220, 'sawtooth', 0.2, 0.1, 0.1);
            if (navigator.vibrate) navigator.vibrate([30, 40, 30]);
        },
        complete() {
            // Cheerful mini fanfare
            playTone(523.25, 'sine', 0.12, 0, 0.15);      // C5
            playTone(659.25, 'sine', 0.12, 0.1, 0.15);    // E5
            playTone(783.99, 'sine', 0.12, 0.2, 0.15);    // G5
            playTone(1046.50, 'sine', 0.35, 0.3, 0.2);    // C6
            if (navigator.vibrate) navigator.vibrate([20, 40, 20, 40, 60]);
        }
    };
})();
