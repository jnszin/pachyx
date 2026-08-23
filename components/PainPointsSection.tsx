import React from 'react';
import styles from './PainPointsSection.module.css';

const painPoints = [
  {
    title: 'Perda de Conversão',
    description: 'Sistemas lentos e designs genéricos frustram seus clientes antes mesmo deles conhecerem seu produto.',
    icon: '📉'
  },
  {
    title: 'Limitação de Escala',
    description: 'Soluções de prateleira engessam seu crescimento. Quando sua empresa traciona, a tecnologia falha.',
    icon: '🚧'
  },
  {
    title: 'Processos Manuais',
    description: 'Sua equipe perde horas em tarefas repetitivas porque seu software atual não se integra ao seu fluxo de trabalho.',
    icon: '⏳'
  }
];

export default function PainPointsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            A tecnologia atual está <span className={styles.highlight}>freando</span> seu negócio?
          </h2>
          <p className={styles.subtitle}>
            Empresas que não investem em experiências digitais premium estão deixando dinheiro na mesa todos os dias.
          </p>
        </div>
        
        <div className={styles.grid}>
          {painPoints.map((pain, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{pain.icon}</div>
              <h3 className={styles.cardTitle}>{pain.title}</h3>
              <p className={styles.cardDescription}>{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
