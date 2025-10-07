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
                <img src="/favicon.ico" alt="favicon" className="w-8 h-8 rounded-xl"/>
              </h2>
              <p className="text-muted-foreground mb-4 text-xl">
                {aboutMe.title}
              </p>
              <p className="text-foreground leading-relaxed mb-6 text-base">
                {aboutMe.description}
              </p>
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3 text-foreground text-xl">
                  What is "Astrophotography"?
                </h3>
                <p className="text-muted-foreground text-lg">
                  Astrophotography is the practice of photographing celestial objects and phenomena in the night sky, such as stars, planets, galaxies, nebulae and comets. It combines astronomy and photography to capture images that reveal details and colors often invisible to the naked eye. It can be done with a smartphone, a DSLR (or mirrorless) camera, or even dedicated professional equipment.
                </p>
              </div>
              <br></br>
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3 text-foreground text-xl">Where you can see more of my work</h3>
                  <b className="text-l"><a href="https://www.instagram.com/yasaik_">Instagram @yasaik_ <br></br><br></br><img src="src/assets/watermark.png"></img></a></b>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>;
};
export default Biography;