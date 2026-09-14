import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iniciar Projeto | Pachyx',
  description: 'Conte um pouco sobre o que você quer construir e nossa equipe de engenharia entrará em contato.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
