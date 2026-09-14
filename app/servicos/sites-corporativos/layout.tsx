import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sites Corporativos de Alta Performance | Pachyx',
  description: 'Seu site não deve ser um panfleto virtual. Desenvolvemos o principal ativo de vendas da sua empresa com SEO técnico e arquitetura Headless.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
