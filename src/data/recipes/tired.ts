
import { Recipe } from '@/types/recipe';

export const tiredRecipes: Recipe[] = [
  {
    id: 'tired-energy-bites',
    name: 'No-Bake Energy Bites',
    description: 'Quick and easy energy bites perfect for an afternoon pick-me-up.',
    ingredients: [
      'Rolled oats',
      'Peanut butter',
      'Honey',
      'Dark chocolate chips',
      'Chia seeds',
      'Flax seeds'
    ],
    instructions: [
      'Mix oats, peanut butter, and honey.',
      'Add seeds and chocolate chips.',
      'Roll into balls.',
      'Refrigerate until firm.',
      'Store in airtight container.',
      'Enjoy when needed.'
    ],
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 12,
    calories: 120,
    tags: ['snack', 'energy', 'no-bake'],
    difficulty: 'Easy',
    mood: 'tired',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add espresso powder for extra energy boost.',
    nutritionAnalysis: 'Good source of protein and healthy fats.',
    cookingTips: ['Use natural peanut butter', 'Adjust honey to taste']
  },
  {
    id: 'tired-green-smoothie',
    name: 'Energizing Green Smoothie',
    description: 'A nutrient-packed smoothie to boost energy levels.',
    ingredients: [
      'Spinach',
      'Banana',
      'Green apple',
      'Ginger',
      'Coconut water',
      'Lime juice'
    ],
    instructions: [
      'Blend spinach and coconut water.',
      'Add remaining ingredients.',
      'Blend until smooth.',
      'Adjust sweetness.',
      'Serve immediately.',
      'Enjoy while fresh.'
    ],
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 150,
    tags: ['beverage', 'healthy', 'energizing'],
    difficulty: 'Easy',
    mood: 'tired',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add matcha powder for sustained energy.',
    nutritionAnalysis: 'High in vitamins and minerals.',
    cookingTips: ['Use frozen banana for thickness', 'Add ice if desired']
  },
  {
    id: 'tired-ramen',
    name: 'Quick Ramen Bowl',
    description: 'Easy and comforting Japanese-style ramen with soft-boiled egg',
    ingredients: [
      'Ramen noodles',
      'Chicken broth',
      'Soft-boiled egg',
      'Green onions',
      'Nori sheets',
      'Corn',
      'Chashu pork'
    ],
    instructions: [
      'Boil eggs',
      'Prepare broth',
      'Cook noodles',
      'Assemble bowl',
      'Add toppings',
      'Serve hot'
    ],
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 480,
    tags: ['japanese', 'noodles', 'soup', 'comfort'],
    difficulty: 'Easy',
    mood: 'tired',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Good balance of carbs and protein',
    cookingTips: ['Prep toppings while water boils', "Don't overcook noodles"]
  },
  {
    id: 'tired-shakshuka',
    name: 'Easy Shakshuka',
    description: 'Middle Eastern eggs poached in spiced tomato sauce',
    ingredients: [
      'Eggs',
      'Tomatoes',
      'Bell peppers',
      'Onions',
      'Garlic',
      'Cumin',
      'Paprika'
    ],
    instructions: [
      'Sauté vegetables',
      'Add tomatoes and spices',
      'Create wells for eggs',
      'Poach eggs in sauce',
      'Garnish with herbs',
      'Serve with bread'
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 320,
    tags: ['middle eastern', 'breakfast', 'eggs', 'one-pan'],
    difficulty: 'Easy',
    mood: 'tired',
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in protein and vitamins',
    cookingTips: ['Keep sauce simmering', 'Watch egg doneness']
  }
];
