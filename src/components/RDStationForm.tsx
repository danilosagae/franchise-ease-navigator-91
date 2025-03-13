import { useEffect } from "react";

const RDStationForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    script.async = true;
    script.onload = () => {
      new RDStationForms("form-vulkan-cf41bc4b125fd34b40e7", "null").createForm();
    };
    document.body.appendChild(script);
  }, []);

  return <div role="main" id="form-vulkan-cf41bc4b125fd34b40e7"></div>;
};

export default RDStationForm;
