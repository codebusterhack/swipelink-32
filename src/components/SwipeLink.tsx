
import { useState, useRef, useEffect } from "react";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SwipeLinkProps {
  children: React.ReactNode;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  allowSwipe?: boolean;
}

const SwipeLink = ({ children, onSwipeLeft, onSwipeRight, allowSwipe = true }: SwipeLinkProps) => {
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  
  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 100;
    
    if (info.offset.x > threshold) {
      controls.start({ x: 500, opacity: 0 });
      onSwipeRight();
    } else if (info.offset.x < -threshold) {
      controls.start({ x: -500, opacity: 0 });
      onSwipeLeft();
    } else {
      controls.start({ x: 0, opacity: 1, scale: 1 });
    }
  };

  const handleSwipeLeft = () => {
    if (!allowSwipe) return;
    controls.start({ x: -500, opacity: 0 });
    onSwipeLeft();
  };

  const handleSwipeRight = () => {
    if (!allowSwipe) return;
    controls.start({ x: 500, opacity: 0 });
    onSwipeRight();
  };

  // Add keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!allowSwipe) return;
      
      if (e.key === 'ArrowLeft') {
        handleSwipeLeft();
      } else if (e.key === 'ArrowRight') {
        handleSwipeRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [allowSwipe]);

  return (
    <div className="relative w-full max-w-md mx-auto h-[500px]" ref={constraintsRef}>
      {/* Swipe direction indicators with increased spacing */}
      {allowSwipe && (
        <>
          <div className="absolute left-[-160px] top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground font-medium opacity-80 rotate-[-90deg]">
            Swipe left to reject
          </div>
          <div className="absolute right-[-160px] top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground font-medium opacity-80 rotate-90">
            Swipe right to accept
          </div>
        </>
      )}
      
      <motion.div
        drag={allowSwipe ? "x" : false}
        dragConstraints={constraintsRef}
        dragElastic={0.7}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`glass-card w-full h-full rounded-2xl shadow-xl overflow-hidden relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "none" }}
      >
        {children}
      </motion.div>
      
      {allowSwipe && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6 z-10">
          <Button 
            size="icon" 
            className="bg-[#505050]/90 hover:bg-[#404040] rounded-full w-14 h-14 shadow-lg"
            onClick={handleSwipeLeft}
            aria-label="Reject"
          >
            <X size={28} className="text-white" />
          </Button>
          <Button 
            size="icon" 
            className="bg-[#707070]/90 hover:bg-[#606060] rounded-full w-14 h-14 shadow-lg"
            onClick={handleSwipeRight}
            aria-label="Accept"
          >
            <Check size={28} className="text-white" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default SwipeLink;
