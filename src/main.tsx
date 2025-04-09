
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set up event listener for image error handling with improved fallbacks
document.addEventListener('error', function(e) {
  const target = e.target as HTMLElement;
  if (target.tagName === 'IMG') {
    console.warn('Image failed to load:', (target as HTMLImageElement).src);
    
    // Check if it's a recipe image path
    const src = (target as HTMLImageElement).src;
    const isRecipeImage = src.includes('recipes') || src.includes('unsplash') || src.includes('placeholder');
    
    if (isRecipeImage) {
      // Get information from the alt attribute which might contain the recipe name
      const altText = (target as HTMLImageElement).alt || '';
      
      // Choose a reliable fallback based on alt text keywords
      if (altText.toLowerCase().includes('breakfast')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop'; // Breakfast - avocado toast
      } else if (altText.toLowerCase().includes('lunch')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop'; // Lunch bowl
      } else if (altText.toLowerCase().includes('dinner')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop'; // Steak dinner
      } else if (altText.toLowerCase().includes('dessert') || altText.toLowerCase().includes('sweet')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop'; // Chocolate cake
      } else if (altText.toLowerCase().includes('pasta') || altText.toLowerCase().includes('italian')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop'; // Italian pasta
      } else if (altText.toLowerCase().includes('mexican') || altText.toLowerCase().includes('taco')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=800&auto=format&fit=crop'; // Tacos
      } else if (altText.toLowerCase().includes('comfort')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&auto=format&fit=crop'; // Mac and cheese
      } else {
        // General food fallback - visually appealing dish
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop';
      }
    } else {
      // Non-recipe images - general food fallback
      (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop';
    }
    
    // Add styling to show this is a fallback
    (target as HTMLImageElement).classList.add('img-fallback');
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
