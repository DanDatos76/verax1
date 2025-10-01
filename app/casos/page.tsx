import Header from "@/components/Header";
import DocumentPanel from "@/components/DocumentPanel";
import ChatPanel from "@/components/ChatPanel";
import Sidebar2 from "@/components/Sidebar2";

export default function Home() {
  return (
    <main className="flex h-screen bg-white text-sm text-gray-800">
      {/* Sidebar */}
      <Sidebar2 />

      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        <div className="mt-20 flex flex-1 p-4 gap-4">
          {/* Panel documento */}
          <div className="flex-1 border border-[#E40046] rounded-lg p-4 bg-white">
            <DocumentPanel />
          </div>

          {/* Panel chat */}
          <div className="w-1/3 border border-[#E40046] rounded-lg p-4 flex flex-col">
            <ChatPanel />
          </div>
        </div>
      </div>
    </main>
  );
}
