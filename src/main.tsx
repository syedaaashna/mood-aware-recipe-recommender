
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set up event listener for image error handling
document.addEventListener('error', function(e) {
  const target = e.target as HTMLElement;
  if (target.tagName === 'IMG') {
    console.warn('Image failed to load:', (target as HTMLImageElement).src);
    // Replace with default image
    (target as HTMLImageElement).src = '/src/assets/images/recipes/default.jpg';
    (target as HTMLImageElement).classList.add('img-fallback');
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
