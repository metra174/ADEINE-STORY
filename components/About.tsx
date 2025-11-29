import React from 'react';
import { Check } from 'lucide-react';
import { DELIVERY_PRICE } from '../constants';

const About: React.FC = () => {
  const offerings = [
    "Saltos finos de vários estilos",
    "Sandálias modernas",
    "Socas elegantes",
    "Tendências atualizadas",
    "Produtos selecionados"
  ];

  return (
    <section id="about" className="py-32 bg-stone-50 dark:bg-gray-950 overflow-hidden relative">
        {/* Background Texture */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100 dark:bg-brand-900/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Image Side - Creative Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop" 
                alt="Saltos Elegantes" 
                className="mt-16 w-full h-96 object-cover shadow-[0_20px_50px_rgba(0,0,0,0.1)] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop" 
                alt="Moda Feminina" 
                className="w-full h-96 object-cover shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-16 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-brand-950 p-8 shadow-2xl text-center z-20 min-w-[200px] border border-gray-100 dark:border-gray-800">
              <span className="block text-5xl font-serif font-bold text-brand-800 dark:text-brand-400">100%</span>
              <span className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-2 block">Qualidade</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
                 <div className="h-[1px] w-12 bg-brand-800 dark:bg-brand-400"></div>
                 <span className="text-brand-800 dark:text-brand-400 font-bold tracking-widest uppercase text-xs">
                  Sobre a Marca
                </span>
            </div>
           
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 dark:text-white mb-8 leading-none">
              Redefinindo a <br/>
              <span className="italic text-gray-400 dark:text-gray-600 font-light">Elegância Angolana</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-light">
              A <strong>ADRINE STORY</strong> não é apenas uma loja, é um manifesto de estilo. Nossa curadoria foca na harmonia entre o design moderno e o conforto absoluto, trazendo o que há de melhor em saltos, sandálias e socas para a mulher que decide seus próprios passos.
            </p>

            <div className="space-y-5 mb-12">
              {offerings.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-6 h-6 border border-brand-200 dark:border-brand-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-900 group-hover:border-brand-900 transition-all">
                    <Check className="h-3 w-3 text-brand-600 dark:text-brand-400 group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium tracking-wide text-sm uppercase">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-brand-800 dark:border-brand-500 pl-6 py-1">
              <p className="font-serif italic text-2xl text-gray-800 dark:text-gray-200 mb-2">
                "O sapato certo muda a postura, o passo e a atitude."
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-800 dark:text-brand-500 mt-4">
                Entrega em Luanda: {DELIVERY_PRICE}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;