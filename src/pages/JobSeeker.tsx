import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building, FileText, Briefcase, ChevronLeft, Send, Filter } from "lucide-react";
import SwipeLink from "@/components/SwipeLink";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

// Sample job data with Indian company names
const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Infosys",
    location: "Bangalore",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    description: "We're looking for a skilled Frontend Developer to create amazing user experiences with modern technologies."
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "TCS",
    location: "Mumbai",
    skills: ["Node.js", "React", "MongoDB", "AWS"],
    description: "Join our team to build scalable applications using cutting-edge technologies."
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Wipro",
    location: "Hyderabad",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    description: "Create beautiful and intuitive user interfaces that solve real user problems."
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Tech Mahindra",
    location: "Pune",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines."
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Reliance Digital",
    location: "Mumbai",
    skills: ["Python", "Machine Learning", "Data Analysis", "SQL"],
    description: "Work with large datasets to extract valuable insights and build predictive models."
  },
  {
    id: 6,
    title: "Mobile App Developer",
    company: "Flipkart",
    location: "Bangalore",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    description: "Build mobile applications that deliver exceptional user experiences."
  },
  {
    id: 7,
    title: "Backend Engineer",
    company: "Mindtree",
    location: "Chennai",
    skills: ["Java", "Spring Boot", "Microservices", "SQL"],
    description: "Develop robust backend systems that power our applications."
  },
  {
    id: 8,
    title: "Product Manager",
    company: "Zomato",
    location: "Gurgaon",
    skills: ["Product Strategy", "User Research", "Agile", "Data Analysis"],
    description: "Lead product development from conception to launch with a focus on user needs."
  },
  {
    id: 9,
    title: "Software Engineering Manager",
    company: "Swiggy",
    location: "Bangalore",
    skills: ["Team Leadership", "Agile", "Technical Architecture", "Mentoring"],
    description: "Lead a team of talented engineers to deliver high-quality software solutions."
  },
  {
    id: 10,
    title: "Cybersecurity Analyst",
    company: "HDFC Bank",
    location: "Mumbai",
    skills: ["Network Security", "Penetration Testing", "Security Audits", "SIEM"],
    description: "Protect our systems and data from cyber threats and vulnerabilities."
  },
  {
    id: 11,
    title: "Cloud Architect",
    company: "HCL Technologies",
    location: "Noida",
    skills: ["AWS", "Azure", "Cloud Migration", "Serverless"],
    description: "Design and implement cloud-based solutions that scale with our business needs."
  },
  {
    id: 12,
    title: "Data Engineer",
    company: "Paytm",
    location: "Delhi",
    skills: ["Hadoop", "Spark", "ETL", "Big Data"],
    description: "Build data pipelines that enable efficient analysis and reporting."
  },
  {
    id: 13,
    title: "Quality Assurance Engineer",
    company: "Cognizant",
    location: "Chennai",
    skills: ["Selenium", "Test Automation", "CI/CD", "JIRA"],
    description: "Ensure the quality and reliability of our software products."
  },
  {
    id: 14,
    title: "Blockchain Developer",
    company: "Polygon",
    location: "Bangalore",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3"],
    description: "Develop decentralized applications on blockchain platforms."
  },
  {
    id: 15,
    title: "AI Research Scientist",
    company: "IIT Research Lab",
    location: "Kanpur",
    skills: ["Deep Learning", "Computer Vision", "NLP", "TensorFlow"],
    description: "Research and develop novel algorithms and models for AI applications."
  },
  {
    id: 16,
    title: "Technical Content Writer",
    company: "Freshworks",
    location: "Chennai",
    skills: ["Technical Writing", "Documentation", "API Docs", "Markdown"],
    description: "Create clear and comprehensive technical documentation for our products."
  },
  {
    id: 17,
    title: "System Administrator",
    company: "Bharti Airtel",
    location: "Delhi",
    skills: ["Linux", "Windows Server", "Networking", "Security"],
    description: "Maintain and optimize our IT infrastructure for reliability and performance."
  },
  {
    id: 18,
    title: "Business Intelligence Analyst",
    company: "Myntra",
    location: "Bangalore",
    skills: ["SQL", "Power BI", "Tableau", "Data Visualization"],
    description: "Transform data into actionable insights that drive business decisions."
  },
  {
    id: 19,
    title: "AR/VR Developer",
    company: "Tech Mahindra",
    location: "Hyderabad",
    skills: ["Unity", "Unreal Engine", "C#", "3D Modeling"],
    description: "Create immersive augmented and virtual reality experiences."
  },
  {
    id: 20,
    title: "Technical Support Engineer",
    company: "Zoho",
    location: "Chennai",
    skills: ["Troubleshooting", "Customer Service", "Technical Knowledge", "Communication"],
    description: "Provide excellent technical support to our customers and resolve issues efficiently."
  }
];

// All available skills from the job listings
const allSkills = Array.from(
  new Set(sampleJobs.flatMap(job => job.skills))
).sort();

const JobSeeker = () => {
  const navigate = useNavigate();
  const [filteredJobs, setFilteredJobs] = useState(sampleJobs);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [showAppliedMessage, setShowAppliedMessage] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const { toast } = useToast();

  const currentJob = filteredJobs[currentJobIndex];
  
  // Filter jobs based on selected skills
  useEffect(() => {
    if (selectedSkills.length === 0) {
      setFilteredJobs(sampleJobs);
    } else {
      const filtered = sampleJobs.filter(job => 
        selectedSkills.some(skill => job.skills.includes(skill))
      );
      setFilteredJobs(filtered);
    }
    setCurrentJobIndex(0);
  }, [selectedSkills]);
  
  const handleSwipeLeft = () => {
    // Skip job
    if (currentJobIndex < filteredJobs.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
    } else {
      // No more jobs
      setCurrentJobIndex(-1);
    }
  };
  
  const handleSwipeRight = () => {
    // Apply for job
    setAppliedJobs([...appliedJobs, currentJob.id]);
    
    // Show toast notification
    toast({
      title: "Application Sent!",
      description: `Your application for ${currentJob.title} at ${currentJob.company} has been submitted.`,
    });
    
    setShowAppliedMessage(true);
    
    setTimeout(() => {
      setShowAppliedMessage(false);
      if (currentJobIndex < filteredJobs.length - 1) {
        setCurrentJobIndex(currentJobIndex + 1);
      } else {
        // No more jobs
        setCurrentJobIndex(-1);
      }
    }, 1500);
  };
  
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
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
        <div className="flex gap-2">
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
            className="relative"
          >
            <Filter size={18} />
            {selectedSkills.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-neon-blue text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {selectedSkills.length}
              </span>
            )}
          </Button>
          <Button 
            variant="ghost" 
            onClick={goToResumeBuilder}
            className="flex items-center gap-2"
          >
            <FileText size={18} />
            <span className="hidden md:inline">Resume</span>
          </Button>
        </div>
      </div>
      
      {/* Skills Filter Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-6 glass-card p-4 rounded-xl"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Filter by Skills</h3>
            <Button variant="outline" size="sm" onClick={() => setSelectedSkills([])}>
              Clear All
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {allSkills.map((skill) => (
              <div 
                key={skill} 
                className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-2 cursor-pointer ${
                  selectedSkills.includes(skill) 
                    ? 'bg-neon-blue/20 border border-neon-blue/50' 
                    : 'bg-secondary/50 border border-secondary/10'
                }`}
                onClick={() => toggleSkill(skill)}
              >
                <Checkbox 
                  id={`skill-${skill}`}
                  checked={selectedSkills.includes(skill)}
                  className="h-3.5 w-3.5"
                />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
      
      <div className="flex-1 flex flex-col items-center justify-center">
        {currentJobIndex >= 0 && filteredJobs.length > 0 ? (
          <>
            <motion.div
              key={currentJob.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-md"
            >
              <SwipeLink
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-1">{currentJob.title}</h2>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building size={16} className="mr-1" />
                      <span>{currentJob.company}</span>
                      <span>•</span>
                      <span>{currentJob.location}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <Briefcase size={18} className="mr-2" />
                      Required Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentJob.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className={`text-sm ${
                          selectedSkills.includes(skill) ? 'bg-neon-blue/20 text-neon-blue border-neon-blue/30' : ''
                        }`}>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{currentJob.description}</p>
                  </div>
                </div>
              </SwipeLink>
            </motion.div>
            
            {/* Applied message overlay */}
            {showAppliedMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
              >
                <div className="bg-background rounded-xl p-8 flex flex-col items-center max-w-xs mx-auto">
                  <div className="w-16 h-16 bg-[#8A898C]/20 rounded-full flex items-center justify-center mb-4">
                    <Send size={28} className="text-[#8A898C]" />
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
            <h2 className="text-2xl font-bold mb-4">No Jobs Found</h2>
            <p className="text-muted-foreground mb-8">
              {selectedSkills.length > 0 
                ? "No jobs match your selected skills. Try adjusting your filters."
                : "You've viewed all available jobs. Check back later for more opportunities."}
            </p>
            <div className="flex flex-col gap-4">
              {selectedSkills.length > 0 && (
                <Button onClick={() => setSelectedSkills([])}>
                  Clear Skill Filters
                </Button>
              )}
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
