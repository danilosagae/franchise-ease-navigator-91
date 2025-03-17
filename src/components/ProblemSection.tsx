
import React from "react";
import { Lightbulb } from "lucide-react";

const ProblemSection = () => {
  return (
    <div className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
            Os desafios de escolher a franquia certa
          </h2>
          
          <div className="space-y-4 text-lg text-gray-700 mb-8">
            <p>
              Abrir uma franquia pode ser o caminho para independência financeira e realização pessoal, mas o medo e a complexidade podem travar seu sonho.
            </p>
            <p>
              Quanto mais você pesquisa, mais dúvidas aparecem: e se eu escolher a franquia errada? E se o ponto não der certo? E se eu perder meu investimento?
            </p>
            <p>
              Não precisa ser tão doloroso assim.
            </p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg highlight-box flex items-center transform transition-all duration-300 hover:scale-[1.02]">
            <div className="mr-5 hidden sm:block">
              <div className="p-3 bg-[#0EA5E9]/10 rounded-full">
                <Lightbulb className="h-8 w-8 text-[#0EA5E9]" />
              </div>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Existe uma forma mais segura para investir
              </p>
              <p className="text-gray-700 text-base md:text-lg">
                Nossa consultoria especializada te ajuda a navegar com confiança, reduzindo riscos e maximizando suas chances de sucesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
