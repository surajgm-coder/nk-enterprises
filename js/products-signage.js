/* ==========================================
   Signage & Branding Products - NK Enterprises
   File: js/products-signage.js
   ========================================== */

/* ---------------------------
   1) SAMPLE PRODUCT DATA
   Replace later with real products
---------------------------- */
const PRODUCTS = [
  // Outdoor Signage
  { id: 1, name: "Channel Letter Sign (Illuminated)", category: "Outdoor Signage", sub: "Channel Letter Signs (illuminated/non-illuminated)", price: 45999, popular: 95, newest: 20, icon: "fa-lightbulb" },
  { id: 2, name: "Pylon / Monument Sign", category: "Outdoor Signage", sub: "Pylon / Monument Signs", price: 79999, popular: 90, newest: 18, icon: "fa-location-dot" },
  { id: 3, name: "Billboard / Hoarding Setup", category: "Outdoor Signage", sub: "Billboards & Hoardings", price: 129999, popular: 85, newest: 16, icon: "fa-panorama" },
  { id: 4, name: "Directional Outdoor Sign Board", category: "Outdoor Signage", sub: "Directional Signs", price: 8999, popular: 78, newest: 22, icon: "fa-arrow-right" },
  { id: 5, name: "Outdoor Lightbox Sign", category: "Outdoor Signage", sub: "Outdoor Lightbox Signs", price: 24999, popular: 82, newest: 15, icon: "fa-square" },
  { id: 6, name: "Construction Site Sign Board", category: "Outdoor Signage", sub: "Construction Site Signs", price: 6999, popular: 72, newest: 25, icon: "fa-person-digging" },

  // Indoor Signage - Identification & Direction
  { id: 7, name: "Reception Sign Board", category: "Indoor Signage", sub: "Reception Signs", price: 5999, popular: 80, newest: 21, icon: "fa-building" },
  { id: 8, name: "Office Door Sign Plate", category: "Indoor Signage", sub: "Office Door Signs", price: 1499, popular: 68, newest: 27, icon: "fa-door-open" },
  { id: 9, name: "Room Identification Sign", category: "Indoor Signage", sub: "Room Identification Signs", price: 1999, popular: 70, newest: 24, icon: "fa-id-badge" },
  { id: 10, name: "Directory Board (Wall Mounted)", category: "Indoor Signage", sub: "Directory Boards", price: 7999, popular: 75, newest: 17, icon: "fa-list" },
  { id: 11, name: "Lobby Wayfinding Sign", category: "Indoor Signage", sub: "Wayfinding Signs", price: 6999, popular: 73, newest: 14, icon: "fa-route" },
  { id: 12, name: "ADA Accessibility Sign Set", category: "Indoor Signage", sub: "ADA / Accessibility Compliant Signs", price: 4999, popular: 66, newest: 13, icon: "fa-wheelchair" },

  // Indoor Signage - Branding & Decor
  { id: 13, name: "Backlit Logo Sign", category: "Branding & Decor", sub: "Backlit Logo Signs", price: 27999, popular: 88, newest: 12, icon: "fa-bolt" },
  { id: 14, name: "Acrylic Logo Board", category: "Branding & Decor", sub: "Acrylic Logo Boards", price: 15999, popular: 83, newest: 11, icon: "fa-cube" },
  { id: 15, name: "3D Wall Signage", category: "Branding & Decor", sub: "3D Signage", price: 19999, popular: 86, newest: 10, icon: "fa-cubes" },
  { id: 16, name: "Metal & Brass Lettering", category: "Branding & Decor", sub: "Metal & Brass Lettering", price: 21999, popular: 79, newest: 9, icon: "fa-font" },
  { id: 17, name: "Wooden Logo Plaque", category: "Branding & Decor", sub: "Wooden Logo Plaques", price: 8999, popular: 74, newest: 8, icon: "fa-tree" },
  { id: 18, name: "Vinyl Wall Graphics", category: "Branding & Decor", sub: "Wall Decals / Graphics", price: 5999, popular: 76, newest: 7, icon: "fa-paint-roller" },

  // Lighted & Digital Displays
  { id: 19, name: "LED Digital Sign Board", category: "Lighted & Digital Displays", sub: "LED Digital Sign Boards", price: 69999, popular: 92, newest: 6, icon: "fa-display" },
  { id: 20, name: "Digital Menu Board", category: "Lighted & Digital Displays", sub: "Digital Menu Boards", price: 55999, popular: 84, newest: 5, icon: "fa-rectangle-list" },
  { id: 21, name: "Electronic Message Center (EMC)", category: "Lighted & Digital Displays", sub: "Electronic Message Centers (EMC)", price: 99999, popular: 80, newest: 4, icon: "fa-message" },
  { id: 22, name: "LED Video Wall Setup", category: "Lighted & Digital Displays", sub: "LCD/LED Video Walls", price: 199999, popular: 87, newest: 3, icon: "fa-tv" },
  { id: 23, name: "Interactive Touchscreen Display", category: "Lighted & Digital Displays", sub: "Interactive Touchscreens", price: 129999, popular: 82, newest: 2, icon: "fa-hand-pointer" },

  // Window & Glass Signage
  { id: 24, name: "Vinyl Window Decal Branding", category: "Window & Glass Signage", sub: "Vinyl Window Decals", price: 3999, popular: 72, newest: 26, icon: "fa-window-maximize" },
  { id: 25, name: "Frosted Glass Film (Etched Look)", category: "Window & Glass Signage", sub: "Etched / Frosted Glass Film", price: 6999, popular: 75, newest: 19, icon: "fa-glasses" },
  { id: 26, name: "Perforated Window Graphics", category: "Window & Glass Signage", sub: "Perforated Window Graphics", price: 7999, popular: 73, newest: 23, icon: "fa-border-all" },

  // Promotional & Event Signage
  { id: 27, name: "Roll-Up Banner Stand", category: "Promotional & Event Signage", sub: "Roll-Up / Retractable Banners", price: 2499, popular: 85, newest: 28, icon: "fa-flag" },
  { id: 28, name: "X-Banner Stand", category: "Promotional & Event Signage", sub: "X-Banner Stands", price: 1999, popular: 78, newest: 29, icon: "fa-xmark" },
  { id: 29, name: "Feather Flag (Outdoor)", category: "Promotional & Event Signage", sub: "Feather Flags", price: 3499, popular: 74, newest: 30, icon: "fa-feather" },
  { id: 30, name: "Backdrop Banner Printing", category: "Promotional & Event Signage", sub: "Backdrop Banners", price: 9999, popular: 76, newest: 31, icon: "fa-image" },
  { id: 31, name: "Event Sign Board", category: "Promotional & Event Signage", sub: "Event Sign Boards", price: 5999, popular: 70, newest: 32, icon: "fa-sign-hanging" },
  { id: 32, name: "Floor Graphics Sticker", category: "Promotional & Event Signage", sub: "Floor Graphics", price: 4999, popular: 69, newest: 33, icon: "fa-shapes" },

  // POS & Retail Signage
  { id: 33, name: "Shelf Talkers & Wobblers", category: "POS & Retail Signage", sub: "Shelf Talkers & Wobblers", price: 999, popular: 66, newest: 34, icon: "fa-tags" },
  { id: 34, name: "A-Board / Sandwich Board", category: "POS & Retail Signage", sub: "A-Board / Sandwich Board Signs", price: 4999, popular: 77, newest: 35, icon: "fa-store" },
  { id: 35, name: "Countertop Sign Holder", category: "POS & Retail Signage", sub: "Countertop Sign Holders", price: 1299, popular: 64, newest: 36, icon: "fa-table" },

  // Portable & Temporary Signage
  { id: 36, name: "Corrugated Plastic Sign", category: "Portable & Temporary Signage", sub: "Corrugated Plastic Signs", price: 1999, popular: 67, newest: 37, icon: "fa-sheet-plastic" },
  { id: 37, name: "Street Pole Banner", category: "Portable & Temporary Signage", sub: "Street Pole Banners", price: 8999, popular: 71, newest: 38, icon: "fa-flag-checkered" },

  // Wayfinding & Safety Signage
  { id: 38, name: "Exit Sign Board", category: "Wayfinding & Safety Signage", sub: "Exit Signs", price: 1499, popular: 73, newest: 39, icon: "fa-door-open" },
  { id: 39, name: "Fire Safety Sign Set", category: "Wayfinding & Safety Signage", sub: "Fire Safety Signs", price: 1999, popular: 70, newest: 40, icon: "fa-fire-extinguisher" },
  { id: 40, name: "Caution / Warning Sign", category: "Wayfinding & Safety Signage", sub: "Caution / Warning Signs", price: 999, popular: 68, newest: 41, icon: "fa-triangle-exclamation" },

  // Vehicle & Outdoor Branding
  { id: 41, name: "Vehicle Wrap Branding", category: "Vehicle & Outdoor Branding", sub: "Vehicle Wraps", price: 29999, popular: 84, newest: 42, icon: "fa-car-side" },
  { id: 42, name: "Fleet Branding Package", category: "Vehicle & Outdoor Branding", sub: "Fleet Branding", price: 49999, popular: 79, newest: 43, icon: "fa-truck" },

  // Branded Merchandise & Promotional Items
  { id: 43, name: "Branded Tent / Canopy", category: "Branded Merchandise & Promotional Items", sub: "Branded Tents / Canopies", price: 34999, popular: 76, newest: 44, icon: "fa-campground" },
  { id: 44, name: "Custom Promotional Sign Board", category: "Branded Merchandise & Promotional Items", sub: "Custom Promotional Sign Boards", price: 9999, popular: 72, newest: 45, icon: "fa-bullhorn" },

  // Sign Hardware & Accessories
  { id: 45, name: "LED Module Set", category: "Sign Hardware & Accessories", sub: "LED Modules", price: 4999, popular: 74, newest: 46, icon: "fa-bolt" },
  { id: 46, name: "Snap Frame (A2)", category: "Sign Hardware & Accessories", sub: "Snap Frames", price: 2499, popular: 68, newest: 47, icon: "fa-square" },

  // Materials Used
  { id: 47, name: "ACP Sheet (Aluminum Composite Panel)", category: "Materials Used", sub: "Aluminum Composite Panels (ACP)", price: 5999, popular: 70, newest: 48, icon: "fa-layer-group" },
  { id: 48, name: "Acrylic / Perspex Sheet", category: "Materials Used", sub: "Acrylic / Perspex", price: 4999, popular: 69, newest: 49, icon: "fa-cube" },
  { id: 49, name: "Flex Banner Printing", category: "Materials Used", sub: "Flex Banners", price: 1999, popular: 78, newest: 50, icon: "fa-scroll" },

  // Branding Collateral
  { id: 50, name: "Business Card Printing", category: "Branding Collateral", sub: "Business Cards", price: 799, popular: 82, newest: 51, icon: "fa-id-card" },
  { id: 51, name: "Flyers / Brochure Printing", category: "Branding Collateral", sub: "Flyers / Brochures", price: 1499, popular: 76, newest: 52, icon: "fa-file-lines" },
  { id: 52, name: "Poster Printing", category: "Branding Collateral", sub: "Posters", price: 999, popular: 74, newest: 53, icon: "fa-image" },
  { id: 53, name: "Branded Stickers & Labels", category: "Branding Collateral", sub: "Branded Stickers & Labels", price: 1299, popular: 80, newest: 54, icon: "fa-tag" }
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

  // Filter by subcategories
  if (selectedSubs.size > 0) {
    list = list.filter(p => selectedSubs.has(p.sub));
  }

  // Search
  if (searchQuery.trim().length > 0) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q)
    );
  }

  // Sort
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
    tag.className = "signage-tag";
    tag.innerHTML = `${sub} <button type="button" title="Remove">✕</button>`;

    tag.querySelector("button").addEventListener("click", () => {
      selectedSubs.delete(sub);

      // uncheck UI
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
    tag.className = "signage-tag";
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
    card.className = "signage-card";

    const msg = encodeURIComponent(`Hello NK Enterprises, I want enquiry for: ${p.name}`);
    const waLink = `https://wa.me/${whatsappNumber}?text=${msg}`;

    card.innerHTML = `
      <div class="signage-thumb">
        <i class="fa-solid ${p.icon}"></i>
      </div>

      <div class="signage-card-body">
        <p class="signage-name">${p.name}</p>

        <div class="signage-card-meta">
          <span><b>Category:</b> ${p.category}</span>
          <span><b>Type:</b> ${p.sub}</span>
        </div>

        <div class="signage-price">${formatINR(p.price)}</div>

        <div class="signage-actions">
          <button class="signage-small-btn primary" type="button" data-view="${p.id}">
            View Details
          </button>

          <a class="signage-small-btn" href="${waLink}" target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
      </div>
    `;

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

// Apply button (filters already instant)
if (applyBtn) {
  applyBtn.addEventListener("click", render);
}


/* ---------------------------
   6) INITIAL RENDER
---------------------------- */
render();
