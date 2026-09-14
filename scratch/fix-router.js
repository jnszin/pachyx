const fs = require('fs');
let floatPath = 'c:/projetos/pachyx/components/FloatingContact.tsx';
let floatContent = fs.readFileSync(floatPath, 'utf8');
floatContent = floatContent.replace(/import { useRouter } from 'next\/navigation';\n/g, '');
floatContent = floatContent.replace(/\s*const router = useRouter\(\);\n/g, '');
fs.writeFileSync(floatPath, floatContent);
console.log('Fixed FloatingContact.tsx router');
