
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-16 md:pt-20 pb-12 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Abrir sua primeira franquia é confuso e assustador? Nós te entendemos
          </h1>
          <p className="text-base md:text-lg mb-6">
            Te guiamos passo a passo para transformar seu sonho em um negócio seguro.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-brand-blue hover:bg-gray-100 text-base px-6 py-5 rounded-full"
            onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}
          >
            Descubra a franquia ideal para você
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
