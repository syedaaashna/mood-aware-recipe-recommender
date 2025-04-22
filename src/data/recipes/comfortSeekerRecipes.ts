
import { Recipe } from '@/types/recipe';

export const comfortSeekerRecipes: Recipe[] = [
  {
    id: 'comfort-seeker-american-meatloaf',
    name: 'Classic American Meatloaf',
    description: 'Moist, tender beef loaf glazed with sweet tomato sauce.',
    ingredients: [
      'Ground beef',
      'Breadcrumbs',
      'Egg',
      'Onion',
      'Tomato sauce',
      'Spices'
    ],
    instructions: [
      'Mix all ingredients and form a loaf.',
      'Bake and glaze with sauce.',
      'Slice and serve warm.'
    ],
    prepTime: '15 mins',
    cookTime: '45 mins',
    servings: 3,
    calories: 420,
    tags: ['american', 'meatloaf', 'comfort'],
    difficulty: 'Easy',
    mood: 'comfort seeker',
    image: 'https://images.unsplash.com/photo-1600891963935-9e9544aa16a0?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Ultimate home comfort.',
    cookingTips: ['Rest before slicing.']
  },
  {
    id: 'comfort-seeker-british-bangers-mash',
    name: 'British Bangers & Mash',
    description: 'Sausages on creamy mashed potatoes with onion gravy.',
    ingredients: [
      'Pork sausages',
      'Potatoes',
      'Butter',
      'Milk',
      'Onion',
      'Beef stock'
    ],
    instructions: [
      'Boil and mash potatoes.',
      'Pan-fry sausages.',
      'Simmer onion gravy and serve all together.'
    ],
    prepTime: '10 mins',
    cookTime: '30 mins',
    servings: 2,
    calories: 430,
    tags: ['british', 'comfort', 'classic'],
    difficulty: 'Easy',
    mood: 'comfort seeker',
    image: 'https://images.unsplash.com/photo-1596380862374-3e81098cf3cf?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Starchy and hearty.',
    cookingTips: ['Use quality sausages.']
  },
  {
    id: 'comfort-seeker-french-gratin-dauphinois',
    name: 'Gratin Dauphinois',
    description: 'Creamy French potato bake with garlic and cheese.',
    ingredients: [
      'Potatoes',
      'Cream',
      'Butter',
      'Garlic',
      'Gruyère cheese',
      'Nutmeg'
    ],
    instructions: [
      'Slice potatoes, layer with cheese and cream.',
      'Bake until bubbly and golden.',
      'Rest before serving.'
    ],
    prepTime: '15 mins',
    cookTime: '40 mins',
    servings: 3,
    calories: 380,
    tags: ['french', 'gratin', 'comfort'],
    difficulty: 'Medium',
    mood: 'comfort seeker',
    image: 'https://images.unsplash.com/photo-1599320209623-d46337effea5?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Creamy and rich.',
    cookingTips: ['Use starchy potatoes.']
  }
];
