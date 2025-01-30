const About = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-4xl font-bold mb-8 text-accent text-center">About Us</h1>
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <p className="text-muted-foreground mb-6">
              We are passionate about making coding education accessible to everyone. Our platform offers comprehensive courses designed by industry experts to help you master the skills needed in today's tech landscape.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-accent">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              To empower individuals with the knowledge and skills they need to succeed in the digital world through high-quality, interactive coding education.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-accent">Our Values</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Excellence in Education</li>
              <li>Innovation in Teaching</li>
              <li>Community Support</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;