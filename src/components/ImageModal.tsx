import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { X } from "lucide-react";
import { ImageData } from "@/data/portfolio";

interface ImageModalProps {
  image: ImageData | null;
  onClose: () => void;
}

export const ImageModal = ({ image, onClose }: ImageModalProps) => {
  const [showFullscreen, setShowFullscreen] = useState(false);
  
  if (!image) return null;

  return (
    <>
      <Dialog open={!!image} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-card border-border">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-50 rounded-full p-2 bg-background/80 hover:bg-background transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col md:flex-row h-full">
            {/* Image */}
            <div className="flex-1 flex items-center justify-center p-6 bg-background/50 overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="max-w-full max-h-[calc(90vh-3rem)] object-contain rounded-lg stellar-glow cursor-pointer transition-opacity"
                onClick={() => setShowFullscreen(true)}
              />
            </div>

          {/* EXIF & Info Panel */}
          <div className="w-full md:w-96 p-6 overflow-y-auto cosmic-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              {image.title}
            </h2>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(image.tags).map(([key, value]) => 
                  value ? (
                    <span
                      key={key}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {value}
                    </span>
                  ) : null
                )}
              </div>
            </div>

            {/* EXIF Data */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                Image Details
              </h3>
              <div className="space-y-3">
                {Object.entries(image.exif).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">{key}</span>
                    <span className="text-sm font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add your custom notes section */}
            <div className="mt-6 p-4 rounded-lg bg-muted/50">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                Notes
              </h3>
              <p className="text-sm text-foreground/70 italic">
                Please do not steal
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>

      {/* Fullscreen Image Dialog */}
      <Dialog open={showFullscreen} onOpenChange={setShowFullscreen}>
        <DialogContent className="max-w-[100vw] w-full h-[100vh] p-0 bg-background/95 border-0 flex flex-col">
          <button
            onClick={() => setShowFullscreen(false)}
            className="absolute right-4 top-4 z-50 rounded-full p-2 bg-background/80 hover:bg-background transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center justify-center w-full flex-1 p-2 md:p-4">
            <img
              src={image.src}
              alt={image.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
