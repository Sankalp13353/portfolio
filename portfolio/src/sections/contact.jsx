import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>
          Get In <span className="highlight">Touch</span>
        </h2>
        <p className="contact-desc">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          <br />
          Feel free to reach out directly via email:
        </p>

        <div className="contact-container" style={{ margin: "2rem 0" }}>
          <a
            href="mailto:sankalp13353@gmail.com"
            className="email-link"
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "var(--text-main)",
              textDecoration: "none",
              paddingBottom: "4px",
              borderBottom: "2px solid var(--text-main)"
            }}
          >
            sankalp13353@gmail.com
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/sankalp-83304b278/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sankalp13353"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
