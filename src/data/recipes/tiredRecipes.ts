import { Recipe } from '@/types/recipe';

export const tiredRecipes: Recipe[] = [
  {
    id: 'chamomile-honey-latte',
    name: 'Soothing Chamomile Honey Latte',
    description: 'A calming, caffeine-free latte perfect for winding down',
    ingredients: [
      '2 chamomile tea bags',
      '1 cup hot water',
      '1 cup warm milk (dairy or plant-based)',
      '1 tbsp honey',
      '¼ tsp vanilla extract',
      'Pinch of cinnamon'
    ],
    instructions: [
      'Steep chamomile tea bags in hot water for 5 minutes',
      'Remove tea bags and stir in honey',
      'Warm and froth milk',
      'Combine tea mixture with frothed milk',
      'Add vanilla extract and sprinkle with cinnamon'
    ],
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 120,
    tags: ['beverage', 'relaxing', 'caffeine-free', 'warm'],
    difficulty: 'Easy',
    mood: 'tired',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Contains natural compounds that promote relaxation and better sleep',
    cookingTips: [
      'Use lavender honey for extra calming properties',
      'Make tea stronger for more pronounced flavor',
      'Try oat milk for a creamier texture'
    ]
  }
];
