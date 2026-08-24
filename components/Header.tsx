'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={`${styles.logo} ${isMenuOpen ? styles.logoOpen : ''}`} onClick={() => setIsMenuOpen(false)}>
          Pachyx<span className={styles.dot}>.</span>
        </Link>

        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Alternar menu"
        >
          <span className={`${styles.bar} ${isMenuOpen ? styles.bar1 : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.bar2 : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.bar3 : ''}`}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/precos" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Preços
          </Link>
          <Link href="/sobre" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Quem Somos
          </Link>
          <Link href="/faq" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            FAQ
          </Link>
          <Link 
            href="/#contato" 
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Inicie seu Projeto
          </Link>
        </nav>
      </div>
    </header>
  );
}
