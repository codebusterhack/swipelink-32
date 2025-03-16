
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ChevronLeft, 
  Download, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Save,
  Check
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: ""
  });
  
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    from: "",
    to: ""
  });
  
  const [experience, setExperience] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    description: ""
  });
  
  const [skills, setSkills] = useState("");
  
  const handleSaveResume = () => {
    // In a real app, this would save the resume to local storage or a database
    toast({
      title: "Resume Saved!",
      description: "Your resume has been saved successfully.",
      duration: 3000,
    });
  };
  
  const handleDownloadPDF = () => {
    // In a real app, this would generate a PDF of the resume
    toast({
      title: "Resume Downloaded!",
      description: "Your ATS-optimized resume has been downloaded.",
      duration: 3000,
    });
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
        <h1 className="text-2xl font-bold">ATS-Optimized Resume Builder</h1>
        <Button 
          variant="outline" 
          size="icon"
          onClick={handleDownloadPDF}
        >
          <Download size={20} />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Form Fields */}
        <div className="space-y-6 overflow-auto pb-4">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FileText size={20} className="mr-2 text-neon-blue" />
              Personal Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={personalInfo.name} 
                  onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={personalInfo.email} 
                    onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    value={personalInfo.phone} 
                    onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="linkedin">LinkedIn URL</Label>
                <Input 
                  id="linkedin" 
                  value={personalInfo.linkedin} 
                  onChange={(e) => setPersonalInfo({...personalInfo, linkedin: e.target.value})}
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>
              
              <div>
                <Label htmlFor="portfolio">Portfolio URL</Label>
                <Input 
                  id="portfolio" 
                  value={personalInfo.portfolio} 
                  onChange={(e) => setPersonalInfo({...personalInfo, portfolio: e.target.value})}
                  placeholder="https://johndoe.com"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <GraduationCap size={20} className="mr-2 text-neon-purple" />
              Education
            </h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="school">School/University</Label>
                <Input 
                  id="school" 
                  value={education.school} 
                  onChange={(e) => setEducation({...education, school: e.target.value})}
                  placeholder="University of Example"
                />
              </div>
              
              <div>
                <Label htmlFor="degree">Degree</Label>
                <Input 
                  id="degree" 
                  value={education.degree} 
                  onChange={(e) => setEducation({...education, degree: e.target.value})}
                  placeholder="Bachelor of Science"
                />
              </div>
              
              <div>
                <Label htmlFor="fieldOfStudy">Field of Study</Label>
                <Input 
                  id="fieldOfStudy" 
                  value={education.fieldOfStudy} 
                  onChange={(e) => setEducation({...education, fieldOfStudy: e.target.value})}
                  placeholder="Computer Science"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edu-from">From</Label>
                  <Input 
                    id="edu-from" 
                    value={education.from} 
                    onChange={(e) => setEducation({...education, from: e.target.value})}
                    placeholder="2018"
                  />
                </div>
                <div>
                  <Label htmlFor="edu-to">To</Label>
                  <Input 
                    id="edu-to" 
                    value={education.to} 
                    onChange={(e) => setEducation({...education, to: e.target.value})}
                    placeholder="2022"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="glass-card rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Briefcase size={20} className="mr-2 text-neon-green" />
              Work Experience
            </h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="job-title">Job Title</Label>
                <Input 
                  id="job-title" 
                  value={experience.title} 
                  onChange={(e) => setExperience({...experience, title: e.target.value})}
                  placeholder="Software Engineer"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    value={experience.company} 
                    onChange={(e) => setExperience({...experience, company: e.target.value})}
                    placeholder="Tech Company Inc."
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    value={experience.location} 
                    onChange={(e) => setExperience({...experience, location: e.target.value})}
                    placeholder="New York, NY"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="exp-from">From</Label>
                  <Input 
                    id="exp-from" 
                    value={experience.from} 
                    onChange={(e) => setExperience({...experience, from: e.target.value})}
                    placeholder="Jan 2022"
                  />
                </div>
                <div>
                  <Label htmlFor="exp-to">To</Label>
                  <Input 
                    id="exp-to" 
                    value={experience.to} 
                    onChange={(e) => setExperience({...experience, to: e.target.value})}
                    placeholder="Present"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  value={experience.description} 
                  onChange={(e) => setExperience({...experience, description: e.target.value})}
                  placeholder="Describe your responsibilities and achievements"
                  rows={4}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="glass-card rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award size={20} className="mr-2 text-neon-yellow" />
              Skills & Certifications
            </h2>
            
            <div>
              <Label htmlFor="skills">Skills (separated by commas)</Label>
              <Textarea 
                id="skills" 
                value={skills} 
                onChange={(e) => setSkills(e.target.value)}
                placeholder="JavaScript, React, Node.js, TypeScript, HTML, CSS"
                rows={3}
              />
              <p className="text-xs text-muted-foreground mt-2">
                Tip: Include keywords from job descriptions to improve ATS matching
              </p>
            </div>
          </motion.div>
          
          <div className="flex justify-center pt-4">
            <Button 
              onClick={handleSaveResume}
              className="bg-neon-blue hover:bg-neon-blue/90 neon-glow-blue"
            >
              <Save size={18} className="mr-2" />
              Save Resume
            </Button>
          </div>
        </div>
        
        {/* Right Side: Resume Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="sticky top-8">
            <div className="flex items-center mb-4">
              <FileText size={20} className="mr-2" />
              <h2 className="text-xl font-semibold">Resume Preview</h2>
              <div className="ml-auto bg-neon-green/20 text-neon-green px-2 py-1 rounded-full text-xs flex items-center">
                <Check size={12} className="mr-1" />
                ATS-Optimized
              </div>
            </div>
            
            <Card className="w-full bg-white text-black overflow-hidden">
              <CardContent className="p-8">
                {personalInfo.name ? (
                  <h1 className="text-2xl font-bold text-center mb-4">{personalInfo.name}</h1>
                ) : (
                  <h1 className="text-2xl font-bold text-center mb-4 text-gray-400">Your Name</h1>
                )}
                
                <div className="text-center text-sm text-gray-600 mb-6">
                  {personalInfo.email && <span className="mr-2">{personalInfo.email}</span>}
                  {personalInfo.phone && <span>{personalInfo.phone}</span>}
                  <br />
                  {personalInfo.linkedin && <span className="mr-2">{personalInfo.linkedin}</span>}
                  {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
                </div>
                
                {education.school && (
                  <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-gray-200 pb-1 mb-2">Education</h2>
                    <div>
                      <div className="font-semibold">{education.school}</div>
                      <div>{education.degree} {education.fieldOfStudy && `in ${education.fieldOfStudy}`}</div>
                      {(education.from || education.to) && (
                        <div className="text-sm text-gray-600">
                          {education.from} - {education.to}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {experience.title && (
                  <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-gray-200 pb-1 mb-2">Experience</h2>
                    <div>
                      <div className="font-semibold">{experience.title}</div>
                      <div>{experience.company}{experience.location && `, ${experience.location}`}</div>
                      {(experience.from || experience.to) && (
                        <div className="text-sm text-gray-600">
                          {experience.from} - {experience.to}
                        </div>
                      )}
                      {experience.description && (
                        <p className="text-sm mt-2">{experience.description}</p>
                      )}
                    </div>
                  </div>
                )}
                
                {skills && (
                  <div>
                    <h2 className="text-lg font-bold border-b border-gray-200 pb-1 mb-2">Skills</h2>
                    <p>{skills}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
