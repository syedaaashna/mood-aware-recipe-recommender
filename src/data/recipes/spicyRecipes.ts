
import { Recipe } from '@/types/recipe';

export const spicyRecipes: Recipe[] = [
  {
    id: 'spicy-kung-pao-chicken',
    name: 'Kung Pao Chicken',
    description: 'A spicy Sichuan stir-fry with chicken, peanuts, and chili peppers.',
    ingredients: [
      'Chicken breast',
      'Roasted peanuts',
      'Dried red chilis',
      'Sichuan peppercorns',
      'Garlic',
      'Soy sauce',
      'Rice vinegar'
    ],
    instructions: [
      'Cut chicken into cubes.',
      'Stir-fry chicken with chilis and peppercorns.',
      'Add peanuts and sauce, cook until thick.',
      'Serve with rice.'
    ],
    prepTime: '10 mins',
    cookTime: '12 mins',
    servings: 2,
    calories: 280,
    tags: ['chinese', 'stir-fry', 'spicy'],
    difficulty: 'Medium',
    mood: 'spicy',
    nutritionAnalysis: 'Hot and satisfying.',
    cookingTips: ['Use fresh Sichuan peppercorns.']
  },
  {
    id: 'spicy-shakshuka',
    name: 'Spicy Shakshuka',
    description: 'Eggs poached in a spicy tomato and pepper sauce.',
    ingredients: [
      'Eggs',
      'Tomatoes',
      'Red bell pepper',
      'Onion',
      'Harissa paste',
      'Garlic',
      'Olive oil'
    ],
    instructions: [
      'Sauté onion, peppers, and garlic.',
      'Add tomatoes and harissa, simmer until saucy.',
      'Create wells and add eggs.',
      'Poach until whites are set.',
      'Serve with crusty bread.'
    ],
    prepTime: '5 mins',
    cookTime: '18 mins',
    servings: 2,
    calories: 210,
    tags: ['middle eastern', 'eggs', 'spicy'],
    difficulty: 'Easy',
    mood: 'spicy',
    nutritionAnalysis: 'High protein breakfast.',
    cookingTips: ['Control spice with amount of harissa.']
  }
];
