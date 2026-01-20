/* ==========================================
   Industrial Furniture Products - NK Enterprises
   File: js/products-industrial.js
   Features:
   - Filter by subcategory (checkbox)
   - Search products
   - Sort (popular/newest/price)
   - Clear all filters
   - Active filter tags (removable)
   - Product grid render
   ========================================== */

(() => {
  // ---------------------------
  // 1) SAMPLE PRODUCT DATA
  // Replace with real data later
  // ---------------------------
  const PRODUCTS = [
    // Workbenches & Industrial Tables
    { id: 1, name: "Heavy-Duty Workbench (Steel Frame)", group: "Workbenches & Industrial Tables", sub: "Heavy-duty workbenches", price: 24999, popular: 95, newest: 10, icon: "fa-table" },
    { id: 2, name: "Adjustable Height Workbench", group: "Workbenches & Industrial Tables", sub: "Adjustable height workbenches", price: 31999, popular: 86, newest: 12, icon: "fa-up-down" },
    { id: 3, name: "ESD Anti-Static Workbench", group: "Workbenches & Industrial Tables", sub: "ESD/anti-static workbenches", price: 38999, popular: 88, newest: 14, icon: "fa-bolt" },
    { id: 4, name: "Welding Bench (Heat Resistant)", group: "Workbenches & Industrial Tables", sub: "Welding benches", price: 27999, popular: 82, newest: 9, icon: "fa-fire" },
    { id: 5, name: "Assembly Table (Industrial Grade)", group: "Workbenches & Industrial Tables", sub: "Assembly tables", price: 22999, popular: 79, newest: 15, icon: "fa-screwdriver-wrench" },
    { id: 6, name: "Modular Table System", group: "Workbenches & Industrial Tables", sub: "Modular table systems", price: 45999, popular: 76, newest: 8, icon: "fa-cubes" },
    { id: 7, name: "Adjustable Tilt Table", group: "Workbenches & Industrial Tables", sub: "Adjustable tilt tables", price: 33999, popular: 70, newest: 7, icon: "fa-sliders" },

    // Industrial Seating
    { id: 8, name: "Operator Stool (Adjustable Height)", group: "Industrial Seating", sub: "Operator stools (fixed / adjustable height)", price: 4999, popular: 83, newest: 11, icon: "fa-chair" },
    { id: 9, name: "Ergonomic Industrial Chair", group: "Industrial Seating", sub: "Ergonomic industrial chairs", price: 8999, popular: 90, newest: 13, icon: "fa-chair" },
    { id: 10, name: "Mechanic Chair with Casters", group: "Industrial Seating", sub: "Mechanic chairs with casters", price: 7499, popular: 74, newest: 6, icon: "fa-wheelchair" },
    { id: 11, name: "Anti-Fatigue Mat + Stool Combo", group: "Industrial Seating", sub: "Anti-fatigue floor mats + stools", price: 6999, popular: 72, newest: 16, icon: "fa-person-standing" },
    { id: 12, name: "Heavy-Duty Industrial Bench", group: "Industrial Seating", sub: "Heavy-duty benches", price: 12999, popular: 68, newest: 5, icon: "fa-couch" },

    // Industrial Storage & Racking (Shelving & Racks)
    { id: 13, name: "Boltless Shelving Unit", group: "Industrial Storage & Racking", sub: "Boltless shelving", price: 11999, popular: 78, newest: 17, icon: "fa-layer-group" },
    { id: 14, name: "Heavy-Duty Steel Rack", group: "Industrial Storage & Racking", sub: "Heavy-duty steel racks", price: 19999, popular: 84, newest: 18, icon: "fa-warehouse" },
    { id: 15, name: "Pallet Racking System", group: "Industrial Storage & Racking", sub: "Pallet racking systems", price: 54999, popular: 80, newest: 4, icon: "fa-pallet" },
    { id: 16, name: "Cantilever Rack", group: "Industrial Storage & Racking", sub: "Cantilever racks", price: 45999, popular: 66, newest: 3, icon: "fa-grip-lines-vertical" },
    { id: 17, name: "Wire Shelving Rack", group: "Industrial Storage & Racking", sub: "Wire shelving", price: 9999, popular: 62, newest: 19, icon: "fa-border-all" },
    { id: 18, name: "Mobile Shelving Unit", group: "Industrial Storage & Racking", sub: "Mobile shelving units", price: 15999, popular: 60, newest: 20, icon: "fa-cart-flatbed" },

    // Cabinets & Lockers
    { id: 19, name: "Tool Storage Cabinet (Lockable)", group: "Industrial Storage & Racking", sub: "Tool storage cabinets", price: 17999, popular: 81, newest: 2, icon: "fa-toolbox" },
    { id: 20, name: "Steel Storage Cabinet (Industrial Grade)", group: "Industrial Storage & Racking", sub: "Storage cabinets (steel / industrial grade)", price: 14999, popular: 77, newest: 21, icon: "fa-box-archive" },
    { id: 21, name: "Flammable Safety Cabinet", group: "Industrial Storage & Racking", sub: "Flammable cabinets", price: 26999, popular: 69, newest: 22, icon: "fa-triangle-exclamation" },
    { id: 22, name: "Safety Storage Locker", group: "Industrial Storage & Racking", sub: "Safety storage lockers", price: 18999, popular: 71, newest: 23, icon: "fa-lock" },
    { id: 23, name: "Parts Bin Compartment Cabinet", group: "Industrial Storage & Racking", sub: "Parts bins / compartment cabinets", price: 13999, popular: 73, newest: 24, icon: "fa-boxes-stacked" },

    // Tool & Parts Organization
    { id: 24, name: "Rolling Tool Cart", group: "Tool & Parts Organization", sub: "Rolling tool carts", price: 10999, popular: 85, newest: 25, icon: "fa-cart-shopping" },
    { id: 25, name: "Tool Chest Cabinet (Multi Drawer)", group: "Tool & Parts Organization", sub: "Tool chests & tool cabinets", price: 22999, popular: 88, newest: 1, icon: "fa-toolbox" },
    { id: 26, name: "Small Parts Organizer Bins", group: "Tool & Parts Organization", sub: "Parts organizers (small parts bins)", price: 4999, popular: 67, newest: 26, icon: "fa-box" },
    { id: 27, name: "Pegboard Panel with Hooks", group: "Tool & Parts Organization", sub: "Pegboard panels with hooks", price: 3999, popular: 63, newest: 27, icon: "fa-grip" },
    { id: 28, name: "Wall Mounted Tool Rack", group: "Tool & Parts Organization", sub: "Wall-mounted tool racks", price: 6999, popular: 65, newest: 28, icon: "fa-screwdriver-wrench" },
    { id: 29, name: "Workstation Drawer Unit", group: "Tool & Parts Organization", sub: "Workstation drawer units", price: 12999, popular: 61, newest: 29, icon: "fa-database" },

    // Material Handling Furniture
    { id: 30, name: "Industrial Work Platform", group: "Material Handling Furniture", sub: "Work platforms", price: 14999, popular: 64, newest: 30, icon: "fa-person-walking" },
    { id: 31, name: "Utility Cart (Flatbed)", group: "Material Handling Furniture", sub: "Utility carts (flatbeds, bin carts)", price: 9999, popular: 72, newest: 31, icon: "fa-cart-flatbed" },
    { id: 32, name: "Drum Handling Cart", group: "Material Handling Furniture", sub: "Drum handling carts", price: 16999, popular: 58, newest: 32, icon: "fa-drum" },
    { id: 33, name: "Tilt Truck (Industrial)", group: "Material Handling Furniture", sub: "Tilt trucks", price: 17999, popular: 57, newest: 33, icon: "fa-truck" },
    { id: 34, name: "Manual Pallet Jack", group: "Material Handling Furniture", sub: "Pallet jacks (manual / electric)", price: 21999, popular: 59, newest: 34, icon: "fa-pallet" },
    { id: 35, name: "Mobile Work Platform Steps", group: "Material Handling Furniture", sub: "Mobile work platforms / steps", price: 18999, popular: 55, newest: 35, icon: "fa-stairs" },
    { id: 36, name: "Conveyor Workstation Table", group: "Material Handling Furniture", sub: "Conveyor workstations", price: 39999, popular: 56, newest: 36, icon: "fa-arrows-left-right" },

    // Packing & Shipping Furniture
    { id: 37, name: "Packing Table with Roll Holder", group: "Packing & Shipping Furniture", sub: "Packing tables with roll holders", price: 18999, popular: 74, newest: 37, icon: "fa-box" },
    { id: 38, name: "Carton Sealing Packing Station", group: "Packing & Shipping Furniture", sub: "Carton sealing/packing stations", price: 25999, popular: 71, newest: 38, icon: "fa-tape" },
    { id: 39, name: "Labeling Table Workstation", group: "Packing & Shipping Furniture", sub: "Labeling tables", price: 14999, popular: 60, newest: 39, icon: "fa-tag" },
    { id: 40, name: "Shipping Workstation Desk", group: "Packing & Shipping Furniture", sub: "Shipping workstations", price: 23999, popular: 62, newest: 40, icon: "fa-truck-fast" },
    { id: 41, name: "Conveyor Feed Table", group: "Packing & Shipping Furniture", sub: "Conveyor feed tables", price: 28999, popular: 54, newest: 41, icon: "fa-arrows-left-right" },

    // Maintenance & Utility Furniture
    { id: 42, name: "Industrial Sink / Wash Station", group: "Maintenance & Utility Furniture", sub: "Industrial sinks / wash stations", price: 17999, popular: 66, newest: 42, icon: "fa-faucet" },
    { id: 43, name: "Janitorial Storage Cabinet", group: "Maintenance & Utility Furniture", sub: "Janitorial storage cabinets", price: 12999, popular: 61, newest: 43, icon: "fa-broom" },
    { id: 44, name: "Mop & Drain Rack", group: "Maintenance & Utility Furniture", sub: "Mop/drain racks", price: 5999, popular: 50, newest: 44, icon: "fa-water" },
    { id: 45, name: "Employee Locker Unit", group: "Maintenance & Utility Furniture", sub: "Locker rooms / employee lockers", price: 19999, popular: 63, newest: 45, icon: "fa-lockers" },
    { id: 46, name: "Industrial Break Room Table Set", group: "Maintenance & Utility Furniture", sub: "Break room industrial tables & seating", price: 16999, popular: 52, newest: 46, icon: "fa-mug-hot" },

    // Industrial Office Furniture (Shop Floor)
    { id: 47, name: "Industrial Computer Desk", group: "Industrial Office Furniture (Shop Floor)", sub: "Industrial computer desks", price: 15999, popular: 69, newest: 47, icon: "fa-desktop" },
    { id: 48, name: "Operator Console Desk", group: "Industrial Office Furniture (Shop Floor)", sub: "Operator consoles", price: 18999, popular: 65, newest: 48, icon: "fa-keyboard" },
    { id: 49, name: "Steel File Cabinet (Heavy Duty)", group: "Industrial Office Furniture (Shop Floor)", sub: "File cabinets (steel heavy-duty)", price: 10999, popular: 64, newest: 49, icon: "fa-file-lines" },
    { id: 50, name: "Workstation Partition Panel", group: "Industrial Office Furniture (Shop Floor)", sub: "Workstation partitions", price: 9999, popular: 51, newest: 50, icon: "fa-border-all" },
    { id: 51, name: "Durable Standing Desk", group: "Industrial Office Furniture (Shop Floor)", sub: "Standing desks with durable tops", price: 21999, popular: 58, newest: 51, icon: "fa-person-standing" },

    // Safety & Compliance Add-ons
    { id: 52, name: "Fire Proof Cabinet", group: "Safety & Compliance Add-ons", sub: "Fire proof cabinets", price: 28999, popular: 70, newest: 52, icon: "fa-shield-halved" },
    { id: 53, name: "First Aid Station Cabinet", group: "Safety & Compliance Add-ons", sub: "First aid station cabinets", price: 8999, popular: 55, newest: 53, icon: "fa-kit-medical" },
    { id: 54, name: "Eye-Wash Station Bench", group: "Safety & Compliance Add-ons", sub: "Eye-wash station benches", price: 14999, popular: 49, newest: 54, icon: "fa-eye" },
    { id: 55, name: "Safety Signage Mount Stand", group: "Safety & Compliance Add-ons", sub: "Safety signage mounts", price: 4999, popular: 48, newest: 55, icon: "fa-triangle-exclamation" },

    // Outdoor / Yard Furniture
    { id: 56, name: "Outdoor Heavy-Duty Bench", group: "Outdoor / Yard Furniture", sub: "Heavy-duty benches (outdoor)", price: 9999, popular: 53, newest: 56, icon: "fa-tree" },
    { id: 57, name: "Outdoor Industrial Locker", group: "Outdoor / Yard Furniture", sub: "Outdoor industrial lockers", price: 24999, popular: 50, newest: 57, icon: "fa-lock" },
    { id: 58, name: "Canopy Work Table (Outdoor)", group: "Outdoor / Yard Furniture", sub: "Canopy work tables", price: 19999, popular: 47, newest: 58, icon: "fa-umbrella" },
    { id: 59, name: "Weather-Resistant Storage Unit", group: "Outdoor / Yard Furniture", sub: "Weather-resistant storage", price: 15999, popular: 46, newest: 59, icon: "fa-box-archive" },
  ];

  // ---------------------------
  // 2) DOM ELEMENTS
  // ---------------------------
  const grid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const activeFiltersEl = document.getElementById("activeFilters");
  const applyBtn = document.getElementById("applyBtn");

  const filterCheckboxes = Array.from(
    document.querySelectorAll('input[type="checkbox"][data-filter="sub"]')
  );

  // ---------------------------
  // 3) STATE
  // ---------------------------
  let selectedSubs = new Set();
  let searchQuery = "";
  let sortMode = "popular";

  // ---------------------------
  // 4) HELPERS
  // ---------------------------
  function formatINR(num) {
    return "₹ " + Number(num).toLocaleString("en-IN");
  }

  function getFilteredProducts() {
    let list = [...PRODUCTS];

    // filter by subcategory
    if (selectedSubs.size > 0) {
      list = list.filter((p) => selectedSubs.has(p.sub));
    }

    // search filter
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.group.toLowerCase().includes(q) ||
          p.sub.toLowerCase().includes(q)
      );
    }

    // sorting
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
    [...selectedSubs].forEach((sub) => {
      const tag = document.createElement("div");
      tag.className = "ind-tag";
      tag.innerHTML = `
        ${sub}
        <button title="Remove">✕</button>
      `;

      tag.querySelector("button").addEventListener("click", () => {
        selectedSubs.delete(sub);

        // uncheck checkbox
        filterCheckboxes.forEach((cb) => {
          if (cb.value === sub) cb.checked = false;
        });

        render();
      });

      activeFiltersEl.appendChild(tag);
    });

    // Search tag
    if (searchQuery.trim()) {
      const tag = document.createElement("div");
      tag.className = "ind-tag";
      tag.innerHTML = `
        Search: "${searchQuery}"
        <button title="Remove">✕</button>
      `;

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

    list.forEach((p) => {
      const card = document.createElement("div");
      card.className = "ind-card";

      // WhatsApp link (replace with your number)
      const whatsappNumber = "919999999999"; // <-- CHANGE
      const msg = encodeURIComponent(
        `Hello NK Enterprises, I want enquiry for: ${p.name}`
      );
      const waLink = `https://wa.me/${whatsappNumber}?text=${msg}`;

      card.innerHTML = `
        <div class="ind-thumb">
          <i class="fa-solid ${p.icon}"></i>
        </div>

        <div class="ind-card-body">
          <p class="ind-name">${p.name}</p>

          <div class="ind-card-meta">
            <span><b>Section:</b> ${p.group}</span>
            <span><b>Type:</b> ${p.sub}</span>
          </div>

          <div class="ind-price">${formatINR(p.price)}</div>

          <div class="ind-actions">
            <button class="ind-small-btn primary" data-view="${p.id}">View Details</button>
            <a class="ind-small-btn" href="${waLink}" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      `;

      card.querySelector(`[data-view="${p.id}"]`).addEventListener("click", () => {
        alert(
          `Open product details page for:\n\n${p.name}\n\n(You can link to: product-details.html?id=${p.id})`
        );
      });

      grid.appendChild(card);
    });
  }

  function render() {
    renderActiveFilterTags();

    const list = getFilteredProducts();

    resultsCount.textContent = `Showing ${list.length} product${
      list.length === 1 ? "" : "s"
    }`;

    if (list.length === 0) {
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";
    }

    renderProducts(list);
  }

  // ---------------------------
  // 5) EVENTS
  // ---------------------------
  filterCheckboxes.forEach((cb) => {
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
    filterCheckboxes.forEach((cb) => (cb.checked = false));
    searchInput.value = "";
    sortSelect.value = "popular";

    render();
  });

  // Apply button (filters already instant)
  if (applyBtn) applyBtn.addEventListener("click", render);

  // initial render
  render();
})();
