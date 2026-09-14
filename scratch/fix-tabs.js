const fs = require('fs');

const pages = [
  {
    path: 'c:/projetos/pachyx/app/servicos/sites-corporativos/page.tsx',
    theme: 'emerald'
  },
  {
    path: 'c:/projetos/pachyx/app/servicos/sistemas-erp/page.tsx',
    theme: 'blue'
  },
  {
    path: 'c:/projetos/pachyx/app/servicos/saas-e-mvp/page.tsx',
    theme: 'purple'
  },
  {
    path: 'c:/projetos/pachyx/app/servicos/crm-personalizado/page.tsx',
    theme: 'amber'
  },
  {
    path: 'c:/projetos/pachyx/app/servicos/portais-web/page.tsx',
    theme: 'teal'
  }
];

pages.forEach(p => {
  if (!fs.existsSync(p.path)) return;
  let text = fs.readFileSync(p.path, 'utf8');

  // Fix the active tab button style
  text = text.replace(/bg-white text-black text-white shadow-lg border border-gray-500/g, `bg-${p.theme}-600 text-white shadow-lg border border-${p.theme}-500`);
  
  // Fix the CTA button in CRM and any other page that has the glitch
  text = text.replace(/bg-white text-black text-black hover:bg-gray-9000/g, `bg-${p.theme}-600 text-white hover:bg-${p.theme}-500`);

  fs.writeFileSync(p.path, text);
});
console.log("Fixed tab buttons and broken CTA");
