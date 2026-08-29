/**
 * Capri Ave - Dynamic Product Loader & Scroll Interaction Controller
 */

// 1. The Product Database (Update this array to add/remove items)
const clothingCollection = [
    {
        id: 1,
        name: "High-Waist Trousers",
        description: "Classic Elegance for Business",
        image: "./assets/garment-1.jpeg"
    },
    {
        id: 2,
        name: "The Sleek Polo",
        description: "Everyday Wear, Elevated",
        image: "./assets/garment-2.jpeg"
    },
    {
        id: 3,
        name: "The Statement Jacket",
        description: "A Timeless Fit",
        image: "./assets/garment-3.jpeg"
    },
    {
        id: 4,
        name: "Capri Ave Signature Top",
        description: "Instant Credibility",
        image: "./assets/garment-4.jpeg"
    },
    {
        id: 5,
        name: "Classic Track Suit",
        description: "Nostalgic Status Level",
        image: "./assets/garment-5.jpeg"
    },
    {
        id: 6,
        name: "Pleated Bottoms",
        description: "Simple Yet Credible",
        image: "./assets/garment-6.jpeg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 2. Background Color Transition Observer
    // ----------------------------------------------------------------------
    const body = document.getElementById('main-body');
    const heroSection = document.getElementById('hero');

    const heroObserverOptions = { root: null, threshold: 0.35 };

    const handleHeroScroll = (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                body.classList.remove('bg-white');
                body.classList.add('bg-vintageCream');
            } else {
                body.classList.remove('bg-vintageCream');
                body.classList.add('bg-white');
            }
        });
    };

    const heroObserver = new IntersectionObserver(handleHeroScroll, heroObserverOptions);
    if (heroSection) heroObserver.observe(heroSection);

    // ----------------------------------------------------------------------
    // 3. Generate Product Grid from Object
    // ----------------------------------------------------------------------
    const productGrid = document.getElementById('product-grid');

    function renderProducts() {
        if (!productGrid) return;

        clothingCollection.forEach((product, index) => {
            // Staggered animation delay based on column position
            const delayClass = index % 3 === 1 ? 'delay-100' : index % 3 === 2 ? 'delay-200' : '';

            const cardHTML = `
            <div class="fade-up-item opacity-0 translate-y-4 transition-all duration-700 ${delayClass} ease-out flex flex-col group cursor-pointer">
                <div class="aspect-[3/4] bg-gray-200 w-full overflow-hidden mb-6 relative">
                    <img src="${product.image}" alt="${product.name}" class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" loading="lazy">
                </div>
                <h3 class="text-xl font-sans font-bold text-gray-900 mb-1">${product.name}</h3>
                <p class="text-sm text-gray-500 font-sans mb-3">${product.description}</p>
                <a href="#contact" class="text-sm font-semibold text-capriBlue hover:text-blue-800 transition-colors">Inquire &rarr;</a>
            </div>
            `;

            productGrid.insertAdjacentHTML('beforeend', cardHTML);
        });

        // Initialize animations after cards are added to the DOM
        initializeFadeAnimations();
    }

    // ----------------------------------------------------------------------
    // 4. Fade-Up Animations for Product Cards
    // ----------------------------------------------------------------------
    function initializeFadeAnimations() {
        const fadeItems = document.querySelectorAll('.fade-up-item');
        const fadeObserverOptions = { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

        const handleFadeReveal = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target); // Run only once
                }
            });
        };

        const fadeObserver = new IntersectionObserver(handleFadeReveal, fadeObserverOptions);
        fadeItems.forEach(item => fadeObserver.observe(item));
    }

    // Run the render function
    renderProducts();
});