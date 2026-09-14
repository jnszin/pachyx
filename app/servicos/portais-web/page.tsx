"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { 
  Box, 
  Users, ChevronRight, 
  CheckCircle2, ArrowRight, LayoutTemplate,
  Globe, Lock, Workflow
, CreditCard, BarChart3 } from 'lucide-react';

export default function PortaisWeb() {
  type TabKey = 'cliente' | 'fornecedor' | 'seguranca' | 'integracao';
  const [activeTab, setActiveTab] = useState<TabKey>('cliente');

  const tabs = {
    cliente: {
      title: "Portal de Autoatendimento (B2B/B2C)",
      desc: "Desafogue seu suporte. Seus clientes acompanham pedidos, emitem segunda via de boletos e abrem chamados diretamente em um ambiente logado exclusivo.",
      features: ["Emissão Automática de 2ª Via", "Rastreio de Entregas em Tempo Real", "Sistema Integrado de Tickets/Suporte", "Painel Whitelabel com sua Marca"]
    },
    fornecedor: {
      title: "Governança de Fornecedores",
      desc: "Acabe com a troca infinita de e-mails. Fornecedores inserem notas fiscais e acompanham prazos de pagamento numa interface auditável.",
      features: ["Upload Seguro de NFs e XMLs", "Timeline de Status de Pagamento", "Homologação e Cadastro de Parceiros", "Auditoria de Certidões Negativas"]
    },
    seguranca: {
      title: "Arquitetura Blindada",
      desc: "Portais expostos à internet precisam de rigor militar. Implementamos infraestrutura de nível bancário para proteger seus dados contra acessos indevidos.",
      features: ["Autenticação 2FA (MFA)", "Criptografia de Ponta a Ponta", "Gestão Granular de Permissões (RBAC)", "Prevenção contra Ataques DDoS"]
    },
    integracao: {
      title: "O Braço Externo do seu ERP",
      desc: "O portal não é um sistema isolado. Ele lê e escreve informações em tempo real no seu banco de dados interno, sem que o cliente acesse o ERP.",
      features: ["APIs Customizadas REST/GraphQL", "Sincronização Bidirecional Segura", "Webhooks para Notificações Instantâneas", "Cache Redis para Alta Performance"]
    }
  };

  return (
    <FadeIn delay={0.2} direction="none" fullWidth>
    <main className="min-h-screen bg-[#050505] text-gray-200 selection:bg-teal-500/30 overflow-hidden">
      
      {/* SEÇÃO 1: HERO */}
      <section className="relative pt-40 pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-teal-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/40 border border-teal-900/50 mb-8 backdrop-blur-sm">
          <Globe className="w-4 h-4 text-teal-400" />
          <span className="text-xs font-medium text-teal-300 tracking-wider">PORTAIS PARA STAKEHOLDERS</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter max-w-5xl mb-6 leading-[1.1]">
          Conecte sua empresa ao mundo. <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-300">Com segurança bancária.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Substituímos o caos do WhatsApp e e-mails perdidos por Portais Web corporativos de altíssima performance. Dê autonomia para seus clientes e fornecedores resolverem problemas sozinhos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-24 z-10">
          <Link href="/contato" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white hover:bg-teal-500 font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_30px_rgba(13,148,136,0.5)]">
            Planejar Meu Portal <ArrowRight className="w-4 h-4" />
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
                 <span className="text-[8px] text-gray-500">portal.pachyx.com</span>
              </div>
            </div>

            {/* Conteúdo Falso (Intranet / Portal UI) */}
            <div className="flex flex-col sm:flex-row gap-4 h-full overflow-hidden">
              {/* Left Sidebar (Links úteis) - Hidden on mobile */}
              <div className="hidden sm:flex w-[25%] lg:w-[20%] h-full bg-gray-900/40 rounded-xl p-3 flex-col gap-4 border border-gray-800/50">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-gray-300 uppercase tracking-wider mb-1">Departamentos</span>
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-teal-600/10 border border-teal-500/20 rounded-lg text-teal-400">
                    <div className="w-3.5 h-3.5 rounded bg-teal-500/20 flex items-center justify-center"><Users className="w-2.5 h-2.5" /></div>
                    <span className="text-[9px] font-medium">Recursos Humanos</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400 hover:text-gray-200">
                    <div className="w-3.5 h-3.5 rounded bg-gray-800 flex items-center justify-center"><Box className="w-2.5 h-2.5" /></div>
                    <span className="text-[9px] font-medium">TI & Suporte</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400 hover:text-gray-200">
                    <div className="w-3.5 h-3.5 rounded bg-gray-800 flex items-center justify-center"><CreditCard className="w-2.5 h-2.5" /></div>
                    <span className="text-[9px] font-medium">Financeiro</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-gray-300 uppercase tracking-wider mb-1">Links Rápidos</span>
                  <span className="text-[8px] text-teal-400 font-medium px-2">• Solicitar Férias</span>
                  <span className="text-[8px] text-gray-400 hover:text-gray-200 px-2">• Holerite Mês Atual</span>
                  <span className="text-[8px] text-gray-400 hover:text-gray-200 px-2">• Ramais Internos</span>
                </div>
              </div>

              {/* Main Feed Area */}
              <div className="flex-1 flex flex-col gap-3 h-full">
                {/* Search / Status Box */}
                <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-2.5 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-600/20 border border-teal-500/30 flex items-center justify-center">
                    <Users className="w-3 h-3 text-teal-400" />
                  </div>
                  <div className="flex-1 h-6 bg-gray-950 rounded-lg border border-gray-800 flex items-center px-2">
                    <span className="text-[9px] text-gray-500">Compartilhe uma atualização com a equipe...</span>
                  </div>
                </div>

                {/* Feed Posts */}
                <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
                  {/* Post 1 */}
                  <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gray-700"></div>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-white font-medium">Diretoria Corporativa</span>
                          <span className="text-[7px] text-gray-500">Há 2 horas • Comunicado Oficial</span>
                        </div>
                      </div>
                      <span className="px-1.5 py-0.5 rounded border border-teal-500/30 bg-teal-500/10 text-teal-400 text-[6px]">Geral</span>
                    </div>
                    <span className="text-[11px] font-bold text-white mt-1">Resultados do 3º Trimestre batem recorde</span>
                    <span className="text-[8px] text-gray-400 leading-relaxed">
                      É com grande alegria que anunciamos que ultrapassamos nossa meta anual em apenas 9 meses. Parabéns a todas as equipes pelo excelente trabalho...
                    </span>
                    <div className="w-full h-16 sm:h-20 bg-teal-900/20 rounded-lg border border-teal-800/30 mt-1 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-teal-500/50" />
                    </div>
                  </div>

                  {/* Post 2 */}
                  <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-purple-900/50 border border-purple-800/50"></div>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-white font-medium">Recursos Humanos</span>
                          <span className="text-[7px] text-gray-500">Ontem às 14:30 • Eventos</span>
                        </div>
                      </div>
                      <span className="px-1.5 py-0.5 rounded border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[6px]">Social</span>
                    </div>
                    <span className="text-[11px] font-bold text-white mt-1">Festa de Confraternização de Fim de Ano 🎉</span>
                    <span className="text-[8px] text-gray-400 leading-relaxed">
                      Reserve a data! Nossa festa anual acontecerá no dia 15 de Dezembro no clube central. Por favor, confirmem presença até sexta-feira respondendo ao formulário.
                    </span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A falha na comunicação externa.</h2>
            <p className="text-gray-400 text-lg">Quando seus clientes não têm autonomia, seu time de suporte paga o preço da ineficiência.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-9000/50"></div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-white" />
                <span className="text-gray-300 font-mono text-sm font-semibold tracking-wide">ERR_SUPORTE_LOTADO</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Atendimento Sufocado</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Funcionários caros perdendo o dia inteiro para responder perguntas simples no WhatsApp como &quot;qual o status do meu pedido?&quot; ou &quot;me envia o boleto de novo?&quot;.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Área logada 24/7 com integração ao ERP para consultas e serviços em tempo real.</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600/70 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-gray-600 animate-pulse" />
                <span className="text-gray-400 font-mono text-sm font-bold tracking-wide">FATAL_VAZAMENTO_DADOS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Risco de Compliance</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Troca de planilhas de faturamento e contratos via e-mail corporativo expõe a empresa a multas da LGPD e espionagem industrial.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Ambiente criptografado com auditoria de acesso e controle rigoroso de permissões.</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-gray-900/30 rounded-3xl p-6 relative overflow-hidden group hover:border-gray-800/50 transition-colors flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-600/50"></div>
              <div className="flex items-center gap-3 mb-6">
                <Workflow className="w-6 h-6 text-gray-600" />
                <span className="text-gray-400 font-mono text-sm font-semibold tracking-wide">WARN_FORNECEDOR_CAOS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Atrito com Parceiros</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Desorganização no envio de notas fiscais, cobranças duplicadas e prazos de pagamento perdidos desgastam a relação B2B da operação.</p>
              
              <div className="bg-gray-900/30 p-4 rounded-xl flex items-start gap-3 border border-gray-900/50 mt-auto shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium leading-snug">Painéis de self-service onde o próprio parceiro alimenta e audita o sistema central.</span>
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
            <p className="text-gray-400 text-lg">Seja qual for a necessidade de conexão da sua empresa, nós desenvolvemos a interface e as APIs.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {[
                { id: 'cliente', label: 'Área do Cliente (B2B/C)', icon: Users },
                { id: 'fornecedor', label: 'Portal do Fornecedor', icon: Box },
                { id: 'seguranca', label: 'Módulo de Segurança', icon: Lock },
                { id: 'integracao', label: 'Integrações e Webhooks', icon: Workflow }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabKey)}
                    className={`flex items-center justify-between p-4 rounded-xl text-left transition-all ${
                      isActive 
                        ? 'bg-teal-600 text-white shadow-lg border border-teal-500' 
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
            <h2 className="text-3xl font-bold text-white mb-4">Nossa esteira de engenharia de Portais</h2>
            <p className="text-gray-400">Desde o desenho da jornada até a homologação das pontas conectadas.</p>
          </div>

          <div className="space-y-6">
            {[
              { num: "01", title: "Mapeamento da Jornada do Usuário", desc: "Identificamos quais informações o cliente/fornecedor mais requisita do seu suporte diariamente, para transformar essas dores nas features principais do Portal." },
              { num: "02", title: "Design Universal e Acessível", desc: "Criamos as telas no Figma priorizando a facilidade de uso, afinal, seu cliente não pode precisar de um treinamento para conseguir baixar a própria nota fiscal." },
              { num: "03", title: "Desenvolvimento de APIs Intermediárias", desc: "Criamos uma camada de segurança (Middlewares) para que o Portal leia as informações do seu banco de dados principal sem jamais expor a arquitetura interna do ERP." },
              { num: "04", title: "Engenharia de Acesso (SSO/MFA)", desc: "Codificamos sistemas robustos de login para garantir que os dados de uma empresa terceira nunca vazem ou sejam acessados por outro fornecedor acidentalmente." },
              { num: "05", title: "Lançamento e Auditoria Beta", desc: "Iniciamos os acessos com um pequeno grupo (Beta), monitoramos os logs de atividade para refinar a usabilidade e então liberamos para toda a base." }
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
