
import { Recipe } from '@/types/recipe';

export const stressedRecipes: Recipe[] = [
  {
    id: 'stressed-chamomile-tea',
    name: 'Calming Chamomile Tea Latte',
    description: 'A soothing tea latte with honey and lavender to help you unwind.',
    ingredients: [
      'Chamomile tea bag',
      'Hot water',
      'Warm milk',
      'Honey',
      'Dried lavender (optional)',
      'Cinnamon stick'
    ],
    instructions: [
      'Steep chamomile tea in hot water for 5 minutes.',
      'Heat and froth milk.',
      'Add honey to tea.',
      'Top with frothed milk.',
      'Garnish with lavender and cinnamon.',
      'Sip slowly and relax.'
    ],
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 90,
    tags: ['beverage', 'calming', 'stress-relief'],
    difficulty: 'Easy',
    mood: 'stressed',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    aiSuggestion: 'Add a drop of vanilla extract for extra comfort.',
    nutritionAnalysis: 'Contains calming properties from chamomile, natural sweetness from honey.',
    cookingTips: ['Don\'t overheat the milk', 'Use fresh tea bags for best flavor']
  },
  {
    id: 'stressed-dark-chocolate-bark',
    name: 'Dark Chocolate Stress-Relief Bark',
    description: 'A mindful treat combining dark chocolate with stress-reducing ingredients.',
    ingredients: [
      'Dark chocolate',
      'Almonds',
      'Pistachios',
      'Dried cranberries',
      'Sea salt',
      'Orange zest'
    ],
    instructions: [
      'Melt dark chocolate in a double boiler.',
      'Spread on parchment paper.',
      'Sprinkle with nuts and fruits.',
      'Add sea salt and orange zest.',
      'Refrigerate until set.',
      'Break into pieces.'
    ],
    prepTime: '15 mins',
    cookTime: '5 mins',
    servings: 8,
    calories: 150,
    tags: ['dessert', 'chocolate', 'nuts', 'stress-relief'],
    difficulty: 'Easy',
    mood: 'stressed',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    aiSuggestion: 'Try adding lavender buds for extra calming properties.',
    nutritionAnalysis: 'Rich in magnesium and antioxidants from dark chocolate.',
    cookingTips: ['Use 70% dark chocolate for best benefits', 'Toast nuts for enhanced flavor']
  },
  {
    id: 'stressed-comfort-soup',
    name: 'Stress-Reducing Miso Soup',
    description: 'A warming miso soup with mood-boosting ingredients.',
    ingredients: [
      'Miso paste',
      'Tofu cubes',
      'Seaweed',
      'Green onions',
      'Mushrooms',
      'Dashi stock'
    ],
    instructions: [
      'Prepare dashi stock.',
      'Add sliced mushrooms.',
      'Dissolve miso paste.',
      'Add tofu and seaweed.',
      'Simmer gently.',
      'Garnish with green onions.'
    ],
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 4,
    calories: 120,
    tags: ['soup', 'japanese', 'comforting'],
    difficulty: 'Medium',
    mood: 'stressed',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    aiSuggestion: 'Add ginger for extra stress-reducing properties.',
    nutritionAnalysis: 'Rich in probiotics and minerals.',
    cookingTips: ['Don\'t boil the miso', 'Use fresh ingredients']
  }
];
