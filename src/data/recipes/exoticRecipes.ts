
import { Recipe } from '@/types/recipe';

export const exoticRecipes: Recipe[] = [
  {
    id: 'exotic-mango-sticky-rice',
    name: 'Mango Sticky Rice',
    description: 'Thai dessert of sweet sticky rice and ripe mango.',
    ingredients: [
      'Glutinous rice',
      'Coconut milk',
      'Sugar',
      'Ripe mango',
      'Sesame seeds'
    ],
    instructions: [
      'Cook sticky rice.',
      'Heat coconut milk with sugar.',
      'Combine rice and coconut mixture.',
      'Serve with mango slices and sesame seeds.'
    ],
    prepTime: '10 mins',
    cookTime: '30 mins',
    servings: 2,
    calories: 250,
    tags: ['thai', 'dessert', 'exotic'],
    difficulty: 'Medium',
    mood: 'exotic',
    image: 'https://images.unsplash.com/photo-1563262924-641a8b3d397f?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Tropical sweet treat.',
    cookingTips: ['Use ripe mango only.']
  },
  {
    id: 'exotic-dragon-fruit-smoothie',
    name: 'Dragon Fruit Smoothie',
    description: 'A vibrant smoothie featuring dragon fruit and banana.',
    ingredients: [
      'Dragon fruit',
      'Banana',
      'Orange juice',
      'Yogurt',
      'Ice cubes'
    ],
    instructions: [
      'Chop dragon fruit and banana.',
      'Blend with orange juice, yogurt, and ice.',
      'Pour into glass and serve chilled.'
    ],
    prepTime: '4 mins',
    cookTime: '0 mins',
    servings: 1,
    calories: 110,
    tags: ['smoothie', 'drink', 'exotic'],
    difficulty: 'Easy',
    mood: 'exotic',
    image: 'https://images.unsplash.com/photo-1601493700625-9185417898cf?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in vitamin C.',
    cookingTips: ['Use frozen fruit for thicker consistency.']
  }
];
