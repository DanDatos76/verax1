import { Bell, ChevronDown, Search } from "lucide-react"; // Importamos Search de Lucide React
import Image from "next/image"; // Importamos el componente Image de Next.js para optimización

export default function Header() {
  return (
    // Eliminamos 'fixed', 'top-0', 'right-0', 'w-[calc(100%-224px)]'
    // El ancho será manejado por el contenedor flex-1 de Home.js
    <header className="bg-white p-4 border-b border-gray-200 flex items-center justify-between z-10"> {/* z-index ajustado si es necesario */}
      {/* Campo de búsqueda */}
      {/* Usamos 'flex-grow' en lugar de 'flex-1 max-w-lg' para que se expanda pero respete a los hermanos */}
      {/* Añadimos 'min-w-0' para que el input pueda reducirse si hay poco espacio */}
      <div className="relative flex-grow min-w-0 mr-4"> {/* Añadimos mr-4 para separación */}
        <input
          type="text"
          placeholder="Buscar por caso, compañía o persona"
          // Cambiamos w-full a flex-1 para un mejor ajuste en contenedores flex
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {/* Usamos el icono Search de Lucide React en lugar del SVG inline */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {/* Notificación y Perfil de Usuario */}
      <div className="flex items-center space-x-4 flex-shrink-0"> {/* Añadimos flex-shrink-0 */}
        {/* Notificación */}
        <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <Bell size={20} className="text-gray-600" />
          {/* Opcional: Indicador de nueva notificación */}
          {/* <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
        </button>

        {/* Avatar y Nombre/Rol */}
        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <Image
              src="/3a.jpg" // Asegúrate de tener esta imagen en tu carpeta 'public'
              alt="Cesar Perich"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>

          {/* Nombre y rol */}
          <div className="text-right leading-tight flex-shrink-0"> {/* Añadimos flex-shrink-0 */}
            <p className="text-gray-800 text-sm font-medium">Cesar Perich</p>
            <span className="text-xs text-gray-500">ADMIN</span>
          </div>

          {/* Flechita */}
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
}