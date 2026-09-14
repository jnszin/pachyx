import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistemas ERP Sob Medida | Pachyx',
  description: 'Sistemas ERP customizados para libertar sua empresa do caos operacional e planilhas desorganizadas.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
