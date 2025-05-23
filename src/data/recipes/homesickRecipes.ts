
import { Recipe } from '@/types/recipe';

export const homesickRecipes: Recipe[] = [
  {
    id: 'homesick-chinese-congee',
    name: 'Chinese Rice Congee',
    description: 'Comforting rice porridge with ginger, chicken, and green onions.',
    ingredients: [
      'Rice',
      'Chicken breast',
      'Ginger',
      'Green onion',
      'Soy sauce',
      'Water'
    ],
    instructions: [
      'Simmer rice and chicken with ginger until creamy.',
      'Shred chicken.',
      'Top with green onions and serve hot.'
    ],
    prepTime: '10 mins',
    cookTime: '45 mins',
    servings: 2,
    calories: 220,
    tags: ['chinese', 'porridge', 'comfort'],
    difficulty: 'Easy',
    mood: 'homesick',
    image: 'https://images.unsplash.com/photo-1626548276103-b17dabef6344?w=800&auto=format&fit=crop&q=80',
    nutritionAnalysis: 'Soothing for the soul.',
    cookingTips: ['Add more water for a silkier porridge.']
  },
  {
    id: 'homesick-british-shepherds-pie',
    name: "British Shepherd's Pie",
    description: 'Classic casserole with minced meat and mashed potato topping.',
    ingredients: [
      'Ground lamb/beef',
      'Carrots',
      'Peas',
      'Onion',
      'Potatoes',
      'Butter',
      'Milk'
    ],
    instructions: [
      'Cook meat and veg, cover with mashed potato.',
      'Bake until golden.',
      'Serve hot.'
    ],
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 3,
    calories: 460,
    tags: ['british', 'pie', 'classic'],
    difficulty: 'Medium',
    mood: 'homesick',
    image: 'https://images.unsplash.com/photo-1585672840563-f2af2ced55c9?w=800&auto=format&fit=crop&q=80',
    nutritionAnalysis: 'Warm, starchy comfort.',
    cookingTips: ['Use lamb for authenticity.']
  },
  {
    id: 'homesick-american-chicken-noodle-soup',
    name: 'American Chicken Noodle Soup',
    description: 'Cozy soup with chicken, noodles, carrots, celery, and broth.',
    ingredients: [
      'Chicken',
      'Egg noodles',
      'Carrots',
      'Celery',
      'Onion',
      'Chicken broth'
    ],
    instructions: [
      'Simmer chicken and veg in broth.',
      'Add noodles and cook until tender.',
      'Serve warm.'
    ],
    prepTime: '10 mins',
    cookTime: '30 mins',
    servings: 2,
    calories: 220,
    tags: ['american', 'soup', 'comfort'],
    difficulty: 'Easy',
    mood: 'homesick',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
    nutritionAnalysis: 'Classic home remedy.',
    cookingTips: ['Add herbs for flavor.']
  }
];
