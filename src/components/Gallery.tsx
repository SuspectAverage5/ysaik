import { useState } from "react";
import { images, filterCategories } from "@/data/portfolio";
import { ImageModal } from "./ImageModal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, ArrowUp } from "lucide-react";
import watermark from "@/assets/watermark.png";
type FilterType = "all" | "focalLength" | "targetType" | "equipment" | "location";
export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [selectedTags, setSelectedTags] = useState<{filterType: FilterType, tag: string}[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredImages = images.filter(img => {
    // Filter by selected tags (AND logic - image must have ALL selected tags)
    const matchesFilter = selectedTags.length === 0 || selectedTags.every(
      ({filterType, tag}) => img.tags[filterType] === tag
    );

    // Filter by search query
    if (!searchQuery.trim()) return matchesFilter;
    const searchTerms = searchQuery.toLowerCase().split(',').map(term => term.trim()).filter(Boolean);
    const matchesSearch = searchTerms.some(term => {
      return img.title.toLowerCase().includes(term) || Object.values(img.tags).some(tag => tag?.toLowerCase().includes(term));
    });
    return matchesFilter && matchesSearch;
  });
  
  const handleFilterChange = (filterType: FilterType, tag: string | null) => {
    if (filterType === "all") {
      setSelectedTags([]);
      return;
    }
    
    if (!tag) return;
    
    const tagExists = selectedTags.some(t => t.filterType === filterType && t.tag === tag);
    if (tagExists) {
      // Deselect if clicking the same tag
      setSelectedTags(selectedTags.filter(t => !(t.filterType === filterType && t.tag === tag)));
    } else {
      // Remove any existing tag from this category, then add the new one
      const otherTags = selectedTags.filter(t => t.filterType !== filterType);
      setSelectedTags([...otherTags, {filterType, tag}]);
    }
  };
  
  const isTagSelected = (filterType: FilterType, tag: string) => {
    return selectedTags.some(t => t.filterType === filterType && t.tag === tag);
  };
  const renderFilterButtons = (category: FilterType, tags: string[]) => {
    if (!tags.length) return null;
    return <div className="mb-4">
        <h3 className="font-semibold text-muted-foreground mb-2 uppercase tracking-wider text-base">
          {category === "focalLength" ? "Focal Length" : category === "targetType" ? "Target Type" : category === "equipment" ? "Equipment" : "Location"}
        </h3>
        <div className="flex flex-wrap gap-2 px-0 my-0 py-0 mx-0 bg-inherit">
          {tags.map(tag => <Button key={tag} variant={isTagSelected(category, tag) ? "default" : "outline"} size="sm" onClick={() => handleFilterChange(category, tag)} className="text-sm transition-all duration-300 ease-in-out hover:shadow-lg">
              {tag}
            </Button>)}
        </div>
      </div>;
  };
  return <section className="relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="container mx-auto px-4 py-20 relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
        Image Gallery
      </h2>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input type="text" placeholder="Search by target name or tags (comma-separated)..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 py-6 text-base" />
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex justify-center mb-6">
          <Button variant={selectedTags.length === 0 ? "default" : "outline"} onClick={() => handleFilterChange("all", null)} className="rounded-xl font-normal text-base text-center text-slate-50 transition-all duration-300 ease-in-out hover:shadow-lg">
            {selectedTags.length === 0 ? "All Images" : "Reset tags"}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderFilterButtons("focalLength", filterCategories.focalLength)}
          {renderFilterButtons("targetType", filterCategories.targetType)}
          {renderFilterButtons("equipment", filterCategories.equipment)}
          {renderFilterButtons("location", filterCategories.location)}
        </div>
      </div>

      {/* Image Grid */}
      {filteredImages.length === 0 && (selectedTags.length > 0 || searchQuery.trim()) ? (
        <div className="text-center py-20">
          <p className="text-2xl text-muted-foreground">:( no images with all set tags</p>
          <p className="text-2xl text-muted-foreground">use the "Reset tags" button</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => <div key={image.id} className="group cursor-pointer animate-fade-in" onClick={() => setSelectedImage(image)}>
              <div className="cosmic-border rounded-lg overflow-hidden aspect-square hover:stellar-glow transition-all duration-300 relative">
                <img src={image.src} alt={image.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                {/* <img src={watermark} alt="Watermark" className="absolute bottom-2 right-2 md:w-30% md:h-30% opacity-25 pointer-events-none" width="30%" height="30%" /> */}
              </div>
              <h3 className="font-semibold mt-3 text-foreground group-hover:text-primary transition-colors text-xl text-left">
                {image.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {Object.values(image.tags).filter(Boolean).slice(0, 2).map((tag, i) => <span key={i} className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {tag}
                  </span>)}
              </div>
            </div>)}
        </div>
      )}

      {/* Image Modal */}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        <div className="h-[2px] bg-gradient-to-r from-primary via-accent to-primary mx-auto w-full max-w-3xl my-[30px]"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
        Panoramas
        </h2>
        <h3 className="font-semibold mt-3 text-foreground group-hover:text-primary transition-colors text-xl text-center mb-[30px]">
              Ariz, Lebanon
        </h3>
        <div className="flex justify-center mb-[30px]">
          <iframe className="w-[100%] h-[80vh] rounded-xl" src="https://momento360.com/e/u/0ae456b2283d438886f59a54d3267053?utm_campaign=embed&utm_source=other&heading=-127.48&pitch=22.95&field-of-view=61&size=medium&display-plan=true" allowFullScreen allow="fullscreen"></iframe>
        </div>
        <div className="flex justify-center mb-[30px]">
          <img src="/assets/8-23-25 little planet.png"></img>
        </div>
        <div className="flex justify-center mb-[30px]">
          <img src="/assets/8-31-24 spherical.png"></img>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mt-12 mb-8">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            variant="outline"
            size="lg"
            className="rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <ArrowUp className="mr-2 h-5 w-5" />
            Back to Top
          </Button>
        </div>
      </div>
    </section>;
};