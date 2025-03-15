
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building, FileText, Briefcase, ChevronLeft, Send } from "lucide-react";
import SwipeCard from "@/components/SwipeCard";
import { Badge } from "@/components/ui/badge";

// Sample job data
const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    description: "We're looking for a skilled Frontend Developer to create amazing user experiences with modern technologies."
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "InnovateLabs",
    skills: ["Node.js", "React", "MongoDB", "AWS"],
    description: "Join our team to build scalable applications using cutting-edge technologies."
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "DesignStudio",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    description: "Create beautiful and intuitive user interfaces that solve real user problems."
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudTech",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines."
  }
];

const JobSeeker = () => {
  const navigate = useNavigate();
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [showAppliedMessage, setShowAppliedMessage] = useState(false);

  const currentJob = sampleJobs[currentJobIndex];
  
  const handleSwipeLeft = () => {
    // Skip job
    if (currentJobIndex < sampleJobs.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
    } else {
      // No more jobs
      setCurrentJobIndex(-1);
    }
  };
  
  const handleSwipeRight = () => {
    // Apply for job
    setAppliedJobs([...appliedJobs, currentJob.id]);
    setShowAppliedMessage(true);
    
    setTimeout(() => {
      setShowAppliedMessage(false);
      if (currentJobIndex < sampleJobs.length - 1) {
        setCurrentJobIndex(currentJobIndex + 1);
      } else {
        // No more jobs
        setCurrentJobIndex(-1);
      }
    }, 1500);
  };
  
  const goToResumeBuilder = () => {
    navigate("/resume-builder");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => navigate("/")}
        >
          <ChevronLeft size={22} />
        </Button>
        <h1 className="text-2xl font-bold">Job Finder</h1>
        <Button 
          variant="ghost" 
          onClick={goToResumeBuilder}
          className="flex items-center gap-2"
        >
          <FileText size={18} />
          <span className="hidden md:inline">Resume</span>
        </Button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        {currentJobIndex >= 0 ? (
          <>
            <motion.div
              key={currentJob.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-md"
            >
              <SwipeCard
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-1">{currentJob.title}</h2>
                    <div className="flex items-center text-muted-foreground">
                      <Building size={16} className="mr-2" />
                      <span>{currentJob.company}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <Briefcase size={18} className="mr-2" />
                      Required Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentJob.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{currentJob.description}</p>
                  </div>
                  
                  <div className="mt-auto flex justify-between text-sm text-muted-foreground">
                    <span>← Swipe left to skip</span>
                    <span>Swipe right to apply →</span>
                  </div>
                </div>
              </SwipeCard>
            </motion.div>
            
            {/* Applied message overlay */}
            {showAppliedMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
              >
                <div className="bg-background rounded-xl p-8 flex flex-col items-center max-w-xs mx-auto">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mb-4">
                    <Send size={28} className="text-neon-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Application Sent!</h3>
                  <p className="text-center text-muted-foreground">
                    Your application for {currentJob.title} at {currentJob.company} has been submitted.
                  </p>
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">No More Jobs</h2>
            <p className="text-muted-foreground mb-8">
              You've viewed all available jobs. Check back later for more opportunities.
            </p>
            <div className="flex flex-col gap-4">
              <Button onClick={goToResumeBuilder}>
                <FileText size={18} className="mr-2" />
                Build Your Resume
              </Button>
              <Button variant="outline" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer with applied jobs count */}
      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          {appliedJobs.length} {appliedJobs.length === 1 ? 'job' : 'jobs'} applied
        </p>
      </div>
    </div>
  );
};

export default JobSeeker;
