
import { Recipe } from '@/types/recipe';

export const tiredRecipes: Recipe[] = [
  {
    id: 'tired-energy-bites',
    name: 'No-Bake Energy Bites',
    description: 'Quick and easy energy bites perfect for an afternoon pick-me-up.',
    ingredients: [
      'Rolled oats',
      'Peanut butter',
      'Honey',
      'Dark chocolate chips',
      'Chia seeds',
      'Flax seeds'
    ],
    instructions: [
      'Mix oats, peanut butter, and honey.',
      'Add seeds and chocolate chips.',
      'Roll into balls.',
      'Refrigerate until firm.',
      'Store in airtight container.',
      'Enjoy when needed.'
    ],
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 12,
    calories: 120,
    tags: ['snack', 'energy', 'no-bake'],
    difficulty: 'Easy',
    mood: 'tired',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    aiSuggestion: 'Add espresso powder for extra energy boost.',
    nutritionAnalysis: 'Good source of protein and healthy fats.',
    cookingTips: ['Use natural peanut butter', 'Adjust honey to taste']
  },
  {
    id: 'tired-green-smoothie',
    name: 'Energizing Green Smoothie',
    description: 'A nutrient-packed smoothie to boost energy levels.',
    ingredients: [
      'Spinach',
      'Banana',
      'Green apple',
      'Ginger',
      'Coconut water',
      'Lime juice'
    ],
    instructions: [
      'Blend spinach and coconut water.',
      'Add remaining ingredients.',
      'Blend until smooth.',
      'Adjust sweetness.',
      'Serve immediately.',
      'Enjoy while fresh.'
    ],
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 150,
    tags: ['beverage', 'healthy', 'energizing'],
    difficulty: 'Easy',
    mood: 'tired',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    aiSuggestion: 'Add matcha powder for sustained energy.',
    nutritionAnalysis: 'High in vitamins and minerals.',
    cookingTips: ['Use frozen banana for thickness', 'Add ice if desired']
  }
];
