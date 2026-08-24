import React from 'react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';

export const metadata = {
  title: 'Termos de Uso | Pachyx',
  description: 'Termos e Condições de Uso da Pachyx.',
};

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-black text-gray-300 py-24 px-6">
      <FadeIn delay={0.2} direction="up">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block transition-colors">
            &larr; Voltar para a página inicial
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Termos de Uso</h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o site da Pachyx, você concorda em cumprir estes Termos de Uso. 
                Se você não concorda com qualquer parte destes termos, não deve utilizar o nosso site ou nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Nossos Serviços</h2>
              <p>
                A Pachyx oferece serviços de desenvolvimento web de elite, que incluem, mas não se limitam a, criação 
                de landing pages, sites institucionais e sistemas de gestão internos automatizados. Cada projeto 
                está sujeito a um contrato de prestação de serviços individual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo presente neste site (textos, imagens, logotipos, códigos, design) é de propriedade 
                exclusiva da Pachyx e está protegido por leis de direitos autorais. A cópia, reprodução ou distribuição 
                sem autorização expressa é estritamente proibida.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Uso do Site</h2>
              <p>
                O usuário compromete-se a utilizar o nosso site apenas para fins legais e apropriados. É proibido:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li>Tentar invadir ou danificar a nossa infraestrutura.</li>
                <li>Fornecer dados falsos através dos nossos formulários de contato.</li>
                <li>Realizar engenharia reversa em qualquer parte dos nossos sistemas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Limitação de Responsabilidade</h2>
              <p>
                A Pachyx envidará os melhores esforços para manter este site acessível e seguro. No entanto, não 
                garantimos que a operação do site será ininterrupta ou livre de erros em todos os momentos. Não 
                nos responsabilizamos por eventuais danos diretos ou indiretos decorrentes do uso deste site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Modificações dos Termos</h2>
              <p>
                Podemos revisar estes Termos de Uso a qualquer momento, sem aviso prévio. Ao continuar usando o 
                nosso site após as alterações, você concorda com a versão revisada dos termos.
              </p>
            </section>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
