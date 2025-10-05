import { Header } from "@/components/Header";
import { aboutMe } from "@/data/portfolio";
const Biography = () => {
  return <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <div className="pt-16">
        <section className="container mx-auto px-4 py-20 bg-inherit rounded-none">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="mb-4 text-foreground flex items-center gap-3 font-semibold text-3xl">
                {aboutMe.name}
                <img src="/favicon.ico" alt="favicon" className="w-8 h-8" />
              </h2>
              <p className="text-muted-foreground mb-4 text-xl">
                {aboutMe.title}
              </p>
              <p className="text-foreground leading-relaxed mb-6 text-base">
                {aboutMe.description}
              </p>
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3 text-foreground text-xl">
                  My Journey
                </h3>
                <p className="text-muted-foreground text-lg">
                  Add your personal story, background, and passion for astrophotography here.
                  Share what inspired you to start this amazing journey capturing the cosmos.
                </p>
              </div>
              <br></br>
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3 text-foreground text-xl">Socials</h3>
                  <b className="text-l"><a href="https://www.instagram.com/yasaik_">Instagram @yasaik_ <br></br><br></br><img src="src/assets/watermark.png"></img></a></b>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>;
};
export default Biography;