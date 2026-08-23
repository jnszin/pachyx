import React from 'react';
import styles from './ServicesGrid.module.css';

const services = [
  {
    title: 'Sites de Alta Performance',
    description: 'Landing pages e websites institucionais otimizados para SEO, conversão e carregamento ultrarrápido.',
    icon: '✦'
  },
  {
    title: 'Aplicativos Nativos',
    description: 'Experiências mobile premium para iOS e Android, focadas em usabilidade e engajamento do usuário.',
    icon: '📱'
  },
  {
    title: 'Sistemas de Gestão',
    description: 'Plataformas web complexas e dashboards sob medida para automatizar e escalar suas operações.',
    icon: '⚙️'
  }
];

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Nossa Expertise</h2>
        <p className={styles.subtitle}>Soluções sob medida desenhadas para o máximo impacto.</p>
      </div>
      
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
