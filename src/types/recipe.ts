
export interface Mood {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  tags: string[];
  difficulty: string;
  mood: string;
  aiSuggestion?: string;
  nutritionAnalysis?: string;
  cookingTips?: string[];
  image?: string; // Added image as an optional property
}
