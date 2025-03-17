import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'});
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/ba75612b-6eb5-48b0-b821-7203b1c5abd4.png" 
            alt="Investir em Franquia" 
            className="h-16"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#beneficios" className="text-gray-700 hover:text-brand-blue transition-colors">
            Benefícios
          </a>
          <a href="#processo" className="text-gray-700 hover:text-brand-blue transition-colors">
            Nosso Processo
          </a>
          <a href="#depoimentos" className="text-gray-700 hover:text-brand-blue transition-colors">
            Depoimentos
          </a>
          <Button
            onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white"
          >
            Agende uma Conversa
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a
              href="#beneficios"
              className="text-gray-700 py-2 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#processo"
              className="text-gray-700 py-2 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosso Processo
            </a>
            <a
              href="#depoimentos"
              className="text-gray-700 py-2 hover:text-brand-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <Button
              onClick={scrollToContact}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full"
            >
              Agende uma Conversa
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
