const Policy = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-4xl font-bold mb-8 text-accent text-center">Website Policy</h1>
          <div className="bg-card rounded-lg p-8 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">Privacy Policy</h2>
              <p className="text-muted-foreground">
                We take your privacy seriously. This policy describes what personal information we collect and how we use it.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">Terms of Service</h2>
              <p className="text-muted-foreground">
                By accessing our website and services, you agree to these terms of service and all applicable laws and regulations.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">Refund Policy</h2>
              <p className="text-muted-foreground">
                We offer a 30-day money-back guarantee on all our courses if you're not satisfied with the content.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;