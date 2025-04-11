
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, User, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    // We'll use Link component for navigation instead of useNavigate
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`glass-card p-8 rounded-2xl cursor-pointer hover:border-neon-blue/30 transition-all duration-300 h-full ${
          selectedRole === "jobseeker" ? "neon-glow-blue" : ""
        }`}
        onClick={() => handleRoleSelection("jobseeker")}
      >
        <div className="flex flex-col items-center text-center h-full">
          <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center mb-4">
            <User size={32} className="text-neon-blue" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">I'm a Job Seeker</h2>
          <p className="text-muted-foreground mb-6 flex-grow">
            Find perfect job matches with a swipe-based interface
          </p>
          <Link to="/job-seeker">
            <Button 
              variant="outline" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/20 hover:text-white"
            >
              <Check className="mr-2 h-4 w-4" /> Get Started
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`glass-card p-8 rounded-2xl cursor-pointer hover:border-neon-pink/30 transition-all duration-300 h-full ${
          selectedRole === "recruiter" ? "neon-glow-pink" : ""
        }`}
        onClick={() => handleRoleSelection("recruiter")}
      >
        <div className="flex flex-col items-center text-center h-full">
          <div className="w-16 h-16 bg-neon-pink/10 rounded-full flex items-center justify-center mb-4">
            <Users size={32} className="text-neon-pink" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">I'm a Recruiter</h2>
          <p className="text-muted-foreground mb-6 flex-grow">
            Find perfect candidates with powerful matching
          </p>
          <Link to="/recruiter">
            <Button 
              variant="outline" 
              className="border-neon-pink text-neon-pink hover:bg-neon-pink/20 hover:text-white"
            >
              <Check className="mr-2 h-4 w-4" /> Get Started
            </Button>
          </Link>
        </div>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`glass-card p-8 rounded-2xl cursor-pointer hover:border-neon-purple/30 transition-all duration-300 h-full ${
          selectedRole === "resume" ? "neon-glow-purple" : ""
        }`}
        onClick={() => handleRoleSelection("resume")}
      >
        <div className="flex flex-col items-center text-center h-full">
          <div className="w-16 h-16 bg-neon-purple/10 rounded-full flex items-center justify-center mb-4">
            <FileText size={32} className="text-neon-purple" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Resume Builder</h2>
          <p className="text-muted-foreground mb-6 flex-grow">
            Create an ATS-optimized resume to stand out
          </p>
          <Link to="/resume-builder">
            <Button 
              variant="outline" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 hover:text-white"
            >
              <Check className="mr-2 h-4 w-4" /> Get Started
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RoleSelection;
