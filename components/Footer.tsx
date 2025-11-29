import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { ShoppingBag, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 text-2xl font-bold text-white font-serif mb-4">
              <ShoppingBag className="h-6 w-6 text-brand-500" />
              <span>ADRINE STORY</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Loja de Roupas Femininas<br/>
              Saltos | Sandálias | Socas
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-4">Contatos</h3>
            <p className="mb-2">WhatsApp: <span className="text-white">{WHATSAPP_NUMBER}</span></p>
            <p className="mb-2">Luanda – Angola</p>
            <p>Entrega imediata: <span className="text-brand-400 font-bold">2.000 Kz</span></p>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end">
             <h3 className="text-white font-bold text-lg mb-4">Siga-nos</h3>
             <div className="flex space-x-4">
                <a href="#" className="hover:text-brand-400 transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="hover:text-brand-400 transition-colors"><Facebook className="w-6 h-6" /></a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Adrine Story. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
