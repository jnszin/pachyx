import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portais Web Corporativos | Pachyx',
  description: 'Portais Web seguros para Clientes e Fornecedores. Elimine o caos do WhatsApp e unifique a comunicação B2B da sua empresa.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
