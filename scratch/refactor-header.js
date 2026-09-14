const fs = require('fs');

let header = `'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ServicesDropdown from './ServicesDropdown';
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
        <Link href="/" className={\`\${styles.logo} \${isMenuOpen ? styles.logoOpen : ''}\`} onClick={() => setIsMenuOpen(false)}>
          Pachyx<span className={styles.dot}>.</span>
        </Link>

        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Alternar menu"
        >
          <span className={\`\${styles.bar} \${isMenuOpen ? styles.bar1 : ''}\`}></span>
          <span className={\`\${styles.bar} \${isMenuOpen ? styles.bar2 : ''}\`}></span>
          <span className={\`\${styles.bar} \${isMenuOpen ? styles.bar3 : ''}\`}></span>
        </button>

        <nav className={\`\${styles.nav} \${isMenuOpen ? styles.navOpen : ''}\`}>
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <ServicesDropdown />
            <Link 
              href="/precos" 
              className={styles.navLink} 
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Link 
              href="/contato" 
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicie seu Projeto
            </Link>
          </div>

          {/* Mobile Nav Menu (Cards Style) */}
          <div className="md:hidden flex flex-col w-full px-4 gap-2 pb-6 mt-4">
            <Link href="/" className="bg-gray-900/60 border border-gray-800 text-white font-semibold text-lg rounded-2xl p-4 w-full text-left active:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/sobre" className="bg-gray-900/60 border border-gray-800 text-white font-semibold text-lg rounded-2xl p-4 w-full text-left active:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </Link>
            
            {/* Serviços Card with list */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 flex flex-col w-full">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Serviços</span>
              <div className="flex flex-col gap-4 pl-1">
                <Link href="/servicos/sistemas-erp" className="text-gray-200 font-medium text-lg active:text-white" onClick={() => setIsMenuOpen(false)}>Sistemas ERP</Link>
                <Link href="/servicos/saas-e-mvp" className="text-gray-200 font-medium text-lg active:text-white" onClick={() => setIsMenuOpen(false)}>SaaS e MVP</Link>
                <Link href="/servicos/crm-personalizado" className="text-gray-200 font-medium text-lg active:text-white" onClick={() => setIsMenuOpen(false)}>CRM Personalizado</Link>
                <Link href="/servicos/portais-web" className="text-gray-200 font-medium text-lg active:text-white" onClick={() => setIsMenuOpen(false)}>Portais Web</Link>
                <Link href="/servicos/sites-corporativos" className="text-gray-200 font-medium text-lg active:text-white" onClick={() => setIsMenuOpen(false)}>Sites Corporativos</Link>
              </div>
            </div>

            <Link href="/precos" className="bg-gray-900/60 border border-gray-800 text-white font-semibold text-lg rounded-2xl p-4 w-full text-left active:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Preços
            </Link>

            <Link href="/contato" className="bg-white text-gray-950 font-bold text-lg rounded-2xl p-4 w-full flex items-center justify-center mt-2 mb-8 active:bg-gray-200 transition-colors" style={{ color: '#050505' }} onClick={() => setIsMenuOpen(false)}>
              Iniciar um projeto
            </Link>
          </div>

          {/* Fale Conosco Button (Desktop only) */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contato" 
              className="px-5 py-2 bg-gray-900 border border-gray-800 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-sm flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Fale Conosco
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
`;

fs.writeFileSync('c:/projetos/pachyx/components/Header.tsx', header);
console.log("Updated Header");
