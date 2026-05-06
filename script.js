const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".workspace-card");
const groups = document.querySelectorAll("[data-group]");
const navLinks = document.querySelectorAll(".side-nav a");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const snapshotPayBankLeads = document.querySelector("#snapshotPayBankLeads");
const snapshotStablecoinOpportunities = document.querySelector("#snapshotStablecoinOpportunities");
const snapshotEvents = document.querySelector("#snapshotEvents");
const adminOpenButton = document.querySelector("#adminOpenButton");
const adminBackdrop = document.querySelector("#adminBackdrop");
const adminModal = document.querySelector("#adminModal");
const adminCloseButton = document.querySelector("#adminCloseButton");
const adminLoginForm = document.querySelector("#adminLoginForm");
const adminEmail = document.querySelector("#adminEmail");
const adminPassword = document.querySelector("#adminPassword");
const adminMessage = document.querySelector("#adminMessage");
const adminPanel = document.querySelector("#adminPanel");
const adminLogoutButton = document.querySelector("#adminLogoutButton");

let activeFilter = "all";

const ADMIN_SALT = "aryze-operating-hub-admin-v1";
const ADMIN_CREDENTIAL_HASH =
  "11936fb812ac3640652e6cc0c199291448da2ae3915287300f1d5164c16c81f9";
const ADMIN_SESSION_KEY = "aryzeAdminUnlocked";
const CARD_STATE_KEY = "aryzeDashboardCardState:v3";
const LEGACY_CARD_STATE_KEYS = ["aryzeDashboardCardState", "aryzeDashboardCardState:v2"];
const STATUS_OPTIONS = [
  "Ready",
  "Updated",
  "In progress",
  "Needs review",
  "Draft",
  "Not ready",
  "Coming soon",
];

function readCardState() {
  try {
    return JSON.parse(localStorage.getItem(CARD_STATE_KEY) || "{}");
  } catch {
    return {};
  }
}

function removeLegacyCardState() {
  LEGACY_CARD_STATE_KEYS.forEach((key) => localStorage.removeItem(key));
}

function writeCardState(state) {
  localStorage.setItem(CARD_STATE_KEY, JSON.stringify(state));
}

function hasCategory(card, category) {
  return (card.dataset.category || "").split(" ").includes(category);
}

function readNumber(card, key) {
  const value = Number(card.dataset[key] || 0);
  return Number.isFinite(value) ? value : 0;
}

function getFact(card, label) {
  const rows = Array.from(card.querySelectorAll(".card-facts div"));
  return rows.find((row) => row.querySelector("dt")?.textContent.trim() === label);
}

function getFactValue(card, label) {
  return getFact(card, label)?.querySelector("dd")?.textContent.trim() || "";
}

function setFactValue(card, label, value) {
  const field = getFact(card, label)?.querySelector("dd");
  if (field) field.textContent = value;
}

function applyCardState(card, state) {
  const status = card.querySelector(".status-pill");
  if (state.status && status) status.textContent = state.status;
  if (state.currentFocus) setFactValue(card, "Current focus", state.currentFocus);
  if (state.nextAction) setFactValue(card, "Next action", state.nextAction);
  if (state.updated) setFactValue(card, "Updated", state.updated);
}

function saveCardState(card, patch) {
  const state = readCardState();
  const id = card.dataset.id;
  state[id] = { ...(state[id] || {}), ...patch };
  writeCardState(state);
}

function createAdminControls(card) {
  if (card.querySelector(".admin-controls")) return;

  const controls = document.createElement("div");
  controls.className = "admin-controls";
  controls.innerHTML = `
    <label>
      <span>Status</span>
      <select data-admin-field="status"></select>
    </label>
    <label>
      <span>Current focus</span>
      <input data-admin-field="currentFocus" type="text" />
    </label>
    <label>
      <span>Next action</span>
      <input data-admin-field="nextAction" type="text" />
    </label>
    <label>
      <span>Updated</span>
      <input data-admin-field="updated" type="text" />
    </label>
  `;

  const statusSelect = controls.querySelector('[data-admin-field="status"]');
  STATUS_OPTIONS.forEach((option) => {
    const item = document.createElement("option");
    item.value = option;
    item.textContent = option;
    statusSelect.append(item);
  });

  statusSelect.value = card.querySelector(".status-pill")?.textContent.trim() || "Ready";
  controls.querySelector('[data-admin-field="currentFocus"]').value =
    getFactValue(card, "Current focus");
  controls.querySelector('[data-admin-field="nextAction"]').value =
    getFactValue(card, "Next action");
  controls.querySelector('[data-admin-field="updated"]').value = getFactValue(card, "Updated");

  controls.addEventListener("input", (event) => {
    const field = event.target.dataset.adminField;
    if (!field) return;

    const value = event.target.value.trim();
    if (field === "status") {
      const status = card.querySelector(".status-pill");
      if (status) status.textContent = value;
    }
    if (field === "currentFocus") setFactValue(card, "Current focus", value);
    if (field === "nextAction") setFactValue(card, "Next action", value);
    if (field === "updated") setFactValue(card, "Updated", value);

    saveCardState(card, { [field]: value });
    updateCards();
  });

  controls.addEventListener("change", (event) => {
    event.target.dispatchEvent(new Event("input", { bubbles: true }));
  });

  card.append(controls);
}

function applySavedCardState() {
  const state = readCardState();
  cards.forEach((card) => {
    if (!card.dataset.id) return;
    applyCardState(card, state[card.dataset.id] || {});
    createAdminControls(card);
  });
}

function updateSnapshot() {
  let payBankLeads = 0;
  let stablecoinOpportunities = 0;
  let events = 0;

  cards.forEach((card) => {
    payBankLeads += readNumber(card, "payBankLeads");
    stablecoinOpportunities += readNumber(card, "stablecoinOpportunities");
    events += readNumber(card, "event");
  });

  snapshotPayBankLeads.textContent = payBankLeads;
  snapshotStablecoinOpportunities.textContent = stablecoinOpportunities;
  snapshotEvents.textContent = events;
}

function updateCards() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const categories = card.dataset.category || "";
    const title = card.dataset.title || "";
    const text = card.textContent.toLowerCase();
    const matchesFilter = activeFilter === "all" || hasCategory(card, activeFilter);
    const matchesSearch = !query || title.includes(query) || text.includes(query);
    const isVisible = matchesFilter && matchesSearch;

    if (isVisible) visibleCount += 1;
    card.classList.toggle("is-hidden", !isVisible);
  });

  groups.forEach((group) => {
    const visibleCards = group.querySelectorAll(".workspace-card:not(.is-hidden)");
    const groupCount = group.querySelector(".workspace-group-head span");
    if (groupCount) groupCount.textContent = visibleCards.length;
    group.classList.toggle("is-hidden", visibleCards.length === 0);
  });

  resultCount.textContent = `${visibleCount} shown`;
  emptyState.hidden = visibleCount !== 0;
}

async function hashCredential(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const payload = `${ADMIN_SALT}:${normalizedEmail}:${password}`;
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(payload));
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function setAdminMode(isActive) {
  document.body.classList.toggle("admin-active", isActive);
  if (adminPanel) adminPanel.hidden = !isActive;
  if (adminOpenButton) adminOpenButton.classList.toggle("is-active", isActive);
  if (isActive) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    applySavedCardState();
  } else {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  }
}

function openAdminModal() {
  if (sessionStorage.getItem(ADMIN_SESSION_KEY) === "true") {
    setAdminMode(true);
    return;
  }
  adminBackdrop.hidden = false;
  adminModal.hidden = false;
  adminMessage.textContent = "";
  adminEmail.focus();
}

function closeAdminModal() {
  adminBackdrop.hidden = true;
  adminModal.hidden = true;
  adminLoginForm.reset();
  adminMessage.textContent = "";
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    updateCards();
  });
});

searchInput.addEventListener("input", updateCards);

searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  const firstVisibleLink = document.querySelector(
    ".workspace-card:not(.is-hidden) .card-actions a"
  );

  if (firstVisibleLink) firstVisibleLink.click();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.toggle("is-active", item === link));
  });
});

if (adminOpenButton) {
  adminOpenButton.addEventListener("click", openAdminModal);
}

if (adminCloseButton) adminCloseButton.addEventListener("click", closeAdminModal);
if (adminBackdrop) adminBackdrop.addEventListener("click", closeAdminModal);

if (adminLoginForm) {
  adminLoginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const hash = await hashCredential(adminEmail.value, adminPassword.value);
    if (hash !== ADMIN_CREDENTIAL_HASH) {
      adminMessage.textContent = "Access denied.";
      adminPassword.select();
      return;
    }

    closeAdminModal();
    setAdminMode(true);
  });
}

if (adminLogoutButton) {
  adminLogoutButton.addEventListener("click", () => setAdminMode(false));
}

removeLegacyCardState();
applySavedCardState();
if (sessionStorage.getItem(ADMIN_SESSION_KEY) === "true") setAdminMode(true);
updateSnapshot();
updateCards();
