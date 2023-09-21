import "../../../styles/Projects.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import PhoneImg from "../../../styles/images/movies-project/phone.jpg";
import PhoneImg2 from "../../../styles/images/movies-project/phone2.jpg";
import Movies3 from "../../../styles/images/movies-project/movies-3.jpg";
import MoviesLogo from "../../../styles/images/movies-project/logo.png";

import ShopingImg from "../../../styles/images/ShoppingApp/monitor.jpg";
import ShoppingLogo from "../../../styles/images/ShoppingApp/logo.png";

import MP from "../../../styles/images/m-portfolio/m-p.jpg";
import MP2 from "../../../styles/images/m-portfolio/m-p22.jpg";
import MP3 from "../../../styles/images/m-portfolio/m-p3.jpg";
import MLogo from "../../../styles/images/m-portfolio/logo.png";


function PreviewProjects() {
  

  const [projectOne, inViewProjectOne] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  const [projectTwo, inViewProjectTwo] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  const [projectThree, inViewProjectThree] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.div
      className="projects-div-preview"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "easeInOut",
        duration: "0.2",
        delay: 0,
      }}
    >
      <div className="preview-projects">
        <Link
          to="/projects/moviesandtv"
          ref={projectOne}
          className="project-preview"
        >
          <div className="project-preview-images-div">
          <motion.div
            className="image-wrapper"
            initial={{ opacity: 0, scale: 1.2, y: "50px" }}
            animate={inViewProjectOne ? { opacity: 1, y: "0px", scale: 1 } : {}}
            exit={{ opacity: 0, scale: 1.2, y: "50px" }}
            transition={{
              delay: 0.1,
              duration: 1.2,
              ease: [0.7, 0, 0.3, 1],
            }}
          >
            <img className="img-2" src={PhoneImg} alt="menu" />
          </motion.div>
          <motion.div
            className="image-wrapper"
            initial={{ opacity: 0, scale: 1.2, y: "-50px" }}
            animate={inViewProjectOne ? { opacity: 1, y: "0px", scale: 1 } : {}}
            exit={{ opacity: 0, scale: 1.2, y: "-50px" }}
            transition={{
              delay: 0.2,
              duration: 1.2,
              ease: [0.7, 0, 0.3, 1],
            }}
          >
            <img className="img-2" src={PhoneImg2} alt="menu" />
          </motion.div>
          <motion.div
            className="image-wrapper third-img"
            initial={{ opacity: 0, scale: 1.2, y: "50px" }}
            animate={inViewProjectOne ? { opacity: 1, y: "0px", scale: 1 } : {}}
            exit={{ opacity: 0, scale: 1.2, y: "50px" }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.7, 0, 0.3, 1],
            }}
          >
            <img className="img-2" src={Movies3} alt="menu" />
          </motion.div>
         </div>
          <motion.div
            className="text-div"
            initial={{ opacity: 0, scale: 1.4, x: "200px" }}
            animate={inViewProjectOne ? { opacity: 1, x: "0px", scale: 1 } : {}}
            exit={{ opacity: 0, scale: 1.4, x: "200px" }}
            transition={{
              delay: 0.4,
              duration: 1.4,
              ease: [0.7, 0, 0.3, 1],
            }}
          >
            <div className="title-div">
              <img src={MoviesLogo} alt="movies-logo" />
              <h1>Movies and TV</h1>
            </div>
            <p>
              Using Next.js, TMDB and Firebase, this application allows you to
              search, filter and sort content. Additionally, you can create an
              account to build a watchlist and mark content as watched.
            </p>
          </motion.div>
        </Link>
        <Link
          to="/projects/shopping"
          ref={projectTwo}
          className="project-preview"
        >
          <motion.div
            className="text-div middle"
            initial={{ opacity: 0, scale: 1.4, x: "-200px" }}
            animate={inViewProjectTwo ? { opacity: 1, x: "0px", scale: 1 } : {}}
            exit={{ opacity: 0, scale: 1.4, x: "-200px" }}
            transition={{
              delay: 0.3,
              duration: 1.4,
              ease: [0.7, 0, 0.3, 1],
            }}
          >
            <div className="title-div">
              <img src={ShoppingLogo} alt="shopping-logo" />
              <h1>Shopping App</h1>
            </div>
            <p>
              Phone shopping website developed with React, Axios and React
              Router. You can explore, filter, and sort through phone options
              and even add your favorite devices to your shopping cart.
            </p>
          </motion.div>
          <motion.div
            className="image-wrapper2"
            initial={{ opacity: 0, scale: 1.1, x: "200px" }}
            animate={inViewProjectTwo ? { opacity: 1, x: "0px", scale: 1 } : {}}
            exit={{ opacity: 0, scale: 1.1, x: "200px" }}
            transition={{
              delay: 0.2,
              duration: 1.2,
              ease: [0.7, 0, 0.3, 1],
            }}
          >
            <img className="img-2" src={ShopingImg} alt="menu" />
          </motion.div>
        </Link>
        <Link
          to="/projects/restaurant"
          ref={projectThree}
          className="project-preview"
        >
                    <div className="project-preview-images-div">

          <motion.div
            className="image-wrapper"
            initial={{ opacity: 0, scale: 1.2, y: "50px" }}
            animate={
              inViewProjectThree ? { opacity: 1, y: "0px", scale: 1 } : {}
            }
            exit={{ opacity: 0, scale: 1.2, y: "50px" }}
            transition={{
              delay: 0.1,
              duration: 1.2,
              ease: [0.7, 0, 0.3, 1],
            }}
          >
            <img className="img-2" src={MP} alt="menu" />
          </motion.div>
          <motion.div
            className="image-wrapper"
            initial={{ opacity: 0, scale: 1.2, y: "-50px" }}
            animate={
              inViewProjectThree ? { opacity: 1, y: "0px", scale: 1 } : {}
            }
            exit={{ opacity: 0, scale: 1.2, y: "-50px" }}
            transition={{
              delay: 0.2,
              duration: 1.2,
              ease: [0.7, 0, 0.3, 1],
            }}
          >
            <img className="img-2" src={MP2} alt="menu" />
          </motion.div>
          <motion.div
            className="image-wrapper third-img"
            initial={{ opacity: 0, scale: 1.2, y: "50px" }}
            animate={
              inViewProjectThree ? { opacity: 1, y: "0px", scale: 1 } : {}
            }
            exit={{ opacity: 0, scale: 1.2, y: "50px" }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.7, 0, 0.3, 1],
            }}
          >
            <img className="img-2" src={MP3} alt="menu" />
          </motion.div>
          </div>
          <motion.div
            className="text-div"
            initial={{ opacity: 0, scale: 1.4, x: "200px" }}
            animate={
              inViewProjectThree ? { opacity: 1, x: "0px", scale: 1 } : {}
            }
            exit={{ opacity: 0, scale: 1.4, x: "200px" }}
            transition={{
              delay: 0.4,
              duration: 1.4,
              ease: [0.7, 0, 0.3, 1],
            }}
          >
            <div className="title-div">
              <img src={MLogo} alt="m-logo" />
              <h1>Architecture Studio Website</h1>
            </div>
            <p>Built with Next.js, enhanced by Framer Motion animations, and powered by Sanity for content management.</p>
          </motion.div>
        </Link>
      </div>
      <div className="projects-link">
        <Link to="/projects" className="section-hover underline">
          <div className="flip-wrap">
            <div className="flip">
              <span>View Projects</span>
              <span>View Projects</span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default PreviewProjects;
