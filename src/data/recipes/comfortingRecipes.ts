import { Recipe } from '@/types/recipe';

export const comfortingRecipes: Recipe[] = [
  {
    id: 'comforting-italian-risotto',
    name: 'Mushroom Risotto',
    description: 'Creamy Italian rice dish with mushrooms and parmesan cheese.',
    ingredients: [
      'Arborio rice',
      'Mixed mushrooms',
      'Onion',
      'White wine',
      'Vegetable stock',
      'Parmesan cheese',
      'Butter'
    ],
    instructions: [
      'Sauté mushrooms and onions.',
      'Add rice and toast slightly.',
      'Gradually add hot stock while stirring.',
      'Finish with butter and parmesan.'
    ],
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 2,
    calories: 380,
    tags: ['italian', 'risotto', 'comforting'],
    difficulty: 'Medium',
    mood: 'comforting',
    nutritionAnalysis: 'Rich and warming.',
    cookingTips: ['Stir continuously for creamy texture.'],
    image: 'https://images.unsplash.com/photo-1659789821364-52243d5dee58?w=800&auto=format&fit=crop'
  },
  {
    id: 'comforting-mac-and-cheese',
    name: 'Comforting Mac & Cheese',
    description: 'Creamy, cheesy pasta that warms the soul.',
    ingredients: [
      'Macaroni pasta',
      'Cheddar cheese',
      'Milk',
      'Butter',
      'Flour',
      'Seasonings'
    ],
    instructions: [
      'Cook pasta.',
      'Make cheese sauce.',
      'Combine and bake until golden.',
    ],
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 2,
    calories: 450,
    tags: ['pasta', 'comfort', 'cheese'],
    difficulty: 'Medium',
    mood: 'comforting',
    nutritionAnalysis: 'Comforting and satisfying.',
    cookingTips: ['Use sharp cheddar for more flavor.'],
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop'
  },
  {
    id: 'comforting-indian-khichdi',
    name: 'Indian Khichdi',
    description: 'Soothing one-pot rice and lentil dish with gentle spices.',
    ingredients: [
      'Rice',
      'Yellow lentils',
      'Ghee',
      'Cumin seeds',
      'Turmeric',
      'Ginger',
      'Vegetables'
    ],
    instructions: [
      'Sauté spices in ghee.',
      'Add rice, lentils, and vegetables.',
      'Add water and simmer until soft.',
      'Serve with yogurt on the side.'
    ],
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 2,
    calories: 310,
    tags: ['indian', 'lentils', 'comforting'],
    difficulty: 'Easy',
    mood: 'comforting',
    nutritionAnalysis: 'Easy to digest comfort food.',
    cookingTips: ['Adjust water for desired consistency.']
  },
  {
    id: 'comforting-french-onion-soup',
    name: 'French Onion Soup',
    description: 'Caramelized onion soup topped with bread and melted cheese.',
    ingredients: [
      'Onions',
      'Beef broth',
      'French bread',
      'Gruyère cheese',
      'Butter',
      'Thyme',
      'Bay leaf'
    ],
    instructions: [
      'Slowly caramelize onions in butter.',
      'Add broth and herbs, simmer.',
      'Top with bread and cheese.',
      'Broil until cheese is bubbly and golden.'
    ],
    prepTime: '15 mins',
    cookTime: '60 mins',
    servings: 2,
    calories: 340,
    tags: ['french', 'soup', 'comforting'],
    difficulty: 'Medium',
    mood: 'comforting',
    nutritionAnalysis: 'Rich and deeply flavored.',
    cookingTips: ['Take time caramelizing onions for best flavor.']
  }
];
