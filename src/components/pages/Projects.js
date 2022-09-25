import '../../styles/Projects.css';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
 

function Projects() {
    return (
      <motion.div className="projectDiv" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="description">my projects.</h1>
        <motion.div className='projects'
           initial={{ x: -1000 }}
           animate={{ x: 0 }}
           transition={{
            ease: "easeInOut",
            duration: '1.5',
            delay: 0.5,
           }}
        >
          <Link to='/projects/restaurant' className="project">
            <h1>Restaurant</h1>
            <p>The Odin Project: Restaurant webpage</p>
          </Link>
          <Link to='/projects/vehicle' className="project">
            <h1>Vehicle App</h1>
            <p>React App with fake REST API</p>
          </Link>
          <Link to='/projects/weather' className="project">
            <h1>The Weather App</h1>
            <p>The Odin Project: Weather App</p>
          </Link>
          <Link to='/projects/weather' className="project">
            <h1>Shopping App</h1>
            <p>React App using Axios and React Router</p>
          </Link>
        </motion.div>
      </motion.div>
    );
  }
  
  export default Projects;
  