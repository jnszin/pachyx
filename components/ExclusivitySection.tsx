import React from 'react';
import styles from './ExclusivitySection.module.css';

export default function ExclusivitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.badge}>Artesanal & Premium</div>
            <h2 className={styles.title}>
              Sem templates. Sem atalhos. <br />
              <span className={styles.highlight}>100% Exclusivo.</span>
            </h2>
            <div className={styles.story}>
              <p>
                Acreditamos que o núcleo do seu negócio não pode rodar em cima de soluções prontas que engessam a sua operação. 
              </p>
              <p>
                Na Pachyx, cada projeto começa com uma folha em branco. Mergulhamos na lógica da sua empresa para desenhar e desenvolver uma arquitetura de software sob medida. Cada linha de código, cada pixel e cada integração são projetados para resolver os <strong>seus</strong> problemas específicos.
              </p>
              <p>
                O resultado? Uma plataforma digital rápida, segura e impossível de ser copiada pelos seus concorrentes.
              </p>
            </div>
            
            <ul className={styles.featureList}>
              <li>
                <span className={styles.check}>✓</span> Arquitetura escalável desde o Dia 1
              </li>
              <li>
                <span className={styles.check}>✓</span> Design system proprietário
              </li>
              <li>
                <span className={styles.check}>✓</span> Performance de ponta (Edge computing)
              </li>
            </ul>
          </div>

          <div className={styles.visualContent}>
            {/* Monitor Mockup */}
            <div className="relative group cursor-pointer w-full flex flex-col items-center mt-8 md:mt-0">
              
              {/* Monitor Screen Frame */}
              <div className="w-full bg-[#161616] p-2 sm:p-3 rounded-[1.25rem] border border-gray-800 shadow-2xl relative z-10">
                {/* Screen Content Wrapper */}
                <div className="w-full bg-[#0a0a0a] rounded-lg sm:rounded-xl overflow-hidden border border-gray-900 relative">
                  
                  {/* Browser Bar */}
                  <div className="h-6 sm:h-8 bg-gray-900 border-b border-gray-800 flex items-center px-3 sm:px-4 shrink-0 transition-colors duration-500 group-hover:bg-gray-800">
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-gray-950/80 rounded-lg px-3 sm:px-4 py-1 flex items-center gap-2 text-[8px] sm:text-[10px] text-gray-400 border border-gray-800/80 w-[60%] sm:w-[70%] justify-center shadow-inner">
                        <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                        https://seudominio.com.br
                      </div>
                    </div>
                  </div>

                  {/* Page Content */}
                  <div className="w-full bg-[#0a0a0a] overflow-hidden relative">
                    {/* Navbar */}
                    <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-800/50">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-4 0"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>
                        <span className="text-gray-200 font-serif text-[10px] sm:text-sm font-bold tracking-widest">ÓTICA LUX</span>
                      </div>
                      <div className="flex gap-2 sm:gap-4">
                        <div className="w-4 sm:w-8 h-1 sm:h-1.5 bg-gray-700/50 rounded-full"></div>
                        <div className="w-4 sm:w-8 h-1 sm:h-1.5 bg-gray-700/50 rounded-full"></div>
                        <div className="w-4 sm:w-8 h-1 sm:h-1.5 bg-gray-700/50 rounded-full"></div>
                      </div>
                    </div>

                    {/* Hero */}
                    <div className="px-4 sm:px-8 py-6 sm:py-10 flex items-center">
                      <div className="w-1/2 flex flex-col gap-3 sm:gap-4 z-10">
                        <div className="text-sm sm:text-2xl font-serif text-gray-100 font-bold leading-tight">Estilo e clareza<br/>para o seu olhar.</div>
                        <div className="w-full sm:w-3/4 h-1.5 sm:h-2 bg-gray-600/40 rounded-full"></div>
                        <div className="w-3/4 sm:w-1/2 h-1.5 sm:h-2 bg-gray-600/40 rounded-full mb-1 sm:mb-2"></div>
                        <div className="w-20 sm:w-24 h-6 sm:h-8 bg-blue-600 rounded flex items-center justify-center text-[8px] sm:text-[10px] text-white font-medium shadow-lg shadow-blue-600/20 transition-all duration-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] group-hover:scale-105">Ver Coleção</div>
                      </div>
                      <div className="w-1/2 flex justify-center relative">
                        <div className="absolute inset-0 bg-blue-500/10 blur-[30px] sm:blur-[40px] rounded-full transition-all duration-700 group-hover:bg-blue-500/30 group-hover:blur-[60px]"></div>
                        <svg className="w-20 h-20 sm:w-32 sm:h-32 text-gray-300 relative z-10 drop-shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-4 0"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>
                      </div>
                    </div>

                    {/* Products */}
                    <div className="px-4 sm:px-8 flex gap-2 sm:gap-4 pb-6 sm:pb-8">
                      {[1,2,3].map((i) => (
                        <div key={i} className={`flex-1 bg-gray-900/40 border border-gray-800/60 rounded-lg p-2 sm:p-4 flex flex-col items-center transition-all duration-500 group-hover:bg-gray-800/60 group-hover:-translate-y-2 ${i===1 ? 'delay-75' : i===2 ? 'delay-150' : 'delay-200'}`}>
                          <svg className="w-6 h-6 sm:w-12 sm:h-12 text-gray-400 mb-2 sm:mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-4 0"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>
                          <div className="w-[80%] h-1.5 sm:h-2 bg-gray-600/50 rounded-full mb-1 sm:mb-2"></div>
                          <div className="w-1/2 h-1.5 sm:h-2 bg-blue-500/50 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitor Stand and Base */}
              <div className="w-12 h-6 sm:w-16 sm:h-10 bg-gradient-to-b from-gray-800 to-gray-900 relative z-0 -mt-1 shadow-inner rounded-b-md"></div>
              <div className="w-24 h-2 sm:w-32 sm:h-2.5 bg-gray-700 rounded-t-lg shadow-[0_8px_20px_rgba(0,0,0,0.9)] relative z-0 -mt-[1px]"></div>
              
            </div>
            <div className={styles.glow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
