
import { createRoot } from 'react-dom/client'
import { TooltipProvider } from "@radix-ui/react-tooltip"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <TooltipProvider>
    <App />
  </TooltipProvider>
);
