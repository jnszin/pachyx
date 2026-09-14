const fs = require('fs');

const path = 'c:/projetos/pachyx/app/servicos/saas-e-mvp/page.tsx';
if (!fs.existsSync(path)) process.exit(0);
let text = fs.readFileSync(path, 'utf8');

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
                 <span className="text-[8px] text-gray-500">app.saas.com</span>
              </div>
            </div>

            {/* Conteúdo Falso (SaaS Dashboard) */}
            <div className="flex flex-col sm:flex-row gap-3 h-full overflow-hidden">
              {/* Left Column */}
              <div className="w-full sm:w-[65%] flex flex-col gap-3 h-full">
                {/* SaaS KPIs */}
                <div className="flex gap-2 sm:gap-3">
                  <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-2.5 sm:p-3 flex flex-col">
                    <span className="text-[8px] sm:text-[9px] text-gray-400 mb-1 uppercase tracking-wider">MRR Atual</span>
                    <span className="text-xs sm:text-sm font-bold text-white mb-1">R$ 58.420</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[7px] text-purple-400 font-medium">+18% m/m</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-2.5 sm:p-3 flex flex-col">
                    <span className="text-[8px] sm:text-[9px] text-gray-400 mb-1 uppercase tracking-wider">Usuários Ativos</span>
                    <span className="text-xs sm:text-sm font-bold text-white mb-1">14.502</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[7px] text-green-400 font-medium">+302 hoje</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-2.5 sm:p-3 flex flex-col">
                    <span className="text-[8px] sm:text-[9px] text-gray-400 mb-1 uppercase tracking-wider">Churn Rate</span>
                    <span className="text-xs sm:text-sm font-bold text-white mb-1">1.2%</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[7px] text-green-400 font-medium">-0.4% m/m</span>
                    </div>
                  </div>
                </div>

                {/* MRR Chart Area */}
                <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-3 flex flex-col overflow-hidden relative">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] sm:text-[10px] font-bold text-gray-300">Crescimento de Receita (MRR)</span>
                  </div>
                  {/* Fake Line Chart */}
                  <div className="flex-1 relative mt-2 border-l border-b border-gray-800/50">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                      <path d="M0,35 C15,30 25,25 35,28 C45,30 55,15 70,12 C85,8 95,5 100,2" fill="none" stroke="rgba(147,51,234,0.8)" strokeWidth="1.5" />
                      <path d="M0,40 L0,35 C15,30 25,25 35,28 C45,30 55,15 70,12 C85,8 95,5 100,2 L100,40 Z" fill="url(#purpleGrad)" opacity="0.3" />
                      <defs>
                        <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(147,51,234,1)" />
                          <stop offset="100%" stopColor="rgba(147,51,234,0)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="hidden sm:flex w-[35%] flex-col gap-3 h-full">
                {/* Plan Distribution */}
                <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-3 flex flex-col flex-1">
                   <span className="text-[9px] font-bold text-gray-300 mb-3">Distribuição de Planos</span>
                   <div className="flex flex-col gap-3 justify-center flex-1">
                      <div className="flex flex-col gap-1">
                         <div className="flex justify-between items-end">
                            <span className="text-[8px] text-gray-400">Enterprise</span>
                            <span className="text-[8px] text-white">45%</span>
                         </div>
                         <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[45%]"></div>
                         </div>
                      </div>
                      <div className="flex flex-col gap-1">
                         <div className="flex justify-between items-end">
                            <span className="text-[8px] text-gray-400">Pro</span>
                            <span className="text-[8px] text-white">35%</span>
                         </div>
                         <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-fuchsia-500 w-[35%]"></div>
                         </div>
                      </div>
                      <div className="flex flex-col gap-1">
                         <div className="flex justify-between items-end">
                            <span className="text-[8px] text-gray-400">Starter</span>
                            <span className="text-[8px] text-white">20%</span>
                         </div>
                         <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gray-500 w-[20%]"></div>
                         </div>
                      </div>
                   </div>
                </div>
                {/* Live Activity Feed */}
                <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-3 flex flex-col flex-1">
                   <span className="text-[9px] font-bold text-gray-300 mb-2">Atividade Recente</span>
                   <div className="flex flex-col gap-2 overflow-hidden">
                      <div className="flex gap-2 items-center">
                         <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400"><ArrowRight className="w-2 h-2 -rotate-45" /></div>
                         <div className="flex flex-col">
                            <span className="text-[7px] text-white font-medium">Novo upgrade (Pro)</span>
                            <span className="text-[6px] text-gray-500">Há 2 minutos</span>
                         </div>
                      </div>
                      <div className="flex gap-2 items-center">
                         <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400"><Users className="w-2 h-2" /></div>
                         <div className="flex flex-col">
                            <span className="text-[7px] text-white font-medium">Nova conta criada</span>
                            <span className="text-[6px] text-gray-500">Há 15 minutos</span>
                         </div>
                      </div>
                      <div className="flex gap-2 items-center">
                         <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400"><ArrowRight className="w-2 h-2 -rotate-45" /></div>
                         <div className="flex flex-col">
                            <span className="text-[7px] text-white font-medium">Novo upgrade (Enterprise)</span>
                            <span className="text-[6px] text-gray-500">Há 1 hora</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

const startIndex = text.indexOf('{/* Dashboard Flutuante Glassmorphism */}');
if(startIndex === -1) {
    const backupIndex = text.indexOf('{/* Dashboard Flutuante */}');
    if(backupIndex !== -1) {
        const endIndex = text.indexOf('</section>', backupIndex);
        text = text.slice(0, backupIndex) + newDashboard + '\n      ' + text.slice(endIndex);
        fs.writeFileSync(path, text);
        console.log("Success saas-e-mvp");
    }
} else {
  const endIndex = text.indexOf('</section>', startIndex);
  text = text.slice(0, startIndex) + newDashboard + '\n      ' + text.slice(endIndex);
  fs.writeFileSync(path, text);
  console.log("Success saas-e-mvp");
}
