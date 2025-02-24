import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busque um produto ou cole o link da loja..."
          className="w-full px-6 py-4 text-lg rounded-full border-2 border-blue-100 focus:border-blue-500 focus:outline-none pr-12 shadow-sm hover:shadow-md transition-shadow"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:text-blue-800"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
}