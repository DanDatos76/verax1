"use client";

import DocumentModelo from "./DocumentoModelo";


const DocumentPanel = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Botones */}
      <div className="flex gap-2 mb-4">
        {["Actualizar", "Abierto", "Añadir Sección", "Vista Previa"].map((btn) => (
          <button
            key={btn}
            className="px-3 py-1 text-xs border border-[#E40046] text-[#E40046] rounded-full hover:bg-red-50"
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Documento con borde azul */}
      <div className="flex-1 border border-[#E40046] ">
        <div className="border-2 border-blue-400  flex items-center justify-center bg-white">
          <span className="text-gray-400">Documento</span>
          <DocumentModelo />
        </div>
       
      </div>
    </div>
  );
};

export default DocumentPanel;
