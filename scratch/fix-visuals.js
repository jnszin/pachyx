const fs = require('fs');

// 1. HEADER
const headerPath = 'c:/projetos/pachyx/components/Header.tsx';
let headerContent = fs.readFileSync(headerPath, 'utf8');

// Replace "Inicie seu Projeto" with button styles, and remove "Fale Conosco" block
headerContent = headerContent.replace(
  /\<Link\s*\n\s*href="\/contato"\s*\n\s*className=\{styles\.navLink\}\s*\n\s*onClick=\{([^}]*)\}\s*\n\s*\>\s*Inicie seu Projeto\s*\<\/Link\>/m,
  `<Link 
              href="/contato" 
              className="px-5 py-2 bg-gray-900 border border-gray-800 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-sm flex items-center justify-center"
              onClick={$1}
            >
              Inicie seu Projeto
            </Link>`
);

headerContent = headerContent.replace(
  /\{\/\*\s*Fale Conosco Button[\s\S]*?\<\/div\>/m,
  ''
);
fs.writeFileSync(headerPath, headerContent);


// 2. SOBRE PAGE (Remove image)
const sobrePath = 'c:/projetos/pachyx/app/sobre/page.tsx';
let sobreContent = fs.readFileSync(sobrePath, 'utf8');

// The code block has:
// <div className="grid grid-cols-1 md:grid-cols-12">
//   <div className="md:col-span-5 relative min-h-[400px] md:min-h-full"> ... </div>
//   <div className="md:col-span-7 p-10 md:p-14 flex flex-col justify-center">

sobreContent = sobreContent.replace(
  /\<div className="grid grid-cols-1 md:grid-cols-12"\>\s*\<div className="md:col-span-5 relative min-h-\[400px\] md:min-h-full"\>[\s\S]*?\<\/div\>\s*\<div className="md:col-span-7 p-10 md:p-14 flex flex-col justify-center"\>/m,
  `<div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-12 p-10 md:p-16 flex flex-col justify-center max-w-4xl mx-auto">`
);

fs.writeFileSync(sobrePath, sobreContent);

console.log('Header and Sobre fixed.');
