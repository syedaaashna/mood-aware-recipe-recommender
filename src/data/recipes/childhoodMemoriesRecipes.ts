
import { Recipe } from '@/types/recipe';

export const childhoodMemoriesRecipes: Recipe[] = [
  {
    id: 'childhood-american-mac-and-cheese',
    name: 'Classic Mac and Cheese',
    description: 'Creamy baked macaroni with cheddar cheese topping.',
    ingredients: [
      'Macaroni',
      'Cheddar cheese',
      'Milk',
      'Butter',
      'Breadcrumbs'
    ],
    instructions: [
      'Cook pasta, make cheese sauce.',
      'Mix together, top with breadcrumbs.',
      'Bake until golden.'
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 410,
    tags: ['american', 'childhood', 'mac'],
    difficulty: 'Easy',
    mood: 'childhood memories',
    nutritionAnalysis: 'Cheesy memory lane.',
    cookingTips: ['Use sharp cheddar for flavor.'],
    image: 'https://images.unsplash.com/photo-1612152328178-91a1f8161fb3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'childhood-indian-bread-butter-jam',
    name: 'Bread Butter Jam',
    description: 'Simple Indian childhood treat: warm toast with butter and fruit jam.',
    ingredients: [
      'Bread',
      'Butter',
      'Fruit jam'
    ],
    instructions: [
      'Toast bread slices.',
      'Spread with butter and your favorite jam.',
      'Enjoy warm.'
    ],
    prepTime: '2 mins',
    cookTime: '2 mins',
    servings: 1,
    calories: 190,
    tags: ['indian', 'snack', 'childhood'],
    difficulty: 'Easy',
    mood: 'childhood memories',
    nutritionAnalysis: 'Sugar rush nostalgia.',
    cookingTips: ['Use homemade jam if possible.'],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'childhood-thai-banana-pancakes',
    name: 'Thai Banana Pancakes',
    description: 'Fluffy pancakes with ripe bananas, a favorite Thai street snack for kids.',
    ingredients: [
      'Flour',
      'Egg',
      'Milk',
      'Ripe bananas',
      'Sugar',
      'Butter'
    ],
    instructions: [
      'Mix batter and add mashed bananas.',
      'Cook pancakes on skillet.',
      'Serve with honey or sugar.'
    ],
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 2,
    calories: 310,
    tags: ['thai', 'pancakes', 'childhood'],
    difficulty: 'Easy',
    mood: 'childhood memories',
    nutritionAnalysis: 'Sweet childhood memories.',
    cookingTips: ['Use ripe banana.'],
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=80'
  }
];
