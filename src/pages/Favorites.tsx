
import { useState, useEffect } from 'react';
import RecipeCard from '@/components/ui/RecipeCard';
import { Recipe, getAllRecipes } from '@/utils/moodRecipeData';
import { useToast } from "@/hooks/use-toast";

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Get favorite recipe IDs from localStorage
    const savedFavoriteIds = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    if (savedFavoriteIds.length === 0) {
      return;
    }
    
    // Get all recipes and filter for favorites
    const allRecipes = getAllRecipes();
    const favorites = allRecipes.filter(recipe => savedFavoriteIds.includes(recipe.id));
    
    setFavoriteRecipes(favorites);
  }, []);

  const handleToggleFavorite = (recipe: Recipe) => {
    const savedFavoriteIds = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    
    let updatedFavoriteIds: string[];
    
    if (savedFavoriteIds.includes(recipe.id)) {
      // Remove from favorites
      updatedFavoriteIds = savedFavoriteIds.filter((id: string) => id !== recipe.id);
      
      // Update state by removing this recipe
      setFavoriteRecipes(favoriteRecipes.filter(r => r.id !== recipe.id));
      
      toast({
        title: "Removed from favorites",
        description: `${recipe.name} has been removed from your favorites`,
        duration: 3000,
      });
    } else {
      // This shouldn't typically happen on the favorites page
      updatedFavoriteIds = [...savedFavoriteIds, recipe.id];
      
      toast({
        title: "Added to favorites",
        description: `${recipe.name} has been added to your favorites`,
        duration: 3000,
      });
    }
    
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavoriteIds));
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Favorite Recipes</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          All your saved recipes in one place for easy access
        </p>
      </div>
      
      {favoriteRecipes.length === 0 ? (
        <div className="text-center py-16 px-4">
          <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-medium mb-2">No favorite recipes yet</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
            Start adding recipes to your favorites by clicking the heart icon on any recipe card
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={true}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
