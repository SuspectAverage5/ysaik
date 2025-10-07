import { aboutMe } from "@/data/portfolio";
import heroBg from "@/assets/M42.jpg";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(7, 33, 61, 1) 100%), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-blue-500 font-bold mx-0 md:text-7xl">
              {aboutMe.name}
            </h1>
            <p className="text-xl mb-6 font-extrabold text-blue-500 md:text-4xl">
              <Link to="/biography" className="bottom-8 left-1/2 transform -translate-x-1/2 z-20 hover:text-blue-300 transition-all duration-600 rounded-full">
              {aboutMe.title}
              </Link>
            </p>
            <p className="max-w-2xl mx-auto text-lg font-semibold text-blue-100 text-center">
              {aboutMe.description}
            </p>
          </div>
          <Link to="/gallery" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <Button size="lg" className="text-white">View Image Gallery →</Button>
          </Link>
          
        </div>
      </section>
      <div className="elfsight-app-846269a5-8edf-476c-babe-2ae635de83b8" data-elfsight-app-lazy></div>
    </div>
  );
};