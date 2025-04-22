
import { Recipe } from '@/types/recipe';

export const comfortingRecipes: Recipe[] = [
  {
    id: 'comfort-mac-cheese',
    name: 'Classic Mac and Cheese',
    description: 'Creamy, cheesy, and oh-so-comforting mac and cheese with a crispy top.',
    ingredients: [
      '1 lb elbow macaroni',
      '4 cups shredded cheddar cheese',
      '2 cups whole milk',
      '1/4 cup butter',
      '1/4 cup all-purpose flour',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook macaroni according to package directions.',
      'Make a roux with butter and flour.',
      'Gradually whisk in milk and cook until thickened.',
      'Stir in cheese until melted.',
      'Combine with cooked pasta.',
      'Optional: top with breadcrumbs and bake until golden.'
    ],
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 6,
    calories: 450,
    tags: ['comfort food', 'pasta', 'cheese', 'american'],
    difficulty: 'Easy',
    mood: 'comforting',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop',
    aiSuggestion: 'Try different cheese combinations for varied flavors.',
    nutritionAnalysis: 'High in protein and calcium. Rich in carbohydrates.',
    cookingTips: [
      'Use room temperature cheese for better melting',
      'Reserve some pasta water to adjust consistency'
    ]
  }
  // We'll add more comfort recipes in subsequent updates
];
