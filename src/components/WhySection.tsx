
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Coins, Briefcase } from "lucide-react";

const WhySection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Por que abrir uma franquia?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Abrir uma franquia pode ser o caminho para independência financeira e realização pessoal, mas o medo e a confusão podem travar seu sonho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-blue/10 rounded-full">
                  <Coins className="h-8 w-8 text-brand-blue" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Independência Financeira</h3>
              <p className="text-gray-600 text-center">
                Invista em um modelo de negócio comprovado com potencial de retorno consistente.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-purple/10 rounded-full">
                  <Lightbulb className="h-8 w-8 text-brand-purple" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Realização Pessoal</h3>
              <p className="text-gray-600 text-center">
                Seja dono do seu próprio tempo com um negócio que tem processos bem definidos.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-green/10 rounded-full">
                  <Briefcase className="h-8 w-8 text-brand-green" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Seu Próprio Negócio</h3>
              <p className="text-gray-600 text-center">
                Realize seu sonho empreendedor com o suporte de uma marca estabelecida.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
