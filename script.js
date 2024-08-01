const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

document.querySelector('.left-arrow').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateSlider();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    if (currentIndex === totalSlides - 1) {
        slides[currentIndex].classList.add('center-product');
    } else {
        slides.forEach(slide => slide.classList.remove('center-product'));
    }
}

// Automatically change slide every 5 seconds
setInterval(() => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}, 3000); // 5000 milliseconds = 5 seconds


