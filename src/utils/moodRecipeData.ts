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
  hindiVoiceGuidance?: string; // Adding Hindi voice guidance for recipes
}

interface MoodRecipe {
  mood: Mood;
  recipes: Recipe[];
}

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
    imageUrl: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1626296536125-61e4e1f4d71d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1621743478914-cc8a68d76208?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    calories: 290,
    difficulty: 'Easy',
    aiSuggestion: 'Use slightly stale bread that\'s 1-2 days old for the best texture that won\'t fall apart when soaked.',
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
    imageUrl: 'https://images.unsplash.com/photo-1604952564555-13c872c0a364?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
    ],
    hindiVoiceGuidance: 'मसाला डोसा बनाने के लिए, चावल और उड़द दाल को अलग-अलग भिगोकर रखें। फिर उन्हें पीसकर रातभर फरमेंट करें। आलू भरने के ��िए, उबले आलू में प्याज, हरी मिर्च और मसाले डालें। डोसा बनाने के लिए, गरम तवे पर घोल डालकर पतला फैलाएं और किनारों पर तेल डालें। फिर आलू भरकर मोड़ दें। गरमागरम परोसें।'
  },
];

export const moodRecipes: MoodRecipe[] = [
  {
    mood: moods[0],
    recipes: recipes.filter(recipe => recipe.moodIds.includes(moods[0].id))
  },
  {
    mood: moods[1],
    recipes: recipes.filter(recipe => recipe.moodIds.includes(moods[1].id))
  },
  {
    mood: moods[2],
    recipes: recipes.filter(recipe => recipe.moodIds.includes(moods[2].id))
  },
  {
    mood: moods[3],
    recipes: recipes.filter(recipe => recipe.moodIds.includes(moods[3].id))
  },
  {
    mood: moods[4],
    recipes: recipes.filter(recipe => recipe.moodIds.includes(moods[4].id))
  },
  {
    mood: moods[5],
    recipes: recipes.filter(recipe => recipe.moodIds.includes(moods[5].id))
  },
  {
    mood: moods[6],
    recipes: recipes.filter(recipe => recipe.moodIds.includes(moods[6].id))
  },
  {
    mood: moods[7],
    recipes: recipes.filter(recipe => recipe.moodIds.includes(moods[7].id))
  },
  {
    mood: moods[8],
    recipes: recipes.filter(recipe => recipe.moodIds.includes(moods[8].id))
  },
  {
    mood: moods[9],
    recipes: recipes.filter(recipe => recipe.moodIds.includes(moods[9].id))
  },
];

export const getAllRecipes = (): Recipe[] => {
  return recipes;
};

export const getRecipeById = (id: string): Recipe | null => {
  const recipe = recipes.find(recipe => recipe.id === id);
  return recipe || null;
};

export const getRecipesByMood = (moodId: string): Recipe[] => {
  return recipes.filter(recipe => recipe.moodIds.includes(moodId));
};

export const searchRecipes = (searchTerm: string): Recipe[] => {
  const term = searchTerm.toLowerCase();
  return recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(term)) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term))
    );
  });
};

export const getSimilarRecipes = (recipeId: string, limit: number = 3): Recipe[] => {
  const currentRecipe = getRecipeById(recipeId);
  
  if (!currentRecipe) {
    return [];
  }
  
  if (currentRecipe.similarRecipes && currentRecipe.similarRecipes.length > 0) {
    const similarRecipes = currentRecipe.similarRecipes
      .map(id => getRecipeById(id))
      .filter(recipe => recipe !== null) as Recipe[];
    return similarRecipes.slice(0, limit);
  }
  
  let similarRecipes = recipes
    .filter(recipe => recipe.id !== recipeId)
    .map(recipe => {
      const sharedTags = recipe.tags.filter(tag => currentRecipe.tags.includes(tag)).length;
      const sharedMoods = recipe.moodIds.filter(mood => currentRecipe.moodIds.includes(mood)).length;
      const similarityScore = sharedTags * 2 + sharedMoods * 3;
      
      return { recipe, similarityScore };
    })
    .filter(item => item.similarityScore > 0)
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .map(item => item.recipe);
  
  return similarRecipes.slice(0, limit);
};

export const getChatbotResponse = (mood: string | null): string => {
  if (!mood) {
    return "I'd be happy to help you find the perfect recipe. Tell me what you're in the mood for or ask about specific ingredients.";
  }
  
  switch (mood) {
    case 'happy':
      return "You're feeling happy! How about trying our Classic Margherita Pizza or Berry Smoothie? These recipes are perfect for a bright mood and will keep your spirits high!";
    case 'romantic':
      return "Feeling romantic? Our Decadent Chocolate Cake or Shahi Paneer would be perfect for a special evening. Both recipes are designed to create a warm, intimate atmosphere.";
    case 'energetic':
      return "Since you're energetic, try our Spicy Peanut Noodles or Masala Dosa! These dishes will complement your active mood and provide sustained energy.";
    case 'relaxed':
      return "In a relaxed mood? Our Calming Lavender Tea or Creamy Mushroom Risotto would be perfect. These recipes are designed to maintain your peaceful state of mind.";
    case 'creative':
      return "Feeling creative? Our Mushroom Risotto or Homemade Sushi Rolls will give you a chance to express your creativity in the kitchen!";
    case 'adventurous':
      return "For your adventurous mood, I recommend trying our Sushi Rolls or Fragrant Chicken Curry. These dishes will take your taste buds on an exciting journey!";
    case 'nostalgic':
      return "Feeling nostalgic? Our Warm Apple Pie or Homemade Gingerbread Cookies might bring back some wonderful memories. These classic recipes have been comforting people for generations.";
    case 'comforting':
      return "Need some comfort? I'd suggest our Warm Apple Pie or Classic French Toast. These recipes are like a warm hug for your soul.";
    case 'festive':
      return "In a festive mood? Try our Gingerbread Cookies! They're perfect for celebrations and will fill your home with a wonderful aroma.";
    case 'mindful':
      return "For your mindful mood, I recommend our Berry Smoothie or a simple yet nutritious dish like our Easy Stir-Fry. These recipes focus on wholesome ingredients that nourish both body and mind.";
    default:
      return "I have the perfect recipe suggestions for you! Browse our collection or tell me more about what you're looking for today.";
  }
};
