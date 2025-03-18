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
    imageUrl: '/images/recipes/pizza.jpg',
    prepTime: '15 min',
    cookTime: '15 min',
    servings: 4,
    calories: 320,
    difficulty: 'Easy',
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
    imageUrl: '/images/recipes/chocolate-cake.jpg',
    prepTime: '20 min',
    cookTime: '35 min',
    servings: 8,
    calories: 450,
    difficulty: 'Medium',
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
    imageUrl: '/images/recipes/spicy-noodles.jpg',
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
    imageUrl: '/images/recipes/chicken-stir-fry.jpg',
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
    imageUrl: '/images/recipes/berry-smoothie.jpg',
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
    imageUrl: '/images/recipes/lavender-tea.jpg',
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
    imageUrl: '/images/recipes/mushroom-risotto.jpg',
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
    imageUrl: '/images/recipes/gingerbread-cookies.jpg',
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
    imageUrl: '/images/recipes/apple-pie.jpg',
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
    imageUrl: '/images/recipes/sushi-rolls.jpg',
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
    imageUrl: '/images/recipes/french-toast.jpg',
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
    imageUrl: '/images/recipes/chicken-curry.jpg',
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
    imageUrl: '/images/recipes/butter-chicken.jpg',
    prepTime: '30 min',
    cookTime: '40 min',
    servings: 4,
    calories: 520,
    difficulty: 'Medium',
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
    imageUrl: '/images/recipes/malai-kofta.jpg',
    prepTime: '45 min',
    cookTime: '30 min',
    servings: 4,
    calories: 480,
    difficulty: 'Medium',
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
    imageUrl: '/images/recipes/shahi-paneer.jpg',
    prepTime: '30 min',
    cookTime: '25 min',
    servings: 3,
    calories: 420,
    difficulty: 'Medium',
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
    imageUrl: '/images/recipes/tandoori-raan.jpg',
    prepTime: '24 hours',
    cookTime: '4 hours',
    servings: 8,
    calories: 680,
    difficulty: 'Hard',
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
    imageUrl: '/images/recipes/masala-dosa.jpg',
    prepTime: '12 hours',
    cookTime: '30 min',
    servings: 4,
    calories: 320,
    difficulty: 'Medium',
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
    imageUrl: '/images/recipes/upma.jpg',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 3,
    calories: 210,
    difficulty: 'Easy',
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
    imageUrl: '/images/recipes/kadhi-chawal.jpg',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 4,
    calories: 380,
    difficulty: 'Medium',
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
    imageUrl: '/images/recipes/khichdi.jpg',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 3,
    calories: 290,
    difficulty: 'Easy',
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
    imageUrl: '/images/recipes/naan-pizza.jpg',
    prepTime: '10 min',
    cookTime: '10 min',
    servings: 2,
    calories: 420,
    difficulty: 'Easy',
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
    imageUrl: '/images/recipes/masala-dosa-crepe.jpg',
    prepTime: '12 hours',
    cookTime: '15 min',
    servings: 2,
    calories: 380,
    difficulty: 'Medium',
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
    imageUrl: '/images/recipes/laal-maas.jpg',
    prepTime: '30 min',
    cookTime: '1 hour',
    servings: 4,
    calories: 580,
    difficulty: 'Medium',
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
    imageUrl: '/images/recipes/pork-vindaloo.jpg',
    prepTime: '24 hours',
    cookTime: '1 hour',
    servings: 4,
    calories: 620,
    difficulty: 'Medium',
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
    imageUrl: '/images/recipes/aloo-paratha.jpg',
    prepTime: '30 min',
    cookTime: '20 min',
    servings: 4,
    calories: 380,
    difficulty: 'Medium',
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
    imageUrl: '/images/recipes/pav-bhaji.jpg',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: 4,
    calories: 410,
    difficulty: 'Easy',
  },
  {
    id: 'ai-comfort-soup',
    name: 'AI-Crafted Comfort Soup',
    title: 'AI-Crafted Comfort Soup',
    description: 'A warm, hearty soup designed by AI to provide maximum comfort with balanced nutritional profile.',
    ingredients: [
      'Chicken broth', 
      'Root vegetables (carrots, potatoes, parsnips)',
      'Pearl barley',
      'Free-range chicken pieces',
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
      'Add chicken pieces and brown slightly.',
      'Pour in chicken broth and add pearl barley.',
      'Add diced root vegetables and herbs.',
      'Simmer for 45 minutes until vegetables are tender and barley is cooked.',
      'Season with salt and pepper to taste.',
      'Serve hot with fresh crusty bread.'
    ],
    moodIds: ['comforting', 'relaxed'],
    tags: ['soup', 'comfort food', 'healthy', 'ai-crafted'],
    imageUrl: '/images/recipes/comfort-soup.jpg',
    prepTime: '15 min',
    cookTime: '45 min',
    servings: 6,
    calories: 320,
    difficulty: 'Easy',
    aiGenerated: true,
    aiSuggestion: 'For an immune boost, try adding fresh ginger and turmeric to the broth.'
  },
  {
    id: 'ai-festive-roast',
    name: 'AI-Designed Festive Roast',
    title: 'AI-Designed Festive Roast',
    description: 'A showstopping holiday roast created with AI-optimized cooking techniques for perfect results every time.',
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
    tags: ['roast', 'holiday', 'special occasion', 'ai-crafted'],
    imageUrl: '/images/recipes/festive-roast.jpg',
    prepTime: '30 min',
    cookTime: '3 hours',
    servings: 8,
    calories: 450,
    difficulty: 'Medium',
    aiGenerated: true,
    aiSuggestion: 'Use a probe thermometer with an alarm to achieve the perfect internal temperature without opening the oven.'
  },
  {
    id: 'ai-mindful-bowl',
    name: 'AI-Balanced Mindful Bowl',
    title: 'AI-Balanced Mindful Bowl',
    description: 'A nutritionally perfect grain bowl designed by AI to provide optimal macronutrients and micronutrients for wellness.',
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
    tags: ['grain bowl', 'healthy', 'vegan', 'ai-crafted'],
    imageUrl: '/images/recipes/mindful-bowl.jpg',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: 2,
    calories: 480,
    difficulty: 'Easy',
    aiGenerated: true,
    aiSuggestion: 'Track your mood before and after eating this nutrient-dense meal to observe the impact on your mental clarity.'
  }
];

recipes.forEach(recipe => {
  if (!recipe.aiGenerated) {
    if (recipe.id === 'chocolate-cake') {
      recipe.aiSuggestion = 'Try adding a pinch of espresso powder to enhance the chocolate flavor without adding coffee taste.';
    } else if (recipe.id === 'classic-pizza') {
      recipe.aiSuggestion = 'For a crispier crust, preheat your pizza stone for at least 30 minutes at the highest oven temperature.';
    } else if (recipe.id === 'berry-smoothie') {
      recipe.aiSuggestion = 'Add a handful of spinach for added nutrients without affecting the taste.';
    } else if (recipe.id === 'chicken-curry') {
      recipe.aiSuggestion = 'Marinate the chicken in yogurt and spices for 2 hours before cooking for more tender results.';
    } else if (recipe.id === 'mushroom-risotto') {
      recipe.aiSuggestion = 'Use a mixture of dried and fresh mushrooms to create a deeper umami flavor profile.';
    } else {
      recipe.aiSuggestion = 'AI analysis suggests this recipe is already well-balanced. Consider pairing with a complementary side dish.';
    }
  }
});

/**
 * Get all recipes
 */
export const getAllRecipes = (): Recipe[] => {
  return recipes;
};

/**
 * Search recipes by query string
 * @param query - The search query string
 */
export const searchRecipes = (query: string): Recipe[] => {
  const searchTerm = query.toLowerCase().trim();
  return recipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );
  });
};

/**
 * Get recipes by mood ID
 * @param moodId - The mood ID to filter recipes by
 */
export const getRecipesByMood = (moodId: string): Recipe[] => {
  return recipes.filter(recipe => recipe.moodIds.includes(moodId));
};

/**
 * Get recipe by ID
 * @param id - The recipe ID to find
 */
export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

/**
 * Get chatbot response based on mood
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
    
    comforting: "Looking for comfort food? Our AI-Crafted Comfort Soup or Warm Apple Pie are perfect choices that feel like a warm hug in a bowl.",
    
    festive: "For that festive mood, try making our AI-Designed Festive Roast or Homemade Gingerbread Cookies that are perfect for celebrations and gatherings!",
    
    mindful: "For a mindful meal that nourishes body and soul, I recommend our AI-Balanced Mindful Bowl or Healthy Semolina Upma. These recipes promote well-being through nutritious ingredients."
  };
  
  return responses[mood] || "I don't have specific recommendations for that mood yet, but I'd be happy to suggest some versatile recipes that work for any occasion!";
};

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

const validation = validateMoodRecipes();
if (!validation.valid) {
  console.warn(`Warning: The following moods have no recipes: ${validation.emptyMoods.join(', ')}`);
}
