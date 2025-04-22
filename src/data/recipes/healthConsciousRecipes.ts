
import { Recipe } from '@/types/recipe';

export const healthConsciousRecipes: Recipe[] = [
  {
    id: 'health-conscious-mediterranean-grain-bowl',
    name: 'Mediterranean Grain Bowl',
    description: 'Whole grains with veggies, chickpeas, feta, and lemon-herb dressing.',
    ingredients: [
      'Quinoa',
      'Chickpeas',
      'Feta',
      'Cucumber',
      'Tomato',
      'Spinach',
      'Lemon juice',
      'Olive oil'
    ],
    instructions: [
      'Cook quinoa and drain chickpeas.',
      'Add veg, cheese, and drizzle lemon-olive oil dressing.',
      'Toss and serve.'
    ],
    prepTime: '10 mins',
    cookTime: '12 mins',
    servings: 2,
    calories: 320,
    tags: ['mediterranean', 'bowl', 'healthy'],
    difficulty: 'Easy',
    mood: 'health conscious',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Plant protein and fiber.',
    cookingTips: ['Add hummus for variety.']
  },
  {
    id: 'health-conscious-japanese-miso-soup',
    name: 'Japanese Miso Soup',
    description: 'Traditional broth with tofu, wakame seaweed, and green onions.',
    ingredients: [
      'Miso paste',
      'Tofu',
      'Wakame seaweed',
      'Green onions',
      'Dashi broth'
    ],
    instructions: [
      'Simmer dashi, add miso paste.',
      'Add tofu and seaweed, heat gently.',
      'Serve hot with onions.'
    ],
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 2,
    calories: 90,
    tags: ['japanese', 'soup', 'healthy'],
    difficulty: 'Easy',
    mood: 'health conscious',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Low calorie, light.',
    cookingTips: ['Do not boil after adding miso.']
  },
  {
    id: 'health-conscious-california-avocado-toast',
    name: 'California Avocado Toast',
    description: 'Multigrain toast with creamy avocado, radish, and microgreens.',
    ingredients: [
      'Multigrain bread',
      'Avocado',
      'Lime',
      'Radish',
      'Microgreens',
      'Salt and pepper'
    ],
    instructions: [
      'Toast bread, mash avocado with lime.',
      'Spread on toast, top with radish and greens.',
      'Season and serve.'
    ],
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 170,
    tags: ['california', 'toast', 'healthy'],
    difficulty: 'Easy',
    mood: 'health conscious',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Healthy fats and fiber.',
    cookingTips: ['Use ripe avocado.']
  }
];
