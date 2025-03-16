
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Check, User, Users, FileText, Star, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  
  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
    
    // Add a small delay for animation
    setTimeout(() => {
      if (role === "jobseeker") {
        navigate("/job-seeker");
      } else if (role === "recruiter") {
        navigate("/recruiter");
      } else if (role === "resume") {
        navigate("/resume-builder");
      }
    }, 500);
  };

  // Testimonials with Indian names
  const testimonials = [
    {
      id: 1,
      name: "Raj Malhotra",
      role: "Software Engineer",
      company: "TCS",
      quote: "SwipeLink helped me find my dream job within a week! The interface is intuitive and the matching system is incredibly accurate.",
      rating: 5
    },
    {
      id: 2,
      name: "Ananya Sharma",
      role: "HR Manager",
      company: "Wipro",
      quote: "As a recruiter, SwipeLink has transformed our hiring process. We can now find qualified candidates faster than ever before.",
      rating: 5
    },
    {
      id: 3, 
      name: "Vikram Patel",
      role: "Product Manager",
      company: "Infosys",
      quote: "The resume builder feature helped me optimize my CV for ATS systems. I started getting interviews immediately!",
      rating: 4
    },
    {
      id: 4,
      name: "Neha Reddy",
      role: "UX Designer",
      company: "Zoho",
      quote: "SwipeLink's interface is so clean and professional. The swiping mechanism makes job hunting actually enjoyable!",
      rating: 5
    },
    {
      id: 5,
      name: "Arjun Singh",
      role: "CTO",
      company: "Tech Mahindra",
      quote: "We've reduced our hiring time by 40% since implementing SwipeLink for our technical roles. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">SwipeLink</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
          Professional job matching for recruiters and job seekers
        </p>
      </motion.div>

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
            <Button 
              variant="outline" 
              className="border-neon-pink text-neon-pink hover:bg-neon-pink/20 hover:text-white"
            >
              <Check className="mr-2 h-4 w-4" /> Get Started
            </Button>
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
            <Button 
              variant="outline" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 hover:text-white"
            >
              <Check className="mr-2 h-4 w-4" /> Get Started
            </Button>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Features section */}
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
      
      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-full max-w-5xl mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2">
                <div className="glass-card p-6 rounded-xl h-full">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.rating ? "text-neon-yellow fill-neon-yellow" : "text-muted"}
                        />
                      ))}
                    </div>
                    <p className="italic text-muted-foreground mb-4 flex-grow">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </motion.div>
      
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="w-full max-w-5xl mt-20 glass-card p-8 rounded-xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left whitespace-nowrap">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to transform your professional journey?</h2>
            <p className="text-muted-foreground">Join thousands of professionals finding their perfect match every day.</p>
          </div>
          <Button size="lg" className="bg-neon-purple hover:bg-neon-purple/90 whitespace-nowrap">
            Get Started <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
