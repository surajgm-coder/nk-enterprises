let projectsData = {};
let currentCategory = "all";
let currentPage = 0;
const itemsPerPage = 4;

// Modal state
let currentMedia = [];
let currentMediaIndex = 0;

// Load JSON
fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {
    projectsData = buildAllProjects(data);
    renderGallery();
  });

/* --------------------------------
   BUILD "ALL PROJECTS"
---------------------------------- */
function buildAllProjects(data) {
  const allProjects = [];
  Object.keys(data).forEach(cat => {
    data[cat].forEach(p => allProjects.push(p));
  });
  return { all: allProjects, ...data };
}

/* --------------------------------
   RENDER GALLERY
---------------------------------- */
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const projects = projectsData[currentCategory] || [];
  const start = currentPage * itemsPerPage;
  const visible = projects.slice(start, start + itemsPerPage);

  visible.forEach(project => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="${project.cover}" alt="${project.title}" loading="lazy">
      <div class="caption">${project.title}</div>
    `;
    item.addEventListener("click", () => openModal(project.media));
    grid.appendChild(item);
  });

  const prevBtn = document.querySelector(".gallery-pagination-wrapper .prev");
  const nextBtn = document.querySelector(".gallery-pagination-wrapper .next");

  if (prevBtn) prevBtn.disabled = currentPage === 0;
  if (nextBtn) nextBtn.disabled = start + itemsPerPage >= projects.length;
}

/* --------------------------------
   PAGINATION
---------------------------------- */
document.querySelector(".gallery-pagination-wrapper .next")
  ?.addEventListener("click", () => {
    currentPage++;
    renderGallery();
  });

document.querySelector(".gallery-pagination-wrapper .prev")
  ?.addEventListener("click", () => {
    currentPage--;
    renderGallery();
  });

/* --------------------------------
   FILTERS
---------------------------------- */
document.querySelectorAll(".gallery-filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".gallery-filters button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    currentPage = 0;
    renderGallery();
  });
});

/* --------------------------------
   MODAL
---------------------------------- */
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

function openModal(media) {
  if (!media || !media.length) return;
  currentMedia = media;
  currentMediaIndex = 0;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  renderMedia();
}

function closeModal() {
  modal.classList.remove("active");
  modalContent.innerHTML = "";
  document.body.style.overflow = "";
}

function renderMedia() {
  modalContent.innerHTML = "";
  modalContent.offsetHeight;

  const src = currentMedia[currentMediaIndex];

  if (src.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
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

  const nextIndex = currentMediaIndex + 1;
  if (currentMedia[nextIndex] && !currentMedia[nextIndex].endsWith(".mp4")) {
    const preload = new Image();
    preload.src = currentMedia[nextIndex];
  }
}

document.querySelector(".modal-nav.next").onclick = () => {
  if (currentMediaIndex < currentMedia.length - 1) {
    currentMediaIndex++;
    renderMedia();
  }
};

document.querySelector(".modal-nav.prev").onclick = () => {
  if (currentMediaIndex > 0) {
    currentMediaIndex--;
    renderMedia();
  }
};

document.querySelector(".modal-close").onclick = closeModal;

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

/* --------------------------------
   SWIPE
---------------------------------- */
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

modal.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  const dist = touchEndX - touchStartX;
  if (Math.abs(dist) < 50) return;

  if (dist < 0 && currentMediaIndex < currentMedia.length - 1) {
    currentMediaIndex++;
    renderMedia();
  }

  if (dist > 0 && currentMediaIndex > 0) {
    currentMediaIndex--;
    renderMedia();
  }
}, { passive: true });

/* --------------------------------
   KEYBOARD
---------------------------------- */
document.addEventListener("keydown", e => {
  if (!modal.classList.contains("active")) return;

  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight" && currentMediaIndex < currentMedia.length - 1) {
    currentMediaIndex++;
    renderMedia();
  }
  if (e.key === "ArrowLeft" && currentMediaIndex > 0) {
    currentMediaIndex--;
    renderMedia();
  }
});
