import { motion } from "framer-motion";

const ProgressBar = ({ progress }) => {
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.1 } }
  };

  const barVariants = {
    before: {
      width: 0,
      opacity: 0
    },
    after: {
      width: `${progress}%`,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="progress-bar-container"
      variants={containerVariants}
      initial="before"
      whileInView="after"
    >
      <motion.div
        className="progress-bar"
        variants={barVariants}
      />
    </motion.div>
  );
};

export default ProgressBar;