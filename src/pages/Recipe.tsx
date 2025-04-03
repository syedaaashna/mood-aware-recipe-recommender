
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat, Heart, Share2 } from 'lucide-react';
import { Recipe as RecipeType, getRecipeById } from '@/utils/moodRecipeData';
import RecipeAiFeatures from '@/components/ui/RecipeAiFeatures';
import VoiceGuidance from '@/components/ui/VoiceGuidance';
import { useToast } from "@/hooks/use-toast";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const [imageError, setImageError] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const { toast } = useToast();

  // Get recipe image URL based on recipe name
  const getRecipeImageUrl = (recipeName: string) => {
    // Clean up recipe name to use in search query
    const searchQuery = recipeName.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '+');
    return `https://source.unsplash.com/featured/?${searchQuery},food,dish,recipe&fit=crop&w=1200&h=600`;
  };

  // Get a backup image if the first one fails
  const getBackupImageUrl = (recipeName: string) => {
    const searchQuery = recipeName.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '+');
    // Adding random parameters to prevent caching and get a different image
    return `https://source.unsplash.com/random/?${searchQuery},food,cooking&fit=crop&w=1200&h=600&random=${Math.random()}`;
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const foundRecipe = getRecipeById(id);
      
      setTimeout(() => {
        if (foundRecipe) {
          setRecipe(foundRecipe);
          // Set a default placeholder while image is loading
          setImageUrl("https://placehold.co/1200x600/f5f5f5/aaaaaa?text=Loading+Recipe+Image...");
          
          // Then set the real image URL with a slight delay to ensure UI is responsive
          setTimeout(() => {
            setImageUrl(getRecipeImageUrl(foundRecipe.name));
          }, 100);
          
          setImageError(false); // Reset image error state when recipe changes
        } else {
          setRecipe(null);
        }
        setIsLoading(false);
      }, 300);
      
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
      setIsFavorite(favorites.includes(id));
    }
  }, [id]);

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      if (recipe) {
        // Try a backup image
        setImageUrl(getBackupImageUrl(recipe.name));
      } else {
        // Fallback placeholder if recipe is not loaded yet
        setImageUrl("https://placehold.co/1200x600/f5f5f5/555555?text=Recipe+Image+Not+Available");
      }
    } else {
      // If backup also fails, use a static placeholder
      setImageUrl("https://placehold.co/1200x600/f0f0f0/555555?text=Recipe+Image+Not+Available");
    }
  };

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
      navigator.clipboard.writeText(window.location.href);
      
      toast({
        title: "Link Copied",
        description: "Recipe link has been copied to clipboard.",
        duration: 3000,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>
          <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
          <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-800 rounded mb-8"></div>
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
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to recipes</span>
        </button>

        {/* Recipe image with background fallback */}
        <div className="mb-8 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
          <img 
            src={imageUrl} 
            alt={recipe.name}
            className="w-full h-64 sm:h-80 object-cover"
            onError={handleImageError}
          />
        </div>
        
        <div className="mb-8 p-6 rounded-xl" style={{
          background: 'linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)',
          color: '#333'
        }}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{recipe.name}</h1>
          <p className="text-lg mb-4">{recipe.description}</p>
          
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
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2 mb-6">
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
          
          <RecipeAiFeatures recipe={recipe} />
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1 flex flex-col justify-between">
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
          
          <div className="md:col-span-3">
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
        </div>
      </div>
      
      {/* Voice guidance component - Now moved to a fixed position */}
      <VoiceGuidance recipe={recipe} />
    </>
  );
};

export default Recipe;
