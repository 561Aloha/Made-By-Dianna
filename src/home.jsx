import Intro from './intro';
import Featured from './featured';
import Tech from './tech';

import React, { useEffect, useRef, useState } from "react";

import './projects.css';
import Footer from './footer';


function Home() {
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
                className="fluid-canvas"
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    pointerEvents: 'auto',
                }}
                /> 
      <div className="home-content" ref={containerRef}>
                 
      <section className="intro-section">
        <Intro />
      </section>
      <section className="featured-section" id="featured">
        <Featured />
        </section>
        <Tech />

        <Footer/>
      </div>
    </div>
  );
}

export default Home;
