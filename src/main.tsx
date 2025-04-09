
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
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop'; // Breakfast - granola bowl
      } else if (altText.toLowerCase().includes('lunch')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&auto=format&fit=crop'; // Lunch salad bowl
      } else if (altText.toLowerCase().includes('dinner')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop'; // Steak dinner
      } else if (altText.toLowerCase().includes('dessert') || altText.toLowerCase().includes('sweet')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=800&auto=format&fit=crop'; // Chocolate cake
      } else if (altText.toLowerCase().includes('pasta') || altText.toLowerCase().includes('italian')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800&auto=format&fit=crop'; // Italian pasta
      } else if (altText.toLowerCase().includes('mexican') || altText.toLowerCase().includes('taco')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&auto=format&fit=crop'; // Tacos
      } else if (altText.toLowerCase().includes('comfort')) {
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1548369937-47519962c11a?w=800&auto=format&fit=crop'; // Mac and cheese
      } else {
        // General food fallback - visually appealing dish
        (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';
      }
    } else {
      // Non-recipe images - general food fallback
      (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';
    }
    
    // Add styling to show this is a fallback
    (target as HTMLImageElement).classList.add('img-fallback');
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
