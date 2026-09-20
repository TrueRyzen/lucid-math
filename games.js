/* =========================================================
   Lucid Math — Game Library
   ---------------------------------------------------------
   Each game: { name, emoji, url, tag }
   tag = category shown on the card AND used by filter chips.

   ⚠️  ABOUT EMBEDS
   Many big-name sites (chess.com, NYT, tetris.com) BLOCK iframes.
   If a game shows a blank screen, either:
     1) Host the game files yourself (put them in /games/NAME/)
        and use a RELATIVE url like "./games/2048/index.html"
     2) Use sites that allow embedding (itch.io HTML5 games, etc.)
   ========================================================= */

const GAMES = [
  // Puzzle / Math
  { name: "2048",         emoji: "🔢", tag: "Puzzle",  url: "https://play2048.co/" },
  { name: "Sudoku",       emoji: "🧩", tag: "Puzzle",  url: "https://sudoku.com/" },
  { name: "Minesweeper",  emoji: "💣", tag: "Puzzle",  url: "https://minesweeper.online/" },
  { name: "Wordle",       emoji: "📝", tag: "Puzzle",  url: "https://www.nytimes.com/games/wordle/index.html" },

  // Arcade
  { name: "Snake",        emoji: "🐍", tag: "Arcade",  url: "https://playsnake.org/" },
  { name: "Slope",        emoji: "🛝", tag: "Arcade",  url: "https://slope-game.github.io/" },
  { name: "Flappy Bird",  emoji: "🐦", tag: "Arcade",  url: "https://flappybird.io/" },
  { name: "Tetris",       emoji: "🧱", tag: "Arcade",  url: "https://tetris.com/play-tetris" },

  // Sports
  { name: "Basketball",   emoji: "🏀", tag: "Sports",  url: "https://basketballstars.io/" },
  { name: "Run 3",        emoji: "🏃", tag: "Sports",  url: "https://run3.io/" },

  // Classic
  { name: "Chess",        emoji: "♟️", tag: "Classic", url: "https://www.chess.com/play/computer" },
  { name: "Solitaire",    emoji: "🃏", tag: "Classic", url: "https://solitaired.com/" },

  // Math (fits your brand 💜)
  { name: "Math Playground", emoji: "➗", tag: "Math",  url: "https://www.mathplayground.com/" },
  { name: "Cool Math",       emoji: "✖️", tag: "Math",  url: "https://www.coolmathgames.com/" },
];