import { motion } from 'framer-motion'
import Socials from './Socials';

function Home() {



    return (
      <motion.div className="homeDiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }}
      >
        <h1 className="description">home.</h1>
        <motion.div className="homeText"
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{
            type: "easeInOut",
            duration: '1.4',
            delay: 0.4,
            }}>
            <div>Hello.</div>
            <div>I'm</div>
            <div>Amir</div>
          </motion.div>
        <Socials />  
      </motion.div>
    );
  }
  
  export default Home;
  