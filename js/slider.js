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
let slides = document.querySelectorAll('.hero-slide');
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000);
