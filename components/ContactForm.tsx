'use client';

import React from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Vamos Construir Juntos</h2>
          <p className={styles.subtitle}>
            Conte-nos sobre o seu desafio. Nossa equipe técnica entrará em contato em breve.
          </p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Nome Completo</label>
            <input 
              type="text" 
              id="name" 
              className={styles.input} 
              placeholder="Como prefere ser chamado" 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="whatsapp" className={styles.label}>WhatsApp / Telefone</label>
            <input 
              type="tel" 
              id="whatsapp" 
              className={styles.input} 
              placeholder="(00) 00000-0000" 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="description" className={styles.label}>Descrição do Projeto</label>
            <textarea 
              id="description" 
              className={styles.textarea} 
              placeholder="Descreva brevemente o que você precisa..."
              rows={4}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Solicitar Orçamento
          </button>
        </form>
      </div>
    </section>
  );
}
