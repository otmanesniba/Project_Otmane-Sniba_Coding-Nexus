import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js through hands-on projects.",
    level: "Beginner",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
  },
  {
    title: "Python for Data Science",
    description: "Master Python programming and essential data science libraries.",
    level: "Intermediate",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
  },
  {
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps using React Native framework.",
    level: "Advanced",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Learn the basics of ML algorithms and their implementation.",
    level: "Intermediate",
    duration: "14 weeks",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80"
  },
  {
    title: "Cloud Computing with AWS",
    description: "Master cloud services and deployment with Amazon Web Services.",
    level: "Advanced",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  },
  {
    title: "Cybersecurity Essentials",
    description: "Learn fundamental concepts of network security and ethical hacking.",
    level: "Intermediate",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container mx-auto relative">
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