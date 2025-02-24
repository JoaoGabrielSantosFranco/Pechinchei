import React from 'react';
import { ExternalLink, Star, TrendingDown, Store } from 'lucide-react';

// Tipos para os dados mockados
interface Price {
  store: string;
  price: number;
  url: string;
  lastUpdate: string;
  priceHistory: number[];
}

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  lowestPrice: number;
  highestPrice: number;
  prices: Price[];
  rating: number;
}

// Dados mockados para exemplo
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Samsung Galaxy S24 Ultra 256GB',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=60',
    description: 'Smartphone Samsung Galaxy S24 Ultra, 256GB, 12GB RAM, Tela 6.8", Câmera Quádrupla',
    lowestPrice: 7499.00,
    highestPrice: 8999.00,
    rating: 4.8,
    prices: [
      {
        store: 'Magazine Luiza',
        price: 7499.00,
        url: '#',
        lastUpdate: '2024-02-24T15:30:00Z',
        priceHistory: [7899, 7699, 7499]
      },
      {
        store: 'Amazon',
        price: 7699.00,
        url: '#',
        lastUpdate: '2024-02-24T15:30:00Z',
        priceHistory: [8299, 7899, 7699]
      },
      {
        store: 'Casas Bahia',
        price: 7899.00,
        url: '#',
        lastUpdate: '2024-02-24T15:30:00Z',
        priceHistory: [8999, 8299, 7899]
      }
    ]
  },
  {
    id: '2',
    name: 'iPhone 15 Pro Max 256GB',
    image: 'https://images.unsplash.com/photo-1696446702183-cbd35da7cb30?w=800&auto=format&fit=crop&q=60',
    description: 'Apple iPhone 15 Pro Max, 256GB, Tela 6.7" Super Retina XDR, Câmera Tripla',
    lowestPrice: 8499.00,
    highestPrice: 9999.00,
    rating: 4.9,
    prices: [
      {
        store: 'iPlace',
        price: 8499.00,
        url: '#',
        lastUpdate: '2024-02-24T15:30:00Z',
        priceHistory: [9999, 8999, 8499]
      },
      {
        store: 'Fast Shop',
        price: 8699.00,
        url: '#',
        lastUpdate: '2024-02-24T15:30:00Z',
        priceHistory: [9899, 8899, 8699]
      }
    ]
  }
];

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Resultados para "{query}"
        </h2>
        <p className="text-gray-600">
          {mockProducts.length} produtos encontrados
        </p>
      </div>

      <div className="space-y-8">
        {mockProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex gap-6">
                {/* Imagem do produto */}
                <div className="w-48 h-48 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Informações do produto */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{product.rating}</span>
                    </div>
                  </div>

                  {/* Variação de preço */}
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Menor preço</p>
                      <p className="text-lg font-semibold text-green-600">
                        R$ {product.lowestPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Maior preço</p>
                      <p className="text-lg font-semibold text-red-600">
                        R$ {product.highestPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <TrendingDown className="w-5 h-5 mr-1" />
                      <span className="text-sm font-medium">
                        {Math.round(((product.highestPrice - product.lowestPrice) / product.highestPrice) * 100)}% de economia
                      </span>
                    </div>
                  </div>

                  {/* Lista de preços por loja */}
                  <div className="space-y-3">
                    {product.prices.map((price, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Store className="w-5 h-5 text-gray-600" />
                          <span className="font-medium">{price.store}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-lg font-semibold">
                            R$ {price.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </span>
                          <a
                            href={price.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                          >
                            <span>Ver oferta</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}