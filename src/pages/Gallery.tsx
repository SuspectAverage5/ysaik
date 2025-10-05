import { Gallery as GalleryComponent } from "@/components/Gallery";
import { Header } from "@/components/Header";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <GalleryComponent />
      </div>
    </div>
  );
};

export default Gallery;
