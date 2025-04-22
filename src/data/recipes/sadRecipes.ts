import { Recipe } from '@/types/recipe';

export const sadRecipes: Recipe[] = [
  {
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
      'Melt butter in a large saucepan over medium heat',
      'Whisk in flour and cook for 1 minute',
      'Gradually add milk, whisking constantly',
      'Add cheese and stir until melted',
      'Mix with cooked pasta and season'
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 6,
    calories: 450,
    tags: ['comfort food', 'pasta', 'cheese', 'classic'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1543339523-ad52a1872709?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in protein and calcium, provides comfort and satisfaction',
    cookingTips: [
      'Use room temperature cheese for better melting',
      'Reserve some pasta water for adjusting sauce consistency',
      'Add breadcrumbs on top for extra crunch'
    ]
  }
];
