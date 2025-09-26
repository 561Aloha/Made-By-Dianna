import React from 'react';
import './experience.css';

function ExperienceItem({ job }) {
  return (
    <div className="experience-item">
      <div className="experience-left">
        <p className="job-date">{job.date}</p>
      </div>
      <div className="experience-right">
        <h3>{job.title} </h3>
        <h4>{job.company}</h4>
        <p className="job-description">{job.shortDescription}</p>
        <ul className="job-duties">
          {job.description.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
        <ul className="job-badges">
          {job.badges.map((badge, index) => (
            <li key={index} className="badge">{badge}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;
