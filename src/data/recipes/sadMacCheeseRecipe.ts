
import { Recipe } from '@/types/recipe';

export const sadMacCheeseRecipe: Recipe = {
  id: 'classic-mac-cheese',
  name: 'Comforting Mac & Cheese',
  description: 'The ultimate comfort food with creamy cheese sauce and perfectly cooked pasta',
  ingredients: [
    '1 pound elbow macaroni',
    '4 cups sharp cheddar cheese',
    '2 cups whole milk',
    '4 tbsp butter',
    '¼ cup flour',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Cook macaroni according to package directions',
    'Melt butter in a large saucepan',
    'Whisk in flour and cook for 1 minute',
    'Gradually add milk, whisking constantly',
    'Add cheese and stir until melted',
    'Mix cheese sauce with cooked pasta',
    'Season with salt and pepper'
  ],
  prepTime: '10 mins',
  cookTime: '20 mins',
  servings: 6,
  calories: 450,
  tags: ['comfort food', 'pasta', 'cheese', 'classic'],
  difficulty: 'Medium',
  mood: 'sad',
  image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop',
  nutritionAnalysis: 'Rich in protein and calcium, provides comfort and satisfaction',
  cookingTips: [
    'Use room temperature cheese for better melting',
    'Reserve some pasta water for adjusting sauce consistency',
    'Add breadcrumbs on top for extra crunch'
  ]
};
