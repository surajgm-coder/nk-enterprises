document.addEventListener("DOMContentLoaded", function () {

  /* ==========================
     MOBILE NAV TOGGLE
  ========================== */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".main-nav");
  const toggleIcon = document.querySelector(".hamburger");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");

      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !expanded);

      // Toggle icon
      toggleIcon.textContent = menu.classList.contains("active") ? "✕" : "☰";
    });

    // Close menu when clicking a link
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        toggleIcon.textContent = "☰";
        toggle.setAttribute("aria-expanded", "false");
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
