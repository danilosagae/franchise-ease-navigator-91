import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

import RDStationForm from "@/components/RDStationForm";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Preencha o formulário</h2>
      <RDStationForm />
    </div>
  );
}

export default App;

