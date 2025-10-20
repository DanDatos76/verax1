"use client";
import React from 'react';

export function Metricas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"> {/* Ajuste para responsividad */}
      {/* Tarjeta 1: Total de casos */}
      <div className="bg-white p-5 rounded-lg shadow-sm"> {/* Fondo blanco, padding, redondeado, sombra */}
        <p className="text-sm text-gray-500 mb-1">Total de casos</p> {/* Color y margen del texto */}
        <p className="text-4xl font-semibold text-gray-800">29</p> {/* Tamaño, peso y color del número */}
      </div>

      {/* Tarjeta 2: Casos abiertos */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <p className="text-sm text-gray-500 mb-1">Casos abiertos</p>
        <p className="text-4xl font-semibold text-gray-800">9</p>
      </div>

      {/* Tarjeta 3: Casos resueltos */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <p className="text-sm text-gray-500 mb-1">Casos resueltos</p>
        <p className="text-4xl font-semibold text-gray-800">20</p>
      </div>

      {/* Tarjeta 4: Tiempo promedio */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <p className="text-sm text-gray-500 mb-1">Tiempo promedio</p>
        <p className="text-4xl font-semibold text-red-600">25 días</p> {/* El número de "Tiempo promedio" es rojo en el modelo */}
      </div>
    </div>
  );
}