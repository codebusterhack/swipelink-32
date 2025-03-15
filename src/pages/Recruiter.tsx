
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, User, FileText, Briefcase, Star, Plus, CheckCircle } from "lucide-react";
import SwipeLink from "@/components/SwipeLink";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

// Sample candidate data with Indian names
const sampleCandidates = [
  {
    id: 1,
    name: "Aditya Sharma",
    location: "Bangalore",
    skills: ["JavaScript", "React", "Node.js", "TypeScript"],
    experience: "5+ years of frontend development experience with React and modern JavaScript frameworks.",
    matchingScore: 92
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Mumbai",
    skills: ["Python", "Machine Learning", "Data Analysis", "SQL"],
    experience: "3 years experience in data science and machine learning with a focus on natural language processing.",
    matchingScore: 85
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Delhi",
    skills: ["UX Design", "Figma", "User Research", "Prototyping"],
    experience: "4+ years designing intuitive user experiences for web and mobile applications.",
    matchingScore: 78
  },
  {
    id: 4,
    name: "Anjali Mehta",
    location: "Hyderabad",
    skills: ["DevOps", "AWS", "Docker", "Kubernetes", "CI/CD"],
    experience: "6 years of cloud infrastructure management and CI/CD pipeline implementation.",
    matchingScore: 88
  },
  {
    id: 5,
    name: "Rahul Kapoor",
    location: "Chennai",
    skills: ["Java", "Spring Boot", "Microservices", "Hibernate"],
    experience: "7 years of backend development experience with Java and Spring frameworks.",
    matchingScore: 90
  },
  {
    id: 6,
    name: "Neha Gupta",
    location: "Pune",
    skills: ["PHP", "Laravel", "MySQL", "Redis"],
    experience: "4 years developing web applications with Laravel and related technologies.",
    matchingScore: 75
  },
  {
    id: 7,
    name: "Rajesh Kumar",
    location: "Bangalore",
    skills: ["Flutter", "Dart", "Firebase", "Mobile Development"],
    experience: "3+ years building cross-platform mobile applications using Flutter.",
    matchingScore: 82
  },
  {
    id: 8,
    name: "Shikha Verma",
    location: "Gurgaon",
    skills: ["Product Management", "Agile", "JIRA", "User Stories"],
    experience: "5 years of product management with a focus on agile methodologies.",
    matchingScore: 79
  },
  {
    id: 9,
    name: "Vivek Joshi",
    location: "Noida",
    skills: ["React Native", "JavaScript", "Redux", "Mobile UI"],
    experience: "4 years developing mobile applications with React Native and related technologies.",
    matchingScore: 87
  },
  {
    id: 10,
    name: "Deepika Reddy",
    location: "Hyderabad",
    skills: ["Angular", "TypeScript", "NGRX", "RxJS"],
    experience: "5+ years of frontend development with Angular and state management libraries.",
    matchingScore: 84
  },
  {
    id: 11,
    name: "Amit Malhotra",
    location: "Mumbai",
    skills: ["C++", "Algorithms", "Data Structures", "System Design"],
    experience: "8 years of experience in high-performance computing and algorithm optimization.",
    matchingScore: 89
  },
  {
    id: 12,
    name: "Sanya Agarwal",
    location: "Bangalore",
    skills: ["UI Design", "Adobe XD", "Sketch", "Design Systems"],
    experience: "4 years creating beautiful and functional user interfaces for web and mobile applications.",
    matchingScore: 76
  },
  {
    id: 13,
    name: "Karthik Rao",
    location: "Chennai",
    skills: ["Ruby on Rails", "PostgreSQL", "Redis", "API Design"],
    experience: "6 years developing web applications with Ruby on Rails and related technologies.",
    matchingScore: 81
  },
  {
    id: 14,
    name: "Meera Iyer",
    location: "Bangalore",
    skills: ["GO", "Microservices", "Docker", "Kubernetes"],
    experience: "4 years building scalable microservices with Go and containerization technologies.",
    matchingScore: 86
  },
  {
    id: 15,
    name: "Sunil Nair",
    location: "Pune",
    skills: ["QA Automation", "Selenium", "TestNG", "CI/CD"],
    experience: "5+ years in test automation and quality assurance for web applications.",
    matchingScore: 77
  },
  {
    id: 16,
    name: "Pooja Desai",
    location: "Mumbai",
    skills: ["Data Engineering", "Spark", "Hadoop", "ETL"],
    experience: "4 years building data pipelines and processing large-scale datasets.",
    matchingScore: 83
  },
  {
    id: 17,
    name: "Arjun Menon",
    location: "Kochi",
    skills: ["Blockchain", "Solidity", "Smart Contracts", "Web3"],
    experience: "3 years developing blockchain solutions and decentralized applications.",
    matchingScore: 80
  },
  {
    id: 18,
    name: "Lakshmi Krishnan",
    location: "Chennai",
    skills: ["Technical Writing", "Documentation", "API Docs", "Content Strategy"],
    experience: "5 years creating technical documentation and content for software products.",
    matchingScore: 74
  },
  {
    id: 19,
    name: "Rohan Saxena",
    location: "Delhi",
    skills: ["Vue.js", "Vuex", "JavaScript", "Frontend"],
    experience: "4+ years building web applications with Vue.js and related technologies.",
    matchingScore: 85
  },
  {
    id: 20,
    name: "Nisha Verma",
    location: "Bangalore",
    skills: ["Sales Force", "Apex", "Lightning", "CRM Customization"],
    experience: "6 years implementing and customizing Salesforce solutions for enterprises.",
    matchingScore: 82
  }
];

const Recruiter = () => {
  const navigate = useNavigate();
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [shortlistedCandidates, setShortlistedCandidates] = useState<number[]>([]);
  const { toast } = useToast();
  
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
    
    // Show toast notification
    toast({
      title: "Candidate Shortlisted",
      description: `${currentCandidate.name} has been added to your shortlist.`,
    });
    
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
                      <span>{currentCandidate.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Star size={16} className="mr-2" />
                      Matching Score
                    </h3>
                    <span className={`${
                      currentCandidate.matchingScore > 85 ? "text-neon-green" : 
                      currentCandidate.matchingScore > 75 ? "text-neon-blue" : "text-neon-yellow"
                    } font-bold`}>
                      {currentCandidate.matchingScore}%
                    </span>
                  </div>
                  <Progress 
                    value={currentCandidate.matchingScore} 
                    className="h-2" 
                    indicatorClassName={
                      currentCandidate.matchingScore > 85 ? "bg-neon-green" : 
                      currentCandidate.matchingScore > 75 ? "bg-neon-blue" : "bg-neon-yellow"
                    }
                  />
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
