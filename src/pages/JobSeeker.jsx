
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const JobSeeker = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground p-4">
      <div className="flex items-center mb-8">
        <Link to="/">
          <Button variant="outline" size="icon" className="mr-4">
            <ChevronLeft size={22} />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Job Seeker Dashboard</h1>
      </div>
      
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="text-xl mb-4">Find your perfect job match</h2>
        <p className="mb-6">This page is under development. Please check back soon!</p>
        <Link to="/resume-builder">
          <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
            Build Your Resume
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobSeeker;
