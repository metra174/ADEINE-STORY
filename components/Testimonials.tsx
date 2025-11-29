import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-50/50 dark:bg-gray-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <Quote className="mx-auto w-10 h-10 text-brand-300 dark:text-brand-800 mb-4 rotate-180" />
           <h2 className="text-4xl font-serif text-gray-900 dark:text-white mb-4">
            Love Stories
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            A satisfação de quem já caminha com nossa elegância.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white dark:bg-gray-800 p-10 shadow-xl border border-gray-100 dark:border-gray-700 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex text-gold-500 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" className="text-gold-400" />
                ))}
              </div>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 font-serif leading-relaxed mb-8">
                "{t.text}"
              </p>
              
              <div className="flex items-center border-t border-gray-100 dark:border-gray-700 pt-6">
                <div className="w-12 h-12 rounded-full bg-stone-200 dark:bg-gray-700 flex items-center justify-center text-xl font-serif text-gray-600 dark:text-gray-300">
                  {t.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">{t.author}</p>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold">Cliente Verificada</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;