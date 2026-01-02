import "../styles/home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Sankalp</span></h1>
        <p className="subtitle">A Computer Science Student & Aspiring Developer</p>
        <p className="description">
          Turning ideas into smooth, visually refined digital experiences using today’s web technologies.
        </p>
        <div className="cta-container">
          <a href="#projects"><button className="primary-btn">View Work</button></a>
          <a href="#contact"><button className="secondary-btn">Contact Me</button></a>
        </div>
      </div>
    </section>
  );
}

export default Home;
