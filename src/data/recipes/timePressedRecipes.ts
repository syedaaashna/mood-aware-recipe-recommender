
import { Recipe } from '@/types/recipe';

export const timePressedRecipes: Recipe[] = [
  {
    id: 'time-pressed-egg-fried-rice',
    name: 'Chinese Egg Fried Rice',
    description: 'Quick stir-fried rice with eggs, vegetables, and soy sauce.',
    ingredients: [
      'Cooked rice',
      'Eggs',
      'Green onions',
      'Peas',
      'Carrots',
      'Soy sauce',
      'Oil'
    ],
    instructions: [
      'Heat oil in a wok, scramble eggs.',
      'Add vegetables and cooked rice.',
      'Stir-fry and season with soy sauce.'
    ],
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 2,
    calories: 300,
    tags: ['chinese', 'fried rice', 'quick'],
    difficulty: 'Easy',
    mood: 'time pressed',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Fast and filling.',
    cookingTips: ['Use leftover rice for the best texture.']
  },
  {
    id: 'time-pressed-indian-masala-omelette',
    name: 'Masala Omelette',
    description: 'Spiced Indian omelette with onions, tomatoes, and cilantro.',
    ingredients: [
      'Eggs',
      'Tomato',
      'Onion',
      'Cilantro',
      'Green chili',
      'Spices'
    ],
    instructions: [
      'Beat eggs with chopped veg and spices.',
      'Pour into a hot pan.',
      'Cook until set and serve hot.'
    ],
    prepTime: '4 mins',
    cookTime: '6 mins',
    servings: 1,
    calories: 180,
    tags: ['indian', 'omelette', 'fast'],
    difficulty: 'Easy',
    mood: 'time pressed',
    image: 'https://images.unsplash.com/photo-1600326145405-b8c7285d4042?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High protein snack.',
    cookingTips: ['Serve with bread for a meal.']
  },
  {
    id: 'time-pressed-european-caprese-toast',
    name: 'Caprese Toast',
    description: 'Toasted bread topped with fresh mozzarella, tomatoes, basil, and olive oil.',
    ingredients: [
      'Bread slices',
      'Mozzarella cheese',
      'Tomatoes',
      'Basil leaves',
      'Olive oil',
      'Salt and pepper'
    ],
    instructions: [
      'Toast bread.',
      'Top with mozzarella and tomato slices.',
      'Add basil, season, and drizzle with olive oil.'
    ],
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 210,
    tags: ['european', 'toast', 'quick'],
    difficulty: 'Easy',
    mood: 'time pressed',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Light and quick.',
    cookingTips: ['Best with ripe tomatoes.']
  }
];
