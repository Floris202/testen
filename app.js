const STORAGE_KEY = "drive_plus_items";

const initialItems = [
  {
    id: crypto.randomUUID(),
    type: "folder",
    name: "Team Roadmap",
    size: 0,
    updatedAt: Date.now() - 1000 * 60 * 60 * 6,
    starred: true,
  },
  {
    id: crypto.randomUUID(),
    type: "pdf",
    name: "Q4-plan.pdf",
    size: 2_150_000,
    updatedAt: Date.now() - 1000 * 60 * 20,
    starred: false,
  },
  {
    id: crypto.randomUUID(),
    type: "image",
    name: "launch-banner.png",
    size: 1_580_000,
    updatedAt: Date.now() - 1000 * 60 * 60 * 32,
    starred: false,
  },
];

const itemGrid = document.getElementById("item-grid");
const statsEl = document.getElementById("stats");
const template = document.getElementById("item-card-template");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const folderForm = document.getElementById("folder-form");
const folderNameInput = document.getElementById("folder-name");
const fileInput = document.getElementById("file-input");
const navButtons = document.querySelectorAll(".nav-btn");

let filter = "all";
let items = loadItems();

function loadItems() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return initialItems;
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : initialItems;
  } catch {
    return initialItems;
  }
}

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function formatSize(bytes) {
  if (!bytes) return "Map";
  const units = ["B", "KB", "MB", "GB"];
  let index = 0;
  let value = bytes;
  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index += 1;
  }
  return `${value.toFixed(index ? 1 : 0)} ${units[index]}`;
}

function formatDate(timestamp) {
  return new Intl.DateTimeFormat("nl-NL", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

function iconFor(type) {
  if (type === "folder") return "📁";
  if (type === "pdf") return "📄";
  if (type === "image") return "🖼️";
  return "📦";
}

function computeStats(list) {
  const folders = list.filter((i) => i.type === "folder").length;
  const files = list.length - folders;
  const starred = list.filter((i) => i.starred).length;
  const totalSize = list.reduce((acc, i) => acc + i.size, 0);

  return [
    { label: "Items", value: list.length },
    { label: "Bestanden", value: files },
    { label: "Mappen", value: folders },
    { label: "Favorieten", value: starred },
    { label: "Opslag", value: formatSize(totalSize) },
  ];
}

function getVisibleItems() {
  const query = searchInput.value.trim().toLowerCase();
  let filtered = [...items];

  if (filter === "starred") {
    filtered = filtered.filter((item) => item.starred);
  } else if (filter === "recent") {
    const dayAgo = Date.now() - 1000 * 60 * 60 * 24;
    filtered = filtered.filter((item) => item.updatedAt >= dayAgo);
  }

  if (query) {
    filtered = filtered.filter(
      (item) =>
        item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query),
    );
  }

  if (sortSelect.value === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortSelect.value === "size") {
    filtered.sort((a, b) => b.size - a.size);
  } else {
    filtered.sort((a, b) => b.updatedAt - a.updatedAt);
  }

  return filtered;
}

function renderStats(list) {
  const stats = computeStats(list);
  statsEl.innerHTML = "";
  for (const stat of stats) {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<span>${stat.label}</span><strong>${stat.value}</strong>`;
    statsEl.appendChild(card);
  }
}

function renderItems() {
  const visibleItems = getVisibleItems();
  renderStats(visibleItems);
  itemGrid.innerHTML = "";

  if (!visibleItems.length) {
    itemGrid.innerHTML =
      '<p class="empty-state">Geen resultaten. Upload bestanden of maak een map om te starten.</p>';
    return;
  }

  for (const item of visibleItems) {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".item-card");
    const icon = fragment.querySelector(".item-icon");
    const title = fragment.querySelector("h4");
    const subtitle = fragment.querySelector("p");
    const starBtn = fragment.querySelector(".star-btn");
    const deleteBtn = fragment.querySelector(".delete-btn");

    icon.textContent = iconFor(item.type);
    title.textContent = item.name;
    subtitle.textContent = `${formatSize(item.size)} · ${formatDate(item.updatedAt)}`;

    if (item.starred) {
      starBtn.classList.add("starred");
      starBtn.textContent = "★";
    }

    starBtn.addEventListener("click", () => {
      items = items.map((entry) =>
        entry.id === item.id ? { ...entry, starred: !entry.starred, updatedAt: Date.now() } : entry,
      );
      saveItems();
      renderItems();
    });

    deleteBtn.addEventListener("click", () => {
      items = items.filter((entry) => entry.id !== item.id);
      saveItems();
      renderItems();
    });

    card.dataset.id = item.id;
    itemGrid.appendChild(fragment);
  }
}

folderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = folderNameInput.value.trim();
  if (!name) return;
  items.unshift({
    id: crypto.randomUUID(),
    type: "folder",
    name,
    size: 0,
    updatedAt: Date.now(),
    starred: false,
  });
  folderForm.reset();
  saveItems();
  renderItems();
});

fileInput.addEventListener("change", () => {
  const files = Array.from(fileInput.files || []);
  if (!files.length) return;

  const uploaded = files.map((file) => {
    const extension = file.name.split(".").pop()?.toLowerCase() || "file";
    const isImage = file.type.startsWith("image/");
    return {
      id: crypto.randomUUID(),
      type: isImage ? "image" : extension,
      name: file.name,
      size: file.size,
      updatedAt: Date.now(),
      starred: false,
    };
  });

  items = [...uploaded, ...items];
  fileInput.value = "";
  saveItems();
  renderItems();
});

searchInput.addEventListener("input", renderItems);
sortSelect.addEventListener("change", renderItems);

for (const button of navButtons) {
  button.addEventListener("click", () => {
    navButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    filter = button.dataset.filter;
    renderItems();
  });
}

renderItems();
