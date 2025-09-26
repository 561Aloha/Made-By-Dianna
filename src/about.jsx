import React from 'react';
import './aboutme.css';
import instagram from "./assets/instagram-b.png"
import linkedin from "./assets/linkedin-b.png"
import github from "./assets/github-b.png"
import me from "./assets/me.jpeg";
import { NavBar } from './App';
import Experience from './experience';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-text">
      <h1>Hi I'm Dianna <span role="img" aria-label="waving hand">👋</span></h1>
      <h2>I'm a Junior Software Developer</h2>
      <p>
        I'm a recent as a computer science graduateat Florida Atlantic University
        and sharing my knowledge in software development. In my free time,
        I'm learning about UX/UI to become a better programmer and creating
        3D models that can be used in the metaverse!
      </p>
      <div className="social-icons">
  
                <img src={instagram}></img>
                <img src={linkedin}></img>
                <img src={github}></img>
   
      </div>
    </div>
    <div className="hero-image">
      <img src={me} alt="Dianna" />
    </div>
  </section>
);


const AboutMe = () => (
  <div>

    <NavBar />
    <HeroSection />
    <Experience />
  </div>
);

export default AboutMe;
