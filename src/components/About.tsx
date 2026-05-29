import "./styles/About.css";
import HoverLinks from "./HoverLinks";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Hi, I'm an Aspiring Software Developer focused on architecting high-performance, scalable systems. My expertise spans designing optimized database schemas, building secure RESTful APIs, and implementing state-driven user interfaces.
        </p>
        <p className="para" style={{ marginTop: "20px" }}>
          Driven by clean code principles and strong fundamentals in DSA, I bridge backend efficiency with frontend performance to build seamless, end-to-end production-ready applications.
        </p>
        <div style={{ marginTop: "40px" }} className="para">
          <a href="#tech" data-href="#tech" className="resume-button" style={{ display: "inline-flex", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "30px", padding: "10px 25px" }}>
            <HoverLinks text="MY TECH STACKS" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
