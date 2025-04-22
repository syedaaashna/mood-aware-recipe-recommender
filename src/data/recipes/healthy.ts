
import { Recipe } from '@/types/recipe';

export const healthyRecipes: Recipe[] = [
  {
    id: 'healthy-salmon-bowl',
    name: 'Grilled Salmon Poke Bowl',
    description: 'Fresh and healthy bowl with grilled salmon, rice, and vegetables.',
    ingredients: [
      'Fresh salmon fillet',
      'Brown rice',
      'Edamame',
      'Avocado',
      'Cucumber',
      'Seaweed',
      'Soy sauce'
    ],
    instructions: [
      'Cook brown rice.',
      'Grill salmon with seasonings.',
      'Prepare vegetables.',
      'Assemble bowl with rice base.',
      'Add salmon and toppings.',
      'Drizzle with sauce.'
    ],
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 450,
    tags: ['healthy', 'seafood', 'bowl', 'asian-fusion'],
    difficulty: 'Medium',
    mood: 'healthy',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add pickled ginger for digestive benefits.',
    nutritionAnalysis: 'High in omega-3s, protein, and healthy fats.',
    cookingTips: [
      'Don\'t overcook the salmon',
      'Prep components in advance'
    ]
  },
  {
    id: 'healthy-mediterranean-salad',
    name: 'Mediterranean Quinoa Salad',
    description: 'Fresh and vibrant quinoa salad with Mediterranean flavors.',
    ingredients: [
      'Quinoa',
      'Cherry tomatoes',
      'Cucumber',
      'Kalamata olives',
      'Feta cheese',
      'Red onion',
      'Olive oil',
      'Lemon juice'
    ],
    instructions: [
      'Cook quinoa and let cool.',
      'Chop vegetables.',
      'Mix ingredients in bowl.',
      'Prepare dressing.',
      'Combine and toss.',
      'Chill before serving.'
    ],
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 320,
    tags: ['healthy', 'vegetarian', 'salad', 'mediterranean'],
    difficulty: 'Easy',
    mood: 'healthy',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add fresh herbs like mint and parsley.',
    nutritionAnalysis: 'Rich in protein, fiber, and healthy fats.',
    cookingTips: [
      'Rinse quinoa before cooking',
      'Make extra for meal prep'
    ]
  },
  {
    id: 'healthy-vegetable-soup',
    name: 'Detox Vegetable Soup',
    description: 'Light and nourishing vegetable soup with healing properties.',
    ingredients: [
      'Mixed vegetables',
      'Vegetable broth',
      'Garlic',
      'Ginger',
      'Turmeric',
      'Herbs',
      'Lemon'
    ],
    instructions: [
      'Prep vegetables.',
      'Sauté garlic and ginger.',
      'Add vegetables and broth.',
      'Simmer until tender.',
      'Season with herbs.',
      'Finish with lemon.'
    ],
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 6,
    calories: 120,
    tags: ['healthy', 'soup', 'vegetarian', 'detox'],
    difficulty: 'Easy',
    mood: 'healthy',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add miso paste for gut health benefits.',
    nutritionAnalysis: 'Low in calories, high in vitamins and minerals.',
    cookingTips: [
      'Cut vegetables uniformly',
      'Don\'t overcook to retain nutrients'
    ]
  },
  {
    id: 'healthy-green-smoothie',
    name: 'Green Goddess Smoothie',
    description: 'Nutrient-packed green smoothie with spinach and tropical fruits.',
    ingredients: [
      'Spinach',
      'Banana',
      'Mango',
      'Coconut water',
      'Chia seeds',
      'Ginger',
      'Lime'
    ],
    instructions: [
      'Add liquid to blender.',
      'Add spinach and blend.',
      'Add fruits and blend.',
      'Add seeds and blend.',
      'Adjust thickness.',
      'Serve immediately.'
    ],
    prepTime: '5 mins',
    cookTime: '2 mins',
    servings: 2,
    calories: 180,
    tags: ['healthy', 'smoothie', 'breakfast', 'vegan'],
    difficulty: 'Easy',
    mood: 'healthy',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add protein powder for post-workout recovery.',
    nutritionAnalysis: 'High in vitamins, minerals, and antioxidants.',
    cookingTips: [
      'Use frozen fruit for thickness',
      'Add greens gradually to taste'
    ]
  },
  {
    id: 'healthy-chickpea-curry',
    name: 'Chickpea and Spinach Curry',
    description: 'Plant-based curry rich in protein and iron.',
    ingredients: [
      'Chickpeas',
      'Spinach',
      'Coconut milk',
      'Onion',
      'Tomatoes',
      'Curry spices',
      'Brown rice'
    ],
    instructions: [
      'Sauté onions and spices.',
      'Add tomatoes and coconut milk.',
      'Simmer with chickpeas.',
      'Add spinach at end.',
      'Serve with brown rice.',
      'Garnish with herbs.'
    ],
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 4,
    calories: 380,
    tags: ['healthy', 'vegetarian', 'curry', 'indian'],
    difficulty: 'Medium',
    mood: 'healthy',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop',
    aiSuggestion: 'Use homemade curry paste for best results.',
    nutritionAnalysis: 'High in protein, fiber, and iron.',
    cookingTips: [
      'Toast spices for better flavor',
      'Use fresh spinach for nutrients'
    ]
  }
];
