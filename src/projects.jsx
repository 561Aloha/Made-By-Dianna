import React, { useEffect, useMemo, useRef, useState } from "react";
import "./css/projects.css";

import arrow from "./assets/link-external.png";
import catWorking from "./assets/catworking.gif";
import { NavBar } from "./App.jsx";
import Footer from "./footer.jsx";

import health from "./assets/habit.png";
import crypto from "./assets/crypto_new.png";
import clueless from "./assets/clueless.png";
import enurse from "./assets/enurse.png";
import spotify from "./assets/spotify.png";

function Projects() {
  const [selected, setSelected] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleOption = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const clearFilters = () => setSelected([]);

  const data = [
    { id: "React.js", title: "React.js" },
    { id: "Python", title: "Python" },
    { id: "Javascript", title: "Javascript" },
    { id: "Java", title: "Java" },
    { id: "Blender", title: "Blender" },
    { id: "mySQL", title: "SQL" },
    { id: "APIdev", title: "API Development" },
    { id: "Supabase", title: "Supabase/Postgres" },
  ];

  const projects = [
    {
      id: 1,
      title: "Health Planner Pro",
      image: health, // ✅ fixed (no braces)
      date: "Jan 2024 - October 2024",
      skills: ["React.js", "Python", "Supabase"],
      descr:
        "This project demonstrates advanced development techniques using frameworks and programming languages listed. The application enables users to interact with real-time data and provides a detailed interface.",
      link: "https://github.com/561Aloha/Habit-Tracker",
    },
    {
      id: 2,
      title: "CryptoHustle",
      image: crypto, // ✅ fixed
      date: "Jan 2024 - May 2024",
      skills: ["React.js", "APIdev", "Javascript"],
      descr:
        "This project involves designing a complex database system modeled after a real-world application. The system handles extensive data and user interactions efficiently.",
      link: "https://www.cryptocapitol.netlify.app",
    },
    {
      id: 3,
      title: "AI Virtual Tryon Generator",
      image: clueless, // ✅ fixed
      date: "August 2024 - December 2024",
      skills: ["Typescript", "Python", "Google Gemini", "Hugging Face"],
      descr: "AI-powered virtual try-on fashion editor using modern ML tooling.",
      link: "https://github.com/561Aloha/AI-Fashion-Editor",
    },
    {
      id: 5,
      title: "eNurse Java Application",
      image: enurse, // ✅ fixed
      date: "May 2022 - December 2022",
      skills: ["Python", "React.js"],
      descr:
        "A robust healthcare-focused application using object-oriented programming patterns to support nurse management workflows.",
      link: "https://github.com/561Aloha/Nurse-Management",
    },
    {
      id: 6,
      title: "UX Spotify Redesign",
      image: spotify, // ✅ fixed
      date: "May 2022 - December 2022",
      skills: ["Python", "React.js"],
      descr:
        "A UX/UI redesign concept focusing on clarity, hierarchy, and a more intuitive listening flow.",
      link: "https://www.figma.com/slides/Bzbavt4OouWH6zYyLjbPau/Spotify?node-id=57-262&t=RrcjPL4N6in9xDfk-0",
    },
  ];

  const filteredProjects = useMemo(() => {
    return selected.length
      ? projects.filter((p) => selected.some((skill) => p.skills.includes(skill)))
      : projects;
  }, [selected]);

  // ----- Fade in on scroll -----
  const cardsRef = useRef([]);

  useEffect(() => {
    const els = cardsRef.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredProjects.length]);

  return (
    <div>
      <NavBar />

      <div className="entire-page">
        {/* Header */}
        <div className="projects-header">
          <div className="header-content">
            <h3>Featured Projects</h3>

            {/* Collapsible filter trigger */}
            <div style={{ marginTop: "4px", display: "flex", flexWrap: "wrap" }}>
              <button
                className="multi-select-button"
                onClick={() => setFiltersOpen((v) => !v)}
                aria-expanded={filtersOpen}
              >
                Filter by tech stack {filtersOpen ? "▲" : "▼"}
              </button>

              {selected.length > 0 && (
                <button className="multi-select-button selected" onClick={clearFilters}>
                  Clear ({selected.length})
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Expandable filter area */}
        {filtersOpen && (
          <div className="filter-section">
            <div className="filter-container">
              <h3 className="filter-label">Filter by Technology</h3>
              <div className="multi-select">
                {data.map((option) => (
                  <button
                    key={option.id}
                    className={`multi-select-button ${
                      selected.includes(option.id) ? "selected" : ""
                    }`}
                    onClick={() => toggleOption(option.id)}
                  >
                    {option.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects */}
        <div className="projects-grid-container">
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project, idx) => (
                <article
                  key={project.id}
                  className="project-showcase fade-on-scroll"
                  ref={(el) => (cardsRef.current[idx] = el)}
                >
                  <div className="project-cover">
                    <img src={project.image} alt={project.title} className="cover-image" />
                    <div className="cover-overlay" />
                  </div>

                  <div className="project-content">
                    <h2 className="project-title">{project.title}</h2>

                    <div className="tech-stack">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`tech-badge ${skill.replace(/\s+/g, "-")}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <p className="project-description">{project.descr}</p>

                    <div className="project-meta">
                      <span className="project-date">{project.date}</span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project
                        <img src={arrow} alt="External link" className="link-icon" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <img src={catWorking} alt="Cat working" className="no-projects-image" />
              <p className="no-projects-text">
                No projects found for the selected technologies.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer transparent={false} />
    </div>
  );
}

export default Projects;
