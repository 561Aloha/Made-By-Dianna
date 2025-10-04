import React, { useEffect, useRef, useState } from "react";
import './App.css';
import './intro.css';
import { Link } from "react-router-dom";
import { NavBar } from './App.jsx'; 

function Intro({featuredRef}) {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [showMadeBy, setShowMadeBy] = useState(false);
    const [shouldShowMobileIntro, setShouldShowMobileIntro] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const wasMobile = isMobile;
            const nowMobile = window.innerWidth <= 768;
            setIsMobile(nowMobile);
            
            if (nowMobile) {
                // Check if we're in the intro section
                const introSection = document.getElementById('intro');
                const introHeight = introSection?.offsetHeight || window.innerHeight;
                const currentScroll = window.scrollY;
                
                // Only show mobile intro if we're in the top section
                if (currentScroll < introHeight * 0.8) {
                    setShouldShowMobileIntro(true);
                } else {
                    setShouldShowMobileIntro(false);
                }
            } else {
                setShouldShowMobileIntro(false);
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [isMobile]);

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
    useEffect(() => {
        if (!shouldShowMobileIntro) return;

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
    }, [shouldShowMobileIntro]);

    // Only lock body scroll if we should show mobile intro
    useEffect(() => {
        if (shouldShowMobileIntro) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
      
        return () => {
            document.body.style.overflow = 'auto'; // restore when unmounted
        };
    }, [shouldShowMobileIntro]);

    return (
        <div id="intro" ref={containerRef} className={`intro ${shouldShowMobileIntro ? 'mobile-intro' : ''}`}>
            <NavBar />
            <div className="main-head" ref={sectionRef}>
                <h4 className={`fade-up ${showWelcome ? 'show' : ''}`}>Welcome to</h4>
                <h2 className={`fade-up ${showMadeBy ? 'show' : ''}`}>Made by Dianna</h2>
                <p className={`fade-up ${showMadeBy ? 'show' : ''}`}>
                    I'm a computer science graduate with experience in building<br />
                    beautiful, user-friendly websites.
                </p>
                <div className={`button-grp fade-up ${showButtons ? 'show' : ''}`}>
                    <Link to='/about'><button>About Me</button></Link>
                </div>
            </div>
            
            {shouldShowMobileIntro && (
                <div className="swipe">
                    <div
                        className="swipe-zone"
                        onTouchStart={(e) => (window._touchStartY = e.touches[0].clientY)}
                        onTouchEnd={(e) => {
                            const endY = e.changedTouches[0].clientY;
                            const diffY = window._touchStartY - endY;
                            if (diffY > 50 && featuredRef?.current) {
                                featuredRef.current.scrollIntoView({ behavior: 'smooth' });
                                document.body.style.overflow = 'auto';
                                setShouldShowMobileIntro(false);
                            }
                        }}
                    />
                    <div
                        className="scroll-hint"
                        onClick={() => {
                            if (featuredRef?.current) {
                                featuredRef.current.scrollIntoView({ behavior: 'smooth' });
                                document.body.style.overflow = 'auto';
                                setShouldShowMobileIntro(false); 
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