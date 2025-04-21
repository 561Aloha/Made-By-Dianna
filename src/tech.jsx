import React from "react";
import './App.css';
import ScrollingCarousel from "./ScrollingCarousel";

function tech() {
    const techstack = [
        "ReactJS",
        "Python",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "MongoDB",
        "MySQL",
        "Microsoft Azure",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe Premier Pro",
        "Figma",
        "Supabase",
        "Ski-Learn",
        "OpenCV",
        "Django",
      ];
      
    const data = [
      { id: 'Programming', title: 'Python' },
      { id: 'Programming', title: 'Java' },
      { id: 'Programming', title: 'Javascript' },
      { id: 'Programming', title: 'HTML' },
      { id: 'Programming', title: 'CSS' },
      { id: 'Framework', title: 'React.js' },
      { id: 'Framework', title: 'Django' },
      { id: 'Framework', title: 'SkiLearn' },
      { id: 'Framework', title: 'OpenCV' },
      { id: 'Software', title: 'Blender' },
      { id: 'Software', title: 'Figma' },
      { id: 'Software', title: 'Adobe Illustrator' },
      { id: 'Software', title: 'Adobe Photoshop' },
      { id: 'Database', title: 'mySQL' },
      { id: 'Database', title: 'Supabase' },
      { id: 'Database', title: 'MongoDB' },


    ]
    return(
        <>
        <div className="tech">
        <h4> I constantly try to improve</h4>
        <h2>My Tech Stack</h2>
        <div>
          
        <div className="tech-grid">

        {data.map(skill => (
          <span key={skill.title} className={`tech-item ${skill.id.toLowerCase()}`}>
            {skill.title}
          </span>
        ))}

      </div>   
      <ScrollingCarousel/>
      </div>  
      </div>


        </>

    );

};

export default tech;



// import React from "react";
// import './App.css';
// import ScrollingCarousel from "./ScrollingCarousel";

// function tech() {
//     const techstack = {
//       "Programming Languages": ["HTML", "CSS", "JavaScript", "Python", "Java"],
//       "Frameworks/Libraries": ["React", "TensorFlow", "OpenCV", "Scikit-Learn", "MatPlotLib"],
//       "Databases/Tools": ["Supabase", "MySQL", "MongoDB", "Figma", "Adobe Illustrator", "Adobe Photoshop"]
//     };
  
      
//     return(
//         <>
//         <div className="tech">
//         <h4> I constantly try to improve</h4>
//         <h2>My Tech Stack</h2>
//         <div>
//         <div className="tech-grid">
//         {Object.entries(techstack).map(([category, tools], index) => (
//           <div className="tech-item" key={index}>
//             <h4>{category}</h4>
//             <ul>
//               {tools.map((tool, i) => (
//                 <li key={i}>{tool}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>   
//       <ScrollingCarousel/>
//       </div>  
//       </div>


//         </>

//     );

// };

// export default tech;

