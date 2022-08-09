import { motion } from 'framer-motion'

function Home() {
    return (
      <motion.div className="homeDiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }}
      >
        <h1 className="description">home.</h1>
        <div className="homeText">
          <motion.h1 
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{
            type: "easeInOut",
            duration: '1.4',
            delay: 0.3,
            }}
          >Hi, I'm Amir Suljkanović.</motion.h1>
          <div>I'm Junior Front-end Developer <br></br>from Bosnia and Herzegovina.</div>
        </div>  
      </motion.div>
    );
  }
  
  export default Home;
  