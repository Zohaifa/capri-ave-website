/**
 * Capri Ave - Scroll Interaction Controller
 * Handles background transitions and scroll reveals using IntersectionObserver.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Background Color Transition Observer
    // ----------------------------------------------------------------------
    const body = document.getElementById('main-body');
    const heroSection = document.getElementById('hero');

    const heroObserverOptions = {
        root: null,
        threshold: 0.35 // Trigger when 35% of the hero is still visible
    };

    const handleHeroScroll = (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // Fade to vintage cream when leaving the hero
                body.classList.remove('bg-white');
                body.classList.add('bg-vintageCream');
            } else {
                // Return to crisp white when at the top
                body.classList.remove('bg-vintageCream');
                body.classList.add('bg-white');
            }
        });
    };

    const heroObserver = new IntersectionObserver(handleHeroScroll, heroObserverOptions);
    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // ----------------------------------------------------------------------
    // 2. Fade-Up Animation Observer for Product Cards
    // ----------------------------------------------------------------------
    // Select all elements that have the 'fade-up-item' class
    const fadeItems = document.querySelectorAll('.fade-up-item');

    const fadeObserverOptions = {
        root: null,
        threshold: 0., // Trigger as soon as 10% of the card is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before the item actually hits the bottom of the viewport
    };  

    const handleFadeReveal = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the hidden state classes
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                // Add the visible state classes
                entry.target.classList.add('opacity-100', 'translate-y-0');
                
                // Stop observing the item once it has been revealed (runs only once per refresh)
                observer.unobserve(entry.target);
            }
        });
    };

    const fadeObserver = new IntersectionObserver(handleFadeReveal, fadeObserverOptions);
    
    // Attach the observer to each product card
    fadeItems.forEach(item => {
        fadeObserver.observe(item);
    });
});