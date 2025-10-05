import { Header } from "@/components/Header";
import { aboutMe } from "@/data/portfolio";

const Biography = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <div className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {aboutMe.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {aboutMe.title}
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                {aboutMe.description}
              </p>
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  My Journey
                </h3>
                <p className="text-muted-foreground">
                  Add your personal story, background, and passion for astrophotography here.
                  Share what inspired you to start this amazing journey capturing the cosmos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Biography;
