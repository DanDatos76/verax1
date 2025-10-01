import Image from "next/image";
import Link from "next/link";


   export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen">
      {/* Lado izquierdo */}
      <div className="w-1/2 bg-gradient-to-b from-gray-200 to-gray-400 relative flex flex-col items-center justify-center text-red-700">
        {/* Círculo superior */}
        <div className="absolute top-0 left-6 w-130 h-130 border border-red-700 rounded-full"></div>
        <h1 className="absolute top-16 left-16 text-lg font-semibold">ESTUDIO VERAX</h1>

        {/* Texto inferior */}
        <div className="absolute bottom-5 top-140 left-0 w-218 h-218 flex justify-center border border-red-700 rounded-full">
          <p className="text-2xl font-medium">Análisis y cierre de siniestros</p>
        </div>
      </div>

      {/* Lado derecho */}
      <div className="w-1/2  bg-white flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          <img
            src="/verax-logo.jpg"
            alt="Verax logo"
            width={280} // Ajusta el ancho
            height={150} // Ajusta la altura
            
            
          />
        </div>

        <h2 className="text-red-700 mb-6">Iniciar sesión</h2>

        {/* Formulario */}
        <form className="flex flex-col w-90 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-red-700 rounded px-4 py-2 focus:outline-none"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Contraseña"
              className="border border-red-700 rounded px-4 py-2 w-full focus:outline-none"
            />
            <span className="absolute right-3 top-2 text-red-700 cursor-pointer">
              👁️
            </span>
          </div>

          <a href="#" className="text-xs text-red-700 self-end">
            Perdí mi contraseña
          </a>
<Link
  href="../../dashboard"
  className="border border-red-700 text-red-700 rounded-3xl px-25 py-2 hover:bg-red-700 hover:text-white transition mt-10 inline-block text-center"
>
  Aceptar
</Link>
        </form>
      </div>
    </div>
  );
}

 