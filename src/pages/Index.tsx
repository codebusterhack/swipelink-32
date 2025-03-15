
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Check, User, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  
  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
    
    // Add a small delay for animation
    setTimeout(() => {
      navigate(role === "jobseeker" ? "/job-seeker" : "/recruiter");
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">Resume Finder Pro</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
          AI-powered job matching for recruiters and job seekers
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col md:flex-row gap-6 w-full max-w-3xl"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`glass-card p-8 rounded-2xl flex-1 cursor-pointer ${
            selectedRole === "jobseeker" ? "neon-glow-blue" : ""
          }`}
          onClick={() => handleRoleSelection("jobseeker")}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center mb-4">
              <User size={32} className="text-neon-blue" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">I'm a Job Seeker</h2>
            <p className="text-muted-foreground mb-6">
              Find perfect job matches and create an ATS-optimized resume
            </p>
            <Button 
              variant="outline" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/20 hover:text-white"
            >
              <Check className="mr-2 h-4 w-4" /> Get Started
            </Button>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`glass-card p-8 rounded-2xl flex-1 cursor-pointer ${
            selectedRole === "recruiter" ? "neon-glow-pink" : ""
          }`}
          onClick={() => handleRoleSelection("recruiter")}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-neon-pink/10 rounded-full flex items-center justify-center mb-4">
              <Users size={32} className="text-neon-pink" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">I'm a Recruiter</h2>
            <p className="text-muted-foreground mb-6">
              Post jobs and find perfect candidates with AI-powered matching
            </p>
            <Button 
              variant="outline" 
              className="border-neon-pink text-neon-pink hover:bg-neon-pink/20 hover:text-white"
            >
              <Check className="mr-2 h-4 w-4" /> Get Started
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
