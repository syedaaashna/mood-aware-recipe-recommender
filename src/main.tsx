
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set up event listener for image error handling
document.addEventListener('error', function(e) {
  const target = e.target as HTMLElement;
  if (target.tagName === 'IMG') {
    console.warn('Image failed to load:', (target as HTMLImageElement).src);
    // Replace with placeholder image
    (target as HTMLImageElement).src = '/placeholder.svg';
    (target as HTMLImageElement).classList.add('img-fallback');
    
    // Add some styling to show this is a fallback
    (target as HTMLImageElement).style.border = '1px dashed #ccc';
    (target as HTMLImageElement).style.padding = '8px';
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
