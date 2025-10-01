import React from 'react'
import Personales from './Personales'
import Compañia from './Compañia'

export default function Estadsticas() {
  return (
      <div className="grid grid-cols-2 gap-6">
          {/* Estadísticas Personales */}
          <Personales />
          {/* Estadísticas por Compañía */}
          <Compañia />

        </div>
  )
}

