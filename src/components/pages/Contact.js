import { useEffect } from "react";
import "../../styles/Contact.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Contact() {
  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-contact">
      <section>
        <motion.div
          className="contact-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h1>Say Hello.</h1>
          <p>
            Thank you for visiting my portfolio website. Whether you have a
            project idea or just want to connect, please don't hesitate to
            contact me anytime.
          </p>
        </motion.div>
        <motion.div
          className="contact-email"
          initial={{ opacity: 0, x: "-160px" }}
          animate={{ opacity: 1, x: "0" }}
          exit={{ opacity: 0, x: "-160px" }}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          <p>Business inquiries / Contact</p>
          <div className="contact-hover">
            <Link to="/projects">suljkanovic.amir@hotmail.com</Link>
            <span></span>
          </div>
        </motion.div>
        <div className="contact-socials-div">

        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, x: "-220px" }}
          animate={{ opacity: 1, x: "0" }}
          exit={{ opacity: 0, x: "-220px" }}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          <p>Checkout my</p>
          <div className="contact-hover">
            <Link to="/projects">Facebook</Link>
            <span></span>
          </div>
        </motion.div>
        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, x: "-260px" }}
          animate={{ opacity: 1, x: "0" }}
          exit={{ opacity: 0, x: "-260px" }}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          <p>Download my</p>
          <div className="contact-hover">
            <Link to="/projects">Resume</Link>
            <span></span>
          </div>
        </motion.div>
        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, x: "-220px" }}
          animate={{ opacity: 1, x: "0" }}
          exit={{ opacity: 0, x: "-220px" }}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          <p>Connect on</p>
          <div className="contact-hover">
            <Link to="/projects">LinkedIn</Link>
            <span></span>
          </div>
        </motion.div>
        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, x: "-220px" }}
          animate={{ opacity: 1, x: "0" }}
          exit={{ opacity: 0, x: "-220px" }}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          <p>Checkout my</p>
          <div className="contact-hover">
            <Link to="/projects">Github</Link>
            <span></span>
          </div>
        </motion.div>
        </div>

      </section>
    </main>
  );
}

export default Contact;
