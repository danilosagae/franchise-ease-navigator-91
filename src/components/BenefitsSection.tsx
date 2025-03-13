
import React from "react";
import { Clock, ShieldCheck, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  return (
    <div className="py-12 bg-[#2A3267]/5" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Benefícios da Nossa Consultoria
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Ao contar com nossa expertise, você obtém vantagens concretas para o seu investimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="benefit-card p-5 bg-white rounded-lg shadow-md border-t-2 border-[#10B981]">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-[#10B981]/10 rounded-full mr-3">
                <Clock className="h-6 w-6 text-[#10B981]" />
              </div>
              <h3 className="text-lg font-semibold">Economize Tempo</h3>
            </div>
            <p className="text-base text-gray-600 pl-11">
              Economize tempo com nossa metodologia que agiliza o processo de avaliação e seleção.
            </p>
          </div>

          <div className="benefit-card p-5 bg-white rounded-lg shadow-md border-t-2 border-[#8B5CF6]">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-[#8B5CF6]/10 rounded-full mr-3">
                <ShieldCheck className="h-6 w-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-lg font-semibold">Reduza os Riscos</h3>
            </div>
            <p className="text-base text-gray-600 pl-11">
              Reduza os riscos do investimento com análises profundas e avaliações criteriosas.
            </p>
          </div>

          <div className="benefit-card p-5 bg-white rounded-lg shadow-md border-t-2 border-[#2563EB]">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-[#2563EB]/10 rounded-full mr-3">
                <TrendingUp className="h-6 w-6 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold">Maximize Seu Retorno</h3>
            </div>
            <p className="text-base text-gray-600 pl-11">
              Maximize seu retorno financeiro com estratégias personalizadas e planejamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
