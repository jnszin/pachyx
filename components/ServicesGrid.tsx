'use client';

import React, { useState } from 'react';
import styles from './ServicesGrid.module.css';

const services = [
  {
    title: 'Sites de Alta Performance',
    description: 'Landing pages e websites institucionais otimizados para SEO, conversão e carregamento ultrarrápido.',
    details: 'Desenvolvemos plataformas web de ponta que combinam design premium com métricas perfeitas de performance (Lighthouse 100). Implementamos arquiteturas modernas que garantem segurança absoluta, escalabilidade e uma experiência de navegação instantânea. Seu site deixa de ser um cartão de visitas e passa a ser uma máquina de aquisição de clientes.',
    icon: '✦'
  },
  {
    title: 'Aplicativos Nativos',
    description: 'Experiências mobile premium para iOS e Android, focadas em usabilidade e engajamento do usuário.',
    details: 'Transformamos sua visão em um aplicativo robusto e elegante. Nossa engenharia foca em interfaces responsivas, animações fluidas e integrações com o hardware do dispositivo. Seja para uso interno da sua equipe ou para seus clientes finais, o app terá um nível de acabamento comparável aos líderes de mercado.',
    icon: '📱'
  },
  {
    title: 'Sistemas de Gestão',
    description: 'Plataformas web complexas e dashboards sob medida para automatizar e escalar suas operações.',
    details: 'Digitalizamos e otimizamos os processos da sua empresa. Construímos CRMs personalizados, sistemas de controle e ERPs sob medida que se adaptam ao seu modelo de negócio, e não o contrário. Tenha total controle dos seus dados com automações que poupam centenas de horas da sua equipe.',
    icon: '⚙️'
  }
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Fecha o modal ao pressionar ESC
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Nossa Expertise</h2>
        <p className={styles.subtitle}>Soluções sob medida desenhadas para o máximo impacto.</p>
      </div>
      
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div 
            key={index} 
            className={styles.card} 
            onClick={() => setSelectedService(service)}
            role="button"
            tabIndex={0}
          >
            <div className={styles.iconWrapper}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
            <span className={styles.knowMore}>Saiba mais ➔</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className={styles.modalOverlay} onClick={() => setSelectedService(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton} 
              onClick={() => setSelectedService(null)}
              aria-label="Fechar"
            >
              ×
            </button>
            <div className={styles.modalIcon}>{selectedService.icon}</div>
            <h3 className={styles.modalTitle}>{selectedService.title}</h3>
            <p className={styles.modalDescription}>{selectedService.description}</p>
            <div className={styles.modalDivider}></div>
            <p className={styles.modalDetails}>{selectedService.details}</p>
            <button 
              className={styles.modalCta}
              onClick={() => {
                setSelectedService(null);
                // Future integration: scroll to contact form
              }}
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
