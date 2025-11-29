import React from 'react';
import { FEATURES } from '../constants';
import { Award, Sparkles, Truck, MessageCircle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  truck: <Truck className="w-6 h-6" />,
  "message-circle": <MessageCircle className="w-6 h-6" />,
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center text-center p-6 group hover:bg-stone-50 dark:hover:bg-gray-800/50 transition-colors rounded-xl"
            >
              <div className="w-14 h-14 rounded-full bg-brand-50 dark:bg-gray-800 flex items-center justify-center text-brand-700 dark:text-brand-400 mb-5 group-hover:scale-110 transition-transform duration-300 ring-1 ring-brand-100 dark:ring-brand-900">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;