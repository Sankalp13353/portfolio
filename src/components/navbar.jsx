import "../styles/navbar.css";
import { Code } from "lucide-react";
import { Github } from "./icons";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Code className="brand-icon" size={18} />
        <span className="brand-name">Sankalp<span className="brand-dot">.dev</span></span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home" className="nav-item">Home</a></li>
        <li><a href="#about" className="nav-item">About & Skills</a></li>
        <li><a href="#projects" className="nav-item">Projects</a></li>
        <li><a href="#contact" className="nav-item">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <a 
          href="https://github.com/Sankalp13353" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-btn"
          aria-label="GitHub Profile"
        >
          <Github size={18} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
