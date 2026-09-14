const fs = require('fs');

function cleanFile(filePath, isFloatingContact = false) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove useSession import
    content = content.replace(/import { useSession } from 'next-auth\/react';\n/g, '');
    
    // Remove useSession hook
    content = content.replace(/\s*const { data: session } = useSession\(\);\n/g, '');
    content = content.replace(/\s*const { data: session, status } = useSession\(\);\n/g, '');
    
    // Replace conditional logic
    if (isFloatingContact) {
        content = content.replace(/href={session\?\.user \? "\/contato" : "\/login"}/g, 'href="/contato"');
        // also remove status === loading conditionals if they exist
        content = content.replace(/\{status === 'loading' \? \([^)]+\) : session\?\.user \? \(/g, '(');
        content = content.replace(/\) : \([\s\S]+?\)\}/g, ')'); // This is tricky, might break if not careful.
    } else {
        // HeroSection
        content = content.replace(/href={session\?\.user \? "#contato" : "\/login"}/g, 'href="/contato"');
        content = content.replace(/>\s*\{session\?\.user \? ".*" : "Criar Conta Grátis"\}\s*<\/Link>/g, '>Fale com um Especialista</Link>');
    }
    
    fs.writeFileSync(filePath, content);
}

cleanFile('c:/projetos/pachyx/components/HeroSection.tsx', false);
cleanFile('c:/projetos/pachyx/components/FloatingContact.tsx', true);
