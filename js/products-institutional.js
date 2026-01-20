/* ==========================================
   Institutional Furniture Products - NK Enterprises
   File: js/products-institutional.js
   Features: Filter + Search + Sort + Clear + Tags + WhatsApp Enquiry
   ========================================== */

/* ---------------------------
   1) SAMPLE PRODUCT DATA
   Replace later with real products
--------------------------- */
const PRODUCTS = [
  // Educational / Classroom
  { id: 1,  name: "Student Desk (Single)", category: "Educational / Classroom Furniture", sub: "Student desks (single / double)", price: 2499, popular: 92, newest: 15, icon: "fa-school" },
  { id: 2,  name: "Classroom Chair (Stackable)", category: "Educational / Classroom Furniture", sub: "Classroom chairs (fixed / stackable)", price: 1199, popular: 88, newest: 20, icon: "fa-chair" },
  { id: 3,  name: "Computer Lab Table", category: "Educational / Classroom Furniture", sub: "Computer lab tables", price: 7999, popular: 80, newest: 12, icon: "fa-desktop" },
  { id: 4,  name: "Teacher Desk with Storage", category: "Educational / Classroom Furniture", sub: "Teacher desks", price: 8999, popular: 83, newest: 10, icon: "fa-chalkboard-user" },
  { id: 5,  name: "Locker Unit (6 Door)", category: "Educational / Classroom Furniture", sub: "Locker units", price: 15999, popular: 76, newest: 9, icon: "fa-box-archive" },

  // Library
  { id: 6,  name: "Library Shelving (Low)", category: "Libraries & Reading Rooms", sub: "Library shelving (high/low)", price: 12999, popular: 90, newest: 8, icon: "fa-book" },
  { id: 7,  name: "Study Carrel Desk", category: "Libraries & Reading Rooms", sub: "Study carrels", price: 6999, popular: 78, newest: 18, icon: "fa-book-open" },
  { id: 8,  name: "Periodical Rack Stand", category: "Libraries & Reading Rooms", sub: "Periodical racks", price: 3499, popular: 70, newest: 25, icon: "fa-newspaper" },

  // Healthcare
  { id: 9,  name: "Hospital Bed (Manual)", category: "Healthcare & Hospital Furniture", sub: "Hospital beds (manual / electric)", price: 28999, popular: 91, newest: 7, icon: "fa-hospital" },
  { id: 10, name: "Overbed Table", category: "Healthcare & Hospital Furniture", sub: "Overbed tables", price: 4499, popular: 79, newest: 14, icon: "fa-bed" },
  { id: 11, name: "Bedside Locker", category: "Healthcare & Hospital Furniture", sub: "Bedside lockers", price: 5999, popular: 75, newest: 16, icon: "fa-box" },
  { id: 12, name: "Waiting Room Seating (3-Seater)", category: "Healthcare & Hospital Furniture", sub: "Waiting room seating", price: 10999, popular: 82, newest: 11, icon: "fa-couch" },
  { id: 13, name: "Medicine Cabinet", category: "Healthcare & Hospital Furniture", sub: "Medicine cabinets", price: 6999, popular: 73, newest: 19, icon: "fa-kit-medical" },

  // Government / Office
  { id: 14, name: "Executive Office Desk", category: "Office & Government Institutions", sub: "Executive desks", price: 19999, popular: 89, newest: 6, icon: "fa-building-columns" },
  { id: 15, name: "Workstation Cubicle Setup", category: "Office & Government Institutions", sub: "Workstations / cubicles", price: 35999, popular: 84, newest: 5, icon: "fa-people-roof" },
  { id: 16, name: "Filing Cabinet (Vertical)", category: "Office & Government Institutions", sub: "Filing cabinets", price: 8999, popular: 77, newest: 13, icon: "fa-folder-open" },
  { id: 17, name: "Conference Table (8-Seater)", category: "Office & Government Institutions", sub: "Conference tables", price: 24999, popular: 86, newest: 4, icon: "fa-people-group" },

  // Auditorium
  { id: 18, name: "Auditorium Seating (Fixed)", category: "Auditorium / Lecture Hall Furniture", sub: "Auditorium seating (tiered / fixed)", price: 54999, popular: 81, newest: 3, icon: "fa-microphone" },
  { id: 19, name: "Lecture Podium", category: "Auditorium / Lecture Hall Furniture", sub: "Lecture podiums", price: 6999, popular: 72, newest: 21, icon: "fa-microphone-stand" },

  // Workshop
  { id: 20, name: "Industrial Workbench", category: "Workshop & Technical Training Furniture", sub: "Workbenches", price: 14999, popular: 85, newest: 2, icon: "fa-screwdriver-wrench" },
  { id: 21, name: "Tool Storage Cabinet", category: "Workshop & Technical Training Furniture", sub: "Tool storage cabinets", price: 9999, popular: 74, newest: 17, icon: "fa-toolbox" },

  // Cafeteria
  { id: 22, name: "Cafeteria Dining Table", category: "Cafeteria / Dining Hall Furniture", sub: "Dining tables (rectangular / round)", price: 12999, popular: 71, newest: 23, icon: "fa-utensils" },
  { id: 23, name: "Cafeteria Bench Seating", category: "Cafeteria / Dining Hall Furniture", sub: "Cafeteria chairs / benches", price: 7999, popular: 68, newest: 24, icon: "fa-chair" },

  // Preschool
  { id: 24, name: "Kids Table & Chair Set", category: "Daycare / Preschool Furniture", sub: "Low-height tables & chairs", price: 3999, popular: 87, newest: 22, icon: "fa-children" },
  { id: 25, name: "Playroom Shelving Unit", category: "Daycare / Preschool Furniture", sub: "Playroom shelving", price: 6999, popular: 66, newest: 26, icon: "fa-cubes" },

  // Meeting
  { id: 26, name: "Boardroom Chair", category: "Conference & Meeting Rooms", sub: "Boardroom chairs", price: 6499, popular: 69, newest: 27, icon: "fa-people-group" },

  // Hostel / Dormitory
  { id: 27, name: "Dormitory Bed (Metal)", category: "Hospitality & Institutional Housing", sub: "Dormitory beds", price: 10999, popular: 78, newest: 1, icon: "fa-bed" },

  // Factory Office
  { id: 28, name: "Industrial Workstation Desk", category: "Industrial / Factory Offices", sub: "Industrial workstations", price: 15999, popular: 73, newest: 28, icon: "fa-industry" },

  // Public Space
  { id: 29, name: "Indoor Bench Seating", category: "Common Area & Public Space Furniture", sub: "Benches (indoor / outdoor)", price: 8999, popular: 75, newest: 29, icon: "fa-tree-city" },

  // Specialty
  { id: 30, name: "Mobile Whiteboard Stand", category: "Specialty Institutional Furniture", sub: "Mobile whiteboards / partitions", price: 4999, popular: 67, newest: 30, icon: "fa-chalkboard" },
];

/* ---------------------------
   2) DOM ELEMENTS
--------------------------- */
const grid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const clearAllBtn = document.getElementById("clearAllBtn");
const activeFiltersEl = document.getElementById("activeFilters");

const filterCheckboxes = Array.from(
  document.querySelectorAll('input[type="checkbox"][data-filter="sub"]')
);

/* ---------------------------
   3) STATE
--------------------------- */
let selectedSubs = new Set();
let searchQuery = "";
let sortMode = "popular";

/* ---------------------------
   4) HELPERS
--------------------------- */
function formatINR(num){
  return "₹ " + Number(num).toLocaleString("en-IN");
}

function getFilteredProducts(){
  let list = [...PRODUCTS];

  // filter by selected subcategories
  if (selectedSubs.size > 0){
    list = list.filter(p => selectedSubs.has(p.sub));
  }

  // search filter
  if (searchQuery.trim().length > 0){
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q)
    );
  }

  // sorting
  if (sortMode === "popular"){
    list.sort((a,b) => b.popular - a.popular);
  } else if (sortMode === "newest"){
    list.sort((a,b) => b.newest - a.newest);
  } else if (sortMode === "priceLow"){
    list.sort((a,b) => a.price - b.price);
  } else if (sortMode === "priceHigh"){
    list.sort((a,b) => b.price - a.price);
  }

  return list;
}

function renderActiveFilterTags(){
  activeFiltersEl.innerHTML = "";

  // subcategory tags
  [...selectedSubs].forEach(sub => {
    const tag = document.createElement("div");
    tag.className = "inst-tag";
    tag.innerHTML = `
      ${sub}
      <button type="button" title="Remove">✕</button>
    `;

    tag.querySelector("button").addEventListener("click", () => {
      selectedSubs.delete(sub);

      // uncheck UI checkbox
      filterCheckboxes.forEach(cb => {
        if (cb.value === sub) cb.checked = false;
      });

      render();
    });

    activeFiltersEl.appendChild(tag);
  });

  // search tag
  if (searchQuery.trim()){
    const tag = document.createElement("div");
    tag.className = "inst-tag";
    tag.innerHTML = `
      Search: "${searchQuery}"
      <button type="button" title="Remove">✕</button>
    `;

    tag.querySelector("button").addEventListener("click", () => {
      searchQuery = "";
      searchInput.value = "";
      render();
    });

    activeFiltersEl.appendChild(tag);
  }
}

function renderProducts(list){
  grid.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "inst-card";

    // WhatsApp link (CHANGE YOUR NUMBER)
    const whatsappNumber = "916372352301"; // <-- CHANGE IF NEEDED
    const msg = encodeURIComponent(`Hello NK Enterprises, I want enquiry for: ${p.name}`);
    const waLink = `https://wa.me/${whatsappNumber}?text=${msg}`;

    card.innerHTML = `
      <div class="inst-thumb">
        <i class="fa-solid ${p.icon}"></i>
      </div>

      <div class="inst-card-body">
        <p class="inst-name">${p.name}</p>

        <div class="inst-card-meta">
          <span><b>Category:</b> ${p.category}</span>
          <span><b>Type:</b> ${p.sub}</span>
        </div>

        <div class="inst-price">${formatINR(p.price)}</div>

        <div class="inst-actions">
          <button class="inst-small-btn primary" type="button" data-view="${p.id}">
            View Details
          </button>

          <a class="inst-small-btn" href="${waLink}" target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
      </div>
    `;

    card.querySelector(`[data-view="${p.id}"]`).addEventListener("click", () => {
      alert(
        `Open product details page for:\n\n${p.name}\n\n` +
        `(Later you can link to: product-details.html?id=${p.id})`
      );
    });

    grid.appendChild(card);
  });
}

function render(){
  renderActiveFilterTags();

  const list = getFilteredProducts();
  resultsCount.textContent = `Showing ${list.length} product${list.length === 1 ? "" : "s"}`;

  if (list.length === 0){
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }

  renderProducts(list);
}

/* ---------------------------
   5) EVENTS
--------------------------- */
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

  // reset UI
  filterCheckboxes.forEach(cb => cb.checked = false);
  searchInput.value = "";
  sortSelect.value = "popular";

  render();
});

// Apply button (filters already instant, but keep for UI)
document.getElementById("applyBtn").addEventListener("click", render);

/* ---------------------------
   6) INIT
--------------------------- */
render();
