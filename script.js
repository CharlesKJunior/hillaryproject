document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Adjust the interval (in milliseconds) to control the speed of the carousel
    const interval = 4000; // 3 seconds

    // Start the automatic carousel
    const carouselInterval = setInterval(nextSlide, interval);

    // Stop the automatic carousel when the page is not in focus (optional)
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            clearInterval(carouselInterval);
        } else {
            // Resume carousel when the page becomes visible again
            carouselInterval = setInterval(nextSlide, interval);
        }
    });

    // Show the initial slide
    showSlide(currentIndex);
});