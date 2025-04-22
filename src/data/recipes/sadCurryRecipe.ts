
import { Recipe } from '@/types/recipe';

export const sadCurryRecipe: Recipe = {
  id: 'sad-curry',
  name: 'Butter Chicken Curry',
  description: 'Rich and creamy Indian curry that soothes the soul',
  ingredients: [
    'Chicken thighs',
    'Butter',
    'Cream',
    'Tomato sauce',
    'Indian spices',
    'Garlic and ginger',
    'Naan bread'
  ],
  instructions: [
    'Marinate chicken',
    'Prepare curry base',
    'Cook chicken',
    'Simmer in sauce',
    'Finish with cream',
    'Serve with naan'
  ],
  prepTime: '30 mins',
  cookTime: '40 mins',
  servings: 4,
  calories: 580,
  tags: ['indian', 'curry', 'comfort', 'creamy'],
  difficulty: 'Medium',
  mood: 'sad',
  image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop',
  nutritionAnalysis: 'High in protein and healthy fats',
  cookingTips: [
    'Use quality spices',
    'Don\'t skip marination',
    'Adjust cream to taste'
  ]
};
