/* ==========================================
   Office & Commercial Products Page - NK Enterprises
   File: js/products-office.js
   ========================================== */

/* ---------------------------
   1) SAMPLE PRODUCT DATA
   Replace later with real data
---------------------------- */
const PRODUCTS = [
  // Workstations & Desks
  { id: 1, name: "Executive Office Desk", category: "Workstations & Desks", sub: "Executive desks", price: 24999, popular: 92, newest: 8, icon: "fa-desktop" },
  { id: 2, name: "Modern Writing Desk", category: "Workstations & Desks", sub: "Writing desks", price: 8999, popular: 70, newest: 12, icon: "fa-pen-nib" },
  { id: 3, name: "Computer Desk with Storage", category: "Workstations & Desks", sub: "Computer desks", price: 10999, popular: 78, newest: 14, icon: "fa-computer" },
  { id: 4, name: "Height Adjustable Standing Desk", category: "Workstations & Desks", sub: "Standing / height-adjustable desks", price: 21999, popular: 88, newest: 16, icon: "fa-arrow-up-right-dots" },
  { id: 5, name: "L-Shaped Office Desk", category: "Workstations & Desks", sub: "L-shaped / U-shaped desks", price: 18999, popular: 84, newest: 10, icon: "fa-table" },
  { id: 6, name: "Modular Workstation Benching", category: "Workstations & Desks", sub: "Modular workstations / benching systems", price: 39999, popular: 90, newest: 6, icon: "fa-layer-group" },

  // Seating (Office Chairs)
  { id: 7, name: "Ergonomic Task Chair", category: "Seating", sub: "Ergonomic task chairs", price: 7999, popular: 95, newest: 20, icon: "fa-chair" },
  { id: 8, name: "Manager Chair (Premium)", category: "Seating", sub: "Manager chairs", price: 9999, popular: 85, newest: 18, icon: "fa-chair" },
  { id: 9, name: "Executive Chair (Leather)", category: "Seating", sub: "Executive chairs", price: 14999, popular: 89, newest: 15, icon: "fa-chair" },
  { id: 10, name: "Conference Meeting Chair", category: "Seating", sub: "Conference / meeting chairs", price: 6499, popular: 74, newest: 11, icon: "fa-chair" },
  { id: 11, name: "Visitor Chair", category: "Seating", sub: "Guest / visitor chairs", price: 3999, popular: 69, newest: 13, icon: "fa-chair" },
  { id: 12, name: "Multipurpose Stacking Chair", category: "Seating", sub: "Multipurpose stacking chairs", price: 2999, popular: 67, newest: 17, icon: "fa-chair" },

  // Lounge & Reception Seating
  { id: 13, name: "Commercial Grade Reception Sofa", category: "Seating", sub: "Sofas / loveseats (commercial grade)", price: 27999, popular: 76, newest: 9, icon: "fa-couch" },
  { id: 14, name: "Lounge Chair (Reception)", category: "Seating", sub: "Lounge chairs", price: 8999, popular: 72, newest: 7, icon: "fa-couch" },
  { id: 15, name: "Waiting Room Seating Set", category: "Seating", sub: "Waiting room seating", price: 19999, popular: 80, newest: 5, icon: "fa-couch" },

  // Storage Solutions
  { id: 16, name: "Vertical Filing Cabinet", category: "Storage Solutions", sub: "Filing cabinets (vertical, lateral)", price: 6999, popular: 82, newest: 19, icon: "fa-box-archive" },
  { id: 17, name: "Mobile Pedestal Drawer", category: "Storage Solutions", sub: "Mobile pedestal drawers", price: 4999, popular: 73, newest: 21, icon: "fa-box-archive" },
  { id: 18, name: "Office Bookcase Unit", category: "Storage Solutions", sub: "Bookcases / shelving units", price: 8999, popular: 77, newest: 22, icon: "fa-book" },
  { id: 19, name: "Employee Locker Wardrobe", category: "Storage Solutions", sub: "Wardrobes / lockers (employee storage)", price: 14999, popular: 71, newest: 4, icon: "fa-warehouse" },
  { id: 20, name: "Office Credenza Storage", category: "Storage Solutions", sub: "Credenzas", price: 12999, popular: 79, newest: 3, icon: "fa-box-archive" },

  // Conference & Meeting
  { id: 21, name: "Boat Shape Conference Table", category: "Conference & Meeting", sub: "Conference tables (rectangular, boat-shape)", price: 45999, popular: 87, newest: 2, icon: "fa-people-group" },
  { id: 22, name: "Collaboration Table", category: "Conference & Meeting", sub: "Collaboration tables", price: 23999, popular: 75, newest: 1, icon: "fa-people-group" },
  { id: 23, name: "Meeting Room Chair Set", category: "Conference & Meeting", sub: "Meeting room chairs", price: 17999, popular: 78, newest: 23, icon: "fa-chair" },
  { id: 24, name: "Mobile Whiteboard Stand", category: "Conference & Meeting", sub: "Whiteboards / marker boards (mounted or mobile)", price: 5999, popular: 66, newest: 24, icon: "fa-chalkboard" },

  // Reception & Waiting Area
  { id: 25, name: "Reception Counter (Modern)", category: "Reception & Waiting", sub: "Reception counters / kiosks", price: 34999, popular: 81, newest: 25, icon: "fa-bell-concierge" },
  { id: 26, name: "Reception Coffee Table", category: "Reception & Waiting", sub: "Coffee / side tables", price: 4999, popular: 60, newest: 26, icon: "fa-mug-hot" },

  // Partitions
  { id: 27, name: "Cubicle Partition Panel", category: "Partitions & Space Dividers", sub: "Cubicle panels", price: 8999, popular: 72, newest: 27, icon: "fa-border-all" },
  { id: 28, name: "Glass Office Partition", category: "Partitions & Space Dividers", sub: "Glass partitions", price: 25999, popular: 83, newest: 28, icon: "fa-border-all" },
  { id: 29, name: "Acoustic Partition Divider", category: "Partitions & Space Dividers", sub: "Acoustic / sound-absorbing partitions", price: 14999, popular: 74, newest: 29, icon: "fa-volume-high" },

  // Technology Furniture
  { id: 30, name: "Server Rack Cabinet", category: "Technology Furniture", sub: "Server racks / IT cabinets", price: 29999, popular: 80, newest: 30, icon: "fa-server" },
  { id: 31, name: "Charging Station Device Cart", category: "Technology Furniture", sub: "Charging stations / mobile device carts", price: 19999, popular: 68, newest: 31, icon: "fa-battery-full" }
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
    tag.className = "office-tag";
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
    tag.className = "office-tag";
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
    card.className = "office-card";

    const msg = encodeURIComponent(`Hello NK Enterprises, I want enquiry for: ${p.name}`);
    const waLink = `https://wa.me/${whatsappNumber}?text=${msg}`;

    card.innerHTML = `
      <div class="office-thumb">
        <i class="fa-solid ${p.icon}"></i>
      </div>

      <div class="office-card-body">
        <p class="office-name">${p.name}</p>

        <div class="office-card-meta">
          <span><b>Category:</b> ${p.category}</span>
          <span><b>Type:</b> ${p.sub}</span>
        </div>

        <div class="office-price">${formatINR(p.price)}</div>

        <div class="office-actions">
          <button class="office-small-btn primary" type="button" data-view="${p.id}">
            View Details
          </button>

          <a class="office-small-btn" href="${waLink}" target="_blank" rel="noopener">
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
