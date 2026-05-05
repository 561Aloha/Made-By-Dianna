import React from "react";
import "./App.css";
import ScrollingCarousel from "./ScrollingCarousel";

function Tech() {
  const skills = {
    Frontend: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Motion",
      "React Three Fiber",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    Backend: [
      "Node.js",
      "Python",
      "Java",
      "FastAPI",
      "Django",
      "SQL",
      "MySQL",
      "MongoDB",
      "Supabase",
    ],
    Tools: [
      "Git",
      "VS Code",
      "Cursor",
      "Figma",
      "Blender",
      "Azure",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
    ],
  };

  return (
    <section className="tech">
      <div className="tech-header">
        <div className="tech-carousel-wrap">
          <h2> My tech stack</h2>
        <ScrollingCarousel />
      </div>
        
        <div className="tech-divider" />
      </div>

      <div className="tech-columns">
        {Object.entries(skills).map(([category, items]) => (
          <div className="tech-column" key={category}>
            <h3>{category}</h3>

            <div className="tech-pill-group">
              {items.map((item) => (
                <span key={item} className="tech-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}

export default Tech;