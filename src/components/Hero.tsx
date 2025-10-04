import { useState } from "react";
import { aboutMe, equipment } from "@/data/portfolio";
import heroBg from "@/assets/M42.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [showEquipment, setShowEquipment] = useState(false);
  
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 1
    }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-blue-500 font-bold mx-0 md:text-7xl">
            {aboutMe.name}
          </h1>
          <p className="text-xl mb-6 font-extrabold text-blue-500 md:text-4xl">
            {aboutMe.title}
          </p>
          <p className="max-w-2xl mx-auto text-lg font-semibold text-blue-100 text-center">
            {aboutMe.description}
          </p>
        </div>

        {/* Equipment Toggle Button */}
        <div className="max-w-6xl mx-auto relative">
          <Button 
            onClick={() => setShowEquipment(!showEquipment)}
            variant="outline"
            className="absolute bottom-0 left-0"
          >
            {showEquipment ? "Hide Equipment Info" : "Show Equipment Info ->"}
          </Button>
          
          {/* Equipment Grid */}
          {showEquipment && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {equipment.map((item, index) => <div key={item.id} style={{
              animationDelay: `${index * 100}ms`
            }} className="cosmic-border p-6 hover:stellar-glow transition-all duration-300 animate-fade-in bg-blue-800 rounded-2xl px-[23px] py-[25px] mx-0 my-0">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>)}
            </div>
          )}
        </div>
      </div>
    </section>;
};