import Header from "@/components/Header";
import DocumentPanel from "@/components/DocumentPanel";
import ChatPanel from "@/components/ChatPanel";
import Sidebar2 from "@/components/Sidebar2";

export default function Home() {
  return (
    <main className="flex h-screen bg-white text-sm text-gray-800">
      {/* Sidebar */}
      <Sidebar2 />

      {/* Contenedor principal para el Header y los Paneles */}
      {/* Usamos flex-col para apilar el Header y luego los Paneles */}
      <div className="flex flex-1 flex-col">
        {/* Header - No necesita padding aquí si ya lo tiene internamente */}
        <Header />

        {/* Contenedor de los Paneles - Ocupa el espacio restante */}
        {/* Agregamos el padding aquí y quitamos el mt-20 */}
        <div className="flex flex-1 p-6 gap-4"> {/* Eliminado mt-20 y movido p-6 aquí */}
          {/* Panel documento */}
          <div className="flex-1 border border-black rounded-lg p-4 bg-white">
            <DocumentPanel />
          </div>

          {/* Panel chat */}
          <div className="w-1/2 border border-black rounded-lg p-4 flex flex-col">
            <ChatPanel />
          </div>
        </div>
      </div>
    </main>
  );
}