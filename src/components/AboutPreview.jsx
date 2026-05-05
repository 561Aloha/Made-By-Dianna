import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import me from "../assets/me.jpeg";
import "./aboutPreview.css";

function AboutPreview() {
  const experience = [
    {
      date: "May 2026 — present",
      company: "Jupiter Payments",
      title: "Software Engineer",
      summary:
        "Fintech company similar to Toast, Clover, Lightspeed offering a POS system for businesses",
      tags: ["React", "HTML", "CSS","AWS", "Javascript"],
    },
    {
      date: "Jan 2026 — present",
      company: "Hawk Technologies",
      title: "UX Engineering Intern",
      summary:
        "Built an interactive 3D memory visualization with React and Three.js and helped improve semantic and keyword search experiences for a Chrome extension.",
      tags: ["React", "Three.js", "UX", "Chrome Extension"],
    },
    {
      date: "Apr 2024 — present",
      company: "DarLabs",
      title: "Website Developer / Designer",
      summary:
        "Designed and built web experiences, automated onboarding workflows, and developed an interactive map directory using custom PHP and Google Maps API.",
      tags: ["Figma", "PHP", "Google Maps API", "Automation"],
    },
    {
      date: "May 2025 — Sep 2025",
      company: "Nominal AI ",
      title: "Business Development Representative",
      summary:
        "Talked to financial leaders at Fortune 500 companies about streamlining account processes with Nominals AI Agentic Software.",
      tags: ["SalesForce", "Notion", "Hubspot"],
    },
    {
      date: "May 2023 — Aug 2023",
      company: "Estée Lauder Companies",
      title: "E-commerce Intern",
      summary:
        "Worked across design and engineering on e-commerce updates, QA bug ticketing, and product detail page redesigns focused on usability and storytelling.",
      tags: ["E-commerce", "Figma", "Jira", "Wrike", "Drupal"],
    },
  ];

  const STICKY_TOP = 120;

  const wrapperRef = useRef(null);
  const listRef = useRef(null);
  const [extraScroll, setExtraScroll] = useState(0);

  useEffect(() => {
    const calculateScrollRange = () => {
      const list = listRef.current;
      if (!list) return;
      setExtraScroll(list.scrollHeight - list.clientHeight);
    };

    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);

    return () => window.removeEventListener("resize", calculateScrollRange);
  }, []);

  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const wrapper = wrapperRef.current;
        const list = listRef.current;
        if (!wrapper || !list) return;

        const rect = wrapper.getBoundingClientRect();
        const raw = STICKY_TOP - rect.top;
        const progress = Math.max(0, Math.min(raw, extraScroll));

        list.scrollTop = progress;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [extraScroll]);

  return (
    <section className="about-preview-section" ref={wrapperRef}>
      <h2>Test</h2>

      <div className="about-preview-inner">
        <div className="about-preview-left">
          <div className="about-preview-image-wrap">
            <img src={me} alt="Dianna Dimambro" className="about-preview-image" />
          </div>

          <div className="about-preview-copy">
            <Link to="/about" className="about-preview-btn">
              → about me
            </Link>
          </div>
        </div>

        <div className="about-preview-right" ref={listRef}>
          <p className="about-preview-kicker">experience</p>

          {experience.map((item) => (
            <article className="experience-row" key={`${item.company}-${item.title}`}>
              <div className="experience-date">
                <p>{item.date}</p>
              </div>

              <div className="experience-main">
                <h3>
                  {item.title}, <span>{item.company}</span>
                </h3>

                <p className="experience-summary">{item.summary}</p>

                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="experience-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;