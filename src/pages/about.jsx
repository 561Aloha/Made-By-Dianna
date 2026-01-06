import React from 'react';
import '../css/aboutme.css';
import instagram from "../assets/instagram-b.png"
import linkedin from "../assets/linkedin-b.png"
import github from "../assets/github-b.png"
import me from "../assets/me.jpeg";
import { NavBar } from '../App';
import Resume from './resume';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-text">
      <h1>Hi I'm Dianna <span role="img" aria-label="waving hand">👋</span></h1>
      <h3>Designing in Figma, building in VS Studio</h3>
      <p>
        I'm someone who enjoys the entire process of creating digital products, from the initial design phase to the final development stage. I love bringing ideas to life through both design and code.
      <br/>
      <br></br>
      I've always had a entrepenueral mindset and enjoy the process of creating something from nothing.
      Out of highschool, I started a small business designing and selling custom swimwear.
      I needed to have several skills. Marketing, Production, Design, Customer Support,
      and execution.
      <br/>
      <br></br>
      <p>Since that experience 10 years ago, I've learned that I really enjoy the design and development process.
        I've since then studied UX and UI design, worked at the #1 beauty company in the USA, completed my BA in computer science,
        and have worked on several personal and freelance projects related to the software engineering space.
      </p>
      I'm currently looking for new opportunities to apply my skills and continue growing as a designer and developer.
      </p>
      <div className="social-icons">
          <img src={instagram}></img>
          <img src={linkedin}></img>
          <img src={github}></img>
          <a href="/resume.pdf" download="Dianna-Dimambro-Resume.pdf">
            <button type="button">Download Resume</button>
          </a>

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

  </div>
);

export default AboutMe;
