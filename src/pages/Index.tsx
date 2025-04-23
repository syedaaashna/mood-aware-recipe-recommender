import { useState, useEffect } from "react";
import { getAllRecipes, searchRecipes, getRecipesByMood } from "@/utils/recipeOperations";
import { Recipe } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import { inferMoodFromText } from "@/utils/moodFromText";

const Index = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [lastMoodDetected, setLastMoodDetected] = useState<string | undefined>(undefined);

  useEffect(() => {
    const allRecipes = getAllRecipes();
    setRecipes(allRecipes);
    setSearchResults(allRecipes);
  }, []);

  const handleSearch = (query: string) => {
    setSearchTerm(query);

    let results = searchRecipes(query);

    // If no direct results, try mood inference
    if (results.length === 0) {
      const moodId = inferMoodFromText(query);
      if (moodId) {
        // Show recipes for that mood
        results = getRecipesByMood(moodId);
        setSearchResults(results);
        setNoResultsFound(results.length === 0);
        setLastMoodDetected(moodId); // optional state: to show "Showing recipes for your mood"
        return;
      }
    }
    setSearchResults(results);
    setNoResultsFound(results.length === 0);
    setLastMoodDetected(undefined);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} /> 
      {lastMoodDetected && searchResults.length > 0 && (
        <div className="mb-3 text-sm text-primary-800 font-medium">
          Showing results for your mood: <span className="font-bold">{lastMoodDetected}</span>
        </div>
      )}
      {noResultsFound ? (
        <div>
          <span>No recipes found.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Index;
