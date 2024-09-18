const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; // Loop back to last slide
    }
    slideImage();
};

const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; // Loop back to first slide
    }
    slideImage();
};

const slideImage = () => {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// popup///////////////////
// Get modal and trigger elements
const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

// Open modal on button click
openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal on close button click
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});



