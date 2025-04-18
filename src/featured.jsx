import React, { useEffect, useRef, useState } from "react";
import './featured.css';
import { Link } from "react-router-dom";
import projImg from './assets/projImg.png';
import nurse from './assets/eNurse.png';
import nature from './assets/nature.png';
import portfolio from './assets/portfolio.png';
import health from './assets/health.png';
import spotify from './assets/spotify.png';
import arrow from './assets/arrow-right.png';
import { useInView } from 'react-intersection-observer';


function Featured() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
      });
    const sectionRef = useRef(null);
    const [showButtons, setShowButtons] = useState(false);
      useEffect(() => {
          const observer = new IntersectionObserver(
              ([entry]) => {
                  if (entry.isIntersecting) {
                      setShowWelcome(true);
                      setTimeout(() => setShowButtons(true), 600);
                      observer.unobserve(entry.target);
                  }
              },
              { threshold: 0.1 }
          );
  
          if (sectionRef.current) observer.observe(sectionRef.current);
          return () => observer.disconnect();
      }, []);

    return (
        <>
            <div className="featured" ref={ref}>
                <div className={`leftProj ${inView ? 'fade-in' : ''}`}>
                    <h1>Crypto Hustle</h1>

                    <h5>
                        Crypto Hustle is a smart crypto currrency web app designed for tracking your favorite coins.
                    </h5>
                    <Link to='https://www.github.com/561Aloha'><button > Learn more</button></Link>
                        <div className={`button-grp fade-up ${showButtons ? 'show' : ''}`}>
                   </div>

                </div>

                <div className={`rightProj ${inView ? 'fade-in' : ''}`}>
                    <img src={projImg} alt="Project Preview" />
                </div>
            </div>

            {/* Other Projects */}
            <div className="proj-section">
                <h3>Other Projects</h3>
                <Link to="/projects"><button>View All</button></Link>
            </div>
            <div className="x">

                <div className="box">
                    <Link to='https://github.com/561Aloha/Nurse-Management'><img src={nurse} alt="Nurse App" /></Link>
                    <div className="box-text">
                    <h4>eNurse</h4>
                    <p>This is a Java based application, where adminstators and nurses manage shifts</p>   </div>
                </div>
                <div className="box">
                    <Link to='https://www.figma.com/slides/Bzbavt4OouWH6zYyLjbPau/Spotify?t=yIxfio1MyWTyZpgc-0'><img src={spotify} alt="Spotify Clone" /></Link>
                    <div className="box-text">
                    <h4>Spotify Redesign Presentation</h4>
                    <p>This contains a high fidelity mockups of introducing a new feature on spotify</p></div>
                </div>\                
                <div className="box">
                    <Link to ='/naturesway'><img src={nature} alt="Nature Project" /></Link>
                    <div className="box-text">
                    <h4>Natures Way Cafe</h4>
                    <p>This is a UX design project, with high fidelity mockups</p></div>
                </div>
                <div className="box">
                <Link to="https://habittrack.netlify.app/"> <img src={health} alt="Health Planner" /></Link>
                    <div className="box-text">
                        <h4>Health Planner Pro</h4>
                        <p>This is a react application, made for creating and tracking habits</p>
                    </div>
                    </div>
            </div>


        </>
    );
}

export default Featured;
