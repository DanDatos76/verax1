export default function Pie() {
  return (
    <div className="bg-[#0B2C55] text-white p-6 flex items-center space-x-3 rounded-lg">
      {/* Icono con marco rojo */}
      <div className="flex items-center justify-center w-10 h-10 border-2 border-red-500 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2"
          />
        </svg>
      </div>

      {/* Texto */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-medium">Protección y precisión legal</span>
        <span className="text-xs text-gray-400">Frame</span>
      </div>
    </div>
  );
}
