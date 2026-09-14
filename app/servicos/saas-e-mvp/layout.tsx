import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desenvolvimento de SaaS e MVP | Pachyx',
  description: 'Transforme sua ideia em um software escalável. Lançamento rápido no mercado sem comprometer a arquitetura estrutural do seu SaaS.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
