
import { Recipe } from '@/types/recipe';

export const sadRecipes: Recipe[] = [
  {
    id: 'sad-chocolate-cake',
    name: 'Mood-Lifting Chocolate Cake',
    description: 'A rich, comforting chocolate cake that\'s sure to lift your spirits.',
    ingredients: [
      'Dark chocolate',
      'Butter',
      'Sugar',
      'Eggs',
      'Flour',
      'Vanilla extract'
    ],
    instructions: [
      'Melt chocolate and butter.',
      'Mix in sugar and eggs.',
      'Fold in flour.',
      'Bake until just set.',
      'Let cool slightly.',
      'Serve warm.'
    ],
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 8,
    calories: 300,
    tags: ['dessert', 'chocolate', 'comfort'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    aiSuggestion: 'Add raspberries for a fruity contrast.',
    nutritionAnalysis: 'Contains mood-boosting compounds from dark chocolate.',
    cookingTips: ['Don\'t overbake', 'Use quality chocolate']
  },
  {
    id: 'sad-comfort-pasta',
    name: 'Creamy Comfort Pasta',
    description: 'A hug in a bowl - creamy, satisfying pasta.',
    ingredients: [
      'Pasta',
      'Heavy cream',
      'Parmesan cheese',
      'Butter',
      'Garlic',
      'Fresh herbs'
    ],
    instructions: [
      'Cook pasta al dente.',
      'Sauté garlic in butter.',
      'Add cream and simmer.',
      'Stir in cheese.',
      'Toss with pasta.',
      'Garnish with herbs.'
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 450,
    tags: ['pasta', 'comfort', 'dinner'],
    difficulty: 'Easy',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    aiSuggestion: 'Add peas for color and nutrition.',
    nutritionAnalysis: 'Rich in carbohydrates and protein.',
    cookingTips: ['Reserve pasta water', 'Grate cheese fresh']
  }
];
