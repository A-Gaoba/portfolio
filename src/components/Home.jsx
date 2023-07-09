import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-hero-image md:h-screen h-aout flex justify-center items-center w-full bg-center bg-dunes bg-cover -mt-16">
      <div className="container mx-auto px-4 py-16 text-white md:w-[800px] mt-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          // className="md:text-4xl font-bold mb-6"
          className="md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-stone-100 via-rose-900 to-yellow-100"
        >
          I&rsquo;m Abdulrahman Gaoba
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs lg:text-base  mb-6"
        >
          Welcome to my world of innovation and creativity! As a passionate
          software engineer and web developer with a keen eye for captivating
          UI/UX design, I bring dreams to life through elegant and functional
          solutions.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs lg:text-base  mb-6"
        >
          With a relentless drive to deliver excellence, I thrive on crafting
          seamless user experiences that leave a lasting impression. Explore my
          portfolio, and let&lsquo;s embark on an extraordinary digital journey
          together.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hover:px-4 hover:text-sky-400 text-md py-3"
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
            href="https://www.instagram.com/a-gaoba"
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
