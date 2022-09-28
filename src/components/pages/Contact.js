import '../../styles/Contact.css';
import { motion } from 'framer-motion'


function Contact() {
    return (
    <motion.div 
      className="contactDiv"
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x:0 }}
      transition={{
        type: "easeInOut",
        duration: '1',
        delay: 0, 
      }}
      >
      <h1 className="description">contact me.</h1>
      <div className="contactText">
        <h1>Get in touch</h1>
        <div>I'm currently looking for a role as a front-end web developer. 
              Whether you have a question, an offer or just want to chat, 
              send me an email and I will get back to you!</div>
      </div>
      <a href="mailto:amirsuljkanoviccode@gmail.com">
        <button className="contactBtn">SAY HI</button>
      </a>
    </motion.div>
    );
  }
  
  export default Contact;
  