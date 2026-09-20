/* ---------- ELEMENTS ---------- */
const grid       = document.getElementById("gamesGrid");
const filtersBox = document.getElementById("filters");
const search     = document.getElementById("search");
const noResults  = document.getElementById("noResults");
const statCount  = document.getElementById("statCount");
const yearEl     = document.getElementById("year");

/* ---------- PLAYER ---------- */
const player       = document.getElementById("player");
const playerFrame  = document.getElementById("playerFrame");
const playerName   = document.getElementById("playerName");
const playerEmoji  = document.getElementById("playerEmoji");
const closePlayer  = document.getElementById("closePlayer");
const openExternal = document.getElementById("openExternal");

let currentUrl = "";
let activeFilter = "All";

/* ---------- INIT ---------- */
yearEl.textContent = new Date().getFullYear();
statCount.textContent = GAMES.length;

// Build category chips from game tags
const categories = ["All", ...new Set(GAMES.map(g => g.tag))];
categories.forEach(cat => {
  const chip = document.createElement("button");
  chip.className = "chip" + (cat === "All" ? " active" : "");
  chip.textContent = cat;
  chip.addEventListener("click", () => {
    activeFilter = cat;
    document.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === chip));
    render();
  });
  filtersBox.appendChild(chip);
});

/* ---------- RENDER ---------- */
function render() {
  const q = search.value.toLowerCase().trim();
  const list = GAMES.filter(g => {
    const matchesSearch = g.name.toLowerCase().includes(q) || g.tag.toLowerCase().includes(q);
    const matchesFilter = activeFilter === "All" || g.tag === activeFilter;
    return matchesSearch && matchesFilter;
  });

  grid.innerHTML = "";
  noResults.hidden = list.length !== 0;

  list.forEach((game, i) => {
    const card = document.createElement("a");
    card.className = "game-card";
    card.href = "#";
    card.style.animationDelay = (i * 0.03) + "s";
    card.innerHTML = `
      <span class="tag">${game.tag}</span>
      <div class="game-thumb">${game.emoji}</div>
      <h3>${game.name}</h3>
    `;
    card.addEventListener("click", (e) => {
      e.preventDefault();
      openGame(game);
    });
    grid.appendChild(card);
  });
}

/* ---------- PLAYER LOGIC ---------- */
function openGame(game) {
  currentUrl = game.url;
  playerName.textContent = game.name;
  playerEmoji.textContent = game.emoji;
  playerFrame.src = game.url;
  player.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeGame() {
  player.hidden = true;
  playerFrame.src = "about:blank";
  document.body.style.overflow = "";
}

closePlayer.addEventListener("click", closeGame);
openExternal.addEventListener("click", () => {
  if (currentUrl) window.open(currentUrl, "_blank", "noopener");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !player.hidden) closeGame();
});

/* ---------- SEARCH ---------- */
search.addEventListener("input", render);

/* ---------- GO ---------- */
render();