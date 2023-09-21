import { Link } from "react-router-dom";
import "../../../styles/Contact.css";
import GH from "../../../styles/images/gh.svg";
import LinkedIn from "../../../styles/images/linkd.svg";

function PreviewContact() {
  return (
    <div className="contact-div-preview">
      <div className="contact-text-preview">
        <div className="cp-get-in-touch">
          <h1>Get in touch</h1>
          <div className="cp-description">
            I'm currently looking for a role as a front-end web developer.
            Whether you have a question, an offer or just want to chat, send me
            an email and I will get back to you!
          </div>
          <div className="projects-link">
            <Link to="/contact" className="section-hover underline">
              <div className="flip-wrap">
                <div className="flip">
                  <span>Contact Me</span>
                  <span>Contact Me</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="cp-name">
          <p>Amir Suljkanović</p>
          <p>suljkanovic.amir@hotmail.com</p>
          <p>Gradačac, Bosnia and Herzegovina</p>
          <div className="footer-socials ">
            <a
              href="https://www.linkedin.com/in/amir-suljkanovic/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="Linkedin" className="socicon" />
            </a>
            <a
              href="https://github.com/SuljkanovicAmir"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GH} alt="Github" className="socicon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewContact;
