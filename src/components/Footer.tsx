
import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/04d297e8-91b9-4d2b-9213-6405b424122f.png" 
                alt="Investir em Franquia" 
                className="h-[120px] invert"
                style={{ height: '120px' }}
              />
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <a 
                href="tel:+5511943916085" 
                className="flex items-center hover:text-brand-blue transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                (11) 94391-6085
              </a>
              
              <a 
                href="mailto:contato@investiremfranquia.com.br" 
                className="flex items-center hover:text-brand-blue transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                contato@investiremfranquia.com.br
              </a>
              
              <a 
                href="https://instagram.com/investiremfranquia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center hover:text-brand-blue transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                @investiremfranquia
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Investir em Franquia. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
