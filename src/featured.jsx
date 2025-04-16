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
                    <h1>Project 1</h1>
                    <div className="techstack">
                        <div className="badge">ReactJS</div>
                        <div className="badge">Python</div>
                        <div className="badge">HTML</div>
                        <div className="badge">CSS</div>
                    </div>
                    <h5>
                        TaskFlow is a smart productivity web app designed for freelancers and creatives
                        to manage tasks, set deadlines, and visualize their weekly focus. 
                    </h5>

                    <div className="learnBtn" ref={sectionRef}>
                        <Link to='https://www.github.com/561Aloha'><img src={arrow} alt="Learn More Arrow" /></Link>
                        <Link to='https://www.github.com/561Aloha'><h4>Learn more</h4></Link>
                    </div>
                                        <div className={`button-grp fade-up ${showButtons ? 'show' : ''}`}>
                        <Link to='https://linkedin.com/in/DiannaD'><button>About Me</button></Link>
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
                    <img src={health} alt="Health Planner" />
                    <div className="box-text">
                        <h4>Health Planner Pro</h4>
                        <p>This is a react application, made for creating and tracking habits</p>
                    </div>
                    </div>
                <div className="box">
                    <img src={nature} alt="Nature Project" />
                    <div className="box-text">
                    <h4>Natures Way Cafe</h4>
                    <p>This is a UX design project, with high fidelity mockups</p></div>
                </div>
                <div className="box">
                    <img src={nurse} alt="Nurse App" />
                    <div className="box-text">
                    <h4>eNurse</h4>
                    <p>This is a Java based application, where adminstators and nurses manage shifts</p>   </div>
                </div>
                <div className="box">
                    <Link to='https://www.figma.com/slides/Bzbavt4OouWH6zYyLjbPau/Spotify?t=yIxfio1MyWTyZpgc-0'><img src={spotify} alt="Spotify Clone" /></Link>
                    <div className="box-text">
                    <h4>Spotify Redesign Presentation</h4>
                    <p>This contains a high fidelity mockups of introducing a new feature on spotify</p></div>
                </div>
            </div>


        </>
    );
}

export default Featured;
