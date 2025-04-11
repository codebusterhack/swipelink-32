
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
