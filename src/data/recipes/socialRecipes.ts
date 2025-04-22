
import { Recipe } from '@/types/recipe';

export const socialRecipes: Recipe[] = [
  {
    id: 'social-spanish-tapas',
    name: 'Spanish Tapas Board',
    description: 'A shareable platter of Spanish tapas - cheese, olives, chorizo, nuts, breads.',
    ingredients: [
      'Manchego cheese',
      'Chorizo',
      'Green olives',
      'Roast nuts',
      'Crusty breads'
    ],
    instructions: [
      'Arrange all items on a large platter.',
      'Slice breads and cheese.',
      'Share with friends.'
    ],
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 4,
    calories: 320,
    tags: ['spanish', 'tapas', 'social'],
    difficulty: 'Easy',
    mood: 'social',
    image: 'https://images.unsplash.com/photo-1620060901025-e64fbec7ee29?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Snacks for sharing.',
    cookingTips: ['Add cured ham for variety.']
  },
  {
    id: 'social-american-buffalo-wings',
    name: 'Buffalo Chicken Wings',
    description: 'Crispy fried wings tossed in tangy buffalo sauce, great for gatherings.',
    ingredients: [
      'Chicken wings',
      'Flour',
      'Butter',
      'Hot sauce',
      'Celery',
      'Blue cheese dip'
    ],
    instructions: [
      'Coat wings and fry until crispy.',
      'Toss in melted butter and hot sauce.',
      'Serve with dip and celery.'
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 400,
    tags: ['american', 'wings', 'social'],
    difficulty: 'Medium',
    mood: 'social',
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Perfect party food.',
    cookingTips: ['Fry in small batches for crispiness.']
  },
  {
    id: 'social-british-fish-chips',
    name: 'British Fish & Chips',
    description: 'Battered fish fillets and hot chips, with malt vinegar.',
    ingredients: [
      'White fish fillets',
      'Flour',
      'Egg',
      'Potatoes',
      'Oil',
      'Malt vinegar'
    ],
    instructions: [
      'Coat fish fillets in batter and fry.',
      'Fry chips until golden.',
      'Serve with vinegar and lemon.'
    ],
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 2,
    calories: 600,
    tags: ['british', 'fish and chips', 'social'],
    difficulty: 'Medium',
    mood: 'social',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Crispy and savory.',
    cookingTips: ['Dry fish thoroughly before battering.']
  }
];
