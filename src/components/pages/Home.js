import { motion } from "framer-motion";
import Socials from "./Socials";
import React, { useEffect, useRef } from "react";
import PreviewProjects from "./preview/PreviewProjects";
import PreviewAbout from "./preview/PreviewAbout";
import PreviewContact from './preview/PreviewContact'

function Home() {
  const ref = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, []);


  const handleScrollBtn = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="homeDiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "easeInOut",
          duration: "0.2",
          delay: 0,
        }}
      >
        <div className="homeText">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeInOut",
              duration: "0.6",
              delay: 0.8,
            }}
          >
           Amir Suljkanovic—Frontend Developer
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "easeInOut",
              duration: "0.6",
              delay: 1.1,
            }}
          >
            I create responsive, user-friendly websites that blend functionality and aesthetics.
          </motion.div>
        </div>
        <Socials />
        <div
          className="scroll-down-btn"
          role="button"
          onClick={handleScrollBtn}
        ></div>
      </motion.div>
      <PreviewAbout ref={ref} />
      <PreviewProjects />
      <PreviewContact />      
    </>
  );
}

export default Home;
