export interface Sector {
  id: string;
  name: string;
  description: string;
  icon: string;
  diagnostico: string;
  residuos: string;
  paineis: string;
  potentialReduction: string; // e.g. "45%"
  currentWasteVolume: number; // e.g. 120 (tons)
  reusedQuantity: number; // e.g. 35 (tons)
  aiRecommendations: string[];
}

export interface Pillar {
  id: number;
  title: string;
  short: string;
  description: string;
  iconName: string;
  coords: { x: string; y: string }; // Hotspot positions on the picture (in percentage)
}

export interface ContentCard {
  id: number;
  type: "REPORT" | "FORESIGHT" | "TRENDS";
  yearOrType: string;
  title: string;
  excerpt: string;
  image: string;
}
