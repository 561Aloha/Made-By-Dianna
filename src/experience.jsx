import React from 'react';
import ExperienceItem from './ExperienceItem';
import './experience.css';

const experienceData = [
  {
    title: 'Digital Marketing Specialist',
    company: 'Made by Dianna',
    date: 'March 2020 - Present',
    shortDescription: 'Specialized in digital marketing strategies and campaign management.',
    description: [
      'Developed user-friendly features for an internal application.',
      'Collaborated with the design team to enhance UI/UX.',
      'Managed code versioning and deployed updates weekly.',
    ],
    badges: ['JavaScript', 'React', 'Netlify'],
  },
  {
    title: 'Online eCommerce Intern',
    company: 'The Estee Lauder Companies',
    date: 'June 2023 - August 2023',
    shortDescription: 'Contributed to the development and management of eCommerce solutions.',
    description: [
      'Developed user-friendly features for an internal application.',
      'Collaborated with the design team to enhance UI/UX.',
      'Managed code versioning and deployed updates weekly.',
    ],
    badges: ['HTML', 'CSS', 'Shopify'],
  },
];


function Experience() {
  return (
    <section id="experience">
      <h4 className="section-title" >EXPERIENCE</h4>
      <div className="experience-container">
        {experienceData.map((job, index) => (
          <ExperienceItem key={index} job={job} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
