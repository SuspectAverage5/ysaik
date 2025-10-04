// Portfolio data - Easy to modify
// Add your own images and equipment information here

export interface ImageData {
  id: string;
  src: string;
  title: string;
  tags: {
    focalLength?: string;
    targetType?: string;
    equipment?: string;
    location?: string;
  };
  exif: {
    [key: string]: string;
  };
}

export interface EquipmentItem {
  id: string;
  name: string;
  image: string;
  description: string;
}

// MODIFY THIS: Your personal information
export const aboutMe = {
  name: "Your Name",
  title: "Amateur Astrophotographer",
  description: "Capturing the cosmos through my telescope, one photon at a time. Passionate about deep-sky imaging and sharing the beauty of the universe.",
};

// MODIFY THIS: Your equipment showcase
export const equipment: EquipmentItem[] = [
  {
    id: "1",
    name: "Telescope",
    image: "/placeholder.svg", // Replace with your equipment photo
    description: "Your telescope model and specs"
  },
  {
    id: "2",
    name: "Mount",
    image: "/placeholder.svg", // Replace with your equipment photo
    description: "Your mount model and specs"
  },
  {
    id: "3",
    name: "Camera",
    image: "/placeholder.svg", // Replace with your equipment photo
    description: "Your camera model and specs"
  },
  {
    id: "4",
    name: "Accessories",
    image: "/placeholder.svg", // Replace with your equipment photo
    description: "Filters, guide scope, etc."
  }
];

// MODIFY THIS: Your astrophotography images
export const images: ImageData[] = [
  {
    id: "1",
    src: "/placeholder.svg", // Replace with your image
    title: "Orion Nebula",
    tags: {
      focalLength: "600mm",
      targetType: "Nebula",
      equipment: "Refractor + DSLR",
      location: "Dark Sky Site"
    },
    exif: {
      "Exposure": "2 hours (120x60s)",
      "ISO": "800",
      "Date": "2024-01-15",
      "Filters": "None",
      "Seeing": "Good (3/5)"
    }
  },
  {
    id: "2",
    src: "/placeholder.svg", // Replace with your image
    title: "Andromeda Galaxy",
    tags: {
      focalLength: "400mm",
      targetType: "Galaxy",
      equipment: "Refractor + DSLR",
      location: "Backyard"
    },
    exif: {
      "Exposure": "3 hours (180x60s)",
      "ISO": "1600",
      "Date": "2024-02-20",
      "Filters": "Light Pollution",
      "Seeing": "Average (2/5)"
    }
  },
  // Add more images here
];

// Available filter categories
export const filterCategories = {
  focalLength: Array.from(new Set(images.map(img => img.tags.focalLength).filter(Boolean))),
  targetType: Array.from(new Set(images.map(img => img.tags.targetType).filter(Boolean))),
  equipment: Array.from(new Set(images.map(img => img.tags.equipment).filter(Boolean))),
  location: Array.from(new Set(images.map(img => img.tags.location).filter(Boolean))),
};
