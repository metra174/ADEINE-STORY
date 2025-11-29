import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';
import { MessageCircle, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-brand-900 dark:bg-black text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-600 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-serif">
          Pronta para elevar seu estilo?
        </h2>
        <p className="text-xl text-brand-100 mb-10">
          Clique abaixo e faça sua compra hoje mesmo. Garantimos elegância e sofisticação.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-brand-900 bg-white hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="mr-2 h-6 w-6 text-green-600" />
            WhatsApp: {WHATSAPP_NUMBER}
          </a>
          <a
            href="#catalog"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-lg font-bold rounded-full text-white hover:bg-white/10 transition-all"
          >
            Ver Catálogo Completo
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
