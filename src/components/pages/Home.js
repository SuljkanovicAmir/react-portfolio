import { motion } from 'framer-motion'
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Socials from './Socials';
import React, {useRef} from 'react';

function Home() {

  const ref = useRef(null);


  const handleScrollBtn = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }


    return (
      <>
      <motion.div className="homeDiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }}
        transition={{
          type: "easeInOut",
          duration: '0.2',
          delay: 0, 
        }}
      >
        <h1 className="description">home.</h1>
        <div className="homeText">
            <motion.div 
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
              type: "easeInOut",
              duration: '0.6',
              delay: 0.8, 
            }}>Hello.</motion.div>
            <motion.div
              initial={{ y: 100,  opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
              type: "easeInOut",
              duration: '0.6',
              delay: 1.1, 
            }}>I'm</motion.div>
            <motion.div
              initial={{ y: 100,  opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
              type: "easeInOut",
              duration: '0.6',
              delay: 1.5, 
            }}>Amir</motion.div>
          </div>
        <Socials />  
        <div className='scroll-down-btn' role='button' onClick={handleScrollBtn}></div>
      </motion.div>
      <About ref={ref} />
      <Projects />
      <Contact />
      </>
    );
  }
  
  export default Home;
  