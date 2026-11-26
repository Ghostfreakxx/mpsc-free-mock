type Point = [number, number, number];
type Molecule = { name: string; formula: string; shape: string; center: string; angle: number; points: Point[] };
const radians = (degrees: number) => degrees * Math.PI / 180;
const halfWater = radians(104.5 / 2);
const ammoniaHeight = Math.sqrt((1 + 2 * Math.cos(radians(107))) / 3);
const ammoniaRadius = Math.sqrt(1 - ammoniaHeight ** 2);

export const molecules = {
  water: { name: "Water", formula: "H₂O", shape: "Bent", center: "Oxygen", angle: 104.5,
    points: [[-Math.sin(halfWater), -Math.cos(halfWater), 0], [Math.sin(halfWater), -Math.cos(halfWater), 0]] },
  ammonia: { name: "Ammonia", formula: "NH₃", shape: "Trigonal pyramidal", center: "Nitrogen", angle: 107,
    points: Array.from({ length: 3 }, (_, index): Point => {
      const angle = 2 * Math.PI * index / 3;
      return [ammoniaRadius * Math.cos(angle), -ammoniaHeight, ammoniaRadius * Math.sin(angle)];
    }) },
  methane: { name: "Methane", formula: "CH₄", shape: "Tetrahedral", center: "Carbon", angle: 109.5,
    points: [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]]
      .map(([x, y, z]): Point => [x / Math.sqrt(3), y / Math.sqrt(3), z / Math.sqrt(3)]) },
} satisfies Record<string, Molecule>;

export type MoleculeKey = keyof typeof molecules;
