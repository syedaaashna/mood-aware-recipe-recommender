
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced event listener for image error handling with reliable fallbacks
document.addEventListener('error', function(e) {
  const target = e.target as HTMLElement;
  if (target.tagName === 'IMG') {
    const imgElement = target as HTMLImageElement;
    console.warn('Image failed to load:', imgElement.src);
    
    // Check if it's a recipe image path
    const src = imgElement.src;
    const isRecipeImage = src.includes('recipes') || src.includes('unsplash') || src.includes('placeholder');
    
    if (isRecipeImage) {
      // Get information from the alt attribute which might contain the recipe name
      const altText = imgElement.alt || '';
      
      // First try our premium Unsplash collection with reliable food images
      if (src.includes('unsplash.com')) {
        // Try another high-quality Unsplash image if the current one failed
        const newUnsplashId = '1546069901-ba9599a7e63c'; // Reliable colorful healthy food bowl
        imgElement.src = `https://images.unsplash.com/photo-${newUnsplashId}?w=800&auto=format&fit=crop`;
        console.log('Using reliable general food image fallback');
        return;
      }
      
      // Choose a reliable fallback based on alt text keywords for accurate dish representation
      if (altText.toLowerCase().includes('pancake') || altText.toLowerCase().includes('breakfast')) {
        imgElement.src = 'https://images.unsplash.com/photo-1567599672391-17b31d92e9e4?w=800&auto=format&fit=crop'; // Pancakes
      } else if (altText.toLowerCase().includes('salad') || altText.toLowerCase().includes('lunch')) {
        imgElement.src = 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop'; // Lunch bowl
      } else if (altText.toLowerCase().includes('steak') || altText.toLowerCase().includes('dinner')) {
        imgElement.src = 'https://images.unsplash.com/photo-1588778272105-1ff4b1c491e9?w=800&auto=format&fit=crop'; // Steak dinner
      } else if (altText.toLowerCase().includes('cake') || altText.toLowerCase().includes('dessert') || altText.toLowerCase().includes('sweet')) {
        imgElement.src = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop'; // Chocolate cake
      } else if (altText.toLowerCase().includes('mac') || altText.toLowerCase().includes('cheese') || altText.toLowerCase().includes('comfort')) {
        imgElement.src = 'https://images.unsplash.com/photo-1548340748-6d2b7c7a0d7a?w=800&auto=format&fit=crop'; // Mac and cheese
      } else if (altText.toLowerCase().includes('pasta') || altText.toLowerCase().includes('italian')) {
        imgElement.src = 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop'; // Pasta
      } else if (altText.toLowerCase().includes('taco') || altText.toLowerCase().includes('mexican')) {
        imgElement.src = 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop'; // Tacos
      } else if (altText.toLowerCase().includes('vegan')) {
        imgElement.src = 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop'; // Vegan bowl
      } else if (altText.toLowerCase().includes('asian') || altText.toLowerCase().includes('ramen')) {
        imgElement.src = 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop'; // Ramen bowl
      } else if (altText.toLowerCase().includes('sandwich') || altText.toLowerCase().includes('quick')) {
        imgElement.src = 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop'; // Sandwich
      } else if (altText.toLowerCase().includes('smoothie') || altText.toLowerCase().includes('drink')) {
        imgElement.src = 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=800&auto=format&fit=crop'; // Smoothie
      } else if (altText.toLowerCase().includes('healthy')) {
        imgElement.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'; // Healthy bowls
      } else if (altText.toLowerCase().includes('spicy')) {
        imgElement.src = 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&auto=format&fit=crop'; // Spicy dish
      } else if (altText.toLowerCase().includes('fruit')) {
        imgElement.src = 'https://images.unsplash.com/photo-1616684000067-36952fde56ec?w=800&auto=format&fit=crop'; // Fruit bowl
      } else if (altText.toLowerCase().includes('exotic')) {
        imgElement.src = 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=800&auto=format&fit=crop'; // Dragon fruit
      } else {
        // Super reliable general food fallback - colorful healthy bowl
        imgElement.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';
      }
      
      // Add styling to show this is a fallback
      imgElement.classList.add('img-fallback');
    } else {
      // Non-recipe images - general food fallback
      imgElement.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';
    }
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
