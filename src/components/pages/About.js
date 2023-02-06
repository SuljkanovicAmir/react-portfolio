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
          <p>
            I am currently a final semester student at the Faculty of Crminalistics, 
            Criminology and Security Studies at the University of Sarajevo - over
            the past year I have decided to fulfill my interest in programming by
            attending various credible online courses and researching about
            web development. Through courses such as freeCodeCamp, Harvard's CS50,
            Full Stack Open, The Odin Project, I became well acquainted with HTML,
            CSS and the basics of JavaScript, React and Python.
          </p>
        </div>
      </motion.div>
    );
  })
  
  export default About;
  