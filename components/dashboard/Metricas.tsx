"use client";
import React from 'react'

export  function Metricas() {
  return (
     <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="border border-red-700 rounded-2xl p-4 text-center">
            <p className="text-sm text-gray-600">Total de casos</p>
            <p className="text-2xl font-bold text-red-700">29</p>
          </div>
          <div className="border border-red-700 rounded-2xl p-4 text-center">
            <p className="text-sm text-gray-600">Casos abiertos</p>
            <p className="text-2xl font-bold text-red-700">9</p>
          </div>
          <div className="border border-red-700 rounded-2xl p-4 text-center">
            <p className="text-sm text-gray-600">Casos resueltos</p>
            <p className="text-2xl font-bold text-red-700">20</p>
          </div>
          <div className="border border-red-700 rounded-2xl p-4 text-center">
            <p className="text-sm text-gray-600">Tiempo promedio</p>
            <p className="text-2xl font-bold text-red-700">25 días</p>
          </div>
        </div>
  )
}

