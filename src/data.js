import bloom  from './assets/Bloom.png'
import image3 from './assets/3.png'
import clueless  from './assets/clueless.png'
import clueless1  from './assets/clueless_1.png'
import habit  from './assets/habit.png'

import armada  from './assets/Armada.png'
import armada2 from './assets/gallery.png'
import armada3 from './assets/gallery_armada.png'
import armada4 from './assets/after_gallery.png'

import design_bloom from './assets/design.png'
import arch_bloom from './assets/bloomnotes_architecture.png'
import green_bloom from './assets/bouquet.png'
import sendmessage from './assets/sendmessage.png'

import goal from './assets/goal.png'
import cyber from './assets/cyber_closet_schema.png'
import share_bloom from './assets/share.png'
import oAuth from './assets/Oauth_HabitTrack.png'

import preview from './assets/bouquet_1.png'
export const projects_1 = [
{
  id: "bloomnotes",
  title: "Bloom Notes",
  role: "Frontend Developer / Product Designer",
  date: "January 2026",
  skills: ["React", "TypeScript", "Supabase", "CSS"],
  coverImage: bloom,
  links: [
    { label: "Live Site", url: "https://bloomnotes.vercel.app" },
    { label: "GitHub", url: "https://github.com/561Aloha/bloomnotes" },
    { label: "Figma", url: "https://figma.com/file/xxxxx" }
    ],
  summary: "A digital bouquet builder that lets users create and share personalized arrangements.",

  designSummary: "Research, layout explorations, interaction patterns, and visual direction for the bouquet-building experience.",
  designCover: design_bloom,
  designGallery: [
    bloom,
    bloom,
    bloom,
  ],

  buildingSummary: "Implemented reusable React components, managed state across steps, and created shareable bouquet rendering logic.",
  buildingGallery: [
  arch_bloom, 
  ],

  impact: "The project created a playful but structured experience for sending digital bouquets and helped shape a stronger front-end system for future expansion.",

  gallery: [
     green_bloom, sendmessage, preview,  bloom, share_bloom ,
  bloom,
  ]
},
  {
    id: "ai-fashion",
    title: "AI Fashion Generator",
    date: "2025",
    summary:
      "An AI-powered image-to-image fashion generator that creates new outfit variations using Google Gemini.",
    skills: ["React", "TypeScript", "Firebase", "Google Gemini", "OAuth"],
    coverImage: clueless,
    links: [
        { label: "GitHub", url: "https://github.com/561Aloha/bloomnotes" },
        { label: "Figma", url: "https://figma.com/file/xxxxx" }
    ],
    slides: [
      {
        title: "Image Generation",
        paragraph:
          "Users upload clothing images and generate new outfit variations using image-to-image generation with Google Gemini.",

      },
      {
        title: "Authentication & Storage",
        paragraph:
          "OAuth authentication was implemented and images were stored using Firebase storage for user-specific generation history.",
        image: clueless1,
      },
    ],
    casestudy: "/case-studies/ai-fashion",
    designCover: cyber,
    designGallery: [
        clueless1

    ],
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker Application",
    date: "2024-2026",
    summary:
      "A full-stack habit tracking application with authentication, database storage, and AI-assisted habit management.",
    skills: ["React", "Supabase", "SQL", "OAuth", "JavaScript"],
    coverImage: habit,
    links: [
        { label: "Live Site", url: "https://bloomnotes.vercel.app" },
        { label: "GitHub", url: "https://github.com/561Aloha/bloomnotes" },
        { label: "Figma", url: "https://figma.com/file/xxxxx" }
        ],
    slides: [
      {
        title: "Full Stack Application",
        paragraph:
          "Users can create, track, and analyze habits over time with authentication and database storage using Supabase.",
        image: oAuth,
      },
      {
        title: "AI Assisted Features",
        paragraph:
          "The application includes AI-assisted habit naming and suggestions to help users manage habits more effectively.",
        image: null,
      },
    ],
    intro:
        "Health Planner Pro is a habit tracking and productivity application designed to help users track habits, goals, and personal progress over time through dashboards and visual analytics.",

        role:
        "Full stack development, frontend design, database design",

        timeline:
        "2024",

        challenge:
        "The main challenge was designing a system that could track habits across daily, weekly, and yearly views while keeping the interface simple and easy to use. The database structure also needed to support flexible habit tracking and analytics.",

        solution:
        "I built the frontend using React and created a backend database using Supabase to store user habits and progress data. I implemented charts and dashboards to visualize progress and built CRUD functionality for habits and goals.",

        outcome:
        "The project demonstrates full stack development skills including database design, API usage, frontend development, and data visualization.",
        designGallery: [
            habit

        ],
        gallery: [
            arch_bloom,oAuth, goal,
        ],
    casestudy: "/case-studies/habit-track",
    link_web: "https://habittrack.netlify.app",
        links: [
        { label: "Live Site", url: "https://bloomnotes.vercel.app" },
        { label: "GitHub", url: "https://github.com/561Aloha/bloomnotes" },
        { label: "Figma", url: "https://figma.com/file/xxxxx" }
        ],
  },

  {
    id: "armada",
    title: "Armada Pros Website",
    date: "2025",
        links: [
        { label: "Live Site", url: "https://bloomnotes.vercel.app" },
        { label: "GitHub", url: "https://github.com/561Aloha/bloomnotes" },
        { label: "Figma", url: "https://figma.com/file/xxxxx" }
        ],
    summary:
      "A business website for a property and home remodeling company built with React and deployed on Netlify.",
    skills: ["React", "JavaScript", "Netlify"],
    coverImage: armada,
    casestudy: "/project/armada",
    link_web: "https://armadapros.com",

    gallery: [
       armada,armada2,armada3,armada4,
        ],
    slides: [
      {
        title: "Business Website",
        paragraph:
          "Designed and built a responsive business website for a property services company with service pages and contact forms.",
        image: "/images/armada/slide1.webp",
      },
      {
        title: "Deployment",
        paragraph:
          "The site was deployed on Netlify and structured for easy updates and scalability.",
        image: null,
      },
    ],
  },
    {
    id: "clinique",
    title: "Clinique Redesign",
    date: "2023",
    summary:
      "A business website for a property and home remodeling company built with React and deployed on Netlify.",
    skills: ["React", "JavaScript", "Netlify"],
    coverImage: image3,
    casestudy: "/case-studies/bloomnotes",
    link_web: "https://clinique",
    slides: [
      {
        title: "Business Website",
        paragraph:
          "Clinique",
        image: "/images/armada/slide1.webp",
      },
      {
        title: "Deployment",
        paragraph:
          "The site was deployed on Netlify and structured for easy updates and scalability.",
        image: null,
      },
    ],
  },
  //     {
  //   id: "spotify",
  //   title: "Spotify",
  //   date: "2023",
  //   summary:
  //     "A business website for a property and home remodeling company built with React and deployed on Netlify.",
  //   skills: ["React", "JavaScript", "Netlify"],
  //   coverImage: image3,
  //   link_web: "https://bloomnotes.vercel.app",
  //   slides: [
  //     {
  //       title: "Business Website",
  //       paragraph:
  //         "Designed and built a responsive business website for a property services company with service pages and contact forms.",
  //       image: "/images/armada/slide1.webp",
  //     },
  //     {
  //       title: "Deployment",
  //       paragraph:
  //         "The site was deployed on Netlify and structured for easy updates and scalability.",
  //       image: null,
  //     },
  //   ],
  // },
];

