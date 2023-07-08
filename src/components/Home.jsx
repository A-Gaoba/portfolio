import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Typical from "react-typical";

import "../app.css";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-hero-image h-screen flex justify-center items-center w-full bg-center bg-dunes bg-cover -mt-16">
      <div className="container mx-auto px-4 py-16 text-white md:w-[800px] mt-12">
        <h1 className="md:text-4xl font-bold mb-6">
          <Typical
            steps={["I'm Abdulrahman Gaoba", 3000]}
            loop={Infinity}
            wrapper="span"
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
          digital experiences. With a strong background in coding, I bring ideas
          to life by seamlessly merging functionality with stunning design.
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
          className="hover:p-4 text-md py-3"
          onClick={() => navigate("/about")}
        >
          See More About Me
          <ArrowRightAltIcon />
        </motion.button>
        <div className="mt-8 flex space-x-8 ml-2">
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            href="https://twitter.com/A_Gaoba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400"
          >
            <FontAwesomeIcon icon={faTwitter} className=" text-xl" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            href="https://www.linkedin.com/in/A-Gaoba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0072b1]"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            href="https://github.com/a-gaoba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0f0e0e]"
          >
            <FontAwesomeIcon icon={faGithub} className=" text-xl" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fccc63]"
          >
            <FontAwesomeIcon icon={faInstagram} className=" text-xl" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;
