import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF61A_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF61A_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container mx-auto text-center animate-fade-up relative z-10">
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary animate-glow">
          Start Learning Today
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Master Coding with Expert-Led Courses
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Learn programming from industry experts through interactive lessons, real-world projects, and a supportive community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 hover:shadow-neon transition-all duration-300"
          >
            Explore Courses
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 hover:shadow-neon transition-all duration-300"
          >
            View Learning Paths
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;