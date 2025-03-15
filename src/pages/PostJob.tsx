
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Briefcase, Send, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";

const PostJob = () => {
  const navigate = useNavigate();
  
  const [jobDetails, setJobDetails] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    skills: "",
    salaryMin: "",
    salaryMax: "",
    workMode: "onsite" // Default: onsite
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      [name]: value
    });
  };
  
  const handleWorkModeChange = (value: string) => {
    setJobDetails({
      ...jobDetails,
      workMode: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Job Posted!",
        description: "Your job has been posted successfully.",
        duration: 3000,
      });
      navigate("/recruiter");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground p-4">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => navigate("/recruiter")}
          className="mr-4"
        >
          <ChevronLeft size={22} />
        </Button>
        <h1 className="text-2xl font-bold">Post a New Job</h1>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto w-full"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Briefcase size={20} className="mr-2 text-neon-pink" />
              Job Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Job Title*</Label>
                <Input 
                  id="title" 
                  name="title"
                  value={jobDetails.title} 
                  onChange={handleChange}
                  placeholder="e.g. Frontend Developer"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company Name*</Label>
                  <Input 
                    id="company" 
                    name="company"
                    value={jobDetails.company} 
                    onChange={handleChange}
                    placeholder="e.g. Tech Solutions Inc."
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    name="location"
                    value={jobDetails.location} 
                    onChange={handleChange}
                    placeholder="e.g. New York, NY"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Job Description*</Label>
                <Textarea 
                  id="description" 
                  name="description"
                  value={jobDetails.description} 
                  onChange={handleChange}
                  placeholder="Describe the role, responsibilities, and requirements"
                  rows={5}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="skills">Required Skills*</Label>
                <Textarea 
                  id="skills" 
                  name="skills"
                  value={jobDetails.skills} 
                  onChange={handleChange}
                  placeholder="e.g. JavaScript, React, Node.js, SQL (separate with commas)"
                  rows={3}
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  These skills will be used to match candidates with your job posting
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Compensation & Work Mode</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="salaryMin">Salary Range (Min)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input 
                      id="salaryMin" 
                      name="salaryMin"
                      type="number"
                      value={jobDetails.salaryMin} 
                      onChange={handleChange}
                      placeholder="e.g. 50000"
                      className="pl-8"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="salaryMax">Salary Range (Max)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input 
                      id="salaryMax" 
                      name="salaryMax"
                      type="number"
                      value={jobDetails.salaryMax} 
                      onChange={handleChange}
                      placeholder="e.g. 80000"
                      className="pl-8"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <Label className="block mb-3">Work Mode*</Label>
                <RadioGroup 
                  value={jobDetails.workMode} 
                  onValueChange={handleWorkModeChange}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2 glass-card p-4 rounded-lg cursor-pointer">
                    <RadioGroupItem value="onsite" id="onsite" />
                    <Label htmlFor="onsite" className="cursor-pointer">Onsite</Label>
                  </div>
                  <div className="flex items-center space-x-2 glass-card p-4 rounded-lg cursor-pointer">
                    <RadioGroupItem value="remote" id="remote" />
                    <Label htmlFor="remote" className="cursor-pointer">Remote</Label>
                  </div>
                  <div className="flex items-center space-x-2 glass-card p-4 rounded-lg cursor-pointer">
                    <RadioGroupItem value="hybrid" id="hybrid" />
                    <Label htmlFor="hybrid" className="cursor-pointer">Hybrid</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center pt-4">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-neon-pink hover:bg-neon-pink/90 neon-glow-pink"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <span className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Posting...
                </div>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Post Job
                </>
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PostJob;
