
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
    // Recipe-specific image mappings with high-quality, reliable images
    const recipeSpecificImages: Record<string, string> = {
      'classic-pizza': 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chocolate-cake': 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'spicy-noodles': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chicken-stir-fry': 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'berry-smoothie': 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'lavender-tea': 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'mushroom-risotto': 'https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'gingerbread-cookies': 'https://images.pexels.com/photos/6341984/pexels-photo-6341984.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'apple-pie': 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'sushi-rolls': 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'french-toast': 'https://images.pexels.com/photos/7170323/pexels-photo-7170323.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chicken-curry': 'https://images.pexels.com/photos/6645965/pexels-photo-6645965.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'butter-chicken': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'malai-kofta': 'https://images.pexels.com/photos/12385193/pexels-photo-12385193.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'shahi-paneer': 'https://images.pexels.com/photos/6940996/pexels-photo-6940996.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'tandoori-raan': 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'masala-dosa': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'aloo-paratha': 'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'biryani': 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', 
      'coconut-curry': 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'matcha-smoothie': 'https://images.pexels.com/photos/4790618/pexels-photo-4790618.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'mango-lassi': 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'samosas': 'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'gulab-jamun': 'https://images.pexels.com/photos/14485899/pexels-photo-14485899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'palak-paneer': 'https://images.pexels.com/photos/6013452/pexels-photo-6013452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    };
    
    // First check if we have a recipe-specific image
    if (recipe.id in recipeSpecificImages) {
      return recipeSpecificImages[recipe.id];
    }
    
    // Fallback category images with reliable sources
    const categoryImages: Record<string, string> = {
      'pasta': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'curry': 'https://images.pexels.com/photos/6645965/pexels-photo-6645965.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'indian': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'breakfast': 'https://images.pexels.com/photos/7170323/pexels-photo-7170323.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pancake': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'cake': 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'dessert': 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'soup': 'https://images.pexels.com/photos/5409035/pexels-photo-5409035.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'salad': 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pizza': 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'smoothie': 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chicken': 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'vegetarian': 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'south indian': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'dosa': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'noodles': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'stir-fry': 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'cookies': 'https://images.pexels.com/photos/6341984/pexels-photo-6341984.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pie': 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'tea': 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'risotto': 'https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'sushi': 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'north indian': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'paneer': 'https://images.pexels.com/photos/6940996/pexels-photo-6940996.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'lamb': 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'biryani': 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'lassi': 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'samosa': 'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'sweet': 'https://images.pexels.com/photos/14485899/pexels-photo-14485899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'palak': 'https://images.pexels.com/photos/6013452/pexels-photo-6013452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    };
    
    if (imageError || !recipe.imageUrl) {
      // Search for matching category in recipe name or tags
      const recipeName = (recipe.title || recipe.name).toLowerCase();
      
      // First try to match by recipe name
      for (const [category, url] of Object.entries(categoryImages)) {
        if (recipeName.includes(category)) {
          return url;
        }
      }
      
      // Then try to match by tags
      for (const tag of recipe.tags) {
        const lowerTag = tag.toLowerCase();
        for (const [category, url] of Object.entries(categoryImages)) {
          if (lowerTag.includes(category) || category.includes(lowerTag)) {
            return url;
          }
        }
      }
      
      // Default fallback image if nothing else matches
      return 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400';
    }
    
    return recipe.imageUrl;
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
