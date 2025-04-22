
import { Recipe } from '@/types/recipe';

export const romanticRecipes: Recipe[] = [
  {
    id: 'romantic-steak',
    name: 'Pan-Seared Filet Mignon',
    description: 'Perfect steak dinner for two with red wine reduction sauce.',
    ingredients: [
      '2 filet mignon steaks',
      'Butter',
      'Garlic',
      'Fresh herbs',
      'Red wine',
      'Salt and pepper'
    ],
    instructions: [
      'Bring steaks to room temperature.',
      'Season generously with salt and pepper.',
      'Sear in hot pan with butter.',
      'Add garlic and herbs.',
      'Make red wine reduction.',
      'Rest meat before serving.'
    ],
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 2,
    calories: 580,
    tags: ['dinner', 'steak', 'romantic', 'special occasion'],
    difficulty: 'Medium',
    mood: 'romantic',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop',
    aiSuggestion: 'Pair with a bold red wine.',
    nutritionAnalysis: 'High in protein and iron.',
    cookingTips: [
      'Use room temperature meat',
      'Don\'t overcook the steak'
    ]
  },
  {
    id: 'romantic-chocolate-souffle',
    name: 'Chocolate Soufflé',
    description: 'Light and airy chocolate soufflé with a warm, gooey center.',
    ingredients: [
      'Dark chocolate',
      'Butter',
      'Eggs',
      'Sugar',
      'Vanilla extract',
      'Powdered sugar'
    ],
    instructions: [
      'Prepare ramekins with butter and sugar.',
      'Melt chocolate and butter.',
      'Separate eggs and beat whites.',
      'Fold ingredients together.',
      'Bake until risen.',
      'Serve immediately.'
    ],
    prepTime: '25 mins',
    cookTime: '12 mins',
    servings: 2,
    calories: 380,
    tags: ['dessert', 'chocolate', 'romantic', 'french'],
    difficulty: 'Hard',
    mood: 'romantic',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&auto=format&fit=crop',
    aiSuggestion: 'Prepare ingredients in advance for perfect timing.',
    nutritionAnalysis: 'Rich in antioxidants from dark chocolate.',
    cookingTips: [
      'Don\'t open oven while baking',
      'Serve immediately when done'
    ]
  },
  {
    id: 'romantic-seafood-pasta',
    name: 'Seafood Linguine',
    description: 'Elegant pasta dish with mixed seafood in white wine sauce.',
    ingredients: [
      'Linguine pasta',
      'Mixed seafood',
      'White wine',
      'Garlic',
      'Cherry tomatoes',
      'Fresh herbs'
    ],
    instructions: [
      'Cook pasta al dente.',
      'Sauté garlic and tomatoes.',
      'Add seafood and wine.',
      'Toss with pasta.',
      'Finish with herbs.',
      'Serve immediately.'
    ],
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 520,
    tags: ['pasta', 'seafood', 'romantic', 'italian'],
    difficulty: 'Medium',
    mood: 'romantic',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop',
    aiSuggestion: 'Use fresh seafood for best results.',
    nutritionAnalysis: 'Rich in protein and omega-3 fatty acids.',
    cookingTips: [
      'Don\'t overcook the seafood',
      'Reserve pasta water for sauce'
    ]
  },
  {
    id: 'romantic-risotto',
    name: 'Mushroom Risotto',
    description: 'Creamy risotto with wild mushrooms and parmesan.',
    ingredients: [
      'Arborio rice',
      'Wild mushrooms',
      'White wine',
      'Parmesan cheese',
      'Vegetable stock',
      'Fresh herbs'
    ],
    instructions: [
      'Sauté mushrooms until golden.',
      'Toast rice with wine.',
      'Add stock gradually.',
      'Stir continuously.',
      'Finish with cheese.',
      'Garnish and serve.'
    ],
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 2,
    calories: 480,
    tags: ['rice', 'italian', 'romantic', 'vegetarian'],
    difficulty: 'Medium',
    mood: 'romantic',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add truffle oil for extra luxury.',
    nutritionAnalysis: 'Good source of protein and complex carbs.',
    cookingTips: [
      'Use warm stock for best results',
      'Stir constantly for creaminess'
    ]
  },
  {
    id: 'romantic-chocolate-covered-strawberries',
    name: 'Chocolate Covered Strawberries',
    description: 'Fresh strawberries dipped in dark chocolate.',
    ingredients: [
      'Fresh strawberries',
      'Dark chocolate',
      'White chocolate',
      'Optional toppings'
    ],
    instructions: [
      'Wash and dry strawberries.',
      'Melt chocolate carefully.',
      'Dip strawberries.',
      'Add decorative drizzle.',
      'Let set completely.',
      'Serve at room temperature.'
    ],
    prepTime: '20 mins',
    cookTime: '10 mins',
    servings: 2,
    calories: 220,
    tags: ['dessert', 'chocolate', 'romantic', 'easy'],
    difficulty: 'Easy',
    mood: 'romantic',
    image: 'https://images.unsplash.com/photo-1567506352802-5e80a4bd4321?w=800&auto=format&fit=crop',
    aiSuggestion: 'Try different chocolate varieties.',
    nutritionAnalysis: 'Contains antioxidants from both chocolate and berries.',
    cookingTips: [
      'Use room temperature berries',
      'Don\'t overheat chocolate'
    ]
  }
];
