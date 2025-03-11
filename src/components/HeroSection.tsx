
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-24 pb-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Você está buscando uma franquia e está difícil decidir com qual seguir?
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Nós entendemos os desafios e estamos aqui para ajudar.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
            onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}
          >
            Agende uma consulta gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
