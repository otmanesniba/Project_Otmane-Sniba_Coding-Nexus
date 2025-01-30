import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js through hands-on projects.",
    level: "Beginner",
    duration: "12 weeks",
    image: "/placeholder.svg"
  },
  {
    title: "Python for Data Science",
    description: "Master Python programming and essential data science libraries.",
    level: "Intermediate",
    duration: "8 weeks",
    image: "/placeholder.svg"
  },
  {
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps using React Native framework.",
    level: "Advanced",
    duration: "10 weeks",
    image: "/placeholder.svg"
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Featured Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start your coding journey with our most popular courses, designed to help you master in-demand skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;