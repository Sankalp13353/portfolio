import "../styles/project.css";

function Projects() {
  const projects = [
    {
      title: "RentEase",
      description: "A full-stack rental platform that simplifies property management, enabling seamless interactions between owners and tenants with an efficient, organized workflow.",
      tags: ["React.js", "Node.js", "Express.js", "REST APIs", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
      link: "https://rent-ease-psi.vercel.app/"
    },
    {
      title: "Movie Recommendation website",
      description: "A movie recommendation app that fetches real-time data from an external API, enabling users to discover trending films and explore detailed movie information.",
      tags: ["React.js", "JavaScript", "REST APIs", "HTML", "CSS"],
      link: "https://movie-recommendation-5vdrzgcb6-sankalp13353s-projects.vercel.app/"
    },
    {
      title: "Pomodoro Timer website",
      description: "A Pomodoro timer web app designed to boost productivity by helping users manage focused work sessions and structured breaks through a simple, distraction-free interface.",
      tags: ["React.js", "JavaScript", "HTML", "CSS" ],
      link: "https://pomodoro-delta-opal.vercel.app/"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Featured <span className="highlight">Projects</span></h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card glass-panel" key={index}>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
            <div className="card-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button>View Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
