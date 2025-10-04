import Intro from './intro';
import Featured from './featured';
import Tech from './tech';;
import Footer from './footer';
import React, { useEffect, useRef } from "react";
import './intro.css';
import ScrollingCarousel from './ScrollingCarousel';
import UxHome from './uxdesign/projectitems';

function Home() {
    const featuredRef = useRef(null);
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const initFluid = () => {
            if (window.initFluidSimulation && canvasRef.current && containerRef.current) {
                window.initFluidSimulation(canvasRef.current, containerRef.current);
            }
        };

        if (document.readyState === 'complete') {
            initFluid();
        } else {
            window.addEventListener('load', initFluid);
            return () => window.removeEventListener('load', initFluid);
        }
    }, []);
    return (
        <div>
        <div className="home-background" ref={containerRef}>
            <canvas className="home-fluid-canvas" ref={canvasRef} />
            <div className="home-content">
                <section className="intro-section">
                    <Intro featuredRef={featuredRef} />
                </section>
                <section className="featured-section" id="featured" ref={featuredRef}>
                <Featured />
                </section>
                <Tech />

            </div>
            <UxHome/>
            <Footer transparent={true} />
        </div>

    </div>
    );
}

export default Home;