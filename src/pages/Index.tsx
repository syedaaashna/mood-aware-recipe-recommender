
import { useState } from "react";
import { getRecipesByMood, searchRecipes } from "@/utils/recipeOperations";
import MoodInput from "@/components/ui/MoodInput";
import RecipeCard from "@/components/ui/RecipeCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { moods } from "@/data/moods/moodsList";
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

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#e7f0fd] to-[#f9fbfe]">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto py-10 px-2 flex flex-col items-center text-center">
        {/* AI-Powered Badge */}
        <div className="mb-4">
          <span className="inline-block rounded-full bg-purple-100 text-purple-600 px-4 py-1 text-xs font-semibold shadow-sm">
            AI-Powered Recipe Recommendations
          </span>
        </div>
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Recipes for Your <span className="text-purple-500">Mood</span>
        </h1>
        {/* Subtitle */}
        <div className="mb-8 text-gray-600 text-lg font-normal">
          Discover personalized recipes based on how you're feeling right now, with step-by-step voice guidance to help you cook.
        </div>

        {/* Mood Input */}
        <div className="w-full flex flex-col gap-4 items-center mb-4">
          <MoodInput
            onMoodSelect={handleMoodSelect}
            selectedMood={selectedMood}
          />
          <form onSubmit={handleSearch} className="flex w-full max-w-lg relative">
            <Input
              type="search"
              placeholder="Or search recipes by name, ingredient, or tag..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10 pr-24 w-full bg-white shadow rounded-full"
              autoFocus={false}
              disabled={!!selectedMood}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full px-6 py-2 transition-colors"
              disabled={!!selectedMood}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {/* Below-Hero Guide Section */}
      <div className="bg-white/80 rounded-xl max-w-3xl mx-auto mt-4 mb-8 p-8 shadow-sm">
        <h3 className="text-2xl font-semibold mb-1">Select a mood or search for recipes</h3>
        <div className="text-gray-700 text-base">
          We'll help you find the perfect dish for your current state of mind.
        </div>
      </div>
      {/* Recipes Area */}
      <div className="max-w-6xl mx-auto p-4">
        {/* Show results only after selection/search */}
        {(selectedMood || searchTouched) && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
