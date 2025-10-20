// components/PanelHeader.tsx
import React from "react"; ///  Filter
import { ChevronDown, X,Filter } from "lucide-react"; // Importamos los iconos para Plegar y el dropdown


const PanelHeader = () => {
  return (
    <div className="mt-5 mb-7 flex items-center justify-between w-full">
      {/* Texto */}
      <div>
        <h2 className="text-black font-semibold text-xl mt-5">Panel</h2>
        <p className="text-xs text-black">Ver las métricas de nuestros casos</p>
      </div>

      {/* Botón */}
      <button className="border border-red-400 text-red-500 text-sm px-15 py-2 rounded-full hover:bg-red-50 transition mt-3">
        <Filter size={16} className="rotate-90" /> 
        Filtros
      </button>
    </div>
  );
};

export default PanelHeader;
