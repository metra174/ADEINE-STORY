import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Catálogo', href: '#catalog' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-md py-3 border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold font-serif tracking-tight text-gray-900 dark:text-white transition-colors">
              <span className="bg-brand-700 text-white p-1.5 rounded-none rounded-tl-lg rounded-br-lg shadow-lg group-hover:bg-brand-600 transition-colors">
                 <ShoppingBag className="h-5 w-5" />
              </span>
              <span>ADRINE<span className="text-brand-700 dark:text-brand-500">STORY</span></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest font-semibold text-gray-600 dark:text-gray-300 hover:text-brand-700 dark:hover:text-brand-400 transition-all hover:-translate-y-0.5"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-gray-600 dark:text-gray-400 hover:text-brand-700 dark:hover:text-brand-400"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full glass shadow-lg transition-all duration-300 ease-in-out border-b border-gray-100 dark:border-gray-800 ${
          isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 rounded-md text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-200 hover:text-brand-700 dark:hover:text-brand-400 w-full text-center hover:bg-gray-50 dark:hover:bg-gray-800/50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;