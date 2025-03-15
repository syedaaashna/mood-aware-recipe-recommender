export interface Mood {
  id: string;
  name: string;
  description: string;
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
}

interface MoodRecipe {
  mood: Mood;
  recipes: Recipe[];
}

const moods: Mood[] = [
  {
    id: 'happy',
    name: 'Happy',
    description: 'Recipes to brighten your day',
  },
  {
    id: 'romantic',
    name: 'Romantic',
    description: 'Recipes for a special night',
  },
  {
    id: 'energetic',
    name: 'Energetic',
    description: 'Recipes to fuel your day',
  },
  {
    id: 'relaxed',
    name: 'Relaxed',
    description: 'Recipes for a calm evening',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Recipes to inspire your inner chef',
  },
  {
    id: 'adventurous',
    name: 'Adventurous',
    description: 'Recipes to try something new',
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    description: 'Recipes that bring back memories',
  },
];

const recipes: Recipe[] = [
  {
    id: 'classic-pizza',
    name: 'Classic Margherita Pizza',
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
    moodIds: ['happy', 'relaxed'],
    tags: ['pizza', 'italian', 'vegetarian'],
    imageUrl: '/images/recipes/pizza.jpg',
  },
  {
    id: 'chocolate-cake',
    name: 'Decadent Chocolate Cake',
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
    moodIds: ['happy', 'romantic'],
    tags: ['cake', 'chocolate', 'dessert'],
    imageUrl: '/images/recipes/chocolate-cake.jpg',
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
];

const moodRecipes: MoodRecipe[] = moods.map((mood) => ({
  mood: mood,
  recipes: recipes.filter((recipe) => recipe.moodIds.includes(mood.id)),
}));

export const getMoods = (): Mood[] => {
  return moods;
};

export const getRecipesByMood = (moodId: string): Recipe[] => {
  const moodRecipe = moodRecipes.find((mr) => mr.mood.id === moodId);
  return moodRecipe ? moodRecipe.recipes : [];
};

export const searchRecipes = (searchTerm: string): Recipe[] => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return recipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(lowerSearchTerm) ||
      recipe.description.toLowerCase().includes(lowerSearchTerm) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowerSearchTerm)
      ) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(lowerSearchTerm))
    );
  });
};

// Add this function at the end of the file
export const getAllRecipes = (): Recipe[] => {
  const allRecipes: Recipe[] = [];
  
  // Collect recipes from all moods
  moodRecipes.forEach(moodRecipe => {
    moodRecipe.recipes.forEach(recipe => {
      // Only add if not already in the array (avoid duplicates)
      if (!allRecipes.some(r => r.id === recipe.id)) {
        allRecipes.push(recipe);
      }
    });
  });
  
  return allRecipes;
};
