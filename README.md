Here’s a professional, engaging, and well-structured rewrite of your `README.md` optimized for GitHub presentation and discoverability:

---

# 🌐 Made by Dianna — Portfolio Website

A **modern, interactive portfolio** showcasing software development projects, UX design work, and professional experience — featuring an **AI-powered chatbot**, **WebGL fluid simulations**, and **responsive design**.

🔗 **[Live Site → madebydianna.com](https://madebydianna.com)**

---

## ✨ Features

* 🌀 **Interactive Fluid Simulation** — WebGL-based, dynamic background with real-time motion
* 🤖 **AI Chatbot Assistant** — Powered by Google Gemini AI; answers questions about my projects, skills, and career
* 💼 **Project Showcase** — Filterable gallery organized by tech stack and skillset
* 🎨 **UX Design Portfolio** — Case studies, wireframes, and prototypes
* 🧭 **Experience Timeline** — Detailed career history and milestones
* 📬 **Contact Form** — Netlify Functions + Nodemailer for seamless email delivery
* 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop
* 📊 **Google Analytics** — Integrated site tracking for insights

---

## 🛠️ Tech Stack

### **Frontend**

* **React 19** – Core UI framework
* **Vite** – Lightning-fast build tool
* **React Router** – SPA navigation
* **CSS3** – Custom animations and transitions

### **Backend & Services**

* **Netlify Functions** – Serverless backend
* **Google Gemini AI** – Chatbot intelligence
* **Nodemailer** – Email integration
* **Google Analytics** – Visitor analytics

### **Graphics & Effects**

* **WebGL + Canvas API** – Custom fluid and particle simulations

---

## 🚀 Getting Started

### **Prerequisites**

* Node.js **v18+**
* npm or yarn
* Netlify account (for deployment)
* Google AI API key

### **Installation**

Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Create an `.env` file:

```env
VITE_API_KEY=your_google_gemini_api_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password
```

Run the development server:

```bash
npm run dev
```

Visit **[http://localhost:5173](http://localhost:5173)**

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AIChatBot/            # Gemini-powered chatbot
│   └── Lightbox.jsx          # Welcome lightbox component
├── css/                      # Styles & animations
├── assets/                   # Images, videos, icons
├── uxdesign/                 # UX case studies
├── App.jsx                   # Main app with routes
├── home.jsx                  # Homepage
├── projects.jsx              # Project gallery
├── contact.jsx               # Contact form
├── experience.jsx            # Experience timeline
└── main.jsx                  # Entry point

netlify/
└── functions/
    └── sendEmail.js          # Serverless contact form handler

public/
├── script.js                 # Fluid simulation
└── dat.gui.min.js            # GUI for simulation controls
```

---

## 🎨 Feature Details

### 🤖 **AI Chatbot**

* Powered by **Google Gemini 2.5 Flash**
* Streams responses with typing indicators
* Auto-suggested questions for smoother interaction
* Offers contact prompts after multiple messages

### 🌀 **Fluid Simulation**

* Real-time **WebGL** fluid effects
* Responsive to touch/mouse input
* Customizable parameters (velocity, dissipation, pressure)
* Mobile-optimized for performance

### 📬 **Contact Form**

* Built with **Netlify Functions**
* **Nodemailer** integration for email delivery
* Includes CORS and validation handling

---

## 🌐 Deployment

Deployed via **Netlify** with continuous deployment from the `main` branch.

**Netlify Settings:**

```
Build command: npm run build
Publish directory: dist
Functions directory: netlify/functions
```

---

## 🤖 AI Chatbot Configuration

1. Get an API key from [Google AI Studio](https://aistudio.google.com).
2. Add `VITE_API_KEY` to your `.env` file.
3. Customize chatbot responses in
   `src/components/AIChatBot/constants.jsx`.

---

## 📊 Analytics

Integrated with **Google Analytics (G-QTT57MH3M3)**

Tracked events include:

* Page views
* Chatbot interactions
* Button clicks
* Project gallery engagement

---

## 📝 License

© 2025 **Dianna Dimambro** — All rights reserved.

---

## 💌 Contact

📧 **Email:** [DiannaDimam@gmail.com](mailto:DiannaDimam@gmail.com)
💼 **LinkedIn:** [linkedin.com/in/diannad](https://linkedin.com/in/diannad)
💻 **GitHub:** [github.com/561Aloha](https://github.com/561Aloha)
🌎 **Portfolio:** [madebydianna.com](https://madebydianna.com)

---

## 🙏 Acknowledgments

* Fluid simulation inspired by **Pavel Dobryakov’s WebGL Fluid Simulation**
* AI chatbot powered by **Google Gemini**
* Icons and visuals from open-source creators credited in code

---

Would you like me to also add **GitHub badges** (for React, Netlify, etc.) and a **preview image banner** at the top? That can make it look even more polished on your profile.
