
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Heart } from 'lucide-react';
import { Recipe } from '@/utils/moodRecipeData';
import { useToast } from "@/hooks/use-toast";

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite?: boolean;
  onToggleFavorite?: (recipe: Recipe) => void;
}

const RecipeCard = ({ recipe, isFavorite = false, onToggleFavorite }: RecipeCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { toast } = useToast();

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setImageError(true);
  };

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onToggleFavorite) {
      onToggleFavorite(recipe);
      
      toast({
        title: isFavorite ? "Removed from Favorites" : "Added to Favorites",
        description: isFavorite ? `${recipe.title || recipe.name} has been removed from your favorites.` : `${recipe.title || recipe.name} has been added to your favorites.`,
        duration: 3000,
      });
    }
  };

  // Updated image mapping for recipes to ensure they match their dishes
  const getImageUrl = () => {
    if (imageError || !recipe.imageUrl) {
      // Provide specific fallback images based on recipe type/category
      if (recipe.tags.includes('dessert')) {
        return 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&h=400';
      } else if (recipe.tags.includes('indian')) {
        return 'https://images.unsplash.com/photo-1604952564555-13c872c0a364?auto=format&fit=crop&w=600&h=400';
      } else if (recipe.tags.includes('breakfast')) {
        return 'https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?auto=format&fit=crop&w=600&h=400';
      } else {
        return 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400';
      }
    }
    
    // Ensure we're using the base URL without existing query parameters
    const baseUrl = recipe.imageUrl.split('?')[0];
    
    // Add quality parameters for better image loading
    return `${baseUrl}?auto=format&fit=crop&w=600&h=400&q=80`;
  };

  // Use title if available, otherwise use name for display
  const displayTitle = recipe.title || recipe.name;

  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden rounded-xl hover-card border border-gray-200 dark:border-gray-800 ${isHovered ? 'shadow-lg' : 'shadow-sm'}`}>
        {/* Image container with loading state and overlay */}
        <div className="relative w-full h-52 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
          )}
          
          <img
            src={getImageUrl()}
            alt={displayTitle}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Difficulty badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium
              ${recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 
                recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' : 
                'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'}`}
            >
              {recipe.difficulty}
            </span>
          </div>
          
          {/* Favorite button */}
          <button
            onClick={handleFavoriteToggle}
            className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
              isFavorite 
                ? 'bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-300' 
                : 'bg-gray-100/80 text-gray-500 dark:bg-gray-800/80 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 line-clamp-1">{displayTitle}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{recipe.description}</p>
          
          {/* Recipe info */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{recipe.prepTime} + {recipe.cookTime}</span>
            </div>
            
            <div className="flex items-center">
              <Users size={14} className="mr-1" />
              <span>{recipe.servings}</span>
            </div>
            
            <div className="flex items-center">
              <ChefHat size={14} className="mr-1" />
              <span>{recipe.calories} cal</span>
            </div>
          </div>
          
          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {recipe.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
            {recipe.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                +{recipe.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
