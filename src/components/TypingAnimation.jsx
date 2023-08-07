import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function TypingAnimation({ text }) {
  return (
    <h1 className="md:text-4xl font-bold mb-6 bg-clip-text text-transparent text-white">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
}

TypingAnimation.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TypingAnimation;
