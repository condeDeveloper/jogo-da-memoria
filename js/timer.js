// Cronômetro simples
class Timer {
  constructor(onTick) { this.onTick = onTick; this.reset(); }
  reset() { this.stop(); this.seconds = 0; this.onTick(0); }
  start() {
    if (this.id) return;
    const startedAt = Date.now();
    this.id = setInterval(() => { this.seconds = Math.floor((Date.now() - startedAt) / 1000); this.onTick(this.seconds); }, 250);
  }
  stop() { if (this.id) { clearInterval(this.id); this.id = null; } }
}
