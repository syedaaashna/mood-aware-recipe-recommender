
import { Recipe } from '@/types/recipe';

export const sadRamenRecipe: Recipe = {
  id: 'sad-ramen',
  name: 'Comforting Miso Ramen',
  description: 'A warm, soothing bowl of ramen with rich miso broth',
  ingredients: [
    'Ramen noodles',
    'Miso paste',
    'Soft-boiled egg',
    'Chashu pork',
    'Green onions',
    'Nori',
    'Corn and bamboo shoots'
  ],
  instructions: [
    'Prepare miso broth',
    'Cook noodles separately',
    'Prepare toppings',
    'Assemble bowl with hot broth',
    'Add noodles and toppings',
    'Serve immediately'
  ],
  prepTime: '20 mins',
  cookTime: '30 mins',
  servings: 2,
  calories: 520,
  tags: ['japanese', 'soup', 'comfort', 'warming'],
  difficulty: 'Medium',
  mood: 'sad',
  image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&auto=format&fit=crop',
  nutritionAnalysis: 'Rich in protein and umami flavors',
  cookingTips: [
    'Don\'t overcook the noodles',
    'Keep broth hot',
    'Prepare toppings in advance'
  ]
};
