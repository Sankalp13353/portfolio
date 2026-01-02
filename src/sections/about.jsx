import "../styles/about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About <span className="highlight">Me</span></h2>
        <div className="about-text glass-panel">
          <p>
            A Full Stack Developer focused on solving real-world problems, with a rating of 1417, and a CodeForces rating of 934. Built a full-stack rental management platform featuring secure authentication, role-based access, and complete property-listing functionality using React, Node.js, and Prisma, with an emphasis on learning and performance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
