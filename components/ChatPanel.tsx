import Image from "next/image"; // Importamos Image de Next.js
import { BookOpen, Folder, FileText, MessageCircle, Paperclip, Lock } from "lucide-react"; // Nuevos iconos para los botones

const ChatPanel = () => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg p-0 border-black  bg-shadow-sm"> {/* Eliminado border-[#E40046], padding se manejará internamente */}
      {/* Header del Chat Panel */}
      <div className="px-4 pt-4 pb-2 border-b border-gray-200">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-gray-800 text-base font-semibold">Comunicación del Caso</h3>
          <p className="text-right">
            <span className="text-gray-600 text-xs font-semibold">Caso #4821</span>
            <br />
            <span className="text-gray-500 text-xs">Última actualización: hoy 12:40</span>
          </p>
        </div>
        {/* Botones de Navegación/Filtro */}
        <div className="flex gap-2 text-sm mt-3">
          <button className="flex items-center gap-2 px-5 py-1.5 bg-[#4A648D] text-white rounded-2xl hover:bg-[#3B547A] transition-colors">
            <BookOpen size={16} /> Instrucción
          </button>
          <button className="flex items-center gap-2 px-5 py-1.5 bg-[#4A648D] text-white rounded-2xl hover:bg-[#3B547A] transition-colors">
            <Folder size={16} /> Carpeta Trabajo
          </button>
          <button className="flex items-center gap-2 px-5 py-1.5 bg-[#4A648D] text-white rounded-2xl hover:bg-[#3B547A] transition-colors">
            <FileText size={16} /> Facturación
          </button>
        </div>
      </div>

      {/* Filtros de Mensajes */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <button className="flex items-center gap-2 px-3 py-1 bg-[#4A648D] text-white rounded-full text-xs hover:bg-[#3B547A] transition-colors">
          <MessageCircle size={14} /> Todos los mensajes
        </button>
        <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors">
          <Paperclip size={14} /> Adjuntos
        </button>
      </div>

      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto space-y-6 p-4"> {/* Añadido padding aquí */}
        {/* Mensaje 1 (Cesar Perich) */}
        <div className="flex items-start gap-3"> {/* Aumentado el gap */}
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/3a.jpg" alt="Tomas" width={32} height={32} className="object-cover" />

          </div>
          <div className="bg-gray-100 p-3 rounded-xl rounded-tl-sm max-w-[85%]"> {/* Estilo de burbuja de chat */}
            <p className="text-gray-800 text-sm font-medium leading-tight">
              Cesar Perich <span className="text-gray-500 text-xs ml-1">Sep 26 12:52</span>
            </p>
            <p className="text-gray-700 text-sm mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              
            </p>
          </div>
        </div>

        {/* Mensaje con imágenes (Tomas) */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            {/* CORRECCIÓN AQUÍ: Cambiado "../../assss.jpg" a "/assss.jpg" o la URL completa si es externa */}
            <Image src="/3a.jpg" alt="Tomas" width={32} height={32} className="object-cover" />
          </div>
          <div className="bg-[#bcc7e4] p-3 rounded-xl rounded-tl-sm max-w-[85%]">
            <p className="text-gray-800 text-sm font-medium leading-tight">
              Tomas <span className="text-gray-500 text-xs ml-1">Sep 26 12:56</span>
            </p>
            <p className="text-gray-700 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="flex gap-2 mt-2">
              <div className="w-1/2 rounded-lg overflow-hidden">
                <Image src="/assss.jpg" alt="Imagen 1" width={200} height={150} className="object-cover w-full h-auto" />
              </div>
              <div className="w-1/2 rounded-lg overflow-hidden">
                <Image src="/4578.jpg" alt="Imagen 2" width={200} height={150} className="object-cover w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        

        {/* Mensaje 4 (Cesar Perich) */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/3a.jpg" alt="Cesar Perich" width={32} height={32} className="object-cover" />
          </div>
          <div className="bg-gray-100 p-3 rounded-xl rounded-tl-sm max-w-[85%]">
            <p className="text-gray-800 text-sm font-medium leading-tight">
              Cesar Perich <span className="text-gray-500 text-xs ml-1">Sep 26 13:01</span>
            </p>
            <p className="text-gray-700 text-sm mt-1">
              <span className="text-[#E40046] font-semibold">@Tomas</span> lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Input mensaje y Botón "Solo Admin" */}
      <div className="relative px-4 pb-4 pt-2 border-t border-gray-200"> {/* Añadido padding */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Mensaje..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#E40046]"
          />
          <button className="flex items-center gap-1 px-4 py-2 bg-[#E40046] text-white rounded-lg text-sm hover:bg-red-600 transition-colors">
            <Paperclip size={16} /> Adjuntar
          </button>
        </div>
        {/* Botón "Solo Admin" */}
        <button className="absolute -top-12 right-6 px-3 py-1.5 bg-[#E40046] text-white text-xs font-medium rounded-full shadow-md flex items-center gap-1 hover:bg-red-600 transition-colors">
          <Lock size={12} /> Solo Admin
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;