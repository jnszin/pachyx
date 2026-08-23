import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            O fim da desorganização.<br />
            <span className={styles.titleGradient}>O começo do seu crescimento.</span>
          </h1>

          <p className={styles.subtitle}>
            Desenvolvemos sites de alta conversão e sistemas de gestão interna para que você abandone planilhas confusas, tenha controle absoluto do seu estoque e foque em expandir o seu negócio.
          </p>

          <div className={styles.actions}>
            <button className={styles.ctaButton}>
              Inicie seu Projeto
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto mt-16 sm:mt-24 flex justify-center perspective-[1200px] group cursor-pointer">
          {/* Subtle blue diffuse glow in the background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[80%] bg-blue-600/20 blur-[100px] sm:blur-[140px] rounded-[100%] pointer-events-none z-0 transition-all duration-1000 group-hover:bg-blue-500/30 group-hover:scale-110"></div>

          {/* Laptop Silhouette */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-w-4xl flex flex-col items-center z-10 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:drop-shadow-2xl">
            {/* Laptop Screen */}
            <div className="w-full h-full bg-[#0a0a0a] border-[4px] sm:border-[8px] border-gray-800 rounded-t-2xl sm:rounded-t-3xl overflow-hidden shadow-2xl relative">
              {/* Webcam dot */}
              <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-950 rounded-full z-50"></div>

              {/* Display Area */}
              <div className="absolute inset-x-0 bottom-0 top-4 sm:top-6 bg-gray-950 overflow-hidden flex flex-col">
                
                {/* Browser Bar */}
                <div className="h-6 sm:h-8 bg-gray-900 border-b border-gray-800 flex items-center px-3 sm:px-4 shrink-0">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-gray-950/80 rounded-md sm:rounded-lg px-2 sm:px-4 py-0.5 sm:py-1 flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] text-gray-400 border border-gray-800/80 w-[60%] justify-center shadow-inner">
                      <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                      https://seudominio.com.br
                    </div>
                  </div>
                </div>

                {/* Page Content */}
                <div className="flex-1 overflow-hidden relative bg-[#0a0a0a] flex flex-col justify-between">
                   {/* Navbar */}
                   <div className="flex justify-between items-center px-3 py-2 sm:px-6 sm:py-4 border-b border-gray-800/50 shrink-0">
                     <div className="flex items-center gap-1.5 sm:gap-2">
                       <svg className="w-3 h-3 sm:w-5 sm:h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-4 0"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>
                       <span className="text-gray-200 font-serif text-[8px] sm:text-sm font-bold tracking-widest">ÓTICA LUX</span>
                     </div>
                     <div className="flex gap-2 sm:gap-4">
                       <div className="w-4 sm:w-8 h-1 sm:h-1.5 bg-gray-700/50 rounded-full"></div>
                       <div className="w-4 sm:w-8 h-1 sm:h-1.5 bg-gray-700/50 rounded-full"></div>
                       <div className="w-4 sm:w-8 h-1 sm:h-1.5 bg-gray-700/50 rounded-full"></div>
                     </div>
                   </div>

                   {/* Hero */}
                   <div className="px-4 py-3 sm:px-8 sm:py-6 flex items-center flex-1">
                     <div className="w-1/2 flex flex-col gap-1.5 sm:gap-4 z-10">
                       <div className="text-[10px] sm:text-xl lg:text-3xl font-serif text-gray-100 font-bold leading-tight">Estilo e clareza<br/>para o seu olhar.</div>
                       <div className="w-3/4 h-1 sm:h-2 bg-gray-600/40 rounded-full mt-1"></div>
                       <div className="w-1/2 h-1 sm:h-2 bg-gray-600/40 rounded-full mb-1 sm:mb-2"></div>
                       <div className="w-14 sm:w-24 h-4 sm:h-8 bg-blue-600 rounded flex items-center justify-center text-[5px] sm:text-[10px] text-white font-medium shadow-lg shadow-blue-600/20 transition-all duration-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] group-hover:scale-105">Ver Coleção</div>
                     </div>
                     <div className="w-1/2 flex justify-center relative">
                        <div className="absolute inset-0 bg-blue-500/10 blur-[20px] sm:blur-[40px] rounded-full transition-all duration-700 group-hover:bg-blue-500/20 group-hover:blur-[60px]"></div>
                        <svg className="w-10 h-10 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-gray-300 relative z-10 drop-shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-4 0"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>
                     </div>
                   </div>

                   {/* Products */}
                   <div className="px-4 pb-3 sm:px-8 flex gap-2 sm:gap-4 sm:pb-6 shrink-0">
                     {[1,2,3].map((i) => (
                       <div key={i} className={`flex-1 bg-gray-900/40 border border-gray-800/60 rounded sm:rounded-lg p-1.5 sm:p-4 flex flex-col items-center transition-all duration-500 group-hover:bg-gray-800/60 group-hover:-translate-y-1 sm:group-hover:-translate-y-2 ${i===1 ? 'delay-75' : i===2 ? 'delay-150' : 'delay-200'}`}>
                          <svg className="w-5 h-5 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-400 mb-1.5 sm:mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-4 0"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>
                          <div className="w-[80%] h-0.5 sm:h-2 bg-gray-600/50 rounded-full mb-1 sm:mb-2"></div>
                          <div className="w-1/2 h-0.5 sm:h-2 bg-blue-500/50 rounded-full"></div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
            {/* Laptop Base (Flat horizontal base) */}
            <div className="w-[104%] h-3 sm:h-5 bg-gray-800 rounded-b-lg sm:rounded-b-2xl border-t border-gray-700 shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative z-10 flex justify-center">
              {/* Trackpad opening notch */}
              <div className="w-1/6 h-[50%] bg-gray-900 rounded-b-md"></div>
            </div>
          </div>

          {/* Smartphone Silhouette */}
          <div className="absolute -bottom-8 -right-2 sm:-bottom-12 sm:-right-8 w-[28%] sm:w-[22%] min-w-[120px] max-w-[260px] aspect-[9/19] bg-[#0a0a0a] border-[4px] sm:border-[6px] border-gray-800 rounded-[2rem] sm:rounded-[2.75rem] shadow-[0_25px_50px_rgba(0,0,0,0.7)] overflow-hidden z-20 flex flex-col relative transition-all duration-700 ease-out group-hover:-translate-y-6 group-hover:-translate-x-2 group-hover:scale-[1.05] group-hover:rotate-[-2deg]">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-[35%] h-4 sm:h-6 bg-black rounded-full border border-gray-800/80 z-50"></div>
            
            {/* Mobile Display Area */}
            <div className="flex-1 flex flex-col pt-8 sm:pt-10 bg-gray-950 relative z-10 overflow-hidden">
               {/* Browser Bar */}
               <div className="h-6 sm:h-8 bg-gray-900 border-b border-gray-800 flex items-center px-3 justify-center shrink-0">
                  <div className="bg-gray-950/80 rounded-md px-3 py-1 flex items-center gap-1.5 text-[8px] text-gray-400 border border-gray-800/80 w-[85%] justify-center shadow-inner">
                    <svg className="w-2 h-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                    seudominio.com.br
                  </div>
               </div>
               
               {/* Content */}
               <div className="flex-1 overflow-hidden relative bg-[#0a0a0a] flex flex-col">
                  {/* Navbar */}
                  <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800/50">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-4 0"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>
                      <span className="text-gray-200 font-serif text-[9px] sm:text-[10px] font-bold tracking-widest">ÓTICA LUX</span>
                    </div>
                    <div className="w-3.5 h-2.5 flex flex-col justify-between">
                      <div className="w-full h-0.5 bg-gray-600 rounded-full"></div>
                      <div className="w-full h-0.5 bg-gray-600 rounded-full"></div>
                      <div className="w-full h-0.5 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Hero */}
                  <div className="px-4 pt-4 sm:pt-6 pb-2 flex flex-col items-center text-center relative">
                     <div className="absolute inset-0 bg-blue-500/10 blur-[30px] rounded-full top-4 transition-all duration-700 group-hover:bg-blue-500/20 group-hover:blur-[40px]"></div>
                     <h2 className="text-sm sm:text-base font-serif text-gray-100 font-bold leading-tight mb-2 relative z-10">
                       Estilo e clareza<br/>para o seu olhar.
                     </h2>
                     <div className="w-24 sm:w-32 h-1.5 bg-gray-600/40 rounded-full mb-1"></div>
                     <div className="w-16 sm:w-24 h-1.5 bg-gray-600/40 rounded-full mb-3"></div>
                     
                     <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 relative z-10 mb-2 drop-shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-4 0"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>
                     
                     <div className="w-20 sm:w-24 h-5 sm:h-6 bg-blue-600 rounded flex items-center justify-center text-[8px] sm:text-[9px] text-white font-medium relative z-10 shadow-lg shadow-blue-600/20 transition-all duration-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] group-hover:scale-105">Ver Coleção</div>
                  </div>

                  {/* Products Grid */}
                  <div className="px-4 grid grid-cols-2 gap-2 mt-auto pb-4 sm:pb-6">
                     {[1,2].map((i) => (
                       <div key={i} className={`bg-gray-900/40 border border-gray-800/60 rounded-lg p-2.5 flex flex-col items-center transition-all duration-500 group-hover:bg-gray-800/60 group-hover:-translate-y-1 ${i===1 ? 'delay-75' : 'delay-150'}`}>
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-4 0"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>
                          <div className="w-full h-1.5 bg-gray-600/50 rounded-full mb-1.5"></div>
                          <div className="w-1/2 h-1.5 bg-blue-500/50 rounded-full"></div>
                       </div>
                     ))}
                   </div>
               </div>
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 sm:h-1.5 bg-gray-700 rounded-full z-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
