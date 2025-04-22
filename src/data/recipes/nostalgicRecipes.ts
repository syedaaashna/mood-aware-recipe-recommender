
import { Recipe } from '@/types/recipe';

export const nostalgicRecipes: Recipe[] = [
  {
    id: 'nostalgic-grilled-cheese',
    name: 'Classic Grilled Cheese Sandwich',
    description: 'Golden-toasted bread with melty cheese—a nostalgic childhood favorite.',
    ingredients: [
      '2 slices white bread',
      '2 slices cheddar cheese',
      '1 tbsp butter'
    ],
    instructions: [
      'Butter one side of each bread slice.',
      'Place cheese between bread, buttered-sides out.',
      'Grill in a skillet on medium until golden, flipping once.',
      'Slice and enjoy warm.'
    ],
    prepTime: '2 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 320,
    tags: ['sandwich', 'cheese', 'comfort'],
    difficulty: 'Easy',
    mood: 'nostalgic',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Good source of calcium.',
    cookingTips: ['Use thick bread for extra crunch.']
  },
  {
    id: 'nostalgic-chicken-noodle-soup',
    name: 'Chicken Noodle Soup',
    description: 'Homemade chicken noodle soup—just like grandma used to make.',
    ingredients: [
      '2 chicken thighs',
      '1 carrot, diced',
      '1 stalk celery, diced',
      '1 small onion',
      '4 cups chicken broth',
      '1 cup egg noodles',
      'Salt and pepper'
    ],
    instructions: [
      'Bring broth, chicken, and veggies to a boil.',
      'Simmer until chicken is cooked, remove and shred.',
      'Return chicken and add noodles; cook until tender.',
      'Season to taste and serve hot.'
    ],
    prepTime: '10 mins',
    cookTime: '30 mins',
    servings: 2,
    calories: 220,
    tags: ['soup', 'classic', 'comfort'],
    difficulty: 'Easy',
    mood: 'nostalgic',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Comforting and hydrating.',
    cookingTips: ['Add fresh parsley before serving.']
  }
];
