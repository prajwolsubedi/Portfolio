import "./FooterStyles.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kathmandu, Bafal</p>
              <p>Nepal</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9840716856
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              prajwolsubedizzz@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            {" "}
            This is me Prajwol Subedi. Working towards making this beautiful
            place where we live more beautiful
          </p>
          <div className="social">
            <Link target="_blank" rel="noopener noreferrer" to="https://github.com/prajwolsubedi">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/prajwol-subedi-506537219/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
