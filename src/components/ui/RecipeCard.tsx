
import { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, ChefHat, Bookmark, Share2, ImageOff } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Recipe } from '@/types/recipe';
import { useToast } from "@/hooks/use-toast";
import VoiceGuidance from './VoiceGuidance';

// Reliable fallback image for each cuisine type
const CUISINE_FALLBACK_IMAGES: Record<string, string> = {
  'italian': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
  'french': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80',
  'indian': 'https://images.unsplash.com/photo-1585937421612-70a008356cf4?w=800&auto=format&fit=crop&q=80',
  'chinese': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80',
  'japanese': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop&q=80',
  'mexican': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80',
  'american': 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80',
  'korean': 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&auto=format&fit=crop&q=80',
  'thai': 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop&q=80',
  'spanish': 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&auto=format&fit=crop&q=80',
  'british': 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=800&auto=format&fit=crop&q=80',
  'vietnamese': 'https://images.unsplash.com/photo-1576577445504-6af96477db52?w=800&auto=format&fit=crop&q=80',
  'middle eastern': 'https://images.unsplash.com/photo-1540914124281-342587941389?w=800&auto=format&fit=crop&q=80',
  'greek': 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&auto=format&fit=crop&q=80',
  'default': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80'
};

// Default images by recipe type
const RECIPE_TYPE_IMAGES: Record<string, string> = {
  'soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  'salad': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
  'pasta': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80',
  'dessert': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=80',
  'drink': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
  'breakfast': 'https://images.unsplash.com/photo-1533089860892-a9b969ced0ac?w=800&auto=format&fit=crop&q=80',
  'sandwich': 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=800&auto=format&fit=crop&q=80',
  'curry': 'https://images.unsplash.com/photo-1585937421612-70a008356cf4?w=800&auto=format&fit=crop&q=80',
  'rice': 'https://images.unsplash.com/photo-1596456716127-452b23f82652?w=800&auto=format&fit=crop&q=80',
  'stew': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80'
};

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (recipe: Recipe) => void;
}

const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }: RecipeCardProps) => {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { toast } = useToast();

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

  // Get the best image URL with fallbacks
  const getImageUrl = () => {
    // First try the recipe's own image
    if (recipe.image && !imageError) {
      return recipe.image;
    }

    // Try to determine cuisine from tags
    const cuisineTags = recipe.tags.filter(tag => 
      Object.keys(CUISINE_FALLBACK_IMAGES).includes(tag.toLowerCase())
    );
    
    if (cuisineTags.length > 0) {
      return CUISINE_FALLBACK_IMAGES[cuisineTags[0].toLowerCase()] || CUISINE_FALLBACK_IMAGES['default'];
    }
    
    // Try to determine recipe type from tags
    const typeTags = recipe.tags.filter(tag => 
      Object.keys(RECIPE_TYPE_IMAGES).includes(tag.toLowerCase())
    );
    
    if (typeTags.length > 0) {
      return RECIPE_TYPE_IMAGES[typeTags[0].toLowerCase()] || CUISINE_FALLBACK_IMAGES['default'];
    }
    
    // Default fallback
    return CUISINE_FALLBACK_IMAGES['default'];
  };

  const imageUrl = getImageUrl();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={recipe.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 p-4 text-center">
            <ImageOff className="h-10 w-10 mb-2" />
            <p className="text-sm">No image available</p>
          </div>
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
