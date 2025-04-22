
import { Recipe } from '@/types/recipe';

export const sadButterChickenRecipe: Recipe = {
  id: 'sad-butter-chicken',
  name: 'Comforting Butter Chicken',
  description: 'Rich and creamy Indian butter chicken that soothes the soul',
  ingredients: [
    'Chicken thighs',
    'Butter',
    'Heavy cream',
    'Tomato sauce',
    'Garam masala',
    'Garlic and ginger',
    'Naan bread'
  ],
  instructions: [
    'Marinate chicken in yogurt and spices',
    'Cook chicken until tender',
    'Prepare creamy tomato sauce',
    'Combine chicken with sauce',
    'Simmer until rich and thick',
    'Serve with naan bread'
  ],
  prepTime: '30 mins',
  cookTime: '40 mins',
  servings: 4,
  calories: 580,
  tags: ['indian', 'comfort food', 'creamy', 'spicy'],
  difficulty: 'Medium',
  mood: 'sad',
  image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop',
  nutritionAnalysis: 'High in protein and comfort factor',
  cookingTips: ['Marinate overnight for best results', 'Adjust cream to taste']
};
