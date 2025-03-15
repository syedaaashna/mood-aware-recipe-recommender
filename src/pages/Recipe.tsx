
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat, Heart, Share2 } from 'lucide-react';
import { Recipe as RecipeType, getRecipeById } from '@/utils/moodRecipeData';
import VoiceGuidance from '@/components/ui/VoiceGuidance';
import { useToast } from "@/components/ui/toast";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const foundRecipe = getRecipeById(id);
      
      // Simulate loading for smooth transitions
      setTimeout(() => {
        setRecipe(foundRecipe || null);
        setIsLoading(false);
      }, 500);
      
      // Check if recipe is in favorites
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
      setIsFavorite(favorites.some((favId: string) => favId === id));
    }
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter((favId: string) => favId !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      
      toast({
        title: "Removed from Favorites",
        description: `${recipe?.title} has been removed from your favorites.`,
        duration: 3000,
      });
    } else {
      favorites.push(id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
      setIsFavorite(true);
      
      toast({
        title: "Added to Favorites",
        description: `${recipe?.title} has been added to your favorites.`,
        duration: 3000,
      });
    }
  };

  const shareRecipe = async () => {
    if (navigator.share && recipe) {
      try {
        await navigator.share({
          title: recipe.title,
          text: `Check out this recipe: ${recipe.title}`,
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
        
        {/* Recipe header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{recipe.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{recipe.description}</p>
          
          {/* Recipe meta info */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>Prep: {recipe.prepTime} | Cook: {recipe.cookTime}</span>
            </div>
            
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>Serves {recipe.servings}</span>
            </div>
            
            <div className="flex items-center">
              <ChefHat size={16} className="mr-1" />
              <span>{recipe.calories} calories per serving</span>
            </div>
            
            <div className="flex items-center">
              <span className={`px-2 py-1 rounded-full text-xs font-medium
                ${recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 
                  recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' : 
                  'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'}`}
              >
                {recipe.difficulty}
              </span>
            </div>
          </div>
        </div>
        
        {/* Recipe image and action buttons */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={`${recipe.imageUrl}?auto=format&fit=crop&w=800&h=600`}
              alt={recipe.title}
              className="w-full h-full object-cover"
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
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
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
              <h2 className="text-xl font-bold mb-4">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4">
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
        title={recipe.title}
      />
    </>
  );
};

export default Recipe;
