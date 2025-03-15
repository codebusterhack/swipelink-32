import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, User, FileText, Briefcase, Star, Plus } from "lucide-react";
import SwipeLink from "@/components/SwipeLink";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Sample candidate data
const sampleCandidates = [
  {
    id: 1,
    name: "Alex Johnson",
    skills: ["JavaScript", "React", "Node.js", "TypeScript"],
    experience: "5+ years of frontend development experience with React and modern JavaScript frameworks.",
    matchingScore: 92
  },
  {
    id: 2,
    name: "Sam Wilson",
    skills: ["Python", "Machine Learning", "Data Analysis", "SQL"],
    experience: "3 years experience in data science and machine learning with a focus on natural language processing.",
    matchingScore: 85
  },
  {
    id: 3,
    name: "Jamie Chen",
    skills: ["UX Design", "Figma", "User Research", "Prototyping"],
    experience: "4+ years designing intuitive user experiences for web and mobile applications.",
    matchingScore: 78
  },
  {
    id: 4,
    name: "Morgan Taylor",
    skills: ["DevOps", "AWS", "Docker", "Kubernetes", "CI/CD"],
    experience: "6 years of cloud infrastructure management and CI/CD pipeline implementation.",
    matchingScore: 88
  }
];

const Recruiter = () => {
  const navigate = useNavigate();
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [shortlistedCandidates, setShortlistedCandidates] = useState<number[]>([]);
  
  const currentCandidate = sampleCandidates[currentCandidateIndex];
  
  const handleSwipeLeft = () => {
    // Reject candidate
    if (currentCandidateIndex < sampleCandidates.length - 1) {
      setCurrentCandidateIndex(currentCandidateIndex + 1);
    } else {
      // No more candidates
      setCurrentCandidateIndex(-1);
    }
  };
  
  const handleSwipeRight = () => {
    // Shortlist candidate
    setShortlistedCandidates([...shortlistedCandidates, currentCandidate.id]);
    
    if (currentCandidateIndex < sampleCandidates.length - 1) {
      setCurrentCandidateIndex(currentCandidateIndex + 1);
    } else {
      // No more candidates
      setCurrentCandidateIndex(-1);
    }
  };
  
  const goToPostJob = () => {
    navigate("/post-job");
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
        <h1 className="text-2xl font-bold">Candidate Finder</h1>
        <Button 
          variant="ghost" 
          onClick={goToPostJob}
          className="flex items-center gap-2"
        >
          <Plus size={18} />
          <span className="hidden md:inline">Post Job</span>
        </Button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        {currentCandidateIndex >= 0 ? (
          <motion.div
            key={currentCandidate.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md"
          >
            <SwipeLink
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <User size={32} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{currentCandidate.name}</h2>
                    <div className="flex items-center text-muted-foreground">
                      <FileText size={14} className="mr-2" />
                      <span>Resume Available</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Star size={16} className="mr-2" />
                      Matching Score
                    </h3>
                    <span className="text-neon-purple font-bold">{currentCandidate.matchingScore}%</span>
                  </div>
                  <Progress value={currentCandidate.matchingScore} className="h-2" />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Briefcase size={16} className="mr-2" />
                    Key Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentCandidate.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Experience Summary</h3>
                  <p className="text-muted-foreground">{currentCandidate.experience}</p>
                </div>
                
                <div className="mt-auto pt-10 flex justify-between text-sm text-muted-foreground">
                  <span>← Swipe left to reject</span>
                  <span>Swipe right to shortlist →</span>
                </div>
              </div>
            </SwipeLink>
          </motion.div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">No More Candidates</h2>
            <p className="text-muted-foreground mb-8">
              You've viewed all available candidates. Post a new job to attract more applicants.
            </p>
            <div className="flex flex-col gap-4">
              <Button onClick={goToPostJob}>
                <Plus size={18} className="mr-2" />
                Post a New Job
              </Button>
              <Button variant="outline" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer with shortlisted count */}
      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          {shortlistedCandidates.length} {shortlistedCandidates.length === 1 ? 'candidate' : 'candidates'} shortlisted
        </p>
      </div>
    </div>
  );
};

export default Recruiter;
