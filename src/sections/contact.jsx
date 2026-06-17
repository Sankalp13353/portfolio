import { useState } from "react";
import "../styles/contact.css";
import { Mail, Copy, Check, ExternalLink, Trophy, Users, Star } from "lucide-react";
import { Linkedin, Github } from "../components/icons";

function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "sankalp13353@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const achievements = [
    {
      title: "Google Student College Ambassador",
      organization: "Google",
      description: "Selected to represent Google on campus, organizing technical events and fostering a community of student developers.",
      icon: <Star size={18} className="achievement-icon blue" />
    },
    {
      title: "XR Creator Hackathon",
      organization: "WAVES Summit (Nov 2024)",
      description: "Qualified for Round 01/02 of the XR Creator Hackathon for an innovative XR solution concept focused on user experience.",
      icon: <Trophy size={18} className="achievement-icon blue" />
    },
    {
      title: "Hacktoberfest Contributor",
      organization: "Open-Source Collaboration",
      description: "Contributed to open-source projects, raising and merging multiple pull requests while collaborating with global developers.",
      icon: <Users size={18} className="achievement-icon green" />
    },
    {
      title: "College Basketball Team",
      organization: "Inter-College Tournaments",
      description: "Represented the college basketball team, demonstrating teamwork, discipline, and competitive performance under pressure.",
      icon: <Star size={18} className="achievement-icon yellow" />
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="soft-glow" style={{ bottom: "-10%", left: "50%", transform: "translateX(-50%)" }}></div>

      <div className="contact-container">
        <h2>Achievements & <span className="highlight">Contact</span></h2>
        
        <div className="contact-grid">
          <div className="achievements-column">
            <h3>Activities & Credentials</h3>
            <div className="achievements-list">
              {achievements.map((item, idx) => (
                <div key={idx} className="achievement-card glass-panel">
                  <div className="achievement-header">
                    {item.icon}
                    <div>
                      <h4>{item.title}</h4>
                      <span className="achievement-org">{item.organization}</span>
                    </div>
                  </div>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-column">
            <h3>Get In Touch</h3>
            <div className="contact-card glass-panel">
              <div className="contact-card-header">
                <Mail size={24} className="mail-icon" />
                <h4>Let's work together!</h4>
                <p>
                  I'm always open to discussing new projects, internships, or full-time opportunities. Reach out directly via email.
                </p>
              </div>

              <div className="email-action-area">
                <div className="email-row">
                  <input 
                    type="text" 
                    value={emailAddress} 
                    readOnly 
                    className="email-text-box" 
                  />
                  <button 
                    onClick={handleCopyEmail} 
                    className={`email-copy-btn ${copied ? "copied" : ""}`}
                    title="Copy Email"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <a href={`mailto:${emailAddress}`} className="email-send-btn">
                  <span>Send Email Directly</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="contact-socials-box">
                <span className="socials-label">Connect elsewhere</span>
                <div className="socials-badges">
                  <a
                    href="https://www.linkedin.com/in/sankalp-83304b278/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-badge linkedin"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Sankalp13353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-badge github"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
