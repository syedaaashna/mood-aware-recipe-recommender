import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, ChefHat, Bookmark, Share2, ImageOff } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Recipe } from '@/utils/moodRecipeData';
import { getRecipeImagePath, getFallbackImage } from '@/utils/recipeImageHelper';
import { useToast } from "@/hooks/use-toast";
import VoiceGuidance from './VoiceGuidance';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (recipe: Recipe) => void;
}

const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }: RecipeCardProps) => {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [imageRetries, setImageRetries] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    if (recipe) {
      setImageError(false);
      setImageRetries(0);
      
      const primaryImageSrc = getRecipeImagePath(recipe.id);
      setImageSrc(primaryImageSrc);
      
      const img = new Image();
      img.onload = () => {
        setImageError(false);
      };
      img.onerror = () => {
        console.log(`Primary image failed for ${recipe.id}, trying fallback:`, getFallbackImage(recipe.id));
        setImageSrc(getFallbackImage(recipe.id));
      };
      img.src = primaryImageSrc;
    }
  }, [recipe]);

  const handleCopyLink = () => {
    const recipeUrl = `${window.location.origin}/recipe/${recipe.id}`;
    navigator.clipboard.writeText(recipeUrl);
    setIsShareDialogOpen(false);
    toast({
      title: "Link Copied",
      description: "Recipe link has been copied to clipboard",
      duration: 3000,
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.name,
          text: `Check out this ${recipe.name} recipe!`,
          url: `${window.location.origin}/recipe/${recipe.id}`,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      setIsShareDialogOpen(true);
    }
  };

  const handleImageError = () => {
    if (imageRetries >= 2) {
      setImageError(true);
      return;
    }
    
    setImageRetries(prevRetries => prevRetries + 1);
    
    if (imageRetries === 0) {
      const fallbackImg = getFallbackImage(recipe.id);
      console.log(`Image error for ${recipe.id}, trying category fallback:`, fallbackImg);
      setImageSrc(fallbackImg);
    } 
    else if (imageRetries === 1) {
      console.log(`Fallback also failed for ${recipe.id}, using reliable default`);
      setImageSrc('https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&auto=format&fit=crop');
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500">
            <ImageOff className="h-8 w-8 mb-2" />
            <span className="text-sm">{recipe.name}</span>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={recipe.name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
        )}
        
        <button
          onClick={() => onToggleFavorite(recipe)}
          className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-sm hover:bg-white dark:hover:bg-gray-700 transition-colors"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500 dark:text-gray-300'}`}
          />
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
          <Badge
            variant="outline"
            className="bg-primary/90 hover:bg-primary text-white border-none text-xs"
          >
            {recipe.difficulty}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 pb-0 flex-grow">
        <h3 className="font-semibold text-xl mb-2 line-clamp-2">{recipe.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-3 text-sm line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {recipe.prepTime} + {recipe.cookTime}
            </span>
          </div>
          <div className="flex items-center">
            <ChefHat className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {recipe.calories} cal
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {recipe.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {recipe.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{recipe.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-2 flex justify-between">
        <Button
          size="sm"
          variant="outline"
          className="flex items-center gap-1"
          asChild
        >
          <a href={`/recipe/${recipe.id}`}>
            <span>View Recipe</span>
          </a>
        </Button>
        
        <div className="flex gap-1">
          <VoiceGuidance recipe={recipe} />
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      
      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share this recipe</DialogTitle>
            <DialogDescription>
              Copy the link to share this {recipe.name} recipe with friends
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <input
                className="flex-1 px-3 py-2 border rounded-l-md dark:bg-gray-800 dark:border-gray-700"
                type="text"
                value={`${window.location.origin}/recipe/${recipe.id}`}
                readOnly
              />
              <Button
                className="rounded-l-none"
                onClick={handleCopyLink}
              >
                Copy
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default RecipeCard;
