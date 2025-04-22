
import { Recipe } from '@/types/recipe';

export const curiousRecipes: Recipe[] = [
  {
    id: 'curious-fusion-korean-tacos',
    name: 'Fusion Korean Tacos',
    description: 'Soft tortillas filled with Korean BBQ beef, kimchi, and fresh slaw.',
    ingredients: [
      'Flour tortillas',
      'Korean BBQ beef',
      'Kimchi',
      'Slaw mix',
      'Sriracha mayo'
    ],
    instructions: [
      'Cook beef, warm tortillas.',
      'Assemble with kimchi, slaw, and drizzle sauce.',
      'Serve hot.'
    ],
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 2,
    calories: 320,
    tags: ['fusion', 'korean', 'tacos'],
    difficulty: 'Medium',
    mood: 'curious',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop', // Korean tacos
    nutritionAnalysis: 'Tangy, spicy, fresh.',
    cookingTips: ['Try with tofu for a veggie version.']
  },
  {
    id: 'curious-japanese-okonomiyaki',
    name: 'Japanese Okonomiyaki',
    description: 'Savory cabbage pancake topped with sauce, mayo, and bonito flakes.',
    ingredients: [
      'Cabbage',
      'Flour',
      'Eggs',
      'Dashi stock',
      'Okonomiyaki sauce',
      'Kewpie mayo',
      'Bonito flakes'
    ],
    instructions: [
      'Mix batter and cabbage.',
      'Pan-fry until crisp.',
      'Top with sauces and bonito.'
    ],
    prepTime: '15 mins',
    cookTime: '15 mins',
    servings: 2,
    calories: 260,
    tags: ['japanese', 'pancake', 'curious'],
    difficulty: 'Medium',
    mood: 'curious',
    image: 'https://images.unsplash.com/photo-1584947897558-4fba7c099db8?w=800&auto=format&fit=crop', // Okonomiyaki
    nutritionAnalysis: 'Hearty and unique.',
    cookingTips: ['Use bonito for authentic flavor.']
  },
  {
    id: 'curious-mexican-elote',
    name: 'Mexican Elote (Street Corn)',
    description: 'Charred corn on the cob slathered with mayo, cheese, and chili powder.',
    ingredients: [
      'Corn cobs',
      'Mayonnaise',
      'Cotija cheese',
      'Chili powder',
      'Lime'
    ],
    instructions: [
      'Grill corn until charred.',
      'Spread with mayo, sprinkle cheese and chili.',
      'Serve with lime.'
    ],
    prepTime: '7 mins',
    cookTime: '10 mins',
    servings: 3,
    calories: 180,
    tags: ['mexican', 'street food', 'curious'],
    difficulty: 'Easy',
    mood: 'curious',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=800&auto=format&fit=crop', // Mexican elote
    nutritionAnalysis: 'Smoky, creamy, tangy.',
    cookingTips: ['Use fresh sweet corn.']
  }
];
