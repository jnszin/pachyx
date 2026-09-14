const fs = require('fs');

const path = 'c:/projetos/pachyx/app/servicos/sites-corporativos/page.tsx';
let text = fs.readFileSync(path, 'utf8');

// The exact new content for the fake dashboard in sites-corporativos
const newDashboard = `        {/* Dashboard Flutuante Glassmorphism */}
        <div className="relative w-full max-w-4xl mx-auto z-10 perspective-[2000px]">
          <div className="absolute -inset-1 bg-linear-to-r from-gray-700 to-gray-900 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
          
          <div className="relative w-full aspect-[4/3] sm:aspect-video bg-gray-950/80 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 overflow-hidden">
            {/* Header Falso */}
            <div className="flex items-center justify-between border-b border-gray-800/60 pb-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="h-5 w-32 bg-gray-900 rounded-md border border-gray-800 flex items-center px-2 justify-center">
                 <span className="text-[8px] text-gray-500">www.seusite.com.br</span>
              </div>
            </div>

            {/* Conteúdo Falso (Mockup Site + Lighthouse) */}
            <div className="relative flex-1 rounded-xl border border-gray-800/50 overflow-hidden bg-gray-900/30">
              {/* Fake Website UI */}
              <div className="absolute inset-0 flex flex-col opacity-40">
                {/* Nav */}
                <div className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-800/30">
                  <div className="w-16 h-3 sm:w-20 sm:h-4 bg-gray-700/50 rounded"></div>
                  <div className="hidden sm:flex gap-4">
                    <div className="w-10 h-2 bg-gray-800 rounded"></div>
                    <div className="w-10 h-2 bg-gray-800 rounded"></div>
                    <div className="w-10 h-2 bg-gray-800 rounded"></div>
                  </div>
                  <div className="w-12 h-4 sm:w-16 sm:h-6 bg-emerald-600/30 rounded"></div>
                </div>
                {/* Hero */}
                <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 text-center gap-3">
                  <div className="w-3/4 sm:w-1/2 h-6 sm:h-10 bg-gray-700/60 rounded-lg"></div>
                  <div className="w-2/3 sm:w-1/3 h-4 bg-gray-800/50 rounded mt-2"></div>
                  <div className="w-1/2 sm:w-1/4 h-4 bg-gray-800/50 rounded"></div>
                  <div className="w-24 h-8 sm:w-32 sm:h-10 bg-emerald-600/40 rounded-xl mt-4"></div>
                </div>
                {/* Cards (Products/Features) */}
                <div className="h-24 sm:h-32 flex gap-3 sm:gap-4 p-4 border-t border-gray-800/30">
                  <div className="flex-1 bg-gray-800/30 rounded-lg"></div>
                  <div className="flex-1 bg-gray-800/30 rounded-lg"></div>
                  <div className="hidden sm:block flex-1 bg-gray-800/30 rounded-lg"></div>
                </div>
              </div>

              {/* Lighthouse Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-0">
                <div className="bg-gray-950/70 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col items-center max-w-full">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] sm:text-xs font-bold text-emerald-100 tracking-wider">LIGHTHOUSE SCORES</span>
                  </div>
                  
                  <div className="flex gap-3 sm:gap-8 flex-wrap sm:flex-nowrap justify-center">
                    {/* Circulo 1 */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-[3px] sm:border-4 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(5,150,105,0.4)] bg-gray-900/50">
                          <span className="text-emerald-400 font-bold text-lg sm:text-2xl">100</span>
                       </div>
                       <span className="text-gray-300 text-[6px] sm:text-[9px] font-mono tracking-wider">PERFORMANCE</span>
                    </div>
                    {/* Circulo 2 */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-[3px] sm:border-4 border-emerald-500 flex items-center justify-center bg-gray-900/50">
                          <span className="text-emerald-400 font-bold text-lg sm:text-2xl">98</span>
                       </div>
                       <span className="text-gray-300 text-[6px] sm:text-[9px] font-mono tracking-wider">ACESSIBILIDADE</span>
                    </div>
                    {/* Circulo 3 */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-[3px] sm:border-4 border-emerald-500 flex items-center justify-center bg-gray-900/50">
                          <span className="text-emerald-400 font-bold text-lg sm:text-2xl">100</span>
                       </div>
                       <span className="text-gray-300 text-[6px] sm:text-[9px] font-mono tracking-wider">PRÁTICAS</span>
                    </div>
                    {/* Circulo 4 */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-[3px] sm:border-4 border-emerald-500 flex items-center justify-center bg-gray-900/50">
                          <span className="text-emerald-400 font-bold text-lg sm:text-2xl">100</span>
                       </div>
                       <span className="text-gray-300 text-[6px] sm:text-[9px] font-mono tracking-wider">SEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

// Replace from "Dashboard Flutuante Glassmorphism" up to closing section tag
const startIndex = text.indexOf('{/* Dashboard Flutuante Glassmorphism */}');
if(startIndex !== -1) {
  const endIndex = text.indexOf('</section>', startIndex);
  if(endIndex !== -1) {
    text = text.slice(0, startIndex) + newDashboard + '\n      ' + text.slice(endIndex);
    fs.writeFileSync(path, text);
    console.log("Success");
  } else {
    console.log("End not found");
  }
} else {
  console.log("Start not found");
}
