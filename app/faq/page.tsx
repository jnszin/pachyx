import React from 'react';
import styles from './faq.module.css';
import FadeIn from '../../components/FadeIn';

export const metadata = {
  title: 'FAQ | Pachyx',
  description: 'Tire suas dúvidas sobre nosso processo, metodologia e entregas.',
};

export default function FaqPage() {
  return (
    <main className={styles.main}>
      <FadeIn delay={0.2} direction="up">
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqHeader}>
              <h1>Perguntas Frequentes</h1>
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
      </FadeIn>
    </main>
  );
}
