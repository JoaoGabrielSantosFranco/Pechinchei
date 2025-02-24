import React from 'react';
import { Bell, Search, TrendingDown, ShoppingBag } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-8 h-8 text-blue-600" />,
    title: "Busca Inteligente",
    description: "Compare preços em diversas lojas com apenas uma busca"
  },
  {
    icon: <Bell className="w-8 h-8 text-blue-600" />,
    title: "Alertas de Preço",
    description: "Receba notificações quando os preços baixarem"
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-blue-600" />,
    title: "Histórico de Preços",
    description: "Acompanhe a evolução dos preços ao longo do tempo"
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
    title: "Melhores Ofertas",
    description: "Encontre as melhores ofertas em um só lugar"
  }
];

export function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}