
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
        // If an Unsplash image failed, try our super-reliable backup
        imgElement.src = 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop';
        console.log('Using reliable general food image fallback');
        return;
      }
      
      // Choose a reliable fallback based on alt text keywords
      if (altText.toLowerCase().includes('breakfast')) {
        imgElement.src = 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&auto=format&fit=crop'; // Breakfast bowl
      } else if (altText.toLowerCase().includes('lunch')) {
        imgElement.src = 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&auto=format&fit=crop'; // Lunch bowl
      } else if (altText.toLowerCase().includes('dinner')) {
        imgElement.src = 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop'; // Dinner plate
      } else if (altText.toLowerCase().includes('dessert') || altText.toLowerCase().includes('sweet')) {
        imgElement.src = 'https://images.unsplash.com/photo-1551529834-525807d6b4f3?w=800&auto=format&fit=crop'; // Chocolate cake
      } else if (altText.toLowerCase().includes('pasta') || altText.toLowerCase().includes('italian')) {
        imgElement.src = 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop'; // Pasta
      } else if (altText.toLowerCase().includes('mexican') || altText.toLowerCase().includes('taco')) {
        imgElement.src = 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop'; // Tacos
      } else if (altText.toLowerCase().includes('comfort')) {
        imgElement.src = 'https://images.unsplash.com/photo-1543339520-51ebf2897090?w=800&auto=format&fit=crop'; // Mac and cheese
      } else if (altText.toLowerCase().includes('healthy')) {
        imgElement.src = 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop'; // Healthy bowls
      } else if (altText.toLowerCase().includes('vegan')) {
        imgElement.src = 'https://images.unsplash.com/photo-1546693951-b13c0abf92e7?w=800&auto=format&fit=crop'; // Vegan bowl
      } else if (altText.toLowerCase().includes('asian') || altText.toLowerCase().includes('ramen')) {
        imgElement.src = 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop'; // Ramen bowl
      } else if (altText.toLowerCase().includes('sandwich') || altText.toLowerCase().includes('quick')) {
        imgElement.src = 'https://images.unsplash.com/photo-1603046891249-70088f7cae2f?w=800&auto=format&fit=crop'; // Sandwich
      } else {
        // Super reliable general food fallback
        imgElement.src = 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop';
      }
      
      // Add styling to show this is a fallback
      imgElement.classList.add('img-fallback');
    } else {
      // Non-recipe images - general food fallback
      imgElement.src = 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop';
    }
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
