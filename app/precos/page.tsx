import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function Precos() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ededed] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 max-w-4xl mx-auto text-center mt-12">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight text-white">
          Investimento e <span className="text-gray-500">Parceria</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Nossa abordagem é diferente. Não vendemos pacotes fechados antes de entender profundamente o seu negócio. O primeiro passo é mostrar resultados.
        </p>

        <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 sm:p-12 w-full shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8">
             <div className="w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"></div>
           </div>
           
           <h2 className="text-2xl font-bold mb-4 text-white">1. O Teste Grátis</h2>
           <p className="text-gray-400 mb-8 text-left text-sm sm:text-base">
             Nós desenhamos e desenvolvemos um escopo inicial da sua solução (como uma Landing Page ou um protótipo navegável do sistema) totalmente sem compromisso. Você testa, valida nossa qualidade e velocidade.
           </p>

           <div className="w-full h-px bg-gray-800 my-8"></div>

           <h2 className="text-2xl font-bold mb-4 text-white">2. A Negociação</h2>
           <p className="text-gray-400 mb-8 text-left text-sm sm:text-base">
             Apenas se você aprovar o teste e quiser seguir com o projeto completo, sentamos para estruturar um plano financeiro. Nossos valores variam de acordo com a complexidade e a tecnologia necessária, sempre garantindo que o retorno sobre o investimento (ROI) seja positivo para você.
           </p>

           <div className="w-full h-px bg-gray-800 my-8"></div>

           <div className="text-left">
             <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Estimativas Base (Após Aprovação)</h3>
             <ul className="space-y-4 text-gray-400 text-sm">
               <li className="flex items-center gap-3">
                 <span className="text-emerald-500">✓</span> Landing Pages de Alta Conversão: A partir de R$ 2.500
               </li>
               <li className="flex items-center gap-3">
                 <span className="text-emerald-500">✓</span> Plataformas Web & E-commerce: Sob análise
               </li>
               <li className="flex items-center gap-3">
                 <span className="text-emerald-500">✓</span> Sistemas de Gestão (SaaS, ERP): Sob análise
               </li>
             </ul>
           </div>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
