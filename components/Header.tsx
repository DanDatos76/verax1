import { FaBell, FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-4/5 flex justify-end items-center border border-red-500 rounded-full px-4 py-2 fixed top-4 right-4 bg-white z-50">
      {/* Notificación */}
      <FaBell className="text-red-500 mr-2" />

      {/* Nombre y rol */}
      <div className="text-right mr-3 leading-tight">
        <p className="text-red-600 text-sm">Cesar Perich</p>
        <span className="text-xs text-red-500 font-bold">ADMIN</span>
      </div>

      {/* Avatar */}
      <div className="w-8 h-8 border border-red-500 rounded-full flex items-center justify-center mr-2">
        {/* Puedes poner inicial o imagen */}
      </div>

      {/* Flechita */}
      <FaChevronDown className="text-red-500" />
    </header>
  );
}
