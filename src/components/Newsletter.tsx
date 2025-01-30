import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Stay Updated with Latest Courses
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            Subscribe to our newsletter and get notified about new course releases and coding tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/90"
            />
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;