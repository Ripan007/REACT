const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === slideIndex) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

showSlide(currentSlide);
