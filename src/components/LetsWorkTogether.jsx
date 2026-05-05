import React from "react";
import "./2col.css";

function LetsWorkTogether() {
  return (
    <section className="work-section">
      <div className="work-container">
        <p className="work-kicker">what's next</p>

        <h2 className="work-title">
          let's work together
        </h2>

        <p className="work-text">
          Looking to build a website, design an application, or have a role to fill
          and curious if I’m the right fit?
        </p>

        <a
          href="mailto:DiannaDimam@Gmail.com"
          className="work-cta"
        >
          DiannaDimam@gmail.com →
        </a>
      </div>
    </section>
  );
}

export default LetsWorkTogether;