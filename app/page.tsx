import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* COLUMNA IZQUIERDA */}
      <div className="w-2/5 flex flex-col">
        {/* Imagen superior (50% del alto) */}
        <div className="h-1/2">
          <img
            src="/111111.png"
            alt="Oficina"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Contenedor azul inferior (50% del alto) */}
        <div className="h-1/2 bg-[#0B2C55] text-white flex flex-col justify-between p-8">
          <div>
            <h3 className="text-sm tracking-wide font-light mb-2">
              ESTUDIO VERAX
            </h3>
            <h1 className="text-3xl font-semibold leading-snug">
              Análisis y cierre de siniestros
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 border-2 border-red-500 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium">
                Protección y precisión legal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* COLUMNA DERECHA */}
      <div className="w-3/5 flex i justify-center bg-white p-18 ">
        <div className="w-80 "> {/* Eliminamos el border del contenedor principal */}
          {/* Logo */}
          <div className="flex flex-col items-center mb-4 ">
            <img src="/verax-logo.jpg" alt="Verax" className="w-64 mb-2 mt-3" />
          </div>

          {/* Nuevo div para el formulario con el borde y el padding */}
          <div className="border-2 border-gray-300 rounded-3xl pt-12 pl-8 pr-8 pb-12 mt-8">
            {/* Título */}
            <h2 className="text-2xl font-semibold text-center mb-1 ">
              Iniciar sesión
            </h2>
            <p className="text-gray-500 text-sm text-center mb-4">
              Accedé a tu panel de análisis
            </p>

            {/* Formulario */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="usuario@empresa.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block  text-sm text-gray-600 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="text-right">
                <a href="#" className="text-sm text-red-500 hover:underline font-bold">
                  Perdí mi contraseña
                </a>
              </div>

              <Link href="/dashboard" className="block w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-2xl text-center transition-colors">
  Aceptar
</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}