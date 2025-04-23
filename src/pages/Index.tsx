
import { useState } from "react";
import { getRecipesByMood, searchRecipes } from "@/utils/recipeOperations";
import MoodInput from "@/components/ui/MoodInput";
import RecipeCard from "@/components/ui/RecipeCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { Mood } from "@/types/recipe";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchTouched, setSearchTouched] = useState(false);

  // When mood is selected, fetch by mood
  const handleMoodSelect = (mood: Mood | null) => {
    setSelectedMood(mood);
    setSearchValue(""); // Clear search bar
    setSearchTouched(false);
    if (mood) {
      const foundRecipes = getRecipesByMood(mood.id);
      setRecipes(foundRecipes);
    } else {
      setRecipes([]);
    }
  };

  // When search is submitted, fetch by search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTouched(true);
    setSelectedMood(null);
    if (searchValue.trim()) {
      const found = searchRecipes(searchValue.trim());
      setRecipes(found);
    } else {
      setRecipes([]);
    }
  };

  const showIntroCard = !(selectedMood || searchTouched);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "linear-gradient(to bottom, #e7f0fd 0%, #f9fbfe 100%)"
      }}
    >
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center px-2 pt-4 pb-16">
        <div className="max-w-4xl w-full mx-auto text-center pt-10">
          {/* AI-Powered Badge */}
          <div className="mb-5 flex justify-center">
            <span className="inline-block rounded-full bg-purple-100 text-purple-600 px-4 py-1 text-xs font-semibold">
              AI-Powered Recipe Recommendations
            </span>
          </div>
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-3 leading-tight">
            Find Recipes for Your{" "}
            <span className="text-[hsl(267,78%,58%)]">Mood</span>
          </h1>
          {/* Subtitle */}
          <div className="mb-10 mt-2 text-gray-600 text-lg font-normal max-w-2xl mx-auto">
            Discover personalized recipes based on how you're feeling right now, with step-by-step voice guidance to help you cook.
          </div>

          {/* Mood Input - standalone with no overlapping elements */}
          <div className="max-w-xl mx-auto w-full mb-6">
            <MoodInput 
              onMoodSelect={handleMoodSelect}
              selectedMood={selectedMood}
            />
          </div>

          {/* Search bar - separate from mood input */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto w-full flex gap-2 items-center mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Or search recipes by name, ingredient, or tag..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-10 w-full rounded-full bg-white text-base shadow border border-gray-200 py-5 md:py-6"
                autoFocus={false}
                disabled={!!selectedMood}
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full px-8 py-3 transition-colors text-base"
              disabled={!!selectedMood}
            >
              Search
            </button>
          </form>

          {/* Fun interactive intro card BELOW the hero, only visible before selection/search */}
          {showIntroCard && (
            <div className="w-full flex justify-center pt-6 pb-8">
              <div className="bg-gradient-to-br from-[#9b87f5] via-[#D3E4FD] to-[#f1f1f1] rounded-3xl shadow-xl p-8 flex flex-col items-center max-w-2xl w-full transition-all duration-500 hover:scale-105 hover:shadow-2xl glass-card">
                <div className="text-6xl mb-4 animate-float">🍽️</div>
                <h3 className="text-3xl font-bold mb-2 text-gray-800">
                  Select a mood or search for recipes
                </h3>
                <div className="text-gray-700 mb-2 text-lg">
                  We'll help you find the perfect dish for your current state of mind. <br/>
                  <span className="text-purple-600 font-semibold">Try searching for "pasta" or select "Happy" 👇</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recipes Area */}
      {(selectedMood || searchTouched) && (
        <div className="max-w-6xl mx-auto p-4">
          {(recipes.length === 0) ? (
            <div className="text-gray-500 text-lg text-center py-16">
              No recipes found. Try another mood or search!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recipes.map((recipe: any) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isFavorite={false}
                  onToggleFavorite={() => {}}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
