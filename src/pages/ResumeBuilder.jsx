
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumeBuilder = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleDownloadPDF = async () => {
    if (!formData.name) {
      toast({
        title: "Missing information",
        description: "Please provide at least your name before downloading",
        variant: "destructive"
      });
      return;
    }
    
    const resumeElement = document.getElementById("resume-preview");
    
    if (!resumeElement) {
      toast({
        title: "Error",
        description: "Could not generate PDF. Please try again.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      toast({
        title: "Generating PDF",
        description: "Please wait while we prepare your resume..."
      });
      
      const canvas = await html2canvas(resumeElement, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      
      // A4 dimensions in mm: 210 x 297
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`${formData.name.replace(/\s+/g, '_')}_resume.pdf`);
      
      toast({
        title: "Success!",
        description: "Your resume has been downloaded successfully"
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Could not generate PDF. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground p-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link to="/">
            <Button variant="outline" size="icon" className="mr-4">
              <ChevronLeft size={22} />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Resume Builder</h1>
        </div>
        
        <Button 
          onClick={handleDownloadPDF}
          className="bg-neon-purple hover:bg-neon-purple/80 text-white"
        >
          <Download size={18} className="mr-2" /> Download Resume
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto w-full">
        {/* Form */}
        <div className="flex-1 glass-card rounded-xl p-6 space-y-6">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name*</Label>
              <Input 
                id="name" 
                name="name"
                value={formData.name} 
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email*</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={formData.email} 
                onChange={handleChange}
                placeholder="john.doe@example.com"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone"
                value={formData.phone} 
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Professional Summary</h2>
          <div>
            <Textarea 
              id="summary" 
              name="summary"
              value={formData.summary} 
              onChange={handleChange}
              placeholder="Write a brief overview of your professional background, skills, and career objectives..."
              className="h-32"
            />
          </div>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Experience</h2>
          <div>
            <Textarea 
              id="experience" 
              name="experience"
              value={formData.experience} 
              onChange={handleChange}
              placeholder="List your work experience with company names, dates, and key responsibilities..."
              className="h-32"
            />
          </div>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Education</h2>
          <div>
            <Textarea 
              id="education" 
              name="education"
              value={formData.education} 
              onChange={handleChange}
              placeholder="List your educational background with institutions, degrees, and dates..."
              className="h-24"
            />
          </div>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Skills</h2>
          <div>
            <Textarea 
              id="skills" 
              name="skills"
              value={formData.skills} 
              onChange={handleChange}
              placeholder="List your key professional skills separated by commas..."
              className="h-24"
            />
          </div>
        </div>
        
        {/* Preview */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
          <div 
            id="resume-preview" 
            className="glass-card rounded-xl p-6 min-h-[800px] bg-white text-black"
          >
            {/* Resume Header */}
            <div className="border-b-2 border-gray-800 pb-4 mb-6">
              <h1 className="text-2xl font-bold text-center">
                {formData.name || "Your Name"}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
                {formData.email && (
                  <div>{formData.email}</div>
                )}
                {formData.phone && (
                  <div>{formData.phone}</div>
                )}
              </div>
            </div>
            
            {/* Summary */}
            {formData.summary && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold border-b border-gray-400 mb-2">
                  Professional Summary
                </h2>
                <p className="text-sm whitespace-pre-line">{formData.summary}</p>
              </div>
            )}
            
            {/* Experience */}
            {formData.experience && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold border-b border-gray-400 mb-2">
                  Experience
                </h2>
                <p className="text-sm whitespace-pre-line">{formData.experience}</p>
              </div>
            )}
            
            {/* Education */}
            {formData.education && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold border-b border-gray-400 mb-2">
                  Education
                </h2>
                <p className="text-sm whitespace-pre-line">{formData.education}</p>
              </div>
            )}
            
            {/* Skills */}
            {formData.skills && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold border-b border-gray-400 mb-2">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2 text-sm">
                  {formData.skills.split(',').map((skill, index) => (
                    <div key={index} className="bg-gray-100 px-2 py-1 rounded">
                      {skill.trim()}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
