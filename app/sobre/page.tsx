import React from 'react';
import styles from './sobre.module.css';
import Image from 'next/image';
import FadeIn from '../../components/FadeIn';

export const metadata = {
  title: 'Quem Somos | Pachyx',
  description: 'Conheça a história e os valores da Pachyx, a sua agência de desenvolvimento premium.',
};

export default function SobrePage() {
  return (
    <main className={styles.main}>
      <FadeIn delay={0.5} direction="none">
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.badge}>Nossa História</div>
            <h1 className={styles.title}>
              Desenvolvimento de elite para <br />
              <span className={styles.highlight}>empresas visionárias.</span>
            </h1>
            <p className={styles.subtitle}>
              Acreditamos que o software deve ser um diferencial competitivo, e não um centro de custos.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className={styles.storySection}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.textContent}>
                <h2>O que chamamos de &quot;Empresas Visionárias&quot;?</h2>
                <p>
                  Para nós, ser visionário não é exclusividade das gigantes da tecnologia. Visionário é o dono da ótica que se cansou de controlar o estoque no caderno. É o empreendedor do e-commerce que passa horas respondendo mensagens manuais e sabe que o seu negócio tem potencial para voar muito mais alto. Nós entendemos essa realidade.
                </p>
                <p>
                  A Pachyx existe para libertar a sua empresa das planilhas confusas e dos processos lentos que travam o seu crescimento, entregando soluções web de elite para quem faz a economia real acontecer.
                </p>
              </div>
              <div className={styles.imagePlaceholder}>
                <Image 
                  src="/office-team.jpg" 
                  alt="Escritório e equipe de desenvolvimento da Pachyx" 
                  fill
                  style={{ objectFit: 'cover', opacity: 0.8 }} 
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="py-24 bg-[#050505] border-y border-gray-900">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white tracking-tight">O Código Pachyx: Nossos Pilares</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Para promover essa verdadeira transformação digital, não pegamos atalhos. Todo o nosso trabalho é sustentado por três regras inegociáveis:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-blue-900 transition-colors">
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Artesanato Digital</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Não acreditamos em templates prontos ou sistemas de prateleira. Construímos a sua solução do zero, com código limpo, garantindo que o seu negócio tenha uma base exclusiva, segura e indestrutível.
                </p>
              </div>

              <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-emerald-900 transition-colors">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 text-emerald-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Performance é Lucro</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Velocidade não é um luxo, é conversão. Desenvolvemos infraestruturas ultrarrápidas para que o seu cliente final tenha uma experiência fluida e nunca abandone uma compra por lentidão.
                </p>
              </div>

              <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-purple-900 transition-colors">
                <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Parceiros de Crescimento</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Não entregamos um projeto para depois desaparecer. Assumimos o papel de braço tecnológico da sua empresa, focados em relacionamentos de longo prazo para ver a sua operação escalar sem atritos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="py-24 bg-black">
          <div className={styles.container}>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white tracking-tight">A Engenharia por Trás da Mágica</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Muitos acham que contratar tecnologia é um processo obscuro, mas nós transformamos isso em uma jornada transparente e segura em três passos:
                </p>
              </div>
              
              <div className="lg:w-2/3 space-y-6">
                <div className="flex gap-6 p-6 border border-gray-800 bg-[#0a0a0a] rounded-2xl items-start group hover:bg-gray-900/50 transition-colors">
                  <div className="text-4xl font-black text-gray-800 group-hover:text-blue-500 transition-colors">1.</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">O Diagnóstico</h3>
                    <p className="text-gray-400 text-sm">Mergulhamos na sua rotina para encontrar exatamente onde estão os gargalos invisíveis que estão limitando o seu lucro.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border border-gray-800 bg-[#0a0a0a] rounded-2xl items-start group hover:bg-gray-900/50 transition-colors">
                  <div className="text-4xl font-black text-gray-800 group-hover:text-emerald-500 transition-colors">2.</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">A Arquitetura</h3>
                    <p className="text-gray-400 text-sm">Nosso time desenha o site de alta conversão ou o sistema de gestão perfeito, milimetricamente adaptado para a realidade da sua operação.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border border-gray-800 bg-[#0a0a0a] rounded-2xl items-start group hover:bg-gray-900/50 transition-colors">
                  <div className="text-4xl font-black text-gray-800 group-hover:text-purple-500 transition-colors">3.</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">A Escala</h3>
                    <p className="text-gray-400 text-sm">Entregamos a chave de uma verdadeira máquina de resultados e continuamos ao seu lado para garantir que ela opere sempre em seu potencial máximo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
