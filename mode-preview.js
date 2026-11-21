(() => {
  'use strict';

  const recordings = window.IChingPianoRecordings;
  const roots = Object.keys(recordings).map(Number);
  const decoded = new Map();
  const voices = new Set();
  const pulse = [.29, .27, .34, .26, .29, .31];
  const accents = [.99, .86, .9, 1, .86, .94];
  let context;
  let output;
  let current;

  const copy = {
    zh: {loading:'正在准备钢琴音色…', playing:'正在试听', error:'暂时无法播放，请再点一次。'},
    en: {loading:'Preparing the piano sound…', playing:'Playing', error:'Audio is unavailable. Try the play button again.'}
  };

  function getContext() {
    if (context) return context;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) throw new Error('Web Audio is not available');
    context = new AudioContext();
    output = context.createDynamicsCompressor();
    output.threshold.value = -18;
    output.ratio.value = 2;
    output.connect(context.destination);
    return context;
  }

  function rootFor(note) {
    return roots.reduce((best, root) => Math.abs(root - note) < Math.abs(best - note) ? root : best);
  }

  async function decodeFile(file) {
    return getContext().decodeAudioData(await file.arrayBuffer());
  }

  function sampleFor(root) {
    if (!decoded.has(root)) {
      const bytes = Uint8Array.from(atob(recordings[root]), character => character.charCodeAt(0));
      const promise = context.decodeAudioData(bytes.buffer).catch(error => {
        decoded.delete(root);
        throw error;
      });
      decoded.set(root, promise);
    }
    return decoded.get(root);
  }

  function paint(run, message) {
    if (run.status) run.status.textContent = message;
  }

  function finish(run, reason = 'stopped', message = '') {
    run.timers.forEach(clearTimeout);
    run.button?.setAttribute('aria-pressed', 'false');
    paint(run, message);
    if (current === run) current = null;
    run.onFinish?.(reason);
  }

  function stop(reason = 'stopped', message = '') {
    if (current) finish(current, reason, message);
    if (!context) return;
    const time = context.currentTime;
    for (const {source, gain, start} of voices) {
      if (start > time) {
        source.stop(time);
      } else {
        gain.gain.cancelScheduledValues(time);
        gain.gain.setTargetAtTime(0, time, .015);
        source.stop(time + .09);
      }
    }
    voices.clear();
  }

  async function play(notes, { bits = [], button, status, name = '', sample, onNote, onFinish } = {}) {
    const shouldToggle = button && button === current?.button;
    stop();
    if (shouldToggle || !notes.length) return;
    const run = { button, status, onFinish, timers: [] };
    current = run;
    button?.setAttribute('aria-pressed', 'true');
    document.querySelectorAll('audio').forEach(audio => audio.pause());
    const message = copy[document.documentElement.lang.startsWith('zh') ? 'zh' : 'en'];
    paint(run, message.loading);

    try {
      const audio = getContext();
      let next = 0;
      const events = notes.map((note, index) => {
        const event = typeof note === 'number' ? { midi: note, offset: next, bit: bits[index] } : note;
        next += pulse[index % pulse.length];
        return {...event, root:sample?.midi ?? rootFor(event.midi)};
      });
      const [, samples] = await Promise.all([
        audio.resume(),
        Promise.all(events.map(event => sample?.buffer ?? sampleFor(event.root)))
      ]);
      if (current !== run) return;

      const origin = audio.currentTime + .045;
      let end = origin;
      events.forEach(({midi, offset, bit, root, hold}, index) => {
        const start = origin + offset;
        const source = audio.createBufferSource();
        const gain = audio.createGain();
        source.buffer = samples[index];
        source.playbackRate.value = 2 ** ((midi - root) / 12);
        source.connect(gain);
        gain.connect(output);

        const yin = bit === false || bit === 0;
        const last = index === events.length - 1;
        const strength = .43 * accents[index % accents.length] * (yin ? .8 : 1);
        const sustain = hold ?? (last ? .96 : yin ? .32 : .52);
        const release = last ? .27 : .18;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(strength, start + .003);
        gain.gain.setTargetAtTime(0, start + sustain, release);
        const tail = start + sustain + release * 5;
        end = Math.max(end, tail);
        const voice = {source, gain, start};
        voices.add(voice);
        source.onended = () => {
          voices.delete(voice);
          source.disconnect();
          gain.disconnect();
        };
        source.start(start);
        source.stop(tail);
        if (onNote) run.timers.push(setTimeout(() => {
          if (current === run) onNote(index);
        }, (start - audio.currentTime) * 1000));
      });
      paint(run, name ? `${message.playing} · ${name}` : message.playing);
      run.timers.push(setTimeout(() => {
        if (current === run) finish(run, 'ended');
      }, (end - audio.currentTime) * 1000));
    } catch {
      if (current === run) stop('error', message.error);
    }
  }

  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  window.IChingModePreview = {play, stop, decodeFile};
})();
