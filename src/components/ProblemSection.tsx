
import React from "react";
import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  return (
    <div className="py-8 md:py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-5">
            <AlertTriangle className="h-10 w-10 text-[#8B5CF6]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
            Os desafios de escolher a franquia certa
          </h2>
          
          <div className="space-y-3 text-base md:text-lg text-gray-700 mb-6">
            <p>
              Quanto mais você pesquisa, mais dúvidas aparecem: e se eu escolher a franquia errada? E se o ponto não der certo? E se eu perder meu investimento?
            </p>
            <p>
              Não precisa ser tão doloroso assim.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg highlight-box">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Existe uma forma menos dolorosa e mais segura para investir
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Nossa consultoria especializada te ajuda a navegar com confiança, reduzindo riscos e maximizando suas chances de sucesso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
