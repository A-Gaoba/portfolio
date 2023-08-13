import { motion } from "framer-motion";
import ProjectsList from './ProjectsList';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TypingAnimation from "../TypingAnimation";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <motion.section className="p-16 md:w-[90%] xl:w-[70%] w-full">
      <TypingAnimation text="My Projects" />
      <ProjectsList />
      <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hover:px-4 hover:text-sky-400 text-md mt-12 text-white"
            onClick={() => navigate("/contact")}
          >
            Contact Me
            <ArrowRightAltIcon />
          </motion.button>
    </motion.section>
  );
};

export default ProjectsSection;
