'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Por que escolher a Pachyx ao invés de manter a operação em planilhas?",
    answer: "Planilhas são ótimas para rascunhos, mas perigosas para escalar. Elas geram retrabalho, lentidão, falhas de segurança e dificultam a visão geral da empresa. Nossos sistemas automatizam sua rotina, travam vazamentos financeiros e criam uma infraestrutura robusta para o seu negócio crescer sem amadorismo."
  },
  {
    question: "Vocês utilizam templates genéricos para criar os sites e sistemas?",
    answer: "Não. Na Pachyx, trabalhamos com desenvolvimento 'Artesanal'. Cada tela, banco de dados e lógica é programada do absoluto zero e sob medida para a sua necessidade. Isso garante máxima velocidade, segurança e uma solução que se adapta ao seu negócio (e não o contrário)."
  },
  {
    question: "Quanto tempo leva para tirar minha ideia do papel?",
    answer: "O prazo varia de acordo com o nível da solução. Um site corporativo pode levar algumas semanas, enquanto um ERP ou MVP complexo pode levar meses. No entanto, nós trabalhamos com entregas parciais: você já começa a colher resultados nas primeiras semanas enquanto continuamos desenvolvendo o restante."
  },
  {
    question: "Como funciona o suporte e acompanhamento após a entrega?",
    answer: "Nós entramos no jogo como seus Parceiros de Crescimento. Não entregamos um projeto e desaparecemos. Assumimos o papel do seu braço tecnológico de longo prazo, fornecendo manutenção, escalabilidade e novas melhorias contínuas para o seu sistema."
  },
  {
    question: "A Pachyx cuida da infraestrutura e hospedagem do sistema?",
    answer: "Sim! Nós entregamos a solução funcionando de ponta a ponta. Configuramos servidores modernos em nuvem, bancos de dados seguros e domínios. O seu único trabalho será usar a ferramenta para alavancar suas vendas e gerir sua equipe."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#050505] border-y border-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-bold uppercase tracking-wider mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Perguntas frequentes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Dúvidas comuns de empresas que querem sair das planilhas, organizar a operação e construir software sob medida.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="rounded-2xl overflow-hidden transition-colors duration-300"
                style={{ 
                  backgroundColor: isOpen ? '#111111' : '#0a0a0a',
                  border: '1px solid',
                  borderColor: isOpen ? '#333333' : '#1f1f1f' 
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-white font-bold text-lg pr-8">{faq.question}</span>
                  <div 
                    className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out"
                    style={{ 
                      backgroundColor: isOpen ? '#333333' : 'transparent',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke={isOpen ? "white" : "#666666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
