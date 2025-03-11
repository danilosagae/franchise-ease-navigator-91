
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  UserCheck, 
  Calculator, 
  Map, 
  Award, 
  Building, 
  ClipboardList 
} from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <UserCheck className="h-8 w-8 text-brand-blue" />,
      title: "Análise do seu perfil",
      description: "Identificamos suas habilidades, interesses e objetivos para encontrar o melhor segmento."
    },
    {
      icon: <Calculator className="h-8 w-8 text-brand-blue" />,
      title: "Análise da capacidade de investimento",
      description: "Avaliamos sua capacidade financeira para sugerir opções viáveis e sustentáveis."
    },
    {
      icon: <Map className="h-8 w-8 text-brand-blue" />,
      title: "Avaliação do potencial da cidade",
      description: "Analisamos o mercado local para identificar as melhores oportunidades na sua região."
    },
    {
      icon: <Award className="h-8 w-8 text-brand-blue" />,
      title: "Escolha da melhor franquia",
      description: "Recomendamos as franquias mais alinhadas ao seu perfil e objetivos."
    },
    {
      icon: <Building className="h-8 w-8 text-brand-blue" />,
      title: "Avaliação de pontos comerciais",
      description: "Analisamos localizações potenciais para maximizar o sucesso do seu negócio."
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-brand-blue" />,
      title: "Plano de negócios e financiamento",
      description: "Estruturamos um plano detalhado e estratégias de financiamento para seu investimento."
    }
  ];

  return (
    <div className="py-16 bg-white" id="processo">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Nossa Solução
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Entendemos a sua realidade e simplificamos para você. Montamos um processo eficaz para a avaliação e escolha de oportunidades de investimento, adaptada ao seu perfil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-blue/10 rounded-full">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{solution.title}</h3>
                <p className="text-gray-600 text-center">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
