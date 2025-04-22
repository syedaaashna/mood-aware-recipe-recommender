
import { Recipe } from '@/types/recipe';

export const sadRisottoRecipe: Recipe = {
  id: 'sad-risotto',
  name: 'Mushroom Truffle Risotto',
  description: 'Creamy, comforting risotto with wild mushrooms and truffle',
  ingredients: [
    'Arborio rice',
    'Mixed mushrooms',
    'Truffle oil',
    'Parmesan cheese',
    'White wine',
    'Vegetable stock',
    'Herbs'
  ],
  instructions: [
    'Sauté mushrooms',
    'Toast rice',
    'Add wine and reduce',
    'Gradually add hot stock',
    'Stir until creamy',
    'Finish with cheese and truffle oil'
  ],
  prepTime: '15 mins',
  cookTime: '30 mins',
  servings: 4,
  calories: 420,
  tags: ['italian', 'comfort', 'creamy', 'vegetarian'],
  difficulty: 'Medium',
  mood: 'sad',
  image: 'https://images.unsplash.com/photo-1611068120813-ebb1a1cf3a08?w=800&auto=format&fit=crop',
  nutritionAnalysis: 'Rich in carbohydrates and protein',
  cookingTips: [
    'Keep stock hot',
    'Stir continuously',
    'Use room temperature cheese'
  ]
};
