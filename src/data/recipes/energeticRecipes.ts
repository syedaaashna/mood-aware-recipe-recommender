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
  },
  {
    id: 'energetic-quinoa',
    name: 'Power Quinoa Buddha Bowl',
    description: 'Nutrient-packed quinoa bowl with roasted vegetables and tahini dressing',
    ingredients: [
      'Quinoa',
      'Sweet potato',
      'Kale',
      'Chickpeas',
      'Avocado',
      'Seeds mix',
      'Tahini dressing'
    ],
    instructions: [
      'Cook quinoa',
      'Roast vegetables',
      'Prepare dressing',
      'Massage kale',
      'Assemble bowl',
      'Top with seeds'
    ],
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 2,
    calories: 420,
    tags: ['healthy', 'vegan', 'protein', 'energizing'],
    difficulty: 'Easy',
    mood: 'energetic',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in protein, fiber, and healthy fats',
    cookingTips: [
      'Rinse quinoa well',
      'Don\'t overcrowd roasting pan',
      'Massage kale thoroughly'
    ]
  },
  {
    id: 'energetic-poke',
    name: 'Energizing Poke Bowl',
    description: 'Fresh and vibrant Hawaiian-style poke bowl',
    ingredients: [
      'Sushi grade tuna',
      'Brown rice',
      'Edamame',
      'Mango',
      'Seaweed',
      'Pickled ginger',
      'Ponzu sauce'
    ],
    instructions: [
      'Cook rice',
      'Cube tuna',
      'Prepare sauce',
      'Cut vegetables',
      'Assemble bowl',
      'Add toppings'
    ],
    prepTime: '20 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 380,
    tags: ['hawaiian', 'fish', 'fresh', 'healthy'],
    difficulty: 'Medium',
    mood: 'energetic',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in omega-3 and protein',
    cookingTips: [
      'Use fresh fish',
      'Season rice well',
      'Balance textures'
    ]
  },
  {
    id: 'energetic-wrap',
    name: 'Mediterranean Energy Wrap',
    description: 'Fresh and filling Mediterranean wrap with hummus and grilled vegetables',
    ingredients: [
      'Whole grain wrap',
      'Hummus',
      'Grilled vegetables',
      'Feta cheese',
      'Fresh herbs',
      'Mixed greens',
      'Tzatziki'
    ],
    instructions: [
      'Grill vegetables',
      'Warm wrap',
      'Spread hummus',
      'Layer ingredients',
      'Add sauce',
      'Roll tightly'
    ],
    prepTime: '15 mins',
    cookTime: '15 mins',
    servings: 2,
    calories: 340,
    tags: ['mediterranean', 'healthy', 'quick', 'vegetarian'],
    difficulty: 'Easy',
    mood: 'energetic',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Good balance of protein and vegetables',
    cookingTips: [
      'Don\'t overfill wrap',
      'Grill vegetables well',
      'Serve immediately'
    ]
  },
  {
    id: 'energetic-stir-fry',
    name: 'Ginger Tofu Stir-Fry',
    description: 'Quick and energizing Asian-inspired stir-fry',
    ingredients: [
      'Firm tofu',
      'Mixed vegetables',
      'Ginger',
      'Garlic',
      'Soy sauce',
      'Sesame oil',
      'Brown rice'
    ],
    instructions: [
      'Press and cube tofu',
      'Prepare sauce',
      'Stir-fry tofu until crispy',
      'Add vegetables',
      'Combine with sauce',
      'Serve over rice'
    ],
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4,
    calories: 310,
    tags: ['asian', 'vegetarian', 'healthy', 'quick'],
    difficulty: 'Easy',
    mood: 'energetic',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in protein and vegetables',
    cookingTips: [
      'Press tofu well',
      'Use high heat',
      'Don\'t overcrowd pan'
    ]
  }
];
