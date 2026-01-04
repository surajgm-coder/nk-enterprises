let projectsData = {};
let currentCategory = "all";
let currentPage = 0;
const itemsPerPage = 4;

// Modal slider state
let currentMedia = [];
let currentMediaIndex = 0;

fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {
    projectsData = data;
    renderGallery();
  });

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  const projects = projectsData[currentCategory] || [];
  const start = currentPage * itemsPerPage;
  const visible = projects.slice(start, start + itemsPerPage);

  visible.forEach(project => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    item.innerHTML = `
      <img src="${project.cover}" alt="${project.title}">
      <div class="caption">${project.title}</div>
    `;

    item.addEventListener("click", () => openModal(project.media));
    grid.appendChild(item);
  });

  document.querySelector(".prev").disabled = currentPage === 0;
  document.querySelector(".next").disabled =
    start + itemsPerPage >= projects.length;
}

// Pagination
document.querySelector(".next").onclick = () => {
  currentPage++;
  renderGallery();
};

document.querySelector(".prev").onclick = () => {
  currentPage--;
  renderGallery();
};

// Filters
document.querySelectorAll(".gallery-filters button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".gallery-filters button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    currentPage = 0;
    renderGallery();
  };
});

// ---------- MODAL ----------
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

function openModal(media) {
  currentMedia = media;
  currentMediaIndex = 0;
  modal.classList.add("active");
  renderMedia();
}

function closeModal() {
  modal.classList.remove("active");
  modalContent.innerHTML = "";
}

function renderMedia() {
  modalContent.innerHTML = "";
  const src = currentMedia[currentMediaIndex];

  if (src.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    modalContent.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    modalContent.appendChild(img);
  }

  document.querySelector(".modal-nav.prev").disabled =
    currentMediaIndex === 0;

  document.querySelector(".modal-nav.next").disabled =
    currentMediaIndex === currentMedia.length - 1;
}

document.querySelector(".modal-nav.next").onclick = () => {
  currentMediaIndex++;
  renderMedia();
};

document.querySelector(".modal-nav.prev").onclick = () => {
  currentMediaIndex--;
  renderMedia();
};

document.querySelector(".modal-close").onclick = closeModal;

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
