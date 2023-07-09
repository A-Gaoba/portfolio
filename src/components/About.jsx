import { motion } from "framer-motion";
// import Typical from "react-typical";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import image from "../assets/about2.gif";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-center items-center h-aout md:h-screen  bg-about-image p-8 -mt-16 flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 md:mt-16 flex justify-center">
        <div className="p-8 text-slate-100">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:text-4xl font-bold mb-6"
          >
            I&rsquo;m Abdulrahman Gaoba
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs lg:text-base  mb-6"
          >
            Welcome to my website! I am a passionate software engineer, web
            developer, and UI/UX designer, dedicated to crafting exceptional
            digital experiences. With a strong background in coding, I bring
            ideas to life by seamlessly merging functionality with stunning
            design.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs lg:text-base  mb-6"
          >
            From conceptualization to implementation, I thrive on creating
            intuitive and visually captivating interfaces that resonate with
            users. Whether it&rsquo;s building responsive websites or designing
            immersive user journeys, I am committed to delivering innovative
            solutions that exceed expectations. Join me on this journey as we
            transform ideas into captivating digital realities.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hover:px-4 hover:text-sky-400 text-md "
            onClick={() => navigate("/contact")}
          >
            Contact Me
            <ArrowRightAltIcon />
          </motion.button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={image} alt="Profile"  />
      </div>
    </div>
  );
};

export default AboutMe;
