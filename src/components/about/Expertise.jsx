import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

import "../../App.css";

function TypingAnimation({ text }) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <h2 ref={ref} className="text-bold text-2xl w-56">
      {text &&
        text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
    </h2>
  );
}

TypingAnimation.propTypes = {
  text: PropTypes.string.isRequired,
};

function Expertise() {
  const animationControls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationControls.start({
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            });
          } else {
            animationControls.stop();
            animationControls.set({
              opacity: 0,
              y: -20,
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "10px",
        threshold: 0.1, 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationControls]);

  return (
    <div
      id="myExpertise"
      className="md:h-screen h-auto flex items-center text-white flex-col -mt-8 bg-[url(assets/bg-exp.png)] bg-center bg-dunes bg-cover"
    >
      <h1 className="text-4xl font-bold p-8 ml-8 mt-8 self-start">
        My Expertise
      </h1>
      <div className="flex flex-wrap justify-center">
        <motion.div
          className="border p-6"
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          animate={animationControls}
        >
          <div className="font-bold text-white flex items-center gap-4">
            <img src="assets/software-engineer.png" alt="" className="w-12 h-12" />
            <TypingAnimation text="Software Engineer" />
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <span>&lt;h2&gt;</span>
              <span className="h-36 w-[2px] text-white bg-white mt-2 mx-4"></span>
              <span>&lt;/h2&gt;</span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-2 w-64 mt-4"
            >
              I&apos;m a software engineer skilled in JavaScript, TypeScript,
              OOP, algorithms, and collaborative development.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="border p-6"
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          animate={animationControls}
        >
          <div className="font-bold text-white flex items-center gap-4">
            <img src="assets/web-development.png" alt="" className="w-12 h-12" />
            <TypingAnimation text="Front End Developer" />
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <span>&lt;h2&gt;</span>
              <span className="h-36 w-[2px] text-white bg-white mt-2 mx-4"></span>
              <span>&lt;/h2&gt;</span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              ref={ref}
              animate={animationControls}
              className="p-2 w-64 mt-4"
            >
              I&apos;m a developer skilled in HTML, CSS, JavaScript, React,
              Tailwind CSS, and Material-UI, creating engaging and user-friendly
              websites.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="border p-6"
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          animate={animationControls}
        >
          <div className="font-bold text-white flex items-center gap-4">
            <img src="assets/designer.png" alt="" className="w-12 h-12 text-white" />
            <TypingAnimation text="React Native Dev Android, iOS" />
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <span>&lt;h2&gt;</span>
              <span className="h-36 w-[2px] text-white bg-white mt-2 mx-4"></span>
              <span>&lt;/h2&gt;</span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              ref={ref}
              animate={animationControls}
              className="p-2 pr-0 w-64 mt-4"
            >
              I&apos;m a React Native developer focused on Android and iOS app
              development, crafting cross-platform mobile applications with
              seamless user experiences.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Expertise;
