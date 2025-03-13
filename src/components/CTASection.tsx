
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RDStationForm from "./RDStationForm";

const CTASection = () => {
  return (
    <div className="py-16 hero-gradient" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Supere o medo e comece sua jornada empreendedora com segurança agora
          </h2>
          <p className="text-lg">
            Agende uma conversa gratuita e descubra como podemos ajudar você a iniciar sua jornada empreendedora.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
            Agende uma Conversa Gratuita
          </h3>
          
          <div id="rd-form-container" className="w-full">
            <RDStationForm />
          </div>
          
          {/* Fallback button */}
          <div className="text-center mt-4" id="fallback-button" style={{ display: 'none' }}>
            <Button 
              size="default"
              className="bg-brand-blue hover:bg-brand-blue/90 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://consultoriainvestiremfranquias.typeform.com/to/xxxx', '_blank')}
            >
              Descubra a franquia ideal para você
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
