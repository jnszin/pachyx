'use client'
import React, { useState } from 'react';
import { submitContact } from '@/app/actions/contact';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function ContatoPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Masks
  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only letters and spaces
    e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // keep only numbers
    if (value.length > 11) value = value.slice(0, 11); // max 11 digits
    
    // format (XX) XXXXX-XXXX
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 9) {
      value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }
    
    e.target.value = value;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);

    if (result.success) {
      setMessage({ text: 'Formulário enviado com sucesso! Entraremos em contato em breve.', type: 'success' });
      (e.target as HTMLFormElement).reset();
    } else {
      setMessage({ text: result.error || 'Ocorreu um erro.', type: 'error' });
    }

    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      <FadeIn delay={0.1}>
        <div className="w-full max-w-3xl relative">
        <button
          onClick={() => router.back()}
          className="absolute -top-12 left-0 text-gray-400 hover:text-white flex items-center gap-2 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <div className="text-center mb-12 mt-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white tracking-tight">Vamos Construir Juntos</h2>
          <p className="text-gray-400 text-lg">
            Conte-nos sobre o seu desafio. Nossa equipe técnica entrará em contato em breve.
          </p>
        </div>

        <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome-inline" className="block text-sm font-medium text-gray-300 mb-2">Nome completo *</label>
                <input
                  type="text"
                  id="nome-inline"
                  name="nome"
                  required
                  onChange={handleNomeChange}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors"
                  placeholder="Como podemos te chamar?"
                />
              </div>

              <div>
                <label htmlFor="email-inline" className="block text-sm font-medium text-gray-300 mb-2">E-mail corporativo *</label>
                <input
                  type="email"
                  id="email-inline"
                  name="email"
                  required
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefone-inline" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp / Telefone *</label>
                <input
                  type="tel"
                  id="telefone-inline"
                  name="telefone"
                  required
                  onChange={handlePhoneChange}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors"
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                />
              </div>

              <div>
                <label htmlFor="servico-inline" className="block text-sm font-medium text-gray-300 mb-2">Qual a sua necessidade? *</label>
                <select
                  id="servico-inline"
                  name="servico"
                  required
                  defaultValue=""
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors appearance-none cursor-pointer"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                >
                  <option value="" disabled>Selecione uma opção...</option>
                  <option value="Sistemas ERP">Sistemas ERP Sob Medida</option>
                  <option value="SaaS e MVP">SaaS e MVP (Startups)</option>
                  <option value="CRM Personalizado">CRM Personalizado (Vendas)</option>
                  <option value="Portais Web">Portais de Clientes/Fornecedores</option>
                  <option value="Sites Corporativos">Sites Corporativos / Institucionais</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="detalhes-inline" className="block text-sm font-medium text-gray-300 mb-2">Detalhes do projeto (Opcional)</label>
              <textarea
                id="detalhes-inline"
                name="detalhes"
                rows={4}
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors resize-none"
                placeholder="Conte-nos um pouco mais sobre o que você tem em mente..."
              ></textarea>
            </div>

            {message && (
              <div className={`p-4 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                {message.text}
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Solicitar Contato'
                )}
              </button>
            </div>
          </form>
        </div>
        </div>
      </FadeIn>
    </main>
  );
}
