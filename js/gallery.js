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

/* --------------------------------
   PAGINATION BUTTONS
---------------------------------- */
document.querySelector(".next").onclick = () => {
  currentPage++;
  renderGallery();
};

document.querySelector(".prev").onclick = () => {
  currentPage--;
  renderGallery();
};

/* --------------------------------
   CATEGORY FILTERS
---------------------------------- */
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

/* --------------------------------
   MODAL + SLIDER
---------------------------------- */
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
/* --------------------------------
   MOBILE SWIPE SUPPORT (MODAL)
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

  // Minimum swipe distance (px)
  if (Math.abs(swipeDistance) < 50) return;

  // Swipe left → next
  if (swipeDistance < 0 && currentMediaIndex < currentMedia.length - 1) {
    currentMediaIndex++;
    renderMedia();
  }

  // Swipe right → prev
  if (swipeDistance > 0 && currentMediaIndex > 0) {
    currentMediaIndex--;
    renderMedia();
  }
}
/* --------------------------------
   KEYBOARD SUPPORT (MODAL)
---------------------------------- */
document.addEventListener("keydown", e => {
  // Only work when modal is open
  if (!modal.classList.contains("active")) return;

  // ESC → close modal
  if (e.key === "Escape") {
    closeModal();
  }

  // RIGHT ARROW → next media
  if (e.key === "ArrowRight" && currentMediaIndex < currentMedia.length - 1) {
    currentMediaIndex++;
    renderMedia();
  }

  // LEFT ARROW → previous media
  if (e.key === "ArrowLeft" && currentMediaIndex > 0) {
    currentMediaIndex--;
    renderMedia();
  }
});
