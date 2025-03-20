
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat, Heart, Share2, Volume2, Play, Pause } from 'lucide-react';
import { Recipe as RecipeType, getRecipeById } from '@/utils/moodRecipeData';
import VoiceGuidance from '@/components/ui/VoiceGuidance';
import RecipeAiFeatures from '@/components/ui/RecipeAiFeatures';
import { useToast } from "@/hooks/use-toast";

// Helper function to check and fix image URLs
const getValidImageUrl = (recipe: RecipeType): string => {
  // Default image based on recipe category/tags
  const getDefaultImage = () => {
    if (recipe.tags.includes('indian')) {
      return 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else if (recipe.tags.includes('dessert')) {
      return 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else {
      return 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    }
  };

  // Special case for specific recipes that need image corrections
  const specialCaseImages: Record<string, string> = {
    'masala-dosa': 'https://images.unsplash.com/photo-1610192244261-3f33de3f72e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'butter-chicken': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'shahi-paneer': 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  };

  // If there's a special case for this recipe, use that
  if (recipe.id in specialCaseImages) {
    return specialCaseImages[recipe.id];
  }

  // Check if the image URL is valid and add quality parameters
  if (recipe.imageUrl && recipe.imageUrl.length > 10) {
    // Add quality parameters to Unsplash URLs
    if (recipe.imageUrl.includes('unsplash.com')) {
      // Parse URL and add quality parameters if not already present
      const url = new URL(recipe.imageUrl);
      if (!url.searchParams.has('q')) {
        url.searchParams.set('q', '80');
      }
      if (!url.searchParams.has('auto')) {
        url.searchParams.set('auto', 'format');
      }
      return url.toString();
    }
    return recipe.imageUrl;
  }

  // Use default image as fallback
  return getDefaultImage();
};

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const foundRecipe = getRecipeById(id);
      
      // Simulate loading for smooth transitions
      setTimeout(() => {
        if (foundRecipe) {
          // Ensure the recipe has a valid image URL
          const validatedRecipe = {
            ...foundRecipe,
            imageUrl: getValidImageUrl(foundRecipe)
          };
          setRecipe(validatedRecipe);
        } else {
          setRecipe(null);
        }
        setIsLoading(false);
      }, 300);
      
      // Check if recipe is in favorites
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
      setIsFavorite(favorites.includes(id));
    }
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    if (isFavorite && recipe) {
      const updatedFavorites = favorites.filter((favId: string) => favId !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      
      toast({
        title: "Removed from Favorites",
        description: `${recipe.name} has been removed from your favorites.`,
        duration: 3000,
      });
    } else if (recipe) {
      favorites.push(id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
      setIsFavorite(true);
      
      toast({
        title: "Added to Favorites",
        description: `${recipe.name} has been added to your favorites.`,
        duration: 3000,
      });
    }
  };

  const shareRecipe = async () => {
    if (navigator.share && recipe) {
      try {
        await navigator.share({
          title: recipe.name,
          text: `Check out this recipe: ${recipe.name}`,
          url: window.location.href,
        });
        
        toast({
          title: "Recipe Shared",
          description: "Recipe link has been shared successfully.",
          duration: 3000,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href);
      
      toast({
        title: "Link Copied",
        description: "Recipe link has been copied to clipboard.",
        duration: 3000,
      });
    }
  };

  const toggleVoiceGuidance = () => {
    setIsPlaying(!isPlaying);
    
    // Voice guidance state is controlled in the VoiceGuidance component,
    // but we keep this state for the UI button
    toast({
      title: isPlaying ? "Voice Guidance Paused" : "Voice Guidance Started",
      description: isPlaying 
        ? "Voice guidance has been paused." 
        : "I'll guide you through each step of the recipe automatically.",
      duration: 3000,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>
          <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
          <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-800 rounded mb-8"></div>
          <div className="w-full h-80 bg-gray-200 dark:bg-gray-800 rounded-xl mb-8"></div>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold">Recipe Not Found</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">The recipe you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to recipes</span>
        </button>
        
        {/* Recipe header with gradient background */}
        <div className="mb-8 p-6 rounded-xl" style={{
          background: 'linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)',
          color: '#333'
        }}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{recipe.name}</h1>
          <p className="text-lg mb-4">{recipe.description}</p>
          
          {/* Recipe meta info */}
          <div className="flex flex-wrap gap-4 text-sm">
            {recipe.prepTime && recipe.cookTime && (
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>Prep: {recipe.prepTime} | Cook: {recipe.cookTime}</span>
              </div>
            )}
            
            {recipe.servings && (
              <div className="flex items-center">
                <Users size={16} className="mr-1" />
                <span>Serves {recipe.servings}</span>
              </div>
            )}
            
            {recipe.calories && (
              <div className="flex items-center">
                <ChefHat size={16} className="mr-1" />
                <span>{recipe.calories} calories per serving</span>
              </div>
            )}
            
            {recipe.difficulty && (
              <div className="flex items-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium
                  ${recipe.difficulty === 'Easy' ? 'bg-green-500 text-white' : 
                    recipe.difficulty === 'Medium' ? 'bg-yellow-500 text-white' : 
                    'bg-red-500 text-white'}`}
                >
                  {recipe.difficulty}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Recipe image and action buttons */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">
            <img
              src={recipe.imageUrl}
              alt={recipe.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loops
                target.src = 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
              }}
            />
          </div>
          
          <div className="flex flex-col justify-between">
            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: `hsl(${(index * 25) % 360}, 70%, 85%)`,
                      color: `hsl(${(index * 25) % 360}, 70%, 25%)`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="space-y-4">
              <button
                onClick={toggleFavorite}
                className={`w-full px-4 py-3 rounded-lg flex items-center justify-center transition-colors ${
                  isFavorite 
                    ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300' 
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Heart size={18} className="mr-2" fill={isFavorite ? "currentColor" : "none"} />
                <span>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
              </button>
              
              <button
                onClick={shareRecipe}
                className="w-full px-4 py-3 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Share2 size={18} className="mr-2" />
                <span>Share Recipe</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* AI-powered recipe features */}
        <RecipeAiFeatures recipe={recipe} />
        
        {/* Recipe content tabs */}
        <div className="mb-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('ingredients')}
              className={`pb-4 text-sm font-medium relative ${
                activeTab === 'ingredients'
                  ? 'text-primary'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Ingredients
              {activeTab === 'ingredients' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('instructions')}
              className={`pb-4 text-sm font-medium relative ${
                activeTab === 'instructions'
                  ? 'text-primary'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Instructions
              {activeTab === 'instructions' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          </div>
        </div>
        
        {/* Tab content */}
        <div className="mb-12 animate-fade-in">
          {activeTab === 'ingredients' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'instructions' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Instructions</h2>
                <button
                  onClick={toggleVoiceGuidance}
                  className="flex items-center px-3 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  {isPlaying ? <Pause size={16} className="mr-2" /> : <Play size={16} className="mr-2" />}
                  <Volume2 size={16} className="mr-1" />
                  <span>{isPlaying ? 'Pause Guidance' : 'Start Guidance'}</span>
                </button>
              </div>
              
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center mr-4"
                      style={{
                        background: `linear-gradient(90deg, hsla(${(index * 30) % 360}, 70%, 50%, 1) 0%, hsla(${(index * 30 + 20) % 360}, 70%, 60%, 1) 100%)`
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <p>{instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
      
      {/* Voice guidance component */}
      <VoiceGuidance 
        instructions={recipe.instructions} 
        title={recipe.name}
      />
    </>
  );
};

export default Recipe;
