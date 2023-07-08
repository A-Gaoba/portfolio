import { motion } from "framer-motion";
import Typical from "react-typical";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import image from "../assets/about2.gif";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-about-image p-8 -mt-16">
      <div className="w-full md:w-1/2 mt-16">
        <div className="p-8 text-slate-100">
          <h1 className="md:text-4xl font-bold mb-6">
            <Typical
              steps={["I'm Abdulrahman Gaoba", 3000]}
              loop={Infinity}
              wrapper="span"
              className="text-gray-300"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:text-sm  mb-6"
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
            className="md:text-sm  mb-6"
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
            className="hover:p-4 text-md py-3 px-4 text-white rounded-md"
            onClick={() => navigate("/contact")}
          >
            Contact Me
            <ArrowRightAltIcon />
          </motion.button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={image} alt="Profile"  />
      </div>
    </div>
  );
};

export default AboutMe;
