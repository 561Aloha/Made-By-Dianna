import React, { useEffect, useState, useRef } from "react";
import "./featured.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import projVideo from "./assets/expand.mp4";
import cryptoVid from "./assets/crypto.mp4";

function Featured() {
  const { ref: rowRef, inView: rowInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // individual refs + inView hooks for each video
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const { ref: video1InViewRef, inView: video1InView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const { ref: video2InViewRef, inView: video2InView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (rowInView) {
      setTimeout(() => setShowButtons(true), 300);
    }
  }, [rowInView]);

  // Autoplay / pause when videos come in/out of view
  useEffect(() => {
    if (video1Ref.current) {
      if (video1InView) {
        video1Ref.current.play().catch(err => console.log("Video 1 play error:", err));
      } else {
        video1Ref.current.pause();
      }
    }
  }, [video1InView]);

  useEffect(() => {
    if (video2Ref.current) {
      if (video2InView) {
        video2Ref.current.play().catch(err => console.log("Video 2 play error:", err));
      } else {
        video2Ref.current.pause();
      }
    }
  }, [video2InView]);

  return (
    <>
      <div className="proj-section">
        <div>
          <h3>Featured Projects</h3>
          <p>These are some of the projects I've worked on.</p>
        </div>
        <Link to="/projects">
          <button>View All</button>
        </Link>
      </div>

      <div className="row" ref={rowRef}>
        {/* First Project */}
        <div className="featured">
          <div className="img-proj" ref={video1InViewRef}>
            <video
              ref={video1Ref}
              src={projVideo}
              preload="auto"
              loop
              muted
              playsInline
              controls={false}
              style={{ width: "100%", display: "block", borderRadius: "12px" }}
            />
          </div>
          <div className={`leftProj ${rowInView ? "fade-in" : ""}`}>
            <h4>Expand Project</h4>
            <h5>
              Expand is a project that demonstrates autoplay videos triggered
              when scrolled into view.
            </h5>
            <a href="https://habittrack.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Visit Project</button>
            </a>
            <a href="https://github.com/561Aloha/Habit-Tracker/" target="_blank" rel="noopener noreferrer">
              <button>Visit Github</button>
            </a>
          </div>
        </div>

        {/* Second Project */}
        <div className="featured">
          <div className="img-proj" ref={video2InViewRef}>
            <video
              ref={video2Ref}
              src={cryptoVid}
              preload="auto"
              loop
              muted
              playsInline
              controls={false}
              style={{ width: "100%", display: "block", borderRadius: "12px" }}
            />
          </div>
          <div className={`leftProj ${rowInView ? "fade-in" : ""}`}>
            <h4>Crypto Hustle</h4>
            <h5>
              Crypto Hustle is a smart cryptocurrency web app designed for
              tracking your favorite coins and managing your portfolio with
              real-time updates.
            </h5>
            <a href="https://crypto-valley.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
            <a href="https://github.com/561Aloha/CryptoHustle" target="_blank" rel="noopener noreferrer">
              <button>View Github</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
