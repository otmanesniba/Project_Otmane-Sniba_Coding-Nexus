import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-secondary py-20 px-4">
      <div className="container mx-auto text-center animate-fade-up">
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
          Start Learning Today
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">
          Master Coding with Expert-Led Courses
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Learn programming from industry experts through interactive lessons, real-world projects, and a supportive community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Courses
          </Button>
          <Button size="lg" variant="outline">
            View Learning Paths
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;