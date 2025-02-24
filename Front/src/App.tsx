import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { FeaturedDeals } from './components/FeaturedDeals';
import { Features } from './components/Features';
import { SearchResults } from './components/SearchResults';
import { Search } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with enhanced background */}
      <div className={`relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 overflow-hidden ${hasSearched ? 'py-8' : ''}`}>
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center mb-12">
            {!hasSearched && (
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  Compare Preços e Economize
                </h1>
                <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                  Encontre as melhores ofertas em milhares de produtos
                </p>
              </>
            )}
            <SearchBar onSearch={handleSearch} />
            {!hasSearched && (
              <div className="mt-8 flex items-center justify-center gap-4 text-sm text-blue-100">
                <Search size={16} className="text-blue-200" />
                <span>Mais de 1 milhão de produtos comparados diariamente</span>
              </div>
            )}
          </div>

          {/* Floating cards background effect */}
          {!hasSearched && (
            <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50"></div>
          )}
        </div>

        {/* Animated background shapes */}
        {!hasSearched && (
          <>
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </>
        )}
      </div>

      {/* Search Results */}
      {hasSearched ? (
        <SearchResults query={searchQuery} />
      ) : (
        <>
          {/* Features Section */}
          <Features />

          {/* Featured Deals Section */}
          <div className="py-16">
            <FeaturedDeals />
          </div>
        </>
      )}
    </div>
  );
}

export default App;