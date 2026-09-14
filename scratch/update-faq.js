const fs = require('fs');
const faqPath = 'c:/projetos/pachyx/components/FAQSection.tsx';

const newFaqs = `const faqs = [
  {
    question: "Por que escolher a Pachyx ao invés de manter a operação em planilhas?",
    answer: "Planilhas são ótimas para rascunhos, mas perigosas para escalar. Elas geram retrabalho, lentidão, falhas de segurança e dificultam a visão geral da empresa. Nossos sistemas automatizam sua rotina, travam vazamentos financeiros e criam uma infraestrutura robusta para o seu negócio crescer sem amadorismo."
  },
  {
    question: "Vocês utilizam templates genéricos para criar os sites e sistemas?",
    answer: "Não. Na Pachyx, trabalhamos com desenvolvimento 'Artesanal'. Cada tela, banco de dados e lógica é programada do absoluto zero e sob medida para a sua necessidade. Isso garante máxima velocidade, segurança e uma solução que se adapta ao seu negócio (e não o contrário)."
  },
  {
    question: "Quanto tempo leva para tirar minha ideia do papel?",
    answer: "O prazo varia de acordo com o nível da solução. Um site corporativo pode levar algumas semanas, enquanto um ERP ou MVP complexo pode levar meses. No entanto, nós trabalhamos com entregas parciais: você já começa a colher resultados nas primeiras semanas enquanto continuamos desenvolvendo o restante."
  },
  {
    question: "Como funciona o suporte e acompanhamento após a entrega?",
    answer: "Nós entramos no jogo como seus Parceiros de Crescimento. Não entregamos um projeto e desaparecemos. Assumimos o papel do seu braço tecnológico de longo prazo, fornecendo manutenção, escalabilidade e novas melhorias contínuas para o seu sistema."
  },
  {
    question: "A Pachyx cuida da infraestrutura e hospedagem do sistema?",
    answer: "Sim! Nós entregamos a solução funcionando de ponta a ponta. Configuramos servidores modernos em nuvem, bancos de dados seguros e domínios. O seu único trabalho será usar a ferramenta para alavancar suas vendas e gerir sua equipe."
  }
];`;

let faqContent = fs.readFileSync(faqPath, 'utf8');

// replace the old const faqs array with the new one
faqContent = faqContent.replace(/const faqs = \[[\s\S]*?\];/m, newFaqs);

fs.writeFileSync(faqPath, faqContent);
console.log('Updated FAQSection.');
