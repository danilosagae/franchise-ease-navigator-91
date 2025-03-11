
import React from "react";
import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <AlertTriangle className="h-12 w-12 text-brand-orange" />
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Os desafios de escolher a franquia certa
          </h2>
          
          <div className="space-y-4 text-lg text-gray-700 mb-8">
            <p>
              Mas como escolher a melhor franquia para o seu perfil? Como fazer uma avaliação financeira completa? Como ter segurança na escolha do ponto? Como saber os maiores riscos do negócio?
            </p>
            <p>
              Quanto mais você estuda, mais claras ficam as incertezas do negócio...
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-blue">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Existe uma forma menos sofrida e mais segura para investir com qualidade
            </p>
            <p className="text-gray-600">
              Nossa consultoria especializada te ajuda a navegar por todas essas questões com confiança, reduzindo riscos e maximizando suas chances de sucesso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
