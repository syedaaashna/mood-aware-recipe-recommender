
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
    image: 'https://images.unsplash.com/photo-1590080658-d464e1869fd5?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in vitamin C and antioxidants, perfect for boosting mood and energy',
    cookingTips: [
      'Use room temperature fruit for better flavor',
      'Add a sprinkle of chili flakes for an unexpected kick',
      'Can be made ahead and chilled'
    ]
  },
  {
    id: 'happy-paella',
    name: 'Spanish Seafood Paella',
    description: 'A vibrant and festive seafood paella that brings Mediterranean sunshine to your table',
    ingredients: [
      'Saffron threads',
      'Bomba rice',
      'Mixed seafood (shrimp, mussels, calamari)',
      'Bell peppers',
      'Tomatoes',
      'Spanish paprika',
      'White wine'
    ],
    instructions: [
      'Toast saffron and infuse in warm water',
      'Sauté sofrito (onions, garlic, peppers)',
      'Add rice and toast lightly',
      'Add saffron water and stock',
      'Cook rice until almost done',
      'Add seafood and cook until done',
      'Create socarrat (crispy bottom)'
    ],
    prepTime: '30 mins',
    cookTime: '25 mins',
    servings: 6,
    calories: 450,
    tags: ['spanish', 'seafood', 'rice', 'celebration'],
    difficulty: 'Medium',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1604704827370-75117911683c?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in protein and omega-3 fatty acids',
    cookingTips: [
      'Use the correct rice-to-liquid ratio',
      "Don't stir after adding rice",
      'Let it rest before serving'
    ]
  },
  {
    id: 'happy-sushi',
    name: 'Rainbow Roll Platter',
    description: 'Colorful and fresh sushi rolls that bring joy with every bite',
    ingredients: [
      'Sushi rice',
      'Nori sheets',
      'Fresh salmon',
      'Tuna',
      'Avocado',
      'Cucumber',
      'Tobiko'
    ],
    instructions: [
      'Prepare sushi rice',
      'Layer nori with rice',
      'Add fillings',
      'Roll tightly',
      'Top with fish and avocado',
      'Slice and garnish'
    ],
    prepTime: '45 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 320,
    tags: ['japanese', 'fish', 'fresh', 'colorful'],
    difficulty: 'Medium',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1630698467933-60129917a2c2?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in protein and healthy fats',
    cookingTips: [
      'Use sharp knife for clean cuts',
      'Keep hands wet while rolling',
      'Use fresh fish only'
    ]
  },
  {
    id: 'happy-thai-curry',
    name: 'Rainbow Thai Curry',
    description: 'A colorful and aromatic Thai curry that lifts the spirits',
    ingredients: [
      'Coconut milk',
      'Thai curry paste',
      'Mixed vegetables',
      'Tofu',
      'Thai basil',
      'Lime leaves',
      'Jasmine rice'
    ],
    instructions: [
      'Sauté curry paste in coconut cream',
      'Add remaining coconut milk',
      'Add vegetables gradually',
      'Simmer until cooked',
      'Add herbs and lime juice',
      'Serve with jasmine rice'
    ],
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 4,
    calories: 380,
    tags: ['thai', 'curry', 'vegetarian', 'aromatic'],
    difficulty: 'Easy',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in vitamins and antioxidants',
    cookingTips: [
      'Use fresh curry paste',
      'Add softer vegetables last',
      "Don't overcook the vegetables"
    ]
  },
  {
    id: 'happy-pizza',
    name: 'Mediterranean Joy Pizza',
    description: 'A sunshine-inspired pizza topped with colorful Mediterranean ingredients',
    ingredients: [
      'Pizza dough',
      'San Marzano tomatoes',
      'Fresh mozzarella',
      'Colorful bell peppers',
      'Artichokes',
      'Olives',
      'Fresh basil'
    ],
    instructions: [
      'Stretch the dough',
      'Spread tomato sauce',
      'Add cheese and toppings',
      'Bake in hot oven',
      'Finish with fresh basil',
      'Drizzle with olive oil'
    ],
    prepTime: '25 mins',
    cookTime: '15 mins',
    servings: 4,
    calories: 290,
    tags: ['italian', 'mediterranean', 'vegetarian', 'colorful'],
    difficulty: 'Easy',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1593560708920-61b98ae969e1?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Good source of protein and vegetables',
    cookingTips: [
      'Preheat oven thoroughly',
      'Use room temperature dough',
      'Don\'t overload toppings'
    ]
  },
  {
    id: 'happy-bibimbap',
    name: 'Korean Bibimbap',
    description: 'A colorful and joyful Korean rice bowl with assorted vegetables and gochujang sauce',
    ingredients: [
      'Steamed rice',
      'Spinach',
      'Bean sprouts',
      'Carrots',
      'Shiitake mushrooms',
      'Beef bulgogi',
      'Gochujang sauce',
      'Fried egg'
    ],
    instructions: [
      'Cook rice and set aside',
      'Season and sauté each vegetable separately',
      'Cook marinated beef bulgogi',
      'Fry an egg sunny side up',
      'Arrange rice in a bowl',
      'Top with vegetables and beef in sections',
      'Add fried egg and gochujang sauce'
    ],
    prepTime: '30 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 650,
    tags: ['korean', 'healthy', 'rice', 'colorful'],
    difficulty: 'Medium',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in protein and vegetables',
    cookingTips: ['Prep all ingredients before assembly', 'Serve immediately while hot']
  },
  {
    id: 'happy-pho',
    name: 'Vietnamese Pho',
    description: 'A soul-warming Vietnamese noodle soup with rich broth and fresh herbs',
    ingredients: [
      'Rice noodles',
      'Beef slices',
      'Bean sprouts',
      'Thai basil',
      'Lime wedges',
      'Hoisin sauce',
      'Sriracha sauce',
      'Beef broth'
    ],
    instructions: [
      'Prepare rich beef broth',
      'Cook rice noodles',
      'Arrange noodles in bowls',
      'Add beef slices',
      'Pour hot broth',
      'Serve with garnishes'
    ],
    prepTime: '20 mins',
    cookTime: '40 mins',
    servings: 4,
    calories: 480,
    tags: ['vietnamese', 'soup', 'noodles', 'comfort'],
    difficulty: 'Medium',
    mood: 'happy',
    image: 'https://images.unsplash.com/photo-1612358405970-e1adb2e6a498?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in protein and herbs',
    cookingTips: ['Keep broth hot', 'Add garnishes just before serving']
  }
];
