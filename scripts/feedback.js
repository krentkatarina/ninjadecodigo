
//feedback
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.feedback__slide');
const pagination = document.querySelector('.pagination');

let currentIndex = 0;
let totalSlides = slide.length;

for (let i = 0; i < totalSlides; i++) {
  const span = document.createElement('span');
  if (i === 0) span.classList.add('active');
  pagination.appendChild(span);
}

const bullets = document.querySelectorAll('.pagination span');

function updateSlider(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  bullets.forEach((bullet, i) => {
    bullet.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider(currentIndex);
}

let slideInterval = setInterval(nextSlide, 4000);

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    clearInterval(slideInterval);
    currentIndex = index;
    updateSlider(currentIndex);
    slideInterval = setInterval(nextSlide, 4000); 
  });
});