
import { Recipe } from '@/types/recipe';

export const wanderlustRecipes: Recipe[] = [
  {
    id: 'wanderlust-spanish-paella',
    name: 'Spanish Seafood Paella',
    description: 'Vibrant rice dish with shrimp, mussels, and saffron from Spain.',
    ingredients: [
      'Paella rice',
      'Shrimp',
      'Mussels',
      'Saffron',
      'Peas',
      'Bell pepper',
      'Chicken stock'
    ],
    instructions: [
      'Cook rice with saffron and stock.',
      'Add seafood and vegetables.',
      'Simmer until seafood is cooked.'
    ],
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 3,
    calories: 500,
    tags: ['spanish', 'paella', 'wanderlust'],
    difficulty: 'Medium',
    mood: 'wanderlust',
    image: 'https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Explorative and flavorful.',
    cookingTips: ['Rest paella before serving.']
  },
  {
    id: 'wanderlust-vietnamese-banh-mi',
    name: 'Vietnamese Banh Mi',
    description: 'Fusion sandwich with crispy baguette, pork, pickles, and herbs.',
    ingredients: [
      'Baguette',
      'Pork',
      'Pickled carrot & daikon',
      'Cucumber',
      'Cilantro',
      'Mayonnaise',
      'Chili'
    ],
    instructions: [
      'Fill baguette with pork and toppings.',
      'Add sauces and herbs.',
      'Serve fresh and crispy.'
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 360,
    tags: ['vietnamese', 'banh mi', 'wanderlust'],
    difficulty: 'Easy',
    mood: 'wanderlust',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Crunchy and savory.',
    cookingTips: ['Use pickled veggies for authenticity.']
  },
  {
    id: 'wanderlust-thai-pad-thai',
    name: 'Thai Pad Thai',
    description: 'Internationally loved stir-fried noodles with shrimp, tofu, and peanuts.',
    ingredients: [
      'Rice noodles',
      'Shrimp',
      'Tofu',
      'Egg',
      'Peanuts',
      'Tamarind paste',
      'Bean sprouts'
    ],
    instructions: [
      'Soak noodles, stir-fry ingredients.',
      'Add sauce and toss everything together.',
      'Garnish with peanuts and lime.'
    ],
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 2,
    calories: 420,
    tags: ['thai', 'pad thai', 'wanderlust'],
    difficulty: 'Medium',
    mood: 'wanderlust',
    image: 'https://images.unsplash.com/photo-1511344407683-b1172dce025f?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Full of global flavors.',
    cookingTips: ['Serve hot for best taste.']
  }
];
