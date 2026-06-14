import "../styles/home.css";
import { ArrowRight, BrainCircuit, Code, Trophy, Sparkles } from "lucide-react";

function Home() {
  return (
    <section className="home" id="home">
      <div className="soft-glow" style={{ top: "10%", left: "15%" }}></div>
      <div className="soft-glow" style={{ bottom: "10%", right: "15%" }}></div>

      <div className="home-container">
        {/* Left Column: Hero Text */}
        <div className="hero-text-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">Open to Internships & Software Roles</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sankalp</span>
          </h1>
          
          <p className="hero-subtitle">Software Engineer & AI/ML Developer</p>
          
          <p className="hero-description">
            B.Tech in Artificial Intelligence student at Newton School of Technology. Specialize in full-stack platforms, Generative AI applications, and agentic workflows.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View My Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Google style Developer Card */}
        <div className="hero-card-container">
          <div className="profile-focus-card glass-panel">
            <div className="card-badge">
              <Sparkles size={14} className="badge-icon" />
              <span>AI & Full Stack Focus</span>
            </div>
            
            <div className="card-body">
              <div className="focus-header">
                <BrainCircuit size={32} className="focus-icon" />
                <div>
                  <h3>Academic Focus</h3>
                  <p>B.Tech in Artificial Intelligence (2024 - 2028)</p>
                  <p className="inst-name">Newton School of Technology</p>
                </div>
              </div>

              <div className="stats-divider"></div>

              <div className="ratings-box">
                <h4 className="ratings-title">
                  <Trophy size={14} />
                  <span>Competitive Programming Ratings</span>
                </h4>
                
                <div className="ratings-grid">
                  <div className="rating-badge-item">
                    <span className="rating-name">LeetCode</span>
                    <span className="rating-score">1338</span>
                  </div>
                  <div className="rating-badge-item">
                    <span className="rating-name">Codeforces</span>
                    <span className="rating-score">1016</span>
                  </div>
                  <div className="rating-badge-item">
                    <span className="rating-name">CodeChef</span>
                    <span className="rating-score">1227</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
