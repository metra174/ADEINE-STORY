import React, { useState } from 'react';
import { PRODUCTS, WHATSAPP_LINK } from '../constants';
import { ShoppingBag, Star, MessageCircle, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '../types';

const Catalog: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Saltos' | 'Sandálias' | 'Socas'>('Todos');
  const [visibleCount, setVisibleCount] = useState(9); // Show 9 items initially

  const filteredProducts = filter === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  // Get only the visible products based on count
  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const categories = ['Todos', 'Saltos', 'Sandálias', 'Socas'];

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const handleShowLess = () => {
    setVisibleCount(9);
    // Scroll back to top of catalog smoothly
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="catalog" className="py-24 bg-stone-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-gray-200 dark:border-gray-800 pb-8">
          <div className="max-w-2xl">
            <span className="text-brand-600 dark:text-brand-500 font-bold tracking-widest uppercase text-xs mb-3 block flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-600 dark:bg-brand-500"></span>
              Coleção 2024
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-white leading-tight">
              Vitrine de <span className="italic text-brand-700 dark:text-brand-400 font-light">Elegância</span>
            </h2>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat as any);
                  setVisibleCount(9); // Reset visible count on filter change
                }}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
                  filter === cat
                    ? 'bg-brand-900 text-white shadow-lg shadow-brand-900/20'
                    : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {displayedProducts.map((product: Product) => (
            <div 
              key={product.id} 
              className="group animate-in fade-in zoom-in duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-gray-800 mb-6 rounded-sm shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Price Tag - Luxury Badge Style (Top Right) */}
                <div className="absolute top-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-5 py-3 rounded-bl-2xl shadow-lg z-10 border-l border-b border-gray-100 dark:border-gray-800">
                   <span className="block text-xs font-bold uppercase text-gray-400 tracking-wider mb-0.5 text-right">Preço</span>
                   <span className="font-serif text-xl font-bold text-brand-800 dark:text-brand-400 tracking-wide">
                    {product.price}
                   </span>
                </div>

                {/* Category Badge (Top Left) */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest border border-white/20 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                {/* Action Overlay (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-20 pb-6 px-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center">
                  <p className="text-white/80 text-xs mb-3 font-light">Clique para encomendar</p>
                  <a
                    href={`${WHATSAPP_LINK}?text=Olá Adrine Story! 💖 Estou encantada com o *${product.name}* (${product.price}). Gostaria de encomendar!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-brand-900 py-3.5 px-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-50 transition-colors flex items-center justify-center gap-2 shadow-xl transform hover:-translate-y-1"
                  >
                    <MessageCircle size={16} className="text-green-600" />
                    Enviar Mensagem
                  </a>
                </div>
              </div>
              
              {/* Info Below Image */}
              <div className="text-center group-hover:translate-y-[-4px] transition-transform duration-300">
                <h3 className="text-2xl font-serif font-medium text-gray-900 dark:text-white mb-2 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors cursor-pointer">
                  {product.name}
                </h3>
                
                <div className="flex justify-center items-center gap-3">
                   <div className="flex text-gold-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">Em Stock</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-20 text-center space-y-4">
           {hasMore ? (
             <button 
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm"
              >
                Ver Mais Produtos <ChevronDown size={16} />
             </button>
           ) : filteredProducts.length > 9 && (
              <button 
                onClick={handleShowLess}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm"
              >
                Ver Menos <ChevronUp size={16} />
              </button>
           )}

           <div className="block pt-4">
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-brand-800 dark:text-brand-400 font-bold uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-4 transition-all">
                  Catálogo Completo no WhatsApp <ArrowUpRight size={16} />
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;