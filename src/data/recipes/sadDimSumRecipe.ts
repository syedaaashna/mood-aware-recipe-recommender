
import { Recipe } from '@/types/recipe';

export const sadDimSumRecipe: Recipe = {
  id: 'sad-dim-sum',
  name: 'Dim Sum Platter',
  description: 'Assorted Chinese dumplings and small bites for comfort',
  ingredients: [
    'Shrimp dumplings',
    'Pork buns',
    'Spring rolls',
    'Siu mai',
    'Chili oil',
    'Soy sauce',
    'Chinese tea'
  ],
  instructions: [
    'Steam dumplings until translucent',
    'Warm up pork buns',
    'Fry spring rolls until golden',
    'Prepare dipping sauces',
    'Arrange on platter',
    'Serve with hot tea'
  ],
  prepTime: '45 mins',
  cookTime: '25 mins',
  servings: 4,
  calories: 520,
  tags: ['chinese', 'dumplings', 'comfort', 'sharing'],
  difficulty: 'Hard',
  mood: 'sad',
  image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop',
  nutritionAnalysis: 'Balanced protein and carbs',
  cookingTips: ['Steam in batches', 'Serve immediately while hot']
};
