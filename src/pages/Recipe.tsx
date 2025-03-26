import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat, Heart, Share2, Volume2, Play, Pause } from 'lucide-react';
import { Recipe as RecipeType, getRecipeById } from '@/utils/moodRecipeData';
import VoiceGuidance from '@/components/ui/VoiceGuidance';
import RecipeAiFeatures from '@/components/ui/RecipeAiFeatures';
import { useToast } from "@/hooks/use-toast";

const getValidImageUrl = (recipe: RecipeType): string => {
  const recipeSpecificImages: Record<string, string> = {
    'classic-pizza': 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chocolate-cake': 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'spicy-noodles': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken-stir-fry': 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'berry-smoothie': 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'lavender-tea': 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'mushroom-risotto': 'https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'gingerbread-cookies': 'https://images.pexels.com/photos/6341984/pexels-photo-6341984.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'apple-pie': 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'sushi-rolls': 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'french-toast': 'https://images.pexels.com/photos/7170323/pexels-photo-7170323.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken-curry': 'https://images.pexels.com/photos/6645965/pexels-photo-6645965.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'butter-chicken': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'malai-kofta': 'https://images.pexels.com/photos/12385193/pexels-photo-12385193.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'shahi-paneer': 'https://images.pexels.com/photos/6940996/pexels-photo-6940996.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'tandoori-raan': 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'masala-dosa': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'aloo-paratha': 'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'biryani': 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80', 
    'coconut-curry': 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'matcha-smoothie': 'https://images.pexels.com/photos/4790618/pexels-photo-4790618.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'mango-lassi': 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'samosas': 'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'gulab-jamun': 'https://images.pexels.com/photos/14485899/pexels-photo-14485899.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'palak-paneer': 'https://images.pexels.com/photos/6013452/pexels-photo-6013452.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'vegetable-stir-fry': 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'avocado-toast': 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'banana-pancakes': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'greek-salad': 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'caprese-salad': 'https://images.pexels.com/photos/5945757/pexels-photo-5945757.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'lemon-pasta': 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'tiramisu': 'https://images.pexels.com/photos/6249515/pexels-photo-6249515.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken-sandwich': 'https://images.pexels.com/photos/5947104/pexels-photo-5947104.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pho-soup': 'https://images.pexels.com/photos/9332172/pexels-photo-9332172.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pasta-carbonara': 'https://images.pexels.com/photos/5175537/pexels-photo-5175537.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'beef-tacos': 'https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pad-thai': 'https://images.pexels.com/photos/9609861/pexels-photo-9609861.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'ramen': 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'caesar-salad': 'https://images.pexels.com/photos/6107598/pexels-photo-6107598.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'spinach-quiche': 'https://images.pexels.com/photos/6060931/pexels-photo-6060931.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pancakes': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken-shawarma': 'https://images.pexels.com/photos/8511837/pexels-photo-8511837.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'fish-curry': 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'tomato-soup': 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'vegetable-curry': 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'falafel': 'https://images.pexels.com/photos/5490876/pexels-photo-5490876.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chole-bhature': 'https://images.pexels.com/photos/18590402/pexels-photo-18590402/free-photo-of-chole-bhature.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'dal-makhani': 'https://images.pexels.com/photos/7625181/pexels-photo-7625181.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'rajma-chawal': 'https://images.pexels.com/photos/19299587/pexels-photo-19299587/free-photo-of-rajma-chawal-meal.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chana-masala': 'https://images.pexels.com/photos/3296580/pexels-photo-3296580.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80'
  };

  if (recipe.id in recipeSpecificImages) {
    return recipeSpecificImages[recipe.id];
  }

  const categoryImages: Record<string, string> = {
    'pasta': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'curry': 'https://images.pexels.com/photos/6645965/pexels-photo-6645965.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'indian': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'breakfast': 'https://images.pexels.com/photos/7170323/pexels-photo-7170323.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pancake': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'cake': 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'dessert': 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'soup': 'https://images.pexels.com/photos/5409035/pexels-photo-5409035.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'salad': 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pizza': 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'smoothie': 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken': 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'vegetarian': 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'south indian': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'dosa': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'noodles': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'stir-fry': 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'cookies': 'https://images.pexels.com/photos/6341984/pexels-photo-6341984.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pie': 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'tea': 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'risotto': 'https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'sushi': 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'north indian': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'paneer': 'https://images.pexels.com/photos/6940996/pexels-photo-6940996.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'lamb': 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'biryani': 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'lassi': 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'samosa': 'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'sweet': 'https://images.pexels.com/photos/14485899/pexels-photo-14485899.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'palak': 'https://images.pexels.com/photos/6013452/pexels-photo-6013452.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'mexican': 'https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'thai': 'https://images.pexels.com/photos/9609861/pexels-photo-9609861.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'japanese': 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'middle eastern': 'https://images.pexels.com/photos/8511837/pexels-photo-8511837.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'fish': 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'vegetable': 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80'
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
    if (recipe.imageUrl.includes('unsplash.com') || recipe.imageUrl.includes('pexels.com')) {
      const baseUrl = recipe.imageUrl.split('?')[0];
      return `${baseUrl}?auto=compress&cs=tinysrgb&w=1350&q=80`;
    }
    return recipe.imageUrl;
  }

  // Default image as a last resort
  return 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80';
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
                target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80';
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
                onClick={()=>{
                  if(isFavorite) {
                    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
                    const updatedFavorites = favorites.filter((favId: string) => favId !== id);
                    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
                    setIsFavorite(false);
                    
                    toast({
                      title: "Removed from Favorites",
                      description: `${recipe.name} has been removed from your favorites.`,
                      duration: 3000,
                    });
                  } else {
                    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
                    favorites.push(id);
                    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
                    setIsFavorite(true);
                    
                    toast({
                      title: "Added to Favorites",
                      description: `${recipe.name} has been added to your favorites.`,
                      duration: 3000,
                    });
                  }
                }}
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
                onClick={async () => {
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
                }}
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
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    
                    toast({
                      title: isPlaying ? "Voice Guidance Paused" : "Voice Guidance Started",
                      description: isPlaying 
                        ? "Voice guidance has been paused." 
                        : "I'll guide you through each step of the recipe automatically.",
                      duration: 3000,
                    });
                  }}
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
