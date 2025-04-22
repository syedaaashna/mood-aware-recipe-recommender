import { Recipe } from '@/types/recipe';

export const sadRecipes: Recipe[] = [
  {
    id: 'classic-mac-cheese',
    name: 'Comforting Mac & Cheese',
    description: 'The ultimate comfort food with creamy cheese sauce and perfectly cooked pasta',
    ingredients: [
      '1 pound elbow macaroni',
      '4 cups sharp cheddar cheese',
      '2 cups whole milk',
      '4 tbsp butter',
      '¼ cup flour',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook macaroni according to package directions',
      'Melt butter in a large saucepan over medium heat',
      'Whisk in flour and cook for 1 minute',
      'Gradually add milk, whisking constantly',
      'Add cheese and stir until melted',
      'Mix with cooked pasta and season'
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 6,
    calories: 450,
    tags: ['comfort food', 'pasta', 'cheese', 'classic'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1543339523-ad52a1872709?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in protein and calcium, provides comfort and satisfaction',
    cookingTips: [
      'Use room temperature cheese for better melting',
      'Reserve some pasta water for adjusting sauce consistency',
      'Add breadcrumbs on top for extra crunch'
    ]
  },
  {
    id: 'sad-ramen',
    name: 'Comforting Miso Ramen',
    description: 'A warm, soothing bowl of ramen with rich miso broth',
    ingredients: [
      'Ramen noodles',
      'Miso paste',
      'Soft-boiled egg',
      'Chashu pork',
      'Green onions',
      'Nori',
      'Corn and bamboo shoots'
    ],
    instructions: [
      'Prepare miso broth',
      'Cook noodles separately',
      'Prepare toppings',
      'Assemble bowl with hot broth',
      'Add noodles and toppings',
      'Serve immediately'
    ],
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 2,
    calories: 520,
    tags: ['japanese', 'soup', 'comfort', 'warming'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in protein and umami flavors',
    cookingTips: [
      'Don\'t overcook the noodles',
      'Keep broth hot',
      'Prepare toppings in advance'
    ]
  },
  {
    id: 'sad-risotto',
    name: 'Mushroom Truffle Risotto',
    description: 'Creamy, comforting risotto with wild mushrooms and truffle',
    ingredients: [
      'Arborio rice',
      'Mixed mushrooms',
      'Truffle oil',
      'Parmesan cheese',
      'White wine',
      'Vegetable stock',
      'Herbs'
    ],
    instructions: [
      'Sauté mushrooms',
      'Toast rice',
      'Add wine and reduce',
      'Gradually add hot stock',
      'Stir until creamy',
      'Finish with cheese and truffle oil'
    ],
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 4,
    calories: 420,
    tags: ['italian', 'comfort', 'creamy', 'vegetarian'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in carbohydrates and protein',
    cookingTips: [
      'Keep stock hot',
      'Stir continuously',
      'Use room temperature cheese'
    ]
  },
  {
    id: 'sad-curry',
    name: 'Butter Chicken Curry',
    description: 'Rich and creamy Indian curry that soothes the soul',
    ingredients: [
      'Chicken thighs',
      'Butter',
      'Cream',
      'Tomato sauce',
      'Indian spices',
      'Garlic and ginger',
      'Naan bread'
    ],
    instructions: [
      'Marinate chicken',
      'Prepare curry base',
      'Cook chicken',
      'Simmer in sauce',
      'Finish with cream',
      'Serve with naan'
    ],
    prepTime: '30 mins',
    cookTime: '40 mins',
    servings: 4,
    calories: 580,
    tags: ['indian', 'curry', 'comfort', 'creamy'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in protein and healthy fats',
    cookingTips: [
      'Use quality spices',
      'Don\'t skip marination',
      'Adjust cream to taste'
    ]
  },
  {
    id: 'sad-soup',
    name: 'French Onion Soup',
    description: 'Classic French onion soup topped with melted cheese',
    ingredients: [
      'Onions',
      'Beef broth',
      'Gruyere cheese',
      'Baguette',
      'Butter',
      'White wine',
      'Thyme'
    ],
    instructions: [
      'Caramelize onions slowly',
      'Add wine and reduce',
      'Add broth and simmer',
      'Toast bread',
      'Add cheese and broil',
      'Serve hot'
    ],
    prepTime: '20 mins',
    cookTime: '1 hour',
    servings: 4,
    calories: 320,
    tags: ['french', 'soup', 'comfort', 'cheese'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1588778272105-1ff4b1c491e9?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in flavor and comfort',
    cookingTips: [
      'Take time with onions',
      'Use good quality cheese',
      'Serve immediately'
    ]
  }
];
