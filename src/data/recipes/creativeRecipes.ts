import { Recipe } from '@/types/recipe';

export const creativeRecipes: Recipe[] = [
  {
    id: 'creative-rainbow-sushi',
    name: 'Rainbow Sushi Rolls',
    description: 'Colorful sushi rolls featuring a variety of fresh fish and vegetables.',
    ingredients: [
      'Sushi rice',
      'Nori sheets',
      'Tuna',
      'Salmon',
      'Avocado',
      'Cucumber',
      'Carrot',
      'Sesame seeds'
    ],
    instructions: [
      'Prepare sushi rice and slice fillings.',
      'Lay nori on mat, spread rice.',
      'Arrange rainbow toppings and roll tight.',
      'Slice and sprinkle with sesame seeds.'
    ],
    prepTime: '25 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 240,
    tags: ['sushi', 'colorful', 'creative'],
    difficulty: 'Medium',
    mood: 'creative',
    nutritionAnalysis: 'Lots of veggies and protein.',
    cookingTips: ['Keep hands wet for easier rolling.']
  },
  {
    id: 'creative-veggie-pizza-faces',
    name: 'Mini Veggie Pizza Faces',
    description: 'Personal pizzas designed with playful veggie faces.',
    ingredients: [
      'Mini pizza bases',
      'Tomato sauce',
      'Mozzarella cheese',
      'Bell peppers',
      'Olives',
      'Spinach'
    ],
    instructions: [
      'Spread tomato sauce on pizza base.',
      'Add cheese and veggie toppings in fun patterns.',
      'Bake at 220°C (428°F) for 8 minutes.',
      'Serve warm.'
    ],
    prepTime: '8 mins',
    cookTime: '8 mins',
    servings: 2,
    calories: 220,
    tags: ['pizza', 'vegetarian', 'creative'],
    difficulty: 'Easy',
    mood: 'creative',
    nutritionAnalysis: 'Fiber-rich and fun.',
    cookingTips: ['Encourage creativity!']
  }
];
