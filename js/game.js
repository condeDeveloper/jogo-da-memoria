// Orquestração: níveis, temas, viradas e vitória
class Game {
  constructor() {
    Render.init();
    this.level = 'easy';
    this.theme = 'animals';
    this.timer = new Timer(s => Render.tick(s));
    this.bind();
    this.newGame();
  }

  bind() {
    document.querySelectorAll('#levels button').forEach(b => b.addEventListener('click', () => {
      this.level = b.dataset.level;
      document.querySelectorAll('#levels button').forEach(x => x.classList.toggle('active', x === b));
      this.newGame();
    }));
    document.querySelectorAll('#themes button').forEach(b => b.addEventListener('click', () => {
      this.theme = b.dataset.theme;
      document.querySelectorAll('#themes button').forEach(x => x.classList.toggle('active', x === b));
      this.newGame();
    }));
    document.getElementById('restart').addEventListener('click', () => this.newGame());
    document.getElementById('again').addEventListener('click', () => this.newGame());
    window.addEventListener('keydown', e => { if (e.code === 'KeyR') this.newGame(); });
  }

  newGame() {
    const cfg = LEVELS[this.level];
    this.deck = buildDeck(THEMES[this.theme], cfg.pairs);
    this.open = [];
    this.locked = false;
    this.moves = 0;
    this.found = 0;
    this.timer.reset();
    Render.hideWin();
    Render.build(this.deck, this.level, cfg.cols, c => this.flip(c));
    Render.stats(0, 0, 0, cfg.pairs);
    Render.bestText(this.level, Storage.best(this.level));
  }

  flip(card) {
    if (this.locked || card.matched || this.open.includes(card)) return;
    this.timer.start();
    Render.flip(card, true);
    this.open.push(card);
    if (this.open.length < 2) return;

    this.moves++;
    const [a, b] = this.open;
    if (a.pair === b.pair) {
      a.matched = b.matched = true;
      this.found++;
      this.open = [];
      Render.match(a, b);
      Render.stats(this.moves, this.timer.seconds, this.found, LEVELS[this.level].pairs);
      if (this.found === LEVELS[this.level].pairs) this.win();
    } else {
      this.locked = true;
      Render.wrong(a, b);
      Render.stats(this.moves, this.timer.seconds, this.found, LEVELS[this.level].pairs);
      setTimeout(() => {
        Render.flip(a, false); Render.flip(b, false);
        this.open = [];
        this.locked = false;
      }, FLIP_BACK_DELAY);
    }
  }

  win() {
    this.timer.stop();
    const isRecord = Storage.record(this.level, this.moves, this.timer.seconds);
    Render.bestText(this.level, Storage.best(this.level));
    setTimeout(() => Render.win(this.moves, this.timer.seconds, isRecord), 600);
  }
}

window.addEventListener('DOMContentLoaded', () => { window.game = new Game(); });
