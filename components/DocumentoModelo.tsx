"use client";

const DocumentModelo = () => {
  return (
    <div className="border-2 border-blue-400 bg-white h-3/5 p-6 overflow-y-auto">
      {/* Logo + Header */}
      <div className="flex items-center justify-between border-b-2 border-[#E40046] pb-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border border-[#E40046] flex items-center justify-center font-bold text-[#E40046]">
            V
          </div>
          <h1 className="text-xl font-bold text-[#E40046]">Verax</h1>
        </div>
      </div>

      {/* Requerente */}
      <div className="mb-4 text-xs leading-5">
        <p>
          <span className="font-semibold">REQUERENTE:</span> SANCOR SEGUROS
        </p>
        <p>
          <span className="font-semibold">Siniestro:</span> 29829708
        </p>
        <p>
          <span className="font-semibold">Solicitante:</span> 73352353
        </p>
        <p>
          <span className="font-semibold">N° Informe:</span> 72142323
        </p>
      </div>

      {/* Conclusiones */}
      <div className="border border-[#E40046] p-3 text-xs mb-6">
        <p className="font-bold text-[#E40046] mb-1">CONCLUSIONES Y SUGERENCIAS</p>
        <p>
          DOMICILIO USO COMERCIAL CONSTATADO - RECHAZAR
        </p>
        <p>
          Vivienda con local habilitado de giro no asegurado ni lugar prohibido. Se impone en
          consecuencia RECHAZAR COBERTURA.
        </p>
      </div>

      {/* Sello RECHAZO */}
      <div className="mb-6">
        <span className="bg-[#E40046] text-white font-bold px-6 py-2 text-lg rounded">
          RECHAZO
        </span>
      </div>

      {/* Tabla de datos */}
      <table className="w-full text-xs border border-[#E40046]">
        <tbody>
          <tr className="border-b border-[#E40046]">
            <td className="p-2 font-semibold">Requirente</td>
            <td className="p-2">SANCOR SEGUROS</td>
            <td className="p-2 font-semibold">Nº Reg. Interno</td>
            <td className="p-2">168</td>
          </tr>
          <tr className="border-b border-[#E40046]">
            <td className="p-2 font-semibold">Nº Póliza</td>
            <td className="p-2">1098751</td>
            <td className="p-2 font-semibold">Riesgo</td>
            <td className="p-2">DOMICILIO/ACCIDENTE</td>
          </tr>
          <tr className="border-b border-[#E40046]">
            <td className="p-2 font-semibold">Tipo</td>
            <td className="p-2">MOTOVEHÍCULO</td>
            <td className="p-2 font-semibold">Localidad</td>
            <td className="p-2">LANÚS</td>
          </tr>
          <tr className="border-b border-[#E40046]">
            <td className="p-2 font-semibold">Vehículo</td>
            <td className="p-2">YAMAHA YBR CH 117</td>
            <td className="p-2 font-semibold">Fecha del Hecho</td>
            <td className="p-2">23/12/2022</td>
          </tr>
          <tr className="border-b border-[#E40046]">
            <td className="p-2 font-semibold">Domicilio</td>
            <td className="p-2">SALTÓ 748 LANÚS</td>
            <td className="p-2 font-semibold">Fecha Informe</td>
            <td className="p-2">26/12/2022</td>
          </tr>
          <tr>
            <td className="p-2 font-semibold">Solicitante</td>
            <td className="p-2">AXEL ERIGO</td>
            <td className="p-2 font-semibold">Teléfono</td>
            <td className="p-2">011 156867302</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DocumentModelo;
