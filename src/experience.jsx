import React from 'react';
import './experience.css';

const experienceData = [
  {
    title: 'Business Development Representative',
    company: 'Nominal AI',
    date: 'May 2025 - September 2025',
    shortDescription: 'AI Fintech Startup focused on automating manual accounting processes.',
    description: [
      'Created short demonstrations of the platform to showcase offerings.',
      'Communicated with cross-functional teams including sales engineers and marketing to incorporate new outreach initiatives.',
      'Performed outreach and inbound activities to create bookings to see the platform in action.',
      'Made 200+ daily cold calls and engaged with 100+ LinkedIn finance leaders.',
    ],
    badges: ['Sales', 'Lead Generation', 'Cold Calling', 'LinkedIn', 'Demo Creation'],
  },
  {
    title: 'Website Developer/Designer',
    company: 'Darlabs',
    date: 'April 2024 - Present',
    shortDescription: 'Developing and customizing web solutions for organizational needs.',
    description: [
      'Customizing WordPress themes and plugins to align with organizational needs and branding.',
      'Conducted A/B Testing for user navigation patterns and testing new user flows.',
      'Configured a learning management system (LMS), uploading 7 learning modules to support the organization\'s educational initiatives.',
    ],
    badges: ['WordPress', 'PHP', 'LMS', 'A/B Testing'],
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'Made By Dianna',
    date: 'March 2020 - April 2024',
    shortDescription: 'Comprehensive digital marketing and web development services.',
    description: [
      'Developing a comprehensive social media strategy that aligns with the client\'s target audience.',
      'Managed content calendars and marketing roadmaps in an Agile environment using Jira and Notion.',
      'Built and deployed websites using the React.JS framework, developing 8+ robust components for enhanced site functionality.',
      'Managed a community of 100k followers and 36k engaged following.',
      'Grown a 26k following on TikTok and amassed 1 million likes through organic reach from zero following.',
      'Provided account management, content creation, video-editing, and influencer management.',
    ],
    badges: ['React.js','Social Media', 'Instagram','TikTok' ,'Jira', 'Notion', 'Content Creation','Hubspot'],
  },
  {
    title: 'Online eCommerce Intern',
    company: 'Estee Lauder Companies',
    date: 'June 2023 - August 2023',
    shortDescription: 'Quality assurance and platform modernization for eCommerce solutions.',
    description: [
      'Ticketed bugs for quality assurance and communicated directly with developers using Jira.',
      'Designed high-fidelity mockups for mobile and desktop versions using Figma.',
      'Highlighted user behavior analytics to identify and redesign underperforming website components, enhancing visibility and engagement.',
      'Assisted with Quality Assurance and analyzed data for insights.',
      'Assisted with Platform Modernization readiness.',
      'Audited Clinique and several affiliates for guideline compliance.',
    ],
    badges: ['Jira', 'Figma', 'QA', 'Analytics', 'Platform Modernization'],
  },
];

// ✅ ExperienceItem defined inline here
function ExperienceItem({ job }) {
  return (
    <div className="experience-item">
      <h3>{job.title}</h3>
      <h4>{job.company}</h4>
      <p className="experience-date">{job.date}</p>
      <p className="experience-short">{job.shortDescription}</p>
      <ul>
        {job.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <div className="experience-badges">
        {job.badges.map((badge, i) => (
          <span key={i} className="badge">{badge}</span>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experienceData.map((job, index) => (
          <ExperienceItem key={index} job={job} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
