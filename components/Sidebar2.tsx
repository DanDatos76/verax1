import React from "react";
import { Search, BookOpen, User, Folder, Users } from "lucide-react";

// Sidebar de dos columnas según tu imagen
// - Columna izquierda: strip estrecho con iconos (ya tenías bien)
// - Columna derecha (contenido): buscador pill, + Añadir Caso y menú con subitems

export default function Sidebar2() {
  return (
    <aside className="flex h-screen w-72 rounded-lg overflow-hidden border border-[#E40046] bg-white">
      {/* ------------------------------------ */}
      {/* Columna izquierda: iconos */}
      <div className="w-14 flex flex-col items-center gap-6 py-4 border-r border-[#E40046]">
        {/* Logo cuadrado */}
        <div className="w-8 h-8 border border-[#E40046] rounded flex items-center justify-center text-[#E40046] font-bold">V</div>

        {/* Iconos verticales */}
        <a href="/dashboard" className="text-[#E40046] p-2 rounded hover:bg-red-50" aria-label="Equipo">
  <BookOpen size={18} />
</a>
        <button className="text-[#E40046] p-2 rounded hover:bg-red-50" aria-label="Perfil">
          <User size={18} />
        </button>
       <a href="/casos" className="text-[#E40046] p-2 rounded hover:bg-red-50" aria-label="Equipo">
  <Folder size={18} />
</a>
        <a href="/dashboard" className="text-[#E40046] p-2 rounded hover:bg-red-50" aria-label="Equipo">
  <Users size={18} />
</a>

        {/* icono inferior */}
        <div className="mt-auto" />
      </div>

      {/* ------------------------------------ */}
      {/* Columna central / contenido */}
      <div className="flex-1 p-4">
        {/* Buscador (pill) */}
        <div className="mb-4">
          <div className="flex items-center max-w-xs border border-[#E40046] rounded-full px-3 py-2">
            <Search className="w-4 h-4 text-[#E40046]" />
            <input
              className="ml-2 outline-none text-sm placeholder:text-gray-400"
              placeholder="Buscar Caso"
            />
          </div>
        </div>

        {/* + Añadir Caso */}
        <div className="mb-4">
          <button className="text-[#E40046] border border-[#E40046] rounded-full px-3 py-1 text-sm hover:bg-red-50">
            + Añadir Caso
          </button>
        </div>

        {/* Menú principal */}
        <nav className="text-[#E40046] text-sm leading-6">
          {/* Simple items */}
          <div className="flex items-center gap-2 py-1">
            <span className="w-2 h-2 bg-[#E40046] rounded-full inline-block" />
            <span># General</span>
          </div>

          <div className="flex items-center gap-2 py-1">
            <span className="w-2 h-2 bg-[#E40046] rounded-full inline-block" />
            <span># Información</span>
          </div>

          {/* Casos Abiertos with subitems */}
          <div className="mt-2">
            <div className="flex items-center gap-2 py-1">
              <span className="w-2 h-2 bg-[#E40046] rounded inline-block" />
              <span className="font-medium">Casos Abiertos</span>
            </div>

            <ul className="ml-5 mt-2 space-y-1 text-xs text-[#E40046]">
              <li># 200 - 321</li>
              <li># 200 - 321</li>
              <li># 200 - 321</li>
            </ul>
          </div>

          {/* Casos Cerrados with subitems */}
          <div className="mt-3">
            <div className="flex items-center gap-2 py-1">
              <span className="w-2 h-2 bg-[#E40046] rounded inline-block" />
              <span className="font-medium">Casos Cerrados</span>
            </div>

            <ul className="ml-5 mt-2 space-y-1 text-xs text-[#E40046]">
              <li># 200 - 321</li>
              <li># 200 - 321</li>
              <li># 200 - 321</li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
