
export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  ingredients: string[];
  instructions: string[];
  relatedMoods: string[];
}

export interface Mood {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// 50 different moods
export const moods: Mood[] = [
  { id: 'happy', name: 'Happy', description: 'Joyful and content', icon: '😊' },
  { id: 'sad', name: 'Sad', description: 'Feeling down or blue', icon: '😢' },
  { id: 'energetic', name: 'Energetic', description: 'Full of energy and enthusiasm', icon: '⚡' },
  { id: 'tired', name: 'Tired', description: 'Feeling exhausted or fatigued', icon: '😴' },
  { id: 'anxious', name: 'Anxious', description: 'Feeling worried or nervous', icon: '😰' },
  { id: 'relaxed', name: 'Relaxed', description: 'Calm and at ease', icon: '😌' },
  { id: 'stressed', name: 'Stressed', description: 'Under pressure or tension', icon: '😫' },
  { id: 'excited', name: 'Excited', description: 'Thrilled or enthusiastic', icon: '😃' },
  { id: 'bored', name: 'Bored', description: 'Lacking interest or stimulation', icon: '😑' },
  { id: 'nostalgic', name: 'Nostalgic', description: 'Reminiscing about the past', icon: '🕰️' },
  { id: 'romantic', name: 'Romantic', description: 'Feeling affectionate or loving', icon: '❤️' },
  { id: 'confident', name: 'Confident', description: 'Self-assured and certain', icon: '💪' },
  { id: 'insecure', name: 'Insecure', description: 'Lacking confidence or certainty', icon: '🙁' },
  { id: 'motivated', name: 'Motivated', description: 'Driven to achieve or succeed', icon: '🎯' },
  { id: 'unmotivated', name: 'Unmotivated', description: 'Lacking drive or incentive', icon: '🥱' },
  { id: 'creative', name: 'Creative', description: 'Inspired and imaginative', icon: '🎨' },
  { id: 'confused', name: 'Confused', description: 'Perplexed or uncertain', icon: '😕' },
  { id: 'peaceful', name: 'Peaceful', description: 'Serene and tranquil', icon: '🕊️' },
  { id: 'angry', name: 'Angry', description: 'Feeling irate or furious', icon: '😠' },
  { id: 'grateful', name: 'Grateful', description: 'Appreciative and thankful', icon: '🙏' },
  { id: 'frustrated', name: 'Frustrated', description: 'Feeling hindered or blocked', icon: '😤' },
  { id: 'curious', name: 'Curious', description: 'Eager to learn or explore', icon: '🧐' },
  { id: 'hopeful', name: 'Hopeful', description: 'Optimistic about the future', icon: '🌱' },
  { id: 'disappointed', name: 'Disappointed', description: 'Let down or disheartened', icon: '😞' },
  { id: 'proud', name: 'Proud', description: 'Feeling accomplished or satisfied', icon: '🦚' },
  { id: 'guilty', name: 'Guilty', description: 'Feeling responsible for wrongdoing', icon: '😣' },
  { id: 'determined', name: 'Determined', description: 'Resolute and unwavering', icon: '🏋️' },
  { id: 'indifferent', name: 'Indifferent', description: 'Neither interested nor disinterested', icon: '😐' },
  { id: 'overwhelmed', name: 'Overwhelmed', description: 'Feeling overloaded or swamped', icon: '🌊' },
  { id: 'content', name: 'Content', description: 'Satisfied and at peace', icon: '🧘' },
  { id: 'adventurous', name: 'Adventurous', description: 'Seeking excitement and new experiences', icon: '🏔️' },
  { id: 'melancholic', name: 'Melancholic', description: 'Wistful or pensively sad', icon: '🌧️' },
  { id: 'inspired', name: 'Inspired', description: 'Stimulated to create or act', icon: '💭' },
  { id: 'lonely', name: 'Lonely', description: 'Feeling isolated or solitary', icon: '🧍' },
  { id: 'amused', name: 'Amused', description: 'Finding something funny or entertaining', icon: '😄' },
  { id: 'annoyed', name: 'Annoyed', description: 'Slightly angry or irritated', icon: '😒' },
  { id: 'shocked', name: 'Shocked', description: 'Surprised or startled', icon: '😲' },
  { id: 'calm', name: 'Calm', description: 'Free from agitation or excitement', icon: '🌊' },
  { id: 'passionate', name: 'Passionate', description: 'Having intense feelings or desire', icon: '🔥' },
  { id: 'homesick', name: 'Homesick', description: 'Missing home or familiar surroundings', icon: '🏠' },
  { id: 'empowered', name: 'Empowered', description: 'Feeling strong and confident', icon: '✨' },
  { id: 'envious', name: 'Envious', description: 'Desiring something that someone else has', icon: '👀' },
  { id: 'satisfied', name: 'Satisfied', description: 'Content with what one has', icon: '😊' },
  { id: 'skeptical', name: 'Skeptical', description: 'Doubtful or questioning', icon: '🤨' },
  { id: 'cautious', name: 'Cautious', description: 'Careful and vigilant', icon: '🦔' },
  { id: 'ambitious', name: 'Ambitious', description: 'Having a strong desire for success', icon: '🚀' },
  { id: 'generous', name: 'Generous', description: 'Willing to give and share', icon: '🎁' },
  { id: 'humble', name: 'Humble', description: 'Modest and unassuming', icon: '🙇' },
  { id: 'courageous', name: 'Courageous', description: 'Brave and fearless', icon: '🦁' },
  { id: 'apathetic', name: 'Apathetic', description: 'Showing little emotion or interest', icon: '😶' }
];

// Sample recipes (in a real app, this would be a larger database of recipes)
export const recipes: Recipe[] = [
  {
    id: 'comfort-mac-cheese',
    title: 'Comfort Mac & Cheese',
    description: 'A creamy, comforting classic mac and cheese that soothes the soul.',
    imageUrl: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e',
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 4,
    calories: 450,
    difficulty: 'Easy',
    tags: ['comfort food', 'pasta', 'cheesy', 'vegetarian'],
    ingredients: [
      '8 oz elbow macaroni',
      '2 tbsp butter',
      '2 tbsp all-purpose flour',
      '2 cups milk',
      '2 cups shredded cheddar cheese',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1/4 tsp paprika'
    ],
    instructions: [
      'Bring a large pot of salted water to a boil. Add macaroni and cook according to package directions until al dente. Drain.',
      'In a large saucepan, melt butter over medium heat. Add flour and stir until smooth and bubbly.',
      'Gradually add milk, stirring constantly until mixture thickens.',
      'Add cheese, salt, pepper, and paprika. Stir until cheese is melted and sauce is smooth.',
      'Add cooked macaroni to cheese sauce and stir to combine.',
      'Serve hot, garnished with additional paprika if desired.'
    ],
    relatedMoods: ['sad', 'tired', 'nostalgic', 'stressed', 'content', 'melancholic', 'homesick']
  },
  {
    id: 'energizing-smoothie-bowl',
    title: 'Energizing Berry Smoothie Bowl',
    description: 'A vibrant, nutrient-packed smoothie bowl to boost your energy and mood.',
    imageUrl: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 1,
    calories: 320,
    difficulty: 'Easy',
    tags: ['breakfast', 'healthy', 'vegan', 'quick'],
    ingredients: [
      '1 frozen banana',
      '1 cup mixed frozen berries',
      '1/2 cup unsweetened almond milk',
      '1 tbsp chia seeds',
      '1 tbsp honey or maple syrup',
      'Toppings: fresh berries, granola, coconut flakes, sliced banana'
    ],
    instructions: [
      'Add frozen banana, berries, almond milk, chia seeds, and sweetener to a blender.',
      'Blend until smooth and creamy. Add more liquid if needed to achieve desired consistency.',
      'Pour into a bowl and arrange toppings artfully on top.',
      'Enjoy immediately with a spoon.'
    ],
    relatedMoods: ['energetic', 'happy', 'motivated', 'creative', 'ambitious', 'excited', 'confident']
  },
  {
    id: 'calming-chamomile-latte',
    title: 'Calming Chamomile Honey Latte',
    description: 'A soothing, warm beverage with calming chamomile and sweet honey.',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 90,
    difficulty: 'Easy',
    tags: ['beverage', 'calming', 'quick', 'caffeine-free'],
    ingredients: [
      '1 chamomile tea bag',
      '3/4 cup hot water',
      '3/4 cup warm milk (dairy or plant-based)',
      '1 tbsp honey',
      '1/4 tsp vanilla extract',
      'Pinch of cinnamon'
    ],
    instructions: [
      'Steep the chamomile tea bag in hot water for 5 minutes.',
      'Remove the tea bag and stir in honey and vanilla extract.',
      'Warm the milk and froth it if possible.',
      'Pour the frothed milk into the tea mixture.',
      'Sprinkle with cinnamon and enjoy while warm.'
    ],
    relatedMoods: ['anxious', 'stressed', 'overwhelmed', 'tired', 'peaceful', 'relaxed']
  },
  {
    id: 'spicy-mood-booster-soup',
    title: 'Spicy Mood-Booster Soup',
    description: 'A warming, spicy soup that boosts circulation and energy.',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 4,
    calories: 220,
    difficulty: 'Medium',
    tags: ['soup', 'spicy', 'warming', 'healthy'],
    ingredients: [
      '1 tbsp olive oil',
      '1 onion, diced',
      '2 garlic cloves, minced',
      '1 tbsp ginger, grated',
      '1 red chili, sliced',
      '4 cups vegetable broth',
      '1 can (14 oz) diced tomatoes',
      '1 red bell pepper, diced',
      '1 carrot, sliced',
      '1 cup broccoli florets',
      '1 cup spinach',
      '1 tbsp lemon juice',
      'Fresh cilantro for garnish',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat. Add onion and sauté until translucent.',
      'Add garlic, ginger, and chili. Sauté for 1 minute until fragrant.',
      'Add broth, tomatoes, bell pepper, and carrot. Bring to a boil, then reduce heat and simmer for 20 minutes.',
      'Add broccoli and cook for another 5 minutes until vegetables are tender.',
      'Stir in spinach and lemon juice. Cook until spinach wilts.',
      'Season with salt and pepper to taste.',
      'Serve hot, garnished with fresh cilantro.'
    ],
    relatedMoods: ['tired', 'sad', 'unmotivated', 'bored', 'apathetic', 'melancholic']
  },
  {
    id: 'chocolate-indulgence-cake',
    title: 'Chocolate Indulgence Cake',
    description: 'A rich, decadent chocolate cake for when you need a sweet treat to lift your spirits.',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    prepTime: '25 mins',
    cookTime: '35 mins',
    servings: 10,
    calories: 420,
    difficulty: 'Medium',
    tags: ['dessert', 'chocolate', 'indulgent', 'celebration'],
    ingredients: [
      '2 cups all-purpose flour',
      '2 cups sugar',
      '3/4 cup unsweetened cocoa powder',
      '2 tsp baking soda',
      '1 tsp baking powder',
      '1 tsp salt',
      '2 eggs',
      '1 cup strong black coffee, cooled',
      '1 cup buttermilk',
      '1/2 cup vegetable oil',
      '2 tsp vanilla extract',
      'For frosting: 1 cup butter, 3 cups powdered sugar, 2/3 cup cocoa powder, 1/3 cup milk, 1 tsp vanilla extract'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
      'In a large bowl, whisk together flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
      'Add eggs, coffee, buttermilk, oil, and vanilla. Beat with an electric mixer on medium speed for 2 minutes.',
      'Pour batter into prepared pans and bake for 30-35 minutes until a toothpick inserted comes out clean.',
      'For frosting: Beat butter until creamy, then gradually add powdered sugar, cocoa powder, milk, and vanilla extract until smooth and spreadable.',
      'Let cakes cool completely before frosting.',
      'Assemble the cake by placing one layer on a plate, spreading frosting on top, then placing the second layer and frosting the top and sides.'
    ],
    relatedMoods: ['sad', 'stressed', 'disappointed', 'romantic', 'celebratory', 'indulgent']
  }
];

// Function to get recipes by mood
export const getRecipesByMood = (moodId: string): Recipe[] => {
  return recipes.filter(recipe => recipe.relatedMoods.includes(moodId));
};

// Function to get a recipe by ID
export const getRecipeById = (recipeId: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === recipeId);
};

// Function to get a mood by ID
export const getMoodById = (moodId: string): Mood | undefined => {
  return moods.find(mood => mood.id === moodId);
};

// Function to search recipes by term
export const searchRecipes = (searchTerm: string): Recipe[] => {
  const term = searchTerm.toLowerCase();
  return recipes.filter(
    recipe => 
      recipe.title.toLowerCase().includes(term) || 
      recipe.description.toLowerCase().includes(term) || 
      recipe.tags.some(tag => tag.toLowerCase().includes(term)) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term))
  );
};

// Sample chatbot responses based on mood
export const getChatbotResponse = (mood: string): string => {
  const responses: Record<string, string[]> = {
    happy: [
      "Glad to hear you're feeling happy! Maybe celebrate with a fun, colorful dish?",
      "When I'm happy, I love to cook something adventurous! How about trying a new cuisine?",
      "Happiness calls for a celebratory meal! Perhaps something with bright flavors?"
    ],
    sad: [
      "I'm sorry you're feeling down. How about some comfort food to lift your spirits?",
      "When I feel sad, a warm, hearty dish often helps me feel better.",
      "Sending virtual hugs! Let's find you a recipe that's like a culinary hug."
    ],
    stressed: [
      "Sounds like you could use some calming recipes. How about something that doesn't require too much focus?",
      "When stressed, simple and nutritious meals can be really helpful. Let me find something easy for you.",
      "Stress calls for nourishing, uncomplicated food. I have some great options for you."
    ]
  };

  // Default response if mood not found
  const defaultResponses = [
    "I have some great recipes that might match your current mood!",
    "Let me help you find the perfect recipe for how you're feeling right now.",
    "Food has an amazing ability to complement our moods. Let's find the right match for you."
  ];

  const moodResponses = responses[mood] || defaultResponses;
  return moodResponses[Math.floor(Math.random() * moodResponses.length)];
};
