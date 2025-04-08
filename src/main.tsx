
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
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop'; // Breakfast
      } else if (altText.toLowerCase().includes('lunch')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'; // Lunch
      } else if (altText.toLowerCase().includes('dinner')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop'; // Dinner
      } else if (altText.toLowerCase().includes('dessert') || altText.toLowerCase().includes('sweet')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop'; // Dessert
      } else {
        // General food fallback
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop';
      }
    } else {
      // Non-recipe images
      (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop';
    }
    
    // Add styling to show this is a fallback
    (target as HTMLImageElement).classList.add('img-fallback');
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
