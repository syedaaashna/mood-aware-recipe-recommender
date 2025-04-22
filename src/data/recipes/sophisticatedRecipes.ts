
import { Recipe } from '@/types/recipe';

export const sophisticatedRecipes: Recipe[] = [
  {
    id: 'sophisticated-french-coq-au-vin',
    name: 'French Coq au Vin',
    description: 'Slow-cooked chicken with red wine, mushrooms, and pearl onions.',
    ingredients: [
      'Chicken',
      'Red wine',
      'Mushrooms',
      'Pearl onions',
      'Carrots',
      'Bacon',
      'Thyme'
    ],
    instructions: [
      'Brown chicken and bacon.',
      'Simmer in red wine with veg and herbs.',
      'Cook until chicken is tender.'
    ],
    prepTime: '20 mins',
    cookTime: '90 mins',
    servings: 3,
    calories: 400,
    tags: ['french', 'stew', 'sophisticated'],
    difficulty: 'Hard',
    mood: 'sophisticated',
    image: 'https://images.unsplash.com/photo-1590788354590-dad24d8ca315?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich and complex.',
    cookingTips: ['Marinate overnight for more flavor.']
  }
];
