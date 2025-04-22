
import { Recipe } from '@/types/recipe';

export const indulgentRecipes: Recipe[] = [
  {
    id: 'indulgent-french-creme-brulee',
    name: 'French Crème Brûlée',
    description: 'Rich creamy custard topped with caramelized sugar.',
    ingredients: [
      'Egg yolks',
      'Heavy cream',
      'Sugar',
      'Vanilla bean'
    ],
    instructions: [
      'Whisk yolks, sugar, and cream.',
      'Bake in ramekins, chill.',
      'Caramelize sugar top before serving.'
    ],
    prepTime: '15 mins',
    cookTime: '35 mins',
    servings: 2,
    calories: 400,
    tags: ['french', 'dessert', 'indulgent'],
    difficulty: 'Medium',
    mood: 'indulgent',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich, creamy dessert.',
    cookingTips: ['Torch topping for crispiness.']
  },
  {
    id: 'indulgent-american-brownies',
    name: 'Gooey American Brownies',
    description: 'Fudgy chocolate brownies with a rich cocoa flavor.',
    ingredients: [
      'Butter',
      'Sugar',
      'Eggs',
      'Cocoa powder',
      'Flour',
      'Chocolate chips'
    ],
    instructions: [
      'Mix wet and dry ingredients.',
      'Bake until just set.',
      'Cool and cut into squares.'
    ],
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 6,
    calories: 250,
    tags: ['american', 'dessert', 'chocolate'],
    difficulty: 'Easy',
    mood: 'indulgent',
    image: 'https://images.unsplash.com/photo-1590841609987-4ac211aaa872?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Decadent and sweet.',
    cookingTips: ['Do not overbake.']
  },
  {
    id: 'indulgent-italian-tiramisu',
    name: 'Classic Italian Tiramisu',
    description: 'Layered dessert with mascarpone, espresso-soaked ladyfingers, and cocoa powder.',
    ingredients: [
      'Mascarpone cheese',
      'Espresso',
      'Ladyfingers',
      'Egg yolks',
      'Sugar',
      'Cocoa powder'
    ],
    instructions: [
      'Layer espresso-dipped ladyfingers with mascarpone mix.',
      'Chill several hours.',
      'Dust with cocoa before serving.'
    ],
    prepTime: '25 mins',
    cookTime: '0 mins',
    servings: 4,
    calories: 320,
    tags: ['italian', 'dessert', 'indulgent'],
    difficulty: 'Medium',
    mood: 'indulgent',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Coffee, cream, and chocolate.',
    cookingTips: ['Chill well for best flavor.']
  }
];
