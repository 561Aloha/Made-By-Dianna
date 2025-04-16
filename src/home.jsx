import Intro from './intro';
import Featured from './featured';
import Tech from './tech';

import React, { useEffect, useRef, useState } from "react";

import './intro.css';
import Footer from './footer';


function Home() {
    const featuredRef = useRef(null);
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

        useEffect(() => {
            const fluidScript = document.createElement('script');
            fluidScript.src = '/script.js';
            fluidScript.async = true;
    
            fluidScript.onload = () => {
                if (window.initFluidSimulation && canvasRef.current && containerRef.current) {
                    window.initFluidSimulation(canvasRef.current, containerRef.current);
                } 
            };
    
            document.body.appendChild(fluidScript);
            return () => {
                if (document.body.contains(fluidScript)) {
                    document.body.removeChild(fluidScript);
                }
            };
        }, []);

      
 return (
    <div className="home-background" ref={containerRef}>
      <canvas
        className="home-fluid-canvas" ref={canvasRef}
      />
      <div className="home-content">
        <section className="intro-section">
          <Intro featuredRef={featuredRef} />
        </section>
        <section className="featured-section" id="featured" ref={featuredRef}>
          <Featured />
        </section>
        <Tech />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
