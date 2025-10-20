// Sidebar2.tsx (actualizado) - integra el popup
"use client";
import React, { useState } from "react";
import {
  Search,
  Plus,
  Grid,
  User,
  Folder,
  Users,
  Bell,
  LogOut,
  FileText,
} from "lucide-react";
import Popup from "./casos/popup";

export default function Sidebar2() {
  const [openCrearCaso, setOpenCrearCaso] = useState(false);

  function handleOpen() {
    setOpenCrearCaso(true);
  }
  function handleClose() {
    setOpenCrearCaso(false);
  }

  function handleCrearCasoSubmit(data: Record<string, any>) {
    // Aquí conectás con tu API: fetch('/api/casos', {method:'POST', body:JSON.stringify(data)})...
    // Por ahora dejamos un console.log y cerramos el modal (ya hace close el modal desde el popup)
    console.log("Payload crear caso:", data);
    // ejemplo: fetch('/api/casos', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
    //   .then(r => r.json()).then(resp => { /* manejar */});
  }

  return (
    <>
      <aside className="flex h-screen w-72 overflow-hidden bg-[#2C3E50]">
        {/* Columna izquierda: icons */}
        <div className="w-14 flex flex-col items-center gap-6 py-4 bg-[#212F3D] border-r border-[#34495E]">
          <div className="w-12 h-12  rounded-md flex items-center justify-center text-white font-bold text-lg">
            <img src="verax-logo.jpg" alt="Logo" className="w-full h-full object-contain" />
          </div>

          <button className="text-white p-2 rounded-md bg-[#E40046]" aria-label="Dashboard">
            <Grid size={18} />
          </button>
          <button className="text-gray-400 p-2 rounded-md hover:bg-[#34495E]" aria-label="Perfil">
            <User size={18} />
          </button>
          <button className="text-gray-400 p-2 rounded-md hover:bg-[#34495E]" aria-label="Casos">
            <Folder size={18} />
          </button>
          <button className="text-gray-400 p-2 rounded-md hover:bg-[#34495E]" aria-label="Equipo">
            <Users size={18} />
          </button>

          <div className="mt-auto flex flex-col items-center gap-4">
            <div className="relative">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute -top-1 -right-1 bg-[#E40046] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">5</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden">
              <img src="a2.jpg" alt="User" className="w-full h-full object-cover" />
            </div>
            <button className="w-8 h-8 bg-[#E40046] rounded-md flex items-center justify-center">
              <LogOut size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Columna central / contenido */}
        <div className="flex-1 p-4 bg-white text-gray-800">
          <div className="flex justify-end gap-2 mb-4">
            {/* Aquí vinculamos el botón Plus al popup */}
            <button
              onClick={handleOpen}
              className="p-2 rounded-md hover:bg-gray-100 text-[#E40046]"
              aria-label="Agregar nuevo caso"
              title="Agregar nuevo caso"
            >
              <Plus size={18} />
            </button>

            <button className="p-2 rounded-md hover:bg-gray-100 text-[#E40046]">
              <FileText size={18} />
            </button>
            <button className="p-2 rounded-md bg-[#E40046] text-white">
              <Search size={18} />
            </button>
          </div>

          <h2 className="text-xs font-semibold uppercase text-gray-800 mb-4"># General</h2>

          <nav className="text-sm">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-red-50">
                <Folder size={16} className="text-[#E40046]" />
                <span># Información</span>
              </div>

              <div className="flex flex-col mt-2">
                <div className="flex items-center justify-between py-1 px-2 rounded-md bg-red-50">
                  <div className="flex items-center gap-2">
                    <Folder size={16} className="text-[#E40046]" />
                    <span className=" text-[#E40046] font-bold">En trámite</span>
                  </div>
                  <span className="text-xs bg-[#E40046] text-white px-2 py-0.5 rounded-full">3</span>
                </div>
                <ul className="ml-5 mt-2 space-y-1 text-xs text-[#E40046]">
                  <li># 200 - 321</li>
                  <li># 200 - 321</li>
                  <li># 200 - 321</li>
                </ul>
              </div>

              <div className="flex flex-col mt-2">
                <div className="flex items-center justify-between py-1 px-2 rounded-md hover:bg-red-50">
                  <div className="flex items-center gap-2">
                    <Folder size={16} className="text-[#E40046]" />
                    <span className="font-bold text-[#E40046]">En revisión</span>
                  </div>
                  <span className="text-xs bg-[#E40046] text-white px-2 py-0.5 rounded-full">5</span>
                </div>
              </div>

              <div className="flex flex-col mt-2">
                <div className="flex items-center justify-between py-1 px-2 rounded-md hover:bg-red-50">
                  <div className="flex items-center gap-2">
                    <Folder size={16} className="text-[#E40046]" />
                    <span className="font-bold text-[#E40046]">Terminados</span>
                  </div>
                  <span className="text-xs bg-[#E40046] text-white px-2 py-0.5 rounded-full">3</span>
                </div>
                <ul className="ml-5 mt-2 space-y-1 text-xs text-[#E40046]">
                  <li># 200 - 321</li>
                  <li># 200 - 321</li>
                  <li># 200 - 321</li>
                </ul>
              </div>

              <div className="flex flex-col mt-2">
                <div className="flex items-center justify-between py-1 px-2 rounded-md hover:bg-red-50">
                  <div className="flex items-center gap-2">
                    <Folder size={16} className="text-[#E40046]" />
                    <span className="font-bold text-[#E40046]">Desistidos</span>
                  </div>
                  <span className="text-xs bg-[#E40046] text-white px-2 py-0.5 rounded-full">9</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* Popup component */}
      <Popup
        open={openCrearCaso}
        onClose={handleClose}
        onSubmit={handleCrearCasoSubmit}
      />
    </>
  );
}
