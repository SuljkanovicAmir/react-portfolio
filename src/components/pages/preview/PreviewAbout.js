import "../../../styles/About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React from "react";
import { Link } from "react-router-dom";

const PreviewAbout = React.forwardRef((props, forwardedRef) => {

  const [previewText, inViewPreviewText] = useInView({
    triggerOnce: false,
    rootMargin: "-50px 0px",
  });

  return (
    <motion.div
      className="about-div-preview"
      ref={forwardedRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "easeInOut",
        duration: "0.2",
        delay: 0,
      }}
    >
      <div className="about-text-preview" ref={previewText}>
        <div>
          <motion.span
            initial={{ opacity: 0, x: "-400px" }}
            animate={
              inViewPreviewText ? { opacity: 1, x: "0px"} : {}
            }
            exit={{ opacity: 0, x: "-400px" }}
            transition={{
              delay: 0.1,
              duration: 1.4,
              ease: [0.7, 0, 0.3, 1],
            }}
            className="about-preview-title"
          >
            Hello, my name is Amir Suljkanović, a Criminology graduate with a
            passion for programming and web development.{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: "400px" }}
            animate={
              inViewPreviewText ? { opacity: 1, x: "0px"} : {}
            }
            exit={{ opacity: 0, x: "400px" }}
            transition={{
              delay: 0.2,
              duration: 1.4,
              ease: [0.7, 0, 0.3, 1],
            }}
            className="about-preview-p"
          >
            Proficient in HTML, CSS, JavaScript, React and Next.js. I create
            responsive, user-friendly websites that blend functionality and
            aesthetics. I'm excited to tackle new challenges and continue
            evolving in this dynamic field.
          </motion.span>
        </div>
      </div>
      <div className="projects-link">
        <Link to="/about" className="section-hover underline">
          <div className="flip-wrap">
            <div className="flip">
              <span>Learn More</span>
              <span>Learn More</span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
});

export default PreviewAbout;

/*
import { useInView } from "react-intersection-observer";

  
    const [section3spanRef, inViewSection3Span] = useInView({
        triggerOnce: false,
        rootMargin: "-10px 0px", // Adjust this value to set the threshold for the trigger
      });
    

      <div className="section3-div">
            <div className="span-div">
              <motion.span
                ref={section3spanRef}
                initial={{ opacity: 0, width: "0px" }}
                animate={
                  inViewSection3Span ? { opacity: 1, width: "100px" } : {}
                }
                exit={{ opacity: 0, width: "0px" }}
                transition={{
                  delay: 0.1,
                  duration: 1.2,
                  ease: [0.7, 0, 0.3, 1], // cubic-bezier easing function
                }}
              ></motion.span>
            </div>
            <motion.h1
              ref={section3spanRef}
              initial={{ opacity: 0, x: "100px" }}
              animate={inViewSection3Span ? { opacity: 1, x: "0px" } : {}}
              exit={{ opacity: 0, x: "100px" }}
              transition={{
                delay: 0,
                duration: 1.2,
                ease: [0.7, 0, 0.3, 1], // cubic-bezier easing function
              }}
            >
              About
            </motion.h1>
          </div>

          */
