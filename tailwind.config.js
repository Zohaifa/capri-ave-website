tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        capriBlue: '#1A91D0',
                        vintageCream: '#FDFBF7',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    animation: {
                        'marquee': 'marquee 25s linear infinite',
                    },
                    keyframes: {
                        marquee: {
                            '0%': { transform: 'translateX(0%)' },
                            /* Translates exactly half of the flex container to create a seamless loop */
                            '100%': { transform: 'translateX(-50%)' }, 
                        }
                    }
                }
            }
        }