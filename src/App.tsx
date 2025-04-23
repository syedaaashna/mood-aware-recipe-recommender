
import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Navbar from "./components/ui/Navbar";
import ChatBot from "./components/ui/ChatBot";
import { tfInferMoodFromSentence, getMoodMeta } from "@/utils/tfMoodInfer";
import { getRecipesByMood, searchRecipes } from "@/utils/recipeOperations";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentMood, setCurrentMood] = useState<string | null>(null);
  const navigate = useNavigate();

  // Initialize dark mode from user preference or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleSearch = async (query: string) => {
    // Navigate to home page first
    navigate('/');

    // Attempt mood inference
    const inferredMood = await tfInferMoodFromSentence(query.trim());
    if (inferredMood) {
      const moodMeta = getMoodMeta(inferredMood);
      if (moodMeta) {
        // If mood is inferred, use mood-based recipes
        const foundRecipes = getRecipesByMood(moodMeta.id);
        // You might want to pass these recipes to the Index page via state or context
        return;
      }
    }

    // Fallback to direct recipe search
    const foundRecipes = searchRecipes(query.trim());
    // You might want to pass these recipes to the Index page via state or context
  };

  return (
    <>
      <Toaster />
      <Sonner />
      <Navbar 
        toggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode} 
        onSearch={handleSearch}
      />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ChatBot currentMood={currentMood} />
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
