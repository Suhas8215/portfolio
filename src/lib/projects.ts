export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  links?: {
    github?: string;
    demo?: string;
    devpost?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "mirror",
    title: "Mirror",
    subtitle: "AI COSMETIC ASSISTANT",
    description:
      "Mobile assistant that analyzes facial features and generates personalized skin and hair product recommendations.",
    tags: ["Expo", "Gemini API", "Flask", "Express", "MongoDB"],
    imageSrc: "/projects/mirror.png",
    links: {
      github: "https://github.com/Suhas8215/Mirror",
      devpost: "https://devpost.com/software/mirror-yo9mcb",
    },
  },
  {
    slug: "meal-connect",
    title: "Meal Connect",
    subtitle: "FOOD REDISTRIBUTION PLATFORM",
    description:
      "Connects restaurants and shelters with geospatial matching and LLM summaries to speed up food redistribution.",
    tags: ["Node.js", "TypeScript", "MongoDB", "Express", "Google Maps API"],
    imageSrc: "/projects/meal-connect.png",
    links: {
      github: "https://github.com/Suhas8215/MealConnect",
    },
  },
  {
    slug: "braingeneers",
    title: "Braingeneers",
    subtitle: "RESEARCH ENGINEERING PROJECT",
    description:
      "Private research repo focused on scalable ML workflows and tooling for high-volume biomedical analysis.",
    tags: ["Python", "ML Pipelines", "Data Engineering"],
    imageSrc: "/globe.svg",
  },
  {
    slug: "life-data-unifier",
    title: "Life Data Unifier",
    subtitle: "PERSONAL PRODUCTIVITY SYSTEM",
    description:
      "A local-first system that reconstructs a single truthful timeline of commitments across apps like Gmail and Calendar.",
    tags: ["Python", "FastAPI", "Local-first", "Data Pipeline"],
    imageSrc: "/projects/data.png",
    links: {
      github: "https://github.com/Suhas8215/Life-Data-Unifier",
    },
  },
];
