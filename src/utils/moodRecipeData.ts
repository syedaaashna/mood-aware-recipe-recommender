
export interface Mood {
  id: string;
  name: string;
  description: string;
  icon: string; // Adding icon property to Mood interface
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  moodIds: string[];
  tags: string[];
  imageUrl: string;
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  calories?: number;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  title?: string; // For compatibility with Recipe page
  aiGenerated?: boolean; // Adding AI generated flag
  aiSuggestion?: string; // Adding AI suggestion for recipe enhancement
  nutritionAnalysis?: string; // Adding nutrition analysis
  cookingTips?: string[]; // Adding cooking tips
  similarRecipes?: string[]; // Adding similar recipes
}

interface MoodRecipe {
  mood: Mood;
  recipes: Recipe[];
}

export const moods: Mood[] = [
  {
    id: 'happy',
    name: 'Happy',
    description: 'Recipes to brighten your day',
    icon: '😊'
  },
  {
    id: 'romantic',
    name: 'Romantic',
    description: 'Recipes for a special night',
    icon: '💝'
  },
  {
    id: 'energetic',
    name: 'Energetic',
    description: 'Recipes to fuel your day',
    icon: '⚡'
  },
  {
    id: 'relaxed',
    name: 'Relaxed',
    description: 'Recipes for a calm evening',
    icon: '😌'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Recipes to inspire your inner chef',
    icon: '🎨'
  },
  {
    id: 'adventurous',
    name: 'Adventurous',
    description: 'Recipes to try something new',
    icon: '🌎'
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    description: 'Recipes that bring back memories',
    icon: '📷'
  },
  {
    id: 'comforting',
    name: 'Comforting',
    description: 'Recipes that feel like a warm hug',
    icon: '🤗'
  },
  {
    id: 'festive',
    name: 'Festive',
    description: 'Recipes for celebrations and gatherings',
    icon: '🎉'
  },
  {
    id: 'mindful',
    name: 'Mindful',
    description: 'Nutritious recipes for body and soul',
    icon: '🧘'
  },
];

const recipes: Recipe[] = [
  {
    id: 'classic-pizza',
    name: 'Classic Margherita Pizza',
    title: 'Classic Margherita Pizza',
    description: 'A simple and delicious pizza with fresh tomatoes, mozzarella, and basil.',
    ingredients: ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella', 'Basil leaves', 'Olive oil'],
    instructions: [
      'Preheat oven to 450°F.',
      'Roll out pizza dough.',
      'Spread tomato sauce evenly.',
      'Add slices of fresh mozzarella.',
      'Bake for 12-15 minutes.',
      'Garnish with fresh basil leaves and a drizzle of olive oil.',
    ],
    moodIds: ['happy'],
    tags: ['pizza', 'italian', 'vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '15 min',
    cookTime: '15 min',
    servings: 4,
    calories: 320,
    difficulty: 'Easy',
    aiSuggestion: 'For a crispier crust, preheat your pizza stone for at least 30 minutes at the highest oven temperature.',
    nutritionAnalysis: 'High in calcium from cheese, moderate carbohydrates from the dough, and antioxidants from the tomato sauce and basil.',
    cookingTips: [
      'Use room temperature dough for easier stretching',
      'Don\'t overload with toppings or the pizza won\'t cook properly',
      'Rotate the pizza halfway through baking for even cooking'
    ],
    similarRecipes: ['focaccia-bread', 'stuffed-crust-pizza']
  },
  {
    id: 'chocolate-cake',
    name: 'Decadent Chocolate Cake',
    title: 'Decadent Chocolate Cake',
    description: 'A rich and moist chocolate cake perfect for any celebration.',
    ingredients: [
      'Flour',
      'Sugar',
      'Cocoa powder',
      'Eggs',
      'Butter',
      'Milk',
      'Vanilla extract',
    ],
    instructions: [
      'Preheat oven to 350°F.',
      'Grease and flour a cake pan.',
      'Mix dry ingredients.',
      'Cream butter and sugar.',
      'Add eggs and vanilla.',
      'Alternate adding dry ingredients and milk.',
      'Pour batter into pan and bake for 30-35 minutes.',
      'Let cool before frosting.',
    ],
    moodIds: ['romantic'],
    tags: ['cake', 'chocolate', 'dessert'],
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '20 min',
    cookTime: '35 min',
    servings: 8,
    calories: 450,
    difficulty: 'Medium',
    aiSuggestion: 'Try adding a pinch of espresso powder to enhance the chocolate flavor without adding coffee taste.',
    nutritionAnalysis: 'High in calories and carbohydrates. Contains protein from eggs and calcium from milk. Best enjoyed in moderation.',
    cookingTips: [
      'Use room temperature ingredients for better mixing',
      'Don\'t overmix the batter or the cake will be tough',
      'Test with a toothpick for doneness - it should come out with a few moist crumbs'
    ],
    similarRecipes: ['tiramisu', 'chocolate-mousse']
  },
  {
    id: 'spicy-noodles',
    name: 'Spicy Peanut Noodles',
    description: 'Quick and flavorful noodles with a spicy peanut sauce.',
    ingredients: [
      'Noodles',
      'Peanut butter',
      'Soy sauce',
      'Honey',
      'Sriracha',
      'Garlic',
      'Ginger',
    ],
    instructions: [
      'Cook noodles according to package directions.',
      'Whisk together peanut butter, soy sauce, honey, sriracha, garlic, and ginger.',
      'Toss noodles with sauce.',
      'Garnish with chopped peanuts and green onions.',
    ],
    moodIds: ['energetic', 'adventurous'],
    tags: ['noodles', 'asian', 'spicy'],
    imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 2,
    calories: 380,
    difficulty: 'Easy',
    aiSuggestion: 'Balance the heat by adding a splash of rice vinegar for acidity and coconut milk for creaminess.',
    nutritionAnalysis: 'Good source of protein from peanut butter, complex carbohydrates from noodles, and antioxidants from ginger and garlic.',
    cookingTips: [
      'Cook noodles al dente since they\'ll continue cooking when tossed with the hot sauce',
      'For extra protein, add tofu or chicken',
      'Make the sauce ahead of time and store in the refrigerator for up to 5 days'
    ]
  },
  {
    id: 'chicken-stir-fry',
    name: 'Easy Chicken Stir-Fry',
    description: 'A healthy and delicious stir-fry with chicken and mixed vegetables.',
    ingredients: [
      'Chicken breast',
      'Broccoli',
      'Carrots',
      'Bell peppers',
      'Soy sauce',
      'Ginger',
      'Garlic',
    ],
    instructions: [
      'Cut chicken into bite-sized pieces.',
      'Stir-fry chicken until cooked through.',
      'Add vegetables and stir-fry until tender.',
      'Add soy sauce, ginger, and garlic.',
      'Serve over rice or noodles.',
    ],
    moodIds: ['energetic'],
    tags: ['stir-fry', 'chicken', 'healthy'],
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '15 min',
    cookTime: '15 min',
    servings: 4,
    calories: 320,
    difficulty: 'Easy',
    aiSuggestion: 'Velvet the chicken by marinating it in a mixture of egg white, cornstarch, and rice wine for 30 minutes before cooking for extremely tender results.',
    nutritionAnalysis: 'High in protein from chicken, fiber from vegetables, and various micronutrients. Low in calories when served without rice.',
    cookingTips: [
      'Cut all ingredients to similar sizes for even cooking',
      'Cook on high heat and keep ingredients moving',
      'Prepare all ingredients before heating the wok - stir-frying happens quickly'
    ]
  },
  {
    id: 'berry-smoothie',
    name: 'Refreshing Berry Smoothie',
    description: 'A cool and refreshing smoothie with mixed berries and yogurt.',
    ingredients: ['Mixed berries', 'Yogurt', 'Honey', 'Milk'],
    instructions: [
      'Combine mixed berries, yogurt, honey, and milk in a blender.',
      'Blend until smooth.',
      'Serve immediately.',
    ],
    moodIds: ['happy', 'energetic'],
    tags: ['smoothie', 'berries', 'healthy'],
    imageUrl: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '5 min',
    cookTime: '0 min',
    servings: 2,
    calories: 180,
    difficulty: 'Easy',
    aiSuggestion: 'Add a handful of spinach for added nutrients without affecting the taste.',
    nutritionAnalysis: 'Rich in antioxidants from berries, probiotics from yogurt, and calcium from milk. Natural sugars provide quick energy.',
    cookingTips: [
      'Use frozen berries instead of ice for a thicker texture',
      'Add a tablespoon of chia seeds or flaxseeds for omega-3 fatty acids',
      'Use Greek yogurt for extra protein'
    ]
  },
  {
    id: 'lavender-tea',
    name: 'Calming Lavender Tea',
    description: 'A soothing tea with lavender and honey to help you relax.',
    ingredients: ['Lavender flowers', 'Hot water', 'Honey'],
    instructions: [
      'Steep lavender flowers in hot water for 5-7 minutes.',
      'Strain the tea.',
      'Add honey to taste.',
      'Serve warm.',
    ],
    moodIds: ['relaxed'],
    tags: ['tea', 'lavender', 'calming'],
    imageUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '2 min',
    cookTime: '7 min',
    servings: 1,
    calories: 40,
    difficulty: 'Easy',
    aiSuggestion: 'Add a small amount of chamomile and valerian root for enhanced relaxation properties.',
    nutritionAnalysis: 'Low in calories. Honey provides natural sugars and antimicrobial properties. Lavender contains compounds that may reduce anxiety.',
    cookingTips: [
      'Use food-grade lavender flowers specifically meant for consumption',
      'Don\'t steep too long or the tea may become bitter',
      'Add a slice of lemon for brightness'
    ]
  },
  {
    id: 'mushroom-risotto',
    name: 'Creamy Mushroom Risotto',
    description: 'A comforting and flavorful risotto with Arborio rice and mixed mushrooms.',
    ingredients: [
      'Arborio rice',
      'Mixed mushrooms',
      'Vegetable broth',
      'Onion',
      'Garlic',
      'Parmesan cheese',
      'White wine',
    ],
    instructions: [
      'Sauté onion and garlic in olive oil.',
      'Add Arborio rice and toast for 2-3 minutes.',
      'Deglaze with white wine.',
      'Add vegetable broth one ladle at a time, stirring constantly.',
      'Stir in sautéed mushrooms and Parmesan cheese.',
      'Serve hot.',
    ],
    moodIds: ['relaxed', 'creative'],
    tags: ['risotto', 'mushroom', 'italian'],
    imageUrl: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 4,
    calories: 420,
    difficulty: 'Medium',
    aiSuggestion: 'Use a mixture of dried and fresh mushrooms to create a deeper umami flavor profile.',
    nutritionAnalysis: 'Rich in carbohydrates from rice, protein from cheese, and various B vitamins from mushrooms. Good source of fiber.',
    cookingTips: [
      'Warm the broth before adding it to the rice',
      'Stir constantly to develop creaminess without adding cream',
      'Let the risotto rest for 2 minutes before serving to achieve the perfect consistency'
    ]
  },
  {
    id: 'gingerbread-cookies',
    name: 'Homemade Gingerbread Cookies',
    description: 'Festive gingerbread cookies perfect for the holiday season.',
    ingredients: [
      'Flour',
      'Molasses',
      'Butter',
      'Sugar',
      'Ginger',
      'Cinnamon',
      'Cloves',
    ],
    instructions: [
      'Cream butter and sugar.',
      'Add molasses and mix well.',
      'Combine dry ingredients and add to wet ingredients.',
      'Chill dough for at least 2 hours.',
      'Roll out dough and cut into shapes.',
      'Bake at 350°F for 8-10 minutes.',
      'Decorate with icing.',
    ],
    moodIds: ['nostalgic', 'happy'],
    tags: ['cookies', 'gingerbread', 'holiday'],
    imageUrl: 'https://images.unsplash.com/photo-1607920592519-ded8e61d8d9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '30 min',
    cookTime: '10 min',
    servings: 24,
    calories: 120,
    difficulty: 'Medium',
    aiSuggestion: 'For softer cookies, reduce baking time by 1-2 minutes. For crispier cookies, roll the dough thinner.',
    nutritionAnalysis: 'Contains warming spices like ginger and cinnamon that have anti-inflammatory properties. High in sugar and carbohydrates.',
    cookingTips: [
      'Chill the dough thoroughly for easier handling',
      'Flour your work surface well to prevent sticking',
      'Let cookies cool completely before decorating'
    ]
  },
  {
    id: 'apple-pie',
    name: 'Warm Apple Pie',
    description: 'A classic apple pie with a flaky crust and sweet apple filling.',
    ingredients: ['Apples', 'Flour', 'Butter', 'Sugar', 'Cinnamon'],
    instructions: [
      'Prepare pie crust.',
      'Peel and slice apples.',
      'Mix apples with sugar and cinnamon.',
      'Place apple mixture in pie crust.',
      'Cover with top crust or crumble topping.',
      'Bake at 375°F for 45-50 minutes.',
    ],
    moodIds: ['nostalgic', 'relaxed'],
    tags: ['pie', 'apple', 'dessert'],
    imageUrl: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '30 min',
    cookTime: '50 min',
    servings: 8,
    calories: 350,
    difficulty: 'Medium',
    aiSuggestion: 'Use a mixture of tart and sweet apples (like Granny Smith and Honeycrisp) for the best flavor balance.',
    nutritionAnalysis: 'Contains fiber from apples and antioxidants from cinnamon. High in sugar and fat from the crust.',
    cookingTips: [
      'Chill the pie crust ingredients and tools for the flakiest results',
      'Partially cook the filling before baking to prevent a soggy bottom crust',
      'Cover the edges with foil if they brown too quickly'
    ]
  },
  {
    id: 'sushi-rolls',
    name: 'Homemade Sushi Rolls',
    description: 'Create your own sushi rolls with fresh ingredients and nori seaweed.',
    ingredients: [
      'Sushi rice',
      'Nori seaweed',
      'Cucumber',
      'Avocado',
      'Salmon',
      'Soy sauce',
      'Wasabi',
    ],
    instructions: [
      'Cook sushi rice according to package directions.',
      'Place nori seaweed on a bamboo rolling mat.',
      'Spread sushi rice evenly over the nori.',
      'Add cucumber, avocado, and salmon.',
      'Roll tightly using the bamboo mat.',
      'Slice into bite-sized pieces.',
      'Serve with soy sauce and wasabi.',
    ],
    moodIds: ['adventurous', 'creative'],
    tags: ['sushi', 'japanese', 'seafood'],
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '30 min',
    cookTime: '15 min',
    servings: 4,
    calories: 280,
    difficulty: 'Medium',
    aiSuggestion: 'Dip your hands in a mixture of water and rice vinegar to prevent the rice from sticking to your fingers when forming sushi.',
    nutritionAnalysis: 'Contains omega-3 fatty acids from salmon, healthy fats from avocado, and complex carbohydrates from rice.',
    cookingTips: [
      'Rinse the rice thoroughly until water runs clear for best texture',
      'Let the rice cool to room temperature before making sushi',
      'Use a very sharp knife dipped in water to cut rolls cleanly'
    ]
  },
  {
    id: 'french-toast',
    name: 'Classic French Toast',
    description: 'A delightful breakfast treat made with bread soaked in eggs and milk.',
    ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon', 'Vanilla extract', 'Butter'],
    instructions: [
      'Whisk together eggs, milk, cinnamon, and vanilla extract.',
      'Dip bread slices into the egg mixture.',
      'Melt butter in a skillet over medium heat.',
      'Cook bread slices until golden brown on both sides.',
      'Serve warm with syrup and fresh fruit.',
    ],
    moodIds: ['happy', 'nostalgic'],
    tags: ['breakfast', 'french toast', 'comfort food'],
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    calories: 290,
    difficulty: 'Easy',
    aiSuggestion: 'Use slightly stale bread that's 1-2 days old for the best texture that won't fall apart when soaked.',
    nutritionAnalysis: 'Good source of protein from eggs, calcium from milk, and complex carbohydrates from bread.',
    cookingTips: [
      'Let the bread soak in the egg mixture for 20-30 seconds per side',
      'Cook on medium-low heat to ensure the inside cooks before the outside burns',
      'Try using challah or brioche bread for extra rich results'
    ]
  },
  {
    id: 'chicken-curry',
    name: 'Fragrant Chicken Curry',
    description: 'An aromatic and flavorful chicken curry with coconut milk and spices.',
    ingredients: [
      'Chicken pieces',
      'Coconut milk',
      'Curry powder',
      'Onion',
      'Garlic',
      'Ginger',
      'Tomatoes',
    ],
    instructions: [
      'Sauté onion, garlic, and ginger in a pot.',
      'Add chicken pieces and brown on all sides.',
      'Stir in curry powder and tomatoes.',
      'Pour in coconut milk and simmer until chicken is cooked through.',
      'Serve hot with rice or naan bread.',
    ],
    moodIds: ['adventurous', 'creative'],
    tags: ['curry', 'chicken', 'indian'],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 4,
    calories: 420,
    difficulty: 'Medium',
    aiSuggestion: 'Marinate the chicken in yogurt and spices for 2 hours before cooking for more tender results.',
    nutritionAnalysis: 'Good source of protein from chicken, healthy fats from coconut milk, and anti-inflammatory compounds from spices.',
    cookingTips: [
      'Toast the spices briefly before adding liquid to release more flavor',
      'Use bone-in chicken pieces for more flavor',
      'Let the curry simmer on low heat for deeper flavor development'
    ]
  },
  {
    id: 'butter-chicken',
    name: 'Creamy Butter Chicken',
    title: 'Creamy Butter Chicken',
    description: 'Classic North Indian butter chicken with a rich tomato and cream sauce.',
    ingredients: [
      'Chicken thighs',
      'Butter',
      'Onion',
      'Garlic',
      'Ginger',
      'Tomato puree',
      'Heavy cream',
      'Garam masala',
      'Kashmiri chili powder',
      'Fenugreek leaves',
      'Salt'
    ],
    instructions: [
      'Marinate chicken in yogurt, garlic, ginger and spices for at least 1 hour.',
      'Cook chicken in a tandoor or oven until charred.',
      'In a pan, melt butter and sauté onions until golden.',
      'Add ginger-garlic paste and cook until fragrant.',
      'Stir in tomato puree and cook until oil separates.',
      'Add spices and salt, mix well.',
      'Add cooked chicken and simmer for 10 minutes.',
      'Finish with cream and dried fenugreek leaves.',
      'Garnish with a swirl of cream and serve hot with naan.',
    ],
    moodIds: ['happy'],
    tags: ['indian', 'chicken', 'creamy', 'north indian', 'spicy'],
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '30 min',
    cookTime: '40 min',
    servings: 4,
    calories: 520,
    difficulty: 'Medium',
    aiSuggestion: 'For authentic flavor, smoke the butter chicken with a piece of charcoal in a small metal bowl placed in the center of the curry.',
    nutritionAnalysis: 'High in protein from chicken and fat from cream and butter. Rich in vitamins from tomatoes and antioxidants from spices.',
    cookingTips: [
      'Use bone-in chicken thighs for more flavor',
      'Don\'t skip the fenugreek leaves (kasuri methi) - they\'re crucial for authentic flavor',
      'Let the curry rest for 15 minutes before serving to allow flavors to meld'
    ]
  },
  {
    id: 'malai-kofta',
    name: 'Malai Kofta',
    title: 'Malai Kofta',
    description: 'Soft potato and paneer dumplings in a rich, creamy sauce.',
    ingredients: [
      'Potatoes',
      'Paneer',
      'Cornflour',
      'Raisins',
      'Cashews',
      'Onions',
      'Tomatoes',
      'Cream',
      'Garam masala',
      'Kasuri methi',
      'Cashew paste'
    ],
    instructions: [
      'Boil and mash potatoes.',
      'Crumble paneer and mix with potatoes, cornflour, and spices.',
      'Stuff each ball with a raisin and cashew mixture.',
      'Deep fry the koftas until golden brown.',
      'For gravy, sauté onions until golden.',
      'Add tomato puree and spices, cook until oil separates.',
      'Add water and cashew paste, simmer.',
      'Finish with cream and kasuri methi.',
      'Add koftas just before serving.',
    ],
    moodIds: ['happy'],
    tags: ['indian', 'vegetarian', 'creamy', 'north indian'],
    imageUrl: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '45 min',
    cookTime: '30 min',
    servings: 4,
    calories: 480,
    difficulty: 'Medium',
    aiSuggestion: 'Add a pinch of saffron to the gravy for an authentic royal touch and beautiful color.',
    nutritionAnalysis: 'Good source of protein from paneer, carbohydrates from potatoes, and healthy fats from nuts and cream.',
    cookingTips: [
      'Make sure the potato mixture is not too moist or the koftas will fall apart when frying',
      'Keep the koftas separate from the gravy until serving to prevent them from getting soggy',
      'Use a whisk to create a smooth gravy without lumps'
    ]
  },
  {
    id: 'shahi-paneer',
    name: 'Shahi Paneer',
    title: 'Shahi Paneer',
    description: 'A royal dish of paneer cubes in a creamy, aromatic sauce.',
    ingredients: [
      'Paneer cubes',
      'Onions',
      'Tomatoes',
      'Cashews',
      'Cream',
      'Green cardamom',
      'Cinnamon stick',
      'Bay leaf',
      'Ginger-garlic paste',
      'Red chili powder',
      'Saffron'
    ],
    instructions: [
      'Soak cashews in warm water for 15 minutes, then make a paste.',
      'Heat ghee in a pan, add whole spices until fragrant.',
      'Add onion paste and sauté until golden brown.',
      'Add ginger-garlic paste and cook for 2 minutes.',
      'Add tomato puree and spices, cook until oil separates.',
      'Stir in cashew paste and cook for 5 minutes.',
      'Add water to reach desired consistency.',
      'Add paneer cubes and simmer for 5 minutes.',
      'Finish with cream and saffron.',
      'Garnish with sliced almonds and serve hot.',
    ],
    moodIds: ['romantic'],
    tags: ['indian', 'vegetarian', 'creamy', 'north indian', 'paneer'],
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '30 min',
    cookTime: '25 min',
    servings: 3,
    calories: 420,
    difficulty: 'Medium',
    aiSuggestion: 'Lightly fry the paneer cubes before adding them to the gravy for a richer texture.',
    nutritionAnalysis: 'Excellent source of protein from paneer, healthy fats from nuts and cream, and antioxidants from spices.',
    cookingTips: [
      'Soak the paneer in warm water for 10 minutes before cooking to make it softer',
      'Use a mix of fresh and store-bought tomato puree for balanced flavor',
      'Add a pinch of sugar to balance the acidity of the tomatoes'
    ]
  },
  {
    id: 'tandoori-raan',
    name: 'Tandoori Raan',
    title: 'Tandoori Raan',
    description: 'A royal Mughlai dish of slow-cooked, marinated leg of lamb.',
    ingredients: [
      'Leg of lamb',
      'Yogurt',
      'Ginger paste',
      'Garlic paste',
      'Red chili powder',
      'Garam masala',
      'Lemon juice',
      'Mustard oil',
      'Kasoori methi',
      'Saffron'
    ],
    instructions: [
      'Pierce lamb with a knife and make deep cuts all over.',
      'Mix all marinade ingredients in a bowl.',
      'Rub marinade into the lamb, ensuring it gets into the cuts.',
      'Marinate overnight in the refrigerator.',
      'Preheat oven to 325°F.',
      'Place lamb on a roasting rack and cook for 3-4 hours until tender.',
      'Baste occasionally with leftover marinade and ghee.',
      'Let rest for 20 minutes before carving.',
      'Serve with mint chutney and naan bread.',
    ],
    moodIds: ['romantic'],
    tags: ['indian', 'lamb', 'special occasion', 'mughlai'],
    imageUrl: 'https://images.unsplash.com/photo-1651908243355-a7c0c5bd409d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '24 hours',
    cookTime: '4 hours',
    servings: 8,
    calories: 680,
    difficulty: 'Hard',
    aiSuggestion: 'For a smoky flavor, use the dhungar method: place a small metal bowl on top of the marinated meat, heat a piece of charcoal until red hot, place it in the bowl, pour ghee over it, and immediately cover to trap the smoke.',
    nutritionAnalysis: 'Very high in protein from lamb, with significant amounts of iron, zinc, and B vitamins. Contains healthy fats from yogurt.',
    cookingTips: [
      'Ask your butcher to trim excess fat and partially remove the shank bone for easier carving',
      'Use a meat thermometer to ensure the internal temperature reaches 145°F for medium-rare',
      'Wrap the exposed bone in foil to prevent burning during long cooking'
    ]
  },
  {
    id: 'masala-dosa',
    name: 'Crispy Masala Dosa',
    title: 'Crispy Masala Dosa',
    description: 'South Indian crispy crepe filled with spiced potato filling.',
    ingredients: [
      'Rice',
      'Urad dal',
      'Fenugreek seeds',
      'Potatoes',
      'Onions',
      'Mustard seeds',
      'Curry leaves',
      'Green chilies',
      'Turmeric powder',
      'Asafoetida'
    ],
    instructions: [
      'Soak rice and urad dal separately for 4-6 hours.',
      'Grind into a smooth batter and ferment overnight.',
      'Boil potatoes until soft, then mash them.',
      'Temper mustard seeds, curry leaves, and green chilies in oil.',
      'Add onions and sauté until translucent.',
      'Add turmeric and mashed potatoes, mix well.',
      'Heat a dosa pan, pour a ladle of batter and spread in a circular motion.',
      'Drizzle oil around the edges and cook until golden and crisp.',
      'Place potato filling in the center and fold.',
      'Serve hot with coconut chutney and sambar.',
    ],
    moodIds: ['energetic'],
    tags: ['indian', 'south indian', 'breakfast', 'vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '12 hours',
    cookTime: '30 min',
    servings: 4,
    calories: 320,
    difficulty: 'Medium',
    aiSuggestion: 'Add 1-2 tablespoons of cooked, rinsed poha (flattened rice) to the batter for extra crispness.',
    nutritionAnalysis: 'Contains complex carbohydrates from rice and potatoes. Good source of protein from urad dal. Low in fat when minimal oil is used.',
    cookingTips: [
      'The batter should be thin like pancake batter for crispy dosas',
      'Make sure your pan is very hot before pouring the batter',
      'Let the bottom cook completely before attempting to flip or fold'
    ]
  },
  {
    id: 'upma',
    name: 'Healthy Semolina Upma',
    title: 'Healthy Semolina Upma',
    description: 'A quick and nutritious South Indian breakfast made with semolina.',
    ingredients: [
      'Semolina (suji)',
      'Mixed vegetables (carrots, peas, beans)',
      'Onion',
      'Green chilies',
      'Ginger',
      'Mustard seeds',
      'Curry leaves',
      'Urad dal',
      'Chana dal',
      'Roasted peanuts'
    ],
    instructions: [
      'Dry roast semolina until light brown and set aside.',
      'Heat oil in a pan, add mustard seeds and let them splutter.',
      'Add urad dal, chana dal, and peanuts, sauté until golden.',
      'Add curry leaves, green chilies, and ginger, sauté for a minute.',
      'Add onions and cook until translucent.',
      'Add mixed vegetables and cook for 2-3 minutes.',
      'Add water, salt, and bring to a boil.',
      'Lower the heat and slowly add roasted semolina, stirring continuously.',
      'Cover and cook on low heat for 2-3 minutes.',
      'Garnish with coriander leaves and lemon juice.',
    ],
    moodIds: ['energetic'],
    tags: ['indian', 'breakfast', 'vegetarian', 'quick', 'south indian'],
    imageUrl: 'https://images.unsplash.com/photo-1625398407796-82290d7ba6cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 3,
    calories: 210,
    difficulty: 'Easy',
    aiSuggestion: 'Add a tablespoon of ghee right at the end and mix gently for enhanced flavor and aroma.',
    nutritionAnalysis: 'Good source of complex carbohydrates from semolina. Contains fiber and vitamins from mixed vegetables.',
    cookingTips: [
      'Roasting the semolina is crucial to prevent lumps and add nutty flavor',
      'The water to semolina ratio should be 2:1 for perfect consistency',
      'Always add semolina to boiling water (not water to semolina) to avoid lumps'
    ]
  },
  {
    id: 'kadhi-chawal',
    name: 'Comforting Kadhi Chawal',
    title: 'Comforting Kadhi Chawal',
    description: 'Yogurt-based curry with crispy pakoras served with steamed rice.',
    ingredients: [
      'Yogurt',
      'Besan (gram flour)',
      'Rice',
      'Onion',
      'Cumin seeds',
      'Fenugreek seeds',
      'Turmeric powder',
      'Red chili powder',
      'Curry leaves',
      'Dried red chilies'
    ],
    instructions: [
      'Whisk yogurt and besan with water until smooth.',
      'Heat oil in a pot, add cumin seeds and fenugreek seeds.',
      'Add dried red chilies and curry leaves.',
      'Pour in the yogurt mixture, add turmeric and red chili powder.',
      'Simmer on low heat for 20-25 minutes, stirring occasionally.',
      'For pakoras, mix besan, sliced onions, and spices.',
      'Drop small portions into hot oil and fry until golden.',
      'Add fried pakoras to the kadhi just before serving.',
      'Serve hot with steamed rice.',
    ],
    moodIds: ['relaxed'],
    tags: ['indian', 'comfort food', 'vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1605197585895-285e3b8ff2ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 4,
    calories: 380,
    difficulty: 'Medium',
    aiSuggestion: 'Add a pinch of asafoetida (hing) to enhance digestibility and add authentic flavor.',
    nutritionAnalysis: 'Good source of protein from yogurt and besan. Contains probiotics from yogurt that support gut health.',
    cookingTips: [
      'Whisk the yogurt-besan mixture thoroughly to avoid lumps',
      'Cook on low heat to prevent curdling',
      'Kadhi thickens upon cooling, so keep it slightly thin while cooking'
    ]
  },
  {
    id: 'khichdi',
    name: 'Healing Moong Dal Khichdi',
    title: 'Healing Moong Dal Khichdi',
    description: 'A comforting one-pot rice and lentil dish, considered the ultimate Indian comfort food.',
    ingredients: [
      'Rice',
      'Yellow moong dal',
      'Ghee',
      'Cumin seeds',
      'Asafoetida',
      'Turmeric powder',
      'Ginger',
      'Green chilies',
      'Mixed vegetables (optional)',
      'Salt',
      'Garam masala'
    ],
    instructions: [
      'Wash rice and moong dal together until water runs clear.',
      'Heat ghee in a pressure cooker, add cumin seeds until they splutter.',
      'Add asafoetida, ginger, and green chilies.',
      'Add mixed vegetables if using, sauté for 2-3 minutes.',
      'Add rice and dal mixture, turmeric, and salt.',
      'Add water (3:1 ratio), mix well, and pressure cook for 3 whistles.',
      'Let pressure release naturally.',
      'Mix gently and add ghee on top.',
      'Serve hot with yogurt, papad, and pickle.',
    ],
    moodIds: ['relaxed'],
    tags: ['indian', 'comfort food', 'easy', 'one-pot', 'vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 3,
    calories: 290,
    difficulty: 'Easy',
    aiSuggestion: 'For enhanced nutrition and flavor, add 1-2 tablespoons of fresh or frozen methi (fenugreek) leaves.',
    nutritionAnalysis: 'Complete protein source when rice and dal are combined. Easy to digest and nourishing. Contains complex carbohydrates and moderate protein.',
    cookingTips: [
      'Roast the moong dal lightly before cooking for a nutty flavor',
      'The consistency can be adjusted by adding more or less water',
      'A squeeze of lemon juice brightens the flavors'
    ]
  },
  {
    id: 'naan-pizza',
    name: 'Indian Naan Pizza',
    title: 'Indian Naan Pizza',
    description: 'A creative fusion dish that uses naan bread as a pizza base with Indian toppings.',
    ingredients: [
      'Naan bread',
      'Butter chicken sauce or tikka masala sauce',
      'Paneer cubes',
      'Red onion',
      'Bell peppers',
      'Mozzarella cheese',
      'Coriander leaves',
      'Garam masala',
      'Red chili flakes'
    ],
    instructions: [
      'Preheat oven to 425°F.',
      'Spread butter chicken sauce or tikka masala sauce over naan bread.',
      'Top with paneer cubes, sliced red onion, and bell peppers.',
      'Sprinkle with mozzarella cheese, garam masala, and red chili flakes.',
      'Bake for 8-10 minutes until cheese is melted and bubbly.',
      'Garnish with fresh coriander leaves.',
      'Cut into slices and serve hot.',
    ],
    moodIds: ['creative'],
    tags: ['fusion', 'indian', 'quick', 'vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '10 min',
    cookTime: '10 min',
    servings: 2,
    calories: 420,
    difficulty: 'Easy',
    aiSuggestion: 'Try using mini naan breads to create individual appetizer-sized pizzas with different Indian-inspired toppings.',
    nutritionAnalysis: 'Contains carbohydrates from naan, protein from paneer and cheese, and fiber from vegetables.',
    cookingTips: [
      'Slightly toast the naan first for a crispier base',
      'Don\'t overload with toppings or it will become soggy',
      'Brush the edges with garlic butter for extra flavor'
    ]
  },
  {
    id: 'masala-dosa-crepe',
    name: 'Masala Dosa Breakfast Crepe',
    title: 'Masala Dosa Breakfast Crepe',
    description: 'A French-Indian fusion dish that transforms traditional dosa into a breakfast crepe.',
    ingredients: [
      'Rice flour',
      'Urad dal flour',
      'Potatoes',
      'Scrambled eggs',
      'Cheese',
      'Spinach',
      'Mushrooms',
      'Mustard seeds',
      'Curry leaves',
      'Green chilies'
    ],
    instructions: [
      'Mix rice flour and urad dal flour with water to make a thin batter.',
      'Let the batter ferment overnight.',
      'Prepare potato filling with mustard seeds, curry leaves, and spices.',
      'Heat a non-stick pan and pour a ladle of batter.',
      'Spread the batter in a circular motion to make a thin crepe.',
      'Place spiced potatoes, scrambled eggs, cheese, spinach, and mushrooms on one half.',
      'Fold the crepe and cook until golden brown.',
      'Serve hot with coconut chutney and coffee.',
    ],
    moodIds: ['creative'],
    tags: ['fusion', 'breakfast', 'indian', 'french'],
    imageUrl: 'https://images.unsplash.com/photo-1622542086073-977f4479415a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '12 hours',
    cookTime: '15 min',
    servings: 2,
    calories: 380,
    difficulty: 'Medium',
    aiSuggestion: 'Try adding a thin layer of herbed cream cheese on the inside of the crepe before filling with other ingredients.',
    nutritionAnalysis: 'Good source of protein from eggs and cheese. Contains complex carbohydrates from rice and potatoes.',
    cookingTips: [
      'Make sure the batter is properly fermented for best flavor and texture',
      'Use a wide spatula for easier flipping',
      'Serve immediately after cooking for optimal texture'
    ]
  },
  {
    id: 'laal-maas',
    name: 'Rajasthani Laal Maas',
    title: 'Rajasthani Laal Maas',
    description: 'A fiery Rajasthani meat curry made with mathania red chilies.',
    ingredients: [
      'Mutton',
      'Mathania red chilies',
      'Garlic',
      'Ginger',
      'Yogurt',
      'Coriander seeds',
      'Cumin seeds',
      'Cloves',
      'Cardamom',
      'Cinnamon',
      'Kachri powder (optional)'
    ],
    instructions: [
      'Soak dried red chilies in water for 30 minutes, then make a paste.',
      'Dry roast and grind all whole spices.',
      'Heat mustard oil until smoking, then cool slightly.',
      'Add crushed garlic and ginger, sauté until fragrant.',
      'Add mutton pieces and cook until browned.',
      'Add red chili paste and ground spices, mix well.',
      'Add yogurt and cook until oil separates.',
      'Add water and bring to a boil.',
      'Reduce heat and simmer until meat is tender (about 45 minutes).',
      'Garnish with fresh coriander leaves.',
      'Serve hot with bajra roti or steamed rice.',
    ],
    moodIds: ['adventurous'],
    tags: ['indian', 'rajasthani', 'spicy', 'mutton'],
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '30 min',
    cookTime: '1 hour',
    servings: 4,
    calories: 580,
    difficulty: 'Medium',
    aiSuggestion: 'For authentic flavor, use mustard oil and make sure to heat it until it reaches smoking point before cooling slightly and adding the spices.',
    nutritionAnalysis: 'Very high in protein from mutton. Rich in iron and B vitamins. Contains anti-inflammatory compounds from spices.',
    cookingTips: [
      'Keep the spice level authentically high for true laal maas',
      'Cook on low heat after adding water for tender meat',
      'The gravy should be thin but intensely flavored'
    ]
  },
  {
    id: 'pork-vindaloo',
    name: 'Goan Pork Vindaloo',
    title: 'Goan Pork Vindaloo',
    description: 'A tangy and spicy Goan dish with Portuguese influences.',
    ingredients: [
      'Pork',
      'Dried red chilies',
      'Vinegar',
      'Garlic',
      'Ginger',
      'Cumin seeds',
      'Cinnamon',
      'Cloves',
      'Black peppercorns',
      'Tamarind',
      'Jaggery'
    ],
    instructions: [
      'Make a paste with dried red chilies, garlic, ginger, and spices.',
      'Mix with vinegar and marinate pork pieces overnight.',
      'Heat oil in a heavy-bottomed pan and sauté the marinated pork.',
      'Add the remaining marinade and cook for 5 minutes.',
      'Add water and bring to a boil.',
      'Reduce heat and simmer until pork is tender and sauce thickens.',
      'Add tamarind paste and jaggery for balance.',
      'Adjust salt and spice level.',
      'Let it rest for a few hours or overnight for best flavor.',
      'Reheat and serve with steamed rice or Goan pao.',
    ],
    moodIds: ['adventurous'],
    tags: ['indian', 'goan', 'spicy', 'pork', 'portuguese influence'],
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '24 hours',
    cookTime: '1 hour',
    servings: 4,
    calories: 620,
    difficulty: 'Medium',
    aiSuggestion: 'For extra depth of flavor, add 1-2 tablespoons of palm vinegar which is traditionally used in Goan cooking.',
    nutritionAnalysis: 'High in protein from pork. Contains fat-soluble vitamins. The vinegar aids in digestion of the rich meat.',
    cookingTips: [
      'Use pork shoulder or belly with some fat for the most flavor',
      'The vinegar not only adds flavor but also tenderizes the meat',
      'Vindaloo tastes even better the next day, so consider making it in advance'
    ]
  },
  {
    id: 'aloo-paratha',
    name: 'Aloo Paratha with White Butter',
    title: 'Aloo Paratha with White Butter',
    description: 'Stuffed flatbread with spiced potato filling, served with homemade white butter.',
    ingredients: [
      'Whole wheat flour',
      'Potatoes',
      'Green chilies',
      'Coriander leaves',
      'Red chili powder',
      'Cumin powder',
      'Amchur (dried mango powder)',
      'Ghee',
      'Fresh cream',
      'Salt'
    ],
    instructions: [
      'Boil potatoes, peel and mash them while still warm.',
      'Mix in chopped green chilies, coriander leaves, and spices.',
      'Make a soft dough with whole wheat flour, water, and a little oil.',
      'Divide dough and potato filling into equal portions.',
      'Roll a small disk of dough, place potato filling in the center.',
      'Seal the edges and roll gently into a paratha.',
      'Cook on a hot griddle with ghee until golden brown on both sides.',
      'To make white butter, whip fresh cream until it separates.',
      'Serve hot parathas with white butter and pickle.',
    ],
    moodIds: ['nostalgic'],
    tags: ['indian', 'breakfast', 'punjabi', 'comfort food'],
    imageUrl: 'https://images.unsplash.com/photo-1551881192-002e02ad3d87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '30 min',
    cookTime: '20 min',
    servings: 4,
    calories: 380,
    difficulty: 'Medium',
    aiSuggestion: 'Rest the potato mixture for 10-15 minutes before stuffing to allow the flavors to meld and excess moisture to evaporate.',
    nutritionAnalysis: 'Contains complex carbohydrates from whole wheat and potatoes. The ghee aids in absorption of fat-soluble vitamins.',
    cookingTips: [
      'Make sure the potato filling is cool before stuffing to prevent the dough from becoming soggy',
      'Roll the paratha gently to prevent the filling from breaking through',
      'Cook on medium heat for even browning without burning'
    ]
  },
  {
    id: 'pav-bhaji',
    name: 'Mumbai Street-style Pav Bhaji',
    title: 'Mumbai Street-style Pav Bhaji',
    description: 'Iconic Mumbai street food with mashed vegetables and buttered bread rolls.',
    ingredients: [
      'Mixed vegetables (potatoes, cauliflower, peas, carrots)',
      'Pav bhaji masala',
      'Butter',
      'Onions',
      'Tomatoes',
      'Green chilies',
      'Ginger-garlic paste',
      'Lemon juice',
      'Soft bread rolls (pav)',
      'Coriander leaves'
    ],
    instructions: [
      'Pressure cook all vegetables until soft.',
      'Heat butter in a pan, add chopped onions and sauté until golden.',
      'Add ginger-garlic paste and green chilies, cook for a minute.',
      'Add tomatoes and cook until mushy.',
      'Add pav bhaji masala, red chili powder, and salt.',
      'Add cooked vegetables and mash coarsely.',
      'Simmer for 15-20 minutes, adding water if needed.',
      'Add more butter and lemon juice before serving.',
      'Slit pav rolls and toast with butter on a hot pan.',
      'Serve bhaji hot, topped with butter, onions, and coriander.',
    ],
    moodIds: ['nostalgic'],
    tags: ['indian', 'street food', 'mumbai', 'vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: 4,
    calories: 410,
    difficulty: 'Easy',
    aiSuggestion: 'Add a handful of finely chopped capsicum (bell pepper) at the end for added texture and authentic street style flavor.',
    nutritionAnalysis: 'Good source of vitamins and minerals from mixed vegetables. High in carbohydrates from potatoes and bread rolls.',
    cookingTips: [
      'Mash the vegetables while they\'re still hot for easier mashing',
      'Use a potato masher rather than a blender for authentic texture',
      'Don\'t skimp on the butter - it\'s essential for authentic flavor'
    ]
  },
  {
    id: 'comfort-soup',
    name: 'Hearty Vegetable Soup',
    title: 'Hearty Vegetable Soup',
    description: 'A warm, hearty soup with balanced nutritional profile to provide maximum comfort.',
    ingredients: [
      'Vegetable broth', 
      'Root vegetables (carrots, potatoes, parsnips)',
      'Pearl barley',
      'Cannellini beans',
      'Fresh herbs (thyme, rosemary)',
      'Garlic',
      'Onion',
      'Himalayan salt',
      'Freshly ground black pepper',
      'Extra virgin olive oil'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat.',
      'Add diced onion and minced garlic, sauté until translucent.',
      'Add diced root vegetables and herbs.',
      'Pour in vegetable broth and add pearl barley.',
      'Simmer for 30 minutes until vegetables are tender and barley is cooked.',
      'Add cannellini beans and cook for another 10 minutes.',
      'Season with salt and pepper to taste.',
      'Serve hot with fresh crusty bread.'
    ],
    moodIds: ['comforting', 'relaxed'],
    tags: ['soup', 'comfort food', 'healthy', 'vegetarian'],
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '15 min',
    cookTime: '45 min',
    servings: 6,
    calories: 320,
    difficulty: 'Easy',
    aiGenerated: true,
    aiSuggestion: 'For an immune boost, add fresh ginger and turmeric to the broth. For a heartier meal, add diced tofu or tempeh in the last 10 minutes of cooking.',
    nutritionAnalysis: 'Excellent source of fiber from vegetables and barley. Contains plant-based protein from beans. Rich in vitamins A, C, and various B vitamins.',
    cookingTips: [
      'Cut vegetables to similar sizes for even cooking',
      'Make a big batch and freeze in portions for quick meals',
      'For deeper flavor, roast the root vegetables before adding to the soup'
    ]
  },
  {
    id: 'festive-roast',
    name: 'Holiday Herb-Crusted Roast',
    title: 'Holiday Herb-Crusted Roast',
    description: 'A showstopping holiday roast with optimized cooking techniques for perfect results every time.',
    ingredients: [
      'Prime rib roast (4-5 lbs)',
      'Garlic cloves',
      'Fresh rosemary',
      'Fresh thyme',
      'High-quality butter',
      'Sea salt',
      'Black pepper',
      'Red wine',
      'Beef stock',
      'Shallots'
    ],
    instructions: [
      'Bring roast to room temperature for 2 hours before cooking.',
      'Preheat oven to precisely 275°F (135°C) for optimal slow roasting.',
      'Create a compound butter with minced garlic, chopped herbs, salt and pepper.',
      'Pat roast dry and rub with compound butter, covering all surfaces.',
      'Place in roasting pan on a rack with shallots around the base.',
      'Roast until internal temperature reaches 125°F (52°C) for medium-rare, about 15-20 minutes per pound.',
      'Rest for exactly 30 minutes before carving.',
      'While resting, make a pan sauce with drippings, wine, and stock.',
      'Serve with sauce and roasted shallots.'
    ],
    moodIds: ['festive', 'comforting'],
    tags: ['roast', 'holiday', 'special occasion', 'dinner'],
    imageUrl: 'https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '30 min',
    cookTime: '3 hours',
    servings: 8,
    calories: 450,
    difficulty: 'Medium',
    aiGenerated: true,
    aiSuggestion: 'Use a probe thermometer with an alarm to achieve the perfect internal temperature without opening the oven. For an impressive presentation, replace some of the herbs with a crust of coarsely ground coffee and cocoa powder.',
    nutritionAnalysis: 'High in protein and iron from beef. Contains fat-soluble vitamins like A, D, E, and K from the butter and beef fat.',
    cookingTips: [
      'The slow cooking method ensures even cooking and optimal tenderness',
      'Let the roast rest properly to retain juices when carving',
      'Save the bones for making stock later'
    ]
  },
  {
    id: 'mindful-bowl',
    name: 'Nutrient-Dense Wellness Bowl',
    title: 'Nutrient-Dense Wellness Bowl',
    description: 'A nutritionally balanced grain bowl with optimal macronutrients and micronutrients for wellness.',
    ingredients: [
      'Quinoa',
      'Kale',
      'Roasted sweet potatoes',
      'Avocado',
      'Chickpeas',
      'Pumpkin seeds',
      'Turmeric',
      'Lemon juice',
      'Extra virgin olive oil',
      'Tahini'
    ],
    instructions: [
      'Cook quinoa according to package instructions with a pinch of salt.',
      'Massage kale with lemon juice and olive oil until tender.',
      'Roast sweet potatoes with turmeric and a light coating of olive oil at 400°F for 25 minutes.',
      'Rinse and drain chickpeas, season with spices and roast until crispy.',
      'Whisk together tahini, lemon juice, olive oil, and water for dressing.',
      'Assemble bowl with quinoa base, arranged sections of kale, sweet potatoes, chickpeas.',
      'Add sliced avocado and sprinkle with pumpkin seeds.',
      'Drizzle with tahini dressing just before serving.'
    ],
    moodIds: ['mindful', 'energetic'],
    tags: ['grain bowl', 'healthy', 'vegan', 'balanced'],
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: 2,
    calories: 480,
    difficulty: 'Easy',
    aiGenerated: true,
    aiSuggestion: 'Track your mood before and after eating this nutrient-dense meal to observe the impact on your mental clarity. Try adding a tablespoon of fermented vegetables like kimchi or sauerkraut for gut health benefits.',
    nutritionAnalysis: 'Contains complete proteins from quinoa and chickpeas. Rich in fiber, healthy fats from avocado and seeds, and complex carbohydrates from sweet potatoes.',
    cookingTips: [
      'Prepare components in advance for quick assembly during the week',
      'Customize with seasonal vegetables for variety',
      'Store dressing separately if meal-prepping to maintain freshness'
    ]
  },
  {
    id: 'veggie-lasagna',
    name: 'Garden Vegetable Lasagna',
    title: 'Garden Vegetable Lasagna',
    description: 'A hearty, plant-based lasagna packed with seasonal vegetables and rich tomato sauce.',
    ingredients: [
      'Lasagna noodles',
      'Zucchini',
      'Eggplant',
      'Bell peppers',
      'Spinach',
      'Ricotta cheese',
      'Mozzarella cheese',
      'Parmesan cheese',
      'Tomato sauce',
      'Garlic',
      'Italian herbs'
    ],
    instructions: [
      'Preheat oven to 375°F.',
      'Slice zucchini and eggplant, roast with olive oil for 15 minutes.',
      'Cook lasagna noodles according to package directions.',
      'Mix ricotta with chopped spinach, garlic, and herbs.',
      'Layer tomato sauce, noodles, vegetables, and cheese mixture in a baking dish.',
      'Repeat layers, finishing with sauce and shredded mozzarella and parmesan on top.',
      'Cover with foil and bake for 30 minutes.',
      'Remove foil and bake another 15 minutes until cheese is golden and bubbly.',
      'Let rest for 10 minutes before serving.'
    ],
    moodIds: ['comforting', 'mindful'],
    tags: ['italian', 'vegetarian', 'baked', 'meal prep'],
    imageUrl: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '45 min',
    cookTime: '45 min',
    servings: 8,
    calories: 340,
    difficulty: 'Medium',
    aiSuggestion: 'Try using no-boil lasagna noodles and adding a layer of thinly sliced butternut squash for added sweetness and nutrition.',
    nutritionAnalysis: 'High in calcium from cheese, vitamins A and C from vegetables, and contains complete proteins.',
    cookingTips: [
      'Pre-roasting vegetables removes excess moisture and concentrates flavor',
      'For a vegan version, substitute ricotta with tofu blended with nutritional yeast',
      'Freezes well for up to 3 months in individual portions'
    ]
  },
  {
    id: 'celebration-cake',
    name: 'Festive Layer Celebration Cake',
    title: 'Festive Layer Celebration Cake',
    description: 'An impressive multi-layered cake perfect for special occasions and celebrations.',
    ingredients: [
      'Cake flour',
      'Sugar',
      'Butter',
      'Eggs',
      'Milk',
      'Vanilla extract',
      'Baking powder',
      'Salt',
      'Fresh berries',
      'Cream cheese',
      'Heavy cream'
    ],
    instructions: [
      'Preheat oven to 350°F and prepare three 8-inch cake pans.',
      'Cream butter and sugar until light and fluffy.',
      'Add eggs one at a time, then vanilla extract.',
      'Alternate adding dry ingredients and milk to the butter mixture.',
      'Divide batter evenly between prepared pans.',
      'Bake for 25-30 minutes until a toothpick comes out clean.',
      'Cool completely before assembling.',
      'Make frosting by beating cream cheese, butter, powdered sugar, and vanilla.',
      'Layer cakes with frosting and berries between each layer.',
      'Frost the outside and decorate with fresh berries and edible flowers.'
    ],
    moodIds: ['festive', 'happy'],
    tags: ['cake', 'dessert', 'celebration', 'baking'],
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '45 min',
    cookTime: '30 min',
    servings: 12,
    calories: 420,
    difficulty: 'Medium',
    aiSuggestion: 'For perfect cake layers, weigh the batter to ensure each pan gets exactly the same amount. Try adding a thin layer of fruit preserves between layers for extra moisture and flavor.',
    nutritionAnalysis: 'High in carbohydrates and fats. Contains protein from eggs and milk. The berries add antioxidants and vitamin C.',
    cookingTips: [
      'Bring all ingredients to room temperature before mixing for best texture',
      'Refrigerate the cake layers briefly before frosting to reduce crumbs',
      'A turntable makes frosting the cake much easier'
    ]
  }
];

recipes.forEach(recipe => {
  if (!recipe.aiSuggestion) {
    recipe.aiSuggestion = 'AI analysis suggests this recipe is already well-balanced. Consider pairing with a complementary side dish.';
  }
});

/**
 * Get all recipes
 */
export const getAllRecipes = (): Recipe[] => {
  return recipes;
};

/**
 * Search recipes by query string with enhanced AI-powered search capabilities
 * @param query - The search query string
 */
export const searchRecipes = (query: string): Recipe[] => {
  // Normalize the search term
  const searchTerm = query.toLowerCase().trim();
  
  // AI-enhanced search algorithm that prioritizes matches
  return recipes.filter((recipe) => {
    // Direct name match (highest priority)
    if (recipe.name.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Description match
    if (recipe.description.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Tag match
    if (recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))) {
      return true;
    }
    
    // Ingredient match
    if (recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))) {
      return true;
    }
    
    // Nutrition or cooking tip match (added AI features)
    if (recipe.nutritionAnalysis && recipe.nutritionAnalysis.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    if (recipe.cookingTips && recipe.cookingTips.some(tip => tip.toLowerCase().includes(searchTerm))) {
      return true;
    }
    
    // Advanced semantic matching for related terms
    const relatedTerms: Record<string, string[]> = {
      'quick': ['fast', 'easy', 'simple', 'under 30', 'minutes'],
      'healthy': ['nutritious', 'low calorie', 'diet', 'lean', 'light'],
      'spicy': ['hot', 'chili', 'pepper', 'heat'],
      'vegetarian': ['meatless', 'plant-based', 'veggie'],
      'dessert': ['sweet', 'cake', 'cookie', 'treat'],
      'breakfast': ['morning', 'brunch', 'early'],
    };
    
    // Check if the search term is related to any key terms
    for (const [key, synonyms] of Object.entries(relatedTerms)) {
      if (synonyms.some(synonym => searchTerm.includes(synonym))) {
        // Check if the recipe matches the key term
        if (recipe.tags.includes(key) || 
            recipe.description.toLowerCase().includes(key) ||
            recipe.name.toLowerCase().includes(key)) {
          return true;
        }
      }
    }
    
    return false;
  });
};

/**
 * Get recipes by mood ID with AI-enhanced selection
 * @param moodId - The mood ID to filter recipes by
 */
export const getRecipesByMood = (moodId: string): Recipe[] => {
  return recipes.filter(recipe => recipe.moodIds.includes(moodId));
};

/**
 * Get recipe by ID with AI-enhanced recommendations
 * @param id - The recipe ID to find
 */
export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

/**
 * Get AI-powered chatbot response based on mood
 * @param mood - The mood to generate a response for
 */
export const getChatbotResponse = (mood: string): string => {
  const responses: Record<string, string> = {
    happy: "You're feeling happy? That's wonderful! I have some delightful recipes that match your cheerful mood. How about a Classic Margherita Pizza or a Refreshing Berry Smoothie to keep those good vibes going?",
    
    romantic: "Feeling romantic? I can suggest some special recipes perfect for a date night. The Decadent Chocolate Cake or Shahi Paneer would make for an impressive and delicious meal to share with someone special.",
    
    energetic: "With all that energy, you might want something nutritious that keeps you going! Try the Spicy Peanut Noodles, Easy Chicken Stir-Fry, or a Refreshing Berry Smoothie for a perfect energy boost.",
    
    relaxed: "For your relaxed mood, I recommend comfortable dishes like Healing Moong Dal Khichdi or Comforting Kadhi Chawal. These recipes are perfect for a calm evening.",
    
    creative: "Feeling creative? Why not channel that energy into making something unique like Indian Naan Pizza or Masala Dosa Breakfast Crepe? These fusion recipes let you experiment with flavors!",
    
    adventurous: "Your adventurous spirit calls for bold flavors! Try Rajasthani Laal Maas or Goan Pork Vindaloo - these dishes will take your taste buds on an exciting journey.",
    
    nostalgic: "When you're feeling nostalgic, comfort food is the way to go. How about some Aloo Paratha with White Butter or Mumbai Street-style Pav Bhaji to bring back those cherished memories?",
    
    comforting: "Looking for comfort food? Our Hearty Vegetable Soup or Warm Apple Pie are perfect choices that feel like a warm hug in a bowl.",
    
    festive: "For that festive mood, try making our Holiday Herb-Crusted Roast or Festive Layer Celebration Cake that are perfect for celebrations and gatherings!",
    
    mindful: "For a mindful meal that nourishes body and soul, I recommend our Nutrient-Dense Wellness Bowl or Healthy Semolina Upma. These recipes promote well-being through nutritious ingredients."
  };
  
  return responses[mood] || "I don't have specific recommendations for that mood yet, but I'd be happy to suggest some versatile recipes that work for any occasion!";
};

/**
 * AI-powered validation to ensure all moods have recipes
 */
export const validateMoodRecipes = (): {valid: boolean, emptyMoods: string[]} => {
  const emptyMoods = moods.filter(mood => {
    const moodRecipes = recipes.filter(recipe => recipe.moodIds.includes(mood.id));
    return moodRecipes.length === 0;
  }).map(mood => mood.name);
  
  return {
    valid: emptyMoods.length === 0,
    emptyMoods
  };
};

/**
 * Get AI-recommended recipes based on a given recipe
 * @param recipeId - The recipe ID to find similar recipes for
 */
export const getSimilarRecipes = (recipeId: string, count: number = 3): Recipe[] => {
  const sourceRecipe = getRecipeById(recipeId);
  if (!sourceRecipe) return [];
  
  // Create a score for each recipe based on similarity factors
  const scoredRecipes = recipes
    .filter(recipe => recipe.id !== recipeId) // Don't include the source recipe
    .map(recipe => {
      let score = 0;
      
      // Score based on shared tags
      const sharedTags = recipe.tags.filter(tag => sourceRecipe.tags.includes(tag));
      score += sharedTags.length * 2;
      
      // Score based on shared moods
      const sharedMoods = recipe.moodIds.filter(mood => sourceRecipe.moodIds.includes(mood));
      score += sharedMoods.length * 3;
      
      // Score based on similar ingredients
      const sharedIngredients = recipe.ingredients.filter(ingredient => 
        sourceRecipe.ingredients.some(srcIngredient => 
          srcIngredient.toLowerCase().includes(ingredient.toLowerCase()) || 
          ingredient.toLowerCase().includes(srcIngredient.toLowerCase())
        )
      );
      score += sharedIngredients.length;
      
      // Score based on similar difficulty
      if (recipe.difficulty === sourceRecipe.difficulty) {
        score += 1;
      }
      
      return { recipe, score };
    })
    .sort((a, b) => b.score - a.score) // Sort by score (highest first)
    .slice(0, count) // Take the top N recipes
    .map(item => item.recipe); // Extract just the recipe
  
  return scoredRecipes;
};

// Run validation to ensure all moods have recipes
const validation = validateMoodRecipes();
if (!validation.valid) {
  console.warn(`Warning: The following moods have no recipes: ${validation.emptyMoods.join(', ')}`);
}
