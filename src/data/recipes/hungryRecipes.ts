
import { Recipe } from '@/types/recipe';

export const hungryRecipes: Recipe[] = [
  {
    id: 'hungry-american-burger',
    name: 'Classic American Burger',
    description: 'Juicy beef patties with cheese, lettuce, and tomato in a soft bun.',
    ingredients: [
      'Ground beef',
      'Cheddar cheese',
      'Burger buns',
      'Lettuce',
      'Tomato',
      'Onion',
      'Pickles'
    ],
    instructions: [
      'Form burger patties and grill.',
      'Melt cheese on top.',
      'Assemble with toppings and serve.'
    ],
    prepTime: '10 mins',
    cookTime: '12 mins',
    servings: 2,
    calories: 700,
    tags: ['american', 'burger', 'main'],
    difficulty: 'Easy',
    mood: 'hungry',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High protein meal.',
    cookingTips: ["Don't press burgers while cooking."]
  },
  {
    id: 'hungry-indian-butter-chicken',
    name: 'Indian Butter Chicken',
    description: 'Rich tomato-based curry with tender chicken pieces and butter.',
    ingredients: [
      'Chicken',
      'Tomato puree',
      'Butter',
      'Cream',
      'Spices',
      'Onion'
    ],
    instructions: [
      'Cook chicken in spices.',
      'Add tomato and simmer.',
      'Finish with cream and butter.'
    ],
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 3,
    calories: 650,
    tags: ['indian', 'curry', 'main'],
    difficulty: 'Medium',
    mood: 'hungry',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Filling and comforting.',
    cookingTips: ['Garnish with cilantro.']
  },
  {
    id: 'hungry-italian-carbonara',
    name: 'Italian Spaghetti Carbonara',
    description: 'Creamy pasta with pancetta, eggs, cheese, and black pepper.',
    ingredients: [
      'Spaghetti',
      'Pancetta',
      'Eggs',
      'Parmesan cheese',
      'Black pepper'
    ],
    instructions: [
      'Cook spaghetti and pancetta.',
      'Mix egg and cheese, toss with pasta.',
      'Add pepper and serve immediately.'
    ],
    prepTime: '8 mins',
    cookTime: '12 mins',
    servings: 2,
    calories: 540,
    tags: ['italian', 'pasta', 'main'],
    difficulty: 'Medium',
    mood: 'hungry',
    image: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?w=800&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich and satisfying.',
    cookingTips: ['Stir quickly to prevent scrambling eggs.']
  }
];

