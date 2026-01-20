/* ==========================================
   Residential Products Page - NK Enterprises
   File: js/residential-products.js
   ========================================== */

/* ---------------------------
   1) SAMPLE PRODUCT DATA
   Replace later with real data
---------------------------- */
const PRODUCTS = [
  // Living Room
  { id: 1, name: "Modern 3-Seater Sofa", category: "Living Room Furniture", sub: "Sofas", price: 25999, popular: 95, newest: 10, icon: "fa-couch" },
  { id: 2, name: "Compact 2-Seater Sofa", category: "Living Room Furniture", sub: "Sofas", price: 18999, popular: 85, newest: 12, icon: "fa-couch" },
  { id: 3, name: "L-Shape Sectional Sofa", category: "Living Room Furniture", sub: "Sectionals", price: 34999, popular: 92, newest: 9, icon: "fa-couch" },
  { id: 4, name: "Comfort Recliner Chair", category: "Living Room Furniture", sub: "Recliners", price: 16999, popular: 80, newest: 8, icon: "fa-chair" },
  { id: 5, name: "Accent Armchair (Fabric)", category: "Living Room Furniture", sub: "Armchairs / Accent chairs", price: 9999, popular: 78, newest: 14, icon: "fa-chair" },
  { id: 6, name: "Round Coffee Table", category: "Living Room Furniture", sub: "Coffee tables", price: 4999, popular: 70, newest: 15, icon: "fa-table" },
  { id: 7, name: "TV Media Unit (6ft)", category: "Living Room Furniture", sub: "TV stands / Media units", price: 12999, popular: 88, newest: 11, icon: "fa-tv" },
  { id: 8, name: "Wall Display Cabinet", category: "Living Room Furniture", sub: "Wall units / Display cabinets", price: 14999, popular: 72, newest: 6, icon: "fa-box-archive" },

  // Dining
  { id: 9, name: "6-Seater Dining Table Set", category: "Dining Room Furniture", sub: "Dining tables", price: 29999, popular: 90, newest: 7, icon: "fa-utensils" },
  { id: 10, name: "4-Seater Round Dining Table", category: "Dining Room Furniture", sub: "Dining tables", price: 21999, popular: 76, newest: 13, icon: "fa-utensils" },
  { id: 11, name: "Dining Chairs (Set of 2)", category: "Dining Room Furniture", sub: "Dining chairs", price: 6999, popular: 73, newest: 16, icon: "fa-chair" },
  { id: 12, name: "Wooden Buffet Sideboard", category: "Dining Room Furniture", sub: "Buffets / Sideboards", price: 17999, popular: 79, newest: 5, icon: "fa-box-archive" },

  // Bedroom
  { id: 13, name: "Queen Size Bed Frame", category: "Bedroom Furniture", sub: "Bed frames", price: 24999, popular: 91, newest: 4, icon: "fa-bed" },
  { id: 14, name: "Storage Platform Bed", category: "Bedroom Furniture", sub: "Platform beds", price: 28999, popular: 87, newest: 3, icon: "fa-bed" },
  { id: 15, name: "Nightstand (2 Drawer)", category: "Bedroom Furniture", sub: "Nightstands", price: 3999, popular: 69, newest: 18, icon: "fa-box-archive" },
  { id: 16, name: "3 Door Wardrobe", category: "Bedroom Furniture", sub: "Wardrobes / Armoires", price: 19999, popular: 84, newest: 2, icon: "fa-warehouse" },

  // Home Office
  { id: 17, name: "Computer Desk with Storage", category: "Home Office Furniture", sub: "Desks", price: 8999, popular: 86, newest: 1, icon: "fa-laptop" },
  { id: 18, name: "Ergonomic Office Chair", category: "Home Office Furniture", sub: "Office chairs / Task chairs", price: 7499, popular: 89, newest: 17, icon: "fa-chair" },

  // Entryway
  { id: 19, name: "Entryway Bench with Shelf", category: "Entryway & Hallway Furniture", sub: "Entryway benches", price: 5999, popular: 67, newest: 19, icon: "fa-door-open" },
  { id: 20, name: "Shoe Rack (3 Tier)", category: "Entryway & Hallway Furniture", sub: "Shoe racks", price: 2499, popular: 60, newest: 20, icon: "fa-shoe-prints" },

  // Kids
  { id: 21, name: "Kids Bunk Bed", category: "Kids’ & Teen Furniture", sub: "Kids’ beds", price: 18999, popular: 74, newest: 21, icon: "fa-bed" },
  { id: 22, name: "Kids Study Desk Set", category: "Kids’ & Teen Furniture", sub: "Study desks & chairs", price: 6999, popular: 65, newest: 22, icon: "fa-book" },

  // Outdoor
  { id: 23, name: "Outdoor Patio Dining Set", category: "Outdoor & Patio Furniture", sub: "Patio dining sets", price: 27999, popular: 71, newest: 23, icon: "fa-sun" },
  { id: 24, name: "Outdoor Bench", category: "Outdoor & Patio Furniture", sub: "Outdoor benches", price: 8999, popular: 62, newest: 24, icon: "fa-tree" },

  // Accent
  { id: 25, name: "Storage Ottoman", category: "Accent & Specialty Furniture", sub: "Ottomans / Poufs", price: 2999, popular: 75, newest: 25, icon: "fa-box-archive" },
  { id: 26, name: "Room Divider Screen", category: "Accent & Specialty Furniture", sub: "Room dividers / Screens", price: 7999, popular: 64, newest: 26, icon: "fa-border-all" }
];


/* ---------------------------
   2) DOM ELEMENTS
---------------------------- */
const grid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const clearAllBtn = document.getElementById("clearAllBtn");
const activeFiltersEl = document.getElementById("activeFilters");
const applyBtn = document.getElementById("applyBtn");

// all checkboxes
const filterCheckboxes = Array.from(
  document.querySelectorAll('input[type="checkbox"][data-filter="sub"]')
);


/* ---------------------------
   3) STATE
---------------------------- */
let selectedSubs = new Set();
let searchQuery = "";
let sortMode = "popular";


/* ---------------------------
   4) HELPERS
---------------------------- */
function formatINR(num) {
  return "₹ " + Number(num).toLocaleString("en-IN");
}

function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Filter by selected subcategories
  if (selectedSubs.size > 0) {
    list = list.filter(p => selectedSubs.has(p.sub));
  }

  // Search filter
  if (searchQuery.trim().length > 0) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (sortMode === "popular") {
    list.sort((a, b) => b.popular - a.popular);
  } else if (sortMode === "newest") {
    list.sort((a, b) => b.newest - a.newest);
  } else if (sortMode === "priceLow") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortMode === "priceHigh") {
    list.sort((a, b) => b.price - a.price);
  }

  return list;
}

function renderActiveFilterTags() {
  activeFiltersEl.innerHTML = "";

  // Subcategory tags
  [...selectedSubs].forEach(sub => {
    const tag = document.createElement("div");
    tag.className = "res-tag";
    tag.innerHTML = `${sub} <button type="button" title="Remove">✕</button>`;

    tag.querySelector("button").addEventListener("click", () => {
      selectedSubs.delete(sub);

      // Uncheck in UI
      filterCheckboxes.forEach(cb => {
        if (cb.value === sub) cb.checked = false;
      });

      render();
    });

    activeFiltersEl.appendChild(tag);
  });

  // Search tag
  if (searchQuery.trim()) {
    const tag = document.createElement("div");
    tag.className = "res-tag";
    tag.innerHTML = `Search: "${searchQuery}" <button type="button" title="Remove">✕</button>`;

    tag.querySelector("button").addEventListener("click", () => {
      searchQuery = "";
      searchInput.value = "";
      render();
    });

    activeFiltersEl.appendChild(tag);
  }
}

function renderProducts(list) {
  grid.innerHTML = "";

  // Change WhatsApp number if needed
  const whatsappNumber = "916372352301";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "res-card";

    const msg = encodeURIComponent(`Hello NK Enterprises, I want enquiry for: ${p.name}`);
    const waLink = `https://wa.me/${whatsappNumber}?text=${msg}`;

    card.innerHTML = `
      <div class="res-thumb">
        <i class="fa-solid ${p.icon}"></i>
      </div>

      <div class="res-card-body">
        <p class="res-name">${p.name}</p>

        <div class="res-card-meta">
          <span><b>Category:</b> ${p.category}</span>
          <span><b>Type:</b> ${p.sub}</span>
        </div>

        <div class="res-price">${formatINR(p.price)}</div>

        <div class="res-actions">
          <button class="res-small-btn primary" type="button" data-view="${p.id}">
            View Details
          </button>

          <a class="res-small-btn" href="${waLink}" target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
      </div>
    `;

    // View details click (replace later with real product detail page)
    card.querySelector(`[data-view="${p.id}"]`).addEventListener("click", () => {
      alert(`Open product details page for:\n\n${p.name}\n\n(You can link to product-details.html?id=${p.id})`);
    });

    grid.appendChild(card);
  });
}

function render() {
  renderActiveFilterTags();

  const list = getFilteredProducts();
  resultsCount.textContent = `Showing ${list.length} product${list.length === 1 ? "" : "s"}`;

  if (list.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }

  renderProducts(list);
}


/* ---------------------------
   5) EVENTS
---------------------------- */
filterCheckboxes.forEach(cb => {
  cb.addEventListener("change", (e) => {
    const val = e.target.value;

    if (e.target.checked) selectedSubs.add(val);
    else selectedSubs.delete(val);

    render();
  });
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  render();
});

sortSelect.addEventListener("change", (e) => {
  sortMode = e.target.value;
  render();
});

clearAllBtn.addEventListener("click", () => {
  selectedSubs.clear();
  searchQuery = "";
  sortMode = "popular";

  filterCheckboxes.forEach(cb => cb.checked = false);
  searchInput.value = "";
  sortSelect.value = "popular";

  render();
});

if (applyBtn) {
  applyBtn.addEventListener("click", render);
}


/* ---------------------------
   6) INITIAL LOAD
---------------------------- */
render();
