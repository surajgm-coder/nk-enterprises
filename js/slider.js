<script>
document.addEventListener("DOMContentLoaded", function () {

  /* ==========================
     MOBILE NAV TOGGLE
  ========================== */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".header-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }

  /* ==========================
     HEADER FIX + FADE ON SCROLL
  ========================== */
  const header = document.querySelector(".site-header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
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
</script>
