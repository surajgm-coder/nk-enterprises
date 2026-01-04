let projectsData = {};
let currentCategory = "all";

// Load JSON
fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {
    projectsData = data;
    renderGallery();
  });

// Render gallery
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  const projects = projectsData[currentCategory] || [];

  projects.slice(0, 4).forEach(project => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    item.innerHTML = `
      <img src="${project.cover}" alt="${project.title}">
      <div class="caption">${project.title}</div>
    `;

    grid.appendChild(item);
  });
}

// Filter buttons
document.querySelectorAll(".gallery-filters button").forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelectorAll(".gallery-filters button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderGallery();
  });
});
