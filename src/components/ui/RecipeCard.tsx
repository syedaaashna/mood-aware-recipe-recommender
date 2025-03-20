
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Heart, Sparkles, MessageCircle, ThumbsUp, Award } from 'lucide-react';
import { Recipe } from '@/utils/moodRecipeData';
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite?: boolean;
  onToggleFavorite?: (recipe: Recipe) => void;
}

const RecipeCard = ({ recipe, isFavorite = false, onToggleFavorite }: RecipeCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);
  const { toast } = useToast();

  // Random color for recipe card gradient
  const getRandomGradient = () => {
    const gradients = [
      'recipe-gradient-1',
      'recipe-gradient-2',
      'recipe-gradient-3',
      'recipe-gradient-4',
      'recipe-gradient-5',
      'recipe-gradient-6',
      'recipe-gradient-7',
      'recipe-gradient-8',
      'recipe-gradient-9',
      'recipe-gradient-10',
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  const [gradientClass] = useState(getRandomGradient());

  useEffect(() => {
    // Show sparkle animation occasionally
    const sparkleTimer = setInterval(() => {
      if (isHovered) {
        setShowSparkle(true);
        setTimeout(() => setShowSparkle(false), 1000);
      }
    }, 3000);

    return () => clearInterval(sparkleTimer);
  }, [isHovered]);

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

  // Enhanced image mapping for recipes to ensure they match their dishes
  const getImageUrl = () => {
    if (imageError || !recipe.imageUrl) {
      // Provide specific fallback images based on recipe name and type/category
      const recipeName = (recipe.title || recipe.name).toLowerCase();
      
      if (recipeName.includes('pasta') || recipeName.includes('spaghetti')) {
        return 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&h=400';
      } else if (recipeName.includes('curry') || recipeName.includes('indian')) {
        return 'https://images.unsplash.com/photo-1604952564555-13c872c0a364?auto=format&fit=crop&w=600&h=400';
      } else if (recipeName.includes('breakfast') || recipeName.includes('pancake') || recipeName.includes('egg')) {
        return 'https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?auto=format&fit=crop&w=600&h=400';
      } else if (recipeName.includes('cake') || recipeName.includes('dessert') || recipeName.includes('sweet')) {
        return 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&h=400';
      } else if (recipeName.includes('soup') || recipeName.includes('stew')) {
        return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&h=400';
      } else if (recipeName.includes('salad')) {
        return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=400';
      } else if (recipeName.includes('pizza')) {
        return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&h=400';
      } else if (recipeName.includes('smoothie') || recipeName.includes('juice')) {
        return 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=600&h=400';
      } else if (recipe.tags.includes('dessert')) {
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
  
  // Generate AI enthusiasm rating - this is just for fun
  const getEnthusiasmRating = () => {
    const ratings = ["Intriguing!", "Must try!", "Chef's pick!", "Crowd pleaser!"];
    return ratings[Math.floor(Math.random() * ratings.length)];
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <Link
        to={`/recipe/${recipe.id}`}
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 ${isHovered ? 'shadow-lg shadow-primary/20 dark:shadow-primary/10' : 'shadow-sm'}`}>
          {/* Image container with loading state and overlay */}
          <div className="relative w-full h-52 overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
            )}
            
            <img
              src={getImageUrl()}
              alt={displayTitle}
              className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            
            <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
            
            {/* AI badge */}
            <div className="absolute top-3 left-3 flex space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium
                ${recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 
                  recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' : 
                  'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'}`}
              >
                {recipe.difficulty}
              </span>
              
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 flex items-center gap-1">
                <Sparkles size={10} className="inline" />
                AI Matched
              </span>
            </div>
            
            {/* Favorite button */}
            <button
              onClick={handleFavoriteToggle}
              className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                isFavorite 
                  ? 'bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-300 scale-110' 
                  : 'bg-gray-100/80 text-gray-500 dark:bg-gray-800/80 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              } ${isHovered ? 'transform scale-110' : ''}`}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
            </button>
            
            {/* Sparkle animation */}
            {showSparkle && (
              <>
                <div className="absolute top-1/4 left-1/4 w-2 h-2 sparkle" style={{animationDelay: '0s'}}></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 sparkle" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 sparkle" style={{animationDelay: '0.5s'}}></div>
              </>
            )}
          </div>
          
          {/* Content with gradient background */}
          <div className={`p-4 ${gradientClass} bg-opacity-20`}>
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
            
            {/* AI enthusiasm rating */}
            <div className="mt-2 mb-2">
              <span className="text-xs flex items-center gap-1 text-purple-600 dark:text-purple-400">
                <Award size={12} />
                <span className="font-medium">{getEnthusiasmRating()}</span>
              </span>
            </div>
            
            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {recipe.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs transition-all hover:bg-primary/20 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary"
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
    </motion.div>
  );
};

export default RecipeCard;
