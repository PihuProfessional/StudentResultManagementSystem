const slider = document.querySelector('.slider');
let slideIndex = 0;

function showNextSlide() {
    slideIndex++;
    if (slideIndex >= 3) {
        slideIndex = 0;
    }
    // Shifts the slider left by 100% of the screen width per index
    slider.style.transform = `translateX(-${slideIndex * 100}vw)`;
}

// Change slide every 4 seconds
setInterval(showNextSlide, 4000);