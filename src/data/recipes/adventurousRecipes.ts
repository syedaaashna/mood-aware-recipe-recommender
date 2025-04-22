
import { Recipe } from '@/types/recipe';

export const adventurousRecipes: Recipe[] = [
  {
    id: 'adventurous-kimchi-bokkeumbap',
    name: 'Kimchi Bokkeumbap',
    description: 'Korean kimchi fried rice with a fried egg.',
    ingredients: [
      'Cooked rice',
      'Kimchi',
      'Egg',
      'Sesame oil',
      'Green onion',
      'Soy sauce'
    ],
    instructions: [
      'Chop kimchi, sauté with rice.',
      'Add soy sauce, sesame oil, green onion.',
      'Top with fried egg.'
    ],
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 1,
    calories: 420,
    tags: ['korean', 'rice', 'adventurous'],
    difficulty: 'Easy',
    mood: 'adventurous',
    image: 'https://unsplash.com/photos/sunny-side-up-egg-on-white-ceramic-bowl-1C_RSVhy32Y&auto=format&fit=crop',
    nutritionAnalysis: 'Fermented, healthy.',
    cookingTips: ['Top with extra sesame seeds.']
  },
  {
    id: 'adventurous-jackfruit-tacos',
    name: 'Jackfruit Tacos',
    description: 'Pulled jackfruit seasoned for adventurous vegan tacos.',
    ingredients: [
      'Canned jackfruit',
      'Taco seasoning',
      'Tortillas',
      'Red cabbage',
      'Lime',
      'Cilantro'
    ],
    instructions: [
      'Shred jackfruit and sauté with seasoning.',
      'Warm tortillas.',
      'Fill with jackfruit, cabbage, cilantro, and lime.',
      'Serve immediately.'
    ],
    prepTime: '7 mins',
    cookTime: '13 mins',
    servings: 2,
    calories: 200,
    tags: ['vegan', 'mexican', 'adventurous'],
    difficulty: 'Easy',
    mood: 'adventurous',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Pulled jackfruit is fiber-rich.',
    cookingTips: ['Drain jackfruit thoroughly.']
  }
];
