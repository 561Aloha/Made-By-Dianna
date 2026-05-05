import { React, useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { projects_1 } from "../data.js";
import "./projectpage.css";
import { NavBar } from "../App.jsx";
import Footer from "../footer.jsx";

// Add this component above ProjectPage:
function Lightbox({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>✕</button>
      <img
        src={src}
        alt={alt}
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
} 

function ProjectPage() {
  const [lightbox, setLightbox] = useState(null);
  const { id } = useParams();
  const projectIndex = projects_1.findIndex((item) => item.id === id);
  const project = projects_1[projectIndex];
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  if (!project) {
    return (
      <section className="project-page">
        <div className="project-page-inner">
          <p>Project not found.</p>
        </div>
      </section>
    );
  }

  const nextProject = projects_1[(projectIndex + 1) % projects_1.length];

  return (
    <section className="project-page">
      <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
      <NavBar/>
      <div className="project-page-inner">
        <header className="project-header fade-up show">
          <h1>{project.title}</h1>
        </header>

        <div className="project-layout">
          <aside className="project-sidebar fade-up show">
            <div className="project-meta-stack">
              <div className="project-meta-item">
                <h3>Date</h3>
                <p>{project.date || "2025"}</p>
              </div>
            <div className="project-meta-item">
                <h3>Role</h3>
                <p className="project-role">{project.role || "Frontend Developer / Designer"}</p>
              </div>

              <div className="project-meta-item">
                <h3>Tech Stack</h3>
                <ul className="tech-stack-list">
                  {(project.skills || ["React", "JavaScript", "CSS"]).map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
                            <div className="project-meta-item">
                <h3>Links</h3>
                <ul className="tech-stack-list">
                {(project.links || []).map((link, index) => (
                    <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                    </a>
                    </li>
                ))}
           
                </ul>
              </div>
            </div>

            <nav className="project-anchor-nav">
              <a href="#overview">Overview</a>
              <a href="#design">Design</a>
              <a href="#building">Building</a>
              <a href="#impact">Impact</a>
            </nav>
          </aside>

          <main className="project-main">
            <section id="overview" className="project-section-block fade-up show">
              {project.coverImage && (
                <div className="project-hero-wrap">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="project-hero-image"
                    onClick={() => setLightbox({ src: project.coverImage, alt: project.title })}
                  />
                </div>
              )}

              <div className="project-text-row">
                <h2>Project Overview</h2>
                <div>
                  <p className="project-summary">
                    {project.summary || project.intro || "Project summary goes here."}
                  </p>
                </div>
              </div>
            </section>

            <section id="design" className="project-section-block fade-up show">
              <div className="project-text-row">
                <h2>Design</h2>
                <div>
                  <p>
                    {project.designSummary ||
                      "This section can cover research, flows, wireframes, interface direction, and design decisions."}
                  </p>
                </div>
              </div>

              {project.designCover ? (
                <div className="single-image-wrap">
                  <img src={project.designCover} alt="Design cover" className="project-grid-image" />
                </div>
              ) : (
                <div className="project-gallery-grid three-col">
                  {(project.designGallery || project.gallery || []).slice(0, 3).map((img, index) => (
                    <img key={index} src={img} alt={`Design ${index + 1}`} className="project-grid-image" />
                  ))}
                </div>
              )}
            </section>

            <section id="building" className="project-section-block fade-up show">
              <div className="project-text-row">
                <h2>Building</h2>
                <div>
                  <p>
                    {project.buildingSummary ||
                      "This section can cover implementation, front-end architecture, reusable components, integrations, and iteration."}
                  </p>
                </div>
              </div>

              <div className="project-gallery-grid two-col">
                {(project.buildingGallery || project.gallery || []).slice(0, 2).map((img, index) => (
                  <img key={index} src={img} alt={`Building ${index + 1}`} className="project-grid-image" />
                ))}
              </div>
            </section>

            <section id="impact" className="project-section-block fade-up show">
              <div className="project-text-row">
                <h2>Impact</h2>
                <div>
                  <p>
                    {project.impact ||
                      project.outcome ||
                      "This section can focus on results, learnings, performance, launch outcomes, or business/user impact."}
                  </p>
                </div>
              </div>
            </section>

            {project.gallery?.length > 0 && (
              <section className="project-section-block fade-up show">
                <div className="project-text-row">
                  <h2>Gallery</h2>
                  <div>
                    <p>Additional visual references from the project.</p>
                  </div>
                </div>

                <div className="project-gallery-grid three-col">
                  {project.gallery.slice(0, 9).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      className="project-grid-image"
                      onClick={() => setLightbox({ src: img, alt: `Design ${index + 1}` })}
                    />
                  ))}
                </div>
              </section>
            )}

            {nextProject && nextProject.id !== project.id && (
              <div className="project-next fade-up show">
                <Link to={`/projects/${nextProject.id}`} className="project-next-link">
                  <span className="project-next-label">Next Project</span>
                  <span className="project-next-title">{nextProject.title}</span>
                </Link>
              </div>
            )}
          </main>
        </div>
      </div>
      
    </section>
  );
}

export default ProjectPage;
