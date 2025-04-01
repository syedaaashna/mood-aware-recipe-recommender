
export interface Mood {
  id: string;
  name: string;
  description: string;
  icon: string;
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
  title?: string;
  aiGenerated?: boolean;
  aiSuggestion?: string;
  nutritionAnalysis?: string;
  cookingTips?: string[];
  similarRecipes?: string[];
  hindiVoiceGuidance?: string;
}

export const moods: Mood[] = [
  {
    id: 'happy',
    name: 'Happy',
    description: 'Joyful and content',
    icon: '😊'
  },
  {
    id: 'romantic',
    name: 'Romantic',
    description: 'In the mood for love',
    icon: '❤️'
  },
  {
    id: 'energetic',
    name: 'Energetic',
    description: 'Full of energy and vigor',
    icon: '⚡'
  },
  {
    id: 'relaxed',
    name: 'Relaxed',
    description: 'Calm and at ease',
    icon: '😌'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Inspired and imaginative',
    icon: '🎨'
  },
  {
    id: 'adventurous',
    name: 'Adventurous',
    description: 'Ready to try new things',
    icon: '🧭'
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    description: 'Reminiscing about the past',
    icon: '🕰️'
  },
  {
    id: 'comforting',
    name: 'Comforting',
    description: 'In need of comfort',
    icon: '🧸'
  },
  {
    id: 'festive',
    name: 'Festive',
    description: 'In a celebratory mood',
    icon: '🎉'
  },
  {
    id: 'mindful',
    name: 'Mindful',
    description: 'Present and conscious',
    icon: '🧘'
  }
];

interface MoodRecipe {
  mood: Mood;
  recipes: Recipe[];
}

const recipes: Recipe[] = [
  // Happy mood recipes (adding more to make 6)
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
    imageUrl: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
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
    imageUrl: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg',
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
    imageUrl: 'https://images.pexels.com/photos/7170323/pexels-photo-7170323.jpeg',
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
    moodIds: ['happy', 'nostalgic'],
    tags: ['cookies', 'gingerbread', 'holiday'],
    imageUrl: 'https://images.pexels.com/photos/6341984/pexels-photo-6341984.jpeg',
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
      'In a pan, melt butter and sauté onions until golden brown.',
      'Add ginger-garlic paste and cook until fragrant.',
      'Stir in tomato puree and cook until oil separates.',
      'Add spices and salt, mix well.',
      'Add cooked chicken and simmer for 10 minutes.',
      'Finish with cream and dried fenugreek leaves.',
      'Garnish with a swirl of cream and serve hot with naan.',
    ],
    moodIds: ['happy'],
    tags: ['indian', 'chicken', 'creamy', 'north indian', 'spicy'],
    imageUrl: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
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
    id: 'mango-lassi',
    name: 'Mango Lassi',
    description: 'A refreshing Indian yogurt drink with sweet mango and cardamom.',
    ingredients: ['Ripe mangoes', 'Yogurt', 'Milk', 'Sugar', 'Cardamom powder', 'Ice cubes'],
    instructions: [
      'Peel and chop mangoes into chunks.',
      'Add mango, yogurt, milk, sugar, and cardamom to a blender.',
      'Blend until smooth and creamy.',
      'Add ice cubes and blend again briefly.',
      'Pour into glasses and garnish with a sprinkle of cardamom.',
      'Serve immediately.',
    ],
    moodIds: ['happy', 'relaxed'],
    tags: ['drink', 'indian', 'yogurt', 'mango', 'sweet'],
    imageUrl: 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 2,
    calories: 180,
    difficulty: 'Easy',
    aiSuggestion: 'Freeze mango chunks in advance for an extra thick and frosty lassi.',
    nutritionAnalysis: 'Good source of probiotics from yogurt, vitamins A and C from mangoes, and calcium from dairy.',
    cookingTips: [
      'Use ripe Alphonso or Kesar mangoes when in season for the best flavor',
      'Adjust sweetness based on the natural sweetness of your mangoes',
      'For a thicker lassi, use Greek yogurt instead of regular yogurt'
    ],
    hindiVoiceGuidance: 'आम का लस्सी'
  },
  
  // Romantic mood recipes
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
    imageUrl: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg',
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
    imageUrl: 'https://images.pexels.com/photos/6940996/pexels-photo-6940996.jpeg',
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
    ],
    hindiVoiceGuidance: 'शाही पनीर'
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
    imageUrl: 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg',
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
    ],
    hindiVoiceGuidance: 'तंदूरी रान'
  },
  {
    id: 'strawberry-chocolate-fondue',
    name: 'Strawberry Chocolate Fondue',
    description: 'A romantic dessert of fresh strawberries with melted chocolate for dipping.',
    ingredients: ['Dark chocolate', 'Heavy cream', 'Fresh strawberries', 'Vanilla extract', 'Pinch of salt'],
    instructions: [
      'Chop dark chocolate into small pieces.',
      'Heat heavy cream until just simmering.',
      'Pour hot cream over chocolate and let sit for 1 minute.',
      'Stir until smooth, then add vanilla and salt.',
      'Transfer to a fondue pot or warm bowl.',
      'Serve with fresh strawberries for dipping.',
    ],
    moodIds: ['romantic'],
    tags: ['dessert', 'chocolate', 'strawberry', 'fondue'],
    imageUrl: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg',
    prepTime: '15 min',
    cookTime: '10 min',
    servings: 2,
    calories: 320,
    difficulty: 'Easy',
    aiSuggestion: 'Add a tablespoon of liqueur like Grand Marnier or Amaretto to the chocolate for an elegant flavor boost.',
    nutritionAnalysis: 'Contains antioxidants from dark chocolate and vitamin C from strawberries. High in sugar and fats.',
    cookingTips: [
      'Use at least 70% dark chocolate for a rich, not-too-sweet fondue',
      'Keep the fondue warm with a tea light under the pot to maintain the perfect consistency',
      'Pat strawberries dry before dipping to prevent water from seizing the chocolate'
    ]
  },
  {
    id: 'lobster-risotto',
    name: 'Lobster Risotto',
    description: 'A luxurious seafood risotto with fresh lobster and white wine.',
    ingredients: ['Arborio rice', 'Lobster tails', 'Shallots', 'White wine', 'Seafood stock', 'Butter', 'Parmesan cheese', 'Fresh herbs'],
    instructions: [
      'Poach lobster tails in seafood stock, then remove meat and chop.',
      'Reserve the stock for the risotto.',
      'Sauté shallots in butter until translucent.',
      'Add Arborio rice and toast for 2 minutes.',
      'Deglaze with white wine and stir until absorbed.',
      'Gradually add warm stock, stirring constantly until absorbed before adding more.',
      'When rice is al dente, stir in lobster meat and butter.',
      'Finish with grated Parmesan and fresh herbs.',
      'Serve immediately.',
    ],
    moodIds: ['romantic'],
    tags: ['risotto', 'lobster', 'seafood', 'italian', 'gourmet'],
    imageUrl: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
    prepTime: '30 min',
    cookTime: '40 min',
    servings: 2,
    calories: 580,
    difficulty: 'Medium',
    aiSuggestion: 'Save the lobster shells to make your own seafood stock for the most intense flavor.',
    nutritionAnalysis: 'High in protein from lobster, with omega-3 fatty acids and minerals like zinc. Rich in carbohydrates from the rice.',
    cookingTips: [
      'Never stop stirring the risotto to achieve the creamiest texture',
      'Keep the stock hot while adding it to the rice',
      'Don\'t overcook the lobster or it will become tough'
    ]
  },
  {
    id: 'raspberry-champagne-sorbet',
    name: 'Raspberry Champagne Sorbet',
    description: 'An elegant, refreshing sorbet with fresh raspberries and champagne.',
    ingredients: ['Fresh raspberries', 'Champagne', 'Sugar', 'Lemon juice', 'Rosewater (optional)'],
    instructions: [
      'Purée raspberries in a blender.',
      'Strain to remove seeds.',
      'Make simple syrup by heating sugar and water until dissolved.',
      'Cool syrup completely.',
      'Mix raspberry purée, cooled syrup, lemon juice, and champagne.',
      'Add a few drops of rosewater if using.',
      'Churn in an ice cream maker.',
      'Freeze for at least 4 hours before serving.',
    ],
    moodIds: ['romantic'],
    tags: ['dessert', 'sorbet', 'champagne', 'raspberry', 'frozen'],
    imageUrl: 'https://images.pexels.com/photos/5060339/pexels-photo-5060339.jpeg',
    prepTime: '20 min',
    cookTime: '0 min',
    servings: 4,
    calories: 160,
    difficulty: 'Medium',
    aiSuggestion: 'Serve with a small pour of additional champagne over the top for a dramatic presentation.',
    nutritionAnalysis: 'Lower in calories than traditional ice cream. Contains antioxidants from raspberries.',
    cookingTips: [
      'Use the best quality champagne you can afford since the flavor will be prominent',
      'For a non-alcoholic version, substitute sparkling white grape juice',
      'Add the champagne just before churning to preserve the bubbles'
    ]
  },
  
  // Energetic mood recipes
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
    imageUrl: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
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
    imageUrl: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg',
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
    imageUrl: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
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
    hindiVoiceGuidance: 'मसाला डोसा'
  },
  {
    id: 'protein-energy-balls',
    name: 'Protein Energy Balls',
    description: 'No-bake energy balls packed with protein and healthy fats for sustained energy.',
    ingredients: ['Rolled oats', 'Protein powder', 'Nut butter', 'Honey', 'Dark chocolate chips', 'Chia seeds', 'Flax seeds'],
    instructions: [
      'Mix rolled oats, protein powder, chia seeds, and flax seeds in a bowl.',
      'Add nut butter and honey, stir until well combined.',
      'Fold in dark chocolate chips.',
      'Roll the mixture into bite-sized balls.',
      'Refrigerate for at least 30 minutes before serving.',
      'Store in an airtight container in the refrigerator.',
    ],
    moodIds: ['energetic'],
    tags: ['snack', 'protein', 'healthy', 'no-bake'],
    imageUrl: 'https://images.pexels.com/photos/8844383/pexels-photo-8844383.jpeg',
    prepTime: '15 min',
    cookTime: '0 min',
    servings: 12,
    calories: 120,
    difficulty: 'Easy',
    aiSuggestion: 'Add dried tart cherries for a boost of antioxidants and natural sugars that help with muscle recovery.',
    nutritionAnalysis: 'Balanced combination of complex carbohydrates, protein, and healthy fats for sustained energy release.',
    cookingTips: [
      'If mixture is too dry, add a bit more nut butter or honey',
      'If mixture is too wet, add more oats or protein powder',
      'Wet your hands slightly before rolling to prevent sticking'
    ]
  },
  {
    id: 'kale-quinoa-power-bowl',
    name: 'Kale Quinoa Power Bowl',
    description: 'Nutrient-dense bowl with quinoa, kale, and roasted vegetables.',
    ingredients: ['Quinoa', 'Kale', 'Sweet potato', 'Avocado', 'Chickpeas', 'Tahini', 'Lemon juice', 'Pumpkin seeds'],
    instructions: [
      'Cook quinoa according to package directions.',
      'Roast sweet potato cubes with olive oil and spices.',
      'Massage kale with olive oil and lemon juice until tender.',
      'Rinse and drain chickpeas, then season and roast until crispy.',
      'Make tahini dressing by mixing tahini, lemon juice, garlic, and water.',
      'Arrange quinoa, kale, sweet potatoes, chickpeas, and sliced avocado in a bowl.',
      'Drizzle with tahini dressing and sprinkle with pumpkin seeds.',
    ],
    moodIds: ['energetic', 'mindful'],
    tags: ['bowl', 'healthy', 'vegetarian', 'vegan', 'gluten-free'],
    imageUrl: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: 2,
    calories: 450,
    difficulty: 'Medium',
    aiSuggestion: 'Meal prep components separately and store in the refrigerator for quick assembly throughout the week.',
    nutritionAnalysis: 'Complete protein from quinoa, iron from kale, complex carbs from sweet potato, and healthy fats from avocado and tahini.',
    cookingTips: [
      'Rinse quinoa thoroughly before cooking to remove bitterness',
      'Massage kale for at least 3 minutes to break down the tough fibers',
      'Make extra roasted chickpeas for snacking'
    ]
  },
  {
    id: 'acai-breakfast-bowl',
    name: 'Acai Breakfast Bowl',
    description: 'Energizing breakfast bowl with antioxidant-rich acai and fresh fruits.',
    ingredients: ['Acai berry purée', 'Banana', 'Blueberries', 'Strawberries', 'Granola', 'Honey', 'Almond butter', 'Chia seeds'],
    instructions: [
      'Blend frozen acai purée with half a banana and a splash of almond milk.',
      'Pour into a bowl.',
      'Arrange sliced banana, blueberries, and strawberries on top.',
      'Sprinkle with granola and chia seeds.',
      'Drizzle with honey and almond butter.',
      'Serve immediately.',
    ],
    moodIds: ['energetic', 'happy'],
    tags: ['breakfast', 'bowl', 'healthy', 'fruit', 'superfood'],
    imageUrl: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    prepTime: '15 min',
    cookTime: '0 min',
    servings: 1,
    calories: 380,
    difficulty: 'Easy',
    aiSuggestion: 'Freeze the serving bowl for 10 minutes before assembling to keep the acai base thick and cold longer.',
    nutritionAnalysis: 'Rich in antioxidants from acai and berries, fiber from fruits and granola, and protein from nut butter.',
    cookingTips: [
      'Keep the acai purée frozen until ready to blend',
      'Use only enough liquid to get the blender moving for a thick, spoonable consistency',
      'Choose unsweetened acai purée and control sweetness with fresh fruit and honey'
    ]
  },
  
  // Relaxed mood recipes
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
    imageUrl: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg',
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
    imageUrl: 'https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg',
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
    id: 'chai-latte',
    name: 'Homemade Chai Latte',
    description: 'A warming spiced tea latte that soothes the soul.',
    ingredients: ['Black tea', 'Milk', 'Cinnamon', 'Cardamom', 'Cloves', 'Ginger', 'Honey', 'Star anise'],
    instructions: [
      'Crush spices slightly to release flavors.',
      'Bring water to a boil and add tea and spices.',
      'Simmer for 5 minutes, then strain.',
      'Heat milk in a separate pot until steaming.',
      'Froth milk if desired.',
      'Combine tea and milk, then sweeten with honey.',
      'Sprinkle with cinnamon before serving.',
    ],
    moodIds: ['relaxed', 'comforting'],
    tags: ['drink', 'tea', 'latte', 'spiced', 'indian'],
    imageUrl: 'https://images.pexels.com/photos/209428/pexels-photo-209428.jpeg',
    prepTime: '5 min',
    cookTime: '10 min',
    servings: 2,
    calories: 120,
    difficulty: 'Easy',
    aiSuggestion: 'Make a concentrated chai mix and store in the refrigerator for up to a week for quick chai lattes.',
    nutritionAnalysis: 'Contains antioxidants from tea and anti-inflammatory compounds from spices. Milk adds calcium and protein.',
    cookingTips: [
      'Use whole spices rather than ground for a more authentic flavor',
      'Adjust the ratio of tea to milk based on how strong you like your chai',
      'Try alternative milks like oat or almond for different flavor profiles'
    ],
    hindiVoiceGuidance: 'चाय लट्टे'
  },
  {
    id: 'roasted-tomato-soup',
    name: 'Roasted Tomato Basil Soup',
    description: 'A comforting soup made with oven-roasted tomatoes and fresh basil.',
    ingredients: ['Roma tomatoes', 'Onion', 'Garlic', 'Vegetable broth', 'Fresh basil', 'Heavy cream', 'Olive oil', 'Balsamic vinegar'],
    instructions: [
      'Halve tomatoes and place on a baking sheet with onion quarters and garlic cloves.',
      'Drizzle with olive oil, salt, and pepper.',
      'Roast at 400°F until caramelized, about 45 minutes.',
      'Transfer to a pot and add vegetable broth.',
      'Simmer for 15 minutes, then add fresh basil.',
      'Blend until smooth.',
      'Stir in cream and balsamic vinegar.',
      'Garnish with basil leaves and serve with crusty bread.',
    ],
    moodIds: ['relaxed', 'comforting'],
    tags: ['soup', 'tomato', 'vegetarian', 'comfort food'],
    imageUrl: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
    prepTime: '15 min',
    cookTime: '60 min',
    servings: 4,
    calories: 220,
    difficulty: 'Medium',
    aiSuggestion: 'For a smoky flavor, add one or two fire-roasted red peppers to the soup.',
    nutritionAnalysis: 'High in lycopene from tomatoes, which is better absorbed with the fat from olive oil and cream.',
    cookingTips: [
      'Roast the tomatoes until they have some charred spots for the best flavor',
      'Add a pinch of sugar if the tomatoes are too acidic',
      'Make it dairy-free by substituting coconut cream for heavy cream'
    ]
  },
  {
    id: 'lemon-herb-baked-fish',
    name: 'Lemon Herb Baked Fish',
    description: 'Light and flaky white fish baked with lemon and fresh herbs.',
    ingredients: ['White fish fillets', 'Lemon', 'Fresh herbs (dill, parsley, thyme)', 'Olive oil', 'Garlic', 'Butter', 'Capers'],
    instructions: [
      'Preheat oven to 375°F.',
      'Pat fish fillets dry with paper towels.',
      'Place fish in a baking dish drizzled with olive oil.',
      'Season with salt and pepper.',
      'Top with thin lemon slices, minced garlic, and fresh herbs.',
      'Dot with small pieces of butter and sprinkle with capers.',
      'Bake for 12-15 minutes until fish flakes easily.',
      'Serve with additional lemon wedges.',
    ],
    moodIds: ['relaxed', 'mindful'],
    tags: ['fish', 'seafood', 'light', 'healthy', 'quick'],
    imageUrl: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    calories: 280,
    difficulty: 'Easy',
    aiSuggestion: 'Bake the fish on a bed of thinly sliced fennel for added flavor and a built-in side dish.',
    nutritionAnalysis: 'Excellent source of lean protein and omega-3 fatty acids. Low in calories and carbohydrates.',
    cookingTips: [
      'Choose a firm white fish like cod, halibut, or sea bass',
      'Don\'t overcook fish - it continues cooking slightly after removal from oven',
      'Use parchment paper for easy cleanup and to prevent sticking'
    ]
  },
  {
    id: 'golden-turmeric-milk',
    name: 'Golden Turmeric Milk',
    description: 'A soothing warm milk drink with turmeric and spices for relaxation.',
    ingredients: ['Milk', 'Turmeric powder', 'Cinnamon', 'Ginger', 'Black pepper', 'Honey', 'Coconut oil'],
    instructions: [
      'Heat milk in a small saucepan over medium heat.',
      'Add turmeric, cinnamon, grated ginger, and a pinch of black pepper.',
      'Whisk continuously until warm but not boiling.',
      'Remove from heat and stir in honey and coconut oil.',
      'Strain if desired.',
      'Pour into a mug and sprinkle with additional cinnamon.',
      'Sip slowly before bedtime for relaxation.',
    ],
    moodIds: ['relaxed'],
    tags: ['drink', 'turmeric', 'milk', 'ayurvedic', 'anti-inflammatory'],
    imageUrl: 'https://images.pexels.com/photos/5501108/pexels-photo-5501108.jpeg',
    prepTime: '5 min',
    cookTime: '10 min',
    servings: 1,
    calories: 120,
    difficulty: 'Easy',
    aiSuggestion: 'Make a turmeric paste with the spices and coconut oil and store in the refrigerator for quick golden milk anytime.',
    nutritionAnalysis: 'Contains curcumin from turmeric, which has anti-inflammatory properties. Black pepper enhances curcumin absorption.',
    cookingTips: [
      'Use plant-based milk alternatives like almond or oat milk if preferred',
      'Always include a pinch of black pepper to activate turmeric\'s benefits',
      'Blend the finished drink for a frothy texture'
    ],
    hindiVoiceGuidance: 'हल्दी वाला दूध'
  },

  // Adding additional recipes for other moods to ensure at least 6 per mood category
  // Creative mood recipes (adding 6)
  {
    id: 'colorful-sushi-bowl',
    name: 'Colorful Deconstructed Sushi Bowl',
    description: 'A creative take on sushi with all the flavors in an artistic bowl.',
    ingredients: ['Sushi rice', 'Nori sheets', 'Avocado', 'Cucumber', 'Carrots', 'Edamame', 'Salmon or tofu', 'Soy sauce', 'Wasabi', 'Pickled ginger'],
    instructions: [
      'Cook sushi rice according to package directions and season with rice vinegar mixture.',
      'Prepare protein by slicing raw sushi-grade salmon or cooking tofu.',
      'Julienne cucumber and carrots into thin matchsticks.',
      'Slice avocado and chop nori sheets.',
      'Arrange rice as the base in a bowl.',
      'Artistically place all toppings in sections around the bowl.',
      'Sprinkle with sesame seeds and serve with soy sauce, wasabi, and pickled ginger.',
    ],
    moodIds: ['creative'],
    tags: ['bowl', 'sushi', 'japanese', 'colorful', 'customizable'],
    imageUrl: 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
    prepTime: '30 min',
    cookTime: '20 min',
    servings: 2,
    calories: 520,
    difficulty: 'Medium',
    aiSuggestion: 'Create a homemade spicy mayo with sriracha and Japanese mayonnaise for drizzling over the bowl.',
    nutritionAnalysis: 'Balanced meal with carbohydrates from rice, protein from salmon or tofu, and healthy fats from avocado.',
    cookingTips: [
      'Rinse the rice several times before cooking to remove excess starch',
      'If using raw fish, ensure it\'s labeled "sushi-grade" and kept cold',
      'Set up all ingredients before assembling for the most artistic presentation'
    ]
  },
  {
    id: 'rainbow-vegetable-tart',
    name: 'Rainbow Vegetable Tart',
    description: 'A vibrant tart with concentric circles of colorful vegetables.',
    ingredients: ['Puff pastry', 'Ricotta cheese', 'Colored bell peppers', 'Zucchini', 'Eggplant', 'Cherry tomatoes', 'Fresh herbs', 'Olive oil'],
    instructions: [
      'Roll out puff pastry and place on a baking sheet.',
      'Score a border around the edge and prick the center with a fork.',
      'Spread ricotta cheese mixed with herbs over the center.',
      'Thinly slice vegetables using a mandoline.',
      'Arrange vegetable slices in concentric circles or patterns.',
      'Brush with olive oil and sprinkle with salt and herbs.',
      'Bake at 400°F until pastry is golden and vegetables are tender.',
      'Drizzle with herb oil before serving.',
    ],
    moodIds: ['creative'],
    tags: ['tart', 'vegetarian', 'colorful', 'impressive', 'appetizer'],
    imageUrl: 'https://images.pexels.com/photos/6419026/pexels-photo-6419026.jpeg',
    prepTime: '40 min',
    cookTime: '25 min',
    servings: 6,
    calories: 320,
    difficulty: 'Medium',
    aiSuggestion: 'For an eye-catching effect, arrange the vegetables in a rainbow gradient from red to purple.',
    nutritionAnalysis: 'Rich in various vitamins from the colorful vegetables. Provides protein from ricotta cheese.',
    cookingTips: [
      'Slice vegetables to uniform thickness for even cooking',
      'Partially cook harder vegetables like eggplant before arranging',
      'Let the tart cool slightly before cutting for cleaner slices'
    ]
  },
  {
    id: 'herb-infused-oils',
    name: 'Herb and Citrus Infused Oils',
    description: 'Creative infused oils for drizzling, dipping, and gift-giving.',
    ingredients: ['High-quality olive oil', 'Fresh herbs (rosemary, thyme, basil)', 'Garlic', 'Citrus peels', 'Chili flakes', 'Peppercorns', 'Clean bottles'],
    instructions: [
      'Thoroughly clean and completely dry herbs and flavorings.',
      'Gently warm olive oil to 180°F to help infusion (do not boil).',
      'Place prepared herbs and flavorings in sterilized bottles.',
      'Pour warm oil over the ingredients.',
      'Seal bottles and let infuse in a cool, dark place for 1-2 weeks.',
      'Strain oil through cheesecloth if desired.',
      'Label with the date and infusion ingredients.',
    ],
    moodIds: ['creative'],
    tags: ['condiment', 'homemade', 'gift', 'herbs', 'oil'],
    imageUrl: 'https://images.pexels.com/photos/14695943/pexels-photo-14695943.jpeg',
    prepTime: '30 min',
    cookTime: '10 min',
    servings: 4,
    calories: 120,
    difficulty: 'Easy',
    aiSuggestion: 'Create a set of three oils with different flavor profiles - herb, spicy, and citrus - for an impressive homemade gift.',
    nutritionAnalysis: 'Contains healthy monounsaturated fats from olive oil and various antioxidants from herbs and citrus.',
    cookingTips: [
      'Ensure all materials are completely dry to prevent mold growth',
      'Use dried herbs if making oils that will be stored for longer periods',
      'Refrigerate infused oils and use within 1-2 months'
    ]
  },
  {
    id: 'edible-flower-salad',
    name: 'Edible Flower Summer Salad',
    description: 'A stunning salad featuring edible flowers and seasonal produce.',
    ingredients: ['Mixed greens', 'Edible flowers (nasturtium, pansies, marigolds)', 'Cucumber', 'Watermelon radish', 'Avocado', 'Goat cheese', 'Candied nuts', 'Citrus vinaigrette'],
    instructions: [
      'Gently wash and dry edible flowers and greens.',
      'Thinly slice cucumber and watermelon radish.',
      'Arrange greens on a platter or individual plates.',
      'Scatter sliced vegetables, edible flowers, and cubed avocado.',
      'Crumble goat cheese over the top.',
      'Sprinkle with candied nuts.',
      'Whisk together citrus juice, honey, mustard, and olive oil for dressing.',
      'Drizzle dressing just before serving.',
    ],
    moodIds: ['creative', 'happy'],
    tags: ['salad', 'flowers', 'seasonal', 'impressive', 'spring', 'summer'],
    imageUrl: 'https://images.pexels.com/photos/4389677/pexels-photo-4389677.jpeg',
    prepTime: '25 min',
    cookTime: '0 min',
    servings: 4,
    calories: 280,
    difficulty: 'Easy',
    aiSuggestion: 'Freeze small edible flowers in ice cubes to serve in water or cocktails alongside your salad.',
    nutritionAnalysis: 'High in vitamins and minerals from fresh greens. Contains healthy fats from avocado and olive oil.',
    cookingTips: [
      'Only use flowers that are specifically grown for culinary use',
      'Taste each flower variety before using - some are spicy, some are sweet',
      'Prepare the salad just before serving to keep flowers looking fresh'
    ]
  },
  {
    id: 'color-changing-cocktail',
    name: 'Color-Changing Butterfly Pea Cocktail',
    description: 'An interactive cocktail that changes color when citrus is added.',
    ingredients: ['Butterfly pea flower tea', 'Gin or vodka', 'Fresh lemon or lime juice', 'Simple syrup', 'Tonic water', 'Ice', 'Edible glitter (optional)'],
    instructions: [
      'Brew butterfly pea flower tea and let cool completely.',
      'Fill glasses with ice.',
      'Mix cooled tea with gin or vodka and simple syrup.',
      'Pour into glasses, creating a vibrant blue drink.',
      'Serve with a small pitcher of citrus juice on the side.',
      'Instruct guests to pour the citrus juice into their drink to watch it transform from blue to purple.',
      'Top with tonic water for bubbles and add edible glitter if desired.',
    ],
    moodIds: ['creative', 'adventurous'],
    tags: ['cocktail', 'drink', 'interactive', 'color-changing', 'entertainment'],
    imageUrl: 'https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg',
    prepTime: '15 min',
    cookTime: '5 min',
    servings: 4,
    calories: 180,
    difficulty: 'Easy',
    aiSuggestion: 'Create a layered effect by carefully pouring ingredients over the back of a spoon for an even more dramatic presentation.',
    nutritionAnalysis: 'Contains antioxidants from the butterfly pea flowers. Limited nutritional benefits as it\'s primarily a cocktail.',
    cookingTips: [
      'Freeze butterfly pea ice cubes to extend the color-changing effect',
      'Make a non-alcoholic version using soda water instead of spirits',
      'The color change works best in clear glassware to showcase the effect'
    ]
  },
  {
    id: 'black-garlic-pasta',
    name: 'Black Garlic Squid Ink Pasta',
    description: 'A dramatic and flavorful pasta showcasing umami-rich ingredients.',
    ingredients: ['Squid ink pasta', 'Black garlic', 'Shrimp or scallops', 'Cherry tomatoes', 'White wine', 'Butter', 'Fresh herbs', 'Lemon zest'],
    instructions: [
      'Cook squid ink pasta according to package instructions.',
      'Mash black garlic into a paste.',
      'Sear shrimp or scallops until just cooked.',
      'In the same pan, add halved cherry tomatoes and cook until blistered.',
      'Deglaze with white wine, then stir in black garlic paste.',
      'Add butter to create a silky sauce.',
      'Toss drained pasta with the sauce.',
      'Garnish with fresh herbs and lemon zest.',
    ],
    moodIds: ['creative', 'adventurous'],
    tags: ['pasta', 'seafood', 'black', 'gourmet', 'italian'],
    imageUrl: 'https://images.pexels.com/photos/6406460/pexels-photo-6406460.jpeg',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: 2,
    calories: 480,
    difficulty: 'Medium',
    aiSuggestion: 'Make black garlic at home by placing whole garlic bulbs in a rice cooker on the "keep warm" setting for 2-3 weeks.',
    nutritionAnalysis: 'Rich in protein from seafood. Black garlic contains concentrated antioxidants from the aging process.',
    cookingTips: [
      'Don\'t overcook the seafood - it will become tough',
      'Black garlic has a sweet, molasses-like flavor that pairs beautifully with the briny squid ink',
      'Reserve some pasta water to adjust the sauce consistency as needed'
    ]
  },
  
  // Adventurous mood recipes (adding 5 more)
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
    imageUrl: 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
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
    imageUrl: 'https://images.pexels.com/photos/6645965/pexels-photo-6645965.jpeg',
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
    ],
    hindiVoiceGuidance: 'मुर्ग करी'
  },
  {
    id: 'thai-green-papaya-salad',
    name: 'Thai Green Papaya Salad (Som Tam)',
    description: 'A vibrant, spicy salad featuring shredded green papaya and traditional Thai flavors.',
    ingredients: ['Green papaya', 'Cherry tomatoes', 'Green beans', 'Thai chilies', 'Garlic', 'Fish sauce', 'Lime juice', 'Palm sugar', 'Peanuts'],
    instructions: [
      'Peel and shred the green papaya.',
      'Lightly bruise green beans and halve cherry tomatoes.',
      'Using a mortar and pestle, crush garlic and Thai chilies.',
      'Add green beans and lightly crush.',
      'Mix in fish sauce, lime juice, and palm sugar to create dressing.',
      'Toss with shredded papaya and tomatoes.',
      'Top with crushed peanuts.',
      'Adjust seasoning to balance sour, spicy, salty, and sweet flavors.',
    ],
    moodIds: ['adventurous', 'energetic'],
    tags: ['thai', 'salad', 'spicy', 'raw', 'exotic'],
    imageUrl: 'https://images.pexels.com/photos/9350652/pexels-photo-9350652.jpeg',
    prepTime: '25 min',
    cookTime: '0 min',
    servings: 2,
    calories: 160,
    difficulty: 'Medium',
    aiSuggestion: 'If green papaya is unavailable, substitute with julienned cucumber and carrot for a similar crunchy texture.',
    nutritionAnalysis: 'Low in calories and high in fiber. Contains enzyme papain from papaya, which aids digestion.',
    cookingTips: [
      'Look for firm, unripe green papayas - they should be hard and green, not showing any signs of ripening',
      'Use a specialty shredder or julienne peeler for the best papaya texture',
      'Start with less chili than you think you need - you can always add more'
    ]
  },
  {
    id: 'moroccan-tagine',
    name: 'Moroccan Lamb Tagine',
    description: 'Slow-cooked lamb stew with exotic spices and dried fruits.',
    ingredients: ['Lamb shoulder', 'Onions', 'Garlic', 'Ginger', 'Cinnamon', 'Cumin', 'Coriander', 'Dried apricots', 'Dates', 'Chickpeas', 'Almonds', 'Fresh herbs'],
    instructions: [
      'Toast whole spices and grind them fresh.',
      'Brown lamb pieces in oil in a tagine or Dutch oven.',
      'Add sliced onions, minced garlic, and grated ginger.',
      'Stir in ground spices and cook until fragrant.',
      'Add water or stock, bring to a simmer.',
      'Cover and cook on low heat for 2-3 hours until meat is tender.',
      'Add dried fruits and chickpeas in the last 30 minutes.',
      'Garnish with toasted almonds and fresh herbs.',
      'Serve with couscous or flatbread.',
    ],
    moodIds: ['adventurous', 'comforting'],
    tags: ['moroccan', 'stew', 'lamb', 'slow-cooked', 'exotic'],
    imageUrl: 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg',
    prepTime: '30 min',
    cookTime: '3 hours',
    servings: 6,
    calories: 520,
    difficulty: 'Medium',
    aiSuggestion: 'Add a teaspoon of ras el hanout, a traditional Moroccan spice blend, for authentic flavor.',
    nutritionAnalysis: 'Rich in protein from lamb and chickpeas. Contains iron, zinc, and B vitamins from meat.',
    cookingTips: [
      'If you don\'t have a tagine, use a heavy Dutch oven with a tight-fitting lid',
      'Don\'t rush the cooking process - slow cooking develops the rich flavors',
      'The stew tastes even better the next day after flavors have melded'
    ]
  },
  {
    id: 'korean-bibimbap',
    name: 'Korean Bibimbap',
    description: 'A colorful Korean rice bowl topped with vegetables, protein, and gochujang sauce.',
    ingredients: ['Rice', 'Spinach', 'Bean sprouts', 'Carrots', 'Zucchini', 'Mushrooms', 'Beef or tofu', 'Fried egg', 'Gochujang (Korean chili paste)', 'Sesame oil', 'Sesame seeds'],
    instructions: [
      'Cook rice until fluffy.',
      'Sauté each vegetable separately with a little garlic and sesame oil.',
      'Season each vegetable differently for varied flavors.',
      'Cook marinated beef or tofu until done.',
      'Fry an egg sunny-side up.',
      'Assemble bowl with rice on the bottom.',
      'Arrange vegetables and protein in sections around the bowl.',
      'Place fried egg in the center.',
      'Serve with gochujang sauce on the side for mixing in.',
    ],
    moodIds: ['adventurous', 'creative'],
    tags: ['korean', 'rice bowl', 'colorful', 'customizable', 'spicy'],
    imageUrl: 'https://images.pexels.com/photos/5338135/pexels-photo-5338135.jpeg',
    prepTime: '40 min',
    cookTime: '30 min',
    servings: 4,
    calories: 480,
    difficulty: 'Medium',
    aiSuggestion: 'Serve in a hot stone bowl (dolsot) to create crispy rice at the bottom of the bowl.',
    nutritionAnalysis: 'Balanced meal with protein, vegetables, and carbohydrates. Fermented gochujang contains probiotics.',
    cookingTips: [
      'Prepare all ingredients before assembly, as the dish comes together quickly at the end',
      'Traditional bibimbap is mixed thoroughly before eating to combine all flavors',
      'Adjust the amount of gochujang based on your spice preference'
    ]
  },
  {
    id: 'peruvian-ceviche',
    name: 'Peruvian Ceviche',
    description: 'Fresh fish "cooked" in citrus juice with vibrant Peruvian flavors.',
    ingredients: ['Fresh white fish', 'Lime juice', 'Red onion', 'Aji amarillo (Peruvian yellow chili)', 'Cilantro', 'Sweet potato', 'Corn', 'Cancha (toasted corn)'],
    instructions: [
      'Dice fish into small cubes and place in a glass bowl.',
      'Cover with fresh lime juice and let marinate for 15-30 minutes until fish turns opaque.',
      'Meanwhile, thinly slice red onion and soak in ice water.',
      'Finely chop aji amarillo and cilantro.',
      'Drain fish, reserving some lime juice.',
      'Mix fish with drained red onion, chili, and cilantro.',
      'Add salt and a touch of the reserved lime juice to taste.',
      'Serve with slices of sweet potato, corn, and cancha on the side.',
    ],
    moodIds: ['adventurous', 'energetic'],
    tags: ['peruvian', 'seafood', 'raw', 'citrus', 'spicy'],
    imageUrl: 'https://images.pexels.com/photos/5737254/pexels-photo-5737254.jpeg',
    prepTime: '30 min',
    cookTime: '0 min',
    servings: 4,
    calories: 220,
    difficulty: 'Medium',
    aiSuggestion: 'Add a small amount of fish stock to the lime juice for "leche de tigre" sauce to serve alongside the ceviche.',
    nutritionAnalysis: 'High in protein from fish. Rich in vitamin C from lime juice. Low in calories and fat.',
    cookingTips: [
      'Use only the freshest fish, sushi-grade if possible',
      'Don\'t marinate the fish too long or it will become tough',
      'Traditional Peruvian ceviche is served immediately after marinating, not left to sit'
    ]
  },
  
  // Nostalgic mood recipes (adding 4 more)
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
    imageUrl: 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg',
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
    id: 'classic-macaroni-cheese',
    name: 'Classic Baked Macaroni and Cheese',
    description: 'Creamy, comforting macaroni and cheese with a crispy breadcrumb topping.',
    ingredients: ['Elbow macaroni', 'Cheddar cheese', 'Butter', 'Flour', 'Milk', 'Bread crumbs', 'Mustard powder', 'Nutmeg'],
    instructions: [
      'Cook macaroni until al dente, then drain.',
      'Make a roux with butter and flour.',
      'Gradually whisk in milk to create a béchamel sauce.',
      'Add mustard powder, salt, pepper, and a pinch of nutmeg.',
      'Stir in grated cheese until melted.',
      'Fold in cooked macaroni.',
      'Transfer to a baking dish.',
      'Top with bread crumbs and additional cheese.',
      'Bake at 350°F until bubbling and golden, about 30 minutes.',
    ],
    moodIds: ['nostalgic', 'comforting'],
    tags: ['pasta', 'cheese', 'comfort food', 'baked', 'american'],
    imageUrl: 'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg',
    prepTime: '20 min',
    cookTime: '40 min',
    servings: 6,
    calories: 480,
    difficulty: 'Medium',
    aiSuggestion: 'Add a layer of thinly sliced tomatoes under the breadcrumb topping for a tangy contrast to the rich cheese sauce.',
    nutritionAnalysis: 'High in calcium from cheese and protein. Rich in carbohydrates from pasta. Best enjoyed in moderation.',
    cookingTips: [
      'Slightly undercook the pasta as it will continue to cook in the oven',
      'For the smoothest sauce, add the cheese off the heat and stir until melted',
      'Let the mac and cheese rest for 10 minutes after baking for easier serving'
    ]
  },
  {
    id: 'chicken-noodle-soup',
    name: 'Homestyle Chicken Noodle Soup',
    description: 'A comforting soup just like grandma used to make.',
    ingredients: ['Chicken', 'Carrots', 'Celery', 'Onion', 'Egg noodles', 'Chicken broth', 'Bay leaves', 'Fresh herbs'],
    instructions: [
      'Simmer a whole chicken in water with aromatics to make stock.',
      'Remove chicken, cool slightly, then shred the meat.',
      'Strain the broth and return to the pot.',
      'Add diced carrots, celery, and onion.',
      'Simmer until vegetables are tender.',
      'Add egg noodles and cook until al dente.',
      'Return shredded chicken to the pot to warm through.',
      'Season with salt, pepper, and fresh herbs.',
      'Serve hot with crusty bread.',
    ],
    moodIds: ['nostalgic', 'comforting'],
    tags: ['soup', 'chicken', 'comfort food', 'homestyle'],
    imageUrl: 'https://images.pexels.com/photos/5966141/pexels-photo-5966141.jpeg',
    prepTime: '30 min',
    cookTime: '2 hours',
    servings: 8,
    calories: 280,
    difficulty: 'Medium',
    aiSuggestion: 'For maximum flavor, refrigerate the stock overnight and remove the fat cap before proceeding with the soup.',
    nutritionAnalysis: 'Rich in protein from chicken and contains vitamins and minerals from vegetables. Great source of hydration.',
    cookingTips: [
      'Add a squeeze of lemon juice just before serving to brighten the flavors',
      'If short on time, use rotisserie chicken and store-bought broth',
      'Add noodles just before serving or store separately to prevent them from absorbing too much broth'
    ]
  },
  {
    id: 'peanut-butter-cookies',
    name: 'Classic Peanut Butter Cookies',
    description: 'Soft and chewy cookies with the nostalgic crisscross pattern.',
    ingredients: ['Peanut butter', 'Butter', 'Brown sugar', 'White sugar', 'Egg', 'Vanilla extract', 'Flour', 'Baking soda'],
    instructions: [
      'Cream together peanut butter, butter, and both sugars until light and fluffy.',
      'Beat in egg and vanilla extract.',
      'In a separate bowl, whisk together flour and baking soda.',
      'Gradually add dry ingredients to wet ingredients.',
      'Roll dough into balls and place on baking sheet.',
      'Press a crisscross pattern into each cookie with a fork.',
      'Bake at 350°F for 10-12 minutes until edges are golden.',
      'Let cool on the baking sheet for 5 minutes before transferring to a wire rack.',
    ],
    moodIds: ['nostalgic', 'happy'],
    tags: ['cookies', 'peanut butter', 'baking', 'dessert', 'classic'],
    imageUrl: 'https://images.pexels.com/photos/5389224/pexels-photo-5389224.jpeg',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: 24,
    calories: 120,
    difficulty: 'Easy',
    aiSuggestion: 'For extra peanutty flavor, use crunchy peanut butter and add a handful of chopped peanuts to the dough.',
    nutritionAnalysis: 'Contains protein from peanut butter. Higher in healthy fats than typical cookies.',
    cookingTips: [
      'Chill the dough for 30 minutes before baking for thicker cookies',
      'Use room temperature ingredients for best texture',
      'Don\'t overbake - cookies will firm up as they cool'
    ]
  },
  {
    id: 'classic-meatloaf',
    name: 'Old-Fashioned Meatloaf',
    description: 'A nostalgic American comfort food with a sweet glaze.',
    ingredients: ['Ground beef', 'Onion', 'Bread crumbs', 'Milk', 'Eggs', 'Ketchup', 'Brown sugar', 'Mustard', 'Bell pepper'],
    instructions: [
      'Sauté onions and bell pepper until soft, then cool slightly.',
      'In a large bowl, combine ground beef, bread crumbs, milk, eggs, and cooled vegetables.',
      'Season with salt, pepper, and herbs.',
      'Shape into a loaf in a baking pan.',
      'Mix ketchup, brown sugar, and mustard for the glaze.',
      'Spread half the glaze over the meatloaf.',
      'Bake at 350°F for 45 minutes.',
      'Add remaining glaze and bake for an additional 15 minutes.',
      'Let rest for 10 minutes before slicing.',
    ],
    moodIds: ['nostalgic', 'comforting'],
    tags: ['beef', 'american', 'comfort food', 'dinner', 'classic'],
    imageUrl: 'https://images.pexels.com/photos/4009371/pexels-photo-4009371.jpeg',
    prepTime: '20 min',
    cookTime: '1 hour',
    servings: 8,
    calories: 320,
    difficulty: 'Easy',
    aiSuggestion: 'Place a few strips of bacon across the top before baking for extra flavor and moisture.',
    nutritionAnalysis: 'High in protein from beef. Contains B vitamins, iron, and zinc. Moderately high in fat and sodium.',
    cookingTips: [
      'Use a meat thermometer to ensure the internal temperature reaches 160°F',
      'Mix ingredients gently to avoid compacting the meat, which makes a tough meatloaf',
      'Let the meatloaf rest before slicing to keep it from falling apart'
    ]
  },
  {
    id: 'tuna-noodle-casserole',
    name: 'Classic Tuna Noodle Casserole',
    description: 'A comforting casserole that brings back childhood memories.',
    ingredients: ['Egg noodles', 'Canned tuna', 'Frozen peas', 'Condensed cream of mushroom soup', 'Milk', 'Cheddar cheese', 'Potato chips or breadcrumbs', 'Onion'],
    instructions: [
      'Cook egg noodles until al dente and drain.',
      'In a large bowl, mix condensed soup, milk, and diced onion.',
      'Fold in drained tuna, cooked noodles, frozen peas, and half the cheese.',
      'Transfer to a greased baking dish.',
      'Top with remaining cheese and crushed potato chips or breadcrumbs.',
      'Bake at 350°F for 25-30 minutes until bubbly and golden.',
      'Let stand for 5 minutes before serving.',
    ],
    moodIds: ['nostalgic', 'comforting'],
    tags: ['casserole', 'tuna', 'pasta', 'comfort food', 'american'],
    imageUrl: 'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 6,
    calories: 380,
    difficulty: 'Easy',
    aiSuggestion: 'Sauté mushrooms with the onions to add more flavor and texture to this classic dish.',
    nutritionAnalysis: 'Contains lean protein from tuna, omega-3 fatty acids, and carbohydrates from noodles.',
    cookingTips: [
      'Choose solid white albacore tuna for a milder flavor and better texture',
      'Add a dash of hot sauce or Worcestershire sauce to the soup mixture for extra flavor',
      'Make individual portions in ramekins for a fun presentation'
    ]
  },
  
  // Comforting mood recipes (adding 6)
  {
    id: 'homemade-chicken-soup',
    name: 'Healing Chicken Soup',
    description: 'A soothing bowl of chicken soup that warms both body and soul.',
    ingredients: ['Whole chicken', 'Carrots', 'Celery', 'Onion', 'Garlic', 'Fresh herbs', 'Bay leaf', 'Egg noodles'],
    instructions: [
      'Place whole chicken in a large pot and cover with water.',
      'Add roughly chopped vegetables, herbs, and bay leaf.',
      'Bring to a boil, then reduce heat and simmer for 1.5 hours.',
      'Remove chicken and let cool slightly before shredding the meat.',
      'Strain broth and return to pot.',
      'Add diced carrots, celery, and onion to the broth and simmer until tender.',
      'Add egg noodles and cook until al dente.',
      'Return shredded chicken to the pot and season with salt and pepper.',
      'Serve hot with fresh herbs.',
    ],
    moodIds: ['comforting'],
    tags: ['soup', 'chicken', 'healing', 'classic'],
    imageUrl: 'https://images.pexels.com/photos/5966141/pexels-photo-5966141.jpeg',
    prepTime: '30 min',
    cookTime: '2 hours',
    servings: 8,
    calories: 280,
    difficulty: 'Medium',
    aiSuggestion: 'Add a parmesan rind to the broth while simmering for an extra layer of umami flavor.',
    nutritionAnalysis: 'Rich in protein, vitamins, and minerals. Contains anti-inflammatory compounds from herbs and vegetables.',
    cookingTips: [
      'For a clearer broth, skim the foam that rises to the top during the first 30 minutes of simmering',
      'Store noodles separately from the broth if making ahead to prevent them from getting mushy',
      'Freeze portions in zip-top bags for easy homemade soup anytime'
    ]
  },
  {
    id: 'creamy-mashed-potatoes',
    name: 'Creamy Garlic Mashed Potatoes',
    description: 'Velvety smooth mashed potatoes with roasted garlic and butter.',
    ingredients: ['Yukon Gold potatoes', 'Butter', 'Heavy cream', 'Roasted garlic', 'Salt', 'White pepper', 'Chives'],
    instructions: [
      'Peel and cut potatoes into even chunks.',
      'Boil potatoes in salted water until fork-tender.',
      'Meanwhile, roast a head of garlic until soft and fragrant.',
      'Drain potatoes well and return to the pot.',
      'Heat butter and cream until warm.',
      'Rice or mash potatoes until smooth.',
      'Squeeze in roasted garlic cloves.',
      'Fold in warm butter and cream mixture.',
      'Season with salt and white pepper.',
      'Garnish with fresh chives before serving.',
    ],
    moodIds: ['comforting'],
    tags: ['side dish', 'potatoes', 'vegetarian', 'creamy'],
    imageUrl: 'https://images.pexels.com/photos/6912801/pexels-photo-6912801.jpeg',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 6,
    calories: 220,
    difficulty: 'Easy',
    aiSuggestion: 'For an ultra-smooth texture, push the potatoes through a fine-mesh sieve instead of using a potato masher.',
    nutritionAnalysis: 'Contains potassium and vitamin C from potatoes. High in calories from butter and cream.',
    cookingTips: [
      'Use Yukon Gold potatoes for the creamiest texture',
      'Don\'t overwork the potatoes or they can become gummy',
      'Warm the butter and cream to keep the potatoes hot longer'
    ]
  },
  {
    id: 'beef-stew',
    name: 'Hearty Beef Stew',
    description: 'A rich and warming beef stew loaded with vegetables and tender meat.',
    ingredients: ['Beef chuck', 'Carrots', 'Potatoes', 'Onions', 'Celery', 'Garlic', 'Red wine', 'Beef broth', 'Tomato paste', 'Bay leaves', 'Thyme'],
    instructions: [
      'Cut beef into 1-inch cubes and season with salt and pepper.',
      'Brown beef in batches in a Dutch oven.',
      'Remove beef and sauté onions, carrots, and celery until softened.',
      'Add garlic and cook until fragrant.',
      'Deglaze with red wine, scraping up browned bits.',
      'Return beef to the pot and add broth, tomato paste, herbs, and bay leaves.',
      'Simmer covered for 1.5 hours until beef is tender.',
      'Add potatoes and cook for another 30-45 minutes.',
      'Season to taste and serve hot.',
    ],
    moodIds: ['comforting'],
    tags: ['stew', 'beef', 'one-pot', 'dinner', 'winter'],
    imageUrl: 'https://images.pexels.com/photos/5639867/pexels-photo-5639867.jpeg',
    prepTime: '30 min',
    cookTime: '2.5 hours',
    servings: 8,
    calories: 420,
    difficulty: 'Medium',
    aiSuggestion: 'For a deeper flavor, make a day ahead and reheat gently before serving.',
    nutritionAnalysis: 'Rich in protein from beef, vitamins from vegetables, and iron. A complete meal in one bowl.',
    cookingTips: [
      'Choose a marbled cut of beef like chuck for the most tender results',
      'Don\'t rush the browning process - it builds essential flavor',
      'Add green peas in the last 5 minutes of cooking for a pop of color and sweetness'
    ]
  },
  {
    id: 'chocolate-chip-cookies',
    name: 'Perfect Chocolate Chip Cookies',
    description: 'Soft and chewy cookies with pools of melted chocolate.',
    ingredients: ['Butter', 'Brown sugar', 'White sugar', 'Eggs', 'Vanilla extract', 'Flour', 'Baking soda', 'Salt', 'Chocolate chips'],
    instructions: [
      'Brown half the butter in a saucepan until nutty and fragrant, then cool.',
      'Cream together all butter and sugars until light and fluffy.',
      'Beat in eggs one at a time, then vanilla.',
      'Mix dry ingredients in a separate bowl.',
      'Gradually add dry ingredients to wet mixture.',
      'Fold in chocolate chips.',
      'Chill dough for at least 1 hour.',
      'Roll into balls and place on baking sheet.',
      'Bake at 350°F for 10-12 minutes until edges are golden.',
      'Let cool slightly before transferring to a wire rack.',
    ],
    moodIds: ['comforting', 'happy'],
    tags: ['cookies', 'chocolate', 'baking', 'dessert', 'classic'],
    imageUrl: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg',
    prepTime: '20 min',
    cookTime: '12 min',
    servings: 24,
    calories: 170,
    difficulty: 'Easy',
    aiSuggestion: 'Use chocolate chunks instead of chips and sprinkle with flaky sea salt before baking for a gourmet touch.',
    nutritionAnalysis: 'High in sugar and fat. Contains small amounts of protein from eggs and flour.',
    cookingTips: [
      'Use a mix of chocolate varieties (milk, semi-sweet, dark) for complex flavor',
      'Slightly underbake for a chewier texture - they\'ll continue cooking on the hot baking sheet',
      'For perfectly round cookies, use a round cutter to shape them right after baking'
    ]
  },
  {
    id: 'vegetable-lasagna',
    name: 'Roasted Vegetable Lasagna',
    description: 'A comforting vegetarian lasagna loaded with colorful roasted vegetables.',
    ingredients: ['Lasagna noodles', 'Zucchini', 'Eggplant', 'Bell peppers', 'Spinach', 'Ricotta cheese', 'Mozzarella cheese', 'Parmesan cheese', 'Marinara sauce', 'Garlic', 'Basil'],
    instructions: [
      'Slice zucchini, eggplant, and bell peppers, then roast until caramelized.',
      'Cook lasagna noodles according to package directions.',
      'Mix ricotta with eggs, parmesan, garlic, and herbs.',
      'In a baking dish, spread a thin layer of marinara sauce.',
      'Layer noodles, ricotta mixture, roasted vegetables, spinach, mozzarella, and sauce.',
      'Repeat layers, ending with sauce and a sprinkle of cheese.',
      'Cover with foil and bake at 375°F for 40 minutes.',
      'Remove foil and bake for 10-15 more minutes until cheese is golden.',
      'Let rest for 15 minutes before cutting.',
    ],
    moodIds: ['comforting', 'mindful'],
    tags: ['lasagna', 'vegetarian', 'pasta', 'italian', 'vegetables'],
    imageUrl: 'https://images.pexels.com/photos/6896439/pexels-photo-6896439.jpeg',
    prepTime: '45 min',
    cookTime: '1 hour',
    servings: 8,
    calories: 380,
    difficulty: 'Medium',
    aiSuggestion: 'Use no-boil lasagna noodles and add an extra 1/4 cup of sauce to ensure they cook properly.',
    nutritionAnalysis: 'Good source of calcium from cheese, vitamins and fiber from vegetables. Lower in calories than meat lasagna.',
    cookingTips: [
      'Salt eggplant slices and let them sit for 30 minutes to remove bitterness, then pat dry before roasting',
      'Let the lasagna rest before cutting to prevent it from falling apart',
      'For a vegan version, use cashew ricotta and plant-based mozzarella'
    ]
  },
  {
    id: 'cinnamon-rolls',
    name: 'Homemade Cinnamon Rolls',
    description: 'Soft, fluffy cinnamon rolls with cream cheese frosting.',
    ingredients: ['Flour', 'Milk', 'Butter', 'Eggs', 'Sugar', 'Yeast', 'Cinnamon', 'Brown sugar', 'Cream cheese', 'Vanilla extract', 'Powdered sugar'],
    instructions: [
      'Warm milk and dissolve yeast with a pinch of sugar.',
      'Mix flour, sugar, and salt in a large bowl.',
      'Add melted butter, eggs, and yeast mixture, then knead until smooth.',
      'Let dough rise until doubled in size, about 1 hour.',
      'Roll out dough into a rectangle and spread with softened butter.',
      'Sprinkle with cinnamon-sugar mixture.',
      'Roll up tightly and cut into rounds.',
      'Place in a greased pan and let rise again for 30 minutes.',
      'Bake at 350°F for 25-30 minutes until golden brown.',
      'Mix cream cheese, butter, powdered sugar, and vanilla for frosting.',
      'Spread frosting over warm rolls.',
    ],
    moodIds: ['comforting', 'happy'],
    tags: ['breakfast', 'baking', 'cinnamon', 'brunch', 'sweet'],
    imageUrl: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg',
    prepTime: '30 min',
    cookTime: '30 min',
    servings: 12,
    calories: 420,
    difficulty: 'Medium',
    aiSuggestion: 'Prepare the rolls the night before and refrigerate after cutting. In the morning, let them come to room temperature for 30 minutes before baking.',
    nutritionAnalysis: 'High in carbohydrates and sugar. Contains protein from milk, eggs, and flour.',
    cookingTips: [
      'Use dental floss to cut the cinnamon roll log cleanly without squishing it',
      'Place a pan of water on the bottom rack of the oven while baking for extra soft rolls',
      'For gooey centers, slightly underbake the rolls'
    ]
  },
  
  // Festive mood recipes (adding 6)
  {
    id: 'holiday-cranberry-punch',
    name: 'Holiday Cranberry Punch',
    description: 'A festive, sparkling punch perfect for celebrations.',
    ingredients: ['Cranberry juice', 'Orange juice', 'Pineapple juice', 'Ginger ale', 'Fresh cranberries', 'Orange slices', 'Cinnamon sticks', 'Star anise'],
    instructions: [
      'Combine cranberry, orange, and pineapple juices in a large punch bowl.',
      'Chill thoroughly, at least 2 hours.',
      'Just before serving, add chilled ginger ale.',
      'Float fresh cranberries and orange slices on top.',
      'Garnish with cinnamon sticks and star anise.',
      'Serve in punch cups with ice.',
    ],
    moodIds: ['festive'],
    tags: ['drink', 'punch', 'holiday', 'party', 'non-alcoholic'],
    imageUrl: 'https://images.pexels.com/photos/5947221/pexels-photo-5947221.jpeg',
    prepTime: '15 min',
    cookTime: '0 min',
    servings: 12,
    calories: 120,
    difficulty: 'Easy',
    aiSuggestion: 'Make decorative ice cubes with cranberries and mint leaves frozen inside for a festive touch.',
    nutritionAnalysis: 'Contains vitamin C from fruit juices. High in natural sugars from fruit juices.',
    cookingTips: [
      'For an adult version, add sparkling wine instead of ginger ale',
      'Freeze some of the punch in advance to use as ice cubes that won\'t dilute the drink',
      'Make a simple syrup infused with cinnamon and cloves to sweeten the punch if desired'
    ]
  },
  {
    id: 'festive-stuffed-mushrooms',
    name: 'Festive Stuffed Mushrooms',
    description: 'Elegant appetizer of mushroom caps filled with a savory mixture.',
    ingredients: ['Large mushroom caps', 'Cream cheese', 'Garlic', 'Spinach', 'Artichoke hearts', 'Parmesan cheese', 'Bread crumbs', 'Fresh herbs'],
    instructions: [
      'Preheat oven to 375°F.',
      'Clean mushrooms and remove stems, reserving stems for filling.',
      'Finely chop mushroom stems, garlic, spinach, and artichoke hearts.',
      'Sauté chopped vegetables until moisture evaporates.',
      'Mix with softened cream cheese, parmesan, herbs, and a dash of hot sauce.',
      'Fill mushroom caps with mixture.',
      'Top with bread crumbs and a drizzle of olive oil.',
      'Bake for 15-20 minutes until golden and bubbling.',
      'Garnish with fresh herbs before serving.',
    ],
    moodIds: ['festive'],
    tags: ['appetizer', 'mushrooms', 'party', 'finger food', 'vegetarian'],
    imageUrl: 'https://images.pexels.com/photos/5718078/pexels-photo-5718078.jpeg',
    prepTime: '25 min',
    cookTime: '20 min',
    servings: 12,
    calories: 90,
    difficulty: 'Medium',
    aiSuggestion: 'Prepare the filling up to two days ahead and store in the refrigerator, then stuff and bake just before serving.',
    nutritionAnalysis: 'Low in calories. Contains protein from cheese, vitamins from vegetables, and antioxidants from mushrooms.',
    cookingTips: [
      'Select mushrooms with caps that are slightly cupped to hold more filling',
      'Don\'t over-stuff the mushrooms or the filling will overflow during baking',
      'Place mushrooms on a rack over a baking sheet to prevent them from getting soggy'
    ]
  },
  {
    id: 'roasted-turkey',
    name: 'Herb-Roasted Turkey',
    description: 'A festive centerpiece of herb-butter roasted turkey with crispy skin.',
    ingredients: ['Whole turkey', 'Butter', 'Garlic', 'Fresh herbs (rosemary, thyme, sage)', 'Lemon', 'Onion', 'Celery', 'Carrots', 'Chicken broth'],
    instructions: [
      'Remove turkey from refrigerator 1 hour before roasting.',
      'Preheat oven to 325°F.',
      'Make herb butter by mixing softened butter with minced garlic, chopped herbs, salt, and pepper.',
      'Pat turkey dry and carefully separate skin from breast meat.',
      'Rub herb butter under the skin and all over the turkey.',
      'Stuff cavity with lemon, onion, and herb sprigs.',
      'Place chopped vegetables in roasting pan and place turkey on top.',
      'Add broth to the pan.',
      'Roast until internal temperature reaches 165°F, basting occasionally.',
      'Let rest for 30 minutes before carving.',
    ],
    moodIds: ['festive'],
    tags: ['turkey', 'thanksgiving', 'christmas', 'dinner', 'main course'],
    imageUrl: 'https://images.pexels.com/photos/8480147/pexels-photo-8480147.jpeg',
    prepTime: '45 min',
    cookTime: '3.5 hours',
    servings: 12,
    calories: 380,
    difficulty: 'Hard',
    aiSuggestion: 'Brine the turkey for 24 hours before roasting for the juiciest, most flavorful results.',
    nutritionAnalysis: 'High in protein from turkey. Contains B vitamins, zinc, and iron. Lower in fat when skin is removed.',
    cookingTips: [
      'Calculate approximately 15 minutes per pound for cooking time',
      'Use a meat thermometer to ensure doneness rather than relying on time alone',
      'Tent with foil if the skin browns too quickly but the internal temperature hasn\'t reached 165°F'
    ]
  },
  {
    id: 'festive-cheese-board',
    name: 'Festive Holiday Cheese Board',
    description: 'An impressive spread of cheeses, meats, fruits, and accompaniments.',
    ingredients: ['Assorted cheeses', 'Cured meats', 'Fresh and dried fruits', 'Nuts', 'Olives', 'Crackers', 'Baguette', 'Honey', 'Fig jam', 'Edible flowers'],
    instructions: [
      'Select a variety of cheeses with different textures and milk types.',
      'Remove cheese from refrigerator 1 hour before serving.',
      'Arrange larger items on the board first: bowls of olives, honey, jam.',
      'Place cheeses with space between them.',
      'Fold or roll meats and tuck them between cheeses.',
      'Fill in gaps with clusters of grapes, sliced fruits, and nuts.',
      'Add crackers and bread slices along the edges.',
      'Garnish with fresh herbs and edible flowers.',
      'Label cheeses with small markers if desired.',
      'Serve with small cheese knives and serving utensils.',
    ],
    moodIds: ['festive', 'romantic'],
    tags: ['appetizer', 'entertaining', 'party', 'no-cook', 'charcuterie'],
    imageUrl: 'https://images.pexels.com/photos/5792322/pexels-photo-5792322.jpeg',
    prepTime: '30 min',
    cookTime: '0 min',
    servings: 10,
    calories: 420,
    difficulty: 'Easy',
    aiSuggestion: 'Theme your board with seasonal colors - cranberries, rosemary sprigs, and orange slices for winter holidays.',
    nutritionAnalysis: 'High in protein and calcium from cheese, healthy fats from nuts, antioxidants from fruits.',
    cookingTips: [
      'Plan about 2 ounces of cheese per person',
      'Include a mix of soft, semi-soft, and hard cheeses',
      'Create height and visual interest by using serving pieces of different heights'
    ]
  },
  {
    id: 'mulled-wine',
    name: 'Spiced Mulled Wine',
    description: 'Warming spiced wine perfect for holiday gatherings.',
    ingredients: ['Red wine', 'Orange', 'Cinnamon sticks', 'Cloves', 'Star anise', 'Cardamom pods', 'Honey or sugar', 'Brandy (optional)'],
    instructions: [
      'Use a vegetable peeler to remove strips of orange zest.',
      'Juice the orange.',
      'Combine wine, orange juice, zest, and spices in a large pot.',
      'Heat gently until steaming but not boiling.',
      'Simmer on low for 15-20 minutes to infuse flavors.',
      'Stir in honey or sugar to taste.',
      'Add a splash of brandy if desired.',
      'Strain and serve warm in mugs or heat-proof glasses.',
      'Garnish with orange slices and cinnamon sticks.',
    ],
    moodIds: ['festive', 'comforting'],
    tags: ['drink', 'wine', 'holiday', 'winter', 'party'],
    imageUrl: 'https://images.pexels.com/photos/5349859/pexels-photo-5349859.jpeg',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 8,
    calories: 150,
    difficulty: 'Easy',
    aiSuggestion: 'Make a large batch and keep warm in a slow cooker for easy serving at a holiday party.',
    nutritionAnalysis: 'Contains antioxidants from wine and anti-inflammatory compounds from spices. Moderate alcohol content.',
    cookingTips: [
      'Use a full-bodied red wine like Merlot or Zinfandel',
      'Never let the wine boil or the alcohol will evaporate and the flavors will become bitter',
      'For a non-alcoholic version, substitute pomegranate juice and grape juice for the wine'
    ]
  },
  {
    id: 'yule-log-cake',
    name: 'Chocolate Yule Log Cake',
    description: 'A festive chocolate sponge roll cake decorated to look like a woodland log.',
    ingredients: ['Eggs', 'Sugar', 'Flour', 'Cocoa powder', 'Heavy cream', 'Dark chocolate', 'Vanilla extract', 'Powdered sugar', 'Marzipan or fondant for decorations'],
    instructions: [
      'Preheat oven to 350°F.',
      'Beat eggs and sugar until pale and fluffy.',
      'Fold in sifted flour and cocoa powder.',
      'Spread batter onto a lined baking sheet.',
      'Bake for 10-12 minutes until springy.',
      'Turn out onto a cocoa-dusted towel while still warm.',
      'Roll up with the towel and let cool.',
      'Make ganache by heating cream and pouring over chopped chocolate.',
      'Unroll cooled cake and spread with some of the ganache.',
      'Re-roll cake and frost the outside with remaining ganache.',
      'Create bark texture using a fork.',
      'Dust with powdered sugar "snow" and add marzipan mushrooms and holly leaves.',
    ],
    moodIds: ['festive'],
    tags: ['dessert', 'cake', 'christmas', 'chocolate', 'holiday'],
    imageUrl: 'https://images.pexels.com/photos/5980755/pexels-photo-5980755.jpeg',
    prepTime: '45 min',
    cookTime: '12 min',
    servings: 10,
    calories: 420,
    difficulty: 'Hard',
    aiSuggestion: 'Add a tablespoon of espresso powder to the cake batter to enhance the chocolate flavor without adding coffee taste.',
    nutritionAnalysis: 'High in sugar and fat. Contains protein from eggs and antioxidants from cocoa.',
    cookingTips: [
      'Roll the cake while still warm to prevent cracking',
      'If the cake does crack, don\'t worry - the cracks will add to the rustic log appearance',
      'Make the marzipan mushrooms a day ahead to allow them to firm up'
    ]
  },
  
  // Mindful mood recipes (adding 6)
  {
    id: 'buddha-bowl',
    name: 'Nourishing Buddha Bowl',
    description: 'A balanced bowl of grains, vegetables, protein, and healthy fats.',
    ingredients: ['Quinoa', 'Roasted sweet potatoes', 'Steamed kale', 'Avocado', 'Chickpeas', 'Red cabbage', 'Carrots', 'Tahini dressing', 'Pumpkin seeds'],
    instructions: [
      'Cook quinoa according to package directions.',
      'Roast sweet potato cubes with olive oil, salt, and spices.',
      'Steam kale until bright green and tender.',
      'Rinse and drain chickpeas, season, and roast until crispy.',
      'Thinly slice red cabbage and julienne carrots.',
      'Make tahini dressing with lemon juice, garlic, and a splash of water.',
      'Arrange all components in a bowl.',
      'Drizzle with dressing and sprinkle with pumpkin seeds.',
      'Take a moment to appreciate the colors and textures before eating mindfully.',
    ],
    moodIds: ['mindful'],
    tags: ['bowl', 'vegetarian', 'vegan', 'healthy', 'grain bowl'],
    imageUrl: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg',
    prepTime: '30 min',
    cookTime: '30 min',
    servings: 2,
    calories: 480,
    difficulty: 'Medium',
    aiSuggestion: 'Try adding fermented vegetables like kimchi or sauerkraut for gut-healthy probiotics.',
    nutritionAnalysis: 'Complete protein from quinoa and chickpeas, fiber from vegetables, healthy fats from avocado and seeds.',
    cookingTips: [
      'Prepare components ahead of time for quick assembly during the week',
      'Season each component individually for layers of flavor',
      'Eat slowly and mindfully, noticing the different flavors and textures'
    ]
  },
  {
    id: 'matcha-chia-pudding',
    name: 'Matcha Chia Seed Pudding',
    description: 'A mindful breakfast or snack with antioxidant-rich matcha and omega-3-packed chia seeds.',
    ingredients: ['Chia seeds', 'Almond milk', 'Matcha powder', 'Maple syrup', 'Vanilla extract', 'Fresh berries', 'Sliced almonds', 'Coconut flakes'],
    instructions: [
      'Whisk matcha powder with a small amount of warm water to dissolve.',
      'In a jar, combine chia seeds, almond milk, dissolved matcha, maple syrup, and vanilla.',
      'Stir well, making sure there are no clumps.',
      'Cover and refrigerate overnight or for at least 4 hours.',
      'Stir again before serving.',
      'Top with fresh berries, sliced almonds, and coconut flakes.',
      'Take a moment to be grateful for the nourishing meal before eating.',
    ],
    moodIds: ['mindful'],
    tags: ['breakfast', 'pudding', 'matcha', 'chia seeds', 'healthy'],
    imageUrl: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 2,
    calories: 280,
    difficulty: 'Easy',
    aiSuggestion: 'Create a layered parfait by alternating chia pudding with coconut yogurt for visual appeal.',
    nutritionAnalysis: 'Rich in omega-3 fatty acids from chia seeds, antioxidants from matcha, and calcium from almond milk.',
    cookingTips: [
      'Use ceremonial grade matcha for the best flavor and brightest green color',
      'Stir the mixture twice during the first hour to prevent clumping',
      'Make a big batch to enjoy throughout the week'
    ]
  },
  {
    id: 'rainbow-spring-rolls',
    name: 'Rainbow Vegetable Spring Rolls',
    description: 'Fresh rice paper rolls filled with colorful vegetables and herbs.',
    ingredients: ['Rice paper wrappers', 'Red cabbage', 'Carrots', 'Bell peppers', 'Cucumber', 'Avocado', 'Fresh herbs (mint, cilantro, basil)', 'Rice noodles', 'Peanut dipping sauce'],
    instructions: [
      'Cook rice noodles according to package directions, then cool.',
      'Julienne all vegetables into thin strips.',
      'Prepare a shallow dish of warm water for dipping rice paper.',
      'Dip one rice paper wrapper in warm water until pliable.',
      'Lay on a clean work surface and arrange a small amount of each vegetable and herbs in the center.',
      'Fold in the sides, then roll tightly from the bottom up.',
      'Repeat with remaining wrappers and filling.',
      'Make peanut sauce by mixing peanut butter, soy sauce, lime juice, honey, and water.',
      'Serve rolls with dipping sauce, noticing the vibrant colors and fresh flavors.',
    ],
    moodIds: ['mindful'],
    tags: ['spring rolls', 'raw', 'vietnamese', 'vegetables', 'light'],
    imageUrl: 'https://images.pexels.com/photos/5409027/pexels-photo-5409027.jpeg',
    prepTime: '30 min',
    cookTime: '5 min',
    servings: 4,
    calories: 220,
    difficulty: 'Medium',
    aiSuggestion: 'Add thin slices of mango or pineapple for a surprising sweet element that balances the savory components.',
    nutritionAnalysis: 'Low in calories, high in fiber from vegetables. Contains various vitamins and minerals from the rainbow of vegetables.',
    cookingTips: [
      'Don\'t overfill the rolls or they\'ll be difficult to wrap and may tear',
      'Have all ingredients prepped and arranged assembly-line style before starting',
      'Double dip the rice paper if they\'re too thin and tearing easily'
    ]
  },
  {
    id: 'turmeric-lentil-soup',
    name: 'Healing Turmeric Lentil Soup',
    description: 'A grounding, anti-inflammatory soup with turmeric and lentils.',
    ingredients: ['Red lentils', 'Turmeric', 'Ginger', 'Garlic', 'Onion', 'Carrots', 'Vegetable broth', 'Coconut milk', 'Lemon juice', 'Cilantro'],
    instructions: [
      'Sauté diced onion, garlic, and ginger in olive oil.',
      'Add ground turmeric and toast briefly until fragrant.',
      'Stir in diced carrots and rinsed red lentils.',
      'Pour in vegetable broth and bring to a boil.',
      'Reduce heat and simmer until lentils are soft, about 20 minutes.',
      'Stir in coconut milk and warm through.',
      'Add freshly squeezed lemon juice.',
      'Season with salt and pepper to taste.',
      'Garnish with fresh cilantro.',
      'Serve hot, taking time to inhale the aromatic spices before tasting.',
    ],
    moodIds: ['mindful', 'comforting'],
    tags: ['soup', 'lentils', 'turmeric', 'anti-inflammatory', 'vegan'],
    imageUrl: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 4,
    calories: 320,
    difficulty: 'Easy',
    aiSuggestion: 'Add a few black peppercorns when sautéing the spices - black pepper enhances the bioavailability of curcumin in turmeric.',
    nutritionAnalysis: 'High in protein and fiber from lentils. Contains anti-inflammatory compounds from turmeric and ginger.',
    cookingTips: [
      'No need to soak red lentils as they cook quickly',
      'For a creamier texture, blend half the soup and return it to the pot',
      'Make extra and freeze in individual portions for quick healing meals'
    ],
    hindiVoiceGuidance: 'हल्दी दाल का सूप'
  },
  {
    id: 'mediterranean-baked-fish',
    name: 'Mediterranean Baked Fish with Vegetables',
    description: 'A simple, mindful preparation of fish with seasonal vegetables and herbs.',
    ingredients: ['White fish fillets', 'Cherry tomatoes', 'Olives', 'Capers', 'Lemon', 'Garlic', 'Fresh herbs (oregano, thyme, parsley)', 'Olive oil', 'White wine'],
    instructions: [
      'Preheat oven to 375°F.',
      'Arrange fish fillets in a baking dish.',
      'In a bowl, combine halved cherry tomatoes, sliced olives, capers, minced garlic, and torn herbs.',
      'Drizzle with olive oil and the juice of half a lemon.',
      'Spoon vegetable mixture around and partly over the fish.',
      'Pour a splash of white wine around the fish.',
      'Bake for 15-20 minutes until fish flakes easily.',
      'Squeeze fresh lemon juice over the top before serving.',
      'Pause to appreciate the Mediterranean aromas before enjoying mindfully.',
    ],
    moodIds: ['mindful'],
    tags: ['fish', 'mediterranean', 'easy', 'one-pan', 'healthy'],
    imageUrl: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg',
    prepTime: '15 min',
    cookTime: '20 min',
    servings: 4,
    calories: 280,
    difficulty: 'Easy',
    aiSuggestion: 'Use parchment paper to create individual packets for the fish and vegetables - this creates a dramatic presentation when opened at the table.',
    nutritionAnalysis: 'High in lean protein from fish, healthy fats from olive oil, and antioxidants from vegetables and herbs.',
    cookingTips: [
      'Choose a sustainable fish like cod, halibut, or barramundi',
      'Don\'t overcook - fish continues cooking after removal from the oven',
      'This method works well with any seasonal vegetables you have on hand'
    ]
  },
  {
    id: 'mindful-grain-bowl',
    name: 'Ancient Grain Bowl with Roasted Vegetables',
    description: 'A mindful bowl featuring nutritious ancient grains and seasonal vegetables.',
    ingredients: ['Farro', 'Roasted butternut squash', 'Brussels sprouts', 'Kale', 'Pomegranate seeds', 'Walnuts', 'Goat cheese', 'Lemon-tahini dressing'],
    instructions: [
      'Cook farro according to package directions.',
      'Toss butternut squash cubes with olive oil, salt, and pepper, then roast until caramelized.',
      'Halve Brussels sprouts and roast until crispy on the edges.',
      'Massage kale with olive oil and lemon juice until tender.',
      'Make dressing by whisking tahini, lemon juice, garlic, water, and salt.',
      'Assemble bowls with farro as the base.',
      'Arrange roasted vegetables and kale on top.',
      'Sprinkle with pomegranate seeds and chopped walnuts.',
      'Crumble goat cheese over the top.',
      'Drizzle with lemon-tahini dressing.',
      'Before eating, take three deep breaths and express gratitude for the nourishing meal.',
    ],
    moodIds: ['mindful', 'creative'],
    tags: ['grain bowl', 'ancient grains', 'seasonal', 'vegetarian', 'nutritious'],
    imageUrl: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    prepTime: '20 min',
    cookTime: '40 min',
    servings: 4,
    calories: 420,
    difficulty: 'Medium',
    aiSuggestion: 'Cook a large batch of farro at the beginning of the week and create different grain bowls each day with seasonal vegetables.',
    nutritionAnalysis: 'Rich in fiber and protein from farro, vitamins from vegetables, healthy fats from nuts, and antioxidants from pomegranate.',
    cookingTips: [
      'Soak farro overnight to reduce cooking time and improve digestibility',
      'Roast vegetables at high temperature (425°F) for caramelization',
      'This bowl is endlessly customizable with whatever seasonal produce you have'
    ]
  }
];

// Export recipes array
export const recipesData = recipes;

// Group recipes by mood
export const recipesByMood = moods.map(mood => {
  return {
    mood,
    recipes: recipes.filter(recipe => recipe.moodIds.includes(mood.id))
  };
});

// Function to get a welcome message based on mood
export const getChatbotResponse = (currentMood: string | null): string => {
  if (!currentMood) {
    return "Hello! I'm your recipe assistant. How can I help you today?";
  }
  
  switch (currentMood) {
    case 'happy':
      return "You're in a great mood! Would you like to try a fun recipe to match your happiness?";
    case 'romantic':
      return "Feeling romantic today? I can suggest some special recipes perfect for a date night.";
    case 'energetic':
      return "You're full of energy! How about a quick and nutritious recipe to keep your momentum going?";
    case 'relaxed':
      return "Feeling relaxed? Let me suggest some comforting dishes that are easy to prepare.";
    case 'creative':
      return "Feeling creative? Let's explore some recipes that allow you to experiment in the kitchen!";
    case 'adventurous':
      return "Ready for an adventure? I can suggest some exotic recipes to explore new flavors!";
    case 'nostalgic':
      return "Feeling nostalgic? Let's revisit some classic comfort food recipes that bring back memories.";
    case 'comforting':
      return "Need some comfort? I have the perfect soul-warming recipes for you today.";
    case 'festive':
      return "In a celebratory mood? Let me suggest some special recipes perfect for festivities!";
    case 'mindful':
      return "Feeling mindful today? I can suggest nutritious and balanced recipes that nourish body and soul.";
    default:
      return "Hello! I'm your recipe assistant. What kind of recipe are you looking for today?";
  }
};

// Function to get recipes by mood
export const getRecipesByMood = (moodId: string | null): Recipe[] => {
  if (!moodId) return recipes;
  return recipes.filter(recipe => recipe.moodIds.includes(moodId));
};

// Function to get a recipe by ID
export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

// Function to get all recipes
export const getAllRecipes = (): Recipe[] => {
  return recipes;
};

// Function to search recipes
export const searchRecipes = (query: string): Recipe[] => {
  const lowerCaseQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(lowerCaseQuery) ||
    recipe.description.toLowerCase().includes(lowerCaseQuery) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery)) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
  );
};

// Function to get similar recipes
export const getSimilarRecipes = (recipeId: string): Recipe[] => {
  const recipe = getRecipeById(recipeId);
  if (!recipe) return [];
  
  // If the recipe has defined similar recipes, use those
  if (recipe.similarRecipes && recipe.similarRecipes.length > 0) {
    return recipe.similarRecipes
      .map(id => getRecipeById(id))
      .filter((r): r is Recipe => r !== undefined);
  }
  
  // Otherwise, find recipes with matching tags or mood
  return recipes
    .filter(r => r.id !== recipeId) // exclude current recipe
    .filter(r => 
      r.tags.some(tag => recipe.tags.includes(tag)) || // matching tags
      r.moodIds.some(mood => recipe.moodIds.includes(mood)) // matching moods
    )
    .slice(0, 3); // limit to 3 similar recipes
};
