
import { Recipe } from '@/types/recipe';

// Cozy mood - 3 recipes, all different cuisines
export const cozyRecipes: Recipe[] = [
  {
    id: 'cozy-indian-dal',
    name: 'Comforting Dal Tadka',
    description: 'Warm Indian lentil dal with cumin and tomato.',
    ingredients: [
      'Yellow lentils (toor dal)',
      'Tomato',
      'Cumin seeds',
      'Ghee',
      'Garlic',
      'Green chili'
    ],
    instructions: [
      'Cook lentils until soft.',
      'Prepare tempering with ghee, cumin, garlic, chili.',
      'Mix tempering into dal.',
      'Simmer with tomato and serve hot.'
    ],
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 3,
    calories: 220,
    tags: ['indian', 'vegetarian', 'cozy'],
    difficulty: 'Easy',
    mood: 'cozy',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e4c6?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in plant protein & comforting.',
    cookingTips: ['Use ghee for aroma.']
  },
  {
    id: 'cozy-american-chili',
    name: 'Beef Chili',
    description: 'Rich and hearty American beef chili with beans.',
    ingredients: [
      'Ground beef',
      'Kidney beans',
      'Tomato sauce',
      'Onion',
      'Chili powder',
      'Cumin'
    ],
    instructions: [
      'Brown beef, add onion and spices.',
      'Add tomato sauce and beans.',
      'Simmer for 1 hour.',
      'Serve hot.'
    ],
    prepTime: '15 mins',
    cookTime: '60 mins',
    servings: 4,
    calories: 350,
    tags: ['american', 'beef', 'cozy'],
    difficulty: 'Medium',
    mood: 'cozy',
    image: 'https://images.unsplash.com/photo-1619460573803-e492817e8ffe?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in protein, perfect for cold days.',
    cookingTips: ['Simmer long for better flavor.']
  },
  {
    id: 'cozy-french-onion-pie',
    name: 'French Onion Tart',
    description: 'Warm, cheesy French tart with caramelized onions.',
    ingredients: [
      'Pie crust',
      'Onions',
      'Gruyere cheese',
      'Eggs',
      'Cream',
      'Fresh thyme'
    ],
    instructions: [
      'Caramelize onions.',
      'Whisk eggs and cream.',
      'Spread onions in crust, cover with egg mix and cheese.',
      'Bake until set and golden.'
    ],
    prepTime: '18 mins',
    cookTime: '35 mins',
    servings: 4,
    calories: 320,
    tags: ['french', 'tart', 'cozy'],
    difficulty: 'Medium',
    mood: 'cozy',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e1c?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Cozy, rich, and comforting.',
    cookingTips: ['Let tart rest before slicing.']
  }
];
