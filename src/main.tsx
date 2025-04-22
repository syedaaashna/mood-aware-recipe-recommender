
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
    
    // Simple solution: always use our reliable fallback
    imgElement.src = GLOBAL_FALLBACK_IMAGE;
    
    // Add styling to show this is a fallback
    imgElement.classList.add('img-fallback');
    console.log('Applied global image fallback');
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
