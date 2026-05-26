import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "AI-Powered Resume Analyzer",
    category: "Full-Stack Developer",
    tools: `Developed a full-stack React, puter.js, and TypeScript resume analyzer with a Tailwind CSS dashboard, boosting applicant ATS shortlisting rates by 40%.

Engineered an NLP matching engine and integrated Puppeteer for automated document extraction, delivering precise keyword scoring in under 3 seconds.`,
    image: "/images/ai-resume.png",
  },
  {
    title: "R-Choice",
    category: "Frontend & API Developer (Team of 4)",
    tools: `Developed the Next.js/React frontend and APIs for a 5,000+ user portal, slashing approval times by 66% while collaborating on the PostgreSQL/Drizzle backend.

Built secure, real-time analytics dashboards (Recharts) optimizing performance to <1.5s LCP and ensuring WCAG 2.1 AA compliance.

Integrated Cloudinary, Nodemailer, and jsPDF workflows to automate media handling, emails, and certificate generation for an 8-role, 6-tier pipeline.`,
    image: "/images/r-choice.png",
  },
  {
    title: "TNEB-GridSense",
    category: "IoT Architect & Frontend Developer",
    tools: `Architected an industrial IoT telemetry system integrating ESP32, LoRa SX1278, and precision sensors (ADS1115, ACS712) with automated trip-relays to reduce grid downtime by 30%.

Developed a React/Tailwind dashboard utilizing CenseOps to translate complex hardware metrics (INA219) and cloud-based predictive algorithms into actionable visual analytics.`,
    image: "/images/tn-gridsense.png",
  },
  {
    title: "🌊 NeerAI",
    category: "IoT Architect & Full-Stack Developer (Team of 4)",
    tools: `Tech Stack: ESP32 • C++ • Bun.js • Elysia • Next.js • WebSockets • Recharts

A 3-tier digital twin platform built to eliminate municipal water waste and optimize infrastructure through Edge AI and predictive modeling.`,
    image: "/images/neer-ai.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
