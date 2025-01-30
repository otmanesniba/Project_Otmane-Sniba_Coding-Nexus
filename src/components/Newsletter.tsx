import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF61A_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF61A_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Stay Updated with Latest Courses
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter and get notified about new course releases and coding tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-background border-muted text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
            />
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 hover:shadow-neon transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;