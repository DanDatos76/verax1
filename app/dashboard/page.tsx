import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Titulopanel from '@/components/Titulopanel';
import { Metricas } from '@/components/dashboard/Metricas';
import Estadisticas from '@/components/dashboard/Estadsticas';
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50"> {/* Agregamos un fondo general y flex */}
      {/* Sidebar - Fijo a la izquierda */}
      <Sidebar />

      {/* Contenido principal - Ocupa el espacio restante */}
      <div className="flex-1 ml-56 pt-20 p-6"> {/* Agregamos ml para compensar el Sidebar y pt para el Header */}
        {/* Header - Fijo arriba y ocupa el ancho restante del contenido */}
        <Header />
        
        <Titulopanel />
        
        {/* Métricas generales */}
        <Metricas />

        {/* Estadísticas */}
        <Estadisticas />
      </div>
    </div>
  );
}