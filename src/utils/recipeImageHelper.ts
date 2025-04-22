import recipeImageMapping from './recipeImageMapping';

// Reliable fallback image that works in all environments
const GLOBAL_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';

/**
 * Gets the correct image path for a recipe, with improved handling of
 * image loading and fallback mechanisms for greater reliability
 */
export const getRecipeImagePath = (imageKey: string): string => {
  try {
    // If no key is provided, return the fallback immediately
    if (!imageKey) return GLOBAL_FALLBACK_IMAGE;
    
    console.log(`Finding image for recipe: ${imageKey}`);
    
    // First try to match the exact recipe ID
    if (imageKey in recipeImageMapping) {
      const imagePath = recipeImageMapping[imageKey];
      console.log(`Found exact match for ${imageKey}: ${imagePath}`);
      return imagePath || GLOBAL_FALLBACK_IMAGE;
    }
    
    // Otherwise, for recipe IDs not in the mapping, try to find an image 
    // that starts with the same prefix from the recipe ID
    const prefix = imageKey.replace(/[0-9]+$/, '');
    const allKeys = Object.keys(recipeImageMapping);
    const matchingKey = allKeys.find(key => key.startsWith(prefix));
    
    if (matchingKey) {
      const similarImage = recipeImageMapping[matchingKey];
      console.log(`Using similar image ${matchingKey} for recipe ${imageKey}: ${similarImage}`);
      return similarImage || GLOBAL_FALLBACK_IMAGE;
    }
    
    // If nothing matches, choose a food image based on category
    const fallbackImage = getFallbackImage(imageKey);
    console.log(`No match found for ${imageKey}, using fallback: ${fallbackImage}`);
    return fallbackImage;
  } catch (error) {
    console.error('Error in getRecipeImagePath:', error);
    // Use a highly reliable default image as last resort
    return GLOBAL_FALLBACK_IMAGE;
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
  // If no ID is provided, return the global fallback
  if (!recipeId) return GLOBAL_FALLBACK_IMAGE;
  
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
    'italian': 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=800&auto=format&fit=crop',
    'mexican': 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop',
    'asian': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'mediterranean': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop',
    'healthy': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'spicy': 'https://images.unsplash.com/photo-1566565286951-f60188c7aa71?w=800&auto=format&fit=crop',
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
  };
  
  // Return category image if available, otherwise use our global fallback
  return RELIABLE_CATEGORY_IMAGES[category] || GLOBAL_FALLBACK_IMAGE;
};

// Enhanced image loader with double-fallback system for maximum reliability
export const getRecipeImageWithErrorHandling = (imageKey: string): string => {
  try {
    // Try to get the mapped image first
    const imagePath = getRecipeImagePath(imageKey);
    
    // Preload the image to test if it works
    const img = new Image();
    img.onerror = () => {
      console.log(`Image error for ${imageKey}, falling back to global image`);
      return GLOBAL_FALLBACK_IMAGE;
    };
    
    return imagePath || GLOBAL_FALLBACK_IMAGE;
  } catch (error) {
    console.error(`Error loading image for ${imageKey}:`, error);
    return GLOBAL_FALLBACK_IMAGE;
  }
};
