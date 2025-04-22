
import { Recipe } from '@/types/recipe';

export const focusedRecipes: Recipe[] = [
  {
    id: 'focused-brain-power-smoothie',
    name: 'Brain Power Smoothie',
    description: 'Blueberry and walnut smoothie for mental focus.',
    ingredients: [
      'Blueberries',
      'Banana',
      'Walnuts',
      'Greek yogurt',
      'Honey',
      'Milk'
    ],
    instructions: [
      'Blend all ingredients until smooth.',
      'Pour into glass and serve chilled.'
    ],
    prepTime: '3 mins',
    cookTime: '0 mins',
    servings: 1,
    calories: 160,
    tags: ['smoothie', 'healthy', 'focus'],
    difficulty: 'Easy',
    mood: 'focused',
    nutritionAnalysis: 'High in antioxidants and brain-boosting fats.',
    cookingTips: ['Use frozen berries for thicker texture.']
  },
  {
    id: 'focused-rosemary-chicken',
    name: 'Lemon Rosemary Chicken',
    description: 'Simple chicken breast with lemon and rosemary for a brainy lunch.',
    ingredients: [
      'Chicken breast',
      'Rosemary',
      'Lemon',
      'Olive oil',
      'Salt and pepper'
    ],
    instructions: [
      'Marinate chicken with lemon, rosemary, oil, salt, and pepper.',
      'Grill or pan-fry until cooked.',
      'Serve with extra lemon.'
    ],
    prepTime: '8 mins',
    cookTime: '15 mins',
    servings: 1,
    calories: 210,
    tags: ['chicken', 'lunch', 'focus'],
    difficulty: 'Easy',
    mood: 'focused',
    nutritionAnalysis: 'Lean protein plus herbs.',
    cookingTips: ['Rest chicken before slicing.']
  }
];
