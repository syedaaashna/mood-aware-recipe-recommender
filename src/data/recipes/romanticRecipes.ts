
import { Recipe } from '@/types/recipe';

export const romanticRecipes: Recipe[] = [
  {
    id: 'romantic-chocolate-fondue',
    name: 'Chocolate Fondue',
    description: 'A classic romantic dessert of warm melted chocolate with fruit for dipping.',
    ingredients: [
      '200g dark chocolate',
      '1/2 cup heavy cream',
      'Strawberries',
      'Bananas',
      'Marshmallows',
      'Pound cake cubes'
    ],
    instructions: [
      'Melt chocolate with cream in a saucepan.',
      'Pour into fondue pot to keep warm.',
      'Dip fruit and cake into chocolate.',
      'Enjoy together.'
    ],
    prepTime: '10 mins',
    cookTime: '5 mins',
    servings: 2,
    calories: 420,
    tags: ['dessert', 'romantic', 'fondue'],
    difficulty: 'Easy',
    mood: 'romantic',
    nutritionAnalysis: 'Indulgent treat.',
    cookingTips: ['Use good quality chocolate.']
  },
  {
    id: 'romantic-salmon-piccata',
    name: 'Salmon Piccata',
    description: 'Elegant pan-seared salmon with lemon caper butter sauce.',
    ingredients: [
      '2 salmon fillets',
      '2 tbsp butter',
      '1 lemon',
      '2 tbsp capers',
      'Salt and pepper',
      'Olive oil'
    ],
    instructions: [
      'Season salmon and sear in a skillet.',
      'Remove salmon, add butter, lemon juice, and capers to pan.',
      'Drizzle sauce over salmon and serve.',
      'Garnish with lemon slices.'
    ],
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 2,
    calories: 330,
    tags: ['dinner', 'seafood', 'romantic'],
    difficulty: 'Easy',
    mood: 'romantic',
    nutritionAnalysis: 'Rich in omega 3.',
    cookingTips: ['Do not overcook salmon.']
  }
];
