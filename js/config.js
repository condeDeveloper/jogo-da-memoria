// Níveis e conjuntos de figuras
const LEVELS = {
  easy:   { cols: 4, pairs: 6,  label: 'Fácil' },
  medium: { cols: 4, pairs: 8,  label: 'Médio' },
  hard:   { cols: 6, pairs: 15, label: 'Difícil' },
};

const THEMES = {
  animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🦉'],
  food:    ['🍕', '🍔', '🍟', '🌮', '🍣', '🍩', '🍪', '🍰', '🍇', '🍓', '🍒', '🍑', '🥑', '🌽', '🥕', '🍉', '🍌', '🥨'],
  space:   ['🚀', '🛸', '🌙', '⭐', '☄️', '🪐', '🌍', '🌞', '👾', '🛰️', '🔭', '🌌', '👨‍🚀', '🌠', '🌑', '💫', '🌗', '🛰'],
};

const FLIP_BACK_DELAY = 800; // ms que o par errado fica visível
const BEST_KEY = 'memory-best';
