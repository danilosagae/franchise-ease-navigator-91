
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { 
  UserCheck, 
  Calculator, 
  Map, 
  Award, 
  Building, 
  ClipboardList,
  ArrowRight
} from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <UserCheck className="h-8 w-8 text-brand-blue" />,
      title: "Análise do seu perfil",
      description: "Analisamos seu perfil e capacidade de investimento para encontrar o melhor segmento."
    },
    {
      icon: <Calculator className="h-8 w-8 text-brand-blue" />,
      title: "Capacidade de investimento",
      description: "Avaliamos sua capacidade financeira para sugerir opções viáveis e sustentáveis."
    },
    {
      icon: <Map className="h-8 w-8 text-brand-blue" />,
      title: "Avaliação da cidade",
      description: "Avaliamos o potencial da cidade de interesse para identificar as melhores oportunidades."
    },
    {
      icon: <Award className="h-8 w-8 text-brand-blue" />,
      title: "Escolha da franquia",
      description: "Te ajudamos a escolher a melhor franquia para você, alinhada ao seu perfil."
    },
    {
      icon: <Building className="h-8 w-8 text-brand-blue" />,
      title: "Avaliação de pontos",
      description: "Avaliamos pontos comerciais para maximizar o sucesso do seu negócio."
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-brand-blue" />,
      title: "Plano de negócios",
      description: "Elaboramos um plano de negócios completo com estratégias para seu investimento."
    }
  ];

  return (
    <div className="py-10 md:py-12 bg-white" id="processo">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Nossa Solução
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Entendemos a sua realidade e simplificamos o processo. Avaliamos as oportunidades de investimento adaptadas ao seu perfil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-brand-blue/10 rounded-full">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-center mb-2">{solution.title}</h3>
                <p className="text-sm md:text-base text-gray-600 text-center">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* New Call to Action */}
        <div className="max-w-2xl mx-auto text-center bg-brand-blue/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            Pronto para começar sua jornada empreendedora?
          </h3>
          <p className="text-gray-600 mb-4">
            Dê o primeiro passo para transformar seu sonho em um negócio de sucesso hoje mesmo.
          </p>
          <Button 
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6"
            onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}
          >
            Fale com um especialista
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
