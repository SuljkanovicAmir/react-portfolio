import { motion } from 'framer-motion'
import Socials from './Socials';

function Home() {



    return (
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
              delay: 0.4, 
            }}>Hello.</motion.div>
            <motion.div
              initial={{ y: 100,  opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
              type: "easeInOut",
              duration: '0.6',
              delay: 0.8, 
            }}>I'm</motion.div>
            <motion.div
              initial={{ y: 100,  opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
              type: "easeInOut",
              duration: '0.6',
              delay: 1.2, 
            }}>Amir</motion.div>
          </div>
        <Socials />  
      </motion.div>
    );
  }
  
  export default Home;
  