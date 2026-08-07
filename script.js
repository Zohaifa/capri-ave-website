const avenueWrapper = document.getElementById('avenue-wrapper');
    // Find our new finish line
    const targetSection = document.getElementById('target-grayscale');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Calculate the distance from the top of the page to the 70s section.
        // We subtract (window.innerHeight / 2) so that it hits 100% grayscale 
        // right when the 70s section reaches the middle of the user's screen.
        let maxEffectScroll = targetSection.offsetTop - (window.innerHeight / 2);
        
        // Prevent math errors if the page is too short on massive monitors
        if (maxEffectScroll <= 0) maxEffectScroll = 1; 
        
        // Calculate the percentage (capped at 1)
        const scrollPercentage = Math.min(scrollPosition / maxEffectScroll, 1);
        
        // Apply the grayscale filter
        avenueWrapper.style.filter = `grayscale(${scrollPercentage * 100}%)`;
    });