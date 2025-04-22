
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global fallback image that works in all environments
const GLOBAL_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';

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
      // Modify URL to use a more reliable format from Unsplash
      const newUrl = originalUrl.replace(/\?.*$/, '?w=800&auto=format&fit=crop&q=80');
      
      // Only change if the URL is different to avoid infinite loops
      if (newUrl !== originalUrl) {
        console.log('Trying alternative Unsplash URL:', newUrl);
        imgElement.src = newUrl;
        return;
      }
    }
    
    // Final fallback - if all else fails, use our guaranteed working image
    imgElement.src = GLOBAL_FALLBACK_IMAGE;
    console.log('Applied global image fallback');
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
