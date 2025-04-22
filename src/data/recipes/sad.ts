
import { Recipe } from '@/types/recipe';

export const sadRecipes: Recipe[] = [
  {
    id: 'sad-chocolate-cake',
    name: 'Mood-Lifting Chocolate Cake',
    description: 'A rich, comforting chocolate cake that\'s sure to lift your spirits.',
    ingredients: [
      'Dark chocolate',
      'Butter',
      'Sugar',
      'Eggs',
      'Flour',
      'Vanilla extract'
    ],
    instructions: [
      'Melt chocolate and butter.',
      'Mix in sugar and eggs.',
      'Fold in flour.',
      'Bake until just set.',
      'Let cool slightly.',
      'Serve warm.'
    ],
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 8,
    calories: 300,
    tags: ['dessert', 'chocolate', 'comfort'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    aiSuggestion: 'Add raspberries for a fruity contrast.',
    nutritionAnalysis: 'Contains mood-boosting compounds from dark chocolate.',
    cookingTips: ['Don\'t overbake', 'Use quality chocolate']
  },
  {
    id: 'sad-comfort-pasta',
    name: 'Creamy Comfort Pasta',
    description: 'A hug in a bowl - creamy, satisfying pasta.',
    ingredients: [
      'Pasta',
      'Heavy cream',
      'Parmesan cheese',
      'Butter',
      'Garlic',
      'Fresh herbs'
    ],
    instructions: [
      'Cook pasta al dente.',
      'Sauté garlic in butter.',
      'Add cream and simmer.',
      'Stir in cheese.',
      'Toss with pasta.',
      'Garnish with herbs.'
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 450,
    tags: ['pasta', 'comfort', 'dinner'],
    difficulty: 'Easy',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a',
    aiSuggestion: 'Add peas for color and nutrition.',
    nutritionAnalysis: 'Rich in carbohydrates and protein.',
    cookingTips: ['Reserve pasta water', 'Grate cheese fresh']
  },
  {
    id: 'sad-mac-cheese',
    name: 'Comfort Mac and Cheese',
    description: 'Ultra creamy mac and cheese with a golden crust.',
    ingredients: [
      'Macaroni',
      'Sharp cheddar',
      'Gruyere cheese',
      'Milk',
      'Butter',
      'Breadcrumbs'
    ],
    instructions: [
      'Cook pasta until al dente.',
      'Make cheese sauce.',
      'Combine pasta and sauce.',
      'Top with breadcrumbs.',
      'Bake until golden.',
      'Let rest before serving.'
    ],
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 6,
    calories: 450,
    tags: ['pasta', 'comfort', 'american'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6',
    aiSuggestion: 'Add truffle oil for extra luxury.',
    nutritionAnalysis: 'Rich in calcium and protein.',
    cookingTips: ['Use room temperature cheese', 'Dont overcook pasta']
  },
  {
    id: 'sad-hot-chocolate',
    name: 'Rich Hot Chocolate',
    description: 'Thick and creamy hot chocolate with marshmallows.',
    ingredients: [
      'Dark chocolate',
      'Whole milk',
      'Heavy cream',
      'Vanilla extract',
      'Marshmallows',
      'Cinnamon'
    ],
    instructions: [
      'Heat milk and cream.',
      'Add chopped chocolate.',
      'Whisk until smooth.',
      'Add vanilla.',
      'Top with marshmallows.',
      'Dust with cinnamon.'
    ],
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 2,
    calories: 320,
    tags: ['beverage', 'chocolate', 'comfort'],
    difficulty: 'Easy',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25',
    aiSuggestion: 'Try adding a pinch of sea salt.',
    nutritionAnalysis: 'Contains mood-boosting compounds.',
    cookingTips: ['Use quality chocolate', 'Heat gently']
  },
  {
    id: 'sad-chicken-soup',
    name: 'Healing Chicken Soup',
    description: 'Homestyle chicken soup with tender vegetables.',
    ingredients: [
      'Whole chicken',
      'Mixed vegetables',
      'Egg noodles',
      'Fresh herbs',
      'Garlic',
      'Ginger'
    ],
    instructions: [
      'Make chicken broth.',
      'Cook vegetables.',
      'Add noodles.',
      'Season well.',
      'Add herbs.',
      'Serve hot.'
    ],
    prepTime: '20 mins',
    cookTime: '60 mins',
    servings: 6,
    calories: 280,
    tags: ['soup', 'comfort', 'healthy'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    aiSuggestion: 'Add lemon for brightness.',
    nutritionAnalysis: 'Rich in protein and minerals.',
    cookingTips: ['Use bone-in chicken', 'Don\'t overcook vegetables']
  }
];
