
import { Recipe } from '@/types/recipe';

export const celebratoryRecipes: Recipe[] = [
  {
    id: 'celebratory-italian-lasagna',
    name: 'Italian Lasagna',
    description: 'Layered pasta with beef ragu, béchamel, and cheese — perfect for celebrations.',
    ingredients: [
      'Lasagna sheets',
      'Ground beef',
      'Tomato sauce',
      'Béchamel sauce',
      'Mozzarella',
      'Parmesan'
    ],
    instructions: [
      'Layer pasta, ragu, béchamel, and cheese.',
      'Bake until golden and bubbling.',
      'Rest before slicing.'
    ],
    prepTime: '30 mins',
    cookTime: '50 mins',
    servings: 6,
    calories: 480,
    tags: ['italian', 'celebration', 'main'],
    difficulty: 'Medium',
    mood: 'celebratory',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich and festive dish.',
    cookingTips: ['Let rest before serving.']
  },
  {
    id: 'celebratory-chinese-peking-duck',
    name: 'Peking Duck',
    description: 'Iconic crispy-skinned Chinese duck served with pancakes and hoisin.',
    ingredients: [
      'Duck',
      'Soy sauce',
      'Honey',
      'Cucumber',
      'Scallions',
      'Mandarin pancakes'
    ],
    instructions: [
      'Prep and roast duck for crisp skin.',
      'Slice meat, serve with pancakes and hoisin sauce.',
      'Add veggies and roll up to eat.'
    ],
    prepTime: '40 mins',
    cookTime: '90 mins',
    servings: 4,
    calories: 650,
    tags: ['chinese', 'duck', 'celebration'],
    difficulty: 'Hard',
    mood: 'celebratory',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Special occasion meal.',
    cookingTips: ['Dry duck for crisp skin.']
  },
  {
    id: 'celebratory-british-beef-wellington',
    name: 'British Beef Wellington',
    description: 'Showstopper of beef wrapped in mushroom duxelles and pastry.',
    ingredients: [
      'Beef tenderloin',
      'Mushrooms',
      'Puff pastry',
      'Prosciutto',
      'Egg yolk',
      'Dijon mustard'
    ],
    instructions: [
      'Sear beef, coat in mushroom, wrap in pastry.',
      'Bake until golden.',
      'Slice and serve for a special occasion.'
    ],
    prepTime: '45 mins',
    cookTime: '60 mins',
    servings: 4,
    calories: 700,
    tags: ['british', 'main', 'special'],
    difficulty: 'Hard',
    mood: 'celebratory',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich and impressive.',
    cookingTips: ['Rest before slicing.']
  }
];
