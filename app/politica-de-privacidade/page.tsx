import React from 'react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';

export const metadata = {
  title: 'Política de Privacidade | Pachyx',
  description: 'Política de Privacidade da Pachyx.',
};

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-black text-gray-300 py-24 px-6">
      <FadeIn delay={0.2} direction="up">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block transition-colors">
            &larr; Voltar para a página inicial
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Política de Privacidade</h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introdução</h2>
              <p>
                A Pachyx respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. 
                Esta política explica como coletamos, usamos e protegemos as suas informações quando você acessa 
                o nosso site e utiliza os nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Dados que Coletamos</h2>
              <p>
                Coletamos as informações que você nos fornece voluntariamente por meio do nosso formulário de contato, 
                que incluem:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li>Nome completo</li>
                <li>E-mail corporativo</li>
                <li>Número de telefone / WhatsApp</li>
                <li>Detalhes sobre as necessidades do seu projeto</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Como Usamos Seus Dados</h2>
              <p>
                Utilizamos as suas informações exclusivamente para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li>Entrar em contato com você para discutir o seu projeto e entender suas necessidades.</li>
                <li>Enviar orçamentos e propostas comerciais.</li>
                <li>Melhorar os nossos serviços de desenvolvimento e atendimento ao cliente.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Compartilhamento de Dados</h2>
              <p>
                A Pachyx não vende, não aluga e não compartilha as suas informações pessoais com terceiros. 
                Os seus dados são mantidos em estrito sigilo e acessados apenas pela nossa equipe técnica e comercial 
                diretamente envolvida no seu atendimento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Segurança</h2>
              <p>
                Adotamos as melhores práticas de segurança da informação e utilizamos infraestrutura de ponta 
                para proteger os seus dados contra acessos não autorizados, perdas ou alterações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Seus Direitos</h2>
              <p>
                Você tem o direito de solicitar a exclusão, correção ou acesso aos seus dados que estão em nossa 
                base a qualquer momento. Para isso, basta entrar em contato conosco pelo e-mail: 
                <a href="mailto:jonasalvespacheco@gmail.com" className="text-blue-500 hover:underline ml-1">
                  jonasalvespacheco@gmail.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
