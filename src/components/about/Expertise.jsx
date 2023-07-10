import "../../App.css";
import { motion } from "framer-motion";

import reactIcon from "../../assets/software-engineer.png";
import Web from "../../assets/web-development.png";
import design from "../../assets/designer.png";

function TypingAnimation({ text }) {
  return (
    <h2 className="text-bold text-2xl w-56">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </h2>
  );
}

function Expertise() {
  return (
    <div className="h-screen flex items-center text-white mt-10 flex-col bg-expertise-image">
      <h1 className="text-4xl font-bold p-8">My Expertise</h1>
      <div className="flex flex-wrap justify-center">
        <motion.div
          className="border p-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border p-6"
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
