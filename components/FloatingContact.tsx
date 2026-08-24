"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContact } from '@/app/actions/contact';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const handleOpenForm = () => setIsOpen(true);
    window.addEventListener('open-contact-form', handleOpenForm);
    
    // Also open if URL has #contato hash
    if (window.location.hash === '#contato') {
      setIsOpen(true);
    }
    
    return () => window.removeEventListener('open-contact-form', handleOpenForm);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);

    if (result.success) {
      setMessage({ text: 'Formulário enviado com sucesso! Entraremos em contato em breve.', type: 'success' });
      (e.target as HTMLFormElement).reset();
      
      // Close modal after 3 seconds on success
      setTimeout(() => {
        setIsOpen(false);
        setMessage(null);
      }, 3000);
    } else {
      setMessage({ text: result.error || 'Ocorreu um erro.', type: 'error' });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-90 w-16 h-16 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden hover:scale-110 transition-transform duration-300 border border-gray-700 bg-[#0a0a0a] group flex items-center justify-center"
        aria-label="Abrir formulário de contato"
      >
        {/* Gradient background effect */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Sleek SVG Icon instead of raster image */}
        <svg 
          className="w-7 h-7 text-white group-hover:scale-110 transition-all duration-300 z-10" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>
      </motion.button>

      {/* Modal Form */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-99 flex items-center justify-center p-4"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-[#0a0a0a] border border-gray-800 rounded-2xl shadow-2xl z-100 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-800 bg-gray-900/30">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Iniciar Projeto</h3>
                  <p className="text-sm text-gray-400 mt-1">Preencha os dados e fale com nossa equipe.</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1.5">Nome completo *</label>
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome"
                      required
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors"
                      placeholder="Como podemos te chamar?"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">E-mail corporativo *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-1.5">WhatsApp / Telefone *</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      name="telefone"
                      required
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="servico" className="block text-sm font-medium text-gray-300 mb-1.5">Qual a sua necessidade? *</label>
                    <select 
                      id="servico" 
                      name="servico"
                      required
                      defaultValue=""
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors appearance-none"
                    >
                      <option value="" disabled>Selecione uma opção...</option>
                      <option value="landing_pages">Necessita de landing pages</option>
                      <option value="sistemas">Criação de Sistemas Gestão Internos Automatizados</option>
                      <option value="sites">Sites</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="detalhes" className="block text-sm font-medium text-gray-300 mb-1.5">Detalhes do projeto (Opcional)</label>
                    <textarea 
                      id="detalhes" 
                      name="detalhes"
                      rows={3}
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors resize-none"
                      placeholder="Conte-nos um pouco mais sobre o que você tem em mente..."
                    ></textarea>
                  </div>

                  {message && (
                    <div className={`p-4 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                      {message.text}
                    </div>
                  )}

                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white hover:bg-gray-200 text-black disabled:opacity-50 disabled:cursor-not-allowed font-bold py-3.5 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        'Solicitar Contato'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
