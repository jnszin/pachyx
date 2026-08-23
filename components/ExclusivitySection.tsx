import React from 'react';
import styles from './ExclusivitySection.module.css';

export default function ExclusivitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.badge}>Artesanal & Premium</div>
            <h2 className={styles.title}>
              Sem templates. Sem atalhos. <br />
              <span className={styles.highlight}>100% Exclusivo.</span>
            </h2>
            <div className={styles.story}>
              <p>
                Acreditamos que o núcleo do seu negócio não pode rodar em cima de soluções prontas que engessam a sua operação. 
              </p>
              <p>
                Na Pachyx, cada projeto começa com uma folha em branco. Mergulhamos na lógica da sua empresa para desenhar e desenvolver uma arquitetura de software sob medida. Cada linha de código, cada pixel e cada integração são projetados para resolver os <strong>seus</strong> problemas específicos.
              </p>
              <p>
                O resultado? Uma plataforma digital rápida, segura e impossível de ser copiada pelos seus concorrentes.
              </p>
            </div>
            
            <ul className={styles.featureList}>
              <li>
                <span className={styles.check}>✓</span> Arquitetura escalável desde o Dia 1
              </li>
              <li>
                <span className={styles.check}>✓</span> Design system proprietário
              </li>
              <li>
                <span className={styles.check}>✓</span> Performance de ponta (Edge computing)
              </li>
            </ul>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.codeWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.codeContent}>
                <pre>
                  <code>
<span className={styles.codeComment}>{"// Engineered specifically for your business logic"}</span><br/>
<span className={styles.codeKeyword}>export async function</span> <span className={styles.codeFunction}>processCustomWorkflow</span>(data: CoreData) {'{'}<br/>
&nbsp;&nbsp;<span className={styles.codeKeyword}>const</span> insights = <span className={styles.codeKeyword}>await</span> ai.analyze(data);<br/>
&nbsp;&nbsp;<span className={styles.codeKeyword}>return</span> architecture.scale(insights);<br/>
{'}'}
                  </code>
                </pre>
              </div>
            </div>
            <div className={styles.glow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
