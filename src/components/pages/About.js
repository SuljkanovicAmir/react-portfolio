import '../../styles/About.css'
import { motion } from 'framer-motion'
import React from 'react'

const About = React.forwardRef((props, forwardedRef) => {
    return (
      <motion.div 
        className="aboutDiv" 
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
        <h1 className="description">about me.</h1>
        <div  className='aboutText'>
          <div>
            <span>Hello, my name is <span className='about-name'>Amir Suljkanović </span> 
              and I'm a 25-year-old graduate of the Faculty of Criminology, 
              Criminalistics and Security Studies at the University of Sarajevo. 
              While studying security management, 
              I discovered a passion for programming and web development, which has led me to explore this field over the past 2 years.
            </span>
            <span>
              I have taken various credible online courses, including freeCodeCamp, Harvard's CS50, Full Stack Open, and 
              The Odin Project, which have helped me develop a strong foundation in HTML, CSS, and the basics of JavaScript, React, and Nextjs. With these skills, 
              I have been able to create responsive and visually appealing websites that are both functional and user-friendly.
            </span>
            <span>I am excited to continue my journey as a web developer and look forward 
              to taking on new challenges and expanding my knowledge in this constantly evolving field. 
              Thank you for visiting my portfolio, and I hope you enjoy exploring my projects and learning more about me.
            </span>
          </div>
        </div>
      </motion.div>
    );
  })
  
  export default About;
  