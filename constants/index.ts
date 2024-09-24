import { Killer } from "@/app/callback/page";

export const genreTraits = {
  rock: ["rebellious", "energetic", "bold"],
  pop: ["friendly", "approachable", "fun"],
  hipHop: ["assertive", "confident", "streetwise"],
  jazz: ["sophisticated", "introspective", "creative"],
  metal: ["intense", "aggressive", "dark"],
  country: ["nostalgic", "down-to-earth", "storytelling"],
  electronic: ["innovative", "experimental", "energetic"],
  "alternative metal": ["heavy", "experimental", "melodic"],
  "modern rock": ["contemporary", "dynamic", "melodic"],
  "pop punk": ["energetic", "rebellious", "catchy"],
  punk: ["aggressive", "raw", "rebellious"],
  "socal pop punk": ["youthful", "catchy", "upbeat"],
  pluggnb: ["catchy", "melodic", "modern"],
  "rage rap": ["aggressive", "intense", "expressive"],
  "cloud rap": ["atmospheric", "dreamy", "laid-back"],
  glitchcore: ["experimental", "electronic", "unconventional"],
  "croatian rock": ["local", "traditional", "melodic"],
  "alternative emo": ["emotional", "introspective", "personal"],
  emo: ["emotional", "confessional", "raw"],
  "philly indie": ["independent", "artistic", "unique"],
  "pov: indie": ["independent", "experimental", "authentic"],
  // Add more genres and traits as needed
};


export const serialKillers: Killer[] = [
  {
    name: "John Wayne Gacy",
    traits: ["charming", "manipulative", "extroverted", "energetic"], // adding energetic
    image: '/dahmer.png'
  },
  {
    name: "Ted Bundy",
    traits: ["intelligent", "attractive", "narcissistic", "confident"], // adding confident
    image: '/dahmer.png'
  },
  {
    name: "Jeffrey Dahmer",
    traits: ["reclusive", "artistic", "introverted", "introspective"], // adding introspective
    image: '/dahmer.png'
  },
  // Add more serial killers with their associated traits
];
