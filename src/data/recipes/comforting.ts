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
  },
  {
    id: 'comfort-chicken-soup',
    name: 'Homemade Chicken Noodle Soup',
    description: 'A warm and nourishing bowl of classic chicken soup with tender noodles and vegetables.',
    ingredients: [
      '1 whole chicken',
      'carrots, celery, and onions',
      'egg noodles',
      'fresh herbs (parsley, thyme)',
      'chicken broth',
      'salt and pepper to taste',
      'bay leaves'
    ],
    instructions: [
      'Cook chicken in broth until tender',
      'Remove chicken, shred meat',
      'Add vegetables to broth',
      'Cook egg noodles',
      'Combine all ingredients',
      'Season and garnish with fresh herbs'
    ],
    prepTime: '20 mins',
    cookTime: '1 hour',
    servings: 6,
    calories: 280,
    tags: ['soup', 'chicken', 'comfort food', 'winter'],
    difficulty: 'Medium',
    mood: 'comforting',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&auto=format&fit=crop',
    aiSuggestion: 'Make extra and freeze portions for later use.',
    nutritionAnalysis: 'Good source of protein and vitamins. Low in calories.',
    cookingTips: [
      'Use bone-in chicken for more flavor',
      'Don\'t overcook the noodles'
    ]
  },
  {
    id: 'comfort-beef-stew',
    name: 'Hearty Beef Stew',
    description: 'Rich and tender beef stew with root vegetables in a savory gravy.',
    ingredients: [
      '2 lbs beef chuck, cubed',
      'potatoes and carrots',
      'onions and garlic',
      'beef broth',
      'red wine',
      'herbs and spices',
      'flour for thickening'
    ],
    instructions: [
      'Brown beef in batches',
      'Sauté vegetables',
      'Add liquids and simmer',
      'Cook until meat is tender',
      'Thicken gravy',
      'Season to taste'
    ],
    prepTime: '30 mins',
    cookTime: '2.5 hours',
    servings: 6,
    calories: 420,
    tags: ['beef', 'stew', 'comfort food', 'winter'],
    difficulty: 'Medium',
    mood: 'comforting',
    image: 'https://images.unsplash.com/photo-1608835291093-394b0c943a75?w=800&auto=format&fit=crop',
    aiSuggestion: 'Try using different root vegetables for variety.',
    nutritionAnalysis: 'High in protein and iron. Rich in vegetables.',
    cookingTips: [
      'Don\'t skip browning the meat',
      'Cook low and slow for tender beef'
    ]
  },
  {
    id: 'comfort-mashed-potatoes',
    name: 'Creamy Mashed Potatoes',
    description: 'Silky smooth mashed potatoes with butter and cream.',
    ingredients: [
      'Yukon Gold potatoes',
      'butter',
      'heavy cream',
      'milk',
      'salt and pepper',
      'garlic (optional)'
    ],
    instructions: [
      'Boil potatoes until tender',
      'Drain and return to pot',
      'Add butter and warm dairy',
      'Mash until smooth',
      'Season to taste',
      'Keep warm until serving'
    ],
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 6,
    calories: 280,
    tags: ['side dish', 'potato', 'comfort food', 'vegetarian'],
    difficulty: 'Easy',
    mood: 'comforting',
    image: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=800&auto=format&fit=crop',
    aiSuggestion: 'Add roasted garlic for extra flavor.',
    nutritionAnalysis: 'Good source of carbohydrates and potassium.',
    cookingTips: [
      'Use warm dairy products',
      'Don\'t overmix to avoid gummy texture'
    ]
  },
  {
    id: 'comfort-pot-pie',
    name: 'Classic Chicken Pot Pie',
    description: 'Flaky crust filled with creamy chicken and vegetable filling.',
    ingredients: [
      'pie crust',
      'cooked chicken',
      'mixed vegetables',
      'cream sauce',
      'herbs and seasonings',
      'egg wash'
    ],
    instructions: [
      'Prepare filling',
      'Make cream sauce',
      'Combine chicken and vegetables',
      'Fill pie crust',
      'Add top crust and seal',
      'Bake until golden'
    ],
    prepTime: '45 mins',
    cookTime: '35 mins',
    servings: 8,
    calories: 460,
    tags: ['pie', 'chicken', 'comfort food', 'dinner'],
    difficulty: 'Medium',
    mood: 'comforting',
    image: 'https://images.unsplash.com/photo-1577906096749-55a0e0c9686a?w=800&auto=format&fit=crop',
    aiSuggestion: 'Make individual portions for easier serving.',
    nutritionAnalysis: 'Complete meal with protein and vegetables.',
    cookingTips: [
      'Keep pastry cold',
      'Don\'t forget steam vents'
    ]
  },
  {
    id: 'comfort-lasagna',
    name: 'Classic Lasagna',
    description: 'Layers of pasta, rich meat sauce, and three cheeses.',
    ingredients: [
      'lasagna noodles',
      'ground beef and Italian sausage',
      'marinara sauce',
      'ricotta, mozzarella, and parmesan',
      'herbs and seasonings',
      'eggs for binding'
    ],
    instructions: [
      'Make meat sauce',
      'Mix cheese filling',
      'Layer ingredients',
      'Cover and bake',
      'Uncover and brown top',
      'Rest before serving'
    ],
    prepTime: '45 mins',
    cookTime: '50 mins',
    servings: 12,
    calories: 380,
    tags: ['pasta', 'italian', 'comfort food', 'casserole'],
    difficulty: 'Medium',
    mood: 'comforting',
    image: 'https://images.unsplash.com/photo-1618889482923-38250401a84e?w=800&auto=format&fit=crop',
    aiSuggestion: 'Make two and freeze one for later.',
    nutritionAnalysis: 'High in protein and calcium.',
    cookingTips: [
      'No-boil noodles work great',
      'Let rest for clean slices'
    ]
  },
  {
    id: 'comfort-grilled-cheese',
    name: 'Ultimate Grilled Cheese',
    description: 'Melty cheese sandwich with crispy, buttery bread.',
    ingredients: [
      'sourdough bread',
      'multiple cheeses',
      'butter',
      'optional add-ins',
      'seasonings'
    ],
    instructions: [
      'Butter bread slices',
      'Layer cheeses',
      'Assemble sandwich',
      'Grill until golden',
      'Flip and repeat',
      'Rest briefly before cutting'
    ],
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 1,
    calories: 460,
    tags: ['sandwich', 'cheese', 'comfort food', 'quick'],
    difficulty: 'Easy',
    mood: 'comforting',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop',
    aiSuggestion: 'Try different cheese combinations.',
    nutritionAnalysis: 'High in calcium and protein.',
    cookingTips: [
      'Use room temperature butter',
      'Cook on medium-low heat'
    ]
  },
  {
    id: 'comfort-apple-crisp',
    name: 'Warm Apple Crisp',
    description: 'Sweet-tart apples under a crispy oat and brown sugar topping.',
    ingredients: [
      'fresh apples',
      'oats and flour',
      'brown sugar',
      'butter',
      'cinnamon and spices',
      'vanilla'
    ],
    instructions: [
      'Prepare apple filling',
      'Make crumb topping',
      'Layer in baking dish',
      'Bake until bubbly',
      'Cool slightly',
      'Serve warm with ice cream'
    ],
    prepTime: '25 mins',
    cookTime: '45 mins',
    servings: 8,
    calories: 320,
    tags: ['dessert', 'fruit', 'comfort food', 'baking'],
    difficulty: 'Easy',
    mood: 'comforting',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a9?w=800&auto=format&fit=crop',
    aiSuggestion: 'Mix in some pears or berries for variety.',
    nutritionAnalysis: 'Contains fruit and whole grains.',
    cookingTips: [
      'Use firm baking apples',
      'Don\'t overbake the topping'
    ]
  }
];
