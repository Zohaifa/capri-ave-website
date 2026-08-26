/**
 * Capri Ave - Scroll Interaction Controller
 * Handles background transitions using IntersectionObserver for maximum performance.
 */

document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('main-body');
    const heroSection = document.getElementById('hero');

    // Observer options
    const observerOptions = {
        root: null, // Uses the browser viewport
        threshold: 0.35 // Triggers when 35% of the hero is still visible
    };

    /**
     * Intersection callback to toggle between background shades
     * When Hero is leaving the screen, apply vintage cream to the body.
     */
    const handleHeroScroll = (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // User has scrolled down into the About section: Fade to vintage cream
                body.classList.remove('bg-white');
                body.classList.add('bg-vintageCream');
            } else {
                // User has scrolled back up to the Hero banner: Reset to crisp white
                body.classList.remove('bg-vintageCream');
                body.classList.add('bg-white');
            }
        });
    };

    // Instantiate and attach observer
    const heroObserver = new IntersectionObserver(handleHeroScroll, observerOptions);

    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});