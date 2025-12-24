import React, { useState } from "react";
import './css/projects.css';
import arrow from './assets/link-external.png';
import catWorking from './assets/catworking.gif';
import { NavBar } from './App.jsx'; 
import Footer from './footer.jsx';
import health from './assets/habit.png'

function Projects() { 
    const [selected, setSelected] = useState([]);

    const toggleOption = (id) => {
        setSelected((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id)
                : [...prevSelected, id]
        );
    };

    const data = [
        { id: 'React.js', title: 'React.js' },
        { id: 'Python', title: 'Python' },
        { id: 'Javascript', title: 'Javascript' },
        { id: 'Java', title: 'Java' },
        { id: 'Blender', title: 'Blender' },
        { id: 'mySQL', title: 'SQL' },
        { id: 'APIdev', title: 'API Development' },
        { id: 'Supabase', title: 'Supabase/Postgres' },
    ];

    const projects = [
        { 
            id: 1, 
            title: 'Health Planner Pro', 
            image: {health}, 
            date: 'Jan 2024 - October 2024',  
            skills: ['React.js', 'Python','Supabase'], 
            descr: 'This project demonstrates advanced development techniques using frameworks and programming languages listed. The application enables users to interact with real-time data and provides a detailed interface.', 
            link: "https://github.com/561Aloha/Habit-Tracker" 
        },
        { 
            id: 2, 
            title: 'CryptoHustle', 
            image: './src/assets/crypto_new.png', 
            date: 'Jan 2024 - May 2024',   
            skills: ['React.js', 'APIdev','Javascript'], 
            descr: 'This project involves designing a complex database system modeled after a real-world application. The system handles extensive data and user interactions efficiently.', 
            link: "https://www.cryptocapitol.netlify.app"
        },
        { 
            id: 3, 
            title: 'AI Virtual Tryon Generator', 
            image: './src/assets/clueless.png', 
            date: 'August 2024 - December 2024',   
            skills: ['Typescript','Python','Google Gemini','Hugging Face'], 
            descr: 'Track the weather using reading and creating APIs', 
            link: "https://github.com/561Aloha/AI-Fashion-Editor" 
        },
        { 
            id: 5, 
            title: 'eNurse Java Application', 
            image: './src/assets/enurse.png', 
            date: 'May 2022 - December 2022',   
            skills: ['Python', 'React.js'], 
            descr: 'This project focuses on building a robust application using object-oriented programming to enhance operational efficiency in healthcare settings.', 
            link: "https://github.com/561Aloha/Nurse-Management"
        },
        { 
            id: 6, 
            title: 'UX Spotify Redesign', 
            image: './src/assets/spotify.png', 
            date: 'May 2022 - December 2022',   
            skills: ['Python', 'React.js'], 
            descr: 'This project explores UX/UI design principles to create an intuitive and responsive dashboard for weather monitoring.', 
            link: "https://www.figma.com/slides/Bzbavt4OouWH6zYyLjbPau/Spotify?node-id=57-262&t=RrcjPL4N6in9xDfk-0"
        },
    ];

    const filteredProjects = selected.length
        ? projects.filter(project => selected.some(skill => project.skills.includes(skill)))
        : projects;

    return (
        <div>
            <NavBar />
            <div className="entire-page">
                {/* Page Header */}
                <div className="projects-header">
                    <div className="header-content">
                        <h1>Projects</h1>
                        <p className="header-subtitle">Some open source projects that I've worked on in the past 2 years</p>
                    </div>
                </div>

                <div className="filter-section">
                    <div className="filter-container">
                        <h3 className="filter-label">Filter by Technology</h3>
                        <div className="multi-select">
                            {data.map(option => (
                                <button
                                    key={option.id}
                                    className={`multi-select-button ${selected.includes(option.id) ? 'selected' : ''}`}
                                    onClick={() => toggleOption(option.id)}
                                >
                                    {option.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid-container">
                    {filteredProjects.length > 0 ? (
                        <div className="projects-grid">
                            {filteredProjects.map(project => (
                                <article key={project.id} className="project-showcase">
                                    {/* Cover Image */}
                                    <div className="project-cover">
                                        <img src={project.image} alt={project.title} className="cover-image" />
                                        <div className="cover-overlay"></div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="project-content">
                                        <h2 className="project-title">{project.title}</h2>
                                        
                                        <div className="tech-stack">
                                            {project.skills.map(skill => (
                                                <span 
                                                    key={skill} 
                                                    className={`tech-badge ${skill.replace(/\s+/g, '-')}`}
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
                            <p className="no-projects-text">No projects found for the selected technologies.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer transparent={false} />
        </div>
    );
}

export default Projects;