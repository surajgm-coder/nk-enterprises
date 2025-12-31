document.addEventListener("DOMContentLoaded", function () {

  /* ==========================
     MOBILE NAV TOGGLE
  ========================== */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".main-nav");
  const toggleIcon = document.querySelector(".hamburger");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("active");

      toggle.setAttribute("aria-expanded", isOpen);
      if (toggleIcon) {
        toggleIcon.textContent = isOpen ? "✕" : "☰";
      }
    });

    // Close menu when clicking any nav link
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        if (toggleIcon) {
          toggleIcon.textContent = "☰";
        }
      });
    });
  }

  /* ==========================
     HERO SLIDER
  ========================== */
  const slides = document.querySelectorAll(".hero-slide");
  let index = 0;

  function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  }

  if (slides.length > 0) {
    showSlide();
    setInterval(showSlide, 4000);
  }

});
