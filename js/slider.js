document.addEventListener("DOMContentLoaded", function () {

  /* ==========================
     MOBILE NAV TOGGLE
  ========================== */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");
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
