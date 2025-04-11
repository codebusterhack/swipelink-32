
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Plus } from "lucide-react";

const Recruiter = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground p-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link to="/">
            <Button variant="outline" size="icon" className="mr-4">
              <ChevronLeft size={22} />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
        </div>
        
        <Link to="/post-job">
          <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white">
            <Plus size={18} className="mr-2" /> Post a Job
          </Button>
        </Link>
      </div>
      
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="text-xl mb-4">Find your perfect candidates</h2>
        <p className="mb-6">This page is under development. Please check back soon!</p>
      </div>
    </div>
  );
};

export default Recruiter;
