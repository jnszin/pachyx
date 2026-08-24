import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.column}>
            <Link href="/" className={styles.logo}>
              Pachyx<span className={styles.dot}>.</span>
            </Link>
            <p className={styles.description}>
              Desenvolvimento web de elite para empresas visionárias.
            </p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/jnszin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className={styles.column}>
            <h3 className={styles.title}>Links Rápidos</h3>
            <ul className={styles.list}>
              <li><Link href="/precos" className={styles.link}>Preços</Link></li>
              <li><Link href="/sobre" className={styles.link}>Quem Somos</Link></li>
              <li><Link href="/faq" className={styles.link}>FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className={styles.column}>
            <h3 className={styles.title}>Contato</h3>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <svg className={styles.iconSmall} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:jonasalvespacheco@gmail.com" className={styles.link}>jonasalvespacheco@gmail.com</a>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.iconSmall} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+5527988455448" className={styles.link}>(27) 98845-5448</a>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.iconSmall} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Cariacica - ES</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div className={styles.column}>
            <h3 className={styles.title}>Horário de Atendimento</h3>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <svg className={styles.iconSmall} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div className={styles.hoursBox}>
                  <span className={styles.hoursDay}>Segunda a Sexta</span>
                  <span className={styles.hoursTime}>08:00 às 17:00</span>
                </div>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.iconSmall} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div className={styles.hoursBox}>
                  <span className={styles.hoursDay}>Sábado</span>
                  <span className={styles.hoursTime}>09:00 às 12:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Pachyx. Todos os direitos reservados.</p>
          <div className={styles.bottomLinks}>
            <Link href="/politica-de-privacidade" className={styles.bottomLink}>Política de Privacidade</Link>
            <Link href="/termos-de-uso" className={styles.bottomLink}>Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
