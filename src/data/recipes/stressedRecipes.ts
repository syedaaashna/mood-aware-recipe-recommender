
import { Recipe } from '@/types/recipe';

export const stressedRecipes: Recipe[] = [
  {
    id: 'stressed-british-tea-and-scones',
    name: 'British Tea & Scones',
    description: 'Warm homemade scones served with jam and clotted cream, and cup of black tea.',
    ingredients: [
      'Self-raising flour',
      'Butter',
      'Milk',
      'Sugar',
      'Jam',
      'Clotted cream',
      'Black tea'
    ],
    instructions: [
      'Mix flour, butter, sugar, and milk, shape into rounds.',
      'Bake until golden, serve with jam and cream.',
      'Brew tea and enjoy together.'
    ],
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 2,
    calories: 310,
    tags: ['british', 'tea', 'scones'],
    difficulty: 'Medium',
    mood: 'stressed',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Carbs for calm.',
    cookingTips: ['Serve scones fresh and warm.']
  },
  {
    id: 'stressed-thai-mango-sticky-rice',
    name: 'Thai Mango Sticky Rice',
    description: 'Sweet sticky rice with coconut milk and fresh mango for comfort.',
    ingredients: [
      'Glutinous rice',
      'Coconut milk',
      'Sugar',
      'Mango',
      'Salt'
    ],
    instructions: [
      'Cook sticky rice and add coconut milk mixture.',
      'Serve with sliced mango.',
      'Sprinkle with sesame seeds if desired.'
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 290,
    tags: ['thai', 'dessert', 'comfort'],
    difficulty: 'Easy',
    mood: 'stressed',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Gentle sugars for a stressed brain.',
    cookingTips: ['Use ripe mangoes for best results.']
  },
  {
    id: 'stressed-vietnamese-pho',
    name: 'Vietnamese Pho',
    description: 'Aromatic noodle soup with beef, fresh herbs, and rice noodles.',
    ingredients: [
      'Beef broth',
      'Rice noodles',
      'Beef slices',
      'Bean sprouts',
      'Fresh herbs',
      'Onion'
    ],
    instructions: [
      'Simmer broth with spices.',
      'Add noodles and meat, serve with fresh herbs and sprouts.',
      'Enjoy hot.'
    ],
    prepTime: '15 mins',
    cookTime: '40 mins',
    servings: 2,
    calories: 400,
    tags: ['vietnamese', 'soup', 'noodle'],
    difficulty: 'Medium',
    mood: 'stressed',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Warm broth is relaxing.',
    cookingTips: ['Add chili for slight heat.']
  }
];
