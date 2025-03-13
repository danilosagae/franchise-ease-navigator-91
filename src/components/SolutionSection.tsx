
import React from "react";
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
      icon: <UserCheck className="h-6 w-6 text-[#8B5CF6]" />,
      title: "Análise do seu perfil",
      description: "Analisamos seu perfil e capacidade para encontrar o melhor segmento."
    },
    {
      icon: <Calculator className="h-6 w-6 text-[#8B5CF6]" />,
      title: "Capacidade de investimento",
      description: "Avaliamos sua capacidade financeira para sugerir opções viáveis."
    },
    {
      icon: <Map className="h-6 w-6 text-[#8B5CF6]" />,
      title: "Avaliação da cidade",
      description: "Avaliamos o potencial da cidade para identificar oportunidades."
    },
    {
      icon: <Award className="h-6 w-6 text-[#8B5CF6]" />,
      title: "Escolha da franquia",
      description: "Te ajudamos a escolher a melhor franquia alinhada ao seu perfil."
    },
    {
      icon: <Building className="h-6 w-6 text-[#8B5CF6]" />,
      title: "Avaliação de pontos",
      description: "Avaliamos pontos comerciais para maximizar o sucesso do negócio."
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-[#8B5CF6]" />,
      title: "Plano de negócios",
      description: "Elaboramos um plano com estratégias para seu investimento."
    }
  ];

  return (
    <div className="py-10 md:py-12 bg-white" id="processo">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Nossa Solução
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Entendemos a sua realidade e simplificamos o processo. Avaliamos as oportunidades de investimento adaptadas ao seu perfil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {solutions.map((solution, index) => (
            <div key={index} className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border-l-2 border-[#8B5CF6]">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-[#8B5CF6]/10 mr-3">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{solution.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-[#2A3267] to-[#3F4E87] p-6 rounded-lg text-white shadow-lg">
          <h3 className="text-xl font-bold mb-3">
            Pronto para começar sua jornada empreendedora?
          </h3>
          <p className="text-white/90 mb-4 text-sm">
            Dê o primeiro passo para transformar seu sonho em um negócio de sucesso hoje mesmo.
          </p>
          <Button 
            className="bg-white text-[#2A3267] hover:bg-gray-100 px-6 shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300"
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
