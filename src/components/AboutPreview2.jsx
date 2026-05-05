import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import me from "../assets/me.jpeg";
import "./AboutPreview2.css";

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

const experienceData = [
    {
    title: "Software Engineer",
    company: "Jupiter Payments",
    date: "May 2026 – Present",
    desc: "Fintech company focused on credit card processing transactions",
    badges: ["React","Javascript","HTML/CSS","AWS"],
  },
  {
    title: "Business Development Representative",
    company: "Nominal AI",
    date: "May 2025 – Sep 2025",
    desc: "AI Fintech Startup focused on automating manual accounting processes.",
    badges: ["Sales", "Lead Generation", "Cold Calling", "LinkedIn", "Demo Creation"],
  },
  {
    title: "Website Developer / Designer",
    company: "Darlabs",
    date: "Apr 2024 – Apr 2026",
    desc: "Developing and customizing web solutions for organizational needs.",
    badges: ["WordPress", "PHP", "LMS", "A/B Testing"],
  },
  // {
  //   title: "Digital Marketing Specialist",
  //   company: "Made By Dianna",
  //   date: "Mar 2020 – Apr 2024",
  //   desc: "Comprehensive digital marketing and web development services.",
  //   badges: ["React.js", "Social Media", "TikTok", "Jira", "Notion", "Content Creation", "Hubspot"],
  // },
  {
    title: "Online eCommerce Intern",
    company: "Estée Lauder Companies",
    date: "Jun 2023 – Aug 2023",
    desc: "Quality assurance and platform modernization for eCommerce solutions.",
    badges: ["Jira", "Figma", "QA", "Analytics", "Platform Modernization"],
  },
];

function lerp(p, s, e) {
  return Math.max(0, Math.min((p - s) / (e - s), 1));
}

function AboutPreview2() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [expVisible, setExpVisible] = useState(false);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const total = section.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        setProgress(total > 0 ? scrolled / total : 0);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const ms = { transition: "opacity 0.15s linear, transform 0.15s linear" };

  const enterStyle = (s, e) => {
    const t = lerp(progress, s, e);
    return {
      ...ms,
      opacity: t,
      transform: `translateY(${36 * (1 - t)}px) scale(${0.98 + t * 0.02})`,
    };
  };

  const exitStyle = (s, e) => {
    const t = lerp(progress, s, e);
    return {
      ...ms,
      opacity: 1 - t,
      transform: `translateY(${-28 * t}px) scale(${1 - t * 0.02})`,
    };
  };

  const merge = (a, b) => ({
    ...a,
    ...b,
    opacity: Math.min(a.opacity ?? 1, b.opacity ?? 1),
  });

  const techIn = lerp(progress, 0.38, 0.46);
  const expIn = lerp(progress, 0.72, 1.0);

  if (techIn > 0.25 && !pillsVisible) setPillsVisible(true);
  if (expIn > 0.2 && !expVisible) setExpVisible(true);
return (
  <section className="ap2-section" ref={sectionRef}>
    <div className="ap2-sticky">
      <div className="ap2-inner">
        {/* ABOUT TITLE */}
        <div
          className="ap2-block"
          style={merge(enterStyle(0.0, 0.05), exitStyle(0.08, 0.14))}
        >
          <h2 className="ap2-title">
            I blend interactive design and engineering to build immersive experiences.
          </h2>
        </div>
        
        {/* TECH STACK */}
        <div
          className="ap2-block ap2-block-top-left"
          style={merge(enterStyle(0.16, 0.46), exitStyle(0.58, 0.66))}>
          <div>
            <h2 className="ap2-title">my tech stack.</h2>
            <div className="ap2-divider" />
            <div className="ap2-tech-cols">
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat}>
                  <p className="ap2-col-head">{cat}</p>
                  <div className="pill-group">
                    {items.map((item, i) => (
                      <span
                        key={item}
                        className={`pill ${pillsVisible ? "show" : ""}`}
                        style={{
                          transitionDelay: pillsVisible ? `${i * 40}ms` : "0ms",
                        }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div
          className="ap2-block ap2-block-top-left"
          style={enterStyle(0.72, 0.84)}
        >
          <div className="ap2-exp-wrap">
            <h2 className="ap2-title">where i've worked.</h2>
            <div className="ap2-exp-divider" />
            <div className="exp-list">
              {experienceData.map((job, i) => (
                <div
                  key={i}
                  className={`exp-item ${expVisible ? "show" : ""}`}
                  style={{
                    transitionDelay: expVisible ? `${i * 80}ms` : "0ms",
                  }}>
                  <div className="exp-header">
                    <div>
                      <p className="exp-title-text">{job.title}</p>
                      <p className="exp-company">{job.company}</p>
                    </div>
                    <p className="exp-date">{job.date}</p>
                  </div>
                  <p className="exp-desc">{job.desc}</p>

                  <div className="exp-badges">
                    {job.badges.map((b) => (
                      <span key={b} className="exp-badge">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default AboutPreview2;