
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      [name]: value
    });
  };
  
  const handleWorkModeChange = (value) => {
    setJobDetails({
      ...jobDetails,
      workMode: value
    });
  };
  
  const handleSubmit = (e) => {
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
                    placeholder="e.g. Acme Inc."
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="location">Location*</Label>
                  <Input 
                    id="location" 
                    name="location"
                    value={jobDetails.location} 
                    onChange={handleChange}
                    placeholder="e.g. New York, NY"
                    required
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
                  placeholder="Describe the responsibilities and requirements..."
                  className="h-32"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="skills">Required Skills*</Label>
                <Input 
                  id="skills" 
                  name="skills"
                  value={jobDetails.skills} 
                  onChange={handleChange}
                  placeholder="e.g. React, Node.js, TypeScript"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="salaryMin">Salary Min (USD)</Label>
                  <Input 
                    id="salaryMin" 
                    name="salaryMin"
                    type="number"
                    value={jobDetails.salaryMin} 
                    onChange={handleChange}
                    placeholder="e.g. 50000"
                  />
                </div>
                
                <div>
                  <Label htmlFor="salaryMax">Salary Max (USD)</Label>
                  <Input 
                    id="salaryMax" 
                    name="salaryMax"
                    type="number"
                    value={jobDetails.salaryMax} 
                    onChange={handleChange}
                    placeholder="e.g. 80000"
                  />
                </div>
              </div>
              
              <div>
                <Label className="mb-2 block">Work Mode*</Label>
                <RadioGroup 
                  defaultValue="onsite" 
                  value={jobDetails.workMode}
                  onValueChange={handleWorkModeChange}
                  className="flex space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="onsite" id="onsite" />
                    <Label htmlFor="onsite">On-site</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="remote" id="remote" />
                    <Label htmlFor="remote">Remote</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hybrid" id="hybrid" />
                    <Label htmlFor="hybrid">Hybrid</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit"
              className="bg-neon-pink hover:bg-neon-pink/80 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Processing...</>
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
