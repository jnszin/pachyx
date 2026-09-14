const fs = require('fs');

function fixImports(file, newImports) {
    let content = fs.readFileSync(file, 'utf8');
    const lucideMatch = content.match(/} from 'lucide-react';/);
    if (lucideMatch) {
        content = content.replace(/} from 'lucide-react';/, `, ${newImports.join(', ')} } from 'lucide-react';`);
        fs.writeFileSync(file, content);
        console.log("Fixed " + file);
    } else {
        console.log("Lucide not found in " + file);
    }
}

fixImports('c:/projetos/pachyx/app/servicos/crm-personalizado/page.tsx', ['Users']);
fixImports('c:/projetos/pachyx/app/servicos/portais-web/page.tsx', ['Users', 'CreditCard', 'BarChart3', 'Box']);
