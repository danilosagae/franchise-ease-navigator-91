
import { useEffect } from "react";

const RDStationForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore - RDStationForms is loaded by the script
      new window.RDStationForms("form-vulkan-cf41bc4b125fd34b40e7", "null").createForm();
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

  return <div role="main" id="form-vulkan-cf41bc4b125fd34b40e7"></div>;
};

export default RDStationForm;
