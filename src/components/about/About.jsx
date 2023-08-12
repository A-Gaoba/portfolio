import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import TypingAnimation from "../TypingAnimation";
import image from "../../assets/about.gif";

const AboutMe = () => {
  const navigate = useNavigate();

  const scrollToMyExer = () => {
    const myExpertise = document.getElementById('myExpertise'); // Replace with the actual ID of your MyExer section
    if (myExpertise) {
      myExpertise.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center h-aout md:h-screen  bg-about-image p-8 -mt-16 flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 md:mt-16 flex justify-center">
        <div className="md:p-8 text-slate-100">
          <TypingAnimation text="I&rsquo;m Abdulrahman Gaoba" />

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs lg:text-base  mb-6"
          >
            At the core, I am a programmer with a boundless curiosity and a love
            for problem-solving. With a strong foundation in software
            engineering, my journey led me to explore the realms of web
            development and UI/UX design.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs lg:text-base  mb-6"
          >
            Fusing these skills together, I strive to create digital experiences
            that strike the perfect balance between aesthetics and
            functionality. Committed to staying on the cutting edge of
            technology, I am constantly evolving my craft to meet the
            ever-changing demands of the digital landscape.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hover:px-4 hover:text-sky-400 text-md "
            onClick={() => navigate("/projects")}
          >
            See my projects
            <ArrowRightAltIcon />
          </motion.button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img src={image} alt="Profile" />
      </div>
      <div className="absolute sm:bottom-10 bottom-32 w-full md:flex justify-center items-center hidden">
        <div
          className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer"
          onClick={scrollToMyExer}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: 1,
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1 bg-sky-400"
          />
          <motion.div />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
