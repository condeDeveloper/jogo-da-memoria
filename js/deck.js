// Monta e embaralha o baralho
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Retorna um array de cartas { id, symbol, pair } com `pairs` pares embaralhados
function buildDeck(symbols, pairs) {
  const chosen = shuffle(symbols).slice(0, pairs);
  const cards = [];
  chosen.forEach((symbol, pair) => {
    cards.push({ id: pair * 2, symbol, pair });
    cards.push({ id: pair * 2 + 1, symbol, pair });
  });
  return shuffle(cards);
}
