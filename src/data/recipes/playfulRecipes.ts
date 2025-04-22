import { Recipe } from '@/types/recipe';

export const playfulRecipes: Recipe[] = [
  {
    id: 'playful-rainbow-fruit-skewers',
    name: 'Rainbow Fruit Skewers',
    description: 'Colorful fruit skewers for a fun, playful snack.',
    ingredients: [
      'Strawberries',
      'Pineapple',
      'Green grapes',
      'Blueberries',
      'Kiwi',
      'Wooden skewers'
    ],
    instructions: [
      'Cut fruit as needed for even size.',
      'Thread colourful fruits onto each skewer.',
      'Arrange in rainbow order.',
      'Chill before serving.'
    ],
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 90,
    tags: ['fruit', 'snack', 'colorful'],
    difficulty: 'Easy',
    mood: 'playful',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&auto=format&fit=crop', // Colorful fruit skewers
    nutritionAnalysis: 'High in vitamin C.',
    cookingTips: ['Use seasonal fruit for best color and taste.']
  },
  {
    id: 'playful-monster-sandwiches',
    name: 'Monster Sandwiches',
    description: 'Silly open-faced sandwiches decorated with veggies and cheese for a playful lunch.',
    ingredients: [
      'Whole-grain bread',
      'Cream cheese',
      'Sliced cucumber',
      'Cherry tomatoes',
      'Sliced cheese',
      'Olives'
    ],
    instructions: [
      'Spread cream cheese on bread.',
      'Use cucumber and tomatoes as eyes and mouths.',
      'Add cheese teeth and olive pupils.',
      'Create silly faces and serve.'
    ],
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 180,
    tags: ['snack', 'creative', 'kids'],
    difficulty: 'Easy',
    mood: 'playful',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop', // Fun veggie sandwiches
    nutritionAnalysis: 'Fun way to eat veggies.',
    cookingTips: ['Let kids build their own.']
  }
];
