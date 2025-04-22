import recipeImageMapping from './recipeImageMapping';

// Reliable fallback image that works in all environments
const GLOBAL_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';

// Collection of verified working food-related images
const VERIFIED_WORKING_IMAGES = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop', // Salad in a bowl
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop', // Pasta dish
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop', // Pizza
  'https://images.unsplash.com/photo-1562967915-5469965fb527?w=800&auto=format&fit=crop', // Burger
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop', // Cake
  'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop', // Curry dish
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop', // Salad with egg
  'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop', // Rice bowl
  'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop', // Bibimbap
  'https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800&auto=format&fit=crop', // Tacos
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', // Sushi
  'https://images.unsplash.com/photo-1604704827370-75117911683c?w=800&auto=format&fit=crop', // Paella
  'https://images.unsplash.com/photo-1590080658-d464e1869fd5?w=800&auto=format&fit=crop', // Fruit salad
  'https://images.unsplash.com/photo-1505714091216-22ba89f4642d?w=800&auto=format&fit=crop'  // Baked goods
];

/**
 * Gets the correct image path for a recipe, with improved handling of
 * image loading and fallback mechanisms for greater reliability
 */
export const getRecipeImagePath = (imageKey: string): string => {
  try {
    // If no key is provided, return a random reliable food image
    if (!imageKey) {
      const randomIndex = Math.floor(Math.random() * VERIFIED_WORKING_IMAGES.length);
      return VERIFIED_WORKING_IMAGES[randomIndex];
    }
    
    console.log(`Finding image for recipe: ${imageKey}`);
    
    // First try to match the exact recipe ID
    if (imageKey in recipeImageMapping) {
      const imagePath = recipeImageMapping[imageKey];
      console.log(`Found exact match for ${imageKey}: ${imagePath}`);
      return imagePath || VERIFIED_WORKING_IMAGES[0];
    }
    
    // Otherwise, for recipe IDs not in the mapping, try to find an image 
    // that starts with the same prefix from the recipe ID
    const prefix = imageKey.replace(/[0-9]+$/, '');
    const allKeys = Object.keys(recipeImageMapping);
    const matchingKey = allKeys.find(key => key.startsWith(prefix));
    
    if (matchingKey) {
      const similarImage = recipeImageMapping[matchingKey];
      console.log(`Using similar image ${matchingKey} for recipe ${imageKey}: ${similarImage}`);
      return similarImage || VERIFIED_WORKING_IMAGES[0];
    }
    
    // If nothing matches, choose a food image based on category
    const fallbackImage = getFallbackImage(imageKey);
    console.log(`No match found for ${imageKey}, using fallback: ${fallbackImage}`);
    return fallbackImage;
  } catch (error) {
    console.error('Error in getRecipeImagePath:', error);
    // Use a highly reliable default image as last resort
    const randomIndex = Math.floor(Math.random() * VERIFIED_WORKING_IMAGES.length);
    return VERIFIED_WORKING_IMAGES[randomIndex];
  }
};

/**
 * Extract the filename from a recipe image path
 */
export const getImageFilename = (path: string): string => {
  if (!path) return 'default.jpg';
  const parts = path.split('/');
  return parts[parts.length - 1];
};

/**
 * Get a fallback image URL based on the recipe type/category
 * Using reliable, high-quality images that accurately represent each dish type
 */
export const getFallbackImage = (recipeId: string): string => {
  // If no ID is provided, return a random reliable food image
  if (!recipeId) {
    const randomIndex = Math.floor(Math.random() * VERIFIED_WORKING_IMAGES.length);
    return VERIFIED_WORKING_IMAGES[randomIndex];
  }
  
  // Extract category from recipe ID (e.g., "comfort1" -> "comfort")
  const category = recipeId.replace(/[0-9]+$/, '').toLowerCase();
  
  // Mapping to reliable Unsplash images that are verified to work
  const RELIABLE_CATEGORY_IMAGES: Record<string, string> = {
    'breakfast': 'https://images.unsplash.com/photo-1533089860892-a9b969ced0ac?w=800&auto=format&fit=crop',
    'lunch': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'dinner': 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa04?w=800&auto=format&fit=crop',
    'dessert': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop',
    'sweet': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop',
    'comfort': 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&auto=format&fit=crop',
    'quick': 'https://images.unsplash.com/photo-1548940740-204726a19ec3?w=800&auto=format&fit=crop',
    'snack': 'https://images.unsplash.com/photo-1566478989037-ecd2f5e8b0cd?w=800&auto=format&fit=crop',
    'drink': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop',
    'vegan': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'vegetarian': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'appetizer': 'https://images.unsplash.com/photo-1541795795328-f073b763494e?w=800&auto=format&fit=crop',
    'italian': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop',
    'mexican': 'https://images.unsplash.com/photo-1562967915-5469965fb527?w=800&auto=format&fit=crop',
    'asian': 'https://images.unsplash.com/photo-1562967914-3ea3c8b75307?w=800&auto=format&fit=crop',
    'mediterranean': 'https://images.unsplash.com/photo-1599302592205-d7d683638391?w=800&auto=format&fit=crop',
    'healthy': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'spicy': 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    'exotic': 'https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=800&auto=format&fit=crop',
    'calm': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop',
    'celebratory': 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa04?w=800&auto=format&fit=crop',
    'comforting': 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&auto=format&fit=crop',
    'creative': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'decadent': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop',
    'festive': 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa04?w=800&auto=format&fit=crop',
    'focused': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop',
    'nostalgic': 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&auto=format&fit=crop',
    'playful': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'relaxed': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop',
    'romantic': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop',
    'seasonal': 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&auto=format&fit=crop',
    'spice': 'https://images.unsplash.com/photo-1566565286951-f60188c7aa71?w=800&auto=format&fit=crop',
    'hungry': 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa04?w=800&auto=format&fit=crop',
    'childhood': 'https://images.unsplash.com/photo-1483137140003-ae073b395549?w=800&auto=format&fit=crop',
    'adventure': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'cozy': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop',
    'bright': 'https://images.unsplash.com/photo-1590080658-d464e1869fd5?w=800&auto=format&fit=crop', // For Bright Citrus Salad
    'spanish': 'https://images.unsplash.com/photo-1604704827370-75117911683c?w=800&auto=format&fit=crop', // For Spanish Paella
    'rainbow': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', // For Rainbow Roll
    'thai': 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop', // For Thai Curry
    'pizza': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop', // For pizza
    'korean': 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop', // For Korean Bibimbap
    'sushi': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', // For sushi dishes
    'citrus': 'https://images.unsplash.com/photo-1590080658-d464e1869fd5?w=800&auto=format&fit=crop', // For citrus dishes
    'berry': 'https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=800&auto=format&fit=crop', // For berry dishes
    'salad': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // For salads
    'curry': 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop', // For curry dishes
    'paella': 'https://images.unsplash.com/photo-1604704827370-75117911683c?w=800&auto=format&fit=crop', // For paella
    'bibimbap': 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop', // For bibimbap
    'pho': 'https://images.unsplash.com/photo-1612358405970-e1adb2e6a498?w=800&auto=format&fit=crop', // For pho
  };
  
  // Check for specific recipe IDs
  const specificRecipeImages: Record<string, string> = {
    'bright-citrus-salad': 'https://images.unsplash.com/photo-1590080658-d464e1869fd5?w=800&auto=format&fit=crop',
    'happy-paella': 'https://images.unsplash.com/photo-1604704827370-75117911683c?w=800&auto=format&fit=crop',
    'happy-sushi': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop',
    'happy-thai-curry': 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop',
    'happy-pizza': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop',
    'happy-bibimbap': 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop',
  };
  
  // Check for direct match with recipe ID
  if (recipeId in specificRecipeImages) {
    return specificRecipeImages[recipeId];
  }
  
  // Return category image if available, otherwise use a random reliable food image
  if (category in RELIABLE_CATEGORY_IMAGES) {
    return RELIABLE_CATEGORY_IMAGES[category];
  }
  
  const randomIndex = Math.floor(Math.random() * VERIFIED_WORKING_IMAGES.length);
  return VERIFIED_WORKING_IMAGES[randomIndex];
};

// Enhanced image loader with double-fallback system for maximum reliability
export const getRecipeImageWithErrorHandling = (imageKey: string): string => {
  try {
    // If a specific recipe ID, use our guaranteed working images
    const specificRecipeImages: Record<string, string> = {
      'bright-citrus-salad': 'https://images.unsplash.com/photo-1590080658-d464e1869fd5?w=800&auto=format&fit=crop',
      'happy-paella': 'https://images.unsplash.com/photo-1604704827370-75117911683c?w=800&auto=format&fit=crop',
      'happy-sushi': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop',
      'happy-thai-curry': 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop',
      'happy-pizza': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop',
      'happy-bibimbap': 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop',
    };
    
    if (imageKey in specificRecipeImages) {
      return specificRecipeImages[imageKey];
    }
    
    // Try to get the mapped image
    const imagePath = getRecipeImagePath(imageKey);
    return imagePath;
  } catch (error) {
    console.error(`Error loading image for ${imageKey}:`, error);
    const randomIndex = Math.floor(Math.random() * VERIFIED_WORKING_IMAGES.length);
    return VERIFIED_WORKING_IMAGES[randomIndex];
  }
};
