
import React from "react";
import { Lightbulb, Coins, Briefcase } from "lucide-react";

const WhySection = () => {
  const benefits = [
    {
      icon: <Coins className="h-6 w-6 text-[#8B5CF6]" />,
      title: "Independência Financeira",
      description: "Invista em um modelo de negócio comprovado com potencial de retorno consistente."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-[#8B5CF6]" />,
      title: "Realização Pessoal",
      description: "Seja dono do seu próprio tempo com um negócio que tem processos bem definidos."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-[#8B5CF6]" />,
      title: "Seu Próprio Negócio",
      description: "Realize seu sonho empreendedor com o suporte de uma marca estabelecida."
    }
  ];

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Por que abrir uma franquia?
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Abrir uma franquia pode ser o caminho para independência financeira e realização pessoal, mas o medo e a confusão podem travar seu sonho.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg bullet-card">
              <div className="p-2 rounded-full bg-[#8B5CF6]/10 mr-4 mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySection;
