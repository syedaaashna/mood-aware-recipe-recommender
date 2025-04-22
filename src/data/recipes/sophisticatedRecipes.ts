
import { Recipe } from '@/types/recipe';

export const sophisticatedRecipes: Recipe[] = [
  {
    id: 'sophisticated-french-coq-au-vin',
    name: 'French Coq au Vin',
    description: 'Slow-cooked chicken with red wine, mushrooms, and pearl onions.',
    ingredients: [
      'Chicken',
      'Red wine',
      'Mushrooms',
      'Pearl onions',
      'Carrots',
      'Bacon',
      'Thyme'
    ],
    instructions: [
      'Brown chicken and bacon.',
      'Simmer in red wine with veg and herbs.',
      'Cook until chicken is tender.'
    ],
    prepTime: '20 mins',
    cookTime: '90 mins',
    servings: 3,
    calories: 400,
    tags: ['french', 'stew', 'sophisticated'],
    difficulty: 'Hard',
    mood: 'sophisticated',
    image: 'https://images.unsplash.com/photo-1605122596411-f5ea71a1d6a0?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Decadent and complex.',
    cookingTips: ['Use good red wine.']
  },
  {
    id: 'sophisticated-japanese-sushi',
    name: 'Assorted Japanese Sushi',
    description: 'Elegant sushi assortment; nigiri and maki with fresh fish.',
    ingredients: [
      'Sushi rice',
      'Nori',
      'Raw fish',
      'Soy sauce',
      'Wasabi',
      'Pickled ginger'
    ],
    instructions: [
      'Prepare sushi rice, slice fish.',
      'Form nigiri and rolls.',
      'Serve with condiments.'
    ],
    prepTime: '35 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 220,
    tags: ['japanese', 'sushi', 'sophisticated'],
    difficulty: 'Hard',
    mood: 'sophisticated',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Fresh and sophisticated.',
    cookingTips: ['Work with very fresh fish.']
  },
  {
    id: 'sophisticated-british-beef-roast',
    name: 'Classic British Beef Roast',
    description: 'Prime roast beef cooked medium rare and served with Yorkshire pudding.',
    ingredients: [
      'Beef roast',
      'Salt & pepper',
      'Yorkshire pudding mix',
      'Horseradish',
      'Potatoes',
      'Carrots'
    ],
    instructions: [
      'Season and roast beef, make Yorkshire pudding.',
      'Roast veg as sides.',
      'Slice beef and serve attractively.'
    ],
    prepTime: '25 mins',
    cookTime: '70 mins',
    servings: 4,
    calories: 470,
    tags: ['british', 'roast', 'sophisticated'],
    difficulty: 'Medium',
    mood: 'sophisticated',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Classic and refined meal.',
    cookingTips: ['Rest beef before slicing.']
  }
];
