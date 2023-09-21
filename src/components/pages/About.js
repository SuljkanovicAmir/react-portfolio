import '../../styles/About.css'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import PreviewContact from '../pages/preview/PreviewContact'

const About = React.forwardRef((props, forwardedRef) => {

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, []);

    return (
      <>
      <motion.div 
        className="about-div" 
        ref={forwardedRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity: 0}}
        transition={{
          type: "easeInOut",
          duration: '0.2',
          delay: 0, 
        }}
      > 
      <div className='about-me-name'>
        <div>Amir Suljkanovic — <br></br> Frontend Developer</div>
      </div>
        <div  className='about-text'>
          <div>
            <span>
              I'm a 25-year-old graduate of the Faculty of Criminology, 
              Criminalistics and Security Studies at the University of Sarajevo. 
              While studying security management, 
              I discovered a passion for programming and web development, which has led me to explore this field over the past 2 years.
            </span>
            <span>
              I have taken various credible online courses, including freeCodeCamp, Harvard's CS50, Full Stack Open, and 
              The Odin Project, which have helped me develop a strong foundation in HTML, CSS, and the basics of JavaScript, React and Nextjs. With these skills, 
              I have been able to create responsive and visually appealing websites that are both functional and user-friendly.
            </span>
            <span>I am excited to continue my journey as a web developer and look forward 
              to taking on new challenges and expanding my knowledge in this constantly evolving field. 
              <br />
              <br />
              Thank you for visiting my portfolio, and I hope you enjoy exploring my projects and learning more about me.
            </span>
          </div>
        </div>
      </motion.div>
          <PreviewContact />
</>
    );
  })
  
  export default About;
  