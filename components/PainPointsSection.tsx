'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './PainPointsSection.module.css';

const carouselItems = [
  {
    type: 'pain',
    title: 'Perda de Conversão',
    description: 'Sistemas lentos e designs genéricos frustram seus clientes antes mesmo deles conhecerem seu produto.',
    details: 'A cada segundo a mais no tempo de carregamento da sua página, as conversões caem em até 20%. Quando o design do site não transmite profissionalismo, o usuário instintivamente desconfia do seu produto. Nós identificamos e eliminamos esses gargalos técnicos e visuais para maximizar suas vendas.',
    icon: '📉'
  },
  {
    type: 'pain',
    title: 'Limitação de Escala',
    description: 'Soluções de prateleira engessam seu crescimento. Quando sua empresa traciona, a tecnologia falha.',
    details: 'Muitas empresas começam usando ferramentas baratas e genéricas. Porém, à medida que você cresce, essas ferramentas não suportam o volume de acessos ou a complexidade das novas operações. Nossa engenharia constrói infraestruturas robustas, prontas para escalar sem limites técnicos.',
    icon: '🚧'
  },
  {
    type: 'pain',
    title: 'Processos Manuais',
    description: 'Sua equipe perde horas em tarefas repetitivas porque seu software atual não se integra ao seu fluxo de trabalho.',
    details: 'Seus funcionários perdem tempo copiando e colando dados entre sistemas? Isso não apenas custa caro, mas é a principal causa de erros humanos. Nós desenvolvemos integrações e painéis gerenciais que automatizam fluxos, liberando sua equipe para o trabalho estratégico.',
    icon: '⏳'
  },
  {
    type: 'solution',
    title: 'Hospedagem & Domínios',
    description: 'Tudo em um só lugar. Cuidamos de toda a infraestrutura, hospedagem e domínio para você não se preocupar com a parte técnica.',
    details: 'Chega de lidar com painéis complexos e dezenas de faturas diferentes. Nós configuramos seus domínios, certificados de segurança (SSL) e hospedamos sua plataforma em servidores premium globais, garantindo 99.9% de disponibilidade e altíssima performance.',
    icon: '🌍'
  },
  {
    type: 'solution',
    title: 'Suporte 100% Incluso',
    description: 'Você nunca estará sozinho. Ao escolher a Pachyx, você tem suporte total para qualquer necessidade, sem custos extras e letras miúdas.',
    details: 'Nossa parceria não termina na entrega do projeto. Você terá acesso direto aos nossos especialistas para tirar dúvidas, solicitar manutenções e resolver qualquer problema rapidamente. Sem tickets demorados, sem robôs. Atendimento humano, rápido e eficiente.',
    icon: '🤝'
  },
  {
    type: 'solution',
    title: 'Completamente Flexível',
    description: 'O sistema com o rosto da sua empresa. Construímos soluções sob medida e escaláveis, adaptáveis às suas regras de negócio.',
    details: 'Nós não forçamos sua empresa a se adaptar ao software; nós criamos a tecnologia para se adaptar a você. Cada tela, cada relatório e cada regra de negócio é modelada perfeitamente para as suas necessidades, garantindo que o sistema seja o motor do seu crescimento.',
    icon: '🎨'
  }
];

export default function PainPointsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof carouselItems[0] | null>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Modal ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-scroll logic (Vitrine effect)
  useEffect(() => {
    if (isHovered || selectedItem) return; // Pause if hovering or modal is open

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If we reached the end, go back to the start
        if (Math.ceil(scrollLeft) >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll right
          scrollRef.current.scrollBy({ left: clientWidth / 2, behavior: 'smooth' });
        }
      }
    }, 3500); // Scrolls every 3.5 seconds

    return () => clearInterval(interval);
  }, [isHovered, selectedItem]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              A tecnologia atual está <span className={styles.highlight}>freando</span> seu negócio?
            </h2>
            <p className={styles.subtitle}>
              Empresas que não investem em experiências digitais premium estão deixando dinheiro na mesa todos os dias. 
              Veja como a Pachyx pode resolver isso.
            </p>
          </div>
        </div>
        
        <div className={styles.carouselWrapper}>
          {/* Desktop Controls (hidden on mobile) */}
          <button 
            className={`${styles.controlButton} ${styles.desktopLeft}`} 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Rolar para a esquerda"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <button 
            className={`${styles.controlButton} ${styles.desktopRight}`} 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Rolar para a direita"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div 
            className={styles.carousel} 
            ref={scrollRef}
            onScroll={checkScroll}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {carouselItems.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.card} ${item.type === 'solution' ? styles.solutionCard : ''}`}
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
              >
                <div className={styles.iconWrapper}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <span className={styles.knowMore}>Saiba mais ➔</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton} 
              onClick={() => setSelectedItem(null)}
              aria-label="Fechar"
            >
              ×
            </button>
            <div className={`${styles.modalIcon} ${selectedItem.type === 'solution' ? styles.solutionModalIcon : ''}`}>
              {selectedItem.icon}
            </div>
            <h3 className={styles.modalTitle}>{selectedItem.title}</h3>
            <p className={styles.modalDescription}>{selectedItem.description}</p>
            <div className={styles.modalDivider}></div>
            <p className={styles.modalDetails}>{selectedItem.details}</p>
            <button 
              className={styles.modalCta}
              onClick={() => setSelectedItem(null)}
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
