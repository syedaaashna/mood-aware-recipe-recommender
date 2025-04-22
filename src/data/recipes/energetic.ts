
import { Recipe } from '@/types/recipe';

export const energeticRecipes: Recipe[] = [
  {
    id: 'energetic-smoothie-bowl',
    name: 'Power Smoothie Bowl',
    description: 'A vibrant and energizing smoothie bowl packed with superfoods and fresh fruits.',
    ingredients: [
      '1 frozen banana',
      '1 cup mixed berries',
      '1 scoop protein powder',
      '1 tbsp chia seeds',
      '1 cup almond milk',
      'Toppings: granola, fresh fruit, coconut flakes'
    ],
    instructions: [
      'Blend frozen banana, berries, protein powder, and almond milk until smooth.',
      'Pour into a bowl.',
      'Top with granola, fresh fruits, and coconut flakes.',
      'Add chia seeds and serve immediately.'
    ],
    prepTime: '5 mins',
    cookTime: '2 mins',
    servings: 1,
    calories: 320,
    tags: ['breakfast', 'healthy', 'energetic', 'quick'],
    difficulty: 'Easy',
    mood: 'energetic',
    image: 'https://images.unsplash.com/photo-1626198226928-95f99b5c0595?w=800&auto=format&fit=crop',
    aiSuggestion: 'Try adding matcha powder for an extra energy boost.',
    nutritionAnalysis: 'High in protein, antioxidants, and healthy fats.',
    cookingTips: [
      'Freeze fruit ahead of time for the perfect consistency',
      'Use any milk alternative you prefer'
    ]
  },
  {
    id: 'energetic-quinoa-bowl',
    name: 'Protein-Packed Quinoa Bowl',
    description: 'A nutrient-rich quinoa bowl with roasted vegetables and grilled chicken.',
    ingredients: [
      '1 cup quinoa',
      '2 chicken breasts',
      'Mixed vegetables for roasting',
      'Olive oil',
      'Lemon juice',
      'Fresh herbs'
    ],
    instructions: [
      'Cook quinoa according to package instructions.',
      'Season and grill chicken until cooked through.',
      'Roast vegetables with olive oil and seasonings.',
      'Combine all ingredients in a bowl.',
      'Drizzle with lemon juice and herbs.',
      'Serve warm.'
    ],
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 2,
    calories: 450,
    tags: ['lunch', 'dinner', 'healthy', 'protein', 'energetic'],
    difficulty: 'Medium',
    mood: 'energetic',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    aiSuggestion: 'Meal prep this recipe for quick lunches throughout the week.',
    nutritionAnalysis: 'Excellent source of protein, complex carbs, and fiber.',
    cookingTips: [
      'Cook quinoa in broth for extra flavor',
      'Prep vegetables while quinoa cooks'
    ]
  },
  {
    id: 'energetic-oatmeal',
    name: 'Power-Packed Oatmeal',
    description: 'A hearty bowl of oatmeal loaded with nuts, seeds, and fruits for sustained energy.',
    ingredients: [
      '1 cup steel-cut oats',
      '2 cups water',
      '1 banana, sliced',
      '1/4 cup mixed nuts and seeds',
      '1 tbsp honey',
      'Cinnamon to taste'
    ],
    instructions: [
      'Bring water to a boil in a pot.',
      'Add oats and reduce heat to simmer.',
      'Cook for 15-20 minutes, stirring occasionally.',
      'Top with sliced banana, nuts, and seeds.',
      'Drizzle with honey and sprinkle cinnamon.',
      'Serve hot.'
    ],
    prepTime: '5 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 380,
    tags: ['breakfast', 'healthy', 'energetic', 'vegetarian'],
    difficulty: 'Easy',
    mood: 'energetic',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=800&auto=format&fit=crop',
    aiSuggestion: 'Prepare overnight for quicker morning preparation.',
    nutritionAnalysis: 'Rich in fiber, protein, and healthy fats.',
    cookingTips: [
      'Toast nuts and seeds for enhanced flavor',
      'Use milk instead of water for creamier texture'
    ]
  },
  {
    id: 'energetic-avocado-toast',
    name: 'Energizing Avocado Toast',
    description: 'Whole grain toast topped with avocado, eggs, and microgreens.',
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '2 eggs',
      'Microgreens',
      'Red pepper flakes',
      'Salt and pepper'
    ],
    instructions: [
      'Toast bread until golden brown.',
      'Mash avocado and spread on toast.',
      'Cook eggs sunny side up.',
      'Place eggs on avocado toast.',
      'Top with microgreens and seasonings.',
      'Serve immediately.'
    ],
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 2,
    calories: 350,
    tags: ['breakfast', 'brunch', 'healthy', 'energetic'],
    difficulty: 'Easy',
    mood: 'energetic',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add a drizzle of hot sauce for an extra kick.',
    nutritionAnalysis: 'Good balance of healthy fats, protein, and complex carbs.',
    cookingTips: [
      'Use perfectly ripe avocados',
      'Toast bread just before serving'
    ]
  },
  {
    id: 'energetic-protein-pancakes',
    name: 'Protein-Rich Banana Pancakes',
    description: 'Fluffy pancakes made with protein powder and bananas.',
    ingredients: [
      '1 cup oat flour',
      '1 scoop vanilla protein powder',
      '2 ripe bananas',
      '2 eggs',
      'Milk as needed',
      'Maple syrup for serving'
    ],
    instructions: [
      'Mash bananas in a bowl.',
      'Mix in eggs, protein powder, and flour.',
      'Add milk until desired consistency.',
      'Heat griddle to medium.',
      'Cook pancakes until bubbles form.',
      'Flip and cook other side.',
      'Serve with maple syrup.'
    ],
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 4,
    calories: 280,
    tags: ['breakfast', 'protein', 'healthy', 'energetic'],
    difficulty: 'Medium',
    mood: 'energetic',
    image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=800&auto=format&fit=crop',
    aiSuggestion: 'Top with fresh berries for added antioxidants.',
    nutritionAnalysis: 'High in protein and complex carbohydrates.',
    cookingTips: [
      'Don\'t overmix the batter',
      'Use ripe bananas for natural sweetness'
    ]
  }
];
