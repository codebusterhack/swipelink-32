
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="w-full max-w-5xl mt-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-neon-blue/10 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-neon-blue">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
          <p className="text-muted-foreground">
            Build your professional profile or upload your job requirements in minutes.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-neon-pink/10 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-neon-pink">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Swipe & Match</h3>
          <p className="text-muted-foreground">
            Our matching algorithm finds the perfect fit based on your requirements.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-neon-purple">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Connect & Succeed</h3>
          <p className="text-muted-foreground">
            Connect with your matches and take the next step in your professional journey.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
