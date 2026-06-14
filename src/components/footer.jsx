import "../styles/footer.css";
import { Cpu } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Sankalp. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <Cpu size={14} className="footer-tech-icon" />
          <span>Designed & Engineered by Sankalp</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
