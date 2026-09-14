const fs = require('fs');

const path = 'c:/projetos/pachyx/components/FAQSection.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace background color of section
content = content.replace(/style=\{\{ backgroundColor: '#0f172a' \}\}/, 'className="py-24 bg-[#050505] border-y border-gray-900"'); // Replace inline style with className

// Fix the inline style that was originally there for section
content = content.replace(/<section className="py-24" style=\{\{ backgroundColor: '#0f172a' \}\}>/, '<section className="py-24 bg-[#050505] border-y border-gray-900">');

// Replace accordion colors
content = content.replace(/backgroundColor: isOpen \? '#1e293b' : '#0f172a'/g, "backgroundColor: isOpen ? '#111111' : '#0a0a0a'");
content = content.replace(/borderColor: isOpen \? '#334155' : '#1e293b'/g, "borderColor: isOpen ? '#333333' : '#1f1f1f'");
content = content.replace(/backgroundColor: isOpen \? '#334155' : 'transparent'/g, "backgroundColor: isOpen ? '#333333' : 'transparent'");
content = content.replace(/stroke=\{isOpen \? "white" : "#94a3b8"\}/g, 'stroke={isOpen ? "white" : "#666666"}');

// Replace text colors
content = content.replace(/text-\[\#94a3b8\]/g, 'text-gray-400'); // the subtitle
content = content.replace(/text-\[\#94a3b8\]/g, 'text-gray-400'); // the answer text

fs.writeFileSync(path, content);
console.log('FAQ colors updated.');
