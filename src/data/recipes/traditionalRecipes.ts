
import { Recipe } from '@/types/recipe';

export const traditionalRecipes: Recipe[] = [
  {
    id: 'traditional-french-bouillabaisse',
    name: 'French Bouillabaisse',
    description: 'Traditional Provençal fish stew with saffron and fresh herbs.',
    ingredients: [
      'White fish',
      'Shrimp',
      'Tomato',
      'Saffron',
      'Leek',
      'Garlic',
      'Fennel'
    ],
    instructions: [
      'Simmer seafood with herbs and tomato.',
      'Add saffron for depth.',
      'Serve with crusty bread.'
    ],
    prepTime: '20 mins',
    cookTime: '45 mins',
    servings: 3,
    calories: 350,
    tags: ['french', 'stew', 'traditional'],
    difficulty: 'Medium',
    mood: 'traditional',
    image: 'https://images.unsplash.com/photo-1588195001284-2b1abe8cadc4?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Classic French comfort food.',
    cookingTips: ['Use diverse seafood.']
  },
  {
    id: 'traditional-italian-minestrone',
    name: 'Italian Minestrone',
    description: 'Vegetable and bean soup cooked in a savory tomato broth.',
    ingredients: [
      'Beans',
      'Zucchini',
      'Tomato',
      'Pasta',
      'Carrots',
      'Celery',
      'Onion'
    ],
    instructions: [
      'Sauté veggies, add stock and beans.',
      'Simmer, add pasta and cook until tender.',
      'Season and serve.'
    ],
    prepTime: '10 mins',
    cookTime: '30 mins',
    servings: 2,
    calories: 210,
    tags: ['italian', 'soup', 'traditional'],
    difficulty: 'Easy',
    mood: 'traditional',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Nutritious and filling.',
    cookingTips: ['Use seasonal veggies.']
  },
  {
    id: 'traditional-indian-dal-tadka',
    name: 'Indian Dal Tadka',
    description: 'Hearty lentil stew with tomatoes, onion, and Indian spices.',
    ingredients: [
      'Yellow lentils',
      'Tomato',
      'Onion',
      'Garlic',
      'Cumin',
      'Mustard seeds',
      'Ghee'
    ],
    instructions: [
      'Cook lentils, sauté aromatics and spices.',
      'Combine everything, simmer, and serve hot.',
      'Garnish with cilantro.'
    ],
    prepTime: '10 mins',
    cookTime: '30 mins',
    servings: 3,
    calories: 220,
    tags: ['indian', 'dal', 'traditional'],
    difficulty: 'Easy',
    mood: 'traditional',
    image: 'https://images.unsplash.com/photo-1631292784640-2b24be416617?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Wholesome and authentic.',
    cookingTips: ['Temper spices for real flavor.']
  }
];
