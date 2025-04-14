import React, { useState, useEffect, useRef } from "react";
import './lightbox.css';

function Lightbox() {
    const [isVisible, setIsVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const boxRef = useRef();

    const closeLightbox = () => {
        setFadeOut(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 500);
    };

    const handleClickOutside = (event) => {
        if (boxRef.current && !boxRef.current.contains(event.target)) {
            closeLightbox();
        }
    };

    const handleScroll = () => {
        if (isVisible) {
            closeLightbox();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        window.addEventListener("scroll", handleScroll, { once: true }); // Only run once on first scroll

        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            <div className="lightbox-overlay" />
            <div ref={boxRef} className={`lightbox-intro ${fadeOut ? "fade-out" : ""}`}>
                <h2>Hello, I’m Dianna 👋</h2>
                <p>
                    I’m a recent Computer Science graduate who designs and builds
                    beautiful, functional websites. As a full stack developer with a
                    passion for UX, I turn ideas into seamless digital experiences.
                </p>
                <p><strong>I’m currently available for hire.</strong></p>
            </div>
        </>
    );
}

export default Lightbox;
