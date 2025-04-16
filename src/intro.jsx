import React, { useEffect, useRef, useState } from "react";
import './App.css';
import { Link } from "react-router-dom";
import { NavBar } from './App.jsx'; 

function Intro({featuredRef}) {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [showMadeBy, setShowMadeBy] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Animate in text/buttons
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowWelcome(true);
                    setTimeout(() => setShowMadeBy(true), 600);
                    setTimeout(() => setShowButtons(true), 1200);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Scroll to featured if mobile and user scrolls near bottom
    useEffect(() => {
        if (!isMobile) return;

        const handleScroll = () => {
            const scrollY = containerRef.current.scrollTop;
            const height = containerRef.current.scrollHeight - containerRef.current.clientHeight;

            if (scrollY / height > 0.9) {
                const featuredSection = document.getElementById('featured');
                if (featuredSection) {
                    featuredSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const currentRef = containerRef.current;
        if (currentRef) currentRef.addEventListener('scroll', handleScroll);

        return () => {
            if (currentRef) currentRef.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    useEffect(() => {
        if (isMobile) {
          document.body.style.overflow = 'hidden';
        }
      
        return () => {
          document.body.style.overflow = 'auto'; // restore when unmounted
        };
      }, [isMobile]);
      


    return (
        <div id="intro" ref={containerRef} className={`intro ${isMobile ? 'mobile-intro' : ''}`}>
            <NavBar />
            <div className="main-head" ref={sectionRef}>
                <h4 className={`fade-up ${showWelcome ? 'show' : ''}`}>Welcome to</h4>
                <h2 className={`fade-up ${showMadeBy ? 'show' : ''}`}>Made by Dianna</h2>
                <p className={`fade-up ${showMadeBy ? 'show' : ''}`}>
                    I'm a computer science graduate with experience in building<br />
                    beautiful, user-friendly websites.
                </p>
                <div className={`button-grp fade-up ${showButtons ? 'show' : ''}`}>
                    <Link to='https://linkedin.com/in/DiannaD'><button>About Me</button></Link>
                </div>
            </div>
            {isMobile && (
                < div className="swipe">
                    <div
                    className="swipe-zone"
                    onTouchStart={(e) => (window._touchStartY = e.touches[0].clientY)}
                    onTouchEnd={(e) => {
                    const endY = e.changedTouches[0].clientY;
                    const diffY = window._touchStartY - endY;
                    if (diffY > 50 && featuredRef?.current) {
                        featuredRef.current.scrollIntoView({ behavior: 'smooth' });
                        document.body.style.overflow = 'auto'; // ✅ unlock scroll
                    }
                    }}

                    />
                    <div
                    className="scroll-hint"
                    onClick={() => {
                        if (featuredRef?.current) {
                        featuredRef.current.scrollIntoView({ behavior: 'smooth' });
                            document.body.style.overflow = 'auto';
                        }
                    }}
                    >
                    press me ↓
                    </div>
                </div>
                )}

        </div>
    );
}

export default Intro;
