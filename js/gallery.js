let projectsData = {};
let currentCategory = "all";
let currentPage = 0;
const itemsPerPage = 4;

// Load JSON
fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {
    projectsData = data;
    renderGallery();
  });

// Render gallery with pagination
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  const projects = projectsData[currentCategory] || [];
  const start = currentPage * itemsPerPage;
  const visibleProjects = projects.slice(start, start + itemsPerPage);

  visibleProjects.forEach(project => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    item.innerHTML = `
      <img src="${project.cover}" alt="${project.title}">
      <div class="caption">${project.title}</div>
    `;

    grid.appendChild(item);
  });

  // Enable / disable buttons
  document.querySelector(".prev").disabled = currentPage === 0;
  document.querySelector(".next").disabled =
    start + itemsPerPage >= projects.length;
}

// NEXT button
document.querySelector(".next").addEventListener("click", () => {
  currentPage++;
  renderGallery();
});

// PREV button
document.querySelector(".prev").addEventListener("click", () => {
  currentPage--;
  renderGallery();
});

// Category filter buttons
document.querySelectorAll(".gallery-filters button").forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelectorAll(".gallery-filters button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    currentPage = 0; // reset pagination
    renderGallery();
  });
});
