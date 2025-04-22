import { Recipe } from '@/types/recipe';

export const happyRecipes: Recipe[] = [
  {
    id: 'bright-citrus-salad',
    name: 'Bright Citrus & Berry Salad',
    description: 'A vibrant, energizing salad full of citrus fruits and fresh berries',
    ingredients: [
      '2 oranges, segmented',
      '1 grapefruit, segmented',
      '1 cup mixed berries',
      '2 tbsp honey',
      'Fresh mint leaves',
      '¼ cup pomegranate seeds'
    ],
    instructions: [
      'Segment the oranges and grapefruit, catching any juice',
      'Arrange citrus segments on a serving plate',
      'Add mixed berries and pomegranate seeds',
      'Drizzle with honey',
      'Garnish with fresh mint leaves'
    ],
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 180,
    tags: ['fresh', 'fruity', 'healthy', 'quick'],
    difficulty: 'Easy',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1490323914169-4d5db28abf90?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in vitamin C and antioxidants, perfect for boosting mood and energy',
    cookingTips: [
      'Use room temperature fruit for better flavor',
      'Add a sprinkle of chili flakes for an unexpected kick',
      'Can be made ahead and chilled'
    ]
  }
];
