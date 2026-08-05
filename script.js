// Target the wrapper element
const avenueWrapper = document.getElementById('avenue-wrapper');

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
    // How far the user has scrolled down from the top
    const scrollPosition = window.scrollY;

    // The total scrollable height of the document minus the window height
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the percentage scrolled (from 0.0 at the top to 1.0 at the bottom)
    // Math.min ensures it never exceeds 1 (100%)
    const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);

    // Apply the grayscale filter. 
    // At top: grayscale(0%), at bottom: grayscale(100%)
    avenueWrapper.style.filter = `grayscale(${scrollPercentage * 100}%)`;
});