document.addEventListener("DOMContentLoaded", function () {

/* ==========================
     MOBILE NAV TOGGLE (FIXED)
  ========================== */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".header-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
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

  // Start with first slide
  if (slides.length > 0) {
    showSlide();
    setInterval(showSlide, 4000);
  }

});
