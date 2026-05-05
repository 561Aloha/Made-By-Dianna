import Intro from '../intro';

import Tech from '../tech';
import AboutPreview2 from '../components/AboutPreview2';
import Footer from '../footer';
import React, { useEffect, useRef } from "react";
import '../css/intro.css';
import New from '../components/New'
import LetsWorkTogether from '../components/LetsWorkTogether';
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
                <div className="featured-sticky">
                <New />
                </div>
    
                <AboutPreview2/>        

                <LetsWorkTogether/>
            </section>
            </div>

            <div 
                onMouseMove={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                onKeyUp={(e) => e.stopPropagation()}
                style={{ position: 'relative', zIndex: 10 }}
                ></div>

            <Footer transparent={true} />
        </div>

    </div>
    );
}

export default Home;