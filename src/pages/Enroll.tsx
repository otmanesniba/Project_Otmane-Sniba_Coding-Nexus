import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Enroll = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "🎉 Enrollment Successful!",
      description: "Welcome aboard! Check your email for next steps.",
      className: "bg-card border-primary",
    });

    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto bg-card p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-accent">
          {state?.course?.title || "Course Enrollment"}
        </h1>
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-muted-foreground mb-2">
              Full Name
            </label>
            <Input
              id="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full transition-all duration-300 focus:shadow-neon"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full transition-all duration-300 focus:shadow-neon"
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 hover:shadow-neon transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                "Enroll Now"
              )}
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Enroll;