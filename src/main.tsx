
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set up event listener for image error handling
document.addEventListener('error', function(e) {
  const target = e.target as HTMLElement;
  if (target.tagName === 'IMG') {
    console.warn('Image failed to load:', (target as HTMLImageElement).src);
    
    // Check if it's a recipe image path
    const src = (target as HTMLImageElement).src;
    const isRecipeImage = src.includes('recipes') || src.includes('placeholder');
    
    if (isRecipeImage) {
      // For recipe images, try different fallback strategies
      if (src.includes('assets/images/recipes')) {
        // Try a different recipe image
        (target as HTMLImageElement).src = '/src/assets/images/recipes/comfort1.jpg';
      } else if (src.includes('placeholder.svg')) {
        // If placeholder fails, use a direct image path
        (target as HTMLImageElement).src = '/src/assets/images/recipes/comfort1.jpg';
      } else {
        // Last resort fallback
        (target as HTMLImageElement).src = '/src/assets/images/recipes/comfort1.jpg';
      }
    } else {
      // Non-recipe images
      (target as HTMLImageElement).src = '/placeholder.svg';
    }
    
    // Add styling to show this is a fallback
    (target as HTMLImageElement).classList.add('img-fallback');
    (target as HTMLImageElement).style.border = '1px dashed #ccc';
    (target as HTMLImageElement).style.padding = '8px';
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
