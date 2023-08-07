import { motion } from "framer-motion";
import ProjectsList from './ProjectsList';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TypingAnimation from "../TypingAnimation";

const ProjectsSection = () => {
  return (
    <section className="p-16">
      <TypingAnimation text="My Projects" />
      <ProjectsList />
      <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hover:px-4 hover:text-sky-400 text-md mt-12 text-white"
            onClick={() => navigate("/contact")}
          >
            Contact Me
            <ArrowRightAltIcon />
          </motion.button>
    </section>
  );
};

export default ProjectsSection;
