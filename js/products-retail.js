/* ==========================================
   Retail Fixtures & Display Products - NK Enterprises
   File: js/products-retail.js
   ========================================== */

/* ---------------------------
   1) SAMPLE PRODUCT DATA
   Replace later with real products
---------------------------- */
const PRODUCTS = [
  // Merchandising & Display Fixtures
  { id: 1, name: "Gondola Shelving Unit (Double-Faced)", category: "Merchandising & Display Fixtures", sub: "Gondola shelving (single- or double-faced)", price: 28999, popular: 92, newest: 18, icon: "fa-layer-group" },
  { id: 2, name: "Wall Mounted Shelf System", category: "Merchandising & Display Fixtures", sub: "Wall-mounted shelves", price: 9999, popular: 76, newest: 20, icon: "fa-border-all" },
  { id: 3, name: "Slatwall Display Panel", category: "Merchandising & Display Fixtures", sub: "Slatwall panels", price: 4999, popular: 74, newest: 25, icon: "fa-grip-lines" },
  { id: 4, name: "Pegboard Panel Display", category: "Merchandising & Display Fixtures", sub: "Pegboard panels", price: 3999, popular: 69, newest: 23, icon: "fa-table-cells" },
  { id: 5, name: "Clothing Rack (Straight)", category: "Merchandising & Display Fixtures", sub: "Clothing racks (straight, round, waterfall)", price: 6999, popular: 88, newest: 16, icon: "fa-shirt" },
  { id: 6, name: "Shoe Display Rack (Tiered)", category: "Merchandising & Display Fixtures", sub: "Shoe display racks", price: 7999, popular: 81, newest: 15, icon: "fa-shoe-prints" },
  { id: 7, name: "Glass Display Counter Showcase", category: "Merchandising & Display Fixtures", sub: "Glass display counters / showcases", price: 21999, popular: 86, newest: 14, icon: "fa-cube" },
  { id: 8, name: "Lockable Display Case", category: "Merchandising & Display Fixtures", sub: "Lockable display cases", price: 15999, popular: 79, newest: 13, icon: "fa-lock" },

  // POS & Checkout Fixtures
  { id: 9, name: "POS Checkout Counter (Modern)", category: "Point-of-Sale (POS) & Checkout Fixtures", sub: "Checkout counters / POS desks", price: 32999, popular: 90, newest: 10, icon: "fa-cash-register" },
  { id: 10, name: "Cash Wrap Counter", category: "Point-of-Sale (POS) & Checkout Fixtures", sub: "Cash wrap counters", price: 25999, popular: 82, newest: 9, icon: "fa-money-bill-wave" },
  { id: 11, name: "Queue Stanchions (Set)", category: "Point-of-Sale (POS) & Checkout Fixtures", sub: "Queue stanchions / belt barriers", price: 8999, popular: 70, newest: 22, icon: "fa-people-line" },

  // Storage & Back-of-House
  { id: 12, name: "Stockroom Shelving Rack", category: "Storage & Back-of-House", sub: "Stockroom shelving", price: 12999, popular: 78, newest: 19, icon: "fa-warehouse" },
  { id: 13, name: "Mobile Storage Unit", category: "Storage & Back-of-House", sub: "Mobile storage units", price: 9999, popular: 71, newest: 21, icon: "fa-box" },
  { id: 14, name: "Backroom Storage Rack", category: "Storage & Back-of-House", sub: "Backroom racks", price: 14999, popular: 73, newest: 17, icon: "fa-boxes-stacked" },

  // Apparel & Accessories Fixtures
  { id: 15, name: "Full Body Mannequin", category: "Apparel & Accessories Fixtures", sub: "Mannequins (full body, torso, dress form)", price: 6999, popular: 85, newest: 12, icon: "fa-person" },
  { id: 16, name: "Feature Display Table", category: "Apparel & Accessories Fixtures", sub: "Feature tables", price: 11999, popular: 74, newest: 11, icon: "fa-table" },
  { id: 17, name: "Belt Display Stand", category: "Apparel & Accessories Fixtures", sub: "Belt displays", price: 2999, popular: 66, newest: 26, icon: "fa-tags" },

  // Footwear & Specialty Fixtures
  { id: 18, name: "Slanted Shoe Rack", category: "Footwear & Specialty Fixtures", sub: "Slanted shoe racks", price: 8999, popular: 72, newest: 24, icon: "fa-shoe-prints" },
  { id: 19, name: "Eyewear Display Cabinet", category: "Footwear & Specialty Fixtures", sub: "Eyewear display cabinets", price: 17999, popular: 77, newest: 8, icon: "fa-glasses" },

  // Signage & Promotional Fixtures
  { id: 20, name: "Floor Standing Sign Holder", category: "Signage & Promotional Fixtures", sub: "Floor standing sign holders", price: 2499, popular: 65, newest: 27, icon: "fa-sign-hanging" },
  { id: 21, name: "Lightbox Display Board", category: "Signage & Promotional Fixtures", sub: "Lightbox displays", price: 9999, popular: 69, newest: 7, icon: "fa-lightbulb" },
  { id: 22, name: "A-Board Sidewalk Sign", category: "Signage & Promotional Fixtures", sub: "A-board sidewalk signs", price: 3999, popular: 64, newest: 28, icon: "fa-bullhorn" },

  // Customer Comfort & Seating
  { id: 23, name: "Waiting Bench Seating", category: "Customer Comfort & Seating", sub: "Waiting seating benches", price: 7999, popular: 70, newest: 6, icon: "fa-couch" },
  { id: 24, name: "Fitting Room Stool", category: "Customer Comfort & Seating", sub: "Fitting room seating", price: 1999, popular: 61, newest: 30, icon: "fa-chair" },

  // Fitting Room Fixtures
  { id: 25, name: "Fitting Room Curtain Set", category: "Fitting Room Fixtures", sub: "Fitting room stalls / curtains", price: 4999, popular: 67, newest: 5, icon: "fa-person-booth" },
  { id: 26, name: "Full Length Mirror", category: "Fitting Room Fixtures", sub: "Mirrors (full-length, angled)", price: 6999, popular: 75, newest: 4, icon: "fa-mirror" },

  // Shopping Aids
  { id: 27, name: "Shopping Cart", category: "Shopping Aids", sub: "Shopping carts", price: 9999, popular: 80, newest: 3, icon: "fa-cart-shopping" },
  { id: 28, name: "Hand Basket Set", category: "Shopping Aids", sub: "Hand baskets", price: 2999, popular: 63, newest: 29, icon: "fa-basket-shopping" },

  // Security & Anti-Theft Fixtures
  { id: 29, name: "EAS Security Pedestal", category: "Security & Anti-Theft Fixtures", sub: "Electronic Article Surveillance (EAS) pedestals", price: 39999, popular: 83, newest: 2, icon: "fa-shield-halved" },
  { id: 30, name: "Retail Security Mirror", category: "Security & Anti-Theft Fixtures", sub: "Security mirrors", price: 7999, popular: 68, newest: 1, icon: "fa-eye" },

  // Modular & Custom Retail Systems
  { id: 31, name: "Modular Fixture System Setup", category: "Modular & Custom Retail Systems", sub: "Modular fixture systems", price: 49999, popular: 89, newest: 31, icon: "fa-cubes" },
  { id: 32, name: "End-Cap Display Unit", category: "Modular & Custom Retail Systems", sub: "End-cap display units", price: 15999, popular: 74, newest: 32, icon: "fa-cube" },

  // Kiosk & Mall Stand Fixtures
  { id: 33, name: "Mall Display Kiosk", category: "Kiosk & Mall Stand Fixtures", sub: "Product display kiosks", price: 45999, popular: 78, newest: 33, icon: "fa-store" },
  { id: 34, name: "Demo Table", category: "Kiosk & Mall Stand Fixtures", sub: "Demo tables", price: 8999, popular: 67, newest: 34, icon: "fa-table" },

  // Decor & Ambience Fixtures
  { id: 35, name: "Decorative Planter Stand", category: "Decor & Ambience Fixtures", sub: "Planters & greenery stands", price: 3999, popular: 62, newest: 35, icon: "fa-seedling" },
  { id: 36, name: "Decor Feature Pillar", category: "Decor & Ambience Fixtures", sub: "Decorative feature pillars", price: 12999, popular: 66, newest: 36, icon: "fa-paint-roller" }
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

// All filter checkboxes
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
    tag.className = "retail-tag";
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
    tag.className = "retail-tag";
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
    card.className = "retail-card";

    const msg = encodeURIComponent(`Hello NK Enterprises, I want enquiry for: ${p.name}`);
    const waLink = `https://wa.me/${whatsappNumber}?text=${msg}`;

    card.innerHTML = `
      <div class="retail-thumb">
        <i class="fa-solid ${p.icon}"></i>
      </div>

      <div class="retail-card-body">
        <p class="retail-name">${p.name}</p>

        <div class="retail-card-meta">
          <span><b>Category:</b> ${p.category}</span>
          <span><b>Type:</b> ${p.sub}</span>
        </div>

        <div class="retail-price">${formatINR(p.price)}</div>

        <div class="retail-actions">
          <button class="retail-small-btn primary" type="button" data-view="${p.id}">
            View Details
          </button>

          <a class="retail-small-btn" href="${waLink}" target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
      </div>
    `;

    // View details click (replace later with real product details page)
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
