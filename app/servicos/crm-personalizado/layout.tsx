import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRM Personalizado | Pachyx',
  description: 'Sistemas de CRM construídos sob medida para operações de vendas complexas. Não esprema sua esteira comercial em ferramentas genéricas.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
