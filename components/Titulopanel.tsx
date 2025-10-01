// components/PanelHeader.tsx
import React from "react";

const PanelHeader = () => {
  return (
    <div className="mt-5 mb-7 flex items-center justify-between w-full">
      {/* Texto */}
      <div>
        <h2 className="text-red-600 font-semibold text-m">Panel</h2>
        <p className="text-xs text-red-500">Ver las métricas de nuestros casos</p>
      </div>

      {/* Botón */}
      <button className="border border-red-400 text-red-500 text-sm px-15 py-2 rounded-full hover:bg-red-50 transition mt-3">
        Filtrar
      </button>
    </div>
  );
};

export default PanelHeader;
