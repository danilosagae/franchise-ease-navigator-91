
import { useEffect } from "react";

const RDStationForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    script.async = true;
    script.onload = () => {
      new RDStationForms("formulario-de-contato-c1b2cc6f598ead42c9c2", "null").createForm();
    };
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      const scriptElements = document.querySelectorAll('script[src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"]');
      scriptElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, []);

  return <div role="main" id="formulario-de-contato-c1b2cc6f598ead42c9c2"></div>;
};

export default RDStationForm;
