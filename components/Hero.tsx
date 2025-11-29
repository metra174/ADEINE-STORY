import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image with Stylish Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop"
          alt="Adrine Story Background"
          className="w-full h-full object-cover animate-in fade-in zoom-in duration-10000"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-brand-950/50 to-transparent dark:from-black/95 dark:via-black/70 dark:to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/20 rounded-full backdrop-blur-md bg-white/5">
            <div className="flex -space-x-1">
               {[1,2,3].map(i => (
                 <div key={i} className="w-5 h-5 rounded-full bg-brand-400 border border-white"></div>
               ))}
            </div>
            <span className="text-white/90 text-xs md:text-sm font-bold tracking-widest uppercase pl-2">
              Nova Coleção Disponível
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 drop-shadow-2xl">
            Elegância <span className="italic font-light text-brand-300">Feminina</span> <br/>
            Para Todas as Ocasiões.
          </h1>
          
          <p className="mt-4 max-w-xl text-lg md:text-xl text-gray-200 mb-12 font-light leading-relaxed border-l border-brand-500 pl-6">
            ADRINE STORY – O destino definitivo para saltos finos e sandálias de luxo. Design sofisticado para a mulher moderna angolana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#catalog"
              className="group inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 text-sm font-bold uppercase tracking-widest hover:bg-brand-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <ShoppingBag className="mr-2 h-4 w-4 group-hover:text-brand-700 transition-colors" />
              Ver Catálogo
            </a>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-10 py-5 border border-white/30 text-white backdrop-blur-md bg-white/5 hover:bg-brand-900 hover:border-brand-900 text-sm font-bold uppercase tracking-widest transition-all"
            >
              Falar no WhatsApp
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-4 animate-pulse">
        <span className="text-white/50 text-xs tracking-widest uppercase rotate-90 origin-right">Scroll Down</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;