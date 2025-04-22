
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global fallback image that works in all environments
const GLOBAL_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80';

// Collection of verified working food-related images
const VERIFIED_WORKING_IMAGES = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80', // Salad in a bowl
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80', // Pasta dish
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80', // Pizza
  'https://images.unsplash.com/photo-1562967915-5469965fb527?w=800&auto=format&fit=crop&q=80', // Burger
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=80', // Cake
  'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop&q=80', // Curry dish
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop&q=80', // Salad with egg
  'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop&q=80', // Rice bowl
  'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop&q=80', // Bibimbap
  'https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800&auto=format&fit=crop&q=80'  // Tacos
];

// Enhanced event listener for image error handling with reliable fallbacks
document.addEventListener('error', function(e) {
  const target = e.target as HTMLElement;
  if (target.tagName === 'IMG') {
    const imgElement = target as HTMLImageElement;
    console.warn('Image failed to load:', imgElement.src);
    
    // Don't try to handle non-image URLs or SVGs
    if (imgElement.src.includes('data:') || 
        imgElement.src.includes('.svg') || 
        imgElement.src.includes('favicon')) {
      return;
    }
    
    // Try using a more reliable image service for Unsplash images
    if (imgElement.src.includes('unsplash.com')) {
      const originalUrl = imgElement.src;
      // Modify URL to use a more reliable format from Unsplash with quality parameter
      const newUrl = originalUrl.replace(/\?.*$/, '?w=800&auto=format&fit=crop&q=80');
      
      // Only change if the URL is different to avoid infinite loops
      if (newUrl !== originalUrl) {
        console.log('Trying alternative Unsplash URL:', newUrl);
        imgElement.src = newUrl;
        return;
      }
    }
    
    // Final fallback - if all else fails, use one of our guaranteed working images
    const randomIndex = Math.floor(Math.random() * VERIFIED_WORKING_IMAGES.length);
    imgElement.src = VERIFIED_WORKING_IMAGES[randomIndex];
    console.log('Applied global image fallback');
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
