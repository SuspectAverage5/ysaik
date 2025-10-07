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
  name: "Yasaik_",
  title: "Amateur Astrophotography",
  description: "See the cosmos through my eyes, one picture at a time. Discover deep-sky imaging and night sky photography while shedding light on the beauty of the universe.",
};

// MODIFY THIS: Your equipment showcase
export const equipment: EquipmentItem[] = [
  {
    id: "1",
    name: "Telescope",
    image: "src/assets/edgehd8.jpg", // Replace with your equipment photo
    description: 'Celestron EdgeHD 8"'
  },
  {
    id: "2",
    name: "Mount",
    image: "src/assets/eq6rpro.jpg", // Replace with your equipment photo
    description: "SkyWatcher EQ6-R Pro"
  },
  {
    id: "3",
    name: "Astro Camera",
    image: "src/assets/2600mcp.png", // Replace with your equipment photo
    description: "ZWO ASI2600MC Pro"
  },
  {
    id: "4",
    name: "Accessories",
    image: "src/assets/lextreme.webp", // Replace with your equipment photo
    description: "Optolong L-eXtreme (filter)\nCelestron OAG & ZWO ASI 120mm Mini (guiding)"
  },
  {
    id: "5",
    name: "ZWO Asiair Plus",
    image: "src/assets/asiair.jpg",
    description: "Mini PC that controls everything"
  },
  {
    id: "6",
    name: "Camera",
    image: "src/assets/z7ii.webp",
    description: "Nikon Z7II"
  },
  {
    id: "7",
    name: "Star Tracker",
    image: "src/assets/sw2i.webp",
    description: "SkyWatcher Adventurer 2i Pro"
  }
];

// MODIFY THIS: Your processing software
export const software: EquipmentItem[] = [
  {
    id: "1",
    name: "DeepSkyStacker",
    image: "src/assets/dss.webp",
    description: "Image stacking"
  },
  {
    id: "2",
    name: "PixInsight",
    image: "src/assets/pix.png",
    description: "Advanced image processing"
  },
  {
    id: "3",
    name: "Adobe Photoshop",
    image: "src/assets/ps.png",
    description: "Final touches and adjustments"
  },
  {
    id: "4",
    name: "Siril",
    image: "src/assets/siril.png",
    description: "Free Alternative to PixInsight"
  }
];

// MODIFY THIS: Your astrophotography images
export const images: ImageData[] = [
  {
    id: "1",
    src: "src/assets/M42.jpg", // Replace with your image
    title: "Orion Nebula",
    tags: {
      focalLength: "2000mm",
      targetType: "Nebula",
      equipment: "SCT + Cooled Astrocam",
      location: "Backyard"
    },
    exif: {
      "Exposure": "3 Hours (90x120s)",
      "Date": "11-04-2024",
      "Filters": "None",
      "Sky Darkness": "19 mag/arcsec²",
      "Seeing": "Good (4/5)",
      "Transparency": "Good (4/5)"
    }
  },
  {
    id: "2",
    src: "/placeholder.svg", // Replace with your image
    title: "Andromeda Galaxy",
    tags: {
      focalLength: "2000mm",
      targetType: "Galaxy",
      equipment: "SCT + Cooled Astrocam",
      location: "Kfardebian, Lebanon"
    },
    exif: {
      "Exposure": "3 hours (180x60s)",
      "Date": "2024-03-15",
      "Filters": "Optolong L-eXtreme",
      "Sky Darkness": "21.5 mag/arcsec²",
      "Seeing": "Good (5/5)",
      "Transparency": "Good (5/5)"
    }
  },
  {
    id: "3",
    src: "src/assets/NZ7_3796 web.jpg",
    title: "Arz Milky Way",
    tags: {
      focalLength: "16mm",
      targetType: "Galaxy",
      equipment: "Mirrorless Camera + Wide Angle Lens",
      location: "Arz, Lebanon"
    },
    exif: {
      "Exposure": "120s",
      "Date": "8-24-2025",
      "Filters": "None",
      "Sky Darkness": "21.5 mag/arcsec²",
      "Seeing": "Good (5/5)",
      "Transparency": "Good (5/5)"
    }
  },
  {
    id: "4",
    src: "src/assets/ngc_6946.jpg",
    title: "Fireworks Galaxy (NGC 6946)",
    tags: {
      focalLength: "2000mm",
      targetType: "Galaxy",
      equipment: "SCT + Cooled Astrocam",
      location: "Arz, Lebanon"
    },
    exif: {
      "Exposure": "1h20 (40x120s)",
      "Date": "8-24-2025",
      "Filters": "None",
      "Sky Darkness": "21.5 mag/arcsec²",
      "Seeing": "Good (5/5)",
      "Transparency": "Good (5/5)"
    }
  }
  // Add more images here
];

// Available filter categories
export const filterCategories = {
  focalLength: Array.from(new Set(images.map(img => img.tags.focalLength).filter(Boolean))),
  targetType: Array.from(new Set(images.map(img => img.tags.targetType).filter(Boolean))),
  equipment: Array.from(new Set(images.map(img => img.tags.equipment).filter(Boolean))),
  location: Array.from(new Set(images.map(img => img.tags.location).filter(Boolean))),
};
