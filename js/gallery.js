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
   BUILD "ALL PROJECTS" AUTOMATICALLY
---------------------------------- */
function buildAllProjects(data) {
  const allProjects = [];

  Object.keys(data).forEach(category => {
    data[category].forEach(project => {
      allProjects.push(project);
    });
  });

  return {
    all: allProjects,
    ...data
  };
}

/* --------------------------------
   RENDER GALLERY WITH PAGINATION
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

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (prevBtn) prevBtn.disabled = currentPage === 0;
  if (nextBtn) nextBtn.disabled = start + itemsPerPage >= projects.length;
}

/* --------------------------------
   PAGINATION BUTTONS
---------------------------------- */
document.querySelector(".next")?.addEventListener("click", () => {
  currentPage++;
  renderGallery();
});

document.querySelector(".prev")?.addEventListener("click", () => {
  currentPage--;
  renderGallery();
});

/* --------------------------------
   CATEGORY FILTERS
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
   MODAL + SLIDER
---------------------------------- */
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

function openModal(media) {
  if (!media || !media.length) return; // SAFETY

  currentMedia = media;
  currentMediaIndex = 0;
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // LOCK SCROLL
  renderMedia();
}

function closeModal() {
  modal.classList.remove("active");
  modalContent.innerHTML = ""; modalContent.offsetHeight; // force reflow to reset animation
  document.body.style.overflow = ""; // UNLOCK SCROLL
}

function renderMedia() {
  modalContent.innerHTML = ""; modalContent.offsetHeight; // force reflow to reset animation
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
    img.alt = "";
    modalContent.appendChild(img);
  }

  document.querySelector(".modal-nav.prev").disabled =
    currentMediaIndex === 0;

  document.querySelector(".modal-nav.next").disabled =
    currentMediaIndex === currentMedia.length - 1;
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
   MOBILE SWIPE SUPPORT
---------------------------------- */
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

modal.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;
  if (Math.abs(swipeDistance) < 50) return;

  if (swipeDistance < 0 && currentMediaIndex < currentMedia.length - 1) {
    currentMediaIndex++;
    renderMedia();
  }

  if (swipeDistance > 0 && currentMediaIndex > 0) {
    currentMediaIndex--;
    renderMedia();
  }
}

/* --------------------------------
   KEYBOARD SUPPORT
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
