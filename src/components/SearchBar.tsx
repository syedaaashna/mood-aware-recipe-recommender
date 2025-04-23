
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          type="search"
          placeholder="Search recipes or enter how you're feeling..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 w-full bg-white dark:bg-gray-800"
        />
      </div>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Try searching for recipes or describe how you're feeling (e.g. "I'm feeling happy today")
      </p>
    </form>
  );
};

export default SearchBar;
