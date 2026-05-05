import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./App.jsx";
import Footer from "./footer.jsx";
import { projects_1 } from "./data.js";
import "./css/projects.css";

const SKILLS = [
  "React.js", "Python", "Javascript", "Typescript",
  "Java", "Blender", "mySQL", "APIdev", "Supabase",
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("in-view"); observer.unobserve(el); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      className="proj-card fade-on-scroll"
      ref={ref}
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      <div className="proj-card-image-wrap">
        <img src={project.coverImage} alt={project.title} className="proj-card-image" />
      </div>

      <div className="proj-card-body">
        {project.skills?.length > 0 && (
          <p className="proj-card-label">{project.skills.join(" • ")}</p>
        )}
        <h2 className="proj-card-title">{project.title}</h2>
        {project.summary && <p className="proj-card-summary">{project.summary}</p>}

        <div className="proj-card-links">
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
    </article>
  );
}

function Projects() {
  const [selected, setSelected] = useState([]);

  const toggle = (id) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const filtered = useMemo(() =>
    selected.length
      ? projects_1.filter((p) => selected.some((s) => p.skills?.includes(s)))
      : projects_1,
    [selected]
  );

  return (
    <div className="projects-page">
      <NavBar />

      <div className="projects-page-inner">
        {/* Header */}
        <header className="projects-page-header">
          <h1>All Projects</h1>
          <p>A full archive of work — select a filter to narrow by technology.</p>
        </header>

        {/* Filters */}
        <div className="projects-filters">
          {SKILLS.map((skill) => (
            <button
              key={skill}
              className={`filter-pill ${selected.includes(skill) ? "active" : ""}`}
              onClick={() => toggle(skill)}
            >
              {skill}
            </button>
          ))}
          {selected.length > 0 && (
            <button className="filter-pill clear" onClick={() => setSelected([])}>
              Clear ✕
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="projects-archive-grid">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>

      <Footer transparent={false} />
    </div>
  );
}

export default Projects;