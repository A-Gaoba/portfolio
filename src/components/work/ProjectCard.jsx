import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, imageUrl, link }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onClick={() => window.open(link, '_blank')}
    >
      <motion.img
        src={imageUrl}
        alt={title}
        className="mb-4 rounded-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      />
      <h3 className="text-2xl font-semibold mb-2 text-sky-400 ">
        <a href={link} className="underline" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-sky-400 text-white text-sm px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
