"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { 
  ShieldAlert, Zap, 
  ChevronRight, 
  CheckCircle2, ArrowRight, LayoutTemplate,
  MonitorSmartphone, Search, Cpu, Globe
} from 'lucide-react';

export default function SitesCorporativos() {
  type TabKey = 'performance' | 'cms' | 'ux' | 'infra';
  const [activeTab, setActiveTab] = useState<TabKey>('performance');

  const tabs = {
    performance: {
      title: "Performance SEO Extrema",
      desc: "O Google pune sites lentos. Nós desenvolvemos usando Next.js para entregar tempo de carregamento em milissegundos e dominar as buscas orgânicas.",
      features: ["Lighthouse Score 95+ Garantido", "Server-Side Rendering (SSR)", "Otimização Automática de Imagens (WebP)", "Marcação de Dados Estruturados (Schema)"]
    },
    cms: {
      title: "Autonomia de Conteúdo (CMS Headless)",
      desc: "Você não deve depender de um programador para alterar um texto. Entregamos painéis de edição onde o time de marketing tem 100% de controle.",
      features: ["Integração com Sanity ou Strapi", "Live Preview de Alterações", "Gestão Dinâmica de Páginas de Pouso", "Fluxo de Publicação e Rascunhos"]
    },
    ux: {
      title: "UX Focada em Conversão",
      desc: "Design bonito não basta. Cada botão, quebra de linha e contraste de cor é milimetricamente arquitetado para guiar o olhar do usuário até a venda.",
      features: ["Design System Proprietário", "Micro-interações que Retêm Atenção", "Testes A/B Nativos na Arquitetura", "Jornadas Mobile-First"]
    },
    infra: {
      title: "Edge Computing e Resiliência",
      desc: "Seu site sairá em um portal de notícias amanhã? Nossa infraestrutura garante que milhares de acessos simultâneos não derrubarão sua página.",
      features: ["Deploy em Edge Networks (Vercel/Cloudflare)", "Cache Distribuído Globalmente", "Certificados SSL/TLS Automatizados", "Zero Downtime Deployments"]
    }
  };

  return (
    <FadeIn delay={0.2} direction="none" fullWidth>
    <main className="min-h-screen bg-[#050505] text-gray-200 selection:bg-emerald-500/30 overflow-hidden">
      
      {/* SEÇÃO 1: HERO */}
      <section className="relative pt-40 pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-900/50 mb-8 backdrop-blur-sm">
          <MonitorSmartphone className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-medium text-emerald-300 tracking-wider">SITES CORPORATIVOS MODERNOS</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter max-w-5xl mb-6 leading-[1.1]">
          Pare de imprimir <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-300">panfletos virtuais.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Seu site deve ser o maior ativo de vendas da empresa. Nós aplicamos engenharia de ponta (Next.js) para criar plataformas web ultrarrápidas, blindadas para SEO e desenhadas para conversão brutal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-24 z-10">
          <Link href="/contato" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white hover:bg-emerald-500 font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_30px_rgba(5,150,105,0.5)]">
            Renovar Meu Site <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

                {/* Dashboard Flutuante Glassmorphism */}
        <div className="relative w-full max-w-4xl mx-auto z-10 perspective-[2000px]">
          <div className="absolute -inset-1 bg-linear-to-r from-gray-700 to-gray-900 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
          
          <div className="relative w-full aspect-4/3 sm:aspect-video bg-gray-950/80 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 overflow-hidden">
            {/* Header Falso */}
            <div className="flex items-center justify-between border-b border-gray-800/60 pb-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="h-5 w-32 bg-gray-900 rounded-md border border-gray-800 flex items-center px-2 justify-center">
                 <span className="text-[8px] text-gray-500">www.seusite.com.br</span>
              </div>
            </div>

            {/* Conteúdo Falso (Mockup Site + Lighthouse) */}
            <div className="relative flex-1 rounded-xl border border-gray-800/50 overflow-hidden bg-gray-900/30">
              {/* Fake Website UI */}
              <div className="absolute inset-0 flex flex-col opacity-40">
                {/* Nav */}
                <div className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-800/30">
                  <div className="w-16 h-3 sm:w-20 sm:h-4 bg-gray-700/50 rounded"></div>
                  <div className="hidden sm:flex gap-4">
                    <div className="w-10 h-2 bg-gray-800 rounded"></div>
                    <div className="w-10 h-2 bg-gray-800 rounded"></div>
                    <div className="w-10 h-2 bg-gray-800 rounded"></div>
                  </div>
                  <div className="w-12 h-4 sm:w-16 sm:h-6 bg-emerald-600/30 rounded"></div>
                </div>
                {/* Hero */}
                <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 text-center gap-3">
                  <div className="w-3/4 sm:w-1/2 h-6 sm:h-10 bg-gray-700/60 rounded-lg"></div>
                  <div className="w-2/3 sm:w-1/3 h-4 bg-gray-800/50 rounded mt-2"></div>
                  <div className="w-1/2 sm:w-1/4 h-4 bg-gray-800/50 rounded"></div>
                  <div className="w-24 h-8 sm:w-32 sm:h-10 bg-emerald-600/40 rounded-xl mt-4"></div>
                </div>
                {/* Cards (Products/Features) */}
                <div className="h-24 sm:h-32 flex gap-3 sm:gap-4 p-4 border-t border-gray-800/30">
                  <div className="flex-1 bg-gray-800/30 rounded-lg"></div>
                  <div className="flex-1 bg-gray-800/30 rounded-lg"></div>
                  <div className="hidden sm:block flex-1 bg-gray-800/30 rounded-lg"></div>
                </div>
              </div>

              {/* Lighthouse Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-0">
                <div className="bg-gray-950/70 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col items-center max-w-full">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] sm:text-xs font-bold text-emerald-100 tracking-wider">LIGHTHOUSE SCORES</span>
                  </div>
                  
                  <div className="flex gap-3 sm:gap-8 flex-wrap sm:flex-nowrap justify-center">
                    {/* Circulo 1 */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-[3px] sm:border-4 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(5,150,105,0.4)] bg-gray-900/50">
                          <span className="text-emerald-400 font-bold text-lg sm:text-2xl">100</span>
                       </div>
                       <span className="text-gray-300 text-[6px] sm:text-[9px] font-mono tracking-wider">PERFORMANCE</span>
                    </div>
                    {/* Circulo 2 */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-[3px] sm:border-4 border-emerald-500 flex items-center justify-center bg-gray-900/50">
                          <span className="text-emerald-400 font-bold text-lg sm:text-2xl">98</span>
                       </div>
                       <span className="text-gray-300 text-[6px] sm:text-[9px] font-mono tracking-wider">ACESSIBILIDADE</span>
                    </div>
                    {/* Circulo 3 */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-[3px] sm:border-4 border-emerald-500 flex items-center justify-center bg-gray-900/50">
                          <span className="text-emerald-400 font-bold text-lg sm:text-2xl">100</span>
                       </div>
                       <span className="text-gray-300 text-[6px] sm:text-[9px] font-mono tracking-wider">PRÁTICAS</span>
                    </div>
                    {/* Circulo 4 */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-[3px] sm:border-4 border-emerald-500 flex items-center justify-center bg-gray-900/50">
                          <span className="text-emerald-400 font-bold text-lg sm:text-2xl">100</span>
                       </div>
                       <span className="text-gray-300 text-[6px] sm:text-[9px] font-mono tracking-wider">SEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: DORES */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Os pecados dos sites de agência.</h2>
            <p className="text-gray-400 text-lg">Seu sobrinho ou uma agência de publicidade não sabem fazer arquitetura de software.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-9000/50"></div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-6 h-6 text-white" />
                <span className="text-gray-300 font-mono text-sm font-semibold tracking-wide">WARN_FRANKENSTEIN</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Refém de Templates</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Sites WordPress entupidos de plugins pesados para tentar fazer o básico, resultando em um sistema frágil que quebra a cada atualização do sistema.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Código nativo construído do zero (React/Next.js). Zero dependência de plugins pesados.</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600/70 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-6 h-6 text-gray-600 animate-pulse" />
                <span className="text-gray-400 font-mono text-sm font-bold tracking-wide">FATAL_SEO_PUNISHED</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Invisibilidade no Google</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Carregamento lento (acima de 3 segundos) e má estruturação mobile (Core Web Vitals) fazem o Google jogar sua empresa para a página 5 nas buscas orgânicas.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Arquitetura Server-Side garante entrega instantânea e métricas perfeitas no Google Lighthouse.</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600/50"></div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="w-6 h-6 text-gray-600" />
                <span className="text-gray-400 font-mono text-sm font-semibold tracking-wide">ERR_IT_BLOCKER</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gargalo no Marketing</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Para trocar uma foto ou subir um post no blog, a equipe de marketing precisa abrir um chamado no TI e esperar semanas pela atualização no código.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">CMS Headless moderno acoplado: edite textos em uma interface amigável sem mexer no código.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: MÓDULOS */}
      <section className="py-24 bg-[#050505] border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Construído em Módulos. Feito sob medida.</h2>
            <p className="text-gray-400 text-lg">Um ecossistema robusto para o marketing operar com velocidade e precisão.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {[
                { id: 'performance', label: 'Engenharia de Performance', icon: Zap },
                { id: 'cms', label: 'Gestor de Conteúdo (CMS)', icon: LayoutTemplate },
                { id: 'ux', label: 'Design System & UX', icon: MonitorSmartphone },
                { id: 'infra', label: 'Infraestrutura Global', icon: Globe }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabKey)}
                    className={`flex items-center justify-between p-4 rounded-xl text-left transition-all ${
                      isActive 
                        ? 'bg-emerald-600 text-white shadow-lg border border-emerald-500' 
                        : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-semibold">{tab.label}</span>
                    </div>
                    {isActive && <ChevronRight className="w-5 h-5 opacity-70" />}
                  </button>
                )
              })}
            </div>

            <div className="w-full lg:w-2/3 bg-gray-900/40 border border-gray-800 rounded-3xl p-8 lg:p-12 min-h-87.5">
              <div className="animate-fade-in-up" key={activeTab}>
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-gray-900">
                  <LayoutTemplate className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                  {tabs[activeTab].desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tabs[activeTab].features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 bg-[#050505] border border-gray-800 p-4 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span className="text-gray-300 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: O PROCESSO */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-[2.5rem] p-10 md:p-16">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Como erguemos seu quartel-general digital</h2>
            <p className="text-gray-400">Desenvolvimento com mentalidade de software, focado em retorno financeiro.</p>
          </div>

          <div className="space-y-6">
            {[
              { num: "01", title: "Imersão de Marca e Conversão", desc: "Mergulhamos no seu ICP (Perfil Ideal de Cliente) para desenhar os argumentos de venda, fluxo de navegação e chamadas para ação (CTAs) que farão o cliente comprar." },
              { num: "02", title: "Prototipagem de Alta Fidelidade (UI)", desc: "Desenhamos todas as telas nos mínimos detalhes. Você aprova visual, animações e tom de voz no Figma antes que nossa engenharia toque no teclado." },
              { num: "03", title: "Desenvolvimento Headless (Código Puro)", desc: "Criamos a interface visual em Next.js separada do painel de administração (Sanity/Strapi), garantindo uma velocidade absurda e segurança à prova de hackers." },
              { num: "04", title: "Otimização Técnica de SEO e Performance", desc: "Comprimimos todas as imagens, configuramos o cache global e inserimos os schemas JSON-LD para o Google ler sua empresa como autoridade máxima." },
              { num: "05", title: "Treinamento de Marketing e Deploy", desc: "Ensinamos seu time a usar o CMS para criar novas páginas em 5 minutos. Disparamos o site ao vivo em servidores Edge distribuídos mundialmente." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:bg-gray-800 transition-colors">
                <div className="text-white font-mono text-2xl font-bold bg-gray-900 px-4 py-2 rounded-lg border border-gray-900 w-max">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
    </FadeIn>
  );
}
