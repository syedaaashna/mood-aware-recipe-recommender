
import React, { useState } from 'react';
import { Brain, ChevronDown, ChevronUp, Lightbulb, Utensils, ListPlus, Sparkles, Flame } from 'lucide-react';
import { Recipe, getSimilarRecipes } from '@/utils/moodRecipeData';
import { Link } from 'react-router-dom';

interface RecipeAiFeaturesProps {
  recipe: Recipe;
}

const RecipeAiFeatures = ({ recipe }: RecipeAiFeaturesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const similarRecipes = getSimilarRecipes(recipe.id, 3);

  // Helper function to get appropriate image URL with fallbacks
  const getImageUrl = (recipeItem: Recipe, smallSize = false) => {
    // Recipe-specific image mappings with high-quality, reliable images
    const recipeSpecificImages: Record<string, string> = {
      'classic-pizza': 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
      'chocolate-cake': 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg',
      'spicy-noodles': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
      'chicken-stir-fry': 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg',
      'berry-smoothie': 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg',
      'lavender-tea': 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg',
      'mushroom-risotto': 'https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg',
      'gingerbread-cookies': 'https://images.pexels.com/photos/6341984/pexels-photo-6341984.jpeg',
      'apple-pie': 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg',
      'sushi-rolls': 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
      'french-toast': 'https://images.pexels.com/photos/7170323/pexels-photo-7170323.jpeg',
      'chicken-curry': 'https://images.pexels.com/photos/6645965/pexels-photo-6645965.jpeg',
      'butter-chicken': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
      'malai-kofta': 'https://images.pexels.com/photos/12385193/pexels-photo-12385193.jpeg',
      'shahi-paneer': 'https://images.pexels.com/photos/6940996/pexels-photo-6940996.jpeg',
      'tandoori-raan': 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg',
      'masala-dosa': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg'
    };
    
    // Check if we have a recipe-specific image
    if (recipeItem.id in recipeSpecificImages) {
      const baseUrl = recipeSpecificImages[recipeItem.id];
      const dimensions = smallSize ? 'w=400&h=200' : 'w=600&h=400';
      return `${baseUrl}?auto=compress&cs=tinysrgb&${dimensions}&q=80`;
    }
    
    // Updated category images with better quality selections
    const categoryImages: Record<string, string> = {
      'pasta': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
      'curry': 'https://images.pexels.com/photos/6645965/pexels-photo-6645965.jpeg',
      'indian': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
      'breakfast': 'https://images.pexels.com/photos/7170323/pexels-photo-7170323.jpeg',
      'pancake': 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
      'cake': 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg',
      'dessert': 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
      'soup': 'https://images.pexels.com/photos/5409035/pexels-photo-5409035.jpeg',
      'salad': 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
      'pizza': 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
      'smoothie': 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg',
      'chicken': 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg',
      'vegetarian': 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
      'south indian': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
      'dosa': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
      'noodles': 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
      'stir-fry': 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg',
      'cookies': 'https://images.pexels.com/photos/6341984/pexels-photo-6341984.jpeg',
      'pie': 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg',
      'tea': 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg',
      'risotto': 'https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg',
      'sushi': 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
      'north indian': 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
      'paneer': 'https://images.pexels.com/photos/6940996/pexels-photo-6940996.jpeg',
      'lamb': 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg',
      'biryani': 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg',
      'lassi': 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg',
      'samosa': 'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg',
      'sweet': 'https://images.pexels.com/photos/14485899/pexels-photo-14485899.jpeg',
      'palak': 'https://images.pexels.com/photos/6013452/pexels-photo-6013452.jpeg'
    };
    
    // Search for matching category in recipe tags
    for (const tag of recipeItem.tags) {
      const lowerTag = tag.toLowerCase();
      for (const [category, url] of Object.entries(categoryImages)) {
        if (lowerTag.includes(category) || category.includes(lowerTag)) {
          const dimensions = smallSize ? 'w=400&h=200' : 'w=600&h=400';
          return `${url}?auto=compress&cs=tinysrgb&${dimensions}&q=80`;
        }
      }
    }
    
    // Default fallback image
    return `https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=${smallSize ? '400&h=200' : '600&h=400'}&q=80`;
  };

  return (
    <div className="my-8 rounded-xl overflow-hidden border border-primary/20">
      <div 
        className="p-4 flex items-center justify-between cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background: 'linear-gradient(90deg, hsla(259, 84%, 78%, 1) 0%, hsla(206, 67%, 75%, 1) 100%)',
        }}
      >
        <div className="flex items-center">
          <Brain className="w-6 h-6 mr-3 text-white" />
          <h3 className="text-lg font-bold text-white">AI-Powered Recipe Insights</h3>
        </div>
        <div className="flex items-center">
          <span className="text-white text-sm mr-3 bg-white/20 px-2 py-1 rounded-full">
            <Sparkles className="w-3 h-3 inline mr-1" /> AI Enhanced
          </span>
          <button className="text-white">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-6 bg-gray-50 dark:bg-gray-900">
          {/* AI Badge */}
          <div className="mb-4 flex justify-center">
            <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center">
              <Flame className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-300" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">AI-Analyzed Recipe</span>
            </div>
          </div>
          
          {/* AI Recipe Suggestion */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
              <h4 className="text-base font-medium">Chef's AI Suggestion</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 pl-7 bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
              {recipe.aiSuggestion || "Our AI chef doesn't have any specific suggestions for this recipe."}
            </p>
          </div>
          
          {/* Nutrition Analysis */}
          {recipe.nutritionAnalysis && (
            <div className="mb-6">
              <div className="flex items-start mb-3">
                <Utensils className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                <h4 className="text-base font-medium">Nutrition Insight</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 pl-7 bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
                {recipe.nutritionAnalysis}
              </p>
            </div>
          )}
          
          {/* Cooking Tips */}
          {recipe.cookingTips && recipe.cookingTips.length > 0 && (
            <div className="mb-6">
              <div className="flex items-start mb-3">
                <ListPlus className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-1" />
                <h4 className="text-base font-medium">AI Cooking Tips</h4>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 pl-7 space-y-2 bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
                {recipe.cookingTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Similar Recipes */}
          {similarRecipes.length > 0 && (
            <div>
              <div className="flex items-center mb-3">
                <Brain className="w-5 h-5 mr-2 text-purple-500" />
                <h4 className="text-base font-medium">AI-Recommended Similar Recipes</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-7">
                {similarRecipes.map(similarRecipe => (
                  <Link 
                    key={similarRecipe.id} 
                    to={`/recipe/${similarRecipe.id}`}
                    className="block p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="h-24 rounded-md overflow-hidden mb-2">
                      <img 
                        src={getImageUrl(similarRecipe, true)} 
                        alt={similarRecipe.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Provide category-specific fallback images on error
                          let fallbackUrl = 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=200';
                          
                          if (similarRecipe.tags.includes('dessert')) {
                            fallbackUrl = 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&h=200';
                          } else if (similarRecipe.tags.includes('indian')) {
                            fallbackUrl = 'https://images.unsplash.com/photo-1604952564555-13c872c0a364?auto=format&fit=crop&w=400&h=200';
                          } else if (similarRecipe.tags.includes('breakfast')) {
                            fallbackUrl = 'https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?auto=format&fit=crop&w=400&h=200';
                          }
                          
                          (e.target as HTMLImageElement).src = fallbackUrl;
                        }}
                      />
                    </div>
                    <h5 className="font-medium text-sm">{similarRecipe.name}</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {similarRecipe.tags.slice(0, 2).join(', ')}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeAiFeatures;
