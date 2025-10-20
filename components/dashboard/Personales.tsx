import React from 'react';
import { ChevronDown, X } from "lucide-react"; // Importamos los iconos para Plegar y el dropdown

function Personales() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full"> {/* Fondo blanco, padding, redondeado y sombra */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800"> {/* Tamaño de fuente, peso y color de texto */}
          🙍‍♂️ Estadísticas Personales
        </h2>
        <button className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-md text-gray-700 text-sm hover:bg-gray-200 transition-colors">
          <X size={16} /> {/* Icono de "X" como en el modelo */}
          <span>Plegar</span>
        </button>
      </div>
      <div className="flex flex-col gap-4"> {/* Ajuste de espaciado */}
        {[
          {
            id: 1, // Añadimos ID para las keys
            nombre: "Cesar Perich",
            rol: "Administrador",
            avatar: "/3a.jpg", // Placeholder para el avatar
            total: 12, // Ajusté los valores para que coincidan con el modelo
            abiertos: 3,
            resueltos: 7,
          },
          {
            id: 2,
            nombre: "Cesar Perich", // En el modelo el segundo también es Cesar Perich, no Tomas
            rol: "Usuario",
            avatar: "/3a.jpg", // Otro placeholder para avatar
            total: 10,
            abiertos: 5,
            resueltos: 5, // Ajusté el valor
          },
          {
            id: 3,
            nombre: "Cesar Perich", // En el modelo el tercero también es Cesar Perich
            rol: "Usuario",
            avatar: "/3a.jpg", // Otro placeholder para avatar
            total: 8,
            abiertos: 2,
            resueltos: 6, // Ajusté el valor
          },
        ].map((p) => (
          <div
            key={p.id} // Usamos el ID como key
            className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200" // Estilos de la tarjeta individual
          >
            {/* Bloque izquierda: avatar + info */}
            <div className="flex items-center gap-3 flex-1"> {/* flex-1 para que ocupe el espacio disponible */}
              {/* Avatar */}
              <img
                src={p.avatar} // Usamos la URL del avatar
                alt={`${p.nombre} avatar`}
                className="w-10 h-10 rounded-full object-cover" // Estilos para el avatar
              />

              <div>
                <p className="font-medium text-gray-800">{p.nombre}</p> {/* Color de texto */}
                <p className="text-xs text-gray-500">{p.rol}</p> {/* Color de texto */}
                <p className="text-sm text-gray-500 mt-2"> {/* Tamaño de fuente y color, ajuste de margen superior */}
                  Total de casos {p.total} - Casos abiertos {p.abiertos} - Casos resueltos {p.resueltos}
                </p>
              </div>
            </div>

            {/* Botón */}
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

export default Personales;