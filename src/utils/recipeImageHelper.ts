
import recipeImageMapping from './recipeImageMapping';

/**
 * Gets the correct image path for a recipe, with improved handling of
 * image loading and fallback mechanisms for greater reliability
 */
export const getRecipeImagePath = (imageKey: string): string => {
  try {
    console.log(`Finding image for recipe: ${imageKey}`);
    
    // First try to match the exact recipe ID
    if (imageKey in recipeImageMapping) {
      const imagePath = recipeImageMapping[imageKey];
      console.log(`Found exact match for ${imageKey}: ${imagePath}`);
      return imagePath;
    }
    
    // Otherwise, for recipe IDs not in the mapping, try to find an image 
    // that starts with the same prefix from the recipe ID
    const prefix = imageKey.replace(/[0-9]+$/, '');
    const allKeys = Object.keys(recipeImageMapping);
    const matchingKey = allKeys.find(key => key.startsWith(prefix));
    
    if (matchingKey) {
      console.log(`Using similar image ${matchingKey} for recipe ${imageKey}: ${recipeImageMapping[matchingKey]}`);
      return recipeImageMapping[matchingKey];
    }
    
    // If nothing matches, choose a food image based on category
    const fallbackImage = getFallbackImage(imageKey);
    console.log(`No match found for ${imageKey}, using fallback: ${fallbackImage}`);
    return fallbackImage;
  } catch (error) {
    console.error('Error in getRecipeImagePath:', error);
    // Use a highly reliable default image as last resort
    return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';
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
  // Extract category from recipe ID (e.g., "comfort1" -> "comfort")
  const category = recipeId.replace(/[0-9]+$/, '').toLowerCase();
  
  // Map categories to carefully selected images with accurate dish representation
  switch (category) {
    case 'breakfast':
      return 'https://images.unsplash.com/photo-1567599672391-17b31d92e9e4?w=800&auto=format&fit=crop'; // Pancakes
    case 'lunch':
      return 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop'; // Lunch bowl
    case 'dinner':
      return 'https://images.unsplash.com/photo-1588778272105-1ff4b1c491e9?w=800&auto=format&fit=crop'; // Steak dinner
    case 'dessert':
      return 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop'; // Chocolate cake
    case 'comfort':
      return 'https://images.unsplash.com/photo-1548340748-6d2b7c7a0d7a?w=800&auto=format&fit=crop'; // Mac and cheese
    case 'quick':
      return 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop'; // Quick sandwich
    case 'snack':
      return 'https://images.unsplash.com/photo-1609525313344-a56f10561468?w=800&auto=format&fit=crop'; // Popcorn
    case 'drink':
      return 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=800&auto=format&fit=crop'; // Colorful smoothie
    case 'vegan':
      return 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop'; // Vegan bowl
    case 'appetizer':
      return 'https://images.unsplash.com/photo-1626200935028-1eed42b8dd83?w=800&auto=format&fit=crop'; // Bruschetta
    case 'italian':
      return 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop'; // Spaghetti
    case 'mexican':
      return 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop'; // Tacos
    case 'asian':
      return 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop'; // Ramen
    case 'mediterranean':
      return 'https://images.unsplash.com/photo-1626200935028-1eed42b8dd83?w=800&auto=format&fit=crop'; // Mediterranean platter
    case 'healthy':
      return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'; // Healthy bowl
    case 'spicy':
      return 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&auto=format&fit=crop'; // Spicy noodles
    case 'sweet':
      return 'https://images.unsplash.com/photo-1616684000067-36952fde56ec?w=800&auto=format&fit=crop'; // Sweet fruit bowl
    case 'exotic':
      return 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=800&auto=format&fit=crop'; // Dragon fruit
    case 'indian':
      return 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&auto=format&fit=crop'; // Indian curry
    case 'american':
      return 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop'; // Burger
    case 'chinese':
      return 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop'; // Chinese stir fry
    case 'korean':
      return 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop'; // Korean food
    case 'continental':
      return 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&auto=format&fit=crop'; // Elegant plated dish
    case 'unique':
      return 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop'; // Creative dish
    default:
      // For unknown categories, return a high-quality food image
      return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';
  }
};
