"use client";// CrearCasoPopup.tsx
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: Record<string, any>) => void;
};

export default function CrearCasoPopup({ open, onClose, onSubmit }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      // focus primer campo
      setTimeout(() => firstInputRef.current?.focus(), 80);
    } else {
      document.removeEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, any> = {};
    fd.forEach((v, k) => {
      payload[k] = v;
    });
    if (onSubmit) onSubmit(payload);
    // por ahora cerramos (podés cambiar)
    onClose();
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="crear-caso-title"
    >
      <div className="w-[920px] max-w-full bg-white rounded-lg shadow-2xl overflow-hidden border-red-500">
        {/* Header rojo */}
        <div className="bg-[#E94B4B] px-7 py-4 flex items-center justify-between">
          <h3 id="crear-caso-title" className="text-white text-[20px] font-semibold">
            Crear Caso
          </h3>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="p-2 rounded-md hover:bg-white/10 text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form id="crearCasoForm" className="p-6" onSubmit={handleSubmit} autoComplete="off">
          {/* Row 1 */}
          <div className="flex gap-4 mb-3">
            <label className="flex-1 flex flex-col gap-2">
              <span className="text-xs font-bold text-[#000000]">Número de caso</span>
              <input
                ref={firstInputRef}
                name="numeroCaso"
                placeholder="# Ej: 4821"
                className="h-11 px-3 rounded-md border border-red-500 text-sm"
              />
            </label>

            <label className="flex-1 flex flex-col gap-2">
              <span className="text-xs font-bold text-[#000000]">Nro de caso empresa</span>
              <input
                name="numeroCasoEmpresa"
                placeholder="Ej: ACME-2025-01"
                className="h-11 px-3 rounded-xl border border-red-500 text-sm"
              />
            </label>
          </div>

          {/* Row 2 */}
          <div className="flex gap-4 mb-3">
            <label className="flex-1 flex flex-col gap-2">
              <span className="text-xs  font-bold text-[#000000]">Empresa solicitante</span>
              <select
                name="empresaSolicitante"
                className="h-11 px-3 rounded-xl border border-red-500 text-sm"
              >
                <option value="">Seleccionar empresa</option>
                {/* mapear opciones reales */}
              </select>
            </label>

            <label className="w-52 flex flex-col gap-2">
              <span className="text-xs  font-bold text-[#000000]">Tipo de caso</span>
              <select
                name="tipoCaso"
                className="h-11 px-3 rounded-xl border border-red-500 text-sm"
              >
                <option value="">Seleccionar tipo</option>
              </select>
            </label>
          </div>

          {/* Link carpeta */}
          <label className="mb-3 flex flex-col gap-2">
            <span className="text-xs font-bold text-[#070707]">Link a carpeta de trabajo</span>
            <input
              name="linkCarpeta"
              placeholder="https://drive.google.com/..."
              className="h-11 px-3 rounded-xl border border-red-500 text-sm"
            />
          </label>

          {/* Instrucción */}
          <label className="mb-3 flex flex-col gap-2">
            <span className="text-xs font-bold text-[#000000]">Instrucción</span>
            <textarea
              name="instruccion"
              placeholder="Escribe las instrucciones del caso..."
              className="resize-y h-28 px-3 py-2 rounded-xl border border-red-500 text-sm"
            />
          </label>

          {/* Asignados y Observación uno debajo del otro */}
          <div className="flex flex-col gap-3 mb-3">
            <label className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#0a0a0a]">Asignados</span>
              <input
                name="asignados"
                placeholder="Cesar Tomas"
                className="h-11 px-3 rounded-xl border border-red-500 text-sm"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#000000]">Observación</span>
              <input
                name="observacion"
                placeholder="Notas adicionales..."
                className="h-11 px-3 rounded-xl border border-red-500 text-sm"
              />
            </label>
          </div>

          <div className="mb-4 text-sm text-[#9b9b9b]">
            <small>Los campos con borde rojo son obligatorios</small>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-600 rounded-xl border border-red-500 text-sm text-[#ffffff] hover:bg-red-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-[#1266d6] text-white font-semibold text-sm shadow-md"
            >
              Crear Caso
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
