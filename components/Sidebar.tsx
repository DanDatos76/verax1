// components/Sidebar.js
import { LayoutDashboard, User, FolderOpen, Users, LogOut } from "lucide-react"; // Importamos los iconos correctos y LogOut
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-56 bg-[#0B2C55] text-white flex flex-col justify-between p-4 z-50"> {/* Ajustes de color, posición y z-index */}
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-8"> {/* Ajuste de margen inferior */}
        <img src="/verax-logo.jpg" alt="Verax logo" className="w-35 h-auto" /> {/* Asumiendo un logo blanco para el fondo oscuro */}
      </div>

      {/* Menú */}
      <nav className="flex-1 space-y-4 text-white mt-5"> {/* Ajuste de espaciado */}
        {/* Panel */}
        <Link href="/dashboard" className="flex items-center space-x-3 p-2 rounded-lg bg-red-600"> {/* Clases para el elemento activo */}
          <LayoutDashboard size={20} /> {/* Icono de panel de control */}
          <span className="font-semibold text-white ">Panel</span> {/* Texto semi-negrita */}
        </Link>
        {/* Perfil */}
        <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors"> {/* Clases de hover y transición */}
          <User size={20} />
          <span>Perfil</span>
        </Link>
        {/* Casos */}
        <Link href="/casos" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
          <FolderOpen size={20} /> {/* Icono de carpeta abierta */}
          <span>Casos</span>
        </Link>
        {/* Gestionar usuarios */}
        <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
          <Users size={20} />
          <span>Gestionar usuarios</span>
        </Link>
      </nav>

      {/* Botón Cerrar Sesión */}
      <Link
        href="/"
        className="mt-auto w-full bg-red-600 text-white font-medium py-2 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-red-700 transition-colors" // Estilos mejorados
      >
        <LogOut size={18} /> {/* Icono de cerrar sesión */}
        <span>Cerrar Sesión</span>
      </Link>
    </div>
  );
}