import React from "react";
import './App.css';

function tech() {
    const techstack = [
        "Java",
        "JavaScript",
        "ReactJS",
        "Python",
        "HTML",
        "CSS",
        "MongoDB",
        "MySQL",
        "Microsoft Azure"
      ];
      
    return(
        <>
        <div className="tech">
        <h4> I constantly try to improve</h4>
        <h2>My Tech Stack</h2>
        <div>
        <div className="tech-grid">
        {techstack.map((tech, index) => (
          <div className="tech-item" key={index}>
            {tech}
          </div>
        ))}
      </div>   
      </div>  
      </div>


        </>

    );

};

export default tech;

