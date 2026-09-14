const fs = require('fs');

const path = 'c:/projetos/pachyx/components/Header.tsx';
let headerContent = fs.readFileSync(path, 'utf8');

// Update Desktop links
const newDesktopLinks = `          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={styles.navLink} 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/sobre" 
              className={styles.navLink} 
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <ServicesDropdown />
            <Link 
              href="/contato" 
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicie seu Projeto
            </Link>
          </div>`;

headerContent = headerContent.replace(
  /\{\/\* Desktop Nav Links \*\/\}(.|\n)*?<\/div>/m, 
  newDesktopLinks
);

// Remove 'Preços' from Mobile menu
headerContent = headerContent.replace(
  /\<Link href="\/precos"(.*?)\>([\s\S]*?)\<\/Link\>/g, 
  ''
);

fs.writeFileSync(path, headerContent);
console.log('Fixed Header.tsx');
