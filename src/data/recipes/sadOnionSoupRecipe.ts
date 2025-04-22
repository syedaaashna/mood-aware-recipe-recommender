
import { Recipe } from '@/types/recipe';

export const sadOnionSoupRecipe: Recipe = {
  id: 'sad-soup',
  name: 'French Onion Soup',
  description: 'Classic French onion soup topped with melted cheese',
  ingredients: [
    'Onions',
    'Beef broth',
    'Gruyere cheese',
    'Baguette',
    'Butter',
    'White wine',
    'Thyme'
  ],
  instructions: [
    'Caramelize onions slowly',
    'Add wine and reduce',
    'Add broth and simmer',
    'Toast bread',
    'Add cheese and broil',
    'Serve hot'
  ],
  prepTime: '20 mins',
  cookTime: '1 hour',
  servings: 4,
  calories: 320,
  tags: ['french', 'soup', 'comfort', 'cheese'],
  difficulty: 'Medium',
  mood: 'sad',
  image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=800&auto=format&fit=crop',
  nutritionAnalysis: 'Rich in flavor and comfort',
  cookingTips: [
    'Take time with onions',
    'Use good quality cheese',
    'Serve immediately'
  ]
};
