
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
    const isRecipeImage = src.includes('recipes') || src.includes('unsplash') || src.includes('placeholder');
    
    if (isRecipeImage) {
      // For recipe images, use a reliable fallback
      (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop';
    } else {
      // Non-recipe images
      (target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop';
    }
    
    // Add styling to show this is a fallback
    (target as HTMLImageElement).classList.add('img-fallback');
    (target as HTMLImageElement).style.border = '1px dashed #ccc';
    (target as HTMLImageElement).style.padding = '8px';
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
