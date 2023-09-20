import "../../styles/Projects.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MoviesMainImg from "../../styles/images/projects-main/movies_project_main.jpg";
import ShoppingMainImg from "../../styles/images/projects-main/shoping_project_main.jpg";
import RestaurantMainImg from "../../styles/images/projects-main/rest_project_main.jpg";
import ArhiMainImg from "../../styles/images/projects-main/arhitect_project_main.jpg";
import WaldoMainImg from "../../styles/images/projects-main/waldo_project_main.jpg";
import PreviewContact from "../pages/preview/PreviewContact";

function Projects() {
  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        className="projects-div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "easeInOut",
          duration: "0.2",
          delay: 0,
        }}
      >
        <h1 className="projects-title">
          My  Projects
        </h1>
        <motion.div
          className="projects"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: "1.2",
            delay: 0.4,
          }}
        >
          <Link to="/projects/moviesandtv" className="project">
            <img className="projects-main-img" src={MoviesMainImg} alt="shop" />
            <div>
              <h1>Movies and TV</h1>
              <p>Nextjs, The Movie Database</p>
            </div>
          </Link>
          <Link to="/projects/shopping" className="project">
            <img
              className="projects-main-img"
              src={ShoppingMainImg}
              alt="shop"
            />
            <div>
              <h1>Shopping App</h1>
              <p>React, Axios, React Router</p>
            </div>
          </Link>
          <Link to="/projects/restaurant" className="project">
            <img
              className="projects-main-img"
              src={RestaurantMainImg}
              alt="shop"
            />
            <div>
              <h1>Restaurant</h1>
              <p>The Odin Project: Restaurant webpage</p>
            </div>
          </Link>
          <Link to="/projects/arhitectstudio" className="project">
            <img className="projects-main-img" src={ArhiMainImg} alt="shop" />
            <div>
              <h1>Arhitect Studio Website</h1>
              <p>The Odin Project: Weather App</p>
            </div>
          </Link>
          <Link to="/projects/photo-tagging" className="project">
            <img className="projects-main-img" src={WaldoMainImg} alt="shop" />
            <div>
              <h1>Photo Tagging App</h1>
              <p>[React, Firebase, React Router]</p>
            </div>
          </Link>
        </motion.div>
      </motion.div>
      <PreviewContact />
    </>
  );
}

export default Projects;
