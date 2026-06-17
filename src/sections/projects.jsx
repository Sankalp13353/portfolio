import "../styles/project.css";
import { BrainCircuit, Building2, Film, Timer, Sparkles, ArrowUpRight } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Customer Churn & Agentic Retention",
      date: "April 2026",
      description: "Developed an AI-driven telecom churn prediction and retention intelligence pipeline. Built a predictive pipeline using XGBoost and data preprocessing, extended into an Agentic AI workflow using LangGraph, FAISS-based RAG, and Groq LLM to generate explainable retention business strategies.",
      tags: ["LangGraph", "XGBoost", "Python", "Groq LLM", "FAISS RAG", "Streamlit"],
      link: "https://customerchurnprediction-2k327gcbblu4dawrhawsit.streamlit.app/",
      icon: <BrainCircuit size={20} className="project-card-icon" />
    },
    {
      title: "InterviewStrategy AI Platform",
      date: "March 2026",
      description: "Built an AI-powered interview preparation platform using Groq API, Node.js, and Express.js. Created technical and behavioral questions, along with tailored preparation roadmaps and readiness score. Implemented resume parsing for job-specific optimization.",
      tags: ["Groq API", "React.js", "Node.js", "Express.js", "MongoDB", "Resume Parsing"],
      link: "https://interview-helper-ten-ruby.vercel.app/login",
      icon: <Sparkles size={20} className="project-card-icon" />
    },
    {
      title: "RentEase Property Platform",
      date: "November 2025",
      description: "Identified inefficiencies in rental systems, including fragmented communication and manual processes. Built a full-stack platform using React.js, Node.js, Express.js, and Prisma ORM for database management. Centralized listings and automated onboarding for seamless owner-tenant interaction.",
      tags: ["React.js", "Node.js", "Express.js", "Prisma ORM", "MongoDB", "REST APIs"],
      link: "https://rent-ease-psi.vercel.app/",
      icon: <Building2 size={20} className="project-card-icon" />
    },
    {
      title: "React Resume Builder",
      date: "2026",
      description: "I built a Resume Builder web application that allows users to create professional resumes through an intuitive interface, preview them in real time, and download them as PDF documents. I have personally used resume-building tools while applying for internships and opportunities and wanted a simpler, free, and user-friendly alternative.",
      tags: ["React.js", "Resume Builder", "PDF Generation", "Real-Time Preview", "Responsive Design", "JavaScript", "HTML5","CSS3"],
      link: "https://react-resume-builder-blush.vercel.app/",
      icon: <Building2 size={20} className="project-card-icon" />
    },
    {
      title: "CineSuggest Recommendations",
      date: "June 2025",
      description: "A movie recommendation web app fetching real-time data from TMDB external API, enabling users to filter movies by genre and view trending detailed movie information.",
      tags: ["React.js", "JavaScript", "REST APIs", "CSS Grid"],
      link: "https://movie-recommendation-5vdrzgcb6-sankalp13353s-projects.vercel.app/",
      icon: <Film size={20} className="project-card-icon" />
    },
    {
      title: "FocusTimer Productivity Tool",
      date: "May 2025",
      description: "A Pomodoro timer web app designed to boost productivity by helping users manage focused work sessions and structured breaks through a simple, distraction-free interface.",
      tags: ["React.js", "JavaScript", "HTML5", "CSS Modules"],
      link: "https://pomodoro-delta-opal.vercel.app/",
      icon: <Timer size={20} className="project-card-icon" />
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="soft-glow" style={{ bottom: "20%", left: "10%" }}></div>

      <div className="projects-container">
        <h2>Featured <span className="highlight">Projects</span></h2>
        
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card glass-panel" key={index}>
              <div className="project-card-header">
                <div className="project-icon-box">
                  {project.icon}
                </div>
                <div className="project-title-box">
                  <h3>{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span className="project-tag" key={tIdx}>{tag}</span>
                ))}
              </div>

              <div className="project-link-box">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-demo-link"
                >
                  <span>View Live Demo</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
