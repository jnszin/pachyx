import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Pachyx<span className={styles.dot}>.</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/precos" className={styles.navLink}>
            Preços
          </Link>
          <Link href="/sobre" className={styles.navLink}>
            Quem Somos
          </Link>
        </nav>
      </div>
    </header>
  );
}
