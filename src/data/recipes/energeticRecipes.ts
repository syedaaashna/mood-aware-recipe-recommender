import { Recipe } from '@/types/recipe';

export const energeticRecipes: Recipe[] = [
  {
    id: 'power-smoothie-bowl',
    name: 'Energy Boost Smoothie Bowl',
    description: 'A nutrient-packed smoothie bowl that will keep you energized all morning',
    ingredients: [
      '1 banana, frozen',
      '1 cup mixed berries',
      '1 scoop protein powder',
      '1 tbsp chia seeds',
      'Almond milk',
      'Granola and fresh fruit for topping'
    ],
    instructions: [
      'Blend frozen banana and berries with protein powder',
      'Add almond milk gradually until desired consistency',
      'Pour into a bowl',
      'Top with granola, fresh fruit, and chia seeds',
      'Serve immediately'
    ],
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 1,
    calories: 320,
    tags: ['breakfast', 'healthy', 'energizing', 'quick'],
    difficulty: 'Easy',
    mood: 'energetic',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in protein and healthy fats, perfect for sustained energy',
    cookingTips: [
      'Freeze banana chunks for easier blending',
      'Add spinach for extra nutrients without changing taste',
      'Use coconut water for extra hydration'
    ]
  }
];
