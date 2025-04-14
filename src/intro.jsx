// import React, { useEffect, useRef, useState } from "react";
// import './App.css';
// import { Link } from "react-router-dom";
// import { NavBar } from './App.jsx'; 

// function Intro() {
//     const sectionRef = useRef(null);
//     const canvasRef = useRef(null);
//     const containerRef = useRef(null);
    
//     const [showButtons, setShowButtons] = useState(false);
//     const [showWelcome, setShowWelcome] = useState(false);
//     const [showMadeBy, setShowMadeBy] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setShowWelcome(true);
//                     setTimeout(() => setShowMadeBy(true), 600);
//                     setTimeout(() => setShowButtons(true), 1200);
//                     observer.unobserve(entry.target);
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     useEffect(() => {
//         const fluidScript = document.createElement('script');
//         fluidScript.src = '/script.js';
//         fluidScript.async = true;

//         fluidScript.onload = () => {
//             if (window.initFluidSimulation && canvasRef.current && containerRef.current) {
//                 window.initFluidSimulation(canvasRef.current, containerRef.current);
//             }
//         };

//         document.body.appendChild(fluidScript);
//         return () => {
//             if (document.body.contains(fluidScript)) {
//                 document.body.removeChild(fluidScript);
//             }
//         };
//     }, []);

//     return (
//         <div id="intro" ref={containerRef} className="intro">
//             <NavBar />
//             <div className="main-head" ref={sectionRef}>
//                 <h4 className={`fade-up ${showWelcome ? 'show' : ''}`}>Welcome to</h4>
//                 <h2 className={`fade-up ${showMadeBy ? 'show' : ''}`}>Made by Dianna</h2>
//                 <p className={`fade-up ${showMadeBy ? 'show' : ''}`}>
//                     I'm a computer science graduate with experience in building<br />
//                     beautiful, user-friendly websites.
//                 </p>
//                 <div className={`button-grp fade-up ${showButtons ? 'show' : ''}`}>
//                     <Link to='https://linkedin.com/in/DiannaD'><button>Get in Touch</button></Link>
//                     <button>My Resume</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Intro;
