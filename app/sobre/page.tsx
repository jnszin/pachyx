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
      <FadeIn delay={0.3} direction="none">
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
        <section className="py-24 bg-[#050505]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">O que chamamos de &quot;Empresas Visionárias&quot;?</h2>
                <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Para nós, ser visionário não é exclusividade das gigantes da tecnologia. Visionário é o dono da empresa que se cansou de controlar a operação no caderno ou em planilhas que travam. É o empreendedor que sabe que o seu negócio tem potencial para voar muito mais alto, mas está sendo puxado para baixo pela falta de processos.
                  </p>
                  <p>
                    A Pachyx existe para libertar a sua empresa das limitações operacionais. Entregamos soluções web de elite, criadas do zero, para quem faz a economia real acontecer.
                  </p>
                </div>
              </div>
              <div className="relative h-100 w-full rounded-3xl overflow-hidden border border-gray-800">
                <Image 
                  src="/office-team.jpg" 
                  alt="Visão Pachyx" 
                  fill
                  style={{ objectFit: 'cover' }} 
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="py-24 bg-black border-t border-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-12 p-10 md:p-16 flex flex-col justify-center max-w-4xl mx-auto">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-blue-900/20 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-900/30">
                      QUEM ESTÁ POR TRÁS
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Mais do que criar interfaces, a proposta é construir infraestrutura digital com lógica de operação corporativa.
                  </h2>
                  
                  <div className="space-y-5 text-[#a1aabf] leading-relaxed">
                    <p>
                      A Pachyx foi idealizada por Jonas Alves Pacheco com foco em uma ideia central: desenvolver engenharia de software que ajude as empresas a operarem melhor de verdade, substituindo o amadorismo e as planilhas pesadas por sistemas web profissionais e confiáveis.
                    </p>
                    <p>
                      Com apenas 20 anos, mas com uma formação técnica sólida em Redes de Computadores e graduação em andamento em Análise e Desenvolvimento de Sistemas, Jonas construiu sua experiência atuando diretamente na infraestrutura de TI corporativa. Foi essa paixão pela tecnologia e a curiosidade profunda de entender como tudo funciona por trás das telas que moldou a visão da agência.
                    </p>
                    <p>
                      O trabalho parte de uma visão consultiva e prática. Em vez de empurrar plataformas genéricas, o objetivo é entender os processos internos, identificar gargalos e construir a tecnologia que fará sentido na rotina real dos times — unindo sistemas, dados e crescimento como partes inseparáveis do seu negócio.
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-gray-800">
                    <div className="text-white font-bold text-lg">Jonas Alves Pacheco</div>
                    <div className="text-gray-500 text-sm mt-1">Fundador & Engenharia de Software, Pachyx</div>
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
