import comfort1 from '@/assets/images/recipes/comfort1.jpg';
import comfort2 from '@/assets/images/recipes/comfort2.jpg';
import comfort3 from '@/assets/images/recipes/comfort3.jpg';
import breakfast1 from '@/assets/images/recipes/breakfast1.jpg';
import breakfast2 from '@/assets/images/recipes/breakfast2.jpg';
import breakfast3 from '@/assets/images/recipes/breakfast3.jpg';
import breakfast4 from '@/assets/images/recipes/breakfast4.jpg';
import lunch1 from '@/assets/images/recipes/lunch1.jpg';
import lunch2 from '@/assets/images/recipes/lunch2.jpg';
import lunch3 from '@/assets/images/recipes/lunch3.jpg';
import dinner1 from '@/assets/images/recipes/dinner1.jpg';
import dinner2 from '@/assets/images/recipes/dinner2.jpg';
import dinner3 from '@/assets/images/recipes/dinner3.jpg';
import dessert1 from '@/assets/images/recipes/dessert1.jpg';
import dessert2 from '@/assets/images/recipes/dessert2.jpg';
import dessert3 from '@/assets/images/recipes/dessert3.jpg';
import quick1 from '@/assets/images/recipes/quick1.jpg';
import quick2 from '@/assets/images/recipes/quick2.jpg';
import quick3 from '@/assets/images/recipes/quick3.jpg';
import snack1 from '@/assets/images/recipes/snack1.jpg';
import snack2 from '@/assets/images/recipes/snack2.jpg';
import snack3 from '@/assets/images/recipes/snack3.jpg';
import italian1 from '@/assets/images/recipes/italian1.jpg';
import italian2 from '@/assets/images/recipes/italian2.jpg';
import mexican1 from '@/assets/images/recipes/mexican1.jpg';
import mexican2 from '@/assets/images/recipes/mexican2.jpg';
import asian1 from '@/assets/images/recipes/asian1.jpg';
import asian2 from '@/assets/images/recipes/asian2.jpg';
import mediterranean1 from '@/assets/images/recipes/mediterranean1.jpg';
import mediterranean2 from '@/assets/images/recipes/mediterranean2.jpg';
import vegan1 from '@/assets/images/recipes/vegan1.jpg';
import vegan2 from '@/assets/images/recipes/vegan2.jpg';
import vegan3 from '@/assets/images/recipes/vegan3.jpg';
import spicy1 from '@/assets/images/recipes/spicy1.jpg';
import spicy2 from '@/assets/images/recipes/spicy2.jpg';
import sweet1 from '@/assets/images/recipes/sweet1.jpg';
import sweet2 from '@/assets/images/recipes/sweet2.jpg';
import healthy1 from '@/assets/images/recipes/healthy1.jpg';
import healthy2 from '@/assets/images/recipes/healthy2.jpg';
import healthy3 from '@/assets/images/recipes/healthy3.jpg';
import exotic1 from '@/assets/images/recipes/exotic1.jpg';
import exotic2 from '@/assets/images/recipes/exotic2.jpg';
import creative1 from '@/assets/images/recipes/comfort1.jpg';
import drink1 from '@/assets/images/recipes/sweet1.jpg';
import drink2 from '@/assets/images/recipes/sweet2.jpg';
import drink3 from '@/assets/images/recipes/healthy1.jpg';
import appetizer1 from '@/assets/images/recipes/snack3.jpg';

export interface Mood {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const moods: Mood[] = [
  {
    id: 'happy',
    name: 'Happy',
    icon: '😊',
    description: 'Feeling cheerful and content'
  },
  {
    id: 'sad',
    name: 'Sad',
    icon: '😢',
    description: 'Feeling down or blue'
  },
  {
    id: 'energetic',
    name: 'Energetic',
    icon: '⚡',
    description: 'Full of energy and ready to go'
  },
  {
    id: 'tired',
    name: 'Tired',
    icon: '😴',
    description: 'Feeling exhausted or sleepy'
  },
  {
    id: 'stressed',
    name: 'Stressed',
    icon: '😰',
    description: 'Feeling overwhelmed or anxious'
  },
  {
    id: 'relaxed',
    name: 'Relaxed',
    icon: '😌',
    description: 'Feeling calm and at ease'
  },
  {
    id: 'hungry',
    name: 'Hungry',
    icon: '🍽️',
    description: 'Ready for a satisfying meal'
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    icon: '🕰️',
    description: 'Reminiscing about the past'
  },
  {
    id: 'adventurous',
    name: 'Adventurous',
    icon: '🌎',
    description: 'Ready to try something new'
  },
  {
    id: 'festive',
    name: 'Festive',
    icon: '🎉',
    description: 'In a celebratory mood'
  },
  {
    id: 'homesick',
    name: 'Homesick',
    icon: '🏠',
    description: 'Missing the comforts of home'
  },
  {
    id: 'romantic',
    name: 'Romantic',
    icon: '❤️',
    description: 'In the mood for something special'
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: '🎨',
    description: 'Feeling inspired and imaginative'
  },
  {
    id: 'cozy',
    name: 'Cozy',
    icon: '🧣',
    description: 'Seeking warmth and comfort'
  },
  {
    id: 'indulgent',
    name: 'Indulgent',
    icon: '🍫',
    description: 'Treating yourself to something special'
  },
  {
    id: 'celebratory',
    name: 'Celebratory',
    icon: '🎊',
    description: 'Commemorating a special occasion'
  },
  {
    id: 'curious',
    name: 'Curious',
    icon: '🧐',
    description: 'Interested in exploring new flavors'
  },
  {
    id: 'sophisticated',
    name: 'Sophisticated',
    icon: '🥂',
    description: 'In the mood for something elegant'
  },
  {
    id: 'healthy-minded',
    name: 'Health-Conscious',
    icon: '🥗',
    description: 'Focused on nutrition and wellbeing'
  },
  {
    id: 'nostalgic-childhood',
    name: 'Childhood Memories',
    icon: '👶',
    description: 'Craving foods from your youth'
  },
  {
    id: 'wanderlust',
    name: 'Wanderlust',
    icon: '✈️',
    description: 'Craving flavors from around the world'
  },
  {
    id: 'fusion',
    name: 'Fusion Explorer',
    icon: '🔄',
    description: 'Excited about mixed cultural cuisines'
  },
  {
    id: 'traditional',
    name: 'Traditional',
    icon: '📜',
    description: 'Appreciating authentic cultural dishes'
  },
  {
    id: 'spice-lover',
    name: 'Spice Lover',
    icon: '🌶️',
    description: 'Craving bold, spicy flavors'
  },
  {
    id: 'comfort-seeker',
    name: 'Comfort Seeker',
    icon: '🧸',
    description: 'Looking for familiar, soothing foods'
  },
  {
    id: 'proud',
    name: 'Proud',
    icon: '🏆',
    description: 'Celebrating achievements and milestones'
  },
  {
    id: 'mindful',
    name: 'Mindful',
    icon: '🧘',
    description: 'Being present and conscious of choices'
  },
  {
    id: 'decadent',
    name: 'Decadent',
    icon: '✨',
    description: 'Seeking rich, luxurious experiences'
  },
  {
    id: 'nostalgic-travel',
    name: 'Travel Memories',
    icon: '🗺️',
    description: 'Reminiscing about food from past travels'
  },
  {
    id: 'seasonal',
    name: 'Seasonal',
    icon: '🍂',
    description: 'Enjoying foods from the current season'
  },
  {
    id: 'social',
    name: 'Social',
    icon: '👥',
    description: 'Foods perfect for sharing with friends'
  },
  {
    id: 'comforting',
    name: 'Comforting',
    icon: '🛋️',
    description: 'Seeking emotional comfort through food'
  },
  {
    id: 'inspired',
    name: 'Inspired',
    icon: '💫',
    description: 'Ready to create something impressive'
  },
  {
    id: 'time-pressed',
    name: 'Time-Pressed',
    icon: '⏱️',
    description: 'Need something quick but satisfying'
  },
  {
    id: 'refreshed',
    name: 'Refreshed',
    icon: '🌿',
    description: 'Craving something cool and revitalizing'
  }
];

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  tags: string[];
  difficulty: string;
  mood: string;
  image?: any;
  aiSuggestion?: string;
  nutritionAnalysis?: string;
  cookingTips?: string[];
}

const recipesData: { [key: string]: Recipe[] } = {
  happy: [
    {
      id: 'bright-citrus-salad',
      name: 'Bright Citrus & Berry Salad',
      description: 'A vibrant, energizing salad full of citrus fruits and fresh berries',
      ingredients: [
        '2 oranges, segmented',
        '1 grapefruit, segmented',
        '1 cup mixed berries',
        '2 tbsp honey',
        'Fresh mint leaves',
        '¼ cup pomegranate seeds'
      ],
      instructions: [
        'Segment the oranges and grapefruit, catching any juice',
        'Arrange citrus segments on a serving plate',
        'Add mixed berries and pomegranate seeds',
        'Drizzle with honey',
        'Garnish with fresh mint leaves'
      ],
      prepTime: '15 mins',
      cookTime: '0 mins',
      servings: 2,
      calories: 180,
      tags: ['fresh', 'fruity', 'healthy', 'quick'],
      difficulty: 'Easy',
      mood: 'happy',
      image: 'https://images.unsplash.com/photo-1490323914169-4d5db28abf90?w=800&auto=format&fit=crop',
      nutritionAnalysis: 'High in vitamin C and antioxidants, perfect for boosting mood and energy',
      cookingTips: [
        'Use room temperature fruit for better flavor',
        'Add a sprinkle of chili flakes for an unexpected kick',
        'Can be made ahead and chilled'
      ]
    }
  ],
  sad: [
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
    }
  ],
  energetic: [
    {
      id: 'power-smoothie-bowl',
      name: 'Energy Boost Smoothie Bowl',
      description: 'A nutrient-packed smoothie bowl that will keep you energized all morning',
      ingredients: [
        '1 banana, frozen',
        '1 cup mixed berries',
        '1 scoop protein powder',
        '1 tbsp chia seeds',
        'Almond milk',
        'Granola and fresh fruit for topping'
      ],
      instructions: [
        'Blend frozen banana and berries with protein powder',
        'Add almond milk gradually until desired consistency',
        'Pour into a bowl',
        'Top with granola, fresh fruit, and chia seeds',
        'Serve immediately'
      ],
      prepTime: '5 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 320,
      tags: ['breakfast', 'healthy', 'energizing', 'quick'],
      difficulty: 'Easy',
      mood: 'energetic',
      image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&auto=format&fit=crop',
      nutritionAnalysis: 'High in protein and healthy fats, perfect for sustained energy',
      cookingTips: [
        'Freeze banana chunks for easier blending',
        'Add spinach for extra nutrients without changing taste',
        'Use coconut water for extra hydration'
      ]
    }
  ],
  tired: [
    {
      id: 'chamomile-honey-latte',
      name: 'Soothing Chamomile Honey Latte',
      description: 'A calming, caffeine-free latte perfect for winding down',
      ingredients: [
        '2 chamomile tea bags',
        '1 cup hot water',
        '1 cup warm milk (dairy or plant-based)',
        '1 tbsp honey',
        '¼ tsp vanilla extract',
        'Pinch of cinnamon'
      ],
      instructions: [
        'Steep chamomile tea bags in hot water for 5 minutes',
        'Remove tea bags and stir in honey',
        'Warm and froth milk',
        'Combine tea mixture with frothed milk',
        'Add vanilla extract and sprinkle with cinnamon'
      ],
      prepTime: '5 mins',
      cookTime: '5 mins',
      servings: 1,
      calories: 120,
      tags: ['beverage', 'relaxing', 'caffeine-free', 'warm'],
      difficulty: 'Easy',
      mood: 'tired',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop',
      nutritionAnalysis: 'Contains natural compounds that promote relaxation and better sleep',
      cookingTips: [
        'Use lavender honey for extra calming properties',
        'Make tea stronger for more pronounced flavor',
        'Try oat milk for a creamier texture'
      ]
    }
  ]
};

export const getAllRecipes = (): Recipe[] => {
  const allRecipes: Recipe[] = [];
  Object.values(recipesData).forEach(categoryRecipes => {
    allRecipes.push(...categoryRecipes);
  });
  return allRecipes;
};

export const getRecipeById = (id: string): Recipe | null => {
  const allRecipes = getAllRecipes();
  return allRecipes.find(recipe => recipe.id === id) || null;
};

export const getRecipesByMood = (moodId: string): Recipe[] => {
  return getAllRecipes().filter(recipe => recipe.mood === moodId);
};

export const searchRecipes = (query: string): Recipe[] => {
  const searchTerm = query.toLowerCase();
  return getAllRecipes().filter(recipe => 
    recipe.name.toLowerCase().includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const getSimilarRecipes = (recipeId: string, limit: number = 3): Recipe[] => {
  const targetRecipe = getRecipeById(recipeId);
  
  if (!targetRecipe) {
    return [];
  }
  
  const allRecipes = getAllRecipes().filter(recipe => recipe.id !== recipeId);
  
  // Sort recipes by tag similarity
  const sortedRecipes = allRecipes.sort((a, b) => {
    const aTagMatches = a.tags.filter(tag => targetRecipe.tags.includes(tag)).length;
    const bTagMatches = b.tags.filter(tag => targetRecipe.tags.includes(tag)).length;
    
    return bTagMatches - aTagMatches;
  });
  
  return sortedRecipes.slice(0, limit);
};

export const getChatbotResponse = (message: string, moodId: string | null): string => {
  const lowerMessage = message.toLowerCase();
  
  if (moodId) {
    const mood = moods.find(m => m.id === moodId);
    if (mood) {
      if (lowerMessage.includes('recommend') || lowerMessage.includes('suggestion')) {
        const recipes = getRecipesByMood(moodId);
        if (recipes.length > 0) {
          const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
          return `Based on your ${mood.name.toLowerCase()} mood, I recommend trying "${randomRecipe.name}". It's a great choice when you're feeling this way.`;
        }
      }
    }
  }
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return 'Hello! How can I help with your recipe needs today?';
  } else if (lowerMessage.includes('help')) {
    return 'I can suggest recipes based on your mood, answer cooking questions, or help you find specific ingredients. Just ask!';
  } else if (lowerMessage.includes('thank')) {
    return "You're welcome! Enjoy your cooking and let me know if you need anything else.";
  } else if (lowerMessage.includes('ingredient') || lowerMessage.includes('substitute')) {
    return 'For ingredient substitutions, you can often use what you have on hand. For example, yogurt can replace sour cream, and different vegetables can be swapped based on what\'s available.';
  } else if (lowerMessage.includes('time') || lowerMessage.includes('quick')) {
    return 'Looking for something quick? Check out the recipes tagged "easy" or "quick" - they typically take less than 30 minutes to prepare.';
  } else if (lowerMessage.includes('difficul') || lowerMessage.includes('hard')) {
    return 'If you\'re new to cooking, start with recipes marked "Easy". Work your way up to "Medium" difficulty as you gain confidence.';
  }
  
  return "I'm here to help with recipe suggestions and cooking tips. Let me know if you're looking for something specific!";
};

export default recipesData;
