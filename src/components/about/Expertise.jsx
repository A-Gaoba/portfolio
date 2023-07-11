import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import "../../App.css";
import reactIcon from "../../assets/software-engineer.png";
import Web from "../../assets/web-development.png";
import design from "../../assets/designer.png";

function TypingAnimation({ text }) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false, // Change this to "false" to repeat the animation
    threshold: 0.5, // Change this threshold as needed
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (!inView) {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <h2 ref={ref} className="text-bold text-2xl w-56">
      {text.split("").map((char, index) => (
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
              y: -50,
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust threshold value as needed
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
    <div className="md:h-screen h-auto flex items-center text-white flex-col -mt-8 bg-expertise-image">
      <h1 className="text-4xl font-bold p-8 mt-8">My Expertise</h1>
      <div className="flex flex-wrap justify-center">
        <motion.div
          className="border p-6"
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          animate={animationControls}
        >
          <div className="font-bold text-white flex items-center gap-4">
            <img src={reactIcon} alt="" className="w-12 h-12" />
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
            <img src={Web} alt="" className="w-12 h-12" />
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
            <img src={design} alt="" className="w-12 h-12 text-white" />
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
