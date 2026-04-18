const SAVE_KEY = "hustle907_save";
const TIME_CYCLE = ["Morning", "Afternoon", "Evening", "LateNight"];
const LOCATIONS = {
  cousins_apt: "Cousin's Apt",
  north_star_lot: "North Star Lot",
};

const sceneByLocation = {
  cousins_apt: {
    art: "assets/cousins-apt-placeholder.svg",
    alt: "Gritty pixel-style view of cousin's apartment.",
    text: "Home base. Dre watches your condition and choices.",
  },
  north_star_lot: {
    art: "assets/cousins-apt-placeholder.svg",
    alt: "Night lot with parked cars and watchful eyes.",
    text: "North Star Lot. Mina runs soft access, Rook applies pressure.",
  },
};

const eventNarrative = {
  house_rules: {
    title: "House Rules",
    text: "Dre lays it out: move smart, keep heat low, and don't bring chaos home.",
  },
  first_purchase: {
    title: "First Purchase",
    text: "Mina clocks you as new and offers low-ticket starter buys.",
  },
  burner_line: {
    title: "Burner Line",
    text: "Mina lowers her voice and offers a clean burner route.",
  },
  minas_quiet_suggestion: {
    title: "Mina's Quiet Suggestion",
    text: "Mina hints at a quick lot run if you're serious.",
  },
  quick_lot_run: {
    title: "Quick Lot Run",
    text: "Fast money is on the table, but every run raises profile.",
  },
  rook_sizes_you_up: {
    title: "Rook Sizes You Up",
    text: "Rook steps in close and tests whether you're reckless or useful.",
  },
  dre_checks_your_face: {
    title: "Dre Checks Your Face",
    text: "Back home, Dre reads your condition before you can explain.",
  },
};

const EVENTS_V01 = [
  {
    id: "house_rules",
    location: "cousins_apt",
    availability: { repeatable: false, maxTriggers: 1, cooldownDays: 0, priority: 1000 },
    requirements: {
      op: "and",
      conditions: [
        { type: "location_is", value: "cousins_apt" },
        { type: "day_eq", value: 1 },
        { type: "time_of_day_is", value: "Morning" },
        { type: "event_not_seen", eventId: "house_rules" },
      ],
    },
    choices: [
      {
        id: "listen_agree",
        text: "Listen and agree",
        meta: { isRiskyAction: false },
        outcomes: [
          { type: "reputation_delta", value: 1 },
          { type: "relationship_delta", npc: "dre", metric: "trust", value: 1 },
          { type: "set_flag", flag: "dre_rules_heard", value: true },
          { type: "set_flag", flag: "dre_safe_tip_unlocked", value: true },
          { type: "unlock_location", locationId: "north_star_lot" },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "push_back",
        text: "Push back a little",
        meta: { isRiskyAction: false },
        outcomes: [
          { type: "set_flag", flag: "dre_rules_heard", value: true },
          { type: "unlock_location", locationId: "north_star_lot" },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "brush_off",
        text: "Brush him off and leave",
        meta: { isRiskyAction: false },
        outcomes: [
          { type: "reputation_delta", value: -1 },
          { type: "set_flag", flag: "dre_rules_heard", value: true },
          { type: "unlock_location", locationId: "north_star_lot" },
        ],
        advanceTimeSteps: 1,
      },
    ],
  },
  {
    id: "first_purchase",
    location: "north_star_lot",
    availability: { repeatable: false, maxTriggers: 1, cooldownDays: 0, priority: 900 },
    requirements: {
      op: "and",
      conditions: [
        { type: "location_is", value: "north_star_lot" },
        {
          op: "or",
          conditions: [
            { type: "time_of_day_is", value: "Morning" },
            { type: "time_of_day_is", value: "Afternoon" },
            { type: "time_of_day_is", value: "Evening" },
          ],
        },
        { type: "unlock_true", bucket: "locations", key: "north_star_lot" },
        { type: "event_not_seen", eventId: "first_purchase" },
      ],
    },
    choices: [
      {
        id: "buy_snacks",
        text: "Buy snacks for $10",
        meta: { isRiskyAction: false },
        outcomes: [
          { type: "money_delta", value: -10 },
          { type: "item_delta", item: "snacks", value: 1 },
          { type: "relationship_delta", npc: "mina", metric: "trust", value: 1 },
          { type: "set_flag", flag: "met_mina", value: true },
          { type: "unlock_vendor", vendorId: "mina" },
          { type: "unlock_event", eventId: "burner_line" },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "buy_meds",
        text: "Buy basic meds for $15",
        meta: { isRiskyAction: false },
        outcomes: [
          { type: "money_delta", value: -15 },
          { type: "item_delta", item: "basic_meds", value: 1 },
          { type: "relationship_delta", npc: "mina", metric: "trust", value: 1 },
          { type: "set_flag", flag: "met_mina", value: true },
          { type: "unlock_vendor", vendorId: "mina" },
          { type: "unlock_event", eventId: "burner_line" },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "ask_off_menu",
        text: "Ask what she has off-menu",
        meta: { isRiskyAction: false },
        outcomes: [
          { type: "set_flag", flag: "met_mina", value: true },
          { type: "unlock_vendor", vendorId: "mina" },
          { type: "unlock_event", eventId: "burner_line" },
        ],
        advanceTimeSteps: 1,
      },
      { id: "observe_leave", text: "Observe and leave", meta: { isRiskyAction: false }, outcomes: [], advanceTimeSteps: 1 },
    ],
  },
  {
    id: "burner_line",
    location: "north_star_lot",
    availability: { repeatable: false, maxTriggers: 1, cooldownDays: 0, priority: 850 },
    requirements: {
      op: "and",
      conditions: [
        { type: "location_is", value: "north_star_lot" },
        { op: "or", conditions: [{ type: "time_of_day_is", value: "Afternoon" }, { type: "time_of_day_is", value: "Evening" }] },
        { type: "unlock_true", bucket: "events", key: "burner_line" },
        { type: "flag_false", flag: "mina_refuses_service" },
        { type: "event_not_seen", eventId: "burner_line" },
      ],
    },
    choices: [
      {
        id: "buy_burner",
        text: "Buy the burner for $35",
        meta: { isRiskyAction: false },
        outcomes: [
          { type: "money_delta", value: -35 },
          { type: "item_delta", item: "burner_phone", value: 1 },
          { type: "set_flag", flag: "has_burner_phone", value: true },
          { type: "unlock_event", eventId: "minas_quiet_suggestion" },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "hold_one",
        text: "Ask Mina to hold one for later",
        meta: { isRiskyAction: false },
        outcomes: [
          { type: "set_flag", flag: "mina_holds_burner", value: true },
          { type: "unlock_event", eventId: "minas_quiet_suggestion" },
        ],
        advanceTimeSteps: 1,
      },
      { id: "skip", text: "Skip it", meta: { isRiskyAction: false }, outcomes: [], advanceTimeSteps: 1 },
    ],
  },
  {
    id: "minas_quiet_suggestion",
    location: "north_star_lot",
    availability: { repeatable: false, maxTriggers: 1, cooldownDays: 0, priority: 800 },
    requirements: {
      op: "and",
      conditions: [
        { type: "location_is", value: "north_star_lot" },
        { op: "or", conditions: [{ type: "time_of_day_is", value: "Evening" }, { type: "time_of_day_is", value: "LateNight" }] },
        { type: "unlock_true", bucket: "events", key: "minas_quiet_suggestion" },
        { type: "flag_true", flag: "met_mina" },
        { type: "flag_false", flag: "mina_refuses_service" },
        {
          op: "or",
          conditions: [
            { type: "relationship_gte", npc: "mina", metric: "trust", value: 1 },
            { type: "money_gte", value: 20 },
          ],
        },
      ],
    },
    choices: [
      {
        id: "pay_for_lead",
        text: "Pay $20 for the lead",
        meta: { isRiskyAction: false },
        outcomes: [
          { type: "money_delta", value: -20 },
          { type: "set_flag", flag: "mina_quick_job_hint_unlocked", value: true },
          { type: "unlock_event", eventId: "quick_lot_run" },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "ask_good_faith",
        text: "Ask for the lead on good faith",
        meta: { isRiskyAction: false },
        outcomes: [
          {
            type: "conditional",
            if: { type: "relationship_gte", npc: "mina", metric: "trust", value: 1 },
            then: [
              { type: "set_flag", flag: "mina_quick_job_hint_unlocked", value: true },
              { type: "unlock_event", eventId: "quick_lot_run" },
            ],
            else: [{ type: "reputation_delta", value: -1 }],
          },
        ],
        advanceTimeSteps: 1,
      },
      { id: "decline", text: "Decline", meta: { isRiskyAction: false }, outcomes: [], advanceTimeSteps: 1 },
    ],
  },
  {
    id: "quick_lot_run",
    location: "north_star_lot",
    availability: { repeatable: true, maxTriggers: 99, cooldownDays: 1, priority: 700 },
    requirements: {
      op: "and",
      conditions: [
        { type: "location_is", value: "north_star_lot" },
        { op: "or", conditions: [{ type: "time_of_day_is", value: "Evening" }, { type: "time_of_day_is", value: "LateNight" }] },
        { type: "unlock_true", bucket: "events", key: "quick_lot_run" },
        { type: "item_gte", item: "burner_phone", value: 1 },
        { type: "heat_lte", value: 5 },
      ],
    },
    choices: [
      {
        id: "run_clean",
        text: "Run it clean",
        meta: { isRiskyAction: true },
        outcomes: [
          { type: "money_delta_random", min: 60, max: 90 },
          { type: "reputation_delta", value: 1 },
          { type: "heat_delta", value: 1 },
          { type: "conditional", if: { type: "flag_true", flag: "rook_hostile" }, then: [{ type: "heat_delta", value: 1 }, { type: "health_delta", value: -5 }] },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "rush_it",
        text: "Rush it for extra cash",
        meta: { isRiskyAction: true },
        outcomes: [
          { type: "money_delta_random", min: 90, max: 120 },
          { type: "reputation_delta", value: 1 },
          { type: "heat_delta", value: 2 },
          {
            type: "conditional",
            if: { type: "flag_true", flag: "rook_hostile" },
            then: [{ type: "heat_delta", value: 1 }, { type: "health_delta", value: -5 }, { type: "set_flag", flag: "rook_humiliated", value: true }],
          },
        ],
        advanceTimeSteps: 1,
      },
      { id: "pass_for_now", text: "Pass for now", meta: { isRiskyAction: false }, outcomes: [], advanceTimeSteps: 1 },
    ],
  },
  {
    id: "rook_sizes_you_up",
    location: "north_star_lot",
    availability: { repeatable: false, maxTriggers: 1, cooldownDays: 0, priority: 750 },
    requirements: {
      op: "and",
      conditions: [
        { type: "location_is", value: "north_star_lot" },
        { type: "metric_between", metric: "risky_actions_on_lot", min: 1, max: 2 },
        { type: "flag_false", flag: "met_rook" },
      ],
    },
    choices: [
      {
        id: "respectful",
        text: "Keep it respectful",
        meta: { isRiskyAction: true },
        outcomes: [
          { type: "set_flag", flag: "met_rook", value: true },
          { type: "set_flag", flag: "rook_warned_player", value: true },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "offer_snacks",
        text: "Offer him snacks and smooth it over",
        meta: { isRiskyAction: true },
        choiceRequirements: { op: "and", conditions: [{ type: "item_gte", item: "snacks", value: 1 }] },
        outcomes: [
          { type: "item_delta", item: "snacks", value: -1 },
          { type: "reputation_delta", value: 1 },
          { type: "set_flag", flag: "met_rook", value: true },
          { type: "set_flag", flag: "rook_warned_player", value: true },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "stand_ground",
        text: "Stand your ground",
        meta: { isRiskyAction: true },
        outcomes: [
          { type: "reputation_delta", value: 1 },
          { type: "heat_delta", value: 1 },
          { type: "set_flag", flag: "met_rook", value: true },
          { type: "set_flag", flag: "rook_warned_player", value: true },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "mouth_off",
        text: "Mouth off",
        meta: { isRiskyAction: true },
        outcomes: [
          { type: "heat_delta", value: 2 },
          { type: "health_delta", value: -5 },
          { type: "set_flag", flag: "met_rook", value: true },
          { type: "set_flag", flag: "rook_hostile", value: true },
        ],
        advanceTimeSteps: 1,
      },
    ],
  },
  {
    id: "dre_checks_your_face",
    location: "cousins_apt",
    availability: { repeatable: true, maxTriggers: 99, cooldownDays: 1, priority: 650 },
    requirements: {
      op: "and",
      conditions: [
        { type: "location_is", value: "cousins_apt" },
        { type: "flag_true", flag: "dre_rules_heard" },
        { op: "or", conditions: [{ type: "heat_gte", value: 3 }, { type: "health_lt", value: 95 }] },
      ],
    },
    choices: [
      {
        id: "tell_truth",
        text: "Tell Dre straight up",
        meta: { isRiskyAction: false },
        outcomes: [
          { type: "conditional", if: { type: "heat_lt", value: 5 }, then: [{ type: "relationship_delta", npc: "dre", metric: "trust", value: 1 }] },
          { type: "set_flag", flag: "dre_safe_tip_unlocked", value: true },
          { type: "set_flag", flag: "told_dre_truth_once", value: true },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "downplay",
        text: "Downplay it",
        meta: { isRiskyAction: false },
        outcomes: [
          {
            type: "conditional",
            if: { op: "or", conditions: [{ type: "heat_gte", value: 5 }, { type: "health_lt", value: 95 }] },
            then: [
              { type: "relationship_delta", npc: "dre", metric: "trust", value: -1 },
              { type: "set_flag", flag: "dre_disappointed", value: true },
            ],
          },
        ],
        advanceTimeSteps: 1,
      },
      {
        id: "patch_up_first",
        text: "Patch yourself up first",
        meta: { isRiskyAction: false },
        choiceRequirements: { op: "and", conditions: [{ type: "item_gte", item: "basic_meds", value: 1 }] },
        outcomes: [
          { type: "item_delta", item: "basic_meds", value: -1 },
          { type: "health_delta", value: 10 },
        ],
        advanceTimeSteps: 1,
      },
    ],
  },
];

const state = {
  playerName: "",
  day: 1,
  timeOfDay: "Morning",
  location: "cousins_apt",
  money: 200,
  health: 100,
  reputation: 0,
  heat: 0,
  inventory: { snacks: 0, basic_meds: 0, burner_phone: 0 },
  relationships: { dre_trust: 0, mina_trust: 0 },
  flags: {},
  metrics: {},
  unlocks: { events: {}, locations: {}, vendors: {} },
  eventState: { seen: {}, lastTriggeredDay: {}, cooldowns: {} },
  log: [],
  pendingResult: null,
};

const ui = {
  currentEventId: null,
};

const el = {
  startScreen: document.getElementById("startScreen"),
  gameScreen: document.getElementById("gameScreen"),
  endScreen: document.getElementById("endScreen"),
  playerName: document.getElementById("playerName"),
  startGameBtn: document.getElementById("startGameBtn"),
  hudPrimary: document.getElementById("hudPrimary"),
  hudStats: document.getElementById("hudStats"),
  navRail: document.getElementById("navRail"),
  submenuTitle: document.getElementById("submenuTitle"),
  submenuPanel: document.getElementById("submenuPanel"),
  sceneArt: document.getElementById("sceneArt"),
  sceneText: document.getElementById("sceneText"),
  storyTitle: document.getElementById("storyTitle"),
  storyText: document.getElementById("storyText"),
  choiceButtons: document.getElementById("choiceButtons"),
  detailTitle: document.getElementById("detailTitle"),
  detailPanel: document.getElementById("detailPanel"),
  saveBtn: document.getElementById("saveBtn"),
  loadBtn: document.getElementById("loadBtn"),
  restartBtn: document.getElementById("restartBtn"),
  playAgainBtn: document.getElementById("playAgainBtn"),
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addLog(text) {
  state.log.unshift(`Day ${state.day} ${state.timeOfDay}: ${text}`);
  state.log = state.log.slice(0, 12);
}

function nextTimeStep() {
  const idx = TIME_CYCLE.indexOf(state.timeOfDay);
  const nextIdx = (idx + 1) % TIME_CYCLE.length;
  const wrapsDay = TIME_CYCLE[idx] === "LateNight" && TIME_CYCLE[nextIdx] === "Morning";
  state.timeOfDay = TIME_CYCLE[nextIdx];
  if (wrapsDay) state.day += 1;
}

function advanceTimeSteps(steps) {
  for (let i = 0; i < (steps || 0); i += 1) nextTimeStep();
}

function clampAll() {
  state.money = Math.max(0, state.money);
  state.health = Math.max(0, Math.min(100, state.health));
  state.heat = Math.max(0, Math.min(100, state.heat));
  state.reputation = Math.max(-10, Math.min(10, state.reputation));
  state.relationships.dre_trust = Math.max(0, Math.min(5, state.relationships.dre_trust || 0));
  state.relationships.mina_trust = Math.max(0, Math.min(5, state.relationships.mina_trust || 0));
  Object.keys(state.inventory).forEach((key) => {
    state.inventory[key] = Math.max(0, state.inventory[key] || 0);
  });
}

function getRelationshipKey(npc, metric) {
  if (metric !== "trust") return null;
  if (npc === "dre") return "dre_trust";
  if (npc === "mina") return "mina_trust";
  return null;
}

function evaluateRequirement(req) {
  if (!req) return true;
  if (req.op === "and") return req.conditions.every(evaluateRequirement);
  if (req.op === "or") return req.conditions.some(evaluateRequirement);

  switch (req.type) {
    case "location_is":
      return state.location === req.value;
    case "day_eq":
      return state.day === req.value;
    case "time_of_day_is":
      return state.timeOfDay === req.value;
    case "event_not_seen":
      return !state.eventState.seen[req.eventId];
    case "unlock_true":
      return Boolean(state.unlocks?.[req.bucket]?.[req.key]);
    case "flag_true":
      return state.flags[req.flag] === true;
    case "flag_false":
      return state.flags[req.flag] !== true;
    case "relationship_gte": {
      const key = getRelationshipKey(req.npc, req.metric);
      return (state.relationships[key] || 0) >= req.value;
    }
    case "money_gte":
      return state.money >= req.value;
    case "item_gte":
      return (state.inventory[req.item] || 0) >= req.value;
    case "heat_lte":
      return state.heat <= req.value;
    case "metric_between": {
      const metric = state.metrics[req.metric] || 0;
      return metric >= req.min && metric <= req.max;
    }
    case "heat_gte":
      return state.heat >= req.value;
    case "health_lt":
      return state.health < req.value;
    case "heat_lt":
      return state.heat < req.value;
    default:
      return false;
  }
}

function eventTriggerCount(eventId) {
  return Number(state.eventState.seen[eventId] || 0);
}

function isEventAvailable(eventDef) {
  const count = eventTriggerCount(eventDef.id);
  if (!eventDef.availability.repeatable && count > 0) return false;
  if (count >= eventDef.availability.maxTriggers) return false;

  const nextAllowedDay = state.eventState.cooldowns[eventDef.id] || 0;
  if (state.day < nextAllowedDay) return false;

  return evaluateRequirement(eventDef.requirements);
}

function getCurrentEvent() {
  const eligible = EVENTS_V01
    .filter((eventDef) => eventDef.location === state.location)
    .filter(isEventAvailable)
    .sort((a, b) => b.availability.priority - a.availability.priority);
  return eligible[0] || null;
}

function applyOutcomeSingle(outcome, phase) {
  if (outcome.type === "conditional") {
    const branch = evaluateRequirement(outcome.if) ? (outcome.then || []) : (outcome.else || []);
    branch.forEach((nested) => applyOutcomeSingle(nested, phase));
    return;
  }

  if (phase === "stat_item") {
    if (outcome.type === "money_delta") state.money += outcome.value;
    if (outcome.type === "health_delta") state.health += outcome.value;
    if (outcome.type === "heat_delta") state.heat += outcome.value;
    if (outcome.type === "reputation_delta") state.reputation += outcome.value;
    if (outcome.type === "item_delta") state.inventory[outcome.item] = (state.inventory[outcome.item] || 0) + outcome.value;
    if (outcome.type === "money_delta_random") state.money += randomInt(outcome.min, outcome.max);
  }

  if (phase === "relationship" && outcome.type === "relationship_delta") {
    const relKey = getRelationshipKey(outcome.npc, outcome.metric);
    if (relKey) state.relationships[relKey] = (state.relationships[relKey] || 0) + outcome.value;
  }

  if (phase === "flags" && outcome.type === "set_flag") {
    state.flags[outcome.flag] = outcome.value;
  }

  if (phase === "unlocks") {
    if (outcome.type === "unlock_event") state.unlocks.events[outcome.eventId] = true;
    if (outcome.type === "unlock_location") state.unlocks.locations[outcome.locationId] = true;
    if (outcome.type === "unlock_vendor") state.unlocks.vendors[outcome.vendorId] = true;
  }
}

function applyChoice(eventDef, choiceDef) {
  const phases = ["stat_item", "relationship", "flags", "unlocks"];
  phases.forEach((phase) => {
    choiceDef.outcomes.forEach((outcome) => applyOutcomeSingle(outcome, phase));
  });

  state.eventState.seen[eventDef.id] = eventTriggerCount(eventDef.id) + 1;
  state.eventState.lastTriggeredDay[eventDef.id] = state.day;
  if (eventDef.availability.cooldownDays > 0) {
    state.eventState.cooldowns[eventDef.id] = state.day + eventDef.availability.cooldownDays;
  }

  advanceTimeSteps(choiceDef.advanceTimeSteps || 0);

  if (state.location === "north_star_lot" && choiceDef.meta?.isRiskyAction) {
    state.metrics.risky_actions_on_lot = (state.metrics.risky_actions_on_lot || 0) + 1;
  }

  clampAll();
}

function chooseEventOption(eventId, choiceId) {
  const eventDef = EVENTS_V01.find((e) => e.id === eventId);
  if (!eventDef) return;
  const choiceDef = eventDef.choices.find((c) => c.id === choiceId);
  if (!choiceDef) return;

  if (choiceDef.choiceRequirements && !evaluateRequirement(choiceDef.choiceRequirements)) {
    addLog("That option is unavailable right now.");
    render();
    return;
  }

  applyChoice(eventDef, choiceDef);
  addLog(`${eventNarrative[eventDef.id]?.title || eventDef.id}: ${choiceDef.text}`);
  render();
}

function moveTo(locationId) {
  if (locationId === "north_star_lot" && !state.unlocks.locations.north_star_lot) return;
  state.location = locationId;
  addLog(`Moved to ${LOCATIONS[locationId]}.`);
  render();
}

function renderHud() {
  el.hudPrimary.textContent = `907 HUSTLE | Day ${state.day} | ${state.timeOfDay} | ${LOCATIONS[state.location]}`;
  el.hudStats.textContent = `Cash: $${state.money} | Health: ${state.health} | Rep: ${state.reputation} | Heat: ${state.heat} | DreTrust: ${state.relationships.dre_trust} | MinaTrust: ${state.relationships.mina_trust}`;
}

function renderScene() {
  const scene = sceneByLocation[state.location] || sceneByLocation.cousins_apt;
  el.sceneArt.src = scene.art;
  el.sceneArt.alt = scene.alt;
  el.sceneText.textContent = scene.text;
}

function renderNav() {
  el.navRail.innerHTML = "";
  const btn = document.createElement("button");
  btn.className = "nav-btn active";
  btn.textContent = "🎯 Event Loop v0.1";
  btn.disabled = true;
  el.navRail.appendChild(btn);
}

function renderMoves() {
  el.submenuTitle.textContent = "Move";
  el.submenuPanel.innerHTML = "";

  const aptBtn = document.createElement("button");
  aptBtn.className = `submenu-btn ${state.location === "cousins_apt" ? "active" : ""}`;
  aptBtn.textContent = "Go: Cousin's Apt";
  aptBtn.addEventListener("click", () => moveTo("cousins_apt"));
  el.submenuPanel.appendChild(aptBtn);

  const lotBtn = document.createElement("button");
  lotBtn.className = `submenu-btn ${state.location === "north_star_lot" ? "active" : ""}`;
  lotBtn.textContent = state.unlocks.locations.north_star_lot ? "Go: North Star Lot" : "North Star Lot (Locked)";
  lotBtn.disabled = !state.unlocks.locations.north_star_lot;
  lotBtn.addEventListener("click", () => moveTo("north_star_lot"));
  el.submenuPanel.appendChild(lotBtn);
}

function renderEvent() {
  const eventDef = getCurrentEvent();
  ui.currentEventId = eventDef?.id || null;

  if (!eventDef) {
    el.storyTitle.textContent = "No active event";
    el.storyText.textContent = "No event is currently eligible here. You can move locations or wait one time step.";
    el.choiceButtons.innerHTML = "";
    const waitBtn = document.createElement("button");
    waitBtn.className = "choice-btn";
    waitBtn.textContent = "Wait";
    waitBtn.addEventListener("click", () => {
      advanceTimeSteps(1);
      clampAll();
      addLog("You wait and let the block reset.");
      render();
    });
    el.choiceButtons.appendChild(waitBtn);
    return;
  }

  const text = eventNarrative[eventDef.id] || { title: eventDef.id, text: "" };
  el.storyTitle.textContent = text.title;
  el.storyText.textContent = text.text;
  el.choiceButtons.innerHTML = "";

  eventDef.choices.forEach((choiceDef) => {
    const canChoose = !choiceDef.choiceRequirements || evaluateRequirement(choiceDef.choiceRequirements);
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.textContent = canChoose ? choiceDef.text : `${choiceDef.text} (Unavailable)`;
    button.disabled = !canChoose;
    button.addEventListener("click", () => chooseEventOption(eventDef.id, choiceDef.id));
    el.choiceButtons.appendChild(button);
  });
}

function renderDetailPanel() {
  el.detailTitle.textContent = "State Log";
  el.detailPanel.innerHTML = "";

  const rows = [
    `Inventory: snacks ${state.inventory.snacks}, meds ${state.inventory.basic_meds}, burner ${state.inventory.burner_phone}`,
    `Unlocks: lot=${Boolean(state.unlocks.locations.north_star_lot)}, minaVendor=${Boolean(state.unlocks.vendors.mina)}, burnerEvent=${Boolean(state.unlocks.events.burner_line)}, quickRun=${Boolean(state.unlocks.events.quick_lot_run)}`,
    `Metrics: risky_actions_on_lot=${state.metrics.risky_actions_on_lot || 0}`,
    ...state.log,
  ];

  rows.forEach((line) => {
    const row = document.createElement("div");
    row.className = "log-item";
    row.textContent = line;
    el.detailPanel.appendChild(row);
  });
}

function render() {
  renderHud();
  renderScene();
  renderNav();
  renderMoves();
  renderEvent();
  renderDetailPanel();
}

function resetCanonicalState() {
  state.day = 1;
  state.timeOfDay = "Morning";
  state.location = "cousins_apt";
  state.money = 200;
  state.health = 100;
  state.reputation = 0;
  state.heat = 0;
  state.inventory = { snacks: 0, basic_meds: 0, burner_phone: 0 };
  state.relationships = { dre_trust: 0, mina_trust: 0 };
  state.flags = {};
  state.metrics = {};
  state.unlocks = { events: {}, locations: {}, vendors: {} };
  state.eventState = { seen: {}, lastTriggeredDay: {}, cooldowns: {} };
  state.log = [];
}

function startGame(name) {
  state.playerName = name || "Rookie";
  resetCanonicalState();
  addLog("Fresh run started.");
  el.startScreen.classList.add("hidden");
  el.endScreen.classList.add("hidden");
  el.gameScreen.classList.remove("hidden");
  render();
}

function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  addLog("Game saved.");
  render();
}

function loadGame() {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) {
    addLog("No save found.");
    render();
    return;
  }

  try {
    const loaded = JSON.parse(raw);
    Object.assign(state, loaded);
    clampAll();
    el.startScreen.classList.add("hidden");
    el.endScreen.classList.add("hidden");
    el.gameScreen.classList.remove("hidden");
    addLog("Save loaded.");
    render();
  } catch {
    addLog("Save corrupted.");
    render();
  }
}

el.startGameBtn.addEventListener("click", () => {
  startGame(el.playerName.value.trim());
});
el.saveBtn.addEventListener("click", saveGame);
el.loadBtn.addEventListener("click", loadGame);
el.restartBtn.addEventListener("click", () => startGame(state.playerName || "Rookie"));
el.playAgainBtn.addEventListener("click", () => startGame(state.playerName || "Rookie"));
el.playerName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") el.startGameBtn.click();
});
