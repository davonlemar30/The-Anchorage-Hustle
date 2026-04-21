const DRUGS = [
  { id: "weed", displayName: "Weed", minPrice: 18, maxPrice: 85, volatility: 0.22, riskTier: 1, category: "street" },
  { id: "cocaine", displayName: "Cocaine", minPrice: 180, maxPrice: 650, volatility: 0.28, riskTier: 3, category: "powder" },
  { id: "adderall", displayName: "Adderall", minPrice: 22, maxPrice: 120, volatility: 0.24, riskTier: 2, category: "pill" },
  { id: "heroin", displayName: "Heroin", minPrice: 130, maxPrice: 500, volatility: 0.3, riskTier: 4, category: "opiate" },
  { id: "meth", displayName: "Meth", minPrice: 90, maxPrice: 420, volatility: 0.33, riskTier: 4, category: "street" },
  { id: "crack", displayName: "Crack", minPrice: 70, maxPrice: 300, volatility: 0.31, riskTier: 3, category: "street" },
  { id: "xanax", displayName: "Xanax", minPrice: 18, maxPrice: 90, volatility: 0.21, riskTier: 2, category: "pill" },
  { id: "oxy", displayName: "Oxy", minPrice: 45, maxPrice: 210, volatility: 0.25, riskTier: 3, category: "pill" },
  { id: "percocet", displayName: "Percocet", minPrice: 30, maxPrice: 170, volatility: 0.24, riskTier: 3, category: "pill" },
  { id: "mdma", displayName: "Molly / MDMA", minPrice: 55, maxPrice: 260, volatility: 0.27, riskTier: 2, category: "party" },
  { id: "shrooms", displayName: "Shrooms", minPrice: 35, maxPrice: 150, volatility: 0.2, riskTier: 1, category: "party" },
  { id: "lsd", displayName: "Acid / LSD", minPrice: 28, maxPrice: 180, volatility: 0.29, riskTier: 2, category: "party" },
  { id: "fentanyl", displayName: "Fentanyl", minPrice: 110, maxPrice: 620, volatility: 0.35, riskTier: 5, category: "opiate" },
  { id: "ecstasy", displayName: "Ecstasy", minPrice: 45, maxPrice: 220, volatility: 0.24, riskTier: 2, category: "party" },
  { id: "ketamine", displayName: "Ketamine", minPrice: 60, maxPrice: 280, volatility: 0.26, riskTier: 2, category: "party" },
  { id: "vicodin", displayName: "Vicodin", minPrice: 24, maxPrice: 145, volatility: 0.22, riskTier: 2, category: "pill" },
  { id: "lean", displayName: "Lean / Promethazine", minPrice: 50, maxPrice: 260, volatility: 0.25, riskTier: 2, category: "syrup" },
  { id: "hydros", displayName: "Hydros", minPrice: 20, maxPrice: 120, volatility: 0.22, riskTier: 2, category: "pill" },
  { id: "ritalin", displayName: "Ritalin", minPrice: 18, maxPrice: 105, volatility: 0.2, riskTier: 2, category: "pill" },
  { id: "vyvanse", displayName: "Vyvanse", minPrice: 24, maxPrice: 135, volatility: 0.23, riskTier: 2, category: "pill" },
  { id: "rx_mix", displayName: "Prescription Mix", minPrice: 32, maxPrice: 190, volatility: 0.24, riskTier: 3, category: "pill" },
];

const AREAS = [
  { id: "north_star_lot", displayName: "North Star Lot", riskLevel: 1, policePressure: 1, rivalPressure: 0, marketBias: { weed: 0.85, shrooms: 0.9, xanax: 0.9 } },
  { id: "spenard", displayName: "Spenard", riskLevel: 2, policePressure: 2, rivalPressure: 1, marketBias: { cocaine: 1.2, meth: 1.15, oxy: 1.12 } },
  { id: "mountain_view", displayName: "Mountain View", riskLevel: 3, policePressure: 2, rivalPressure: 2, marketBias: { crack: 1.2, heroin: 1.16, fentanyl: 1.2 } },
  { id: "downtown", displayName: "Downtown", riskLevel: 2, policePressure: 3, rivalPressure: 1, marketBias: { adderall: 1.17, cocaine: 1.22, mdma: 1.16 } },
  { id: "muldoon", displayName: "Muldoon", riskLevel: 3, policePressure: 2, rivalPressure: 3, marketBias: { meth: 1.22, hydros: 1.17, lean: 1.15 } },
  { id: "midtown", displayName: "Midtown", riskLevel: 2, policePressure: 2, rivalPressure: 1, marketBias: { adderall: 0.86, ritalin: 0.84, vyvanse: 0.82 } },
  { id: "southside", displayName: "Southside", riskLevel: 1, policePressure: 1, rivalPressure: 1, marketBias: { shrooms: 1.15, lsd: 1.2, ecstasy: 1.14 } },
  { id: "airport_industrial", displayName: "Airport / Industrial", riskLevel: 4, policePressure: 3, rivalPressure: 2, marketBias: { ketamine: 1.24, fentanyl: 1.26, rx_mix: 1.2 } },
];

const UPGRADES = [
  { id: "beater", displayName: "Used Beater", cost: 900, category: "car", statEffects: { maxCarry: 20, heatDeltaOnTravel: -2 }, unlockRequirements: { money: 700 } },
  { id: "stash_closet", displayName: "Hidden Closet Stash", cost: 650, category: "stash", statEffects: { stashSafety: 12, maxCarry: 10 }, unlockRequirements: { money: 500 } },
  { id: "burner_pack", displayName: "Burner Pack", cost: 450, category: "ops", statEffects: { eventProtection: 8 }, unlockRequirements: { money: 350 } },
  { id: "muscle_1", displayName: "1 Crew Muscle", cost: 1700, category: "crew", statEffects: { muggingDefense: 18, rookPressureMod: -8 }, unlockRequirements: { money: 1200, rep: 12 } },
];

const GAME = {
  day: 1,
  tick: 1,
  locationId: "north_star_lot",
  cash: 200,
  bank: 0,
  health: 100,
  heat: 0,
  rep: 0,
  maxCarry: 30,
  inventory: Object.fromEntries(DRUGS.map((drug) => [drug.id, 0])),
  prices: {},
  events: [],
  dre: { loanOutstanding: 0, deadlineDay: null, trust: 0 },
  mina: { trust: 0, dealChanceBonus: 0 },
  rook: { attention: 0, warned: false, taxActive: false },
  flags: { robbedRecently: false },
  assets: [],
};

const el = {
  hudStats: document.getElementById("hudStats"),
  marketTable: document.getElementById("marketTable"),
  travelList: document.getElementById("travelList"),
  holdings: document.getElementById("holdings"),
  eventFeed: document.getElementById("eventFeed"),
  upgrades: document.getElementById("upgrades"),
  robBtn: document.getElementById("robBtn"),
  loanBtn: document.getElementById("loanBtn"),
  repayBtn: document.getElementById("repayBtn"),
  rerollBtn: document.getElementById("rerollBtn"),
  clearFeedBtn: document.getElementById("clearFeedBtn"),
};

function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function weightedPick(entries) {
  const total = entries.reduce((sum, e) => sum + e.weight, 0);
  let roll = Math.random() * total;
  for (const entry of entries) {
    roll -= entry.weight;
    if (roll <= 0) return entry;
  }
  return entries[entries.length - 1];
}

function currentArea() {
  return AREAS.find((area) => area.id === GAME.locationId);
}

function cargoCount() {
  return Object.values(GAME.inventory).reduce((sum, qty) => sum + qty, 0);
}

function cargoValue() {
  return DRUGS.reduce((sum, drug) => sum + (GAME.inventory[drug.id] || 0) * (GAME.prices[drug.id] || drug.minPrice), 0);
}

function generatePrices() {
  const area = currentArea();
  for (const drug of DRUGS) {
    const span = drug.maxPrice - drug.minPrice;
    const base = drug.minPrice + Math.random() * span;
    const volatilitySwing = 1 + (Math.random() * 2 - 1) * drug.volatility;
    const locationBias = area.marketBias[drug.id] || 1;
    const minaDiscount = GAME.mina.trust >= 5 ? 0.95 : 1;
    const rookTax = GAME.rook.taxActive && area.riskLevel >= 3 ? 1.08 : 1;
    const scaled = base * volatilitySwing * locationBias * minaDiscount * rookTax;
    GAME.prices[drug.id] = Math.max(5, Math.round(scaled));
  }
}

function addFeed(text, tone = "") {
  GAME.events.unshift({ text, tone });
  GAME.events = GAME.events.slice(0, 60);
}

function stepTick(reason = "") {
  GAME.tick += 1;
  if (GAME.tick > 4) {
    GAME.tick = 1;
    GAME.day += 1;
  }
  GAME.flags.robbedRecently = false;
  if (reason) addFeed(reason);
  triggerRandomEvent("tick");
  generatePrices();
  render();
}

function buyDrug(drugId) {
  const price = GAME.prices[drugId];
  if (GAME.cash < price) return addFeed("Not enough cash for that buy.", "bad");
  if (cargoCount() >= GAME.maxCarry) return addFeed("You are maxed out on carry capacity.", "bad");
  GAME.cash -= price;
  GAME.inventory[drugId] += 1;
  if (["mdma", "cocaine", "heroin", "fentanyl", "meth"].includes(drugId)) {
    GAME.heat += 1;
    GAME.rep += 1;
    GAME.rook.attention += 1;
  }
  addFeed(`Bought 1 ${nameOf(drugId)} for $${price}.`, "good");
  triggerRandomEvent("deal");
  render();
}

function sellDrug(drugId) {
  if (!GAME.inventory[drugId]) return addFeed(`No ${nameOf(drugId)} in your pockets.`, "bad");
  const salePrice = GAME.prices[drugId];
  GAME.inventory[drugId] -= 1;
  GAME.cash += salePrice;
  GAME.rep += 1;
  GAME.rook.attention += currentArea().riskLevel >= 3 ? 1 : 0;
  addFeed(`Sold 1 ${nameOf(drugId)} for $${salePrice}.`, "good");
  triggerRandomEvent("deal");
  render();
}

function travelTo(areaId) {
  if (areaId === GAME.locationId) return;
  const target = AREAS.find((area) => area.id === areaId);
  GAME.locationId = areaId;
  GAME.tick += 1;
  if (GAME.tick > 4) {
    GAME.tick = 1;
    GAME.day += 1;
  }
  GAME.heat = Math.max(0, GAME.heat + target.riskLevel - 1 - assetEffect("heatDeltaOnTravel"));
  GAME.rook.attention += target.rivalPressure;
  addFeed(`Moved to ${target.displayName}.`, "");
  triggerRandomEvent("travel");
  generatePrices();
  render();
}

function robAction() {
  const entries = [
    { id: "easy_win", weight: 26, run: () => { const cash = rng(60, 140); GAME.cash += cash; GAME.heat += 1; GAME.rep += 1; addFeed(`Rob hit clean. +$${cash}.`, "good"); } },
    { id: "small_win", weight: 23, run: () => { const cash = rng(25, 70); GAME.cash += cash; GAME.heat += 2; addFeed(`You got a quick score: +$${cash}.`, "good"); } },
    { id: "hurt", weight: 15 + GAME.heat, run: () => { const dmg = rng(8, 20); GAME.health -= dmg; GAME.heat += 1; addFeed(`Rob went bad. Took ${dmg} damage.`, "bad"); } },
    { id: "nothing", weight: 18, run: () => addFeed("Target had nothing worth taking.") },
    { id: "retaliation", weight: 8 + GAME.rook.attention, run: () => { GAME.health -= rng(6, 16); GAME.rook.attention += 3; GAME.heat += 3; addFeed("Wrong person. Retaliation hit you fast.", "bad"); } },
    { id: "police", weight: 10 + currentArea().policePressure + GAME.heat, run: () => { GAME.heat += 4; addFeed("Cops lit up the block after that robbery.", "bad"); } },
  ];
  const result = weightedPick(entries);
  GAME.flags.robbedRecently = true;
  result.run();
  triggerRandomEvent("rob");
  render();
}

function takeDreLoan() {
  if (GAME.dre.loanOutstanding > 0) {
    addFeed("Dre says clear your current note first.", "bad");
    return;
  }
  const amount = 400;
  GAME.cash += amount;
  GAME.dre.loanOutstanding = Math.round(amount * 1.2);
  GAME.dre.deadlineDay = GAME.day + 5;
  GAME.dre.trust += 1;
  addFeed(`Dre fronts you $${amount}. Owe $${GAME.dre.loanOutstanding} by day ${GAME.dre.deadlineDay}.`, "");
  render();
}

function repayDre() {
  if (GAME.dre.loanOutstanding <= 0) return addFeed("No debt with Dre right now.");
  if (GAME.cash < GAME.dre.loanOutstanding) return addFeed("Not enough cash to clear Dre's loan.", "bad");
  GAME.cash -= GAME.dre.loanOutstanding;
  GAME.dre.loanOutstanding = 0;
  GAME.dre.deadlineDay = null;
  GAME.dre.trust += 2;
  GAME.rep += 2;
  GAME.mina.trust += 1;
  addFeed("You paid Dre in full. Trust goes up across your circle.", "good");
  render();
}

function nameOf(drugId) {
  return DRUGS.find((drug) => drug.id === drugId)?.displayName || drugId;
}

function assetEffect(effectId) {
  return GAME.assets.reduce((sum, assetId) => {
    const asset = UPGRADES.find((item) => item.id === assetId);
    return sum + (asset?.statEffects?.[effectId] || 0);
  }, 0);
}

function maybeBuyUpgrade(upgradeId) {
  const upgrade = UPGRADES.find((item) => item.id === upgradeId);
  if (!upgrade || GAME.assets.includes(upgradeId)) return;
  if (GAME.cash < upgrade.cost) return addFeed(`Need $${upgrade.cost} for ${upgrade.displayName}.`, "bad");
  if ((upgrade.unlockRequirements.rep || 0) > GAME.rep) return addFeed(`${upgrade.displayName} requires more reputation.`, "bad");
  GAME.cash -= upgrade.cost;
  GAME.assets.push(upgradeId);
  GAME.maxCarry += upgrade.statEffects.maxCarry || 0;
  addFeed(`Purchased ${upgrade.displayName}.`, "good");
  render();
}

function triggerRandomEvent(source) {
  const area = currentArea();
  const loadedValue = cargoValue();
  const rookHigh = GAME.rook.attention + area.rivalPressure;

  if (GAME.dre.loanOutstanding > 0 && GAME.day > GAME.dre.deadlineDay) {
    const penalty = Math.min(120, GAME.cash);
    GAME.cash -= penalty;
    GAME.dre.trust -= 2;
    GAME.rook.attention += 2;
    GAME.dre.deadlineDay = GAME.day + 2;
    addFeed(`Dre collected $${penalty} and extended the deadline. He's losing trust.`, "bad");
  }

  const baseEvents = [
    {
      id: "police_attention",
      weight: 6 + GAME.heat + area.policePressure + Math.floor(loadedValue / 600),
      run: () => {
        const hit = rng(2, 6);
        GAME.heat += hit;
        GAME.cash = Math.max(0, GAME.cash - rng(10, 45));
        addFeed("Police pressure spikes. You pay small losses and keep moving.", "bad");
      },
    },
    {
      id: "mugging_attempt",
      weight: 4 + area.riskLevel + Math.floor(loadedValue / 700),
      run: () => {
        const loss = rng(15, 90);
        if (Math.random() < (assetEffect("muggingDefense") / 100)) {
          addFeed("Crew muscle scared off a mugging attempt.", "good");
          return;
        }
        GAME.cash = Math.max(0, GAME.cash - loss);
        GAME.health -= rng(4, 14);
        addFeed(`Mugging attempt lands. You lose $${loss}.`, "bad");
      },
    },
    {
      id: "good_deal",
      weight: 8 + GAME.mina.trust + GAME.mina.dealChanceBonus,
      run: () => {
        const pick = DRUGS[rng(0, DRUGS.length - 1)];
        const discount = Math.round(GAME.prices[pick.id] * 0.25);
        GAME.prices[pick.id] = Math.max(5, GAME.prices[pick.id] - discount);
        GAME.mina.trust += 1;
        addFeed(`Mina tips a deal: ${pick.displayName} down $${discount} this stop.`, "good");
      },
    },
    {
      id: "dry_supply",
      weight: 7,
      run: () => {
        const pick = DRUGS[rng(0, DRUGS.length - 1)];
        GAME.prices[pick.id] = Math.round(GAME.prices[pick.id] * 1.2);
        addFeed(`Dry supply: ${pick.displayName} spikes in ${area.displayName}.`, "bad");
      },
    },
    {
      id: "lucky_buyer",
      weight: source === "deal" ? 10 : 4,
      run: () => {
        const inventoryOptions = DRUGS.filter((drug) => GAME.inventory[drug.id] > 0);
        if (!inventoryOptions.length) return;
        const pick = inventoryOptions[rng(0, inventoryOptions.length - 1)];
        const bonus = rng(25, 120);
        GAME.cash += bonus;
        GAME.inventory[pick.id] -= 1;
        GAME.rep += 2;
        addFeed(`Lucky buyer overpaid for ${pick.displayName}. Bonus +$${bonus}.`, "good");
      },
    },
    {
      id: "stash_theft",
      weight: 3 + Math.floor(loadedValue / 800),
      run: () => {
        if (Math.random() < ((assetEffect("stashSafety") || 0) / 100)) {
          addFeed("Your stash setup stopped a theft attempt.", "good");
          return;
        }
        const inventoryOptions = DRUGS.filter((drug) => GAME.inventory[drug.id] > 0);
        if (!inventoryOptions.length) return;
        const pick = inventoryOptions[rng(0, inventoryOptions.length - 1)];
        const amount = Math.min(GAME.inventory[pick.id], rng(1, 3));
        GAME.inventory[pick.id] -= amount;
        addFeed(`Stash theft: lost ${amount} ${pick.displayName}.`, "bad");
      },
    },
    {
      id: "area_too_hot",
      weight: area.riskLevel >= 3 ? 6 + GAME.heat : 2,
      run: () => {
        GAME.heat += 3;
        addFeed(`${area.displayName} runs too hot. Lay low or move.`, "bad");
      },
    },
    {
      id: "random_tip",
      weight: 6,
      run: () => {
        GAME.cash += rng(20, 60);
        GAME.rep += 1;
        addFeed("Random street tip lands in your favor. Quick extra cash.", "good");
      },
    },
  ];

  if (GAME.flags.robbedRecently) {
    baseEvents.push({
      id: "robbery_blowback",
      weight: 9,
      run: () => {
        GAME.heat += 2;
        GAME.health -= rng(3, 10);
        addFeed("Your robbery drew blowback from the block.", "bad");
      },
    });
  }

  if (rookHigh >= 12 || area.rivalPressure >= 2) {
    baseEvents.push({
      id: "rook_warning",
      weight: 7 + area.rivalPressure + Math.floor(rookHigh / 2),
      run: () => {
        GAME.rook.warned = true;
        GAME.rook.attention += 3;
        GAME.heat += 2;
        addFeed("Rook sends a warning: pay tax, leave, or be tested.", "bad");
      },
    });
    baseEvents.push({
      id: "rook_tax",
      weight: GAME.rook.warned ? 6 : 1,
      run: () => {
        const tax = Math.min(GAME.cash, rng(40, 140));
        GAME.cash -= tax;
        GAME.rook.taxActive = true;
        addFeed(`Rook's crew taxes your route for $${tax}.`, "bad");
      },
    });
    baseEvents.push({
      id: "rook_negotiation",
      weight: GAME.mina.trust > 3 ? 4 : 1,
      run: () => {
        GAME.rook.attention = Math.max(0, GAME.rook.attention - 4);
        GAME.mina.trust += 1;
        addFeed("Mina brokers a short peace window with Rook's corner.", "good");
      },
    });
  }

  if (Math.random() > 0.63) return;

  const event = weightedPick(baseEvents.filter((entry) => entry.weight > 0));
  event.run();
  GAME.health = Math.max(0, GAME.health);
  GAME.heat = Math.max(0, GAME.heat);
  if (GAME.health <= 0) {
    addFeed("You got folded. Reset and run it cleaner next time.", "bad");
    resetGame();
  }
}

function renderHud() {
  const area = currentArea();
  const chips = [
    `Day ${GAME.day}`,
    `Tick ${GAME.tick}/4`,
    `${area.displayName}`,
    `Cash $${GAME.cash}`,
    `Bank $${GAME.bank}`,
    `Heat ${GAME.heat}`,
    `Rep ${GAME.rep}`,
    `Health ${GAME.health}`,
    `Carry ${cargoCount()}/${GAME.maxCarry}`,
    `Dre Debt $${GAME.dre.loanOutstanding}`,
    `Mina Trust ${GAME.mina.trust}`,
    `Rook Pressure ${GAME.rook.attention}`,
  ];
  el.hudStats.innerHTML = chips.map((chip) => `<span class="chip">${chip}</span>`).join("");
}

function renderMarket() {
  el.marketTable.innerHTML = "";
  const header = document.createElement("div");
  header.className = "market-row header";
  header.innerHTML = "<div>Drug</div><div>Price</div><div>On Hand</div><div>Actions</div>";
  el.marketTable.appendChild(header);

  DRUGS.forEach((drug) => {
    const row = document.createElement("div");
    row.className = "market-row";
    row.innerHTML = `
      <div><strong>${drug.displayName}</strong><br><span class="muted">${drug.category} • risk ${drug.riskTier}</span></div>
      <div>$${GAME.prices[drug.id]}</div>
      <div>${GAME.inventory[drug.id]}</div>
      <div class="actions">
        <button class="btn" data-buy="${drug.id}" type="button">Buy 1</button>
        <button class="btn" data-sell="${drug.id}" type="button">Sell 1</button>
      </div>
    `;
    el.marketTable.appendChild(row);
  });
}

function renderTravel() {
  el.travelList.innerHTML = "";
  AREAS.forEach((area) => {
    const button = document.createElement("button");
    button.className = "btn travel";
    button.type = "button";
    button.disabled = area.id === GAME.locationId;
    button.textContent = `${area.displayName} (Risk ${area.riskLevel})`;
    button.addEventListener("click", () => travelTo(area.id));
    el.travelList.appendChild(button);
  });
}

function renderHoldings() {
  const lines = DRUGS
    .filter((drug) => GAME.inventory[drug.id] > 0)
    .map((drug) => `<div class="label-line"><span>${drug.displayName}</span><strong>${GAME.inventory[drug.id]}</strong></div>`)
    .join("");
  el.holdings.innerHTML = lines || '<p class="muted">No product on you.</p>';
}

function renderFeed() {
  el.eventFeed.innerHTML = GAME.events
    .map((entry) => `<div class="feed-item ${entry.tone}">${entry.text}</div>`)
    .join("");
}

function renderUpgrades() {
  el.upgrades.innerHTML = "";
  UPGRADES.forEach((upgrade) => {
    const owned = GAME.assets.includes(upgrade.id);
    const canSee = GAME.cash >= (upgrade.unlockRequirements.money || 0) || GAME.rep >= (upgrade.unlockRequirements.rep || 0);
    if (!canSee && !owned) return;

    const block = document.createElement("div");
    block.className = "label-line";
    block.innerHTML = `<span>${upgrade.displayName} - $${upgrade.cost}</span>`;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn";
    btn.textContent = owned ? "Owned" : "Buy";
    btn.disabled = owned;
    btn.addEventListener("click", () => maybeBuyUpgrade(upgrade.id));
    block.appendChild(btn);
    el.upgrades.appendChild(block);
  });

  if (!el.upgrades.children.length) {
    el.upgrades.innerHTML = '<p class="muted">Keep stacking cash to unlock assets.</p>';
  }
}

function render() {
  renderHud();
  renderMarket();
  renderTravel();
  renderHoldings();
  renderFeed();
  renderUpgrades();
}

function bindEvents() {
  el.marketTable.addEventListener("click", (event) => {
    const buyId = event.target.getAttribute("data-buy");
    const sellId = event.target.getAttribute("data-sell");
    if (buyId) buyDrug(buyId);
    if (sellId) sellDrug(sellId);
  });

  el.robBtn.addEventListener("click", robAction);
  el.loanBtn.addEventListener("click", takeDreLoan);
  el.repayBtn.addEventListener("click", repayDre);
  el.rerollBtn.addEventListener("click", () => stepTick("You slow down and let one market tick pass."));
  el.clearFeedBtn.addEventListener("click", () => {
    GAME.events = [];
    renderFeed();
  });
}

function resetGame() {
  GAME.day = 1;
  GAME.tick = 1;
  GAME.locationId = "north_star_lot";
  GAME.cash = 200;
  GAME.bank = 0;
  GAME.health = 100;
  GAME.heat = 0;
  GAME.rep = 0;
  GAME.maxCarry = 30;
  GAME.inventory = Object.fromEntries(DRUGS.map((drug) => [drug.id, 0]));
  GAME.events = [];
  GAME.dre = { loanOutstanding: 0, deadlineDay: null, trust: 0 };
  GAME.mina = { trust: 0, dealChanceBonus: 0 };
  GAME.rook = { attention: 0, warned: false, taxActive: false };
  GAME.flags = { robbedRecently: false };
  GAME.assets = [];
  generatePrices();
  addFeed("Fresh run started: $200 cash, no crew, no safety net.");
  render();
}

bindEvents();
resetGame();
