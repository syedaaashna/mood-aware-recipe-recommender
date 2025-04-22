
import { Recipe } from '@/types/recipe';

export const relaxedRecipes: Recipe[] = [
  {
    id: 'relaxed-chamomile-tea',
    name: 'Chamomile Lavender Tea',
    description: 'A soothing chamomile tea with dried lavender for ultimate relaxation.',
    ingredients: [
      '1 tbsp dried chamomile flowers',
      '1 tsp dried lavender buds',
      '2 cups hot water',
      'Honey to taste'
    ],
    instructions: [
      'Place chamomile and lavender in a teapot.',
      'Add hot water and steep for 5 minutes.',
      'Strain into a mug and sweeten with honey as desired.',
      'Sip slowly while relaxing.'
    ],
    prepTime: '2 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 5,
    tags: ['tea', 'relax', 'drink'],
    difficulty: 'Easy',
    mood: 'relaxed',
    nutritionAnalysis: 'Naturally caffeine free.',
    cookingTips: ['Use filtered water for best flavor.']
  },
  {
    id: 'relaxed-avocado-toast',
    name: 'Simple Avocado Toast',
    description: 'Classic avocado toast perfect for a relaxed breakfast or snack.',
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      'Sea salt',
      'Crushed red pepper',
      'Lemon wedge'
    ],
    instructions: [
      'Toast the bread until golden.',
      'Mash avocado and spread evenly over toast.',
      'Sprinkle with sea salt and pepper.',
      'Finish with a squeeze of lemon.'
    ],
    prepTime: '3 mins',
    cookTime: '2 mins',
    servings: 1,
    calories: 210,
    tags: ['breakfast', 'healthy', 'snack'],
    difficulty: 'Easy',
    mood: 'relaxed',
    nutritionAnalysis: 'Rich in healthy fats.',
    cookingTips: ['Use ripe avocado for best results.']
  }
];
