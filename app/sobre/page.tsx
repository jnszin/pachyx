import React from 'react';
import styles from './sobre.module.css';

export const metadata = {
  title: 'Quem Somos | Pachyx',
  description: 'Conheça a história e os valores da Pachyx, a sua agência de desenvolvimento premium.',
};

export default function SobrePage() {
  return (
    <main className={styles.main}>
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

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2>Como tudo começou</h2>
              <p>
                A Pachyx nasceu de uma frustração comum: víamos empresas incríveis sendo limitadas por tecnologias arcaicas, 
                agências que entregavam templates lentos e sistemas de prateleira que quebravam sob pressão.
              </p>
              <p>
                Decidimos mudar as regras do jogo. Reunimos um time de engenheiros de software obcecados por performance, 
                designers focados na experiência do usuário e estrategistas de negócio. 
              </p>
              <p>
                Nossa missão é simples: construir infraestruturas digitais que permitam aos nossos clientes escalar sem atritos. 
                Cada projeto que assinamos é uma obra de engenharia, otimizada para o máximo de velocidade, segurança e conversão.
              </p>
            </div>
            <div className={styles.imagePlaceholder}>
              <div className={styles.glow}></div>
              <span>Foto da Equipe / Escritório</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <h2>Perguntas Frequentes</h2>
            <p>Tire suas dúvidas sobre nosso processo e metodologia.</p>
          </div>

          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>Vocês usam templates WordPress ou construtores de sites?</h3>
              <p>Não. Todo o nosso código é feito sob medida (custom-coded) utilizando tecnologias modernas como React e Next.js. Isso garante um carregamento quase instantâneo e total liberdade de customização para o seu negócio.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Quanto tempo leva para desenvolver um projeto?</h3>
              <p>O cronograma varia conforme a complexidade. Landing pages de alta conversão geralmente levam de 2 a 4 semanas. Sistemas web complexos e aplicativos nativos podem levar de 2 a 6 meses. Após o escopo, fornecemos um prazo blindado.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Vocês dão suporte após a entrega?</h3>
              <p>Sim. Oferecemos pacotes de manutenção contínua, monitoramento de performance e SLAs de correção rápida para garantir que a sua operação nunca pare.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>O código será da minha empresa?</h3>
              <p>Absolutamente. Após a conclusão e pagamento do projeto, a propriedade intelectual e o código-fonte são 100% transferidos para você.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
