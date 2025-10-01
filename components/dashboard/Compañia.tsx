import React from 'react'

function Compañia() {
  return (
    <div className="border border-red-700 rounded p-4">
            <h2 className="font-semibold mb-4 text-red-700">
              Estadísticas por Compañía
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { nombre: "Sancor Seguros", total: 10, abiertos: 3, resueltos: 7 },
                { nombre: "ATM", total: 15, abiertos: 5, resueltos: 10 },
                { nombre: "Rivadavia", total: 4, abiertos: 1, resueltos: 3 },
              ].map((c, i) => (
                <div
                  key={i}
                  className="border border-red-700 rounded-3xl p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-red-700">{c.nombre}</p>
                    <p className="text-xs">
                      Total de casos {c.total} - Casos abiertos {c.abiertos} -
                      Casos resueltos {c.resueltos}
                    </p>
                  </div>
                  <button className="border border-red-700 text-red-700 rounded-4xl px-2 py-1 text-sm hover:bg-red-700 hover:text-white transition">
                    Ver Detalle
                  </button>
                </div>
              ))}
            </div>
          </div>
       
  )
}

export default Compañia