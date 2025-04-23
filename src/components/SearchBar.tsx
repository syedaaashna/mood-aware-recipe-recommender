
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
  showSearchButton?: boolean;
  placeholder?: string;
  buttonClassName?: string;
}

const SearchBar = ({ onSearch, showSearchButton = false, placeholder = "Search recipes...", buttonClassName = "" }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full items-center">
      <div className="relative w-full">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
        />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`pl-10 w-full rounded-full bg-white text-base shadow border border-gray-200 py-5`}
        />
      </div>
      {showSearchButton && (
        <button 
          type="submit"
          className={`ml-[-30px] px-7 py-2 rounded-full text-white font-bold text-base ${buttonClassName}`}
          style={{
            background: "linear-gradient(90deg, #9b87f5 0%, #a38eea 100%)",
            boxShadow: '0 2px 12px 0 rgba(155,135,245,0.08)'
          }}
        >
          Search
        </button>
      )}
    </form>
  );
};

export default SearchBar;

