"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { 
  Users, ChevronRight, 
  CheckCircle2, ArrowRight, LayoutTemplate,
  CreditCard, Rocket, Server, Code2
} from 'lucide-react';

export default function SaasMVP() {
  type TabKey = 'arquitetura' | 'pagamentos' | 'onboarding' | 'backoffice';
  const [activeTab, setActiveTab] = useState<TabKey>('arquitetura');

  const tabs = {
    arquitetura: {
      title: "Arquitetura Multi-Tenant Sólida",
      desc: "Base estrutural projetada para separar dados de milhares de clientes (inquilinos) de forma segura, evitando vazamentos e garantindo performance sob stress.",
      features: ["Isolamento de Dados por Cliente", "Escalonamento Horizontal Automático", "Banco de Dados Otimizado para Leitura", "APIs Documentadas em Swagger"]
    },
    pagamentos: {
      title: "Motor de Billing e Assinaturas",
      desc: "Lógica financeira complexa para gerenciar cobranças recorrentes, upgrades, downgrades e controle de inadimplência no piloto automático.",
      features: ["Integração Direta com Stripe/Pagar.me", "Regras Complexas de Prorrateio (Pro-rata)", "Bloqueio Automático de Inadimplentes", "Gestão de Trial e Cupons"]
    },
    onboarding: {
      title: "Fluxo de Entrada e Retenção",
      desc: "A primeira impressão dita o Churn. Construímos esteiras de ativação sem atrito, guiando o novo usuário até o momento de valor da ferramenta.",
      features: ["Cadastro e Autenticação (OAuth, Magic Links)", "Tours Virtuais no Software", "Métricas de Ativação de Usuário (PLG)", "Emails Transacionais Automatizados"]
    },
    backoffice: {
      title: "Backoffice da Operação",
      desc: "Seu time de Suporte e CS precisa de visão de raio-X. Construímos painéis administrativos potentes para governar toda a base de clientes do seu SaaS.",
      features: ["Impersonation (Acesso como Cliente)", "Logs de Auditoria de Ações", "Métricas Consolidadas (MRR, Churn, LTV)", "Gestão de Níveis de Acesso Interno"]
    }
  };

  return (
    <FadeIn delay={0.2} direction="none" fullWidth>
    <main className="min-h-screen bg-[#050505] text-gray-200 selection:bg-purple-500/30 overflow-hidden">
      
      {/* SEÇÃO 1: HERO */}
      <section className="relative pt-40 pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-900/50 mb-8 backdrop-blur-sm">
          <Rocket className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-medium text-purple-300 tracking-wider">SOFTWARE AS A SERVICE (SAAS)</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter max-w-5xl mb-6 leading-[1.1]">
          Valide rápido. <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-400 to-gray-400">Escale para milhões.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Nós traduzimos regras de negócio inovadoras em código sólido. Desenvolvemos desde o MVP veloz para captar investimentos até a infraestrutura definitiva do seu SaaS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-24 z-10">
          <Link href="/contato" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white hover:bg-purple-500 font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
            Apresentar Projeto <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

                {/* Dashboard Flutuante Glassmorphism */}
        <div className="relative w-full max-w-4xl mx-auto z-10 perspective-[2000px]">
          <div className="absolute -inset-1 bg-linear-to-r from-gray-700 to-gray-900 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
          
          <div className="relative w-full aspect-[4/3] sm:aspect-video bg-gray-950/80 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 overflow-hidden">
            {/* Header Falso */}
            <div className="flex items-center justify-between border-b border-gray-800/60 pb-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="h-5 w-32 bg-gray-900 rounded-md border border-gray-800 flex items-center px-2 justify-center">
                 <span className="text-[8px] text-gray-500">app.saas.com</span>
              </div>
            </div>

            {/* Conteúdo Falso (SaaS Dashboard) */}
            <div className="flex flex-col sm:flex-row gap-3 h-full overflow-hidden">
              {/* Left Column */}
              <div className="w-full sm:w-[65%] flex flex-col gap-3 h-full">
                {/* SaaS KPIs */}
                <div className="flex gap-2 sm:gap-3">
                  <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-2.5 sm:p-3 flex flex-col">
                    <span className="text-[8px] sm:text-[9px] text-gray-400 mb-1 uppercase tracking-wider">MRR Atual</span>
                    <span className="text-xs sm:text-sm font-bold text-white mb-1">R$ 58.420</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[7px] text-purple-400 font-medium">+18% m/m</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-2.5 sm:p-3 flex flex-col">
                    <span className="text-[8px] sm:text-[9px] text-gray-400 mb-1 uppercase tracking-wider">Usuários Ativos</span>
                    <span className="text-xs sm:text-sm font-bold text-white mb-1">14.502</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[7px] text-green-400 font-medium">+302 hoje</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-2.5 sm:p-3 flex flex-col">
                    <span className="text-[8px] sm:text-[9px] text-gray-400 mb-1 uppercase tracking-wider">Churn Rate</span>
                    <span className="text-xs sm:text-sm font-bold text-white mb-1">1.2%</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[7px] text-green-400 font-medium">-0.4% m/m</span>
                    </div>
                  </div>
                </div>

                {/* MRR Chart Area */}
                <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-3 flex flex-col overflow-hidden relative">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] sm:text-[10px] font-bold text-gray-300">Crescimento de Receita (MRR)</span>
                  </div>
                  {/* Fake Line Chart */}
                  <div className="flex-1 relative mt-2 border-l border-b border-gray-800/50">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                      <path d="M0,35 C15,30 25,25 35,28 C45,30 55,15 70,12 C85,8 95,5 100,2" fill="none" stroke="rgba(147,51,234,0.8)" strokeWidth="1.5" />
                      <path d="M0,40 L0,35 C15,30 25,25 35,28 C45,30 55,15 70,12 C85,8 95,5 100,2 L100,40 Z" fill="url(#purpleGrad)" opacity="0.3" />
                      <defs>
                        <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(147,51,234,1)" />
                          <stop offset="100%" stopColor="rgba(147,51,234,0)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="hidden sm:flex w-[35%] flex-col gap-3 h-full">
                {/* Plan Distribution */}
                <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-3 flex flex-col flex-1">
                   <span className="text-[9px] font-bold text-gray-300 mb-3">Distribuição de Planos</span>
                   <div className="flex flex-col gap-3 justify-center flex-1">
                      <div className="flex flex-col gap-1">
                         <div className="flex justify-between items-end">
                            <span className="text-[8px] text-gray-400">Enterprise</span>
                            <span className="text-[8px] text-white">45%</span>
                         </div>
                         <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[45%]"></div>
                         </div>
                      </div>
                      <div className="flex flex-col gap-1">
                         <div className="flex justify-between items-end">
                            <span className="text-[8px] text-gray-400">Pro</span>
                            <span className="text-[8px] text-white">35%</span>
                         </div>
                         <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-fuchsia-500 w-[35%]"></div>
                         </div>
                      </div>
                      <div className="flex flex-col gap-1">
                         <div className="flex justify-between items-end">
                            <span className="text-[8px] text-gray-400">Starter</span>
                            <span className="text-[8px] text-white">20%</span>
                         </div>
                         <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gray-500 w-[20%]"></div>
                         </div>
                      </div>
                   </div>
                </div>
                {/* Live Activity Feed */}
                <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-3 flex flex-col flex-1">
                   <span className="text-[9px] font-bold text-gray-300 mb-2">Atividade Recente</span>
                   <div className="flex flex-col gap-2 overflow-hidden">
                      <div className="flex gap-2 items-center">
                         <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400"><ArrowRight className="w-2 h-2 -rotate-45" /></div>
                         <div className="flex flex-col">
                            <span className="text-[7px] text-white font-medium">Novo upgrade (Pro)</span>
                            <span className="text-[6px] text-gray-500">Há 2 minutos</span>
                         </div>
                      </div>
                      <div className="flex gap-2 items-center">
                         <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400"><Users className="w-2 h-2" /></div>
                         <div className="flex flex-col">
                            <span className="text-[7px] text-white font-medium">Nova conta criada</span>
                            <span className="text-[6px] text-gray-500">Há 15 minutos</span>
                         </div>
                      </div>
                      <div className="flex gap-2 items-center">
                         <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400"><ArrowRight className="w-2 h-2 -rotate-45" /></div>
                         <div className="flex flex-col">
                            <span className="text-[7px] text-white font-medium">Novo upgrade (Enterprise)</span>
                            <span className="text-[6px] text-gray-500">Há 1 hora</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: DORES (ALERTAS DE SISTEMA) */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Erros fatais na engenharia de um SaaS.</h2>
            <p className="text-gray-400 text-lg">Um código de baixa qualidade vai cobrar a conta assim que você tracionar clientes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Erro 1: Débito Técnico (Azul) */}
            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-9000/50"></div>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-white" />
                <span className="text-gray-300 font-mono text-sm font-semibold tracking-wide">WARN_DEBITO_TECNICO</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Refação Completa</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Agências amadoras entregam MVPs que parecem bonitos, mas são construídos sobre plataformas &quot;No-Code&quot; genéricas que quebram aos 100 usuários.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Desenvolvemos com as mesmas stacks robustas (React/Node) utilizadas por gigantes da tecnologia.</span>
              </div>
            </div>

            {/* Erro 2: Custo Nuvem (Vermelho Crítico) */}
            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600/70 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-6 h-6 text-gray-600 animate-pulse" />
                <span className="text-gray-400 font-mono text-sm font-bold tracking-wide">FATAL_INFRA_OVERLOAD</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Colapso de Servidor</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Sua campanha de marketing viraliza, centenas tentam logar simultaneamente, o servidor entra em colapso e seu investimento em mídia vira pó.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Arquitetura conteinerizada (Docker) pronta para escalonamento elástico sob alta demanda.</span>
              </div>
            </div>

            {/* Erro 3: Inadimplência (Laranja) */}
            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600/50"></div>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-gray-600" />
                <span className="text-gray-400 font-mono text-sm font-semibold tracking-wide">ERR_CHURN_FINANCEIRO</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Caos de Assinaturas</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Gerenciar cobranças em cartão recusado, cancelamentos e renovações pro-rata manualmente engessa o financeiro e gera processos judiciais.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Motor de cobrança recorrente nativo com regras estritas de cancelamento e retry de cartão.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: MÓDULOS (ABAS INTERATIVAS) */}
      <section className="py-24 bg-[#050505] border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Construído em Módulos. Feito sob medida.</h2>
            <p className="text-gray-400 text-lg">Da captação do cartão de crédito à infraestrutura de nuvem, cuidamos de toda a engenharia.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {[
                { id: 'arquitetura', label: 'Infraestrutura Multi-Tenant', icon: Server },
                { id: 'pagamentos', label: 'Motor de Assinaturas', icon: CreditCard },
                { id: 'onboarding', label: 'Fluxos de Ativação', icon: Users },
                { id: 'backoffice', label: 'Painel Admin Interno', icon: LayoutTemplate }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabKey)}
                    className={`flex items-center justify-between p-4 rounded-xl text-left transition-all ${
                      isActive 
                        ? 'bg-purple-600 text-white shadow-lg border border-purple-500' 
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
            <h2 className="text-3xl font-bold text-white mb-4">Nossa esteira de desenvolvimento de Produto</h2>
            <p className="text-gray-400">Tiramos sua ideia do papel blindando o risco técnico do projeto.</p>
          </div>

          <div className="space-y-6">
            {[
              { num: "01", title: "Viabilidade Técnica e de Produto", desc: "Mapeamos os recursos centrais do seu negócio para diferenciar o que é 'Gordura' do que é o 'Corpo' do MVP, reduzindo drasticamente o tempo de lançamento." },
              { num: "02", title: "Prototipagem de UX para Conversão", desc: "Desenhamos telas modernas e minimalistas. Você testa o fluxo de uso no Figma antes mesmo de escrevermos a primeira linha de código, mitigando falhas na jornada do usuário." },
              { num: "03", title: "Modelagem Multi-Tenant Segura", desc: "Estruturamos a espinha dorsal de dados (PostgreSQL/MongoDB) garantindo que as informações do 'Cliente A' nunca se cruzem com o 'Cliente B'." },
              { num: "04", title: "Desenvolvimento Ágil e Entregas Contínuas", desc: "Criamos as APIs separadas do Frontend. Você e seus primeiros Alpha Testers testam as funções em servidores de Homologação semanais." },
              { num: "05", title: "Soft Launch e Monitoramento", desc: "Colocamos o produto no ar integrando ferramentas de monitoramento de crash e logs em tempo real, sustentando a arquitetura sob a carga dos primeiros clientes pagos." }
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
