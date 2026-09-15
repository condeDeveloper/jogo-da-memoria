# 🧠 Jogo da Memória

Jogo da memória em HTML, CSS e JavaScript puro, com cartas que viram em 3D. Sem dependências, sem build.

**Jogar online:** https://condedeveloper.github.io/jogo-da-memoria/

## Rodar local

```bash
npx serve -l 5187 .
```

## Níveis e temas

| Nível   | Pares | Grade |
|---------|-------|-------|
| Fácil   | 6     | 4×3   |
| Médio   | 8     | 4×4   |
| Difícil | 15    | 6×5   |

Temas: 🐶 Animais, 🍕 Comida, 🚀 Espaço.

## Funcionalidades

- Cartas com animação de virada em 3D (CSS `preserve-3d`)
- Contador de jogadas, cronômetro e pares encontrados
- Recorde por nível (menos jogadas, desempate por tempo) no `localStorage`
- Feedback visual de acerto (verde, pulso) e erro (vermelho, tremor)
- Tecla `R` reinicia

## Estrutura

```
js/config.js    # níveis, temas e constantes
js/deck.js      # montagem e embaralhamento
js/timer.js     # cronômetro
js/storage.js   # recordes
js/render.js    # DOM e animações
js/game.js      # regras
```

## Licença

MIT
