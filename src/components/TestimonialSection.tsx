
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <div className="py-8 bg-white" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="pt-4 pb-4">
              <div className="flex justify-center mb-2">
                <Quote className="h-7 w-7 text-brand-blue" />
              </div>
              <p className="text-base text-gray-700 text-center italic mb-3">
                "Com a consultoria, tive segurança para investir na minha primeira franquia. A ajuda foi essencial para estruturar o investimento."
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
