import { Killer } from "@/app/callback/page";

export const genreTraits = {
  a_cappella: ["nostalgic", "playful", "cheerful"],
  abstract: ["harmonious", "serene", "uplifting"],
  abstract_beats: ["nostalgic", "playful", "cheerful"],
  abstract_hip_hop: ["poetic", "inventive", "complex"],
  abstract_idm: ["poetic", "inventive", "complex"],
  accordion: ["chaotic", "unpredictable", "cerebral"],
  acid_house: ["nostalgic", "playful", "cheerful"],
  acid_jazz: ["melancholic", "somber", "soulful"],
  acid_techno: ["aggressive", "chaotic", "wild"],
  acousmatic: ["experimental", "cerebral", "avant-garde"],
  acoustic_blues: ["somber", "melancholic", "reflective"],
  acoustic_pop: ["cheerful", "uplifting", "lighthearted"],
}


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
