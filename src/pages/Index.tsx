import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import Benefits from "@/components/Benefits";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeaturedCourses />
      <Benefits />
      <Newsletter />
    </main>
  );
};

export default Index;