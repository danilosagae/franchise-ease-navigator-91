
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <div className="py-16 bg-white" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex justify-center mb-4">
                <Quote className="h-10 w-10 text-brand-blue" />
              </div>
              <p className="text-lg text-gray-700 text-center italic mb-6">
                "Com a consultoria, tive segurança para investir na minha primeira franquia em alimentação. A ajuda foi essencial para estruturar a parte do investimento. Faltava boa parte do capital necessário, mas conseguimos resolver."
              </p>
              <div className="text-center">
                <p className="font-semibold text-gray-800">Guilherme Schneider</p>
                <p className="text-gray-600 text-sm">Franqueado Oak's Burritos em Porto Alegre - RS</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
