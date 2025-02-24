import React from 'react';
import { Tag, TrendingUp } from 'lucide-react';

const deals = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    image: "https://images.unsplash.com/photo-1696446702183-cbd35da7cb30?w=800&auto=format&fit=crop&q=60",
    price: "R$ 7.299,00",
    store: "Magazine Luiza",
    discount: "15% OFF"
  },
  {
    id: 2,
    title: "Samsung Smart TV 55\"",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=60",
    price: "R$ 2.899,00",
    store: "Casas Bahia",
    discount: "25% OFF"
  },
  {
    id: 3,
    title: "PlayStation 5",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=60",
    price: "R$ 3.799,00",
    store: "Amazon",
    discount: "12% OFF"
  }
];

export function FeaturedDeals() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="text-blue-600" />
        <h2 className="text-2xl font-semibold">Ofertas em Destaque</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-start justify-between">
                <h3 className="font-medium text-lg">{deal.title}</h3>
                <span className="flex items-center text-green-600 text-sm">
                  <Tag size={16} className="mr-1" />
                  {deal.discount}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{deal.store}</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">{deal.price}</p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ver Oferta
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}