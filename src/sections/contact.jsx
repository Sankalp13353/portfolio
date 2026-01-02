import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Get In <span className="highlight">Touch</span></h2>
        <p className="contact-desc">
          Have a project in mind or just want to say hi?
          Feel free to send me a message!
        </p>

        <div className="contact-container glass-panel">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/sankalp-83304b278/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="https://github.com/Sankalp13353" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
