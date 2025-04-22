
import { Recipe } from '@/types/recipe';

export const sweetRecipes: Recipe[] = [
  {
    id: 'sweet-berry-parfait',
    name: 'Berry Yogurt Parfait',
    description: 'Layers of yogurt, sweet berries, and crunchy granola.',
    ingredients: [
      'Greek yogurt',
      'Honey',
      'Mixed berries',
      'Granola'
    ],
    instructions: [
      'Layer yogurt, berries, and granola in a glass.',
      'Drizzle with honey.',
      'Repeat and serve chilled.'
    ],
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 1,
    calories: 180,
    tags: ['dessert', 'breakfast', 'sweet'],
    difficulty: 'Easy',
    mood: 'sweet',
    nutritionAnalysis: 'Rich in antioxidants.',
    cookingTips: ['Use seasonal berries.'],
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&auto=format&fit=crop'
  },
  {
    id: 'sweet-cinnamon-rolls',
    name: 'Cinnamon Rolls',
    description: 'Warm, gooey cinnamon rolls topped with icing.',
    ingredients: [
      'Flour',
      'Milk',
      'Butter',
      'Yeast',
      'Sugar',
      'Cinnamon',
      'Powdered sugar'
    ],
    instructions: [
      'Prepare sweet yeast dough.',
      'Roll dough with cinnamon-sugar filling.',
      'Slice and bake until golden.',
      'Ice with powdered sugar glaze.'
    ],
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 3,
    calories: 360,
    tags: ['dessert', 'sweet', 'baking'],
    difficulty: 'Medium',
    mood: 'sweet',
    nutritionAnalysis: 'A classic sweet treat.',
    cookingTips: ['Let dough rise fully.'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'
  }
];
