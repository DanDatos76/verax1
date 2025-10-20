import React from 'react';
import { ChevronDown, X } from "lucide-react"; // Importamos los iconos para Plegar y el dropdown

function Compañia() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full"> {/* Fondo blanco, padding, redondeado y sombra */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800"> {/* Tamaño de fuente, peso y color de texto */}
          🙍‍♂️ Estadísticas por Compañía
        </h2>
        <button className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-md text-gray-700 text-sm hover:bg-gray-200 transition-colors">
          <X size={16} /> {/* Icono de "X" como en el modelo */}
          <span>Plegar</span>
        </button>
      </div>
      <div className="flex flex-col gap-4"> {/* Ajuste de espaciado */}
        {[
          { id: 1, nombre: "Sancor Seguros", logo: "/sancor.png", total: 12, abiertos: 3, resueltos: 7 }, // Añadimos ID y un placeholder para el logo
          { id: 2, nombre: "ATM", logo: "/sancor.png", total: 15, abiertos: 5, resueltos: 10 },
          { id: 3, nombre: "Rivadavia", logo: "/sancor.png", total: 10, abiertos: 2, resueltos: 8 }, // Ajusté un valor para ser diferente
        ].map((c) => (
          <div
            key={c.id} // Usamos el ID como key
            className="flex items-center bg-white p-6 rounded-lg shadow-sm border border-gray-200" // Estilos de la tarjeta individual
          >
            <img src={c.logo} alt={`${c.nombre} logo`} className="w-10 h-10 object-contain rounded-full mr-4" /> {/* Placeholder para logo */}
            <div className="flex-1">
              <p className="font-medium text-gray-800">{c.nombre}</p>
              <p className="text-sm text-gray-500">
                Total de casos {c.total} - Casos abiertos {c.abiertos} -
                Casos resueltos {c.resueltos}
              </p>
            </div>
            <button className="flex items-center space-x-1 text-red-600 border border-red-600 rounded-full px-3 py-1 text-sm hover:bg-red-600 hover:text-white transition-colors">
              <span>Detalle</span>
              <ChevronDown size={16} className="rotate-90" /> {/* Icono de flecha rotada */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Compañia;