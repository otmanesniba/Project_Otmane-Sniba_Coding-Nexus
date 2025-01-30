import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Expert-Led Instruction",
    description: "Learn from industry professionals with years of real-world experience."
  },
  {
    title: "Interactive Learning",
    description: "Practice coding with hands-on exercises and real-time feedback."
  },
  {
    title: "Project-Based Curriculum",
    description: "Build a portfolio of projects that showcase your skills to employers."
  },
  {
    title: "Community Support",
    description: "Join a community of learners and get help when you need it."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide a comprehensive learning experience designed to help you succeed in your coding journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-background rounded-lg shadow-sm animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-accent">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;