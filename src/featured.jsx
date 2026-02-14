import React, { useEffect, useState, useRef } from "react";
import "./css/featured.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import projVideo from "./assets/expand.mp4";
import flowerVid from "./assets/flower.mp4";

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
          <p>These are some of the projects I've built!</p>
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
            <h4>Zeno Habit Tracker</h4>
            <h5>
              Zeno is a full stack web application designed to help users maintain positive habits.
            </h5>
            <div className="button-group" style={{opacity: showButtons ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
            <a href="https://habittrack.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Visit Project</button>
            </a>
            <a href="https://github.com/561Aloha/Habit-Tracker/" target="_blank" rel="noopener noreferrer">
              <button>Visit Github</button>
            </a></div>
          </div>
        </div>

        <div className="featured">
          <div className="img-proj" ref={video2InViewRef}>
            <video
              ref={video2Ref}
              src={flowerVid}
              preload="auto"
              loop
              muted
              playsInline
              controls={false}
              style={{ width: "100%", display: "block", borderRadius: "12px" }}
            />
          </div>
          <div className={`leftProj ${rowInView ? "fade-in" : ""}`}>
            <h4>Bloom Notes</h4>
            <h5>
              Bloom notes is a modern flower bouquet generator,  designed for capturing messages to 
              send to others in a playful way. This is made with Typescript + React
            </h5>
            <div
              className="button-group"
              style={{
                opacity: showButtons ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <a
                href="https://bloomnotes.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visit Project</button>
              </a>

              <a
                href="https://github.com/561Aloha/bloomnotes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visit Github</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
