import { equipment, software, astronomyApps } from "@/data/portfolio";
import { Header } from "@/components/Header";

const Equipment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted animate-fade-in">
      <Header />
      <div className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            My Equipment
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {equipment.map((item) => (
              <div
                key={item.id}
                className="cosmic-border p-6 hover:stellar-glow transition-all duration-300 bg-blue-800 rounded-2xl"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full hover:scale-110 transition-transform duration-300 ${
                      item.id === "4" || item.id === "7" ? "object-contain" : "object-cover"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Processing Software
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {software.map((item) => (
              <div
                key={item.id}
                className="cosmic-border p-6 hover:stellar-glow transition-all duration-300 bg-blue-800 rounded-2xl"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Stargazing / Astronomy Apps
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {astronomyApps.map((item) => (
              <div
                key={item.id}
                className="cosmic-border p-6 hover:stellar-glow transition-all duration-300 bg-blue-800 rounded-2xl"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <footer className="text-sm text-muted-foreground whitespace-pre-line text-center"><i>All trademarks, logos and product images are the property of their respective owners. This website is not affiliated with or endorsed by any of the mentioned software companies. All are used for informational purposes only.</i></footer>
      </div>
  );
};

export default Equipment;
