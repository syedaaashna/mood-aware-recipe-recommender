
import { Recipe } from '@/types/recipe';

export const seasonalRecipes: Recipe[] = [
  {
    id: 'seasonal-french-ratatouille',
    name: 'French Ratatouille',
    description: 'French stewed vegetable dish with zucchini, eggplant, tomato, and herbs.',
    ingredients: [
      'Eggplant',
      'Zucchini',
      'Bell pepper',
      'Tomato',
      'Olive oil',
      'Herbs'
    ],
    instructions: [
      'Chop and sauté vegetables.',
      'Simmer with olive oil and herbs.',
      'Serve warm or room temp.'
    ],
    prepTime: '10 mins',
    cookTime: '30 mins',
    servings: 2,
    calories: 170,
    tags: ['french', 'vegetarian', 'seasonal'],
    difficulty: 'Medium',
    mood: 'seasonal',
    image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Vibrant seasonal veggies.',
    cookingTips: ['Use ripe local produce.']
  },
  {
    id: 'seasonal-japanese-cherry-blossom-rice',
    name: 'Japanese Cherry Blossom Rice',
    description: 'Delicate pink rice dish using sakura (cherry) blossoms.',
    ingredients: [
      'Rice',
      'Salted cherry blossoms',
      'Rice vinegar',
      'Sesame seeds'
    ],
    instructions: [
      'Cook rice, add soaked blossoms and vinegar.',
      'Mix gently and shape into balls.',
      'Sprinkle with sesame.'
    ],
    prepTime: '8 mins',
    cookTime: '15 mins',
    servings: 2,
    calories: 170,
    tags: ['japanese', 'seasonal', 'rice'],
    difficulty: 'Medium',
    mood: 'seasonal',
    image: 'https://images.unsplash.com/photo-1522672742863-b423e0358006?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Floral and fresh.',
    cookingTips: ['Use pickled blossoms for color.']
  },
  {
    id: 'seasonal-american-pumpkin-pie',
    name: 'American Pumpkin Pie',
    description: 'Classic autumn dessert with pumpkin custard filling and pie crust.',
    ingredients: [
      'Pumpkin puree',
      'Eggs',
      'Sugar',
      'Spices',
      'Pie crust'
    ],
    instructions: [
      'Mix all filling ingredients.',
      'Pour into crust and bake.',
      'Cool before slicing.'
    ],
    prepTime: '10 mins',
    cookTime: '40 mins',
    servings: 6,
    calories: 320,
    tags: ['american', 'pie', 'seasonal'],
    difficulty: 'Easy',
    mood: 'seasonal',
    image: 'https://images.unsplash.com/photo-1509461399763-ae67a981a8b3?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich and festive.',
    cookingTips: ['Let cool fully for best slices.']
  }
];
