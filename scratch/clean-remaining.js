const fs = require('fs');

// Fix FloatingContact.tsx
let floatPath = 'c:/projetos/pachyx/components/FloatingContact.tsx';
let floatContent = fs.readFileSync(floatPath, 'utf8');
floatContent = floatContent.replace(/import { useSession } from 'next-auth\/react';\n/g, '');
floatContent = floatContent.replace(/\s*const { data: session } = useSession\(\);\n/g, '');
floatContent = floatContent.replace(/\s*if \(\!session\?\.user\) \{\n\s*router\.push\('\/login'\);\n\s*return;\n\s*\}/g, '');
fs.writeFileSync(floatPath, floatContent);
console.log('Fixed FloatingContact.tsx');

// Fix HeroSection.tsx
let heroPath = 'c:/projetos/pachyx/components/HeroSection.tsx';
let heroContent = fs.readFileSync(heroPath, 'utf8');
heroContent = heroContent.replace(/import { useSession } from 'next-auth\/react';\n/g, '');
heroContent = heroContent.replace(/\s*const { data: session } = useSession\(\);\n/g, '');
heroContent = heroContent.replace(/href=\{session\?\.user \? "#contato" : "\/login"\}/g, 'href="#contato"');
heroContent = heroContent.replace(/\{session\?\.user \? "Acessar Área do Cliente" : "Criar Conta Grátis"\}/g, '"Inicie seu Projeto"'); // Just in case it was written like this
heroContent = heroContent.replace(/\{session\?\.user \? ".*" : ".*"\}/g, '"Inicie seu Projeto"'); 
fs.writeFileSync(heroPath, heroContent);
console.log('Fixed HeroSection.tsx');
