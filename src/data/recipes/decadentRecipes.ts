
import { Recipe } from '@/types/recipe';

export const decadentRecipes: Recipe[] = [
  {
    id: 'decadent-french-chocolate-mousse',
    name: 'French Chocolate Mousse',
    description: 'Luxurious, airy chocolate mousse made with bittersweet chocolate.',
    ingredients: [
      'Bittersweet chocolate',
      'Eggs',
      'Cream',
      'Sugar'
    ],
    instructions: [
      'Melt chocolate and mix with yolks.',
      'Fold in whipped whites and cream.',
      'Chill before serving.'
    ],
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 290,
    tags: ['french', 'chocolate', 'dessert'],
    difficulty: 'Medium',
    mood: 'decadent',
    image: 'https://images.unsplash.com/photo-1541783245831-57afb5bca561?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Chocolate heaven.',
    cookingTips: ['Use high quality chocolate.']
  },
  {
    id: 'decadent-american-sticky-toffee-pudding',
    name: 'Sticky Toffee Pudding',
    description: 'British-style moist cake soaked in toffee sauce.',
    ingredients: [
      'Dates',
      'Brown sugar',
      'Eggs',
      'Flour',
      'Butter',
      'Cream'
    ],
    instructions: [
      'Bake cake with dates.',
      'Pour over warm toffee sauce.',
      'Serve with vanilla ice cream.'
    ],
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 3,
    calories: 420,
    tags: ['british', 'dessert', 'decadent'],
    difficulty: 'Medium',
    mood: 'decadent',
    image: 'https://images.unsplash.com/photo-1611329695518-1763fc775ce8?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Sticky, sweet comfort.',
    cookingTips: ['Serve warm for gooey effect.']
  },
  {
    id: 'decadent-italian-panna-cotta',
    name: 'Italian Panna Cotta',
    description: 'Silky custard dessert topped with fresh berries.',
    ingredients: [
      'Heavy cream',
      'Sugar',
      'Gelatin',
      'Vanilla',
      'Berries'
    ],
    instructions: [
      'Bloom gelatin, heat cream with sugar.',
      'Mix everything and chill.',
      'Top with berries to serve.'
    ],
    prepTime: '12 mins',
    cookTime: '10 mins',
    servings: 2,
    calories: 280,
    tags: ['italian', 'dessert', 'panna cotta'],
    difficulty: 'Easy',
    mood: 'decadent',
    image: 'https://images.unsplash.com/photo-1579523651250-2a0bb822b2ce?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich and fruity.',
    cookingTips: ['Chill until fully set.']
  }
];
