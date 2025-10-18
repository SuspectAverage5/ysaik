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
  detailedInfo?: string;
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
    image: "src/assets/edgehd8.jpg",
    description: 'Celestron EdgeHD 8"',
    detailedInfo: "The primary optical instrument that gathers light from celestial objects. This Schmidt-Cassegrain telescope provides 2000mm focal length for detailed deep-sky imaging."
  },
  {
    id: "2",
    name: "Mount",
    image: "src/assets/eq6rpro.jpg",
    description: "SkyWatcher EQ6-R Pro",
    detailedInfo: "The equatorial mount that tracks celestial objects as Earth rotates. Essential for long-exposure astrophotography, it precisely follows stars across the sky."
  },
  {
    id: "3",
    name: "Astro Camera",
    image: "src/assets/2600mcp.png",
    description: "ZWO ASI2600MC Pro",
    detailedInfo: "A cooled, dedicated astronomy camera with high sensitivity for capturing faint deep-sky objects. The cooling reduces thermal noise for cleaner images during long exposures."
  },
  {
    id: "4",
    name: "Guiding System",
    image: "src/assets/guiding.jpg",
    description: "Celestron OAG & ZWO ASI 120mm Mini",
    detailedInfo: "An off-axis guider with a separate camera that monitors tracking accuracy in real-time, making tiny corrections to keep the target perfectly centered during long exposures."
  },
  {
    id: "5",
    name: "Light Pollution Filter",
    image: "src/assets/lextreme.webp",
    description: "Optolong L-eXtreme (Dual-Band filter)",
    detailedInfo: "A specialized filter that blocks light pollution while allowing specific wavelengths of nebula emission (H-alpha and OIII) to pass through, dramatically improving contrast from urban locations."
  },
  {
    id: "6",
    name: "ZWO Asiair Plus",
    image: "src/assets/asiair.jpg",
    description: "Wireless Mini PC that controls everything",
    detailedInfo: "The control hub that wirelessly manages the entire imaging setup - controlling the camera, mount, guiding, and focusing - all from a smartphone or tablet."
  },
  {
    id: "7",
    name: "Camera",
    image: "src/assets/z7ii.webp",
    description: "Nikon Z7II",
    detailedInfo: "A full-frame mirrorless camera used for wide-field astrophotography, capturing stunning Milky Way landscapes and star trails with exceptional image quality."
  },
  {
    id: "8",
    name: "Star Tracker",
    image: "src/assets/sw2i.webp",
    description: "SkyWatcher Adventurer 2i Pro",
    detailedInfo: "A portable tracking mount for the camera that compensates for Earth's rotation, allowing longer exposures of the night sky without star trails when shooting wide-field images."
  }
];

// MODIFY THIS: Your processing software
export const software: EquipmentItem[] = [
  {
    id: "1",
    name: "DeepSkyStacker",
    image: "src/assets/dss.webp",
    description: "Image stacking",
    detailedInfo: "Stacks multiple exposures into a single image, averaging out noise and revealing faint details that would be invisible in a single frame."
  },
  {
    id: "2",
    name: "PixInsight",
    image: "src/assets/pix.png",
    description: "Advanced image processing",
    detailedInfo: "Professional-grade software for calibrating, stretching, and processing astrophotography data with powerful tools for noise reduction, star alignment, and color correction."
  },
  {
    id: "3",
    name: "Adobe Photoshop",
    image: "src/assets/ps.png",
    description: "Final touches and adjustments",
    detailedInfo: "Used for final artistic adjustments, adding contrast, enhancing colors, and creating the polished final image for presentation."
  },
  {
    id: "4",
    name: "Siril",
    image: "src/assets/siril.png",
    description: "Free Alternative to PixInsight",
    detailedInfo: "Open-source image processing software offering many of the same capabilities as PixInsight, making advanced processing techniques accessible to all astrophotographers."
  }
];

// MODIFY THIS: Astronomy and stargazing apps
export const astronomyApps: EquipmentItem[] = [
  {
    id: "1",
    name: "Stellarium",
    image: "src/assets/stellarium.webp",
    description: "Open-source planetarium software for real-time sky simulation",
    detailedInfo: "A powerful desktop planetarium that shows exactly what you'll see in the night sky at any time and location, helping plan observations and identify celestial objects."
  },
  {
    id: "2",
    name: "SkySafari",
    image: "src/assets/skysafari.png",
    description: "Mobile planetarium with telescope control features",
    detailedInfo: "A comprehensive mobile app that not only simulates the night sky but can also wirelessly control telescopes, making it easy to locate and track objects."
  },
  {
    id: "3",
    name: "PhotoPills",
    image: "src/assets/photopills.png",
    description: "Sun, moon, and Milky Way planner for photographers",
    detailedInfo: "Essential tool for planning astrophotography sessions, predicting when and where the Milky Way will appear, and calculating optimal shooting times for celestial events."
  },
  {
    id: "4",
    name: "Star Walk 2",
    image: "src/assets/starwalk.png",
    description: "AR stargazing app with beautiful visual interface",
    detailedInfo: "An augmented reality app that overlays constellation names and information directly on your phone's camera view, making stargazing interactive and educational."
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
    src: "src/assets/m51.jpg", // Replace with your image
    title: "Whirlpool Galaxy (M51)",
    tags: {
      focalLength: "2000mm",
      targetType: "Galaxy",
      equipment: "SCT + Cooled Astrocam",
      location: "Backyard"
    },
    exif: {
      "Exposure": "4h20 (130x120s)",
      "Date": "2024-03-15",
      "Filters": "None",
      "Sky Darkness": "19 mag/arcsec²",
      "Seeing": "Great (5/5)",
      "Transparency": "Great (4/5)"
    }
  },
  {
    id: "3",
    src: "src/assets/NZ7_3796.jpg",
    title: "Arz Milky Way",
    tags: {
      focalLength: "16mm",
      targetType: "Galaxy",
      equipment: "Mirrorless Camera + Lens",
      location: "Arz, Lebanon"
    },
    exif: {
      "Exposure": "120s",
      "Date": "8-24-2025",
      "Filters": "None",
      "Sky Darkness": "21.5 mag/arcsec²",
      "Seeing": "Great (5/5)",
      "Transparency": "Great (5/5)"
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
      "Seeing": "Great (5/5)",
      "Transparency": "Great (5/5)"
    }
  },
  {
    id: "5",
    src: "src/assets/ngc_6543.jpg",
    title: "Cat's Eye Nebula (NGC 6543)",
    tags: {
      focalLength: "2000mm",
      targetType: "Nebula",
      equipment: "SCT + Cooled Astrocam",
      location: "Backyard"
    },
    exif: {
      "Exposure": "1h (30x120s)",
      "Date": "9-28-2025",
      "Filters": "Optolong L-eXtreme",
      "Sky Darkness": "19 mag/arcsec²",
      "Seeing": "Fair (3/5)",
      "Transparency": "Fair (3/5)"
    }
  },
  {
    id: "6",
    src: "src/assets/bekaastartrail.jpg",
    title: "Bekaa Star Trail",
    tags: {
      focalLength: "80mm",
      targetType: "Star Trail",
      equipment: "Mirrorless Camera + Lens",
      location: "Arz, Lebanon"
    },
    exif: {
      "Exposure": "10m (5x120s)",
      "Date": "8-24-2025",
      "Filters": "None",
      "Sky Darkness": "21.5 mag/arcsec²",
      "Seeing": "Great (5/5)",
      "Transparency": "Great (5/5)"
    }
  },
  {
    id: "7",
    src: "src/assets/lunareclipseFinal.jpg",
    title: "Lunar Eclipse 2025",
    tags: {
      focalLength: "600mm",
      targetType: "Moon",
      equipment: "Mirrorless Camera + Lens",
      location: "Sannine, Lebanon"
    },
    exif: {
      "Exposure": "0.25s",
      "Date": "9-7-2025",
      "Filters": "None",
      "Sky Darkness": "21 mag/arcsec²",
      "Seeing": "Good (4/5)",
      "Transparency": "Fair (3/5)"
    }
  },
  {
    id: "8",
    src: "src/assets/NZ7_4879.jpg",
    title: "Lunar Eclipse 2025",
    tags: {
      focalLength: "600mm",
      targetType: "Moon",
      equipment: "Mirrorless Camera + Lens",
      location: "Sannine, Lebanon"
    },
    exif: {
      "Exposure": "0.25s",
      "Date": "9-7-2025",
      "Filters": "None",
      "Sky Darkness": "21 mag/arcsec²",
      "Seeing": "Good (4/5)",
      "Transparency": "Fair (3/5)"
    }
  },
  {
    id: "9",
    src: "src/assets/NZ7_4900.jpg",
    title: "Lunar Eclipse 2025",
    tags: {
      focalLength: "600mm",
      targetType: "Moon",
      equipment: "Mirrorless Camera + Lens",
      location: "Sannine, Lebanon"
    },
    exif: {
      "Exposure": "0.25s",
      "Date": "9-7-2025",
      "Filters": "None",
      "Sky Darkness": "21 mag/arcsec²",
      "Seeing": "Good (4/5)",
      "Transparency": "Fair (3/5)"
    }
  },
  {
    id: "10",
    src: "src/assets/NZ7_3802.jpg",
    title: "Arz Milky Way",
    tags: {
      focalLength: "16mm",
      targetType: "Galaxy",
      equipment: "Mirrorless Camera + Lens",
      location: "Arz, Lebanon"
    },
    exif: {
      "Exposure": "120s",
      "Date": "8-24-2025",
      "Filters": "None",
      "Sky Darkness": "21.5 mag/arcsec²",
      "Seeing": "Great (5/5)",
      "Transparency": "Great (5/5)"
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
