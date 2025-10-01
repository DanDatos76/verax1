import React from 'react'

function Personales() {
  return (
    <div className="border border-red-700 rounded-2xl p-4">
      <h2 className="font-semibold mb-4 text-red-700">
        Estadísticas Personales
      </h2>
      <div className="flex flex-col gap-4">
        {[
          {
            nombre: "Cesar Perich",
            rol: "Administrador",
            total: 10,
            abiertos: 3,
            resueltos: 7,
          },
          {
            nombre: "Tomas",
            rol: "Usuario",
            total: 15,
            abiertos: 5,
            resueltos: 10,
          },
          {
            nombre: "Cesar Perich",
            rol: "Usuario",
            total: 4,
            abiertos: 1,
            resueltos: 3,
          },
        ].map((p, i) => (
          <div
            key={i}
            className="border border-red-700 rounded-3xl p-3 flex justify-between items-center"
          >
            {/* Bloque izquierda: círculo + info */}
            <div className="flex items-center gap-3">
              {/* Circulo */}
              <div className="w-8 h-8 rounded-full border border-red-700" />

              <div>
                <p className="font-medium text-red-700">{p.nombre}</p>
                <p className="text-xs text-gray-600">{p.rol}</p>
                <p className="text-xs">
                  Total de casos {p.total} - Casos abiertos {p.abiertos} - Casos resueltos {p.resueltos}
                </p>
              </div>
            </div>

            {/* Botón */}
            <button className="border border-red-700 text-red-700 rounded-4xl px-2 py-1 text-sm hover:bg-red-700 hover:text-white transition">
              Ver Detalle
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Personales
