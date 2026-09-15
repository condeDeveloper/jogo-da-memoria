// Renderização em DOM
const Render = {
  init() {
    this.board = document.getElementById('board');
    this.moves = document.getElementById('moves');
    this.time = document.getElementById('time');
    this.pairs = document.getElementById('pairs');
    this.best = document.getElementById('best');
    this.overlay = document.getElementById('overlay');
    this.summary = document.getElementById('summary');
    this.record = document.getElementById('record');
  },

  build(deck, levelKey, cols, onFlip) {
    this.board.className = 'board ' + levelKey;
    this.board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    this.board.innerHTML = '';
    this.els = new Map();
    deck.forEach(card => {
      const el = document.createElement('button');
      el.className = 'card';
      el.setAttribute('aria-label', 'carta');
      el.innerHTML = `<div class="face back"></div><div class="face front">${card.symbol}</div>`;
      el.addEventListener('click', () => onFlip(card));
      this.board.appendChild(el);
      this.els.set(card.id, el);
    });
  },

  flip(card, on) { this.els.get(card.id).classList.toggle('flipped', on); },
  match(a, b) { for (const c of [a, b]) { const el = this.els.get(c.id); el.classList.remove('flipped'); el.classList.add('matched'); } },
  wrong(a, b) {
    for (const c of [a, b]) {
      const el = this.els.get(c.id);
      el.classList.add('wrong');
      setTimeout(() => el.classList.remove('wrong'), 400);
    }
  },

  stats(moves, seconds, found, total) {
    this.moves.textContent = moves;
    this.time.textContent = seconds + 's';
    this.pairs.textContent = `${found}/${total}`;
  },
  tick(seconds) { this.time.textContent = seconds + 's'; },
  bestText(level, best) {
    this.best.textContent = best
      ? `Recorde (${LEVELS[level].label}): ${best.moves} jogadas em ${best.seconds}s`
      : `Sem recorde em ${LEVELS[level].label} ainda`;
  },

  win(moves, seconds, isRecord) {
    this.summary.textContent = `Você encontrou todos os pares em ${moves} jogadas e ${seconds}s.`;
    this.record.textContent = isRecord ? '🏆 Novo recorde!' : '';
    this.overlay.classList.remove('hidden');
  },
  hideWin() { this.overlay.classList.add('hidden'); },
};
