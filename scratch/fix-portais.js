const fs = require('fs');

const path = 'c:/projetos/pachyx/app/servicos/portais-web/page.tsx';
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
                 <span className="text-[8px] text-gray-500">portal.pachyx.com</span>
              </div>
            </div>

            {/* Conteúdo Falso (Intranet / Portal UI) */}
            <div className="flex flex-col sm:flex-row gap-4 h-full overflow-hidden">
              {/* Left Sidebar (Links úteis) - Hidden on mobile */}
              <div className="hidden sm:flex w-[25%] lg:w-[20%] h-full bg-gray-900/40 rounded-xl p-3 flex-col gap-4 border border-gray-800/50">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-gray-300 uppercase tracking-wider mb-1">Departamentos</span>
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-teal-600/10 border border-teal-500/20 rounded-lg text-teal-400">
                    <div className="w-3.5 h-3.5 rounded bg-teal-500/20 flex items-center justify-center"><Users className="w-2.5 h-2.5" /></div>
                    <span className="text-[9px] font-medium">Recursos Humanos</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400 hover:text-gray-200">
                    <div className="w-3.5 h-3.5 rounded bg-gray-800 flex items-center justify-center"><Box className="w-2.5 h-2.5" /></div>
                    <span className="text-[9px] font-medium">TI & Suporte</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400 hover:text-gray-200">
                    <div className="w-3.5 h-3.5 rounded bg-gray-800 flex items-center justify-center"><CreditCard className="w-2.5 h-2.5" /></div>
                    <span className="text-[9px] font-medium">Financeiro</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-gray-300 uppercase tracking-wider mb-1">Links Rápidos</span>
                  <span className="text-[8px] text-teal-400 font-medium px-2">• Solicitar Férias</span>
                  <span className="text-[8px] text-gray-400 hover:text-gray-200 px-2">• Holerite Mês Atual</span>
                  <span className="text-[8px] text-gray-400 hover:text-gray-200 px-2">• Ramais Internos</span>
                </div>
              </div>

              {/* Main Feed Area */}
              <div className="flex-1 flex flex-col gap-3 h-full">
                {/* Search / Status Box */}
                <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-2.5 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-600/20 border border-teal-500/30 flex items-center justify-center">
                    <Users className="w-3 h-3 text-teal-400" />
                  </div>
                  <div className="flex-1 h-6 bg-gray-950 rounded-lg border border-gray-800 flex items-center px-2">
                    <span className="text-[9px] text-gray-500">Compartilhe uma atualização com a equipe...</span>
                  </div>
                </div>

                {/* Feed Posts */}
                <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
                  {/* Post 1 */}
                  <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gray-700"></div>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-white font-medium">Diretoria Corporativa</span>
                          <span className="text-[7px] text-gray-500">Há 2 horas • Comunicado Oficial</span>
                        </div>
                      </div>
                      <span className="px-1.5 py-0.5 rounded border border-teal-500/30 bg-teal-500/10 text-teal-400 text-[6px]">Geral</span>
                    </div>
                    <span className="text-[11px] font-bold text-white mt-1">Resultados do 3º Trimestre batem recorde</span>
                    <span className="text-[8px] text-gray-400 leading-relaxed">
                      É com grande alegria que anunciamos que ultrapassamos nossa meta anual em apenas 9 meses. Parabéns a todas as equipes pelo excelente trabalho...
                    </span>
                    <div className="w-full h-16 sm:h-20 bg-teal-900/20 rounded-lg border border-teal-800/30 mt-1 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-teal-500/50" />
                    </div>
                  </div>

                  {/* Post 2 */}
                  <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-800/50"></div>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-white font-medium">Recursos Humanos</span>
                          <span className="text-[7px] text-gray-500">Ontem às 14:30 • Eventos</span>
                        </div>
                      </div>
                      <span className="px-1.5 py-0.5 rounded border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[6px]">Social</span>
                    </div>
                    <span className="text-[11px] font-bold text-white mt-1">Festa de Confraternização de Fim de Ano 🎉</span>
                    <span className="text-[8px] text-gray-400 leading-relaxed">
                      Reserve a data! Nossa festa anual acontecerá no dia 15 de Dezembro no clube central. Por favor, confirmem presença até sexta-feira respondendo ao formulário.
                    </span>
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
        console.log("Success portais-web");
    }
} else {
  const endIndex = text.indexOf('</section>', startIndex);
  text = text.slice(0, startIndex) + newDashboard + '\n      ' + text.slice(endIndex);
  fs.writeFileSync(path, text);
  console.log("Success portais-web");
}
