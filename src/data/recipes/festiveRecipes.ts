
import { Recipe } from '@/types/recipe';

export const festiveRecipes: Recipe[] = [
  {
    id: 'festive-holiday-turkey',
    name: 'Holiday Roast Turkey',
    description: 'Classic festive turkey with herbs and lemon.',
    ingredients: [
      'Whole turkey',
      'Butter',
      'Fresh thyme',
      'Garlic',
      'Lemon',
      'Chicken broth'
    ],
    instructions: [
      'Rub turkey with butter, herbs, and garlic.',
      'Stuff with lemon and roast in oven with broth.',
      'Roast until golden and cooked through.',
      'Rest before carving.'
    ],
    prepTime: '20 mins',
    cookTime: '3 hours',
    servings: 6,
    calories: 380,
    tags: ['holiday', 'roast', 'festive'],
    difficulty: 'Hard',
    mood: 'festive',
    image: 'https://images.unsplash.com/photo-1576072115075-5cd5dc54608a?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in protein and tradition.',
    cookingTips: ['Rest turkey 20 mins before slicing.']
  },
  {
    id: 'festive-mulled-wine',
    name: 'Classic Mulled Wine',
    description: 'Warm spiced wine, perfect for holiday gatherings.',
    ingredients: [
      '1 bottle red wine',
      '1 orange',
      '2 cinnamon sticks',
      '4 cloves',
      '2 star anise',
      '1/4 cup honey'
    ],
    instructions: [
      'Combine wine, sliced orange, and spices in a saucepan.',
      'Heat gently without boiling.',
      'Add honey, stir, and simmer 10 minutes.',
      'Serve warm.'
    ],
    prepTime: '5 mins',
    cookTime: '15 mins',
    servings: 4,
    calories: 140,
    tags: ['holiday', 'drink', 'festive'],
    difficulty: 'Easy',
    mood: 'festive',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'May help you relax at a party!',
    cookingTips: ['Don\'t let wine boil.']
  }
];
