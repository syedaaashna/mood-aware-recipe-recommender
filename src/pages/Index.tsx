
import { useState, useEffect } from 'react';
import MoodInput from '@/components/ui/MoodInput';
import RecipeCard from '@/components/ui/RecipeCard';
import ChatBot from '@/components/ui/ChatBot';
import { Mood, Recipe, getRecipesByMood, searchRecipes } from '@/utils/moodRecipeData';
import { useToast } from "@/hooks/use-toast";
import { Search } from 'lucide-react';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  // Get favorite recipes from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    setFavoriteRecipes(savedFavorites);
  }, []);

  // Get recipes based on selected mood
  useEffect(() => {
    if (selectedMood) {
      setSearchTerm('');
      setIsSearching(false);
      const moodRecipes = getRecipesByMood(selectedMood.id);
      setRecipes(moodRecipes);
    } else if (!isSearching) {
      // Show some default recipes if no mood is selected
      setRecipes([]);
    }
  }, [selectedMood, isSearching]);

  const handleMoodSelect = (mood: Mood | null) => {
    setSelectedMood(mood);
    
    if (mood) {
      toast({
        title: `${mood.name} Mood Selected`,
        description: `Finding recipes that match your ${mood.name.toLowerCase()} mood...`,
        duration: 3000,
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() !== '') {
      setIsSearching(true);
      setSelectedMood(null);
      const searchResults = searchRecipes(searchTerm);
      setRecipes(searchResults);
      
      toast({
        title: "Search Results",
        description: `Found ${searchResults.length} recipes matching "${searchTerm}"`,
        duration: 3000,
      });
    }
  };

  const handleToggleFavorite = (recipe: Recipe) => {
    const isFavorite = favoriteRecipes.includes(recipe.id);
    let updatedFavorites: string[];
    
    if (isFavorite) {
      updatedFavorites = favoriteRecipes.filter(id => id !== recipe.id);
    } else {
      updatedFavorites = [...favoriteRecipes, recipe.id];
    }
    
    setFavoriteRecipes(updatedFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-blue-100/50 dark:from-gray-900/95 dark:to-gray-900/80 -z-10"></div>
        
        {/* Background circles - decorative elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium">
              AI-Powered Recipe Recommendations
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Find Recipes for Your <span className="text-gradient">Mood</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover personalized recipes based on how you're feeling right now, with step-by-step voice guidance to help you cook.
            </p>
            
            {/* Mood input component */}
            <div className="max-w-md mx-auto">
              <MoodInput onMoodSelect={handleMoodSelect} selectedMood={selectedMood} />
            </div>
          </div>
          
          {/* Search form */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto mt-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Or search recipes by name, ingredient, or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Recipes section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {selectedMood && recipes.length > 0 && (
          <h2 className="text-2xl font-bold mb-8">
            Recipes for your <span className="text-primary">{selectedMood.name}</span> mood
          </h2>
        )}
        
        {isSearching && (
          <h2 className="text-2xl font-bold mb-8">
            Search results for "<span className="text-primary">{searchTerm}</span>"
          </h2>
        )}
        
        {selectedMood && recipes.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No recipes found for {selectedMood.name} mood</h3>
            <p className="text-gray-600 dark:text-gray-300">Try selecting a different mood or search for recipes</p>
          </div>
        )}
        
        {isSearching && recipes.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No recipes found for "{searchTerm}"</h3>
            <p className="text-gray-600 dark:text-gray-300">Try a different search term or select a mood</p>
          </div>
        )}
        
        {!selectedMood && !isSearching && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">Select a mood or search for recipes</h3>
            <p className="text-gray-600 dark:text-gray-300">We'll help you find the perfect dish for your current state of mind</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favoriteRecipes.includes(recipe.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </section>
      
      {/* Chatbot component */}
      <ChatBot currentMood={selectedMood?.id || null} />
    </div>
  );
};

export default Index;
