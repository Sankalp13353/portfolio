import "../styles/about.css";
import { Briefcase, GraduationCap, Code2, Database, Brain, Wrench, GitBranch, Layers } from "lucide-react";

function About() {
  const education = [
    {
      degree: "Bachelor of Technology (Artificial Intelligence)",
      institution: "Newton School of Technology",
      period: "2024 - 2028",
      grade: "Grade: 7.2 / 10.0"
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Delhi Public School",
      period: "2023 - 2024",
      grade: "Grade: 88.0%"
    },
    {
      degree: "Matriculation (Class X)",
      institution: "Delhi Public School",
      period: "2021 - 2022",
      grade: "Grade: 89.0%"
    }
  ];

  const experience = [
    {
      role: "Web Dev and Design (Remote)",
      company: "Rainmaker FMCG",
      period: "Dec 2024 - Feb 2025",
      points: [
        "Created UI/UX designs, brand identity packages, and 10+ logos for cleaner visual experiences.",
        "Collaborated with the design team to produce high-quality layouts and digital assets using modern tools.",
        "Developed creative thinking and solid front-end concepts on the job."
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={16} />,
      skills: ["JavaScript", "Python", "TypeScript", "SQL", "HTML5", "CSS3"]
    },
    {
      title: "AI / ML & GenAI",
      icon: <Brain size={16} />,
      skills: ["GenAI", "LangChain", "LangGraph", "LLMs", "Machine Learning", "OpenAI API"]
    },
    {
      title: "Databases & Data Tools",
      icon: <Database size={16} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "NoSQL", "Excel", "Tableau"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers size={16} />,
      skills: ["React.js", "React Native", "Tailwind CSS", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "APIs & Testing",
      icon: <Wrench size={16} />,
      skills: ["REST APIs", "OAuth 2.0"]
    },
    {
      title: "Cloud & DevOps",
      icon: <GitBranch size={16} />,
      skills: ["Git", "GitHub"]
    },
    {
      title: "Domain & Business Skills",
      icon: <Briefcase size={16} />,
      skills: ["UI/UX", "Figma", "Data Structure"]
    }
  ];

  return (
    <section className="about" id="about">
      <div className="soft-glow" style={{ top: "30%", right: "10%" }}></div>

      <div className="about-container">
        <h2>About & <span className="highlight">Skills</span></h2>
        
        {/* Intro bio */}
        <div className="intro-bio-card glass-panel">
          <h3>Professional Summary</h3>
          <p>
            A motivated and analytical problem-solver with a strong foundation in software development and data-driven thinking, skilled at building structured solutions and resolving complex challenges efficiently. I bring a logical, detail-oriented approach to improving systems and delivering impactful results. I aspire to grow into a versatile full-stack and AI-driven professional, committed to continuous learning and creating scalable solutions that bridge technology with real-world needs.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="timeline-grid">
          {/* Work Experience */}
          <div className="timeline-section">
            <div className="section-title-box">
              <Briefcase size={20} className="section-title-icon" />
              <h3>Experience</h3>
            </div>
            <div className="timeline-list">
              {experience.map((exp, index) => (
                <div className="timeline-card glass-panel" key={index}>
                  <span className="timeline-date">{exp.period}</span>
                  <h4>{exp.role}</h4>
                  <span className="company-name">{exp.company}</span>
                  <ul>
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="timeline-section">
            <div className="section-title-box">
              <GraduationCap size={20} className="section-title-icon" />
              <h3>Education</h3>
            </div>
            <div className="timeline-list">
              {education.map((edu, index) => (
                <div className="timeline-card glass-panel" key={index}>
                  <span className="timeline-date">{edu.period}</span>
                  <h4>{edu.degree}</h4>
                  <span className="institution-name">{edu.institution}</span>
                  <span className="education-grade">{edu.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid Section */}
        <div className="skills-section">
          <h3>Skills & Expertise</h3>
          <div className="skills-categories-grid">
            {skillCategories.map((category, index) => (
              <div className="skill-cat-card glass-panel" key={index}>
                <div className="cat-header">
                  {category.icon}
                  <h4>{category.title}</h4>
                </div>
                <div className="cat-tags">
                  {category.skills.map((skill, sIdx) => (
                    <span className="skill-tag" key={sIdx}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
