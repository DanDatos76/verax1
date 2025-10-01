// components/Sidebar.js
import { BookOpen, User, Map, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-screen w-56 bg-white border-r flex flex-col justify-between p-4 rounded-r-2xl shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-10">
        <img src="/verax-logo.jpg" alt="Verax logo" className="w-28 h-auto" />
      </div>

      {/* Menú */}
      <nav className="flex-1 space-y-6 text-red-600">
        <a href="/dashboard" className="flex items-center space-x-2 hover:text-red-400">
          <BookOpen size={18} />
          <span>Panel</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-red-400">
          <User size={18} />
          <span>Perfil</span>
        </a>
        <a href="/casos" className="flex items-center space-x-2 hover:text-red-400">
          <Map size={18} />
          <span>Casos</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-red-400">
          <Users size={18} />
          <span>Gestionar usuarios</span>
        </a>
      </nav>

      {/* Botón Cerrar Sesión */}
      <button className="mt-6 w-full border border-red-600 text-red-600 rounded-full py-2 hover:bg-red-50 transition">
        Cerrar Sesión
      </button>
    </div>
  );
}
