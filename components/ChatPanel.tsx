const ChatPanel = () => {
  return (
    <div className="flex flex-col h-full border border-[#E40046] rounded-lg p-4">
      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto space-y-6 mb-2">
        {/* Mensaje 1 */}
        <div className="flex items-start gap-2">
          {/* Avatar */}
          <div className="w-6 h-6 rounded-full border border-[#E40046]" />
          <div>
            <p className="text-sm font-semibold text-[#E40046]">
              Cesar Perich <span className="text-gray-500">- Sep 26 12:52</span>
            </p>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Mensaje con imágenes */}
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full border border-[#E40046]" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#E40046]">
              Tomas <span className="text-gray-500">- Sep 26 12:56</span>
            </p>
            <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="flex gap-2 mt-2">
              <div className="w-1/2 h-52 bg-[#E40046] text-white flex items-center justify-center text-sm">
                Imagen
              </div>
              <div className="w-1/2 h-52 bg-[#E40046] text-white flex items-center justify-center text-sm">
                Imagen
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje 3 */}
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full border border-[#E40046]" />
          <div>
            <p className="text-sm font-semibold text-[#E40046]">
              Cesar Perich <span className="text-gray-500">- Sep 26 12:57</span>
            </p>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Mensaje 4 con @ */}
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full border border-[#E40046]" />
          <div>
            <p className="text-sm font-semibold text-[#E40046]">
              Cesar Perich <span className="text-gray-500">- Sep 26 13:01</span>
            </p>
            <p className="text-xs text-gray-600">
              @Tomas lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Input mensaje */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Mensaje..."
          className="flex-1 border border-[#E40046] rounded-md px-2 text-sm"
        />
        <button className="px-2 py-1 border border-[#E40046] text-[#E40046] rounded-full text-xs hover:bg-red-50">
          Subir archivos
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
