import React from 'react';
import './aboutme.css';
import instagram from "./assets/instagram-b.png"
import linkedin from "./assets/linkedin-b.png"
import github from "./assets/github-b.png"
import me from "./assets/me.jpeg";
import { NavBar } from './App';

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

// const PortfolioSection = () => (
//   <section className="portfolio-section">
//     <h2>My Portfolio Work</h2>
//     <p>
//       As I continue to diversify my skills, you can click below to see some of my most recent portfolio work
//     </p>
//     <div className="portfolio-cards">
//       <div className="card">
//         <img src="/images/blog1.jpg" alt="Blog 1" />
//         <p>IN</p>
//       </div>
//       <div className="card">
//         <img src="/images/blog2.jpg" alt="Blog 2" />
//         <p>Grow Your Blog Community</p>
//       </div>
//       <div className="card">
//         <img src="/images/blog3.jpg" alt="Blog 3" />
//         <p>Design a Beautiful Blog</p>
//       </div>
//     </div>
//   </section>
// );

// const ClientFeature = () => (
//   <section className="client-feature">
//     <div className="client-image">
//       <img src="/images/kristen.jpg" alt="Kristen" />
//     </div>
//     <div className="client-bio">
//       <h3>Meet Kristen</h3>
//       <p>Registered Nurse, BCCNP</p>
//       <p>Holistic Nutritionist, NNCP</p>
//       <p>Photographer</p>
//       <p>Victoria, BC</p>
//       <p>
//         Hey guys, I'm Kristen, a nurse with a passion for healthy food and photography.
//         On a photography note, if you're new to the social media game and are looking for
//         dark + moody photos with a west coast flair to reflect yourself, your brand, or your product,
//         I'm your girl.
//       </p>
//       <button>Let's Connect</button>
//     </div>
//   </section>
// );

const AboutMe = () => (
  <div>

    <NavBar />
    <HeroSection />
    {/* <PortfolioSection />
    <ClientFeature /> */}
  </div>
);

export default AboutMe;
