"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface ServicesDropdownProps {
  onItemClick?: () => void;
  isMobile?: boolean;
}

export default function ServicesDropdown({ onItemClick, isMobile }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: "Sistemas ERP", href: "/servicos/sistemas-erp" },
    { name: "SaaS e MVP", href: "/servicos/saas-e-mvp" },
    { name: "CRM Personalizado", href: "/servicos/crm-personalizado" },
    { name: "Portais Web", href: "/servicos/portais-web" },
    { name: "Sites Corporativos", href: "/servicos/sites-corporativos" }
  ];

  if (isMobile) {
    return (
      <div className="flex flex-col items-center w-full">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-[1.5rem] font-semibold text-white flex items-center gap-2"
        >
          Serviços
          <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="flex flex-col items-center gap-4 w-full bg-gray-900/50 rounded-2xl py-6 mt-4 border border-gray-800">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="text-xl font-medium text-gray-300 hover:text-white transition-colors"
                onClick={onItemClick}
              >
                {service.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop version
  return (
    <div className="relative group z-50">
      {/* Trigger */}
      <div className="cursor-pointer text-[0.9375rem] font-medium text-[#aaa] hover:text-white transition-colors py-2 px-3 rounded-lg group-hover:bg-gray-800/50 group-hover:text-white flex items-center gap-1.5">
        Serviços
        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </div>

      {/* Dropdown Menu */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <div className="bg-[#050505] border border-[#1f1f1f] rounded-2xl shadow-2xl overflow-hidden flex flex-col p-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="px-4 py-3 text-[15px] font-medium text-gray-400 hover:text-white hover:bg-[#111111] rounded-xl transition-all duration-300"
              onClick={onItemClick}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
