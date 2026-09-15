// Recordes por nível: menos jogadas, desempate por tempo
const Storage = {
  load() { try { return JSON.parse(localStorage.getItem(BEST_KEY) || '{}'); } catch (_) { return {}; } },
  best(level) { return this.load()[level] || null; },
  record(level, moves, seconds) {
    const all = this.load(), cur = all[level];
    const better = !cur || moves < cur.moves || (moves === cur.moves && seconds < cur.seconds);
    if (!better) return false;
    all[level] = { moves, seconds };
    try { localStorage.setItem(BEST_KEY, JSON.stringify(all)); } catch (_) {}
    return true;
  },
};
