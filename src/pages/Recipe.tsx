
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat, Heart, Share2, Volume2, Play, Pause } from 'lucide-react';
import { Recipe as RecipeType, getRecipeById } from '@/utils/moodRecipeData';
import VoiceGuidance from '@/components/ui/VoiceGuidance';
import RecipeAiFeatures from '@/components/ui/RecipeAiFeatures';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';

const getValidImageUrl = (recipe: RecipeType): string => {
  // Define recipe-specific image mappings with accurate, high-quality images
  const recipeSpecificImages: Record<string, string> = {
    'classic-pizza': 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chocolate-cake': 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'spicy-noodles': 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken-stir-fry': 'https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'berry-smoothie': 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'lavender-tea': 'https://images.pexels.com/photos/961361/pexels-photo-961361.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'mushroom-risotto': 'https://images.pexels.com/photos/5639021/pexels-photo-5639021.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'gingerbread-cookies': 'https://images.pexels.com/photos/14875196/pexels-photo-14875196.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'apple-pie': 'https://images.pexels.com/photos/4202392/pexels-photo-4202392.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'sushi-rolls': 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'french-toast': 'https://images.pexels.com/photos/8470041/pexels-photo-8470041.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken-curry': 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'butter-chicken': 'https://images.pexels.com/photos/7887920/pexels-photo-7887920.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'malai-kofta': 'https://images.pexels.com/photos/5409363/pexels-photo-5409363.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'shahi-paneer': 'https://images.pexels.com/photos/5410422/pexels-photo-5410422.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'tandoori-raan': 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'masala-dosa': 'https://images.pexels.com/photos/12737969/pexels-photo-12737969.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'aloo-paratha': 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'biryani': 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80', 
    'coconut-curry': 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'matcha-smoothie': 'https://images.pexels.com/photos/14835960/pexels-photo-14835960.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'mango-lassi': 'https://images.pexels.com/photos/14967506/pexels-photo-14967506.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'samosas': 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'gulab-jamun': 'https://images.pexels.com/photos/14900302/pexels-photo-14900302.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'palak-paneer': 'https://images.pexels.com/photos/14900377/pexels-photo-14900377.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'vegetable-stir-fry': 'https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'avocado-toast': 'https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'banana-pancakes': 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'greek-salad': 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'caprese-salad': 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'lemon-pasta': 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'tiramisu': 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken-sandwich': 'https://images.pexels.com/photos/2424832/pexels-photo-2424832.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pho-soup': 'https://images.pexels.com/photos/14967531/pexels-photo-14967531.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pasta-carbonara': 'https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'beef-tacos': 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pad-thai': 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'ramen': 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'caesar-salad': 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'spinach-quiche': 'https://images.pexels.com/photos/6072095/pexels-photo-6072095.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pancakes': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken-shawarma': 'https://images.pexels.com/photos/6002213/pexels-photo-6002213.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'fish-curry': 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'tomato-soup': 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'vegetable-curry': 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'falafel': 'https://images.pexels.com/photos/7651089/pexels-photo-7651089.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chole-bhature': 'https://images.pexels.com/photos/14900395/pexels-photo-14900395.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'dal-makhani': 'https://images.pexels.com/photos/7625181/pexels-photo-7625181.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'rajma-chawal': 'https://images.pexels.com/photos/12737651/pexels-photo-12737651.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chana-masala': 'https://images.pexels.com/photos/12737670/pexels-photo-12737670.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pav-bhaji': 'https://images.pexels.com/photos/20423768/pexels-photo-20423768/free-photo-of-pav-bhaji-served-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'jalebi': 'https://images.pexels.com/photos/15716785/pexels-photo-15716785/free-photo-of-jalebi-an-indian-sweet-dish.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'rasgulla': 'https://images.pexels.com/photos/14835769/pexels-photo-14835769.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'golgappa': 'https://images.pexels.com/photos/12737714/pexels-photo-12737714.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'kofta-curry': 'https://images.pexels.com/photos/16128492/pexels-photo-16128492/free-photo-of-kofta-curry-served-with-rice.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'saag-aloo': 'https://images.pexels.com/photos/6149435/pexels-photo-6149435.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'lamb-curry': 'https://images.pexels.com/photos/5409026/pexels-photo-5409026.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken-biryani': 'https://images.pexels.com/photos/7194467/pexels-photo-7194467.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'lamb-vindaloo': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'spicy-chicken-wings': 'https://images.pexels.com/photos/60616/fried-chicken-meal-fast-food-60616.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'peanut-butter-cookies': 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'oatmeal-cookies': 'https://images.pexels.com/photos/3776939/pexels-photo-3776939.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'homemade-burger': 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'grilled-cheese': 'https://images.pexels.com/photos/5409031/pexels-photo-5409031.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'vegetable-soup': 'https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80'
  };
  
  if (recipe.id in recipeSpecificImages) {
    return recipeSpecificImages[recipe.id];
  }

  // Category-based fallback images
  const categoryImages: Record<string, string> = {
    'pasta': 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'curry': 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'indian': 'https://images.pexels.com/photos/7194467/pexels-photo-7194467.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'breakfast': 'https://images.pexels.com/photos/3724354/pexels-photo-3724354.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pancake': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'cake': 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'dessert': 'https://images.pexels.com/photos/6123618/pexels-photo-6123618.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'soup': 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'salad': 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pizza': 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'smoothie': 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'chicken': 'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'vegetarian': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'south indian': 'https://images.pexels.com/photos/12737969/pexels-photo-12737969.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'dosa': 'https://images.pexels.com/photos/12737969/pexels-photo-12737969.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'noodles': 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'stir-fry': 'https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'cookies': 'https://images.pexels.com/photos/14875196/pexels-photo-14875196.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'pie': 'https://images.pexels.com/photos/4202392/pexels-photo-4202392.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'tea': 'https://images.pexels.com/photos/961361/pexels-photo-961361.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'risotto': 'https://images.pexels.com/photos/5639021/pexels-photo-5639021.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'sushi': 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'north indian': 'https://images.pexels.com/photos/7887920/pexels-photo-7887920.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'paneer': 'https://images.pexels.com/photos/5410422/pexels-photo-5410422.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'lamb': 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'biryani': 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'lassi': 'https://images.pexels.com/photos/14967506/pexels-photo-14967506.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'samosa': 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'sweet': 'https://images.pexels.com/photos/14900302/pexels-photo-14900302.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'palak': 'https://images.pexels.com/photos/14900377/pexels-photo-14900377.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'mexican': 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'thai': 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'japanese': 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'middle eastern': 'https://images.pexels.com/photos/6002213/pexels-photo-6002213.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'fish': 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80',
    'vegetable': 'https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&w=1350&q=80'
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
          <div className="overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl h-80">
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
                <Button
                  onClick={toggleVoiceGuidance}
                  className="px-3 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors flex items-center space-x-2"
                  variant="default"
                  size="sm"
                >
                  {isPlaying ? <Pause size={16} className="mr-1" /> : <Play size={16} className="mr-1" />}
                  <Volume2 size={16} className="mr-1" />
                  <span>{isPlaying ? 'Pause Guidance' : 'Start Guidance'}</span>
                </Button>
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
