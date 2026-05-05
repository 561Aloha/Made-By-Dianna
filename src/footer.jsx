import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./footer.css";

const Footer = () => {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // panel reveal
  const panelY = useTransform(scrollYProgress, [0, 1], ["18%", "0%"]);

  // subtle internal motion only
  const topBarY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const brandY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const brandOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.4, 1, 1]);

  return (
    <section className="footer-scroll-section" ref={footerRef}>
      <div className="footer-sticky-shell">
        <motion.footer className="footer-panel" style={{ y: panelY }}>
          <motion.div className="footer-top" style={{ y: topBarY }}>
            <div className="footer-col">
              <a href="mailto:contact@madebydianna.com">contact@madebydianna.com</a>
              <br />
              <a href="tel:+15612556900">(561) 255-6900</a>
              <br />
              <br />
              jupiter, florida
              <br />
              united states
            </div>

            <div className="footer-col">
              have a project in mind?
              <br />
              <a href="mailto:diannadimam@gmail.com" className="footer-cta">
                <span className="footer-cta-text">(tell us more)</span>
                <span className="footer-cta-arrow">↗</span>
              </a>
            </div>

            <div className="footer-col">
              <a
                href="https://www.instagram.com/madebydianna"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/diannad"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
              <br />
              <a
                href="https://github.com/561Aloha"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </div>

            <div className="footer-col">
              <span>portfolio 2026</span>
              <br />
              <span className="footer-muted">built by dianna dimambro</span>
            </div>
          </motion.div>

          <motion.div
            className="footer-brand-wrap"
            style={{ y: brandY, opacity: brandOpacity }}
          >
            <h2 className="footer-brand">madebydianna</h2>
          </motion.div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Footer;