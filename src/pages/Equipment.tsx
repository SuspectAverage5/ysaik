import { equipment } from "@/data/portfolio";
import { Header } from "@/components/Header";

const Equipment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <div className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            My Equipment
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {equipment.map((item, index) => (
              <div
                key={item.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="cosmic-border p-6 hover:stellar-glow transition-all duration-300 animate-fade-in bg-blue-800 rounded-2xl"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted">
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
      </div>
    </div>
  );
};

export default Equipment;
