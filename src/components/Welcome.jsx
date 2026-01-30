import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ))
}

// defining the text weight for animation
const FONT_WEIGHT = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 },
}

// setting up the text bold effect on hover
const setupTextHover = (container, type) => {
    if (!container) return;

    const letters = container.querySelectorAll('span');

    // --- FIX STARTS HERE ---
    // We must select the specific config based on the 'type' argument
    const config = FONT_WEIGHT[type];
    const { min, max } = config;
    // --- FIX ENDS HERE ---

    // animate letters
    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: 'power2.out',
            fontVariationSettings: `'wght' ${weight}`,
        })
    }

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            // Calculate distance from mouse to center of the letter
            const distance = Math.abs(mouseX - (l - left + w / 2));

            // Create a bell curve intensity (0 to 1)
            const intensity = Math.exp(-(distance ** 2) / 2000);

            // Calculate new weight
            const newWeight = min + (max - min) * intensity;

            animateLetter(letter, newWeight);
        })
    }

    // Optional: Reset to default on mouse leave
    const handleMouseLeave = () => {
        letters.forEach((letter) => {
            animateLetter(letter, config.default, 0.5);
        });
    }

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function for useGSAP
    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
}

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const cleanup1 = setupTextHover(titleRef.current, 'title');
        const cleanup2 = setupTextHover(subtitleRef.current, 'subtitle');
        return () => {
            cleanup1?.();
            cleanup2?.();
        };
    }, [])
    return <section id='welcome'>
        <p ref={subtitleRef}>
            {
                renderText(`Hey, I'm Tarun Gajjalwar! Welcome to my`, "text-3xl font-georama", 100)
            }
        </p>
        <h1 ref={titleRef} className='mt-7'>
            {
                renderText("portfolio", "text-9xl italic font-georama")
            }
        </h1>

        <div className="small-screen">
            <p>This Portfolio is designed for desktop/tablet screens only.</p>
        </div>
    </section>
}

export default Welcome