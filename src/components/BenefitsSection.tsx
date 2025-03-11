
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ShieldCheck, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  return (
    <div className="py-16 bg-gray-50" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Benefícios da Nossa Consultoria
          </h2>
          <p className="text-lg text-gray-600">
            Ao contar com nossa expertise, você obtém vantagens concretas para o seu investimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="benefit-card shadow-lg border-t-4 border-brand-green">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Economize Tempo</h3>
              <p className="text-gray-600 text-center">
                Economize tempo com nossa metodologia que agiliza o processo de avaliação e seleção de franquias.
              </p>
            </CardContent>
          </Card>

          <Card className="benefit-card shadow-lg border-t-4 border-brand-purple">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="h-12 w-12 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Reduza os Riscos</h3>
              <p className="text-gray-600 text-center">
                Reduza os riscos do investimento com base em análises profundas e avaliações criteriosas de cada oportunidade.
              </p>
            </CardContent>
          </Card>

          <Card className="benefit-card shadow-lg border-t-4 border-brand-blue">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <TrendingUp className="h-12 w-12 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Maximize Seu Retorno</h3>
              <p className="text-gray-600 text-center">
                Maximize seu retorno financeiro com estratégias personalizadas e planejamento de longo prazo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
