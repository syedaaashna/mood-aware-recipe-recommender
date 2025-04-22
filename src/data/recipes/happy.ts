
import { Recipe } from '@/types/recipe';

export const happyRecipes: Recipe[] = [
  {
    id: 'happy-rainbow-salad',
    name: 'Rainbow Buddha Bowl',
    description: 'A colorful, nutrient-rich bowl that will brighten your day.',
    ingredients: [
      'Mixed salad greens',
      'Purple cabbage',
      'Yellow bell pepper',
      'Cherry tomatoes',
      'Carrots',
      'Avocado',
      'Quinoa',
      'Chickpeas',
      'Tahini dressing'
    ],
    instructions: [
      'Cook quinoa according to package instructions.',
      'Arrange salad greens in a bowl.',
      'Add colorful vegetables in sections.',
      'Top with quinoa and chickpeas.',
      'Drizzle with tahini dressing.',
      'Serve immediately.'
    ],
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 380,
    tags: ['salad', 'healthy', 'vegetarian', 'happy'],
    difficulty: 'Easy',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add edible flowers for extra visual appeal.',
    nutritionAnalysis: 'Rich in vitamins, minerals, and plant-based protein.',
    cookingTips: [
      'Prep vegetables in advance',
      'Make extra dressing for the week'
    ]
  },
  {
    id: 'happy-fruit-tart',
    name: 'Fresh Fruit Tart',
    description: 'A beautiful and delicious tart topped with colorful fresh fruits.',
    ingredients: [
      'Shortcrust pastry',
      'Vanilla custard',
      'Mixed fresh fruits',
      'Apricot jam',
      'Mint leaves'
    ],
    instructions: [
      'Blind bake the pastry case.',
      'Prepare vanilla custard and let cool.',
      'Fill pastry case with custard.',
      'Arrange fresh fruits on top.',
      'Glaze with warmed apricot jam.',
      'Garnish with mint leaves.'
    ],
    prepTime: '30 mins',
    cookTime: '25 mins',
    servings: 8,
    calories: 320,
    tags: ['dessert', 'fruit', 'happy', 'special'],
    difficulty: 'Medium',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop',
    aiSuggestion: 'Use seasonal fruits for the best flavor and appearance.',
    nutritionAnalysis: 'Contains natural sugars and vitamins from fresh fruits.',
    cookingTips: [
      'Chill tart before serving',
      'Use firm, ripe fruits'
    ]
  },
  {
    id: 'happy-sushi-roll',
    name: 'Rainbow Sushi Roll',
    description: 'Colorful sushi rolls filled with fresh fish and vegetables.',
    ingredients: [
      'Sushi rice',
      'Nori sheets',
      'Assorted sashimi',
      'Avocado',
      'Cucumber',
      'Carrots',
      'Soy sauce',
      'Wasabi'
    ],
    instructions: [
      'Prepare sushi rice.',
      'Layer nori with rice.',
      'Add fish and vegetables.',
      'Roll tightly using bamboo mat.',
      'Slice into pieces.',
      'Serve with soy sauce and wasabi.'
    ],
    prepTime: '45 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 420,
    tags: ['sushi', 'japanese', 'happy', 'special'],
    difficulty: 'Hard',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop',
    aiSuggestion: 'Use different colored tobiko for extra pop.',
    nutritionAnalysis: 'Good source of omega-3 fatty acids and protein.',
    cookingTips: [
      'Use sharp knife for clean cuts',
      'Wet hands when handling rice'
    ]
  },
  {
    id: 'happy-berry-pancakes',
    name: 'Mixed Berry Pancakes',
    description: 'Fluffy pancakes topped with fresh berries and maple syrup.',
    ingredients: [
      'Pancake batter',
      'Mixed berries',
      'Maple syrup',
      'Whipped cream',
      'Butter'
    ],
    instructions: [
      'Prepare pancake batter.',
      'Heat griddle with butter.',
      'Pour batter and add berries.',
      'Flip when bubbles form.',
      'Stack and top with berries.',
      'Serve with syrup and cream.'
    ],
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 380,
    tags: ['breakfast', 'sweet', 'happy', 'weekend'],
    difficulty: 'Easy',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add lemon zest to the batter for brightness.',
    nutritionAnalysis: 'Contains antioxidants from berries.',
    cookingTips: [
      'Don\'t overmix the batter',
      'Use room temperature ingredients'
    ]
  },
  {
    id: 'happy-tacos',
    name: 'Street-Style Tacos',
    description: 'Vibrant and flavorful street tacos with fresh toppings.',
    ingredients: [
      'Corn tortillas',
      'Grilled meat or fish',
      'Fresh salsa',
      'Guacamole',
      'Lime wedges',
      'Cilantro',
      'Onions'
    ],
    instructions: [
      'Warm tortillas on griddle.',
      'Prepare meat or fish.',
      'Make fresh salsa.',
      'Assemble tacos with toppings.',
      'Serve with lime wedges.',
      'Enjoy immediately.'
    ],
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4,
    calories: 420,
    tags: ['mexican', 'dinner', 'happy', 'casual'],
    difficulty: 'Medium',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop',
    aiSuggestion: 'Try different protein options each time.',
    nutritionAnalysis: 'Good balance of protein, fats, and carbs.',
    cookingTips: [
      'Double-layer tortillas for strength',
      'Serve immediately while warm'
    ]
  }
];
