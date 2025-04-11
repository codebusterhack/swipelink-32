
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
