import React from 'react';
import Sidebar from '@/components/Sidebar2';
import Header from '@/components/Header';
import Titulopanel from '@/components/Titulopanel';
import { Metricas } from '@/components/dashboard/Metricas';
import Estadsticas from '@/components/dashboard/Estadsticas';
export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
       <Header />
      <Sidebar />
      

      {/* Contenido principal */}
      <div className="mt-22 flex-1 bg-white p-6">
        <Titulopanel />
       
        

        {/* Métricas generales */}
       <Metricas />

        {/* Estadísticas */}
        <Estadsticas />
      
      </div>
    </div>
  );
}
