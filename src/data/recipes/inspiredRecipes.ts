
import { Recipe } from '@/types/recipe';

export const inspiredRecipes: Recipe[] = [
  {
    id: 'inspired-korean-bibimbap',
    name: 'Korean Bibimbap',
    description: 'Colorful rice bowl with seasoned vegetables, beef, and a fried egg.',
    ingredients: [
      'Rice',
      'Ground beef',
      'Carrots',
      'Spinach',
      'Bean sprouts',
      'Mushrooms',
      'Egg',
      'Gochujang sauce'
    ],
    instructions: [
      'Cook rice and season vegetables separately.',
      'Sauté beef and top rice with all ingredients.',
      'Finish with fried egg and gochujang.'
    ],
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 2,
    calories: 430,
    tags: ['korean', 'rice bowl', 'creative'],
    difficulty: 'Medium',
    mood: 'inspired',
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Balanced and hearty.',
    cookingTips: ['Use colorful vegetables for presentation.']
  },
  {
    id: 'inspired-italian-risotto',
    name: 'Classic Italian Risotto',
    description: 'Creamy risotto with arborio rice, white wine, and parmesan.',
    ingredients: [
      'Arborio rice',
      'Chicken stock',
      'Parmesan cheese',
      'White wine',
      'Shallots',
      'Butter'
    ],
    instructions: [
      'Sauté shallots and rice in butter.',
      'Deglaze with wine and slowly add stock.',
      'Stir until creamy and finish with cheese.'
    ],
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 2,
    calories: 340,
    tags: ['italian', 'risotto', 'inspired'],
    difficulty: 'Medium',
    mood: 'inspired',
    image: 'https://images.unsplash.com/photo-1667401677467-23538002f79d?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich and wholesome.',
    cookingTips: ['Stir constantly for creaminess.']
  },
  {
    id: 'inspired-american-taco-bowl',
    name: 'American Taco Bowl',
    description: 'Deconstructed taco in a bowl with seasoned beef, beans, veggies, and toppings.',
    ingredients: [
      'Ground beef',
      'Black beans',
      'Corn',
      'Lettuce',
      'Tomato',
      'Cheddar cheese',
      'Taco sauce'
    ],
    instructions: [
      'Brown beef and season.',
      'Layer ingredients in a bowl.',
      'Top with cheese and sauce.'
    ],
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 2,
    calories: 370,
    tags: ['american', 'taco', 'bowl'],
    difficulty: 'Easy',
    mood: 'inspired',
    image: 'https://images.unsplash.com/photo-1564149504298-00c351fd7f16?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Easy protein meal.',
    cookingTips: ['Make with turkey for a lighter option.']
  }
];
