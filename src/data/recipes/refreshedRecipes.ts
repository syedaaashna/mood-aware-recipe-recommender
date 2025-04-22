
import { Recipe } from '@/types/recipe';

export const refreshedRecipes: Recipe[] = [
  {
    id: 'refreshed-vietnamese-spring-rolls',
    name: 'Vietnamese Spring Rolls',
    description: 'Light and refreshing rice paper rolls filled with fresh vegetables, shrimp, and herbs.',
    ingredients: [
      'Rice paper',
      'Shrimp',
      'Rice vermicelli',
      'Lettuce',
      'Mint',
      'Carrot',
      'Cucumber'
    ],
    instructions: [
      'Soak rice paper sheets until soft.',
      'Lay flat and fill with lettuce, shrimp, vermicelli, and herbs.',
      'Roll tightly and serve with dipping sauce.'
    ],
    prepTime: '20 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 180,
    tags: ['vietnamese', 'fresh', 'spring rolls'],
    difficulty: 'Easy',
    mood: 'refreshed',
    image: 'https://images.unsplash.com/photo-1562967915-92ae0c400478?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Low calorie, fresh.',
    cookingTips: ['Keep rice paper moist but not soggy.']
  },
  {
    id: 'refreshed-greek-salad',
    name: 'Greek Salad',
    description: 'Crisp salad with tomatoes, cucumbers, feta cheese, olives, and a lemon-oregano vinaigrette.',
    ingredients: [
      'Tomatoes',
      'Cucumbers',
      'Red onion',
      'Feta cheese',
      'Kalamata olives',
      'Olive oil',
      'Lemon juice',
      'Oregano'
    ],
    instructions: [
      'Chop vegetables and combine in a bowl.',
      'Add olives and feta.',
      'Drizzle with olive oil, lemon juice, and sprinkle oregano.'
    ],
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 200,
    tags: ['greek', 'salad', 'fresh'],
    difficulty: 'Easy',
    mood: 'refreshed',
    image: 'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in vitamins.',
    cookingTips: ['Use high-quality feta and olives.']
  },
  {
    id: 'refreshed-thai-green-papaya-salad',
    name: 'Thai Green Papaya Salad (Som Tum)',
    description: 'Zesty, crunchy salad with green papaya, tomatoes, peanuts, and chili.',
    ingredients: [
      'Green papaya',
      'Cherry tomatoes',
      'Green beans',
      'Peanuts',
      'Lime juice',
      'Fish sauce',
      'Chili'
    ],
    instructions: [
      'Shred green papaya and slice vegetables.',
      'Mix with lime juice, fish sauce, and crushed peanuts.',
      'Toss in chili for desired spice.'
    ],
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 130,
    tags: ['thai', 'salad', 'refreshing'],
    difficulty: 'Medium',
    mood: 'refreshed',
    image: 'https://images.unsplash.com/photo-1654267288787-a571e933b8d2?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in fiber and vitamins.',
    cookingTips: ['Use unripened papaya for best texture.']
  }
];
