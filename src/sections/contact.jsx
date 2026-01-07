import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Thank you! I will get back to you as soon as possible.",
          });
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus({ type: "", message: "" }), 5000);
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again later.",
          });
          console.error(error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>
          Get In <span className="highlight">Touch</span>
        </h2>
        <p className="contact-desc">
          Have a project in mind or just want to say hi? Feel free to send me a
          message!
        </p>

        <div className="contact-container glass-panel">
          <form className="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status.message && (
              <p className={`status-message ${status.type}`}>
                {status.message}
              </p>
            )}
          </form>
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
