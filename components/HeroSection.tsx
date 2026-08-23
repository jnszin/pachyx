import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Transformamos Ideias em <br />
          <span className={styles.highlight}>Soluções Digitais.</span>
        </h1>
        <p className={styles.subtitle}>
          Engenharia de software de ponta focada em lucro, escalabilidade e eficiência para o seu negócio.
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryButton}>Inicie seu Projeto</button>
        </div>
      </div>
      
      <div className={styles.mockupContainer}>
        {/* Placeholder for realistic mockup */}
        <div className={styles.mockupPlaceholder}>
          <div className={styles.mockupGlow}></div>
          <span className={styles.mockupText}>Mockup Area (Notebook & Mobile)</span>
        </div>
      </div>
    </section>
  );
}
