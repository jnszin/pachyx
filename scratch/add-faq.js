const fs = require('fs');
let pageContent = fs.readFileSync('c:/projetos/pachyx/app/page.tsx', 'utf8');

// Add import if not exists
if (!pageContent.includes('FAQSection')) {
  pageContent = pageContent.replace(
    /import ServicesGrid from '\.\.\/components\/ServicesGrid';/,
    "import ServicesGrid from '../components/ServicesGrid';\nimport FAQSection from '../components/FAQSection';"
  );
  
  // Add component
  pageContent = pageContent.replace(
    /<\/FadeIn>\s*<\/main>/,
    `</FadeIn>
        
        <FadeIn delay={0.2}>
          <FAQSection />
        </FadeIn>
      </main>`
  );
  
  fs.writeFileSync('c:/projetos/pachyx/app/page.tsx', pageContent);
  console.log('Added FAQSection to page.tsx');
} else {
  console.log('FAQSection already added.');
}
