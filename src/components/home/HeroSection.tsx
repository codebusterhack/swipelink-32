
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">SwipeLink</h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto whitespace-nowrap">
        Professional job matching for recruiters and job seekers
      </p>
    </motion.div>
  );
};

export default HeroSection;
