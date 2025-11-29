import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendFashionQuery } from '../services/geminiService';
import { ChatMessage } from '../types';

const FashionAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá, querida! Sou sua Personal Stylist da Adrine. 💖 Está procurando algo para uma ocasião especial hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const replyText = await sendFashionQuery(input);
    
    setMessages(prev => [...prev, { role: 'model', text: replyText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-4 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all hover:scale-105 flex items-center gap-3 group border border-white/20"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-500 rounded-full animate-ping"></span>
          </div>
          <span className="font-bold tracking-wide text-sm hidden md:inline uppercase">Stylist Virtual</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="glass bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col h-[550px] border border-white/50 dark:border-gray-700 overflow-hidden animate-in fade-in slide-in-from-bottom-10">
          
          {/* Header */}
          <div className="bg-gray-900 dark:bg-gray-800 p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center border-2 border-white/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg leading-none">Stylist Adrine</h3>
                <span className="text-xs text-brand-200 font-light tracking-wider uppercase">Online Agora</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-stone-50/50 dark:bg-gray-950/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-gray-900 dark:bg-brand-700 text-white rounded-2xl rounded-tr-none'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700 flex gap-2 items-center">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Digitando</span>
                  <Loader2 className="w-4 h-4 animate-spin text-brand-500" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-2 border border-transparent focus-within:border-brand-300 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ex: Preciso de um salto para festa..."
                className="flex-1 bg-transparent text-gray-900 dark:text-white px-4 py-2 focus:outline-none text-sm placeholder-gray-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-700 hover:bg-brand-800 text-white p-2.5 rounded-full disabled:opacity-50 transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FashionAssistant;