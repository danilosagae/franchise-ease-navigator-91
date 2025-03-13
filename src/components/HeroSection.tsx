
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-24 md:pt-28 pb-10 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Abrir sua primeira franquia é complexo e assustador?
            <br />
            <span className="block mt-2">Nós te entendemos</span>
          </h1>
          <p className="text-base md:text-lg mb-8 opacity-90">
            Te guiamos passo a passo para transformar seu sonho em um negócio seguro.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#2A3267] hover:bg-gray-100 text-base px-8 py-6 rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300"
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
