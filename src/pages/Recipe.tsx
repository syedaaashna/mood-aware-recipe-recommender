
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat, Heart, Share2, Volume2, Play, Pause } from 'lucide-react';
import { Recipe as RecipeType, getRecipeById } from '@/utils/moodRecipeData';
import VoiceGuidance from '@/components/ui/VoiceGuidance';
import RecipeAiFeatures from '@/components/ui/RecipeAiFeatures';
import { useToast } from "@/hooks/use-toast";

const getValidImageUrl = (recipe: RecipeType): string => {
  const recipeSpecificImages: Record<string, string> = {
    'classic-pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1350&q=80',
    'chocolate-cake': 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=1350&q=80',
    'spicy-noodles': 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1350&q=80',
    'chicken-stir-fry': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1350&q=80',
    'berry-smoothie': 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=1350&q=80',
    'lavender-tea': 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1350&q=80',
    'mushroom-risotto': 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1350&q=80',
    'gingerbread-cookies': 'https://images.unsplash.com/photo-1607114910421-a7c85fd77732?auto=format&fit=crop&w=1350&q=80',
    'apple-pie': 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=1350&q=80',
    'sushi-rolls': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1350&q=80',
    'french-toast': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1350&q=80',
    'chicken-curry': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1350&q=80',
    'butter-chicken': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1350&q=80',
    'malai-kofta': 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1350&q=80',
    'shahi-paneer': 'https://images.unsplash.com/photo-1593001872095-7d5b3868dd20?auto=format&fit=crop&w=1350&q=80',
    'tandoori-raan': 'https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?auto=format&fit=crop&w=1350&q=80',
    'masala-dosa': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1350&q=80',
    'aloo-paratha': 'https://images.unsplash.com/photo-1631292784640-848cf71c0dce?auto=format&fit=crop&w=1350&q=80',
    'biryani': 'https://images.unsplash.com/photo-1633945274405-b6c8069adde0?auto=format&fit=crop&w=1350&q=80',
    'coconut-curry': 'https://images.unsplash.com/photo-1631292784640-848cf71c0dce?auto=format&fit=crop&w=1350&q=80',
    'matcha-smoothie': 'https://images.unsplash.com/photo-1638176066298-9eb18712d843?auto=format&fit=crop&w=1350&q=80',
    'mango-lassi': 'https://images.unsplash.com/photo-1626200925618-cccc3d96d2dd?auto=format&fit=crop&w=1350&q=80',
    'samosas': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1350&q=80',
    'gulab-jamun': 'https://images.unsplash.com/photo-1673700294252-27790468a6c4?auto=format&fit=crop&w=1350&q=80',
    'palak-paneer': 'https://images.unsplash.com/photo-1637468876897-28c3328fe251?auto=format&fit=crop&w=1350&q=80'
  };

  if (recipe.id in recipeSpecificImages) {
    return recipeSpecificImages[recipe.id];
  }

  const categoryImages: Record<string, string> = {
    'pasta': 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1350&q=80',
    'curry': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1350&q=80',
    'indian': 'https://images.unsplash.com/photo-1585937421612-70a008356c36?auto=format&fit=crop&w=1350&q=80',
    'breakfast': 'https://images.unsplash.com/photo-1533089860892-a7c6f3a1aa85?auto=format&fit=crop&w=1350&q=80',
    'pancake': 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1350&q=80',
    'cake': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1350&q=80',
    'dessert': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1350&q=80',
    'soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1350&q=80',
    'salad': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1350&q=80',
    'pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1350&q=80',
    'smoothie': 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=1350&q=80',
    'chicken': 'https://images.unsplash.com/photo-1598532213298-304a96a11b8e?auto=format&fit=crop&w=1350&q=80',
    'vegetarian': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1350&q=80',
    'south indian': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1350&q=80',
    'dosa': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1350&q=80',
    'noodles': 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1350&q=80',
    'stir-fry': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1350&q=80',
    'cookies': 'https://images.unsplash.com/photo-1607114910421-a7c85fd77732?auto=format&fit=crop&w=1350&q=80',
    'pie': 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=1350&q=80',
    'tea': 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1350&q=80',
    'risotto': 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1350&q=80',
    'sushi': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1350&q=80',
    'north indian': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1350&q=80',
    'paneer': 'https://images.unsplash.com/photo-1593001872095-7d5b3868dd20?auto=format&fit=crop&w=1350&q=80',
    'lamb': 'https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?auto=format&fit=crop&w=1350&q=80',
    'biryani': 'https://images.unsplash.com/photo-1633945274405-b6c8069adde0?auto=format&fit=crop&w=1350&q=80',
    'lassi': 'https://images.unsplash.com/photo-1626200925618-cccc3d96d2dd?auto=format&fit=crop&w=1350&q=80',
    'samosa': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1350&q=80',
    'sweet': 'https://images.unsplash.com/photo-1673700294252-27790468a6c4?auto=format&fit=crop&w=1350&q=80',
    'palak': 'https://images.unsplash.com/photo-1637468876897-28c3328fe251?auto=format&fit=crop&w=1350&q=80'
  };

  for (const tag of recipe.tags) {
    const lowerTag = tag.toLowerCase();
    for (const [category, url] of Object.entries(categoryImages)) {
      if (lowerTag.includes(category) || category.includes(lowerTag)) {
        return url;
      }
    }
  }

  if (recipe.imageUrl && recipe.imageUrl.length > 10) {
    if (recipe.imageUrl.includes('unsplash.com')) {
      const baseUrl = recipe.imageUrl.split('?')[0];
      return `${baseUrl}?auto=format&fit=crop&w=1350&q=80`;
    }
    return recipe.imageUrl;
  }

  // Default image as a last resort
  return 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1350&q=80';
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
      
      setTimeout(() => {
        if (foundRecipe) {
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
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to recipes</span>
        </button>
        
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
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">
            <img
              src={recipe.imageUrl}
              alt={recipe.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
              }}
            />
          </div>
          
          <div className="flex flex-col justify-between">
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
        
        <RecipeAiFeatures recipe={recipe} />
        
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
      
      <VoiceGuidance 
        instructions={recipe.instructions} 
        title={recipe.name}
        manualControlled={false}
        externalPlayingState={isPlaying}
        onPlayingStateChange={setIsPlaying}
      />
    </>
  );
};

export default Recipe;
