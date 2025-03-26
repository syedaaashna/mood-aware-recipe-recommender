
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Heart, Sparkles, Award } from 'lucide-react';
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
      'classic-pizza': 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chocolate-cake': 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'spicy-noodles': 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chicken-stir-fry': 'https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'berry-smoothie': 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'lavender-tea': 'https://images.pexels.com/photos/961361/pexels-photo-961361.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'mushroom-risotto': 'https://images.pexels.com/photos/5639021/pexels-photo-5639021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'gingerbread-cookies': 'https://images.pexels.com/photos/14875196/pexels-photo-14875196.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'apple-pie': 'https://images.pexels.com/photos/4202392/pexels-photo-4202392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'sushi-rolls': 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'french-toast': 'https://images.pexels.com/photos/8470041/pexels-photo-8470041.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chicken-curry': 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'butter-chicken': 'https://images.pexels.com/photos/7887920/pexels-photo-7887920.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'malai-kofta': 'https://images.pexels.com/photos/5409363/pexels-photo-5409363.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'shahi-paneer': 'https://images.pexels.com/photos/5410422/pexels-photo-5410422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'tandoori-raan': 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'masala-dosa': 'https://images.pexels.com/photos/12737969/pexels-photo-12737969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'aloo-paratha': 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'biryani': 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', 
      'coconut-curry': 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'matcha-smoothie': 'https://images.pexels.com/photos/14835960/pexels-photo-14835960.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'mango-lassi': 'https://images.pexels.com/photos/14967506/pexels-photo-14967506.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'samosas': 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'gulab-jamun': 'https://images.pexels.com/photos/14900302/pexels-photo-14900302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'palak-paneer': 'https://images.pexels.com/photos/14900377/pexels-photo-14900377.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'vegetable-stir-fry': 'https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'avocado-toast': 'https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'banana-pancakes': 'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'greek-salad': 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'caprese-salad': 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'lemon-pasta': 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'tiramisu': 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chicken-sandwich': 'https://images.pexels.com/photos/2424832/pexels-photo-2424832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pho-soup': 'https://images.pexels.com/photos/14967531/pexels-photo-14967531.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pasta-carbonara': 'https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'beef-tacos': 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pad-thai': 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'ramen': 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'caesar-salad': 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'spinach-quiche': 'https://images.pexels.com/photos/6072095/pexels-photo-6072095.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pancakes': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chicken-shawarma': 'https://images.pexels.com/photos/6002213/pexels-photo-6002213.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'fish-curry': 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'tomato-soup': 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'vegetable-curry': 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'falafel': 'https://images.pexels.com/photos/7651089/pexels-photo-7651089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chole-bhature': 'https://images.pexels.com/photos/14900395/pexels-photo-14900395.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'dal-makhani': 'https://images.pexels.com/photos/7625181/pexels-photo-7625181.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'rajma-chawal': 'https://images.pexels.com/photos/12737651/pexels-photo-12737651.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chana-masala': 'https://images.pexels.com/photos/12737670/pexels-photo-12737670.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pav-bhaji': 'https://images.pexels.com/photos/20423768/pexels-photo-20423768/free-photo-of-pav-bhaji-served-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'jalebi': 'https://images.pexels.com/photos/15716785/pexels-photo-15716785/free-photo-of-jalebi-an-indian-sweet-dish.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'rasgulla': 'https://images.pexels.com/photos/14835769/pexels-photo-14835769.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'golgappa': 'https://images.pexels.com/photos/12737714/pexels-photo-12737714.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'kofta-curry': 'https://images.pexels.com/photos/16128492/pexels-photo-16128492/free-photo-of-kofta-curry-served-with-rice.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'saag-aloo': 'https://images.pexels.com/photos/6149435/pexels-photo-6149435.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'lamb-curry': 'https://images.pexels.com/photos/5409026/pexels-photo-5409026.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chicken-biryani': 'https://images.pexels.com/photos/7194467/pexels-photo-7194467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'lamb-vindaloo': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'spicy-chicken-wings': 'https://images.pexels.com/photos/60616/fried-chicken-meal-fast-food-60616.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'peanut-butter-cookies': 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'oatmeal-cookies': 'https://images.pexels.com/photos/3776939/pexels-photo-3776939.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'homemade-burger': 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'grilled-cheese': 'https://images.pexels.com/photos/5409031/pexels-photo-5409031.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'vegetable-soup': 'https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    };
    
    // First check if we have a recipe-specific image
    if (recipe.id in recipeSpecificImages) {
      return recipeSpecificImages[recipe.id];
    }
    
    // Fallback category images with reliable sources
    const categoryImages: Record<string, string> = {
      'pasta': 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'curry': 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'indian': 'https://images.pexels.com/photos/7194467/pexels-photo-7194467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'breakfast': 'https://images.pexels.com/photos/3724354/pexels-photo-3724354.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pancake': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'cake': 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'dessert': 'https://images.pexels.com/photos/6123618/pexels-photo-6123618.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'soup': 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'salad': 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pizza': 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'smoothie': 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'chicken': 'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'vegetarian': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'south indian': 'https://images.pexels.com/photos/12737969/pexels-photo-12737969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'dosa': 'https://images.pexels.com/photos/12737969/pexels-photo-12737969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'noodles': 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'stir-fry': 'https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'cookies': 'https://images.pexels.com/photos/14875196/pexels-photo-14875196.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'pie': 'https://images.pexels.com/photos/4202392/pexels-photo-4202392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'tea': 'https://images.pexels.com/photos/961361/pexels-photo-961361.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'risotto': 'https://images.pexels.com/photos/5639021/pexels-photo-5639021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'sushi': 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'north indian': 'https://images.pexels.com/photos/7887920/pexels-photo-7887920.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'paneer': 'https://images.pexels.com/photos/5410422/pexels-photo-5410422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'lamb': 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'biryani': 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'lassi': 'https://images.pexels.com/photos/14967506/pexels-photo-14967506.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'samosa': 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'sweet': 'https://images.pexels.com/photos/14900302/pexels-photo-14900302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'palak': 'https://images.pexels.com/photos/14900377/pexels-photo-14900377.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'mexican': 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'thai': 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'japanese': 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'middle eastern': 'https://images.pexels.com/photos/6002213/pexels-photo-6002213.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'fish': 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'vegetable': 'https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
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
              alt={recipe.title || recipe.name}
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
            <h3 className="font-bold text-lg mb-1 line-clamp-1">{recipe.title || recipe.name}</h3>
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
                <span className="font-medium">{Math.random() > 0.5 ? "Chef's pick!" : "Must try!"}</span>
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
