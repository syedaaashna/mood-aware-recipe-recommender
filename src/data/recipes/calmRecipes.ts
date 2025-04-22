
import { Recipe } from '@/types/recipe';

// Calm mood - 3 recipes, each from a different cuisine
export const calmRecipes: Recipe[] = [
  {
    id: 'calm-japanese-soup',
    name: 'Soothing Miso Soup',
    description: 'Gentle Japanese miso soup with tofu and seaweed.',
    ingredients: [
      'Miso paste',
      'Silken tofu',
      'Wakame seaweed',
      'Green onions',
      'Dashi broth'
    ],
    instructions: [
      'Heat dashi in a pot.',
      'Stir in miso paste.',
      'Add tofu and wakame.',
      'Simmer gently.',
      'Top with green onions and serve.'
    ],
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 2,
    calories: 60,
    tags: ['japanese', 'soup', 'calm'],
    difficulty: 'Easy',
    mood: 'calm',
    nutritionAnalysis: 'Low calorie, gentle and soothing.',
    cookingTips: ['Don\'t boil miso to preserve flavor.']
  },
  {
    id: 'calm-british-oatmeal',
    name: 'Creamy Porridge',
    description: 'Traditional British oats with honey and banana.',
    ingredients: [
      'Rolled oats',
      'Milk',
      'Banana',
      'Honey',
      'Cinnamon'
    ],
    instructions: [
      'Simmer oats and milk together.',
      'Stir until creamy.',
      'Slice banana on top.',
      'Drizzle with honey and sprinkle cinnamon.'
    ],
    prepTime: '3 mins',
    cookTime: '10 mins',
    servings: 1,
    calories: 210,
    tags: ['british', 'breakfast', 'calm'],
    difficulty: 'Easy',
    mood: 'calm',
    nutritionAnalysis: 'Warm, slow-release energy.',
    cookingTips: ['Use milk for extra creaminess.']
  },
  {
    id: 'calm-continental-salad',
    name: 'Simple Caprese Salad',
    description: 'Italian Caprese with ripe tomatoes, mozzarella and basil.',
    ingredients: [
      'Tomatoes',
      'Fresh mozzarella',
      'Basil leaves',
      'Olive oil',
      'Salt and pepper'
    ],
    instructions: [
      'Slice tomatoes and mozzarella.',
      'Arrange with basil leaves.',
      'Drizzle with olive oil.',
      'Season to taste.'
    ],
    prepTime: '6 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 180,
    tags: ['italian', 'salad', 'calm'],
    difficulty: 'Easy',
    mood: 'calm',
    nutritionAnalysis: 'Light, fresh, cooling.',
    cookingTips: ['Use ripe, in-season tomatoes.']
  }
];
