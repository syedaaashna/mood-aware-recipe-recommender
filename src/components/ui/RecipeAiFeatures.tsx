
import React, { useState, useEffect, useRef } from 'react';
import { Brain, ChevronDown, ChevronUp, Lightbulb, Utensils, ListPlus, Sparkles, Flame } from 'lucide-react';
import { Recipe, getSimilarRecipes } from '@/utils/moodRecipeData';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface RecipeAiFeaturesProps {
  recipe: Recipe;
}

const RecipeAiFeatures = ({ recipe }: RecipeAiFeaturesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const similarRecipes = getSimilarRecipes(recipe.id);
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});
  const [recipeImages, setRecipeImages] = useState<Record<string, string>>({});
  const imagesInitializedRef = useRef(false);

  // Get recipe image URL with reliable alternatives
  const getRecipeImageUrl = (recipeName: string) => {
    const searchQuery = recipeName.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '+');
    return `https://source.unsplash.com/featured/?${searchQuery},food&fit=crop&w=400&h=200&random=${Date.now()}`;
  };

  // Get a backup image using reliable food images
  const getBackupImageUrl = (recipeId: string) => {
    // Reliable food images that should always work
    const reliableFoodImages = [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&h=200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=200&q=80", 
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=400&h=200&q=80",
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=400&h=200&q=80"
    ];
    
    // Use recipe ID to consistently select the same image for the same recipe
    const index = parseInt(recipeId.replace(/\D/g, '')) % reliableFoodImages.length;
    return reliableFoodImages[Math.abs(index)];
  };

  // Initialize images for all similar recipes
  useEffect(() => {
    if (!imagesInitializedRef.current && similarRecipes.length > 0) {
      // Set initial placeholders and loading states for all similar recipes
      const initialImages: Record<string, string> = {};
      const initialLoadingStates: Record<string, boolean> = {};
      
      similarRecipes.forEach(similarRecipe => {
        initialImages[similarRecipe.id] = "https://placehold.co/400x200/f8f9fa/6c757d?text=Loading...";
        initialLoadingStates[similarRecipe.id] = true;
      });
      
      setRecipeImages(initialImages);
      setImageLoading(initialLoadingStates);
      
      // Load actual images one by one
      similarRecipes.forEach(similarRecipe => {
        // First try with Unsplash
        const img = new Image();
        img.src = getRecipeImageUrl(similarRecipe.name);
        
        // Set a timeout for slow-loading images
        const timeoutId = setTimeout(() => {
          if (imageLoading[similarRecipe.id]) {
            setRecipeImages(prev => ({
              ...prev,
              [similarRecipe.id]: getBackupImageUrl(similarRecipe.id)
            }));
            setImageLoading(prev => ({ ...prev, [similarRecipe.id]: false }));
          }
        }, 5000);
        
        img.onload = () => {
          clearTimeout(timeoutId);
          setRecipeImages(prev => ({
            ...prev,
            [similarRecipe.id]: img.src
          }));
          setImageLoading(prev => ({ ...prev, [similarRecipe.id]: false }));
        };
        
        img.onerror = () => {
          clearTimeout(timeoutId);
          setRecipeImages(prev => ({
            ...prev,
            [similarRecipe.id]: getBackupImageUrl(similarRecipe.id)
          }));
          setImageLoading(prev => ({ ...prev, [similarRecipe.id]: false }));
        };
        
        return () => clearTimeout(timeoutId);
      });
      
      imagesInitializedRef.current = true;
    }
    
    return () => {
      // Reset the ref when recipe changes
      imagesInitializedRef.current = false;
    };
  }, [recipe.id, similarRecipes]);

  const handleImageError = (recipeId: string) => {
    // Fall back to a reliable image if loading fails
    setRecipeImages(prev => ({
      ...prev,
      [recipeId]: getBackupImageUrl(recipeId)
    }));
    setImageLoading(prev => ({ ...prev, [recipeId]: false }));
  };

  return (
    <div className="rounded-xl overflow-hidden border border-primary/20">
      <div 
        className="p-3 flex items-center justify-between cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background: 'linear-gradient(90deg, hsla(259, 84%, 78%, 1) 0%, hsla(206, 67%, 75%, 1) 100%)',
        }}
      >
        <div className="flex items-center">
          <Brain className="w-5 h-5 mr-2 text-white" />
          <h3 className="text-base font-bold text-white">AI-Powered Recipe Insights</h3>
        </div>
        <div className="flex items-center">
          <span className="text-white text-xs mr-2 bg-white/20 px-2 py-0.5 rounded-full">
            <Sparkles className="w-3 h-3 inline mr-1" /> AI Enhanced
          </span>
          <button className="text-white">
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 bg-gray-50 dark:bg-gray-900">
          {/* AI Badge */}
          <div className="mb-4 flex justify-center">
            <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center">
              <Flame className="w-3 h-3 mr-2 text-purple-600 dark:text-purple-300" />
              <span className="text-xs font-medium text-purple-700 dark:text-purple-300">AI-Analyzed Recipe</span>
            </div>
          </div>
          
          {/* AI Recipe Suggestion */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />
              <h4 className="text-sm font-medium">Chef's AI Suggestion</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-xs pl-6 bg-yellow-50 dark:bg-yellow-950/20 p-2 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
              {recipe.aiSuggestion || "Our AI chef doesn't have any specific suggestions for this recipe."}
            </p>
          </div>
          
          {/* Nutrition Analysis */}
          {recipe.nutritionAnalysis && (
            <div className="mb-4">
              <div className="flex items-start mb-2">
                <Utensils className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                <h4 className="text-sm font-medium">Nutrition Insight</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-xs pl-6 bg-green-50 dark:bg-green-950/20 p-2 rounded-lg border border-green-100 dark:border-green-900/30">
                {recipe.nutritionAnalysis}
              </p>
            </div>
          )}
          
          {/* Cooking Tips */}
          {recipe.cookingTips && recipe.cookingTips.length > 0 && (
            <div className="mb-4">
              <div className="flex items-start mb-2">
                <ListPlus className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <h4 className="text-sm font-medium">AI Cooking Tips</h4>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 text-xs pl-6 space-y-1 bg-blue-50 dark:bg-blue-950/20 p-2 rounded-lg border border-blue-100 dark:border-blue-900/30">
                {recipe.cookingTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-1.5"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Similar Recipes */}
          {similarRecipes.length > 0 && (
            <div>
              <div className="flex items-center mb-2">
                <Brain className="w-4 h-4 mr-2 text-purple-500" />
                <h4 className="text-sm font-medium">AI-Recommended Similar Recipes</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pl-6">
                {similarRecipes.map(similarRecipe => (
                  <Link 
                    key={similarRecipe.id} 
                    to={`/recipe/${similarRecipe.id}`}
                    className="block p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="rounded-md overflow-hidden mb-2 bg-gray-200 dark:bg-gray-700">
                      <AspectRatio ratio={2/1}>
                        <img 
                          src={recipeImages[similarRecipe.id] || "https://placehold.co/400x200/f8f9fa/6c757d?text=Loading..."}
                          alt={similarRecipe.name}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(similarRecipe.id)}
                          loading="lazy"
                        />
                        {imageLoading[similarRecipe.id] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 dark:bg-gray-800/80">
                            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                      </AspectRatio>
                    </div>
                    <h5 className="font-medium text-xs">{similarRecipe.name}</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                      {similarRecipe.tags.slice(0, 2).join(', ')}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeAiFeatures;
