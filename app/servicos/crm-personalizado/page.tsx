"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { 
  ShieldAlert, Zap, 
  ChevronRight, 
  CheckCircle2, ArrowRight, LayoutTemplate,
  Target, LineChart, Network
, Users } from 'lucide-react';

export default function CRMPersonalizado() {
  type TabKey = 'funil' | 'automacao' | 'integracao' | 'inteligencia';
  const [activeTab, setActiveTab] = useState<TabKey>('funil');

  const tabs = {
    funil: {
      title: "Arquitetura de Funis Complexos",
      desc: "Vendas B2B não são uma linha reta. Construímos pipelines multidimensionais com regras de aprovação de alçada, garantindo governança comercial.",
      features: ["Múltiplos Funis Simultâneos", "Fluxo de Aprovação de Descontos", "Gestão de Lead Scoring Dinâmico", "Campos Customizados Avançados"]
    },
    automacao: {
      title: "Automação de Tarefas Repetitivas",
      desc: "Seu vendedor deve focar em fechar negócios, não em digitar dados. O sistema assume o follow-up e a entrada manual de informações.",
      features: ["Roteamento Inteligente de Leads (Roleta)", "Geração Automática de Propostas em PDF", "Alertas de Inatividade de Cliente", "Disparo de Emails Baseado em Gatilhos"]
    },
    integracao: {
      title: "Espinha Dorsal Integrada",
      desc: "Um CRM isolado é apenas uma agenda cara. Nós plugamos sua esteira de vendas nativamente ao seu ERP, Financeiro e Marketing.",
      features: ["Sincronização Bidirecional com ERP", "Integração via API com WhatsApp/Telefonia", "Passagem de Bastão Limpa (Vendas -> CS)", "Webhooks de Alta Performance"]
    },
    inteligencia: {
      title: "Inteligência Estratégica",
      desc: "A alta gestão não precisa pedir relatórios no fim do mês. Painéis ao vivo cruzam taxa de conversão, ciclo de vendas e margem real de lucro.",
      features: ["Previsibilidade de Receita (Forecast)", "Performance Granular por Vendedor", "Tempo Médio em Cada Etapa do Funil", "Matriz de Motivos de Perda"]
    }
  };

  return (
    <FadeIn delay={0.2} direction="none" fullWidth>
    <main className="min-h-screen bg-[#050505] text-gray-200 selection:bg-amber-500/30 overflow-hidden">
      
      {/* SEÇÃO 1: HERO */}
      <section className="relative pt-40 pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-amber-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/40 border border-amber-900/50 mb-8 backdrop-blur-sm">
          <Target className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-medium text-amber-300 tracking-wider">CRM SOB MEDIDA B2B</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter max-w-5xl mb-6 leading-[1.1]">
          Pare de engessar seu <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-300">processo comercial.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Sistemas de prateleira forçam você a adaptar a sua estratégia de vendas à ferramenta. Nós construímos o CRM que se dobra exatamente às regras de negócio da sua empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-24 z-10">
          <Link href="/contato" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 text-white hover:bg-amber-500 font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]">
            Desenhar Solução <ArrowRight className="w-4 h-4" />
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
                 <span className="text-[8px] text-gray-500">crm.pachyx.com</span>
              </div>
            </div>

            {/* Conteúdo Falso (CRM Kanban) */}
            <div className="flex flex-col gap-3 h-full overflow-hidden">
              {/* Topbar Kanban */}
              <div className="flex justify-between items-center px-1">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-500" />
                  <span className="text-white font-bold text-xs">Pipeline B2B</span>
                </div>
                <div className="flex gap-2">
                  <div className="h-6 w-32 bg-gray-900/50 rounded-md border border-gray-800 flex items-center px-2">
                    <span className="text-[8px] text-gray-500">Buscar negócio...</span>
                  </div>
                  <div className="h-6 px-3 bg-amber-600/10 rounded-md border border-amber-500/20 flex items-center justify-center text-[9px] text-amber-400 font-medium">
                    + Novo Card
                  </div>
                </div>
              </div>

              {/* Colunas do Kanban */}
              <div className="flex gap-3 flex-1 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-2">
                {/* Coluna 1: Qualificação */}
                <div className="min-w-[75%] sm:min-w-0 sm:flex-1 h-full bg-gray-900/30 rounded-xl p-2 flex flex-col gap-2 border border-gray-800/40 snap-center">
                  <div className="flex justify-between items-center mb-1 px-1">
                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-wider">Qualificação</span>
                    <span className="text-[8px] text-gray-500 bg-gray-800/50 px-1.5 py-0.5 rounded-full">3</span>
                  </div>
                  <div className="bg-gray-950/60 border border-gray-800/60 rounded-lg p-2.5 flex flex-col gap-1.5 hover:border-amber-500/30 transition-colors">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-white">Startup Alfa</span>
                      <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Frio</span>
                    </div>
                    <span className="text-[11px] font-medium text-amber-400">R$ 15.000</span>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-gray-700"></div>
                      <span className="text-[7px] text-gray-500">João Silva</span>
                    </div>
                  </div>
                  <div className="bg-gray-950/60 border border-gray-800/60 rounded-lg p-2.5 flex flex-col gap-1.5 hover:border-amber-500/30 transition-colors">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-white">Logística Global</span>
                      <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Morno</span>
                    </div>
                    <span className="text-[11px] font-medium text-amber-400">R$ 85.000</span>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-gray-700"></div>
                      <span className="text-[7px] text-gray-500">Maria Lima</span>
                    </div>
                  </div>
                </div>

                {/* Coluna 2: Proposta */}
                <div className="min-w-[75%] sm:min-w-0 sm:flex-1 h-full bg-gray-900/30 rounded-xl p-2 flex flex-col gap-2 border border-gray-800/40 snap-center">
                  <div className="flex justify-between items-center mb-1 px-1">
                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-wider">Proposta</span>
                    <span className="text-[8px] text-gray-500 bg-gray-800/50 px-1.5 py-0.5 rounded-full">2</span>
                  </div>
                  <div className="bg-gray-950/60 border border-amber-500/30 rounded-lg p-2.5 flex flex-col gap-1.5 shadow-[0_0_10px_rgba(217,119,6,0.1)]">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-white">Varejo Central</span>
                      <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Quente</span>
                    </div>
                    <span className="text-[11px] font-medium text-amber-400">R$ 120.000</span>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-gray-700"></div>
                      <span className="text-[7px] text-gray-500">Ana Souza</span>
                    </div>
                  </div>
                  <div className="bg-gray-950/60 border border-gray-800/60 rounded-lg p-2.5 flex flex-col gap-1.5 opacity-50">
                    <div className="h-2 w-1/2 bg-gray-700 rounded mb-1"></div>
                    <div className="h-2 w-1/3 bg-gray-800 rounded"></div>
                  </div>
                </div>

                {/* Coluna 3: Negociação */}
                <div className="min-w-[75%] sm:min-w-0 sm:flex-1 h-full bg-gray-900/30 rounded-xl p-2 flex flex-col gap-2 border border-gray-800/40 snap-center">
                  <div className="flex justify-between items-center mb-1 px-1">
                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-wider">Negociação</span>
                    <span className="text-[8px] text-gray-500 bg-gray-800/50 px-1.5 py-0.5 rounded-full">1</span>
                  </div>
                  <div className="bg-gray-950/60 border border-gray-800/60 rounded-lg p-2.5 flex flex-col gap-1.5 hover:border-amber-500/30 transition-colors">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-white">Indústria XYZ</span>
                      <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Quente</span>
                    </div>
                    <span className="text-[11px] font-medium text-amber-400">R$ 450.000</span>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-1">
                        <div className="w-3.5 h-3.5 rounded-full bg-gray-700"></div>
                        <span className="text-[7px] text-gray-500">Carlos CEO</span>
                      </div>
                      <span className="text-[6px] text-gray-500">Reunião Hoje</span>
                    </div>
                  </div>
                </div>

                {/* Coluna 4: Fechado (hidden on very small unless scrolled) */}
                <div className="min-w-[75%] sm:min-w-0 sm:flex-1 h-full bg-gray-900/30 rounded-xl p-2 flex flex-col gap-2 border border-gray-800/40 snap-center">
                  <div className="flex justify-between items-center mb-1 px-1">
                    <span className="text-[9px] font-bold text-green-400 uppercase tracking-wider">Fechado</span>
                    <span className="text-[8px] text-green-500 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded-full">Ganho</span>
                  </div>
                  <div className="bg-green-950/20 border border-green-900/50 rounded-lg p-2.5 flex flex-col gap-1.5">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-gray-200">TechCorp</span>
                      <CheckCircle2 className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-[11px] font-medium text-green-500">R$ 75.000</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Erros que matam a performance comercial.</h2>
            <p className="text-gray-400 text-lg">De nada adianta muito tráfego se a esteira de vendas vaza oportunidades todos os dias.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-9000/50"></div>
              <div className="flex items-center gap-3 mb-6">
                <Network className="w-6 h-6 text-white" />
                <span className="text-gray-300 font-mono text-sm font-semibold tracking-wide">ERR_ILHA_DE_DADOS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Silos de Informação</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">O CRM não fala com o financeiro nem com a expedição. Vendedores prometem o que não tem no estoque e ninguém audita os descontos dados.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Desenvolvemos arquiteturas integradas nativamente via APIs customizadas.</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600/70 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="w-6 h-6 text-gray-600 animate-pulse" />
                <span className="text-gray-400 font-mono text-sm font-bold tracking-wide">FATAL_LEAD_LEAK</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Vazamento de Oportunidades</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Sem distribuição automática e gatilhos de inatividade, leads esfriam na base sem que o gestor saiba, rasgando o investimento de marketing.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Regras de negócio sob medida para roleta de leads e alertas de congelamento.</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600/50"></div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-gray-600" />
                <span className="text-gray-400 font-mono text-sm font-semibold tracking-wide">WARN_MANUAL_LABOR</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gerador de Tarefas</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">A ferramenta de prateleira exige tantos cliques para registrar uma ligação que os vendedores boicotam o uso, preenchendo os dados apenas no final do mês.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">UX projetado para reduzir a fricção e automações que alimentam o funil sem esforço.</span>
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
            <p className="text-gray-400 text-lg">Nós mapeamos as regras únicas do seu processo de vendas e as transformamos em código.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {[
                { id: 'funil', label: 'Engenharia de Pipelines', icon: Target },
                { id: 'automacao', label: 'Automação Comercial', icon: Zap },
                { id: 'integracao', label: 'Ecosistema Conectado', icon: Network },
                { id: 'inteligencia', label: 'Relatórios Inteligentes', icon: LineChart }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabKey)}
                    className={`flex items-center justify-between p-4 rounded-xl text-left transition-all ${
                      isActive 
                        ? 'bg-white text-black shadow-lg border border-gray-500' 
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
                  <LayoutTemplate className="w-6 h-6 text-white" />
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
            <h2 className="text-3xl font-bold text-white mb-4">Como estruturamos sua operação comercial</h2>
            <p className="text-gray-400">Implementamos governança e previsibilidade desde a primeira reunião.</p>
          </div>

          <div className="space-y-6">
            {[
              { num: "01", title: "Imersão e Desenho do Fluxo Comercial", desc: "Mapeamos exatamente como um lead entra, transita e é fechado na sua empresa. Desenhamos a engenharia das regras de negócio que nenhum software pronto atende." },
              { num: "02", title: "Prototipagem de UX para Vendas", desc: "Criamos as interfaces (Figma) focando 100% na usabilidade do seu vendedor, garantindo que ele fará o trabalho rápido e não boicotará o sistema." },
              { num: "03", title: "Arquitetura e Integrações", desc: "Estruturamos bancos de dados sólidos (PostgreSQL) e desenhamos a malha de APIs para comunicar o CRM perfeitamente com seu ERP ou sistema de logística." },
              { num: "04", title: "Desenvolvimento de Regras e Alçadas", desc: "Codificamos as restrições customizadas: quem pode aprovar desconto, regras de roleta de leads, cálculos complexos de comissão e hierarquia de usuários." },
              { num: "05", title: "Onboarding e Migração de Dados", desc: "Extraímos os dados das planilhas antigas e migramos de forma segura. Treinamos o time e lançamos o sistema para rodar a operação de vendas em tempo real." }
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
