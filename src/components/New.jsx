import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects_1 } from "../data.js";
import { Link } from "react-router-dom";
import './new.css';

function ProjectCard({ project }) {
  return (
    <div className="new-project-card">
      <div className="new-project-image-wrap">
        <img
          src={project.coverImage}
          alt={project.title}
          className="new-project-image"
        />
      </div>
      <div className="new-project-content">

        <h2>{project.title}</h2>
        {project.summary && <p>{project.summary}</p>}
        <div className="new-project-links">
          <Link to={`/projects/${project.id}`} className="project-btn">
            View Case Study
          </Link>
          {project.link_web && (
            <a
              href={project.link_web}
              className="project-btn outline"
              target="_blank"
              rel="noreferrer"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function New() {
  const sectionRef = useRef(null);
  const firstFiveProjects = projects_1.slice(0, 5);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

const CARD_WIDTH = 520;
const GAP = 80;
const VIEWPORT_PADDING = window.innerWidth * 0.07;

const totalStripWidth =
  firstFiveProjects.length * CARD_WIDTH +
  (firstFiveProjects.length - 1) * GAP;

const totalShift =
  totalStripWidth - window.innerWidth + VIEWPORT_PADDING * 2;

const x = useTransform(scrollYProgress, [.1, 1], [0, -totalShift]);
return (
    <section className="new-scroll-section" ref={sectionRef}>
      <div className="new-sticky-shell">
        <div className="new-sticky-inner">

          <motion.div
            className="new-progress-bar"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />

          <div className="new-section-header">
            <h2 className="featured-section-h2">Selected Projects</h2>
            <p className="featured-section-p">These are some projects that I'm most proud of</p>
          </div>

          <div className="new-cards-viewport">
            <motion.div className="new-cards-strip" style={{ x }}>
              {firstFiveProjects.map((project, index) => (
                <ProjectCard key={project.id || index} project={project} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default New;