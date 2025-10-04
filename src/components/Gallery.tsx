import { useState } from "react";
import { images, filterCategories } from "@/data/portfolio";
import { ImageModal } from "./ImageModal";
import { Button } from "./ui/button";

type FilterType = "all" | "focalLength" | "targetType" | "equipment" | "location";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredImages = images.filter((img) => {
    if (activeFilter === "all" || !activeTag) return true;
    return img.tags[activeFilter] === activeTag;
  });

  const handleFilterChange = (filterType: FilterType, tag: string | null) => {
    setActiveFilter(filterType);
    setActiveTag(tag);
  };

  const renderFilterButtons = (category: FilterType, tags: string[]) => {
    if (!tags.length) return null;
    
    return (
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
          {category === "focalLength" ? "Focal Length" : 
           category === "targetType" ? "Target Type" : 
           category === "equipment" ? "Equipment" : "Location"}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={activeFilter === category && activeTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange(category, tag)}
              className="text-xs"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Image Gallery
      </h2>

      {/* Filters */}
      <div className="max-w-4xl mx-auto mb-12 space-y-4">
        <div className="flex justify-center mb-6">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => handleFilterChange("all", null)}
          >
            View All Images
          </Button>
        </div>
        
        {renderFilterButtons("focalLength", filterCategories.focalLength)}
        {renderFilterButtons("targetType", filterCategories.targetType)}
        {renderFilterButtons("equipment", filterCategories.equipment)}
        {renderFilterButtons("location", filterCategories.location)}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => setSelectedImage(image)}
          >
            <div className="cosmic-border rounded-lg overflow-hidden aspect-square hover:stellar-glow transition-all duration-300">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-lg font-semibold mt-3 text-foreground group-hover:text-primary transition-colors">
              {image.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {Object.values(image.tags).filter(Boolean).slice(0, 2).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};
