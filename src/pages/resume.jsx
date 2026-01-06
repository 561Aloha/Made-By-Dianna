import React from "react";
import { NavBar } from "../App";

const Resume = () => {
  return (
    <>
      <NavBar />

      <div style={{ padding: "24px" }}>
        <h1>Resume</h1>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", margin: "12px 0 20px" }}>
          {/* View in new tab */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in new tab
          </a>

          {/* Download */}
          <a
            href="/resume.pdf"
            download="Dianna-Dimambro-Resume.pdf"
          >
            Download PDF
          </a>
        </div>

        {/* Inline viewer */}
        <iframe
          src="/resume.pdf"
          title="Dianna Dimambro Resume"
          width="100%"
          height="900"
          style={{ border: "1px solid #e5e7eb", borderRadius: "12px" }}
        />
      </div>
    </>
  );
};

export default Resume;
