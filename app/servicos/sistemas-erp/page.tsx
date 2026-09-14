"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { 
  Terminal, ShieldAlert, Zap, Box, 
  Users, BarChart3, ChevronRight, 
  CheckCircle2, ArrowRight, LayoutTemplate,
  CreditCard, Database
} from 'lucide-react';

export default function SistemasERP() {
  type TabKey = 'financeiro' | 'crm' | 'estoque' | 'relatorios';
  const [activeTab, setActiveTab] = useState<TabKey>('financeiro');

  const tabs = {
    financeiro: {
      title: "Controle Financeiro 360º",
      desc: "Automação total de faturamento, conciliação bancária via PIX, boletos e DRE em tempo real.",
      features: ["Faturamento Multi-CNPJ Integrado", "Conciliação Automática sem Remessa", "DRE e Fluxo de Caixa Diário", "Rateio Complexo por Centro de Custos"]
    },
    crm: {
      title: "Gestão Comercial Inteligente",
      desc: "Histórico completo do cliente, comissões variáveis por corretor/vendedor e esteira de aprovação.",
      features: ["Fluxo de Aprovação e Alçadas Customizadas", "Regras Complexas de Comissionamento", "Geração Automática de Contratos (PDF)", "Rastreabilidade de Interações"]
    },
    estoque: {
      title: "Inventário e Logística",
      desc: "Fim das rupturas. Controle de múltiplos galpões com alertas de ressuprimento preditivo.",
      features: ["Multi-Almoxarifados", "Lógica de Ressuprimento Específica", "Rastreabilidade Total por Lote/Validade", "Inventário em Tempo Real"]
    },
    relatorios: {
      title: "Dashboards Executivos",
      desc: "Os números vitais da sua empresa na palma da mão, consolidados em gráficos de leitura instantânea.",
      features: ["KPIs e Métricas Exclusivas do Seu Negócio", "Margem de Lucro por Produto", "Integração com Power BI / Metabase", "Alertas Automatizados via WhatsApp/Email"]
    }
  };

  return (
    <FadeIn delay={0.2} direction="none" fullWidth>
    <main className="min-h-screen bg-[#050505] text-gray-200 selection:bg-blue-500/30 overflow-hidden">
      
      {/* SEÇÃO 1: HERO (O TERMINAL EXECUTIVO) */}
      <section className="relative pt-40 pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Efeitos de Luz de Fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-900/50 mb-8 backdrop-blur-sm">
          <Terminal className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium text-blue-300 tracking-wider">ENGENHARIA DE SOFTWARE PACHYX</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter max-w-5xl mb-6 leading-[1.1]">
          A espinha dorsal invisível<br /> da sua <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-300">operação em escala.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Sistemas ERP desenhados a nível de código para eliminar gargalos e garantir que sua empresa possa dobrar de tamanho sem dobrar o número de funcionários.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-24 z-10">
          <Link href="/contato" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-500 font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
            Agendar Diagnóstico <ArrowRight className="w-4 h-4" />
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
                 <span className="text-[8px] text-gray-500">erp.pachyx.com</span>
              </div>
            </div>

            {/* Conteúdo Falso (ERP UI) */}
            <div className="flex gap-4 h-full p-1 overflow-hidden">
              {/* Sidebar do ERP */}
              <div className="hidden sm:flex w-[25%] lg:w-[20%] h-full bg-gray-900/40 rounded-xl p-3 flex-col justify-between border border-gray-800/50">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-1 mb-2">
                    <Database className="w-4 h-4 text-blue-500" />
                    <span className="text-white font-bold text-[10px]">ERP Core</span>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-400">
                    <LayoutTemplate className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-medium">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400 hover:text-gray-200">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-medium">Financeiro</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400 hover:text-gray-200">
                    <Box className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-medium">Estoque</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400 hover:text-gray-200">
                    <Users className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-medium">CRM</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400 hover:text-gray-200">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-medium">Relatórios</span>
                  </div>
                </div>
                
                {/* User profile mini */}
                <div className="flex items-center gap-2 px-1 pt-2 border-t border-gray-800/50 mt-2">
                  <div className="w-5 h-5 rounded-full bg-gray-700"></div>
                  <div className="flex flex-col">
                    <span className="text-[8px] text-gray-300 font-medium leading-none mb-0.5">Admin</span>
                    <span className="text-[6px] text-gray-500 leading-none">admin@pachyx.com</span>
                  </div>
                </div>
              </div>

              {/* Main Workspace */}
              <div className="flex-1 flex flex-col gap-3">
                {/* Topbar interno */}
                <div className="flex justify-between items-center bg-gray-900/40 rounded-xl p-2 px-3 border border-gray-800/50">
                  <div className="w-1/3 h-5 bg-gray-950 rounded border border-gray-800 flex items-center px-2">
                    <span className="text-[8px] text-gray-500">Buscar módulo...</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-md bg-gray-800 flex items-center justify-center border border-gray-700">
                      <Zap className="w-3 h-3 text-yellow-500" />
                    </div>
                  </div>
                </div>

                {/* KPIs */}
                <div className="flex gap-2 sm:gap-3">
                  {/* KPI 1 */}
                  <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-2 sm:p-2.5 flex flex-col justify-center">
                    <span className="hidden sm:block text-[8px] text-gray-400 mb-1 uppercase tracking-wider">Receita Mensal</span>
                    <span className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1.5">R$ 142.500</span>
                    <div className="flex items-center gap-1">
                      <ArrowRight className="w-2.5 h-2.5 text-green-400 -rotate-45" />
                      <span className="text-[6px] sm:text-[7px] text-green-400">+12.5%</span>
                    </div>
                  </div>
                  {/* KPI 2 */}
                  <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-2 sm:p-2.5 flex flex-col justify-center">
                    <span className="hidden sm:block text-[8px] text-gray-400 mb-1 uppercase tracking-wider">Pedidos Atrasados</span>
                    <span className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1.5">48</span>
                    <div className="flex items-center gap-1">
                      <ShieldAlert className="w-2.5 h-2.5 text-red-400" />
                      <span className="text-[6px] sm:text-[7px] text-red-400">Crítico</span>
                    </div>
                  </div>
                  {/* KPI 3 */}
                  <div className="flex-1 bg-gray-900/40 border border-gray-800/50 rounded-xl p-2 sm:p-2.5 flex flex-col justify-center">
                    <span className="hidden sm:block text-[8px] text-gray-400 mb-1 uppercase tracking-wider">Clientes Ativos</span>
                    <span className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1.5">1.204</span>
                    <div className="flex items-center gap-1">
                      <Users className="w-2.5 h-2.5 text-blue-400" />
                      <span className="text-[6px] sm:text-[7px] text-blue-400">+5 hoje</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Area: Chart & Table */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-1 min-h-0">
                  {/* Chart */}
                  <div className="w-full sm:w-[55%] bg-gray-900/40 border border-gray-800/50 rounded-xl p-2 sm:p-2.5 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] font-medium text-gray-300">Fluxo de Caixa (Despesas vs Receitas)</span>
                    </div>
                    <div className="flex-1 flex items-end gap-1 overflow-hidden pt-2">
                      {[40, 55, 35, 70, 50, 85, 65, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex items-end gap-0.5 h-full group relative">
                          {/* Despesa (gray) */}
                          <div className="w-1/2 bg-gray-700/80 rounded-t-sm transition-all group-hover:bg-gray-600" style={{ height: `${h * 0.5}%` }}></div>
                          {/* Receita (blue) */}
                          <div className="w-1/2 bg-blue-500/90 rounded-t-sm shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all group-hover:bg-blue-400" style={{ height: `${h}%` }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Table */}
                  <div className="hidden sm:flex w-[45%] bg-gray-900/40 border border-gray-800/50 rounded-xl p-2.5 flex-col h-full">
                    <span className="text-[9px] font-medium text-gray-300 mb-2">Últimas Transações</span>
                    <div className="flex flex-col gap-1.5 overflow-hidden flex-1">
                      {/* Row 1 */}
                      <div className="flex justify-between items-center p-1.5 bg-gray-950/50 rounded border border-gray-800/50">
                        <div className="flex flex-col">
                          <span className="text-[8px] text-gray-200 font-medium">Tech Solutions SA</span>
                          <span className="text-[7px] text-gray-500">R$ 15.000</span>
                        </div>
                        <span className="text-[6px] px-1.5 py-0.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400">Pago</span>
                      </div>
                      {/* Row 2 */}
                      <div className="flex justify-between items-center p-1.5 bg-gray-950/50 rounded border border-gray-800/50">
                        <div className="flex flex-col">
                          <span className="text-[8px] text-gray-200 font-medium">Comercial ABC Ltda</span>
                          <span className="text-[7px] text-gray-500">R$ 2.450</span>
                        </div>
                        <span className="text-[6px] px-1.5 py-0.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400">Pendente</span>
                      </div>
                      {/* Row 3 */}
                      <div className="flex justify-between items-center p-1.5 bg-gray-950/50 rounded border border-gray-800/50">
                        <div className="flex flex-col">
                          <span className="text-[8px] text-gray-200 font-medium">Indústria Apex</span>
                          <span className="text-[7px] text-gray-500">R$ 8.900</span>
                        </div>
                        <span className="text-[6px] px-1.5 py-0.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400">Pago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Etiquetas Flutuantes */}
            <div className="absolute -left-12 top-1/4 bg-gray-900/90 backdrop-blur border border-gray-700 px-4 py-2 rounded-lg shadow-xl animate-bounce-slow">
              <span className="text-gray-400 text-xs font-bold">-80% Retrabalho</span>
            </div>
            <div className="absolute -right-8 bottom-1/4 bg-gray-900/90 backdrop-blur border border-gray-700 px-4 py-2 rounded-lg shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <span className="text-gray-400 text-xs font-bold">+ Clareza Total</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: DORES (ALERTAS DE SISTEMA) */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Erros fatais que custam o seu lucro.</h2>
            <p className="text-gray-400 text-lg">Um sistema genérico não resolve processos quebrados, apenas os digitaliza.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Erro 1: Informação Perdida (Azul) */}
            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-9000/50"></div>
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-white" />
                <span className="text-gray-300 font-mono text-sm font-semibold tracking-wide">ERR_DESCENTRALIZACAO</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Informação Perdida</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Equipe caçando dados vitais em planilhas não sincronizadas e mensagens de WhatsApp, gerando atritos constantes com o cliente.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Arquitetura de dados centralizada: uma única fonte de verdade para toda a empresa.</span>
              </div>
            </div>

            {/* Erro 2: Furos no Financeiro (Vermelho Crítico) */}
            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600/70 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="w-6 h-6 text-gray-600 animate-pulse" />
                <span className="text-gray-400 font-mono text-sm font-bold tracking-wide">FATAL_FLUXO_CEGO</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Furos no Financeiro</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Sem integração direta com os bancos, o recebimento de clientes vira um pesadelo de conferência manual e dinheiro invisível.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Workflows financeiros customizados e algoritmos de rateio sob medida.</span>
              </div>
            </div>

            {/* Erro 3: Time Engessado (Laranja) */}
            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600/50"></div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-gray-600" />
                <span className="text-gray-400 font-mono text-sm font-semibold tracking-wide">WARN_TRABALHO_BRACAL</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Time Engessado</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Funcionários caros gastando metade do dia digitando os mesmos dados em dois ou três sistemas engessados diferentes.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Integração direta via APIs e automação programada de tarefas repetitivas.</span>
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
            <p className="text-gray-400 text-lg">Selecione uma área da empresa e veja como a nossa engenharia simplifica o fluxo.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Menu Lateral */}
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {[
                { id: 'financeiro', label: 'Financeiro e Caixa', icon: CreditCard },
                { id: 'crm', label: 'Vendas e CRM', icon: Users },
                { id: 'estoque', label: 'Estoque e Logística', icon: Box },
                { id: 'relatorios', label: 'Alta Gestão', icon: BarChart3 }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabKey)}
                    className={`flex items-center justify-between p-4 rounded-xl text-left transition-all ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-lg border border-blue-500' 
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

            {/* Painel de Conteúdo */}
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

      {/* SEÇÃO 4: O PROCESSO (TERMINAL LÓGICO) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-[2.5rem] p-10 md:p-16">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Como estruturamos sua operação</h2>
            <p className="text-gray-400">Nossa esteira de desenvolvimento é cirúrgica e transparente.</p>
          </div>

          <div className="space-y-6">
            {[
              { num: "01", title: "Imersão e Otimização de Processos", desc: "Mapeamos exatamente como o dinheiro entra e sai da sua empresa e revisamos as rotinas atuais. Em vez de automatizar ineficiências, redesenhamos o fluxo para que o novo sistema elimine gargalos, envolvendo seus usuários-chave desde o primeiro dia." },
              { num: "02", title: "Prototipagem e Validação Visual", desc: "Desenhamos todas as telas e botões antes da programação pesada. Sua equipe navega por um protótipo visual e aprova a usabilidade antes de construirmos o motor do sistema." },
              { num: "03", title: "Arquitetura e Modelagem de Dados", desc: "Com o visual aprovado, modelamos bancos de dados robustos (como PostgreSQL) e preparamos a infraestrutura garantindo segurança bancária, escalabilidade e velocidade absoluta nas consultas." },
              { num: "04", title: "Desenvolvimento Modular", desc: "Codificamos entregando partes funcionais. Com uma separação clara entre interface e retaguarda (APIs), sua equipe testa módulos específicos e sente a diferença muito antes da versão final." },
              { num: "05", title: "Implantação Assistida e Rollout", desc: "Sem transições traumáticas. Implementamos a nova infraestrutura em paralelo com a atual. Treinamos seu time e fazemos a virada de chave com segurança total, sem parar a operação." }
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
