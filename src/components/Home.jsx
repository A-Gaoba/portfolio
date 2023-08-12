import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TypingAnimation from "./TypingAnimation";

import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socialMediaLinks = [
  {
    icon: faTwitter,
    name: "Twitter",
    href: "https://twitter.com/A_Gaoba",
    color: "hover:text-sky-400",
  },
  {
    icon: faLinkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/A-Gaoba",
    color: "hover:text-[#0072b1]",
  },
  {
    icon: faGithub,
    name: "GitHub",
    href: "https://github.com/a-gaoba",
    color: "hover:text-[#0f0e0e]",
  },
  {
    icon: faInstagram,
    name: "Instagram",
    href: "https://www.instagram.com/a-gaoba",
    color: "hover:text-[#fccc63]",
  },
  {
    icon: faWhatsapp,
    name: "WhatsApp",
    href: "https://wa.me/+79174828474",
    color: "hover:text-[#25D366]",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const animateElement = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.8 },
  };

  return (
    <section className="bg-[url(assets/bg.png)] md:h-screen h-aout flex justify-center items-center w-full bg-center bg-dunes bg-cover md:-mt-24">
      <div className="container mx-auto px-4 py-16 text-white md:w-[800px] mt-12">
        <TypingAnimation text="I’m Abdulrahman Gaoba" />
        <motion.p {...animateElement} className="text-xs lg:text-base mb-6">
          Welcome to my world of innovation and creativity! As a passionate
          software engineer and web developer with a keen eye for captivating
          UI/UX design, I bring dreams to life through elegant and functional
          solutions.
        </motion.p>
        <motion.p {...animateElement} className="text-xs lg:text-base mb-6">
          With a relentless drive to deliver excellence, I thrive on crafting
          seamless user experiences that leave a lasting impression. Explore my
          portfolio, and let’s embark on an extraordinary digital journey
          together.
        </motion.p>
        <motion.button
          {...animateElement}
          className="hover:px-4 hover:text-sky-400 text-md py-3"
          onClick={() => navigate("/about")}
        >
          See More About Me
          <ArrowRightAltIcon />
        </motion.button>
        <div className="mt-8 flex space-x-8 ml-2">
          {socialMediaLinks.map((item, index) => (
            <motion.a
              key={index}
              {...animateElement}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={item.color}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              aria-label={item.name} 
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-xl hover:text-2xl"
                alt={item.name} 
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
