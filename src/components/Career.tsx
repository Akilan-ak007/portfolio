import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <h2 style={{ margin: "50px 0 10px 0" }}>
            From Scratch <span>to</span>
            <br /> Silverware
          </h2>
          <span style={{ color: "var(--accentColor)", letterSpacing: "3px", textTransform: "uppercase", fontSize: "16px", fontWeight: "300" }}>
            The Story of My Technical Growth
          </span>
        </div>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Starting From Scratch</h4>
                <h5>Zero to Fundamentals</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started with zero background in tech. Navigated the fundamentals of programming, embraced the steep learning curve, and turned initial confusion into daily curiosity.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building the Engine</h4>
                <h5>CS Fundamentals & DSA</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Shifted focus to core computer science fundamentals. Mastered Data Structures & Algorithms (DSA), built initial full-stack applications, and practiced consistency over comfort.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bringing Home the Silverware</h4>
                <h5>Hackathons & Engineering</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Stepped into the competitive arena. Transformed early setbacks into multiple hackathon victories, secured software engineering internships, and gained real-world experience shipping production-ready code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
