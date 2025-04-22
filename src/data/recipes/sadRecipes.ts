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
    nutritionAnalysis: 'Rich in protein and calcium, provides comfort and satisfaction',
    cookingTips: [
      'Use room temperature cheese for better melting',
      'Reserve some pasta water for adjusting sauce consistency',
      'Add breadcrumbs on top for extra crunch'
    ],
    image: 'https://images.unsplash.com/photo-1aeLcUBr7kmM?w=800&auto=format&fit=crop&q=80'
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
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?w=800&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Rich in flavor and comfort',
    cookingTips: [
      'Take time with onions',
      'Use good quality cheese',
      'Serve immediately'
    ]
  },
  {
    id: 'sad-butter-chicken',
    name: 'Comforting Butter Chicken',
    description: 'Rich and creamy Indian butter chicken that soothes the soul',
    ingredients: [
      'Chicken thighs',
      'Butter',
      'Heavy cream',
      'Tomato sauce',
      'Garam masala',
      'Garlic and ginger',
      'Naan bread'
    ],
    instructions: [
      'Marinate chicken in yogurt and spices',
      'Cook chicken until tender',
      'Prepare creamy tomato sauce',
      'Combine chicken with sauce',
      'Simmer until rich and thick',
      'Serve with naan bread'
    ],
    prepTime: '30 mins',
    cookTime: '40 mins',
    servings: 4,
    calories: 580,
    tags: ['indian', 'comfort food', 'creamy', 'spicy'],
    difficulty: 'Medium',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'High in protein and comfort factor',
    cookingTips: ['Marinate overnight for best results', 'Adjust cream to taste']
  },
  {
    id: 'sad-dim-sum',
    name: 'Dim Sum Platter',
    description: 'Assorted Chinese dumplings and small bites for comfort',
    ingredients: [
      'Shrimp dumplings',
      'Pork buns',
      'Spring rolls',
      'Siu mai',
      'Chili oil',
      'Soy sauce',
      'Chinese tea'
    ],
    instructions: [
      'Steam dumplings until translucent',
      'Warm up pork buns',
      'Fry spring rolls until golden',
      'Prepare dipping sauces',
      'Arrange on platter',
      'Serve with hot tea'
    ],
    prepTime: '45 mins',
    cookTime: '25 mins',
    servings: 4,
    calories: 520,
    tags: ['chinese', 'dumplings', 'comfort', 'sharing'],
    difficulty: 'Hard',
    mood: 'sad',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Balanced protein and carbs',
    cookingTips: ['Steam in batches', 'Serve immediately while hot']
  }
];
