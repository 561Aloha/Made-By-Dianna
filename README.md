�Portfolio Website - Made by Dianna
A modern, interactive portfolio website showcasing software development projects, UX design work, and professional experience. Features an AI-powered chatbot, fluid simulation backgrounds, and responsive design.
🔗 Live Site: MadeByDianna.com
✨ Features

Interactive Fluid Simulation - WebGL-powered fluid dynamics background
AI Chatbot Assistant - Powered by Google Gemini AI to answer questions about my work and experience
Project Showcase - Filterable project gallery with skill-based filtering
UX Design Portfolio - Dedicated section for design case studies and prototypes
Experience Timeline - Professional work history with detailed descriptions
Contact Form - Netlify Functions-powered email integration
Responsive Design - Optimized for all devices and screen sizes
Google Analytics - Integrated tracking for visitor insights

🛠️ Tech Stack
Frontend

React 19 - UI framework
Vite - Build tool and dev server
React Router - Client-side routing
CSS3 - Custom styling with animations

Backend & Services

Netlify Functions - Serverless functions for contact form
Google Generative AI (Gemini) - AI chatbot integration
Nodemailer - Email service
Google Analytics - User tracking

Graphics & Effects

WebGL - Custom fluid simulation
Custom Canvas API - Interactive backgrounds

🚀 Getting Started
Prerequisites

Node.js 18+
npm or yarn
Netlify account (for deployment)
Google AI API key (for chatbot)

Installation

Clone the repository

bashgit clone https://github.com/yourusername/portfolio.git
cd portfolio

Install dependencies

bashnpm install

Set up environment variables

Create a .env file in the root directory:
envVITE_API_KEY=your_google_gemini_api_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password

Run development server

bashnpm run dev
```

Visit `http://localhost:5173` to view the site.

## 📁 Project Structure
```
src/
├── components/
│   ├── AI ChatBot/          # Gemini-powered chatbot
│   └── lightbox.jsx         # Welcome lightbox component
├── css/                     # Component-specific styles
├── assets/                  # Images, videos, icons
├── uxdesign/               # UX project components
├── App.jsx                 # Main app component with routing
├── home.jsx                # Homepage
├── projects.jsx            # Projects gallery
├── contact.jsx             # Contact form
├── experience.jsx          # Work experience timeline
└── main.jsx                # App entry point

netlify/
└── functions/
    └── sendEmail.js        # Serverless contact form handler

public/
├── script.js               # Fluid simulation script
└── dat.gui.min.js         # GUI controls for fluid sim
🎨 Key Features Breakdown
AI Chatbot

Powered by Google Gemini 2.5 Flash
Answers questions about experience, projects, skills, and hobbies
Streaming responses with typing indicators
Suggested questions for easy interaction
Contact suggestion after 5 messages

Fluid Simulation

Custom WebGL implementation
Responsive to mouse/touch input
Configurable parameters (velocity, dissipation, etc.)
Mobile-optimized performance

Contact Form

Netlify Functions backend
Email delivery via Nodemailer
Form validation
CORS-enabled

🌐 Deployment
The site is deployed on Netlify with automatic deployments from the main branch.
Deploy to Netlify

Connect your repository to Netlify
Set environment variables in Netlify dashboard:

VITE_API_KEY
EMAIL_USER
EMAIL_PASS


Build settings:

Build command: npm run build
Publish directory: dist
Functions directory: netlify/functions



📧 Contact Form Setup
The contact form uses Netlify Functions. To set up:

Create an app-specific password for Gmail
Add EMAIL_USER and EMAIL_PASS to Netlify environment variables
The function will handle CORS and email sending automatically

🤖 AI Chatbot Configuration
The chatbot uses Google's Gemini API:

Get an API key from Google AI Studio
Add VITE_API_KEY to your .env file
Customize responses in src/components/AI ChatBot/constants.jsx

📊 Analytics
Google Analytics is integrated with ID: G-QTT57MH3M3
Tracked events include:

Page views
Chatbot interactions
Button clicks
Project views

🎯 Browser Support

Chrome (recommended)
Firefox
Safari
Edge
Mobile browsers (iOS Safari, Chrome Mobile)

📝 License
This project is © 2025 Dianna Dimambro. All rights reserved.
🤝 Contact

Email: DiannaDimam@gmail.com
LinkedIn: linkedin.com/in/diannad
GitHub: github.com/561Aloha
Portfolio: MadeByDianna.com

🙏 Acknowledgments

Fluid simulation inspired by Pavel Dobryakov's WebGL Fluid Simulation
AI chatbot powered by Google Gemini
Icons and images from various sources (credited in code)


Made with ❤️ by Dianna Dimambro
