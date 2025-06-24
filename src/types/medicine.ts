
export interface Medicine {
  id: string;
  name: string;
  genericName: string;
  description: string;
  category: string;
  dosage: string;
  strength: string;
  uses: string[];
  sideEffects: string[];
  warnings?: string[];
}
